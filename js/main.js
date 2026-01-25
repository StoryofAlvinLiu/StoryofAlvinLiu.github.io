// Main JavaScript for Alvin Liu Portfolio

// State Management
let currentCategory = 0;
let autoRotateInterval = null;
let progressAnimationFrame = null;
let recommendationScrollAnimation = null;
let recommendationScrollPaused = false;
const ROTATE_DURATION = 8000; // 8 seconds
const REC_SCROLL_SPEED = 1; // pixels per frame for smooth continuous scroll

// Google Analytics Event Tracking Helper Function
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

// Parallax Effect
const parallaxLayers = document.querySelectorAll('.parallax-layer');

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;

  parallaxLayers.forEach(layer => {
    const speed = layer.dataset.speed || 0.5;
    const yPos = -(scrolled * speed);
    layer.style.transform = `translateY(${yPos}px)`;
  });
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

// Track Resume Button Click
document.addEventListener('DOMContentLoaded', () => {
  const resumeBtn = document.querySelector('.resume-btn');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
      trackEvent('download_resume', {
        button_location: 'hero_section',
        file_name: 'AlvinLiuResume.pdf'
      });
    });
  }

  // Track Contact Buttons
  const emailBtn = document.querySelector('.contact-btn.primary');
  if (emailBtn) {
    emailBtn.addEventListener('click', () => {
      trackEvent('contact_click', {
        button_type: 'email',
        button_location: 'contact_section'
      });
    });
  }

  const contactPageBtn = document.querySelector('.contact-btn.secondary');
  if (contactPageBtn) {
    contactPageBtn.addEventListener('click', () => {
      trackEvent('contact_click', {
        button_type: 'contact_page',
        button_location: 'contact_section'
      });
    });
  }

  // Track "Get in touch" navbar button
  const navContactBtn = document.querySelector('.get-in-touch');
  if (navContactBtn) {
    navContactBtn.addEventListener('click', () => {
      trackEvent('contact_click', {
        button_type: 'navbar_contact',
        button_location: 'navigation'
      });
    });
  }
});

// Skills Carousel
function initializeSkillsCarousel() {
  if (!window.portfolioData || !window.portfolioData.categories) return;

  const categories = window.portfolioData.categories;
  updateCategory(0);

  const prevBtn = document.getElementById('prevCategory');
  const nextBtn = document.getElementById('nextCategory');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentCategory = (currentCategory - 1 + categories.length) % categories.length;
      updateCategory(currentCategory);
      resetAutoRotate();

      // Track carousel navigation
      trackEvent('skills_carousel_navigate', {
        direction: 'previous',
        category: categories[currentCategory].name
      });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentCategory = (currentCategory + 1) % categories.length;
      updateCategory(currentCategory);
      resetAutoRotate();

      // Track carousel navigation
      trackEvent('skills_carousel_navigate', {
        direction: 'next',
        category: categories[currentCategory].name
      });
    });
  }

  startAutoRotate();
}

function updateCategory(index) {
  if (!window.portfolioData || !window.portfolioData.categories) return;

  const category = window.portfolioData.categories[index];

  const titleEl = document.getElementById('categoryTitle');
  if (titleEl) titleEl.textContent = category.name;

  const iconsEl = document.getElementById('iconsSlider');
  if (iconsEl && category.icons) {
    iconsEl.innerHTML = category.icons.map(icon => 
      `<span class="skill-icon">${icon}</span>`
    ).join('');
  }

  const descEl = document.getElementById('categoryDescription');
  if (descEl) descEl.textContent = category.description;

  const toolsEl = document.getElementById('toolsList');
  if (toolsEl && category.tools) {
    toolsEl.innerHTML = category.tools.map(tool => 
      `<span class="tool-tag">${tool}</span>`
    ).join('');
  }

  const previewImg = document.getElementById('previewImage');
  if (previewImg && category.previewImage) {
    previewImg.src = category.previewImage;
    previewImg.alt = `${category.name} preview`;
  }

  const projectsEl = document.getElementById('featuredProjects');
  if (projectsEl && category.projects) {
    projectsEl.innerHTML = category.projects.map((project, idx) => 
      `<a href="${project.url}" class="project-link" data-project="${project.title}" data-category="${category.name}">${project.title}</a>`
    ).join('');

    // Track project link clicks
    projectsEl.querySelectorAll('.project-link').forEach(link => {
      link.addEventListener('click', (e) => {
        trackEvent('project_click', {
          project_name: e.target.dataset.project,
          category: e.target.dataset.category,
          link_url: e.target.href
        });
      });
    });
  }

  updateDots('categoryDots', index, window.portfolioData.categories.length);
}

function startAutoRotate() {
  if (autoRotateInterval) clearInterval(autoRotateInterval);
  if (progressAnimationFrame) cancelAnimationFrame(progressAnimationFrame);

  const progressBar = document.getElementById('progressBar');
  if (!progressBar) return;

  const startTime = Date.now();

  // Smooth progress animation using requestAnimationFrame
  function animateProgress() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min((elapsed / ROTATE_DURATION) * 100, 100);

    progressBar.style.width = `${progress}%`;

    if (progress < 100) {
      progressAnimationFrame = requestAnimationFrame(animateProgress);
    }
  }

  progressAnimationFrame = requestAnimationFrame(animateProgress);

  autoRotateInterval = setTimeout(() => {
    if (!window.portfolioData) return;
    currentCategory = (currentCategory + 1) % window.portfolioData.categories.length;
    updateCategory(currentCategory);
    startAutoRotate();
  }, ROTATE_DURATION);
}

function resetAutoRotate() {
  startAutoRotate();
}

// Recommendations Smooth Continuous Auto-Scroll
function initializeRecommendations() {
  if (!window.portfolioData || !window.portfolioData.recommendations) return;

  const recommendations = window.portfolioData.recommendations;
  const carouselEl = document.getElementById('recommendationsCarousel');

  if (!carouselEl) return;

  // Generate recommendation cards
  carouselEl.innerHTML = recommendations.map((rec, index) => {
    const excerpt = rec.text.length > 200 ? rec.text.substring(0, 200) + '...' : rec.text;
    return `
      <div class="recommendation-card">
        <div class="rec-header">
          <div class="rec-avatar">${rec.name.charAt(0)}</div>
          <div class="rec-info">
            <h4>${rec.name}</h4>
            <p class="rec-title">${rec.title}</p>
          </div>
        </div>
        <p class="rec-text">${excerpt}</p>
      </div>
    `;
  }).join('');

  // Add LinkedIn card at the end
  carouselEl.innerHTML += `
    <a href="https://www.linkedin.com/in/alvinliusa/" target="_blank" rel="noopener" class="linkedin-card" id="linkedinRecsCard">
      <div>
        <h3>See more<br>recommendations<br>on LinkedIn →</h3>
      </div>
    </a>
  `;

  // Track LinkedIn recommendations link click
  const linkedinCard = document.getElementById('linkedinRecsCard');
  if (linkedinCard) {
    linkedinCard.addEventListener('click', () => {
      trackEvent('view_linkedin_recommendations', {
        button_location: 'recommendations_section'
      });
    });
  }

  // Scroll arrows with pause functionality
  const scrollLeft = document.getElementById('scrollLeft');
  const scrollRight = document.getElementById('scrollRight');

  if (scrollLeft) {
    scrollLeft.addEventListener('click', () => {
      carouselEl.scrollBy({
        left: -370,
        behavior: 'smooth'
      });
      pauseAutoScroll(5000);

      trackEvent('recommendations_scroll', {
        direction: 'left'
      });
    });
  }

  if (scrollRight) {
    scrollRight.addEventListener('click', () => {
      carouselEl.scrollBy({
        left: 370,
        behavior: 'smooth'
      });
      pauseAutoScroll(5000);

      trackEvent('recommendations_scroll', {
        direction: 'right'
      });
    });
  }

  // Pause on hover
  carouselEl.addEventListener('mouseenter', () => {
    recommendationScrollPaused = true;
  });

  carouselEl.addEventListener('mouseleave', () => {
    recommendationScrollPaused = false;
  });

  // Pause on user manual scroll
  let userScrollTimeout;
  carouselEl.addEventListener('scroll', (e) => {
    if (!recommendationScrollAnimation) return;

    recommendationScrollPaused = true;
    clearTimeout(userScrollTimeout);
    userScrollTimeout = setTimeout(() => {
      recommendationScrollPaused = false;
    }, 3000);
  }, { passive: true });

  // Start smooth continuous auto-scroll
  startRecommendationAutoScroll();
}

function startRecommendationAutoScroll() {
  const carouselEl = document.getElementById('recommendationsCarousel');
  if (!carouselEl) return;

  function smoothScroll() {
    if (!recommendationScrollPaused && carouselEl) {
      carouselEl.scrollLeft += REC_SCROLL_SPEED;

      const maxScroll = carouselEl.scrollWidth - carouselEl.clientWidth;
      if (carouselEl.scrollLeft >= maxScroll - 5) {
        carouselEl.scrollLeft = 0;
      }
    }

    recommendationScrollAnimation = requestAnimationFrame(smoothScroll);
  }

  recommendationScrollAnimation = requestAnimationFrame(smoothScroll);
}

function pauseAutoScroll(duration = 5000) {
  recommendationScrollPaused = true;

  setTimeout(() => {
    recommendationScrollPaused = false;
  }, duration);
}

function updateDots(containerId, activeIndex, totalDots) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = Array.from({ length: totalDots }, (_, i) => 
    `<span class="dot ${i === activeIndex ? 'active' : ''}" onclick="navigateTo${containerId}(${i})"></span>`
  ).join('');
}

// Dot navigation
window.navigateTocategoryDots = (index) => {
  currentCategory = index;
  updateCategory(index);
  resetAutoRotate();

  // Track dot navigation
  if (window.portfolioData && window.portfolioData.categories[index]) {
    trackEvent('skills_carousel_dot_click', {
      category: window.portfolioData.categories[index].name,
      index: index
    });
  }
};

// Smooth Scroll for Anchor Links
document.addEventListener('click', (e) => {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
});

// Scroll-triggered Animations
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Track section views
      const sectionId = entry.target.id;
      if (sectionId) {
        trackEvent('section_view', {
          section_name: sectionId
        });
      }
    }
  });
}, observerOptions);

// Initialize after boot sequence completes
function initializePortfolio() {
  document.querySelectorAll('.scroll-animate').forEach(section => {
    observer.observe(section);
  });

  initializeSkillsCarousel();
  initializeRecommendations();
}

// Wait for boot sequence to complete
setTimeout(() => {
  if (document.getElementById('portfolioContent')) {
    initializePortfolio();
  }
}, 100);

// Also initialize on DOMContentLoaded as fallback
document.addEventListener('DOMContentLoaded', () => {
  const checkInterval = setInterval(() => {
    const portfolioContent = document.getElementById('portfolioContent');
    if (portfolioContent && portfolioContent.classList.contains('visible')) {
      initializePortfolio();
      clearInterval(checkInterval);
    }
  }, 500);
});

// Prefers Reduced Motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  if (autoRotateInterval) clearTimeout(autoRotateInterval);
  if (progressAnimationFrame) cancelAnimationFrame(progressAnimationFrame);
  if (recommendationScrollAnimation) cancelAnimationFrame(recommendationScrollAnimation);
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
  if (!window.portfolioData) return;

  if (e.key === 'ArrowLeft') {
    currentCategory = (currentCategory - 1 + window.portfolioData.categories.length) % window.portfolioData.categories.length;
    updateCategory(currentCategory);
    resetAutoRotate();
  } else if (e.key === 'ArrowRight') {
    currentCategory = (currentCategory + 1) % window.portfolioData.categories.length;
    updateCategory(currentCategory);
    resetAutoRotate();
  }
});