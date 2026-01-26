// Certifications & Tools Page JavaScript

// ============================================================================
// 🎯 REAL CERTIFICATIONS FROM LINKEDIN
// ============================================================================

const certificationsData = [
  {
    title: "Cyber Security Breach Simulation",
    issuer: "Deloitte",
    date: "Dec 2025",
    credentialId: "X5mQugWwknC95qYhx",
    credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Deloitte%20US/2ZC8h28mXbf5jj8vX_Deloitte%20US_X5mQugWwknC95qYhx_1733633906746_completion_certificate.pdf",
    icon: "🛡️",
    category: "cybersecurity",
    description: "Completed job simulation involving reading web activity logs and cyber security incident response"
  },
  {
    title: "Internal Audit Job Simulation",
    issuer: "Goldman Sachs (via Forage)",
    date: "Dec 2025",
    credentialId: "b8emRCDoo8zyCiEao",
    credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/HhyRYjQb7AXQTy54A_Goldman%20Sachs_b8emRCDoo8zyCiEao_1733616726648_completion_certificate.pdf",
    icon: "💼",
    category: "business",
    description: "Completed job simulation for Internal Audit at Goldman Sachs"
  },
  {
    title: "Basic Life Support (CPR and AED)",
    issuer: "American Heart Association",
    date: "Nov 2025",
    expires: "Nov 2027",
    credentialId: "265417401704",
    credentialUrl: "https://www.linkedin.com/in/alvinliusa/details/certifications/",
    icon: "❤️",
    category: "healthcare",
    description: "CPR and AED certification for emergency response",
    skills: ["CPR", "AED", "Basic Life Support"]
  },
  {
    title: "Detecting and Responding to Cyber Attacks",
    issuer: "U.S. Department of Homeland Security",
    date: "Oct 2025",
    credentialId: "7A75749FFC2375DD502367D98608A15C45224189F788DA7A1ECAF37A4BACB597",
    credentialUrl: "https://www.linkedin.com/in/alvinliusa/details/certifications/",
    icon: "🔒",
    category: "cybersecurity",
    description: "Texas A&M Engineering Extension + National Emergency Response Training. Malware detection and computer protection"
  },
  {
    title: "Introduction to CISA Gateway",
    issuer: "Cybersecurity and Infrastructure Security Agency",
    date: "Oct 2025",
    credentialId: "1-2050-00002516-0000293366-0001-3",
    credentialUrl: "https://www.linkedin.com/in/alvinliusa/details/certifications/",
    icon: "🔐",
    category: "cybersecurity",
    description: "US Department of Homeland Security cybersecurity fundamentals"
  },
  {
    title: "Food Handler Certificate",
    issuer: "eFoodcard",
    date: "Oct 2024",
    expires: "Oct 2027",
    credentialId: "eFC12606947ANAB",
    credentialUrl: "https://www.linkedin.com/in/alvinliusa/details/certifications/",
    icon: "🍽️",
    category: "professional",
    description: "ANAB-accredited food handler certification"
  },
  {
    title: "Building a Personal Brand",
    issuer: "Forage",
    date: "May 2024",
    credentialId: "krQEF8Yc6EwErFqKf",
    credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/British%20Airways/NjynCWzGSaWXQCxSX_British%20Airways_krQEF8Yc6EwErFqKf_1715736002568_completion_certificate.pdf",
    icon: "📢",
    category: "marketing",
    description: "Personal branding and professional presence strategies"
  },
  {
    title: "Managing Self-Doubt and Imposter Syndrome",
    issuer: "Ashurst UK (via Forage)",
    date: "Jan 2024",
    credentialId: "PRXzs5DLE2N5ZpvKS",
    credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Ashurst/YMdhuM2BW3WpSGima_Ashurst_PRXzs5DLE2N5ZpvKS_1704344577506_completion_certificate.pdf",
    icon: "🧠",
    category: "professional",
    description: "Mental health and professional development simulation"
  },
  {
    title: "Student Self Leadership Program",
    issuer: "Blanchard",
    date: "Sep 2022",
    credentialUrl: "https://www.linkedin.com/in/alvinliusa/details/certifications/",
    icon: "👥",
    category: "leadership",
    description: "Leadership development and self-management skills"
  },
  {
    title: "Hip Hop Hackathon - First Place Overall",
    issuer: "Hip Hop Hackathon",
    date: "Aug 2022",
    credentialId: "56065736",
    credentialUrl: "https://www.linkedin.com/in/alvinliusa/details/certifications/",
    icon: "🏆",
    category: "competition",
    description: "First place winner in competitive hackathon",
    skills: ["Figma", "UI/UX Design", "Google Workspace"]
  },
  {
    title: "SEO Certified",
    issuer: "HubSpot Academy",
    date: "May 2023",
    expired: true,
    credentialId: "e8c23bd3210243a68f871b01bf56c30c",
    credentialUrl: "https://academy.hubspot.com/achievements/e8c23bd3210243a68f871b01bf56c30c",
    icon: "🔍",
    category: "marketing",
    description: "Search engine optimization fundamentals"
  },
  {
    title: "Content Marketing",
    issuer: "HubSpot Academy",
    date: "Jun 2022",
    expired: true,
    credentialId: "b70b53a5a752468c9e3a94ec75938e43",
    credentialUrl: "https://academy.hubspot.com/achievements/b70b53a5a752468c9e3a94ec75938e43",
    icon: "✍️",
    category: "marketing",
    description: "Content strategy and marketing fundamentals"
  },
  {
    title: "Email Marketing",
    issuer: "HubSpot Academy",
    date: "Jun 2022",
    expired: true,
    credentialId: "beb28f69405f4ff5b1de77ca89f94ce5",
    credentialUrl: "https://academy.hubspot.com/achievements/beb28f69405f4ff5b1de77ca89f94ce5",
    icon: "📧",
    category: "marketing",
    description: "Email marketing strategies and automation"
  }
];

// ============================================================================
// 🛠️ TOOLS & APPLICATIONS - EASY TO EDIT!
// ============================================================================

const toolsData = [
  // Development Tools
  {
    name: "JavaScript",
    category: "development",
    icon: "💛",
    proficiency: "Expert",
    description: "Primary language for web development"
  },
  {
    name: "React",
    category: "development",
    icon: "⚛️",
    proficiency: "Advanced",
    description: "Frontend framework for building UIs"
  },
  {
    name: "Node.js",
    category: "development",
    icon: "🟢",
    proficiency: "Advanced",
    description: "Backend JavaScript runtime"
  },
  {
    name: "Python",
    category: "development",
    icon: "🐍",
    proficiency: "Advanced",
    description: "Data science and scripting"
  },
  {
    name: "HTML & CSS",
    category: "development",
    icon: "🎨",
    proficiency: "Expert",
    description: "Web markup and styling"
  },
  {
    name: "Git & GitHub",
    category: "development",
    icon: "🔧",
    proficiency: "Advanced",
    description: "Version control and collaboration"
  },

  // Design Tools
  {
    name: "Figma",
    category: "design",
    icon: "🎨",
    proficiency: "Advanced",
    description: "UI/UX design and prototyping"
  },
  {
    name: "Adobe Creative Suite",
    category: "design",
    icon: "🖌️",
    proficiency: "Intermediate",
    description: "Photoshop, Illustrator, XD"
  },
  {
    name: "Canva",
    category: "design",
    icon: "✨",
    proficiency: "Advanced",
    description: "Quick graphics and presentations"
  },

  // Productivity Tools
  {
    name: "Google Workspace",
    category: "productivity",
    icon: "📊",
    proficiency: "Expert",
    description: "Docs, Sheets, Slides, Drive"
  },
  {
    name: "Notion",
    category: "productivity",
    icon: "📝",
    proficiency: "Advanced",
    description: "Note-taking and project management"
  },
  {
    name: "Slack",
    category: "productivity",
    icon: "💬",
    proficiency: "Advanced",
    description: "Team communication"
  },
  {
    name: "Trello",
    category: "productivity",
    icon: "📋",
    proficiency: "Intermediate",
    description: "Task and project management"
  },

  // Data & Analytics
  {
    name: "Google Analytics",
    category: "data",
    icon: "📈",
    proficiency: "Advanced",
    description: "Web analytics and tracking"
  },
  {
    name: "Excel",
    category: "data",
    icon: "📊",
    proficiency: "Advanced",
    description: "Data analysis and modeling"
  },
  {
    name: "Tableau",
    category: "data",
    icon: "📉",
    proficiency: "Intermediate",
    description: "Data visualization"
  },

  // Add more tools as needed!
];

// ============================================================================
// END OF DATA SECTION
// ============================================================================

// Google Analytics Event Tracking
function trackEvent(eventName, eventParams = {}) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, eventParams);
    console.log('GA4 Event tracked:', eventName, eventParams);
  }
}

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      mobileToggle.classList.remove('active');
    });
  });
}

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

// Mouse Gradient Effect
const bgGradient = document.getElementById('bgGradient');

if (bgGradient) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    bgGradient.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(58, 58, 58, 0.2) 0%, transparent 50%)`;
  });
}

// Create Floating Badges
function createFloatingBadges() {
  const container = document.getElementById('floatingBadges');
  if (!container) return;

  const badges = ['🏆', '🎓', '🛡️', '💼', '🔒'];

  badges.forEach((badge, i) => {
    const badgeEl = document.createElement('div');
    badgeEl.className = 'floating-badge';
    badgeEl.textContent = badge;

    badgeEl.style.left = (Math.random() * 80 + 10) + '%';
    badgeEl.style.top = (Math.random() * 80 + 10) + '%';
    badgeEl.style.animationDelay = (i * 1.5) + 's';

    container.appendChild(badgeEl);
  });
}

// Render Certifications
function renderCertifications() {
  const grid = document.getElementById('certificationsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  certificationsData.forEach((cert, index) => {
    const card = document.createElement('article');
    card.className = 'cert-card';
    card.style.animationDelay = `${index * 0.1}s`;

    const expiredBadge = cert.expired ? '<span class="status-badge expired">Expired</span>' : 
                         cert.expires ? `<span class="status-badge active">Valid until ${cert.expires}</span>` :
                         '<span class="status-badge active">Active</span>';

    card.innerHTML = `
      <div class="cert-icon">${cert.icon}</div>
      <div class="cert-content">
        <h3 class="cert-title">${cert.title}</h3>
        <p class="cert-issuer">${cert.issuer}</p>
        <p class="cert-date">${cert.date}</p>
        ${expiredBadge}
        ${cert.description ? `<p class="cert-description">${cert.description}</p>` : ''}
        ${cert.skills ? `
          <div class="cert-skills">
            ${cert.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
          </div>
        ` : ''}
        ${cert.credentialId ? `<p class="cert-id">ID: ${cert.credentialId}</p>` : ''}
        ${cert.credentialUrl ? `
          <a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="cert-verify-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Verify Credential
          </a>
        ` : ''}
      </div>
    `;

    grid.appendChild(card);

    // Track certification view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          trackEvent('certification_view', {
            certification: cert.title,
            issuer: cert.issuer
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(card);
  });
}

// Render Tools
function renderTools(filterCategory = 'all') {
  const grid = document.getElementById('toolsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  const filteredTools = filterCategory === 'all' 
    ? toolsData 
    : toolsData.filter(tool => tool.category === filterCategory);

  filteredTools.forEach((tool, index) => {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.style.animationDelay = `${index * 0.05}s`;

    const proficiencyClass = tool.proficiency.toLowerCase();

    card.innerHTML = `
      <div class="tool-icon">${tool.icon}</div>
      <h4 class="tool-name">${tool.name}</h4>
      <p class="tool-description">${tool.description}</p>
      <span class="proficiency-badge ${proficiencyClass}">${tool.proficiency}</span>
    `;

    grid.appendChild(card);
  });
}

// Tool Filter Functionality
const toolFilters = document.querySelectorAll('.tool-filter');

toolFilters.forEach(filter => {
  filter.addEventListener('click', () => {
    const category = filter.dataset.category;

    toolFilters.forEach(btn => btn.classList.remove('active'));
    filter.classList.add('active');

    renderTools(category);

    trackEvent('tool_filter', {
      category: category
    });
  });
});

// Animate Counter Numbers
function animateCounter(element, target) {
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };

  updateCounter();
}

// Track Credential Verification Clicks
document.addEventListener('click', (e) => {
  if (e.target.closest('.cert-verify-btn')) {
    const card = e.target.closest('.cert-card');
    const title = card.querySelector('.cert-title').textContent;

    trackEvent('credential_verification', {
      certification: title
    });
  }
});

// Initialize on load
window.addEventListener('load', () => {
  createFloatingBadges();
  renderCertifications();
  renderTools();

  // Update stats
  const totalCerts = document.getElementById('totalCerts');
  const totalTools = document.getElementById('totalTools');

  if (totalCerts) {
    animateCounter(totalCerts, certificationsData.length);
  }
  if (totalTools) {
    animateCounter(totalTools, toolsData.length);
  }

  // Track page view
  trackEvent('page_view', {
    page: 'certifications',
    total_certs: certificationsData.length,
    total_tools: toolsData.length
  });
});

// Track time spent on page
let pageStartTime = Date.now();

window.addEventListener('beforeunload', () => {
  const timeSpent = Math.round((Date.now() - pageStartTime) / 1000);
  trackEvent('page_time_spent', {
    page: 'certifications',
    seconds: timeSpent
  });
});

console.log('%c🎓 Certifications & Tools Page', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%c' + certificationsData.length + ' certifications and ' + toolsData.length + ' tools loaded!', 'font-size: 14px; color: #a0a0a0;');
