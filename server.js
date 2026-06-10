const express = require('express');
const rateLimit = require('express-rate-limit');
const crypto = require('crypto');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const MAX_SSE_CLIENTS = parseInt(process.env.MAX_SSE_CLIENTS || '50', 10);
const OFFLINE_THRESHOLD_MS = 15_000;

// ── Required secrets — fail fast on startup ──────────────────────────────────

const DEVICE_TOKEN   = process.env.DEVICE_TOKEN;
const DASHBOARD_USER = process.env.DASHBOARD_USER;
const DASHBOARD_PASS = process.env.DASHBOARD_PASS;

if (!DEVICE_TOKEN) {
  console.error('FATAL: DEVICE_TOKEN env var is required. Set it and restart.');
  process.exit(1);
}
if (!DASHBOARD_USER || !DASHBOARD_PASS) {
  console.error('FATAL: DASHBOARD_USER and DASHBOARD_PASS env vars are required. Set them and restart.');
  process.exit(1);
}

// Limit request body size to block oversized payloads
app.use(express.json({ limit: '4kb' }));

// ── Auth helpers ─────────────────────────────────────────────────────────────

// Always runs the comparison even on length mismatch — prevents timing oracle
function safeCompare(a, b) {
  const len = Math.max(Buffer.byteLength(a), Buffer.byteLength(b));
  const bufA = Buffer.alloc(len);
  const bufB = Buffer.alloc(len);
  Buffer.from(a).copy(bufA);
  Buffer.from(b).copy(bufB);
  return crypto.timingSafeEqual(bufA, bufB) && a.length === b.length;
}

function basicAuth(req, res, next) {
  const header = req.headers['authorization'] || '';
  if (!header.startsWith('Basic ')) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Pi Dashboard"');
    return res.status(401).send('Unauthorized');
  }
  const decoded = Buffer.from(header.slice(6), 'base64').toString('utf8');
  const colon = decoded.indexOf(':');
  if (colon === -1) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Pi Dashboard"');
    return res.status(401).send('Unauthorized');
  }
  const user = decoded.slice(0, colon);
  const pass = decoded.slice(colon + 1);
  if (!safeCompare(user, DASHBOARD_USER) || !safeCompare(pass, DASHBOARD_PASS)) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Pi Dashboard"');
    return res.status(401).send('Unauthorized');
  }
  next();
}

// ── Rate limiting ─────────────────────────────────────────────────────────────

const pingLimiter = rateLimit({
  windowMs: 60_000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
});

// ── State ────────────────────────────────────────────────────────────────────

let deviceState = {
  online:   false,
  paired:   false,
  deviceId: null,
  lastSeen: null,
  ip:       null,
  meta:     {},
};

const sseClients = new Set();

function broadcast(payload) {
  const data = `data: ${JSON.stringify(payload)}\n\n`;
  for (const client of sseClients) {
    client.write(data);
  }
}

function currentPayload() {
  return { ...deviceState, serverTime: Date.now() };
}

// Background watcher — marks device offline if no ping within threshold
setInterval(() => {
  if (
    deviceState.online &&
    deviceState.lastSeen !== null &&
    Date.now() - deviceState.lastSeen > OFFLINE_THRESHOLD_MS
  ) {
    deviceState.online = false;
    broadcast(currentPayload());
  }
}, 5_000);

// ── Routes ───────────────────────────────────────────────────────────────────

// POST /api/ping — receives heartbeat from Pi
app.post('/api/ping', pingLimiter, (req, res) => {
  const token = req.headers['x-device-token'] || '';
  if (!safeCompare(token, DEVICE_TOKEN)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { deviceId, meta } = req.body;

  if (typeof deviceId !== 'string' || deviceId.length === 0 || deviceId.length > 64) {
    return res.status(400).json({ error: 'deviceId must be a non-empty string ≤ 64 chars' });
  }
  if (meta !== undefined && (meta === null || typeof meta !== 'object' || Array.isArray(meta))) {
    return res.status(400).json({ error: 'meta must be a plain object' });
  }

  // Allowlist meta fields — never store or broadcast arbitrary client data
  const safeMeta = {};
  if (meta) {
    if (typeof meta.cpu_temp_c === 'number' && isFinite(meta.cpu_temp_c)) safeMeta.cpu_temp_c = meta.cpu_temp_c;
    if (typeof meta.uptime_s   === 'number' && isFinite(meta.uptime_s))   safeMeta.uptime_s   = meta.uptime_s;
  }

  const wasOnline = deviceState.online;
  const prevId    = deviceState.deviceId;

  deviceState = {
    online:   true,
    paired:   true,
    deviceId,
    lastSeen: Date.now(),
    ip: req.headers['x-forwarded-for']?.split(',')[0].trim() ?? req.socket.remoteAddress,
    meta: safeMeta,
  };

  if (!wasOnline || prevId !== deviceId) {
    broadcast(currentPayload());
  }

  res.json({ ok: true, serverTime: Date.now() });
});

// GET /api/status — SSE stream for browser clients (requires Basic Auth)
app.get('/api/status', basicAuth, (req, res) => {
  if (sseClients.size >= MAX_SSE_CLIENTS) {
    return res.status(503).json({ error: 'Too many connections' });
  }

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders();

  res.write(`data: ${JSON.stringify(currentPayload())}\n\n`);

  sseClients.add(res);
  req.on('close', () => sseClients.delete(res));
});

// GET /device — serves dashboard (requires Basic Auth)
app.get('/device', basicAuth, (req, res) => {
  res.sendFile(path.join(__dirname, 'device.html'));
});

app.listen(PORT, () => {
  console.log(`Pi dashboard running on http://localhost:${PORT}`);
});
