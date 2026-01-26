// Story Page JavaScript

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

// Create Twinkling Stars
function createStars() {
  const container = document.getElementById('timelineStars');
  if (!container) return;

  const starCount = 50;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    // Random positioning
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    star.style.animationDuration = (2 + Math.random() * 2) + 's';

    container.appendChild(star);
  }
}

// Progress Indicator
function updateProgressIndicator() {
  const progressBar = document.querySelector('.progress-bar-vertical::after');
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.pageYOffset;
  const progress = (scrolled / scrollHeight) * 100;

  // Update progress bar using custom property
  document.documentElement.style.setProperty('--scroll-progress', `${progress}%`);
}

// Add CSS custom property for progress
const style = document.createElement('style');
style.textContent = `
  .progress-bar-vertical::after {
    height: var(--scroll-progress, 0%) !important;
  }
`;
document.head.appendChild(style);

window.addEventListener('scroll', updateProgressIndicator);

// Timeline Items Scroll Animation
const timelineItems = document.querySelectorAll('.timeline-item');

const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px'
};

const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');

        // Track milestone view
        const year = entry.target.dataset.year;
        const title = entry.target.querySelector('.timeline-title').textContent;
        trackEvent('timeline_milestone_view', {
          year: year,
          milestone: title
        });
      }, index * 100); // Stagger effect
    }
  });
}, observerOptions);

timelineItems.forEach(item => {
  timelineObserver.observe(item);
});

// Skills Evolution Animation
const skillTracks = document.querySelectorAll('.skill-track');

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');

        // Animate progress bar
        const progressBar = entry.target.querySelector('.skill-progress');
        const targetWidth = progressBar.dataset.progress;

        setTimeout(() => {
          progressBar.style.width = targetWidth + '%';
        }, 200);

        // Track skills section view
        const skillName = entry.target.querySelector('.skill-label').textContent;
        trackEvent('skill_view', {
          skill: skillName,
          level: targetWidth
        });
      }, index * 150);
    }
  });
}, { threshold: 0.3 });

skillTracks.forEach(track => {
  skillsObserver.observe(track);
});

// Parallax Effect for Timeline Icons
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;

  document.querySelectorAll('.timeline-icon').forEach((icon, index) => {
    const speed = 0.1 + (index * 0.02);
    const yPos = -(scrolled * speed);
    icon.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.02}deg)`;
  });
});

// Track CTA Button Clicks
document.querySelectorAll('.timeline-btn, .cta-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const btnText = e.target.textContent.trim();
    const section = e.target.closest('section').className;

    trackEvent('cta_click', {
      button_text: btnText,
      section: section,
      destination: e.target.href
    });
  });
});

// Track Philosophy Item Hovers
document.querySelectorAll('.philosophy-item').forEach(item => {
  let hoverStartTime;

  item.addEventListener('mouseenter', () => {
    hoverStartTime = Date.now();
  });

  item.addEventListener('mouseleave', () => {
    const hoverDuration = Date.now() - hoverStartTime;
    const title = item.querySelector('h3').textContent;

    if (hoverDuration > 1000) { // Only track if hovered for more than 1 second
      trackEvent('philosophy_engage', {
        principle: title,
        duration_ms: hoverDuration
      });
    }
  });
});

// Smooth Scroll for Scroll Indicator
document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
  const firstTimeline = document.querySelector('.timeline-item');
  if (firstTimeline) {
    firstTimeline.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }
});

// Track Scroll Depth Milestones
let scrollMilestones = {
  25: false,
  50: false,
  75: false,
  100: false
};

function trackScrollDepth() {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.pageYOffset;
  const scrollPercent = (scrolled / scrollHeight) * 100;

  Object.keys(scrollMilestones).forEach(milestone => {
    if (scrollPercent >= milestone && !scrollMilestones[milestone]) {
      scrollMilestones[milestone] = true;
      trackEvent('scroll_depth', {
        depth: milestone + '%',
        page: 'story'
      });
    }
  });
}

window.addEventListener('scroll', trackScrollDepth);

// Easter Egg: Konami Code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);

  if (konamiCode.join(',') === konamiSequence.join(',')) {
    // Easter egg activated!
    document.body.style.animation = 'rainbow 5s ease infinite';

    // Add rainbow animation
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
      @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
      }
    `;
    document.head.appendChild(rainbowStyle);

    trackEvent('easter_egg_found', {
      easter_egg: 'konami_code',
      page: 'story'
    });

    setTimeout(() => {
      document.body.style.animation = '';
    }, 5000);
  }
});

// Initialize on load
window.addEventListener('load', () => {
  createStars();
  updateProgressIndicator();

  // Track page view
  trackEvent('page_view', {
    page: 'story',
    total_milestones: timelineItems.length
  });
});

// Track time spent on page
let pageStartTime = Date.now();

window.addEventListener('beforeunload', () => {
  const timeSpent = Math.round((Date.now() - pageStartTime) / 1000);
  trackEvent('page_time_spent', {
    page: 'story',
    seconds: timeSpent
  });
});

// Track which timeline items were viewed
window.addEventListener('beforeunload', () => {
  const viewedMilestones = Array.from(document.querySelectorAll('.timeline-item.visible'))
    .map(item => item.dataset.year);

  trackEvent('story_completion', {
    milestones_viewed: viewedMilestones.length,
    total_milestones: timelineItems.length,
    completion_rate: (viewedMilestones.length / timelineItems.length * 100).toFixed(0) + '%'
  });
});

// Console Message
console.log(
  '%c✨ My Story Page',
  'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'
);
console.log(
  '%cThanks for taking the time to learn about my journey!',
  'font-size: 14px; color: #667eea;'
);
console.log(
  '%c💡 Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A',
  'font-size: 12px; color: #a0a0a0;'
);
