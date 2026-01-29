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
    description: "Born in California. The journey begins.",
    tags: ["Origins"],
    side: "left"
  },
  {
    year: "2016",
    age: 11,
    icon: "🔧",
    title: "First Mentor & PLTW",
    description:
      "Introduced to Project Lead The Way (PLTW) and gained my first mentor. Built my first platformer game on Scratch using block-based programming.",
    tags: ["Education", "Mentorship", "Coding"],
    side: "right"
  },
  {
    year: "2017",
    age: 12,
    icon: "🎨",
    title: "CAD & Engineering Foundations",
    description:
      "Continued PLTW coursework and began learning 3D CAD with AutoDesk. Dedicated two hours daily after school to engineering exploration. Built early projects using JavaScript (ProcessingJS), Python, and SQL through Khan Academy.",
    tags: ["Engineering", "CAD", "JavaScript", "Python"],
    side: "left"
  },
  {
    year: "2018",
    age: 13,
    icon: "🚀",
    title: "Research & Competitive Success",
    description:
      "Competed in The Aerospace Corporation Herndon Team Competition. Assisted in teaching and moderating PLTW courses. Earned first place in both solo design and overall categories for a mousetrap-powered car. Conducted early research in artificial intelligence (computer vision, reinforcement learning) and water filtration systems.",
    tags: ["Research", "AI", "Competition", "Teaching"],
    highlights: ["1st Place – Mousetrap Car", "AI Research"],
    side: "right"
  },
  {
    year: "2019",
    age: 14,
    icon: "👥",
    title: "Community Leadership & Programming",
    description:
      "Served as a community manager for a 500+ member group, hosting daily events around tactical and technical interests. Continued building projects in JavaScript, Python, and SQL via Khan Academy.",
    tags: ["Community Management", "Leadership", "Programming"],
    side: "left"
  },
  {
    year: "2020",
    age: 15,
    icon: "🌍",
    title: "Founded Clubhouse 512",
    description:
      "Founded Clubhouse 512, an international STEM initiative connecting students across 10 countries (K–12+). Reached 500+ members in the first year and gained early exposure to marketing and business development.",
    tags: ["Founder", "STEM", "International", "Marketing"],
    highlights: ["500+ Members in Year One"],
    side: "right"
  },
  {
    year: "2021",
    age: 16,
    icon: "🎮",
    title: "Game Development & DECA",
    description:
      "Became a general member of California DVC DECA. Expanded Clubhouse 512 membership. Developed and published a game using Lua in Roblox Studio and learned foundational Blender rendering techniques.",
    tags: ["DECA", "Game Development", "Lua", "3D Design"],
    side: "left"
  },
  {
    year: "2022",
    age: 17,
    icon: "💼",
    title: "Professional Experience & Leadership",
    description:
      "Advertising Intern at The Woo Agency and Supergoop!. Board Member at Da Vinci High Schools. Participant in the Northrop Grumman High School Internship Program (Year 1) and the Karim Kharbouch Coding Fellowship (Year 1). Community Manager at Data 360. Student Clerk at the LA County Registrar-Recorder/County Clerk. Vice President of Career Development for California DVC DECA.",
    tags: ["Internships", "Leadership", "Northrop Grumman", "DECA"],
    highlights: ["Hackathon Pitch & Design Winner – Data 360"],
    side: "right"
  },
  {
    year: "2023",
    age: 18,
    icon: "🎓",
    title: "UC Merced & Academic Expansion",
    description:
      "Began a double major at UC Merced in Computer Science & Engineering and Management & Business Economics. Officer Candidate at USMC Officer Candidate School. Intellectual Property & Innovation Assistant at the Tech Transfer Office. Chair of Professional Development for Merced SACNAS. Class President and Student Speaker for Da Vinci Communication High School (Class of 2023). Completed Year 2 of both the Northrop Grumman Internship Program and the Karim Kharbouch Coding Fellowship. General member of the Business Society. LA County Student Clerk. Participant in NSF Innovation Corps.",
    tags: ["UC Merced", "USMC OCS", "Leadership", "IP & Innovation"],
    highlights: ["DECA Chapter Leader of the Year (CA)", "Student Speaker"],
    side: "left"
  },
  {
    year: "2024",
    age: 19,
    icon: "📈",
    title: "Leadership & Innovation",
    description:
      "Continued as an Officer Candidate at USMC OCS and Intellectual Property & Innovation Assistant at UC Merced. Served as Vice President of Merced SACNAS, COO of the Business Society, and a member of Delta Sigma Pi (Tau Chi Chapter). Worked as a Talent Outreach & Acquisitions Assistant with Blackstone Launchpad. Participated in NSF Innovation Corps and multiple engineering hackathons.",
    tags: ["Leadership", "SACNAS", "COO", "Innovation"],
    highlights: ["Multiple Concurrent Leadership Roles"],
    side: "right"
  },
  {
    year: "2025",
    age: 20,
    icon: "⭐",
    title: "Current – Building the Future",
    description:
      "Vice President of Marketing for Delta Sigma Pi Professional Fraternity. Intellectual Property & Innovation Assistant at the Office of Technology, Innovation, and Industry Relations. Officer Candidate at USMC Officer Candidate School. Actively building, learning, and creating impact across technology, leadership, and business.",
    tags: ["Marketing", "Tech Transfer", "Leadership"],
    highlights: ["Active Leadership Across Multiple Organizations"],
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
