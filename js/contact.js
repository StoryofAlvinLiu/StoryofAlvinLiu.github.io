// Contact Page JavaScript

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

// Track Contact Card Clicks
document.querySelectorAll('.contact-card').forEach(card => {
  card.addEventListener('click', (e) => {
    const cardType = e.currentTarget.dataset.card;
    trackEvent('contact_method_click', {
      method: cardType,
      location: 'contact_page'
    });
  });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    const wasActive = faqItem.classList.contains('active');

    // Close all other FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('active');
      }
    });

    // Toggle current FAQ
    faqItem.classList.toggle('active');

    // Track FAQ interaction
    if (!wasActive) {
      const question = button.querySelector('span').textContent;
      trackEvent('faq_click', {
        question: question
      });
    }
  });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const submitBtn = contactForm.querySelector('.submit-btn');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Get form data
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
    budget: document.getElementById('budget').value || 'Not specified'
  };

  // Track form submission attempt
  trackEvent('contact_form_submit', {
    has_budget: !!document.getElementById('budget').value,
    message_length: formData.message.length
  });

  // Show loading state
  submitBtn.classList.add('loading');
  formMessage.style.display = 'none';

  try {
    // Simulate API call (replace with your actual endpoint)
    // Example using FormSubmit.co or similar service
    const response = await fetch('https://formsubmit.co/ajax/alvinliu@officeofalvinliu.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      // Success
      formMessage.textContent = '✓ Message sent successfully! I\'ll get back to you within 24 hours.';
      formMessage.className = 'form-message success';
      formMessage.style.display = 'block';

      // Reset form
      contactForm.reset();

      // Track successful submission
      trackEvent('contact_form_success', {
        budget: formData.budget
      });

      // Auto-hide message after 5 seconds
      setTimeout(() => {
        formMessage.style.display = 'none';
      }, 5000);
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    // Error handling
    formMessage.textContent = '✗ Failed to send message. Please try emailing me directly at alvinliu@officeofalvinliu.com';
    formMessage.className = 'form-message error';
    formMessage.style.display = 'block';

    // Track error
    trackEvent('contact_form_error', {
      error: error.message
    });
  } finally {
    // Remove loading state
    submitBtn.classList.remove('loading');
  }
});

// Form field validation feedback
const inputs = contactForm.querySelectorAll('input, textarea, select');
inputs.forEach(input => {
  input.addEventListener('blur', () => {
    if (input.hasAttribute('required') && !input.value.trim()) {
      input.style.borderColor = 'rgba(239, 68, 68, 0.5)';
    } else {
      input.style.borderColor = '';
    }
  });

  input.addEventListener('focus', () => {
    input.style.borderColor = '';
  });
});

// Animate elements on scroll
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

// Observe all cards and sections
document.querySelectorAll('.contact-card, .info-card, .faq-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Stagger animation for contact cards
document.querySelectorAll('.contact-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
});

// Page load animation
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Track time spent on page
let pageStartTime = Date.now();

window.addEventListener('beforeunload', () => {
  const timeSpent = Math.round((Date.now() - pageStartTime) / 1000);
  trackEvent('page_time_spent', {
    page: 'contact',
    seconds: timeSpent
  });
});

// Console message for recruiters/developers
console.log(
  '%cHey there! 👋',
  'font-size: 20px; font-weight: bold; color: #667eea;'
);
console.log(
  '%cLooks like you\'re checking out the code. I like your style!',
  'font-size: 14px; color: #a0a0a0;'
);
console.log(
  '%cFeel free to reach out: alvinliu@officeofalvinliu.com',
  'font-size: 14px; color: #667eea;'
);
