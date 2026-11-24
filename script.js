/**
 * ====================================================================
 * ZIYAN KHAN PORTFOLIO — INTERACTIVE & DYNAMIC ENGINE
 * High Performance • Vanilla JS • 0 External Heavy Dependencies
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error('Portfolio data not loaded. Check content.js');
    return;
  }

  // 1. Initialize UI Renderers from content.js
  renderHero(data.hero);
  renderMarquee(data.marquee);
  renderAbout(data.about);
  renderSkills(data.skills);
  renderExperience(data.experience);
  renderProjects(data.projects);
  renderServices(data.services);
  renderAchievements(data.achievements);
  renderCertifications(data.certifications);
  renderContact(data.contact);
  renderFooter(data.footer);

  // 2. Initialize Micro-interactions
  initScrollProgressBar();
  initTypingEffect(data.hero.typingRoles);
  initNavbar();
  initScrollReveal();
  init3DTilt();
  initLightbox();
});

/* --------------------------------------------------------------------
   Hero Renderer
   -------------------------------------------------------------------- */
function renderHero(hero) {
  const badgeEl = document.getElementById('hero-badge-text');
  if (badgeEl) badgeEl.textContent = hero.badge;

  const subtextEl = document.getElementById('hero-subtext');
  if (subtextEl) subtextEl.textContent = hero.subtext;

  // Floating Glass Cards
  const floatContainer = document.getElementById('hero-floating-cards');
  if (floatContainer && hero.floatingCards) {
    floatContainer.innerHTML = hero.floatingCards.map(c => `
      <div class="glass-card hero-float-card tilt-card" data-tilt>
        <div class="float-icon"><i class="${c.icon}"></i></div>
        <div class="float-info">
          <h3>${c.title}</h3>
          <p>${c.subtitle}</p>
          <span class="float-badge">${c.badge}</span>
        </div>
      </div>
    `).join('');
  }

  // Stat Chips
  const statsContainer = document.getElementById('hero-stats-grid');
  if (statsContainer && hero.stats) {
    statsContainer.innerHTML = hero.stats.map(s => `
      <div class="glass-card stat-chip tilt-card" data-tilt>
        <div class="stat-value">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join('');
  }
}

/* --------------------------------------------------------------------
   Marquee Renderer
   -------------------------------------------------------------------- */
function renderMarquee(items) {
  const track = document.getElementById('marquee-track');
  if (!track || !items) return;

  // Double items for seamless infinite loop
  const doubleList = [...items, ...items];
  track.innerHTML = doubleList.map(item => `
    <div class="marquee-item">
      <i class="${item.icon}"></i>
      <span>${item.name}</span>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------
   About Renderer
   -------------------------------------------------------------------- */
function renderAbout(about) {
  const textContainer = document.getElementById('about-summary-text');
  if (textContainer && about.summary) {
    textContainer.innerHTML = about.summary.map(p => `<p>${p}</p>`).join('');
  }

  const highlightsContainer = document.getElementById('about-highlights-grid');
  if (highlightsContainer && about.highlights) {
    highlightsContainer.innerHTML = about.highlights.map(h => `
      <div class="highlight-box">
        <h4>${h.title}</h4>
        <p>${h.desc}</p>
      </div>
    `).join('');
  }

  const eduContainer = document.getElementById('about-education-content');
  if (eduContainer && about.education) {
    const e = about.education;
    eduContainer.innerHTML = `
      <div class="edu-header">
        <div class="edu-header-icon"><i class="fa-solid fa-graduation-cap"></i></div>
        <div>
          <span class="edu-meta-tag">${e.timeline}</span>
          <h3 class="edu-title">${e.degree}</h3>
          <p class="edu-school-line">${e.institute} • <strong>${e.cgpa}</strong></p>
        </div>
      </div>
      <div class="schooling-pill">
        <i class="fa-solid fa-school" style="margin-right: 6px; color: var(--accent-blue-light);"></i>
        ${e.schooling}
      </div>
    `;
  }
}

/* --------------------------------------------------------------------
   Skills Renderer
   -------------------------------------------------------------------- */
function renderSkills(skills) {
  const grid = document.getElementById('skills-grid');
  if (!grid || !skills) return;

  grid.innerHTML = skills.map(cat => `
    <div class="glass-card skill-category-card tilt-card reveal" data-tilt>
      <div class="skill-cat-header">
        <div class="skill-cat-icon"><i class="${cat.icon}"></i></div>
        <h3 class="skill-cat-title">${cat.category}</h3>
      </div>
      <div class="skill-chips">
        ${cat.items.map(skill => `<span class="skill-chip">${skill}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------
   Experience Timeline Renderer
   -------------------------------------------------------------------- */
function renderExperience(expList) {
  const timeline = document.getElementById('experience-timeline');
  if (!timeline || !expList) return;

  timeline.innerHTML = expList.map((item, index) => {
    if (item.type === 'training') {
      return `
        <div class="timeline-item reveal">
          <div class="timeline-marker"></div>
          <div class="glass-card timeline-content">
            <div class="timeline-header">
              <div>
                <h3 class="timeline-role">${item.role}</h3>
                <span class="timeline-org">${item.organization}</span>
              </div>
              <span class="timeline-period">${item.period}</span>
            </div>
            <div class="compact-training-list">
              ${item.compactItems.map(t => `
                <div class="training-item">
                  <h4>${t.name}</h4>
                  <p>${t.issuer} (${t.period})</p>
                  ${t.id ? `<small style="color: var(--accent-blue-light);">Credential: ${t.id}</small>` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }

    return `
      <div class="timeline-item ${index === 0 ? 'active' : ''} reveal">
        <div class="timeline-marker"></div>
        <div class="glass-card timeline-content">
          <div class="timeline-header">
            <div>
              <h3 class="timeline-role">${item.role}</h3>
              <div class="timeline-org">
                <i class="fa-solid fa-briefcase"></i> ${item.organization}
                ${item.link ? `• <a href="${item.link}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-blue-light); text-decoration: none;"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live</a>` : ''}
              </div>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="float-badge">${item.badge}</span>
              <span class="timeline-period">${item.period}</span>
            </div>
          </div>
          <p style="color: var(--text-secondary); margin-bottom: 12px; font-size: 0.95rem;">${item.description}</p>
          <ul class="timeline-bullets">
            ${item.completedHighlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
          ${item.nextRoadmap ? `<div class="timeline-roadmap"><i class="fa-solid fa-compass" style="margin-right:6px;"></i>${item.nextRoadmap}</div>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

/* --------------------------------------------------------------------
   Projects Renderer
   -------------------------------------------------------------------- */
function renderProjects(projects) {
  const grid = document.getElementById('projects-grid');
  if (!grid || !projects) return;

  // Filter out items where showJobRec is false
  const activeProjects = projects.filter(p => p.showJobRec !== false);

  grid.innerHTML = activeProjects.map(p => {
    const isFairTours = p.id === 'fairtours' && p.images && p.images.length > 1;

    return `
      <div class="glass-card project-card tilt-card reveal" data-tilt>
        <div class="project-thumbnail-wrapper" id="thumb-wrapper-${p.id}">
          <img 
            src="${p.images[0]}" 
            alt="${p.title}" 
            class="project-thumbnail" 
            id="proj-img-${p.id}" 
            loading="lazy"
            width="800"
            height="450"
          >
          <span class="project-badge ${p.status.includes('Live') ? 'badge-live' : 'badge-progress'}">${p.status}</span>
          ${isFairTours ? `
            <div class="screenshot-tabs">
              ${p.images.map((_, i) => `
                <button 
                  class="thumb-dot ${i === 0 ? 'active' : ''}" 
                  onclick="switchProjectImage('${p.id}', '${p.images[i]}', this)"
                  aria-label="View screenshot ${i + 1}"
                ></button>
              `).join('')}
            </div>
          ` : ''}
        </div>
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-tagline">${p.tagline}</p>
          <p class="project-desc">${p.description}</p>
          ${p.metrics ? `<div class="project-metrics"><i class="fa-solid fa-gauge-high"></i> ${p.metrics}</div>` : ''}
          <div class="project-tech-tags">
            ${p.tech.map(t => `<span class="project-tech-tag">${t}</span>`).join('')}
          </div>
          <div class="project-actions">
            ${p.live ? `
              <a href="${p.live}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Site
              </a>
            ` : ''}
            ${p.github ? `
              <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                <i class="fa-brands fa-github"></i> GitHub
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Global switcher for Fair Tours screenshots
window.switchProjectImage = function(projId, src, btn) {
  const img = document.getElementById(`proj-img-${projId}`);
  if (img) img.src = src;
  const parent = btn.parentElement;
  if (parent) {
    parent.querySelectorAll('.thumb-dot').forEach(d => d.classList.remove('active'));
    btn.classList.add('active');
  }
};

/* --------------------------------------------------------------------
   Services Renderer
   -------------------------------------------------------------------- */
function renderServices(services) {
  const grid = document.getElementById('services-grid');
  if (!grid || !services) return;

  grid.innerHTML = services.map(s => `
    <div class="glass-card service-card tilt-card reveal" data-tilt>
      <div>
        <div class="service-header">
          <div class="service-icon"><i class="${s.icon}"></i></div>
          <span class="service-badge">${s.badge}</span>
        </div>
        <h3 class="service-title">${s.title}</h3>
        <p class="service-desc">${s.description}</p>
        <ul class="service-features">
          ${s.features.map(f => `<li><i class="fa-solid fa-circle-check"></i> ${f}</li>`).join('')}
        </ul>
      </div>
      <a href="mailto:ziyankhan809@gmail.com?subject=${encodeURIComponent(s.ctaMailSubject)}" class="btn btn-secondary btn-sm" style="width: 100%; margin-top: 20px;">
        <i class="fa-solid fa-envelope"></i> ${s.ctaText}
      </a>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------
   Achievements Renderer
   -------------------------------------------------------------------- */
function renderAchievements(achievements) {
  const grid = document.getElementById('achievements-grid');
  if (!grid || !achievements) return;

  grid.innerHTML = achievements.map(a => `
    <div class="glass-card achievement-card tilt-card reveal" data-tilt>
      <div class="achievement-icon"><i class="${a.icon}"></i></div>
      <div class="achievement-info">
        <h3>${a.title}</h3>
        <p>${a.desc}</p>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------
   Certifications Renderer (Featured 4 + Expandable)
   -------------------------------------------------------------------- */
let certsExpanded = false;

function renderCertifications(certConfig) {
  const grid = document.getElementById('certs-grid');
  const toggleBtn = document.getElementById('certs-toggle-btn');
  if (!grid || !certConfig) return;

  const itemsToRender = certsExpanded ? certConfig.items : certConfig.items.slice(0, certConfig.featuredCount);

  grid.innerHTML = itemsToRender.map(c => `
    <div class="glass-card cert-card tilt-card reveal" data-tilt>
      <div class="cert-preview-wrapper" onclick="openCertLightbox('${c.image}', '${c.title}')">
        <img src="${c.image}" alt="${c.title}" class="cert-preview-img" loading="lazy">
      </div>
      <div>
        <h3 class="cert-title">${c.title}</h3>
        <p class="cert-issuer">${c.issuer}</p>
        ${c.credentialId ? `<p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:8px;">ID: ${c.credentialId}</p>` : ''}
        <div class="cert-tags">
          ${c.tags ? c.tags.map(t => `<span class="cert-tag">${t}</span>`).join('') : ''}
        </div>
      </div>
      <button class="btn btn-secondary btn-sm" onclick="openCertLightbox('${c.image}', '${c.title}')">
        <i class="fa-solid fa-expand"></i> View Certificate
      </button>
    </div>
  `).join('');

  if (toggleBtn) {
    toggleBtn.innerHTML = certsExpanded 
      ? '<i class="fa-solid fa-chevron-up"></i> Show Less Certifications'
      : `<i class="fa-solid fa-chevron-down"></i> Show All Certifications (${certConfig.items.length})`;
  }
}

window.toggleAllCerts = function() {
  certsExpanded = !certsExpanded;
  renderCertifications(window.PORTFOLIO_DATA.certifications);
};

/* --------------------------------------------------------------------
   Contact Renderer
   -------------------------------------------------------------------- */
function renderContact(contact) {
  const container = document.getElementById('contact-container');
  if (!container || !contact) return;

  container.innerHTML = `
    <div class="glass-card contact-card tilt-card" data-tilt>
      <span class="section-tag"><i class="fa-solid fa-paper-plane"></i> Get in Touch</span>
      <h2>${contact.heading}</h2>
      <p>${contact.subheading}</p>
      
      <div class="contact-buttons-group">
        <a href="mailto:${contact.email}" class="btn btn-primary">
          <i class="fa-solid fa-envelope"></i> Email Me (${contact.email})
        </a>
        <a href="${contact.linkedin}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <i class="fa-brands fa-linkedin"></i> LinkedIn
        </a>
        <a href="${contact.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <i class="fa-brands fa-github"></i> GitHub
        </a>
        <a href="${contact.resumeUrl}" download class="btn btn-secondary">
          <i class="fa-solid fa-file-arrow-down"></i> Download Resume
        </a>
      </div>

      <div class="contact-location-pill">
        <i class="fa-solid fa-location-dot" style="color: var(--accent-blue-light);"></i>
        <span>${contact.location}</span>
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------
   Footer Renderer
   -------------------------------------------------------------------- */
function renderFooter(footer) {
  const copyEl = document.getElementById('footer-copy');
  if (copyEl && footer) copyEl.textContent = footer.copyright;

  const tagEl = document.getElementById('footer-tagline');
  if (tagEl && footer) tagEl.textContent = footer.tagline;
}

/* --------------------------------------------------------------------
   Interactive Enhancements
   -------------------------------------------------------------------- */

// Scroll Progress Bar
function initScrollProgressBar() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    bar.style.width = scrolled + '%';
  }, { passive: true });
}

// Typing Text Effect in Hero
function initTypingEffect(roles) {
  const el = document.getElementById('typing-text');
  if (!el || !roles || !roles.length) return;

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 100;

  function type() {
    const current = roles[roleIndex];
    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      delay = 50;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      delay = 110;
    }

    if (!isDeleting && charIndex === current.length) {
      delay = 2000; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 400; // Pause before next word
    }

    setTimeout(type, delay);
  }

  type();
}

// Navbar Scroll Effect, Mobile Menu & Active Nav Highlight
function initNavbar() {
  const nav = document.querySelector('.navbar');
  const toggleBtn = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  // Sticky blur on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile drawer toggle
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
      toggleBtn.innerHTML = isOpen 
        ? '<i class="fa-solid fa-xmark"></i>' 
        : '<i class="fa-solid fa-bars"></i>';
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }

  // Active Link Observer
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        links.forEach(l => {
          if (l.getAttribute('href') === `#${id}`) {
            l.classList.add('active');
          } else {
            l.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => observer.observe(s));
}

// Scroll Reveal with IntersectionObserver
function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  // Observe existing and dynamically added reveals
  const observeReveals = () => {
    document.querySelectorAll('.reveal:not(.observed)').forEach(el => {
      el.classList.add('observed');
      observer.observe(el);
    });
  };

  observeReveals();
  // Call periodically or after DOM mutations
  setTimeout(observeReveals, 400);
}

// 3D Card Tilt (Desktop mouse hover only)
function init3DTilt() {
  // Only enable on desktop pointer devices
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('[data-tilt]');
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  document.addEventListener('mouseout', (e) => {
    const card = e.target.closest('[data-tilt]');
    if (card) {
      card.style.transform = '';
    }
  });
}

// Certificate Lightbox
function initLightbox() {
  const modal = document.getElementById('cert-modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.getElementById('modal-close');

  window.openCertLightbox = function(src, title) {
    if (!modal || !modalImg) return;
    modalImg.src = src;
    modalImg.alt = title || 'Certificate';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeModal();
    }
  });
}
