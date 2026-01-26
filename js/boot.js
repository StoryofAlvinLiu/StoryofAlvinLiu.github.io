// Boot Sequence JavaScript - WITH SKIP BUTTON & MOBILE FIXES

let screens = ['logo', 'boot', 'console'];
let booted = false;
let locked = false;
let t = 12;
let timer;

const show = (i) => {
  screens.forEach(s => document.getElementById(s).classList.remove('active'));
  document.getElementById(screens[i]).classList.add('active');
};
function skipLoading() {
  if (timer) clearInterval(timer);
  document.onkeydown = null;
  const bootSequence = document.getElementById('bootSequence');
  bootSequence.style.transition = 'opacity 0.5s';
  bootSequence.style.opacity = '0';
  setTimeout(() => {
    bootSequence.style.display = 'none';
    const portfolioContent = document.getElementById('portfolioContent');
    portfolioContent.style.display = 'block';
    setTimeout(() => portfolioContent.classList.add('visible'), 50);
  }, 500);
}

// Skip Loading Button Functionality
function skipToPortfolio() {
  if (timer) clearInterval(timer);
  document.onkeydown = null;

  const bootSequence = document.getElementById('bootSequence');
  const skipBtn = document.getElementById('skipLoadingBtn');

  bootSequence.style.transition = 'opacity 0.5s';
  bootSequence.style.opacity = '0';
  if (skipBtn) skipBtn.style.display = 'none';

  setTimeout(() => {
    bootSequence.style.display = 'none';
    const portfolioContent = document.getElementById('portfolioContent');
    portfolioContent.style.display = 'block';
    setTimeout(() => portfolioContent.classList.add('visible'), 50);
  }, 500);
}

// Show skip button when boot screen appears
function showSkipButton() {
  const skipBtn = document.getElementById('skipLoadingBtn');
  if (skipBtn) setTimeout(() => skipBtn.classList.add('visible'), 100);
}

// Make skipToPortfolio available globally
window.skipToPortfolio = skipToPortfolio;

// Wait 0.5s, then show logo with fade in/out for 2.5s
setTimeout(() => {
  const logoEl = document.getElementById('logo');
  logoEl.classList.add('active');

  // Double requestAnimationFrame ensures browser has painted before animating
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      logoEl.style.transition = 'opacity 0.8s';
      logoEl.style.opacity = '1';
    });
  });

  // Fade out after 1.7s
  setTimeout(() => {
    logoEl.style.opacity = '0';
  }, 1700);

  // After fade out completes, show boot screen
  setTimeout(() => {
    show(1);
    setTimeout(() => { document.getElementById('skipLoadingBtn').style.opacity = '1'; document.getElementById('skipLoadingBtn').style.pointerEvents = 'auto'; }, 100);

    startTimer();
    showSkipButton(); // Show skip button when boot menu appears
  }, 2500);
}, 500);

function startTimer() {
  timer = setInterval(() => {
    t--;
    timerEl.textContent = t;
    if (t <= 0) boot();
  }, 1000);
}

const timerEl = document.getElementById('timer');

document.addEventListener('keydown', (e) => {
  if (e.key == 'Enter' && !booted) boot();
});

document.getElementById('bootOption').onclick = boot;

function boot() {
  if (booted) return;
  booted = true;
  clearInterval(timer);
  show(2);
  startConsole();
}

const terminal = document.getElementById('terminal');

// Terminal functions
function typeLine(text, delay = 0, speed = 18) {
  return new Promise(res => {
    if (!text) {
      res();
      return;
    }

    setTimeout(() => {
      const div = document.createElement('div');
      div.className = 'line';
      terminal.appendChild(div);

      let i = 0;
      const typer = setInterval(() => {
        div.textContent = text.slice(0, i);
        terminal.scrollTop = terminal.scrollHeight;
        i++;
        if (i > text.length) {
          clearInterval(typer);
          res();
        }
      }, speed);
    }, delay);
  });
}

function instantLine(text) {
  return new Promise(res => {
    const div = document.createElement('div');
    div.className = 'line';
    div.textContent = text;
    terminal.appendChild(div);
    terminal.scrollTop = terminal.scrollHeight;
    res();
  });
}

function progressLine(prefix) {
  return new Promise(res => {
    const div = document.createElement('div');
    div.className = 'line';
    terminal.appendChild(div);

    let p = 0;
    const run = setInterval(() => {
      p++;
      div.textContent = prefix + p + '%';
      terminal.scrollTop = terminal.scrollHeight;
      if (p >= 100) {
        clearInterval(run);
        res();
      }
    }, 15);
  });
}

async function startConsole() {
  if (locked) return;
  locked = true;

  terminal.innerHTML = '';

  let now = new Date();
  const cores = navigator.hardwareConcurrency || 0;
  let ramDisplay = navigator.deviceMemory ?
    `${navigator.deviceMemory}GB` :
    'UNKNOWN [UNAUTHORIZED]';
  let bluetoothDisplay = 'UNKNOWN [UNAUTHORIZED]';
  let location = 'UNKNOWN [UNAUTHORIZED]';

  try {
    location = `Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`;
  } catch (e) {}

  const touchscreen = window.matchMedia('(pointer:coarse)').matches ? 'true' : 'false';

  let powerLevel = 'N/A (Desktop)';
  if ('getBattery' in navigator) {
    try {
      const battery = await navigator.getBattery();
      powerLevel = `${Math.round(battery.level * 100)}% ${battery.charging ? '(Charging)' : '(Discharging)'}`;
    } catch (e) {}
  }

  let gpu = 'None';
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl) {
      gpu = gl.getParameter(gl.RENDERER);
    }
  } catch (e) {}

  const resolution = `${screen.width}x${screen.height}`;

  await instantLine('ALVINLIU (R) 2005 - Office of Alvin Liu, Inc...');
  await typeLine('OS: Windows (Win32)', 200);
  await typeLine(`Cores: ${cores}`, 0);
  await typeLine(`RAM: ${ramDisplay}`, 0);
  await typeLine(`GPU: ${gpu}`, 0);
  await typeLine(`Resolution: ${resolution}`, 0);
  await typeLine(`Bluetooth: ${bluetoothDisplay}`, 0);
  await typeLine(`Touchscreen: ${touchscreen}`, 0);
  await typeLine(`Power Level: ${powerLevel}`, 0);
  await typeLine(`Date: ${now.toISOString()}`, 0);
  await typeLine(`Location: ${location}`, 0);
  await typeLine('Attempting to establish connection...', 200);
  await progressLine('Connection: ');
  await instantLine('Connection Established');
  await typeLine('Verifying...', 200);
  await typeLine('Failed to verify unknown client.', 200);
  await typeLine('Please enter applicable protocol number', 200);
  await typeLine('1. Recruiter', 150);
  await typeLine('2. Casual Viewer', 0);
  await typeLine('3. Player (coming soon!)', 0);

  inputPrompt();
}

function inputPrompt() {
  const wrap = document.createElement('div');
  wrap.className = 'line';
  // FIXED: Proper HTML structure with cursor class
  wrap.innerHTML = '<span id="typed"></span><span class="cursor">_</span>';
  terminal.appendChild(wrap);
  terminal.scrollTop = terminal.scrollHeight;

  let buffer = '';
  let cursorVisible = true;
  const cursorElement = wrap.querySelector('.cursor');

  const blinkInterval = setInterval(() => {
    cursorVisible = !cursorVisible;
    cursorElement.style.visibility = cursorVisible ? 'visible' : 'hidden';
  }, 530);

  // Mobile-friendly: Create invisible input field
  const hiddenInput = document.createElement('input');
  hiddenInput.type = 'text';
  hiddenInput.style.position = 'absolute';
  hiddenInput.style.opacity = '0';
  hiddenInput.style.left = '-9999px';
  document.body.appendChild(hiddenInput);

  // Focus the hidden input on mobile
  if (window.matchMedia('(pointer:coarse)').matches) {
    setTimeout(() => hiddenInput.focus(), 100);
  }

  // Handle hidden input changes (for mobile)
  hiddenInput.addEventListener('input', (e) => {
    buffer = e.target.value;
    document.getElementById('typed').textContent = buffer;
    terminal.scrollTop = terminal.scrollHeight;
  });

  hiddenInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      clearInterval(blinkInterval);
      document.onkeydown = null;
      hiddenInput.remove();
      verify(buffer);
    }
  });

  // Desktop keyboard handler
  document.onkeydown = (e) => {
    if (e.key == 'Backspace') {
      e.preventDefault();
      buffer = buffer.slice(0, -1);
      hiddenInput.value = buffer;
    } else if (e.key == 'Enter') {
      clearInterval(blinkInterval);
      document.onkeydown = null;
      hiddenInput.remove();
      verify(buffer);
      return;
    } else if (e.key.length == 1) {
      buffer += e.key;
      hiddenInput.value = buffer;
    }
    document.getElementById('typed').textContent = buffer;
    terminal.scrollTop = terminal.scrollHeight;
  };

  // Click anywhere on console to focus input (mobile)
  const clickHandler = () => hiddenInput.focus();
  terminal.addEventListener('click', clickHandler);
}

function verify(val) {
  typeLine('Verifying...', 100).then(() => {
    setTimeout(() => {
      typeLine('Access Granted. Welcome to the Office of Alvin Liu.', 0).then(() => {
        setTimeout(() => {
          // Fade out boot sequence
          const bootSequence = document.getElementById('bootSequence');
          const skipBtn = document.getElementById('skipLoadingBtn');

          bootSequence.style.transition = 'opacity 0.9s';
          bootSequence.style.opacity = '0';
          if (skipBtn) skipBtn.style.display = 'none';

          // Show portfolio content
          setTimeout(() => {
            bootSequence.style.display = 'none';
            const portfolioContent = document.getElementById('portfolioContent');
            portfolioContent.style.display = 'block';

            // Trigger fade-in
            setTimeout(() => {
              portfolioContent.classList.add('visible');
            }, 50);
          }, 900);
        }, 1800);
      });
    }, 600);
  });
}
