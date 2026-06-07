/* ═══════════════════════════════════
   GRÊMIO ESTUDANTIL — Global JS v3
═══════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  // ── CURSOR CUSTOMIZADO ──
  const cur = document.createElement('div');
  cur.id = 'ge-cursor';
  document.body.appendChild(cur);

  let mx = -100, my = -100;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cur.style.left = mx + 'px';
    cur.style.top  = my + 'px';
  });
  document.addEventListener('mousedown', () => cur.classList.add('click'));
  document.addEventListener('mouseup',   () => cur.classList.remove('click'));

  const hoverEls = 'a, button, .card, .btn, .badge, .nav-link, .nav-cta, .scroll-dot, .filter-btn, .membro-card-full, .membro-destaque, .sobre-card, .projeto-card-full, .recado-card, .info-card, .como-step, .vc, .swatch, .hb';
  document.querySelectorAll(hoverEls).forEach(el => {
    el.addEventListener('mouseenter', () => cur.classList.add('hover'));
    el.addEventListener('mouseleave', () => cur.classList.remove('hover'));
  });

  // ── PROGRESS BAR ──
  const prog = document.getElementById('page-progress');
  if (prog) {
    window.addEventListener('scroll', () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : '0%';
    }, { passive: true });
  }

  // ── SCROLL INDICATOR LATERAL ──
  const si = document.getElementById('scroll-indicator');
  if (si) {
    const sections = document.querySelectorAll('section[id], header[id]');
    sections.forEach((sec, i) => {
      const btn = document.createElement('button');
      btn.className = 'scroll-dot';
      btn.title = sec.dataset.label || '';
      btn.addEventListener('click', () => sec.scrollIntoView({ behavior: 'smooth' }));
      si.appendChild(btn);
    });
    const dots = si.querySelectorAll('.scroll-dot');

    const updateDots = () => {
      let active = 0;
      sections.forEach((s, i) => {
        if (s.getBoundingClientRect().top <= window.innerHeight * .5) active = i;
      });
      dots.forEach((d, i) => d.classList.toggle('active', i === active));
    };
    window.addEventListener('scroll', updateDots, { passive: true });
    updateDots();
  }

  // ── NAVBAR ACTIVE ──
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href.endsWith(page) || (page === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ── BURGER MENU ──
  const burger    = document.querySelector('.burger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
    document.addEventListener('click', e => {
      if (!burger.contains(e.target) && !mobileNav.contains(e.target)) {
        burger.classList.remove('open');
        mobileNav.classList.remove('open');
      }
    });
  }

  // ── REVEAL ──
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.rv').forEach(el => obs.observe(el));

  // ── NAVBAR SCROLL ──
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.boxShadow = window.scrollY > 8 ? '0 3px 0 var(--ink)' : 'none';
    }, { passive: true });
  }

  // ── KEYBOARD NAV ──
  const sections = document.querySelectorAll('section[id], header[id]');
  document.addEventListener('keydown', e => {
    let ci = 0;
    sections.forEach((s, i) => { if (s.getBoundingClientRect().top <= 80) ci = i; });
    if (e.key === 'ArrowDown' && ci < sections.length - 1) sections[ci+1].scrollIntoView({ behavior:'smooth' });
    if (e.key === 'ArrowUp'   && ci > 0)                  sections[ci-1].scrollIntoView({ behavior:'smooth' });
  });

});
