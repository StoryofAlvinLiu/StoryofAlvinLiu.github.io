// Recommendations Page JavaScript - UPDATED WITH REAL DATA

// ============================================================================
// 🎯 REAL RECOMMENDATIONS FROM LINKEDIN
// ============================================================================
// To add relationship tags, just edit the 'relationship' field below!
// ============================================================================

const recommendationsData = [
  {
    name: "Trevor Albertson",
    title: "Board Member, Political-Diplomatic Historian, and former US Intelligence Community",
    relationship: "", // Add: Senior/Mentor/Colleague/etc
    image: "",
    linkedinUrl: "https://www.linkedin.com/in/trevor-albertson/",
    preview: "Alvin is a student at one of America's top-25 universities and an aspiring professional. His commitment to his education and nascent career are evident in his ambition and drive.",
    fullText: "Alvin is a student at one of America's top-25 universities and an aspiring professional. His commitment to his education and nascent career are evident in his ambition and drive.",
    date: "October 10, 2025"
  },
  {
    name: "John S. Gibson",
    title: "SVP / Marketing Executive | Brand, Growth & Go-to-Market Leadership | Former Agency President | Revenue & Team Builder",
    relationship: "Mentor",
    image: "",
    linkedinUrl: "https://www.linkedin.com/in/johnsgibson/",
    preview: "Alvin participated in an advertising mentorship program put on by my agency The Woo. From the onset, Alvin demonstrated an intense curiosity and always took the initiative when it came to leadership...",
    fullText: "Alvin participated in an advertising mentorship program put on by my agency The Woo. The program was designed specifically for high schoolers to learn and participate in the research and development of an advertising campaign for a current client over a period of several weeks. While we had varying degrees of participation from the cohort of students, from the onset, Alvin demonstrated an intense curiosity and always took the initiative when it came to leadership amongst his group. He listened intently to program mentors, internalized the information they shared and was the first to ask thoughtful questions which benefitted the group overall. Alvin showed himself to be an energetic, persistent student who was always focused on expanding his understanding of a topic and his connections with others. He clearly enjoyed working within a team dynamic and proved to be generous learner by sharing his thoughts and eliciting input from others in order to creatively problem solve. In the presentation of his group's campaign to our client, Alvin's passion for the work he and the team developed was clearly evident in all aspects - research, strategy and creative development - and set a very high bar. It is this level of participation that makes the program so fulfilling for everyone involved. I have no doubt that Alvin will thrive in any endeavor he pursues and I look forward to following his continued growth and success!",
    date: "October 2, 2025",
    featured: true
  },
  {
    name: "Eric Marintsch",
    title: "Career Technical Educator | Project-Based Learning | Passionate about creative applications of computer science",
    relationship: "Teacher",
    image: "",
    linkedinUrl: "https://www.linkedin.com/in/eric-marintsch/",
    preview: "Alvin is an exceptionally dedicated, proactive, energetic, and determined individual who thrives on continuous learning and leadership...",
    fullText: "Alvin is an exceptionally dedicated, proactive, energetic, and determined individual who thrives on continuous learning and leadership. As his CS instructor, I admired how he constantly sought out ways to develop his skills and elevate the quality of his work. It's been exciting to follow his journey after graduation and watch him apply that same passion to emerging opportunities in STEM and business!",
    date: "September 23, 2025"
  },
  {
    name: "Asiyah Awais",
    title: "Building Smarter Femtech @ Theranova | UC Berkeley + UCSF",
    relationship: "Colleague",
    image: "",
    linkedinUrl: "https://www.linkedin.com/in/asiyah-awais/",
    preview: "Alvin played a crucial role in making my experience as a panelist at Merced 2 Market 2025 seamless and enjoyable...",
    fullText: "Alvin played a crucial role in making my experience as a panelist at Merced 2 Market 2025 seamless and enjoyable. He showed true dedication to amplifying the voices of entrepreneurs within the UC system and creating opportunities for others interested in following a similar path. As an energetic and thoughtful host, Alvin kept the panel engaging and ensured everything ran smoothly from start to finish.",
    date: "September 20, 2025"
  },
  {
    name: "Claudia Garcia",
    title: "Empowering Learners Through Purposeful Design & Support",
    relationship: "Manager",
    image: "",
    linkedinUrl: "https://www.linkedin.com/in/claudiagarcia/",
    preview: "Alvin stood out among the almost 100 fellows in a coding fellowship cohort. He was always on time, receptive to feedback, well dressed...",
    fullText: "Alvin stood out among the almost 100 fellows in a coding fellowship cohort he was part of a couple of years ago (the KKCF program through The Knowledge House). He was always on time, receptive to feedback, well dressed (as he would join our Zoom sessions while ready for his other school responsibilities in a suit and tie) & always communicative. He truly put the version of me in high school to shame! It was such a pleasure working with him & I can't wait to see where his college journey takes him!",
    date: "September 16, 2025"
  },
  {
    name: "Kira Bustillos",
    title: "University of California, Merced Alumni",
    relationship: "Manager",
    image: "",
    linkedinUrl: "https://www.linkedin.com/in/kira-bustillos/",
    preview: "Alvin was a standout intern with his strong work ethic and professionalism...",
    fullText: "Alvin was a standout intern with his strong work ethic and professionalism. During his internship, he collaborated well with our team and took on every task with enthusiasm and attention to detail.",
    date: "September 12, 2025"
  },
  {
    name: "Angel Maxwell",
    title: "Champion in self-awareness; building relationships and learning people | Leadership Development & Psychologically Safe Work Environments",
    relationship: "Mentor",
    image: "",
    linkedinUrl: "https://www.linkedin.com/in/angelmaxwell/",
    preview: "Alvin is such a bright mind that I am fortunate to have met during his time at Da Vinci Highschool! As a member of DECA he has shined brightly...",
    fullText: "Alvin is such a bright mind that I am fortunate to have met during his time at Da Vinci Highschool! As a member of DECA he has shined brightly and paved a path for other student leaders to follow and admire. He has now taken his talents as a dual major in engineering and business Econ. and I'm grateful to continue to keep in touch with him. His devotion to the greater good makes him an invaluable asset to have on anyone's team.",
    date: "September 9, 2025"
  },
  {
    name: "Rafael Pacquing",
    title: "Principal Counsel - Venture Capital and Startups at University of California Office of the President",
    relationship: "",
    image: "",
    linkedinUrl: "https://www.linkedin.com/in/rafael-pacquing/",
    preview: "I met Alvin when he was assisting at a UC intellectual property conference. His questions were substantive and demonstrated genuine interest...",
    fullText: "I met Alvin when he was assisting at a UC intellectual property conference where he took care of many of the conference's logistics. At dinner, Alvin approached me and several attendees, including attorneys and venture capital managers, to ask about our career paths. His questions were substantive and the conversations with him demonstrated that he had genuine interest in the conference and his own career. I give Alvin my recommendation as his attitude and initiative will take him far and will benefit those who work with him.",
    date: "September 7, 2025"
  },
  {
    name: "Alicia Laufer",
    title: "Principal Brand Strategist ◆ Strategy lead for #1 league-wide NBA All-Star engagement ◆ Obsessed with fandoms",
    relationship: "Manager",
    image: "",
    linkedinUrl: "https://www.linkedin.com/in/alicialaufer/",
    preview: "I had the pleasure of working with Alvin during his time in Woo's high school mentorship program. He stood out immediately for his initiative and professionalism...",
    fullText: "I had the pleasure of working with Alvin during his time in Woo's high school mentorship program on Team Noodle and he stood out immediately for his initiative and professionalism. Alvin consistently went above and beyond—showing up prepared, engaged, and eager to contribute thoughtful ideas to the team. He brought a refreshing mix of curiosity, forward-thinking, and genuine enthusiasm, always willing to learn and equally willing to support his peers. I'm excited to see how his drive and leadership continue to shape his future.",
    date: "September 6, 2025"
  },
  {
    name: "Cindy Le",
    title: "Corporate Responsibility Strategist | Nonprofit Thought Partner",
    relationship: "Colleague",
    image: "",
    linkedinUrl: "https://www.linkedin.com/in/cindyle/",
    preview: "I had the pleasure of working with Alvin during Northrop Grumman's two-year high school involvement program. His dedication to learning is matched only by his energetic presence...",
    fullText: "I had the pleasure of working with Alvin during Northrop Grumman's two-year high school involvement program, and it's been incredible to see his growth since then. Now a double major in Computer Science & Engineering and Management & Business Economics, Alvin continues to stand out as an ambitious and well-rounded individual with a bright future in tech and business.\n\nFrom day one, Alvin demonstrated initiative and leadership far beyond his years. Whether he was taking the lead on a group project or helping his peers navigate a complex problem, he consistently stepped up to the challenge. His dedication to learning is matched only by his energetic presence—he brings genuine passion to every conversation and is always eager to network, explore new ideas, and push the boundaries of what he knows.\n\nAlvin is not only outspoken in the best way—asking questions, sharing perspectives, and driving discussions—but also remarkably persistent. He doesn't shy away from challenges and shows a strong commitment to continuous improvement. I have no doubt that Alvin will make meaningful contributions wherever he goes, and I highly recommend him to any opportunity that values intelligence, initiative, and integrity.",
    date: "September 5, 2025",
    featured: true
  },
  {
    name: "Olivia Alvarez, MPH",
    title: "F1 Course Coordinator at University of California, Merced | UC Merced Alumni Association Board of Directors",
    relationship: "",
    image: "",
    linkedinUrl: "https://www.linkedin.com/in/oliviaalvarez/",
    preview: "I am pleased to recommend Alvin, a highly driven and persistent individual who consistently demonstrates a strong willingness to learn and grow...",
    fullText: "I am pleased to recommend Alvin, a highly driven and persistent individual who consistently demonstrates a strong willingness to learn and grow. He actively seeks feedback, applies it thoughtfully, and is never afraid to put in the necessary work to develop his skills. His mindset, work ethic, and eagerness to practice and refine his abilities make him a valuable asset to any team or project. I have no doubt that Alvin will continue to succeed and make meaningful contributions wherever he goes.",
    date: "September 5, 2025"
  },
  {
    name: "Angus M. MacDonald",
    title: "Managing Counsel, University of California",
    relationship: "",
    image: "",
    linkedinUrl: "https://www.linkedin.com/in/angusmacdonald/",
    preview: "Alvin is an eager learner. I appreciate his dedication to his commitments, and I admire his willingness to network.",
    fullText: "Alvin is an eager learner. I appreciate his dedication to his commitments, and I admire his willingness to network.",
    date: "September 5, 2025"
  },
  {
    name: "Justin Hicks Ph.D.",
    title: "Associate Professor of Teaching, Economics (LSOE) at University of California, Merced",
    relationship: "Manager",
    image: "",
    linkedinUrl: "https://www.linkedin.com/in/justinhicksphd/",
    preview: "Alvin is detail oriented, hard working and motivated. A perfect trio for anyone looking to add talent to their team.",
    fullText: "Alvin is detail oriented, hard working and motivated. A perfect trio for anyone looking to add talent to their team.",
    date: "September 4, 2025"
  },
  {
    name: "Andy de Seriere",
    title: "STEM Teacher Project Lead the Way",
    relationship: "Mentor",
    image: "",
    linkedinUrl: "https://www.linkedin.com/in/andydeseriere/",
    preview: "Alvin is an outstanding scholar and leader who dedicated an enormous amount of time and effort into all things STEM...",
    fullText: "Alvin is an outstanding scholar and leader who dedicated an enormous amount of time and effort into all things STEM. He was instrumental as key student leader in planning and supporting STEM events such as our Autodesk CAD and Engineering Hackathon challenges. Alvin took top honors in many challenges including first place in the Mousetrap Car performance competition. Wiseburn Unified School District is grateful to Alvin for his support over the years. Alvin's passion and dedication to STEM education is inspiring.",
    date: "September 4, 2025"
  },
  {
    name: "Nathan Mayeda",
    title: "Supply Chain Program Intern @ Moog | Economics and Data Science @ USC",
    relationship: "Classmate",
    image: "",
    linkedinUrl: "https://www.linkedin.com/in/nathanmayeda/",
    preview: "Alvin is one of the hardest workers I know. In every way he would go above and beyond what was required of him...",
    fullText: "Alvin is one of the hardest workers I know. In every way he would go above and beyond what was required of him. Beyond that, his kindness, willingness to work with others, and encouragement made him a classmate I wanted to befriend.",
    date: "April 26, 2024"
  },
  {
    name: "Jazmin Jacamo",
    title: "Go-To Social Media Girl 📲🌻 (#SocialMediaManager) II Student at University of La Verne",
    relationship: "Colleague",
    image: "",
    linkedinUrl: "https://www.linkedin.com/in/jazminjacamo/",
    preview: "There's not much else I can say that Alvin hasn't showcased himself. He's an excellent worker, leader, team-player, and individual...",
    fullText: "There's not much else I can say that Alvin hasn't showcased himself. He's an excellent worker, leader, team-player, and individual. He's constantly on-top of his tasks and dares to challenge the standard. He pushes the limits to everyone's expectations 24/7, to the point where he's practically inhumane. Everyone needs an Alvin in their life, no matter the circumstances. I highly recommend him for ANY position because he's always passionate within' everything he does, and excels at his craft.",
    date: "April 25, 2024"
  }

  // 💡 TO ADD MORE: Use the same format as above!
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

// Create Floating Quote Marks
function createFloatingQuotes() {
  const container = document.getElementById('floatingQuotes');
  if (!container) return;

  const quotes = ['"', '"', '"', '"', '"'];

  quotes.forEach((quote, i) => {
    const quoteEl = document.createElement('div');
    quoteEl.className = 'quote-mark';
    quoteEl.textContent = quote;

    quoteEl.style.left = (Math.random() * 80 + 10) + '%';
    quoteEl.style.top = (Math.random() * 80 + 10) + '%';
    quoteEl.style.animationDelay = (i * 2) + 's';

    container.appendChild(quoteEl);
  });
}

// Get Color for Avatar
function getAvatarColor(name) {
  const colors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  ];

  const firstChar = name.charAt(0).toUpperCase();
  const index = firstChar.charCodeAt(0) % colors.length;
  return colors[index];
}

// Modal Functions
let currentModalData = null;

function openModal(rec) {
  currentModalData = rec;
  const modal = document.getElementById('recModal');
  const modalName = document.getElementById('modalRecName');
  const modalTitle = document.getElementById('modalRecTitle');
  const modalRelationship = document.getElementById('modalRecRelationship');
  const modalText = document.getElementById('modalRecText');
  const modalDate = document.getElementById('modalRecDate');
  const modalAvatar = document.getElementById('modalRecAvatar');
  const viewProfileBtn = document.getElementById('viewProfileBtn');

  // Set avatar
  if (rec.image && rec.image.trim() !== '') {
    modalAvatar.innerHTML = `<img src="${rec.image}" alt="${rec.name}">`;
  } else {
    modalAvatar.innerHTML = rec.name.charAt(0).toUpperCase();
    modalAvatar.style.background = getAvatarColor(rec.name);
  }

  // Set content
  modalName.textContent = rec.name;
  modalTitle.textContent = rec.title;
  modalText.textContent = rec.fullText;
  modalDate.textContent = rec.date;

  // Set relationship badge
  if (rec.relationship && rec.relationship.trim() !== '') {
    modalRelationship.textContent = rec.relationship;
    modalRelationship.style.display = 'inline-block';
  } else {
    modalRelationship.style.display = 'none';
  }

  // Set profile button
  viewProfileBtn.onclick = () => {
    window.open(rec.linkedinUrl, '_blank');
    trackEvent('linkedin_profile_view', {
      name: rec.name,
      from: 'modal'
    });
  };

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  trackEvent('recommendation_modal_open', {
    name: rec.name
  });
}

function closeModal() {
  const modal = document.getElementById('recModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Render Recommendations
function renderRecommendations() {
  const grid = document.getElementById('recommendationsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  recommendationsData.forEach((rec, index) => {
    const card = document.createElement('article');
    card.className = `recommendation-card${rec.featured ? ' featured' : ''}`;
    card.style.animationDelay = `${index * 0.1}s`;
    card.style.cursor = 'pointer';

    card.innerHTML = `
      <div class="rec-header">
        <div class="rec-avatar" style="${rec.image ? '' : 'background: ' + getAvatarColor(rec.name)}">
          ${rec.image && rec.image.trim() !== '' ? `<img src="${rec.image}" alt="${rec.name}">` : rec.name.charAt(0).toUpperCase()}
        </div>
        <div class="rec-info">
          <div class="rec-name">${rec.name}</div>
          <div class="rec-title">${rec.title}</div>
          ${rec.relationship && rec.relationship.trim() !== '' ? `<div class="rec-relationship">${rec.relationship}</div>` : ''}
        </div>
      </div>
      <p class="rec-text">${rec.preview}</p>
      <div class="rec-read-more">Click to read full recommendation →</div>
    `;

    // Add click listener
    card.addEventListener('click', () => {
      openModal(rec);
    });

    grid.appendChild(card);

    // Track card view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          trackEvent('recommendation_view', {
            name: rec.name,
            relationship: rec.relationship
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(card);
  });

  // Update stats
  const totalRecs = document.getElementById('totalRecommendations');
  const totalConns = document.getElementById('totalConnections');

  if (totalRecs) {
    animateCounter(totalRecs, recommendationsData.length);
  }
  if (totalConns) {
    animateCounter(totalConns, 500); // Professional connections estimate
  }
}

// Animate Counter
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

// Close modal on outside click
document.addEventListener('click', (e) => {
  const modal = document.getElementById('recModal');
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Track LinkedIn CTA
document.querySelector('.linkedin-btn')?.addEventListener('click', () => {
  trackEvent('linkedin_profile_click', {
    location: 'recommendations_page',
    section: 'linkedin_cta'
  });
});

// Track CTA Buttons
document.querySelectorAll('.cta-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    trackEvent('cta_click', {
      button_text: e.target.textContent.trim(),
      page: 'recommendations',
      destination: e.target.href
    });
  });
});

// Initialize
window.addEventListener('load', () => {
  createFloatingQuotes();
  renderRecommendations();

  trackEvent('page_view', {
    page: 'recommendations',
    total_recommendations: recommendationsData.length
  });
});

// Track time spent
let pageStartTime = Date.now();

window.addEventListener('beforeunload', () => {
  const timeSpent = Math.round((Date.now() - pageStartTime) / 1000);
  trackEvent('page_time_spent', {
    page: 'recommendations',
    seconds: timeSpent
  });
});

console.log('%c💬 Recommendations Page - Updated with Real Data!', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%c16 real LinkedIn recommendations loaded!', 'font-size: 14px; color: #a0a0a0;');
