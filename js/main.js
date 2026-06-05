/* ═══════════════════════════════════════
   GRÊMIO ESTUDANTIL — Global Scripts
═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── PROGRESS BAR ──
  const prog = document.getElementById('page-progress');
  if (prog) {
    window.addEventListener('scroll', () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = `${(window.scrollY / max) * 100}%`;
    }, { passive: true });
  }

  // ── NAVBAR ACTIVE LINK ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ── BURGER MENU ──
  const burger = document.querySelector('.burger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
    // close on link click
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
    // close on outside click
    document.addEventListener('click', (e) => {
      if (!burger.contains(e.target) && !mobileNav.contains(e.target)) {
        burger.classList.remove('open');
        mobileNav.classList.remove('open');
      }
    });
  }

  // ── REVEAL ON SCROLL ──
  const revealEls = document.querySelectorAll('.rv');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => observer.observe(el));
  }

  // ── NAVBAR SCROLL SHADOW ──
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 4px 0 var(--ink)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

});
