// Projects Page JavaScript

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

// Create Floating Particles
function createParticles() {
  const container = document.getElementById('particlesContainer');
  if (!container) return;

  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Random positioning
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (15 + Math.random() * 10) + 's';

    container.appendChild(particle);
  }
}

// Animate Counter Numbers
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');

  counters.forEach(counter => {
    const target = parseInt(counter.dataset.count);
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  });
}

// Category Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const emptyState = document.getElementById('emptyState');
let currentFilter = 'all';

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    currentFilter = filter;

    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Filter projects
    filterProjects(filter);

    // Track filter usage
    trackEvent('project_filter', {
      filter: filter
    });
  });
});

function filterProjects(category) {
  let visibleCount = 0;

  projectCards.forEach((card, index) => {
    const categories = card.dataset.category.split(' ');
    const searchTerm = document.getElementById('projectSearch').value.toLowerCase();

    const matchesCategory = category === 'all' || categories.includes(category);
    const matchesSearch = searchTerm === '' || 
      card.querySelector('.project-title').textContent.toLowerCase().includes(searchTerm) ||
      card.querySelector('.project-description').textContent.toLowerCase().includes(searchTerm);

    if (matchesCategory && matchesSearch) {
      card.classList.remove('hidden');
      card.style.display = 'grid';
      card.style.animation = `slideInUp 0.6s ease forwards ${index * 0.1}s`;
      visibleCount++;
    } else {
      card.classList.add('hidden');
      card.style.display = 'none';
    }
  });

  // Show/hide empty state
  if (visibleCount === 0) {
    emptyState.style.display = 'block';
  } else {
    emptyState.style.display = 'none';
  }
}

// Search Functionality
const searchInput = document.getElementById('projectSearch');
let searchTimeout;

searchInput.addEventListener('input', (e) => {
  clearTimeout(searchTimeout);

  searchTimeout = setTimeout(() => {
    filterProjects(currentFilter);

    // Track search
    if (e.target.value) {
      trackEvent('project_search', {
        query: e.target.value,
        results: document.querySelectorAll('.project-card:not(.hidden)').length
      });
    }
  }, 300);
});

// Quick View Modal
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

// Project data for quick view
const projectData = {
  portfolio: {
    title: 'Personal Portfolio Website',
    image: 'https://framerusercontent.com/images/KCShtRMn8b25jNyVf9qKP9yNuQ.jpg',
    description: 'A modern, animated portfolio showcasing my work with a unique boot sequence experience, smooth animations, and responsive design. Built with vanilla JavaScript and custom CSS animations.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    features: [
      'Custom boot sequence animation',
      'Smooth parallax scrolling effects',
      'Interactive skills carousel',
      'Google Analytics integration',
      'Mobile-first responsive design',
      'Cross-browser compatibility'
    ],
    timeline: 'January 2026 - March 2026',
    link: '/',
    github: 'https://github.com/StoryofAlvinLiu'
  },
  merced2market: {
    title: 'Merced2Market Business Analysis',
    image: 'https://framerusercontent.com/images/9C7xItOHRG0L79ZudqgVQYETmYc.png',
    description: 'Comprehensive market research and strategic analysis for UC Merced\'s technology commercialization initiative. Identified key opportunities for university innovations to reach market.',
    tech: ['Market Research', 'Data Analysis', 'Strategic Planning'],
    features: [
      'Competitive landscape analysis',
      'Market sizing and segmentation',
      'Go-to-market strategy development',
      'Financial modeling and projections',
      'Stakeholder interviews and surveys',
      'Comprehensive final report and presentation'
    ],
    timeline: 'August 2024 - January 2025',
    link: 'https://ucmerced.app.box.com/s/rjncxvfoffo1otjh1yvrw6g6annj5hy7'
  },
  community: {
    title: 'CommUnity Innovation Plan',
    image: 'https://framerusercontent.com/images/kmClzKxYesYCxXUqXzAt5JUtUj8.jpg',
    description: 'Strategic innovation plan and complete brand identity for a community-focused initiative. Combined business strategy with visual design to create a cohesive brand experience.',
    tech: ['Branding', 'Strategy', 'Graphic Design', 'Marketing'],
    features: [
      'Complete brand identity system',
      'Logo and visual guidelines',
      'Marketing strategy and positioning',
      'Community engagement framework',
      'Digital and print collateral design',
      'Implementation roadmap'
    ],
    timeline: 'September 2023 - December 2023',
    link: 'https://www.canva.com/design/DAFdDTj0MAk/_ZTPRoR-LAyl9fURGo5hnQ/edit'
  },
  cubesat: {
    title: 'CubeSat Satellite Engineering',
    image: 'https://framerusercontent.com/images/3pb2YIZPlXR8xzUjDbjVaEeNJmc.png',
    description: 'Contributed to 3D CAD design and engineering of CubeSat satellite components during Northrop Grumman internship. Focused on structural integrity, thermal management, and manufacturability.',
    tech: ['CAD Design', 'SolidWorks', 'Aerospace Engineering', 'Systems Integration'],
    features: [
      '3D modeling of satellite components',
      'Structural analysis and optimization',
      'Thermal management design',
      'Manufacturing specification documentation',
      'Cross-team collaboration',
      'Design review presentations'
    ],
    timeline: 'June 2023 - August 2025',
    link: 'https://www.northropgrumman.com/'
  }
};

// Open modal
document.querySelectorAll('.quick-view-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const projectId = btn.dataset.project;
    const project = projectData[projectId];

    if (!project) return;

    // Build modal content
    modalBody.innerHTML = `
      <div class="modal-image">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="modal-info">
        <h2>${project.title}</h2>
        <p class="modal-description">${project.description}</p>

        <div class="modal-section">
          <h3>Technologies</h3>
          <div class="modal-tags">
            ${project.tech.map(tech => `<span class="tag">${tech}</span>`).join('')}
          </div>
        </div>

        <div class="modal-section">
          <h3>Key Features</h3>
          <ul class="features-list">
            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </div>

        <div class="modal-section">
          <h3>Timeline</h3>
          <p>${project.timeline}</p>
        </div>

        <div class="modal-actions">
          <a href="${project.link}" target="_blank" class="modal-btn primary">View Project</a>
          ${project.github ? `<a href="${project.github}" target="_blank" class="modal-btn secondary">View on GitHub</a>` : ''}
        </div>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Track modal view
    trackEvent('project_quick_view', {
      project: projectId
    });
  });
});

// Close modal
function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
    closeModal();
  }
});

// Track project link clicks
document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    const title = card.querySelector('.project-title').textContent;
    const linkType = link.classList.contains('primary') ? 'primary' : 'secondary';

    trackEvent('project_link_click', {
      project: title,
      link_type: linkType,
      url: link.href
    });
  });
});

// Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe CTA section
document.querySelectorAll('.cta-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Initialize on load
window.addEventListener('load', () => {
  createParticles();
  animateCounters();

  // Track page view
  trackEvent('page_view', {
    page: 'projects',
    total_projects: projectCards.length
  });
});

// Track time spent on page
let pageStartTime = Date.now();

window.addEventListener('beforeunload', () => {
  const timeSpent = Math.round((Date.now() - pageStartTime) / 1000);
  trackEvent('page_time_spent', {
    page: 'projects',
    seconds: timeSpent
  });
});

// Console Easter Egg
console.log(
  '%c🚀 Projects Page Loaded!',
  'font-size: 20px; font-weight: bold; color: #667eea;'
);
console.log(
  '%cExploring the code? Let\'s build something together!',
  'font-size: 14px; color: #a0a0a0;'
);
