/**
 * ====================================================================
 * ZIYAN KHAN PORTFOLIO — RENDERING + INTERACTIONS
 * Vanilla JS, no dependencies. All content comes from content.js.
 * ====================================================================
 */

(function () {
  'use strict';

  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error('Portfolio data not loaded. Check content.js');
    return;
  }

  const root = document.documentElement;
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const motionOK = !reduceMotion;
  const desktopFx = motionOK && finePointer;

  /* ------------------------------------------------------------------
     Tiny helpers
     ------------------------------------------------------------------ */
  const stagger = (i) => `style="--i:${Math.min(i, 8)}"`;
  const mailto = (subject) =>
    `mailto:${data.contact.email}${subject ? '?subject=' + encodeURIComponent(subject) : ''}`;

  /* ------------------------------------------------------------------
     Renderers
     ------------------------------------------------------------------ */
  const SECTION_ORDER = ['about', 'skills', 'experience', 'projects', 'services', 'achievements', 'certifications', 'contact'];
  const sectionNumber = (key) => String(SECTION_ORDER.indexOf(key) + 1).padStart(2, '0');

  function renderHeaders() {
    $$('[data-header]').forEach((el) => {
      const key = el.dataset.header;
      const d = data[key];
      if (!d) return;
      el.classList.add('reveal');
      el.innerHTML = `
        <span class="section-label">${sectionNumber(key)} / ${d.label}</span>
        <h2 class="section-title">${d.heading}</h2>
        ${d.subtitle ? `<p class="section-subtitle">${d.subtitle}</p>` : ''}`;
    });
  }

  function renderHero() {
    const h = data.hero;
    $('#hero-badge-text').textContent = h.badge;
    $('#hero-subtext').textContent = h.subtext;
    $('#hero-lead-in').textContent = h.leadIn;
    $('#typing-text').textContent = h.typingRoles[0];

    // Split heading into words for the staggered reveal
    const line1 = $('#hero-line1');
    line1.textContent = '';
    h.greeting.split(' ').forEach((word, i, arr) => {
      const span = document.createElement('span');
      span.className = 'w';
      span.style.setProperty('--i', i);
      span.textContent = word;
      line1.appendChild(span);
      if (i < arr.length - 1) line1.appendChild(document.createTextNode(' '));
    });

    // Resume links
    $$('a[href$="Resume.pdf"]').forEach((a) => { a.href = h.resumeUrl; });

    // Floating cards
    h.floatingCards.forEach((c, i) => {
      const card = $('#float-card-' + (i + 1));
      if (!card) return;
      $('.float-icon i', card).className = c.icon;
      $('h3', card).textContent = c.title;
      $('p', card).textContent = c.subtitle;
      $('.float-badge', card).textContent = c.badge.toUpperCase();
    });

    // Stats
    $('#stats-row').innerHTML = h.stats.map((s, i) => {
      const start = motionOK ? '0' : String(s.value);
      const inner = `
        <div class="stat-value" data-count="${s.value}" data-suffix="${s.suffix || ''}">${start}${s.suffix || ''}</div>
        <div class="stat-label">${s.label}</div>`;
      return s.href
        ? `<a class="card lift stat reveal" ${stagger(i)} href="${s.href}" target="_blank" rel="noopener noreferrer">${inner}</a>`
        : `<div class="card lift stat reveal" ${stagger(i)}>${inner}</div>`;
    }).join('');
  }

  function renderNav() {
    const links = $('#nav-links');
    links.innerHTML = data.nav.map((n, i) =>
      `<li><a href="${n.href}" class="nav-link${i === 0 ? ' active' : ''}">${n.label}</a></li>`).join('');
  }

  function renderMarquee() {
    const item = (m) => `<div class="marquee-item"><i class="${m.icon}" aria-hidden="true"></i><span>${m.name}</span></div>`;
    const one = data.marquee.map(item).join('');
    $('#marquee-track').innerHTML = one + `<div class="marquee-item" style="display:contents" aria-hidden="true">${one}</div>`;
  }

  function renderAbout() {
    const a = data.about;
    $('#about-text').innerHTML = a.summary.map((p) => `<p>${p}</p>`).join('');
    const e = a.education;
    const edu = $('#about-edu');
    edu.classList.add('lift');
    edu.innerHTML = `
      <span class="edu-years">${e.timeline}</span>
      <h3 class="edu-degree">${e.degree}</h3>
      <p class="edu-school"><strong>${e.institute}</strong> • ${e.cgpa}</p>
      <p class="edu-school-line">${e.schooling}</p>`;
  }

  function renderSkills() {
    $('#skills-grid').innerHTML = data.skills.groups.map((g, i) => `
      <div class="card lift skill-group reveal" ${stagger(i)}>
        <h3>${g.category}</h3>
        <div class="chips">${g.items.map((s) => `<span class="chip">${s}</span>`).join('')}</div>
      </div>`).join('');
  }

  function renderExperience() {
    $('#timeline').innerHTML = data.experience.items.map((item, i) => {
      if (item.compact) {
        return `
          <div class="t-item reveal" ${stagger(i)}>
            <span class="t-dot" aria-hidden="true"></span>
            <div class="card">
              <div class="t-head"><h3 class="t-role">${item.role}</h3></div>
              <div class="t-compact-list">
                ${item.items.map((t) => `<div class="t-compact-item"><h4>${t.name}</h4><p>${t.meta}</p></div>`).join('')}
              </div>
            </div>
          </div>`;
      }
      return `
        <div class="t-item reveal" ${stagger(i)}>
          <span class="t-dot" aria-hidden="true"></span>
          <div class="card">
            <div class="t-head">
              <div>
                <h3 class="t-role">${item.role}</h3>
                <p class="t-org">${item.organization}${item.link ? ` • <a href="${item.link}" target="_blank" rel="noopener noreferrer">fairtoursandtravels.com</a>` : ''}</p>
              </div>
              <div class="t-meta">
                <span class="tag tag-accent">${item.badge}</span>
                <span class="tag">${item.period}</span>
              </div>
            </div>
            <p class="t-desc">${item.description}</p>
            <ul class="t-done">${item.done.map((d) => `<li>${d}</li>`).join('')}</ul>
            ${item.next ? `<p class="t-next">${item.next}</p>` : ''}
          </div>
        </div>`;
    }).join('');
  }

  function renderProjects() {
    const visible = data.projects.items.filter((p) => p.showJobRec !== false);
    $('#projects-grid').innerHTML = visible.map((p, i) => {
      const multi = p.images && p.images.length > 1;
      const shotAlt = (n) => `${p.title} screenshot${multi ? ` ${n} of ${p.images.length}` : ''}`;
      const isClient = p.isClient || p.highlight || (p.status && p.status.toLowerCase().includes('client'));

      const statusHtml = isClient
        ? `<span class="tag project-status client-status-badge">
             <span class="client-pulse-dot" aria-hidden="true"></span>
             <span>${p.badgeText || '✦ Live Client Project'}</span>
           </span>`
        : `<span class="tag project-status">${p.status}</span>`;

      return `
        <article class="card lift project${i === 0 ? ' featured' : ''}${isClient ? ' client-highlight' : ''} reveal" ${stagger(i)} data-project-id="${p.id}">
          <div class="project-shot" data-project="${p.id}" data-count="${p.images.length}">
            <div class="shot-track" id="shot-track-${p.id}">
              ${p.images.map((src, n) => `
                <div class="shot-slide" aria-hidden="${n !== 0}">
                  <img src="${src}" alt="${shotAlt(n + 1)}" width="1280" height="720" loading="${i === 0 && n === 0 ? 'eager' : 'lazy'}" decoding="async">
                </div>
              `).join('')}
            </div>

            ${statusHtml}

            ${multi ? `
              <button type="button" class="shot-arrow shot-arrow-prev" data-project="${p.id}" data-dir="-1" aria-label="Previous screenshot for ${p.title}">
                <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
              </button>
              <button type="button" class="shot-arrow shot-arrow-next" data-project="${p.id}" data-dir="1" aria-label="Next screenshot for ${p.title}">
                <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
              </button>
              <div class="shot-dots" role="group" aria-label="${p.title} screenshots">
                ${p.images.map((src, n) => `
                  <button type="button" class="shot-dot" data-project="${p.id}" data-index="${n}" aria-pressed="${n === 0}" aria-label="Show screenshot ${n + 1} of ${p.images.length}">
                    <span class="shot-dot-fill"></span>
                  </button>
                `).join('')}
              </div>
            ` : ''}
          </div>

          <div class="project-body">
            ${isClient ? `
              <div class="client-kicker">
                <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
                <span>${p.clientMeta || 'Commercial Client Work • Production'}</span>
              </div>
            ` : ''}
            <h3 class="project-title">${p.title}</h3>
            <p class="project-desc">${p.description}</p>
            <div class="chips">${p.tech.map((t) => `<span class="chip">${t}</span>`).join('')}</div>
            <div class="project-actions">
              ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm${isClient ? ' client-live-btn' : ''}"><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> ${isClient ? 'Visit Live Website' : 'Live Demo'}<span class="sr-only"> of ${p.title}</span></a>` : ''}
              ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm"><i class="fa-brands fa-github" aria-hidden="true"></i> GitHub<span class="sr-only"> repository of ${p.title}</span></a>` : ''}
            </div>
          </div>
        </article>`;
    }).join('');

    initProjectSliders(visible);
  }

  // Auto-sliding image carousel with pause-on-hover & touch swipe
  function initProjectSliders(projects) {
    const sliders = {};

    projects.forEach((p, idx) => {
      if (!p.images || p.images.length <= 1) return;
      const track = $('#shot-track-' + p.id);
      if (!track) return;

      const card = track.closest('.project');
      const shot = track.closest('.project-shot');
      const total = p.images.length;
      let current = 0;
      let timer = null;
      let isPaused = false;

      // Stagger auto-slide intervals per project so they don't flip simultaneously
      const interval = 3500 + (idx * 550);

      function goTo(n, manual = false) {
        current = (n + total) % total;
        track.style.transform = `translateX(-${current * 100}%)`;

        if (shot) {
          $$('.shot-dot', shot).forEach((d, i) => {
            d.setAttribute('aria-pressed', String(i === current));
          });
          $$('.shot-slide', track).forEach((s, i) => {
            s.setAttribute('aria-hidden', String(i !== current));
          });
        }

        if (manual) restartTimer();
      }

      function next() {
        if (!isPaused) goTo(current + 1);
      }

      function startTimer() {
        if (timer) clearInterval(timer);
        timer = setInterval(next, interval);
      }

      function restartTimer() {
        startTimer();
      }

      startTimer();

      // Pause on mouse hover, resume on mouse leave
      if (card) {
        card.addEventListener('mouseenter', () => { isPaused = true; });
        card.addEventListener('mouseleave', () => { isPaused = false; });
      }

      // Touch swipe support for mobile
      if (shot) {
        let touchStartX = 0;
        let touchStartY = 0;

        shot.addEventListener('touchstart', (e) => {
          if (e.touches.length === 1) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            isPaused = true;
          }
        }, { passive: true });

        shot.addEventListener('touchend', (e) => {
          isPaused = false;
          if (e.changedTouches.length === 1) {
            const diffX = e.changedTouches[0].clientX - touchStartX;
            const diffY = e.changedTouches[0].clientY - touchStartY;
            if (Math.abs(diffX) > 36 && Math.abs(diffX) > Math.abs(diffY)) {
              if (diffX < 0) {
                goTo(current + 1, true); // swipe left = next
              } else {
                goTo(current - 1, true); // swipe right = prev
              }
            }
          }
        }, { passive: true });
      }

      sliders[p.id] = { goTo, next, prev: () => goTo(current - 1, true) };
    });

    // Delegate clicks for dots and arrow buttons
    const grid = $('#projects-grid');
    if (grid) {
      grid.addEventListener('click', (e) => {
        const dot = e.target.closest('.shot-dot');
        if (dot) {
          const pid = dot.dataset.project;
          const idx = Number(dot.dataset.index);
          if (sliders[pid]) sliders[pid].goTo(idx, true);
          return;
        }

        const arrow = e.target.closest('.shot-arrow');
        if (arrow) {
          const pid = arrow.dataset.project;
          const dir = Number(arrow.dataset.dir);
          if (sliders[pid]) {
            if (dir > 0) sliders[pid].next();
            else sliders[pid].prev();
          }
        }
      });
    }
  }

  function renderServices() {
    const s = data.services;
    $('#services-grid').innerHTML = s.items.map((it, i) => `
      <div class="card lift service reveal" ${stagger(i)}>
        <div class="service-icon"><i class="${it.icon}" aria-hidden="true"></i></div>
        <h3>${it.title}</h3>
        <p>${it.description}</p>
        <a href="${mailto(it.mailSubject)}" class="btn btn-secondary btn-sm">${s.quoteText}<span class="sr-only">: ${it.title}</span></a>
      </div>`).join('');
  }

  function renderAchievements() {
    $('#ach-list').innerHTML = data.achievements.items.map((a, i) => `
      <li class="ach-item reveal" ${stagger(i)}>
        <i class="${a.icon}" aria-hidden="true"></i>
        <p>${a.text}</p>
      </li>`).join('');
  }

  function renderCerts() {
    const c = data.certifications;
    const grid = $('#certs-grid');
    grid.innerHTML = c.items.map((it, i) => {
      const extra = i >= c.featuredCount;
      return `
        <div class="card lift cert${extra ? ' cert-extra' : ' reveal'}" ${extra ? 'hidden' : stagger(i)}>
          <button type="button" class="cert-thumb" data-src="${it.image}" data-title="${it.title}" aria-label="View certificate: ${it.title}">
            <img src="${it.image}" alt="${it.title} certificate" width="640" height="480" loading="lazy" decoding="async">
          </button>
          <div>
            <h3>${it.title}</h3>
            <p class="cert-issuer">${it.issuer}</p>
            ${it.credentialId ? `<p class="cert-id">ID: ${it.credentialId}</p>` : ''}
          </div>
        </div>`;
    }).join('');

    const toggle = $('#certs-toggle');
    if (c.items.length <= c.featuredCount) { toggle.parentElement.remove(); return; }
    toggle.textContent = `${c.showAllText} (${c.items.length})`;
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      $$('.cert-extra', grid).forEach((el) => { el.hidden = open; });
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.textContent = open ? `${c.showAllText} (${c.items.length})` : c.showLessText;
    });
  }

  function renderContact() {
    const c = data.contact;
    $('#contact-card').innerHTML = `
      <span class="section-label">${sectionNumber('contact')} / ${c.label}</span>
      <h2>${c.heading}</h2>
      <div class="contact-actions">
        <a href="mailto:${c.email}" class="btn btn-primary magnetic"><i class="fa-solid fa-envelope" aria-hidden="true"></i> Email me</a>
        <a href="${c.linkedin}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><i class="fa-brands fa-linkedin" aria-hidden="true"></i> LinkedIn</a>
        <a href="${c.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><i class="fa-brands fa-github" aria-hidden="true"></i> GitHub</a>
        <a href="${c.resumeUrl}" download class="btn btn-secondary"><i class="fa-solid fa-file-arrow-down" aria-hidden="true"></i> Download Resume</a>
      </div>`;
  }

  function renderFooter() {
    $('#footer-copy').textContent = data.footer.copyright;
    $('#f-linkedin').href = data.contact.linkedin;
    $('#f-github').href = data.contact.github;
    $('#f-email').href = 'mailto:' + data.contact.email;
  }

  /* ------------------------------------------------------------------
     Interactions
     ------------------------------------------------------------------ */

  // Scroll progress bar + navbar state, one rAF-throttled handler
  function initScroll() {
    const bar = $('#scroll-progress');
    const nav = $('.navbar');
    const timeline = $('#timeline');
    let ticking = false;

    function update() {
      ticking = false;
      const max = root.scrollHeight - root.clientHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
      nav.classList.toggle('scrolled', window.scrollY > 24);

      // Timeline line "draws" as you scroll; dots light up
      if (timeline) {
        const rect = timeline.getBoundingClientRect();
        const line = window.innerHeight * 0.6;
        const p = Math.max(0, Math.min(1, (line - rect.top) / rect.height));
        timeline.style.setProperty('--p', p.toFixed(3));
        $$('.t-item', timeline).forEach((item) => {
          const dot = $('.t-dot', item).getBoundingClientRect();
          item.classList.toggle('lit', dot.top < line);
        });
      }
    }
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  }

  // Mobile menu
  function initMenu() {
    const btn = $('#menu-toggle');
    const links = $('#nav-links');
    const icon = $('i', btn);
    const setOpen = (open) => {
      links.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      icon.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    };
    btn.addEventListener('click', () => setOpen(!links.classList.contains('open')));
    links.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && links.classList.contains('open')) { setOpen(false); btn.focus(); }
    });
  }

  // Active section highlight
  function initActiveNav() {
    const links = $$('.nav-link');
    const sections = $$('main section[id]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach((l) => {
          const on = l.getAttribute('href') === '#' + id;
          l.classList.toggle('active', on);
          if (on) l.setAttribute('aria-current', 'true'); else l.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => io.observe(s));
  }

  // Scroll reveal (80ms stagger via --i)
  function initReveal() {
    const els = $$('.reveal');
    if (!motionOK || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in', 'settled'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('in');
        // After the reveal finishes, hand transform back to hover/tilt transitions
        setTimeout(() => el.classList.add('settled'), 900 + (Number(getComputedStyle(el).getPropertyValue('--i')) || 0) * 80);
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => io.observe(el));

    // Cert cards revealed by the toggle are not observed; make them visible
    $('#certs-toggle') && $('#certs-toggle').addEventListener('click', () => {
      $$('.cert-extra').forEach((el) => el.classList.add('in', 'settled', 'reveal'));
    });
  }

  // Rotating typing effect for Hero roles
  function initHeroSequence() {
    const roles = (data.hero && data.hero.typingRoles) || [
      "Python Django Developer",
      "WordPress & SEO Developer",
      "React Frontend Developer"
    ];
    const text = $('#typing-text');
    if (!text || !roles.length) return;

    // Word reveal on line 1
    requestAnimationFrame(() => root.classList.add('ready'));

    // Start with the initial role displayed
    text.textContent = roles[0];

    const TYPE = 65;      // ms per char typing
    const DELETE = 35;    // ms per char deleting
    const HOLD = 1800;    // ms pause when full word is typed
    const GAP = 280;      // ms pause when word is deleted

    let roleIdx = 0;
    let charIdx = roles[0].length;
    let isDeleting = true;

    function step() {
      const current = roles[roleIdx];

      if (isDeleting) {
        charIdx--;
        text.textContent = current.slice(0, charIdx);

        if (charIdx === 0) {
          isDeleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
          setTimeout(step, GAP);
          return;
        }
        setTimeout(step, DELETE);
      } else {
        charIdx++;
        text.textContent = current.slice(0, charIdx);

        if (charIdx === current.length) {
          isDeleting = true;
          setTimeout(step, HOLD);
          return;
        }
        setTimeout(step, TYPE);
      }
    }

    // Wait 2.2s with "Python Django Developer" fully visible, then start cycling!
    setTimeout(step, 2200);
  }

  // Stats counters
  function initCounters() {
    const els = $$('.stat-value[data-count]');
    const finish = (el) => { el.textContent = el.dataset.count + el.dataset.suffix; };
    if (!motionOK || !('IntersectionObserver' in window)) { els.forEach(finish); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        io.unobserve(el);
        const target = Number(el.dataset.count);
        const dur = 1100;
        const t0 = performance.now();
        (function step(now) {
          const t = Math.min(1, (now - t0) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(target * eased) + el.dataset.suffix;
          if (t < 1) requestAnimationFrame(step); else finish(el);
        })(t0);
      });
    }, { threshold: 0.6 });
    els.forEach((el) => io.observe(el));
  }

  // Card spotlight (all pointers that are a mouse) + 3D tilt (desktop only)
  function initCards() {
    document.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      const card = e.target.closest && e.target.closest('.card');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');

      if (desktopFx && card.classList.contains('lift')) {
        const rx = ((e.clientY - r.top) / r.height - 0.5) * -16; // max 8deg
        const ry = ((e.clientX - r.left) / r.width - 0.5) * 16;
        card.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      }
    }, { passive: true });

    if (desktopFx) {
      document.addEventListener('pointerout', (e) => {
        const card = e.target.closest && e.target.closest('.card.lift');
        if (card && !card.contains(e.relatedTarget)) card.style.transform = '';
      });
    }
  }

  // Cursor glow + ring, magnetic buttons (desktop only)
  function initCursor() {
    if (!desktopFx) return;
    const glow = $('#cursor-glow');
    const ring = $('#cursor-ring');
    let x = -100, y = -100, rx = x, ry = y, raf = null;

    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.transform = `translate3d(${rx.toFixed(1)}px, ${ry.toFixed(1)}px, 0)`;
      raf = Math.abs(x - rx) > 0.1 || Math.abs(y - ry) > 0.1 ? requestAnimationFrame(loop) : null;
    };

    window.addEventListener('mousemove', (e) => {
      x = e.clientX; y = e.clientY;
      glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      glow.classList.add('on');
      ring.classList.add('on');
      ring.classList.toggle('grow', !!e.target.closest('a, button, [role="button"], .cert-thumb, input, textarea'));
      if (!raf) raf = requestAnimationFrame(loop);
    }, { passive: true });
    document.addEventListener('mouseleave', () => { glow.classList.remove('on'); ring.classList.remove('on'); });

    // Magnetic primary buttons
    $$('.magnetic').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.25;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.35;
        btn.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
  }

  // Hero photo: tilt max 10deg + parallax (cards most, ring medium, glow least)
  function initHeroParallax() {
    if (!desktopFx) return;
    const scene = $('#photo-scene');
    const ring = $('#photo-ring');
    const glow = $('#photo-glow');
    const c1 = $('#float-card-1');
    const c2 = $('#float-card-2');
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = null, hover = false;

    function frame() {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      scene.style.transform = `perspective(1000px) rotateX(${cx.toFixed(2)}deg) rotateY(${cy.toFixed(2)}deg)`;
      const px = cy / 10, py = -cx / 10;
      c1.style.transform = `translate3d(${(px * 18).toFixed(1)}px, ${(py * 18).toFixed(1)}px, 45px)`;
      c2.style.transform = `translate3d(${(px * -18).toFixed(1)}px, ${(py * -18).toFixed(1)}px, 45px)`;
      ring.style.transform = `translate3d(${(px * 9).toFixed(1)}px, ${(py * 9).toFixed(1)}px, 20px)`;
      glow.style.transform = `translate3d(${(px * 4).toFixed(1)}px, ${(py * 4).toFixed(1)}px, 0)`;
      if (hover || Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05) {
        raf = requestAnimationFrame(frame);
      } else {
        raf = null;
        [scene, c1, c2, ring, glow].forEach((el) => { el.style.transform = ''; });
      }
    }
    scene.addEventListener('mousemove', (e) => {
      hover = true;
      const r = scene.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
      const ny = ((e.clientY - r.top) / r.height) * 2 - 1;
      tx = -ny * 10;
      ty = nx * 10;
      if (!raf) raf = requestAnimationFrame(frame);
    });
    scene.addEventListener('mouseleave', () => {
      hover = false; tx = 0; ty = 0;
      if (!raf) raf = requestAnimationFrame(frame);
    });
  }

  // Certificate lightbox with focus handling
  function initLightbox() {
    const modal = $('#cert-modal');
    const img = $('#modal-img');
    const caption = $('#modal-caption');
    const close = $('#modal-close');
    let opener = null;

    const open = (btn) => {
      opener = btn;
      img.src = btn.dataset.src;
      img.alt = (btn.dataset.title || '') + ' certificate';
      if (caption) caption.textContent = btn.dataset.title || '';
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      close.focus();
    };
    const shut = () => {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (opener) opener.focus();
    };

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.cert-thumb');
      if (btn) open(btn);
    });
    close.addEventListener('click', shut);
    modal.addEventListener('click', (e) => { if (e.target === modal) shut(); });
    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('open')) return;
      if (e.key === 'Escape') shut();
      if (e.key === 'Tab') { e.preventDefault(); close.focus(); } // only one focusable control
    });
  }

  /* ------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------ */
  function boot() {
    renderNav();
    renderHero();
    renderMarquee();
    renderHeaders();
    renderAbout();
    renderSkills();
    renderExperience();
    renderProjects();
    renderServices();
    renderAchievements();
    renderCerts();
    renderContact();
    renderFooter();

    initScroll();
    initMenu();
    initActiveNav();
    initReveal();
    initHeroSequence();
    initCounters();
    initCards();
    initCursor();
    initHeroParallax();
    initLightbox();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
