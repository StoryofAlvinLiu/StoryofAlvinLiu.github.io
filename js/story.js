// Story Page JavaScript - WITH ANIMATED TIMELINE LINE

// Add this at the beginning of the existing story.js file
// This animates the timeline line as you scroll

// ============================================================================
// 🎯 YOUR REAL JOURNEY - EASY TO EDIT!
// ============================================================================

const timelineData = [
  {
    year: "2005",
    age: 0,
    icon: "🌱",
    title: "The Beginning",
    description: "Born in California! The journey begins.",
    tags: ["Origin Story"],
    side: "left"
  },
  {
    year: "2016",
    age: 11,
    icon: "🔧",
    title: "First Mentor & PLTW",
    description: "First encounter with PLTW - Project Lead The Way, got my first mentor. Created my first platformer on Scratch using block coding.",
    tags: ["Education", "Mentorship", "Coding"],
    side: "right"
  },
  {
    year: "2017",
    age: 12,
    icon: "🎨",
    title: "3D CAD & Deep Dive into Engineering",
    description: "Took more PLTW classes, started learning 3D CAD with AutoDesk. Dedicated 2 hours after school to studying and experimenting with engineering concepts. Created my first games and programs in Khan Academy using JavaScript (w/ ProcessingJS), SQL, and Python.",
    tags: ["Engineering", "CAD", "JavaScript", "Python"],
    side: "left"
  },
  {
    year: "2018",
    age: 13,
    icon: "🚀",
    title: "Research & Competition Success",
    description: "Participated in The AeroSpace Corporation Herndon Team Competition. Assisted in teaching and moderating PLTW classes in middle school. First place solo design & first place overall mousetrap powered car. Conducted research in Artificial Intelligence (Computer Vision & Reinforcement Learning) and water filtration systems.",
    tags: ["Research", "AI", "Competition", "Teaching"],
    highlights: ["1st Place Mousetrap Car", "AI Research"],
    side: "right"
  },
  {
    year: "2019",
    age: 14,
    icon: "👥",
    title: "Community Building & Programming",
    description: "Community Manager for half a thousand individuals hosting daily events for those passionate in tactical hobbies & engagement. Created my first games and programs in Khan Academy using JavaScript (w/ ProcessingJS), SQL, and Python.",
    tags: ["Community Management", "JavaScript", "Leadership"],
    side: "left"
  },
  {
    year: "2020",
    age: 15,
    icon: "🌍",
    title: "Founded Clubhouse 512",
    description: "Created an international initiative organization focused on uniting students across 10 countries to mutually study and support each other in STEM topics (K-12+). Obtained metrics of half a thousand members in the first year. First experience with Marketing and Business Development Concepts.",
    tags: ["Founder", "International", "STEM", "Marketing"],
    highlights: ["500+ Members in Year 1"],
    side: "right"
  },
  {
    year: "2021",
    age: 16,
    icon: "🎮",
    title: "Game Development & DECA Begins",
    description: "General Chapter Member of California DVC DECA. Increased membership of Clubhouse 512 to several hundred individuals in academia. Created my first game using LUA and uploaded into Roblox Studio. Learned basic blender rendering techniques.",
    tags: ["DECA", "Game Development", "LUA", "3D Design"],
    side: "left"
  },
  {
    year: "2022",
    age: 17,
    icon: "💼",
    title: "Professional Experience & Leadership",
    description: "Advertising Intern at The Woo Agency + Supergoop!. Board Member of Da Vinci High Schools. Northrop Grumman High School Internship Program (Year 1). KKCF - The Karim Kharbouch Coding Fellowship (Year 1). Community Engagement + Community Manager at Data 360. Los Angeles Student Clerk at LA County Registrar-Recorder/County Clerk. Vice President of Career Development for California DVC DECA.",
    tags: ["Internship", "Board Member", "VP Career Dev", "Northrop Grumman"],
    highlights: ["Hackathon Pitch & Design Winner - Data 360"],
    side: "right"
  },
  {
    year: "2023",
    age: 18,
    icon: "🎓",
    title: "UC Merced & Expanding Horizons",
    description: "Started Double Major at UC Merced (Computer Science & Engineering + Management & Business Economics). Officer Candidate at USMC Officer Candidate School. Intellectual Property & Innovation Assistant at Tech Transfer Office. Chair of Professional Development for Merced SACNAS. Class President + Student Speaker of Da Vinci Communication High School Class of 2023. Northrop Grumman Internship Program (Year 2 Graduate). KKCF Coding Fellowship (Year 2 Graduate). General Member of Business Society. LA County Student Clerk. National Science Foundation Innovation Corps.",
    tags: ["UC Merced", "USMC OCS", "IP Assistant", "Class President"],
    highlights: ["DECA Chapter Leader of the Year - CA Statewide", "Student Speaker"],
    side: "left"
  },
  {
    year: "2024",
    age: 19,
    icon: "📈",
    title: "Leadership & Innovation",
    description: "Officer Candidate at USMC Officer Candidate School. Intellectual Property & Innovation Assistant at UC Merced Tech Transfer Office. Vice President of Merced SACNAS Chapter. General Body Member of Delta Sigma Pi - Tau Chi Chapter. Chief Operating Officer of Business Society. Blackstone Launchpad Talent Outreach & Acquisitions Assistant. National Science Foundation Innovation Corps. Attended multiple Engineering Hackathons.",
    tags: ["VP SACNAS", "COO", "Blackstone Launchpad", "NSF I-Corps"],
    highlights: ["Multiple Leadership Positions"],
    side: "right"
  },
  {
    year: "2025",
    age: 20,
    icon: "⭐",
    title: "Current - Building the Future",
    description: "Vice President of Marketing for Delta Sigma Pi Professional Fraternity. Intellectual Property & Innovation Assistant at Office of Technology, Innovation, and Industry Relations (Tech Transfer Office). Officer Candidate at USMC Officer Candidate School. Continuing to build, learn, and make an impact.",
    tags: ["VP Marketing", "Tech Transfer", "USMC OCS"],
    highlights: ["Active Leadership in Multiple Organizations"],
    side: "left",
    current: true
  }
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

// Create Twinkling Stars
function createStars() {
  const container = document.getElementById('timelineStars');
  if (!container) return;

  const starCount = 50;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    star.style.animationDuration = (2 + Math.random() * 2) + 's';

    container.appendChild(star);
  }
}

// Progress Indicator
function updateProgressIndicator() {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.pageYOffset;
  const progress = (scrolled / scrollHeight) * 100;

  document.documentElement.style.setProperty('--scroll-progress', `${progress}%`);
}

const style = document.createElement('style');
style.textContent = `
  .progress-bar-vertical::after {
    height: var(--scroll-progress, 0%) !important;
  }
`;
document.head.appendChild(style);

window.addEventListener('scroll', updateProgressIndicator);

// Animate Timeline Line as you scroll
function updateTimelineLineProgress() {
  const timelineSection = document.querySelector('.timeline-section');
  const timelineLine = document.getElementById('timelineLineProgress');

  if (!timelineSection || !timelineLine) return;

  const sectionTop = timelineSection.offsetTop;
  const sectionHeight = timelineSection.offsetHeight;
  const scrolled = window.pageYOffset;
  const windowHeight = window.innerHeight;

  // Calculate how much of the timeline section is visible
  const sectionScrolled = scrolled + windowHeight - sectionTop;
  const sectionProgress = (sectionScrolled / sectionHeight) * 100;

  // Clamp between 0 and 100
  const clampedProgress = Math.max(0, Math.min(100, sectionProgress));

  timelineLine.style.height = clampedProgress + '%';
}

window.addEventListener('scroll', updateTimelineLineProgress);
window.addEventListener('load', updateTimelineLineProgress);

// Render Timeline
function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container) return;

  container.innerHTML = '';

  timelineData.forEach((item, index) => {
    const article = document.createElement('article');
    article.className = `timeline-item ${item.side}${item.current ? ' present' : ''}`;
    article.dataset.year = item.year;

    const highlightsHTML = item.highlights ? `
      <div class="timeline-highlight">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>${item.highlights.join(' • ')}</span>
      </div>
    ` : '';

    const ctaHTML = item.current ? `
      <div class="timeline-cta">
        <a href="contact.html" class="timeline-btn">Let's Connect</a>
      </div>
    ` : '';

    article.innerHTML = `
      <div class="timeline-content">
        <div class="timeline-icon">${item.icon}</div>
        <div class="timeline-year">${item.year}</div>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-description">${item.description}</p>
        <div class="timeline-tags">
          ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        ${highlightsHTML}
        ${ctaHTML}
      </div>
      <div class="timeline-dot${item.current ? ' pulse' : ''}"></div>
    `;

    container.appendChild(article);
  });
}

// Timeline Items Scroll Animation
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px'
};

function observeTimelineItems() {
  const timelineItems = document.querySelectorAll('.timeline-item');

  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');

          const year = entry.target.dataset.year;
          const title = entry.target.querySelector('.timeline-title').textContent;
          trackEvent('timeline_milestone_view', {
            year: year,
            milestone: title
          });
        }, index * 100);
      }
    });
  }, observerOptions);

  timelineItems.forEach(item => {
    timelineObserver.observe(item);
  });
}

// Skills Evolution Animation
const skillTracks = document.querySelectorAll('.skill-track');

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');

        const progressBar = entry.target.querySelector('.skill-progress');
        const targetWidth = progressBar.dataset.progress;

        setTimeout(() => {
          progressBar.style.width = targetWidth + '%';
        }, 200);

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
document.addEventListener('click', (e) => {
  if (e.target.closest('.timeline-btn') || e.target.closest('.cta-btn')) {
    const btnText = e.target.textContent.trim();
    const section = e.target.closest('section')?.className || 'timeline';

    trackEvent('cta_click', {
      button_text: btnText,
      section: section,
      destination: e.target.href
    });
  }
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

    if (hoverDuration > 1000) {
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
    document.body.style.animation = 'rainbow 5s ease infinite';

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
  renderTimeline();
  observeTimelineItems();
  updateProgressIndicator();
  updateTimelineLineProgress();

  trackEvent('page_view', {
    page: 'story',
    total_milestones: timelineData.length
  });
});

// Track time spent on page
let pageStartTime = Date.now();

window.addEventListener('beforeunload', () => {
  const timeSpent = Math.round((Date.now() - pageStartTime) / 1000);
  const viewedMilestones = document.querySelectorAll('.timeline-item.visible').length;

  trackEvent('page_time_spent', {
    page: 'story',
    seconds: timeSpent
  });

  trackEvent('story_completion', {
    milestones_viewed: viewedMilestones,
    total_milestones: timelineData.length,
    completion_rate: (viewedMilestones / timelineData.length * 100).toFixed(0) + '%'
  });
});

// Console Message
console.log(
  '%c✨ My Story Page - Updated with Real Data!',
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
