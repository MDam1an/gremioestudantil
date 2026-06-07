/* ═══════════════════════════════════
   GRÊMIO ESTUDANTIL — Components v3
   Navbar + Footer + Scroll Indicator
═══════════════════════════════════ */

const NAV_LINKS_ROOT = `
  <a href="index.html"              class="nav-link">Início</a>
  <a href="pages/membros.html"      class="nav-link">Membros</a>
  <a href="pages/projetos.html"     class="nav-link">Projetos</a>
  <a href="pages/recados.html"      class="nav-link">Recados</a>
  <a href="pages/festa-julina.html" class="nav-link">🎪 Festa Julina</a>
`;
const NAV_LINKS_PAGE = `
  <a href="../index.html"              class="nav-link">Início</a>
  <a href="../pages/membros.html"      class="nav-link">Membros</a>
  <a href="../pages/projetos.html"     class="nav-link">Projetos</a>
  <a href="../pages/recados.html"      class="nav-link">Recados</a>
  <a href="../pages/festa-julina.html" class="nav-link">🎪 Festa Julina</a>
`;

function _navbarHTML(links, cta) {
  return `
    <nav class="navbar">
      <div class="container">
        <a href="${cta === 'pages/sugestoes.html' ? 'index.html' : (cta.startsWith('../') ? '../index.html' : 'index.html')}" class="nav-logo">
          <img src="${cta.startsWith('../') ? '../' : ''}images/logo/GE26_midnight.png"
               alt="Grêmio Estudantil"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <span class="nav-logo-text" style="display:none">GRÊMIO<span class="dot">.</span><span class="nav-logo-year">26/27</span></span>
        </a>
        <div class="nav-links">
          ${links}
          <a href="${cta}" class="nav-cta">Sugestões</a>
        </div>
        <button class="burger" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </nav>
    <div class="mobile-nav">
      ${links.replace(/class="nav-link"/g, 'class="nav-link"')}
      <a href="${cta}" class="nav-cta">💬 Sugestões</a>
    </div>
  `;
}

function renderNavbarRoot() {
  const el = document.getElementById('navbar');
  if (el) el.innerHTML = _navbarHTML(NAV_LINKS_ROOT, 'pages/sugestoes.html');
}
function renderNavbar() {
  const el = document.getElementById('navbar');
  if (el) el.innerHTML = _navbarHTML(NAV_LINKS_PAGE, '../pages/sugestoes.html');
}

function renderFooter(root = false) {
  const el = document.getElementById('footer');
  if (!el) return;
  const b = root ? '' : '../';
  el.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="${b}images/logo/LOGO_chalk.png" alt="Grêmio Estudantil" class="footer-logo"
                 onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
            <div class="footer-logo-fallback">GRÊMIO<span>.</span></div>
            <div class="footer-year">Gestão 2026 / 2027</div>
            <p>A voz dos alunos transformada em ação. Projetos, eventos e mudanças reais — feitos por vocês, para vocês.</p>
          </div>
          <div class="footer-col">
            <h4>Páginas</h4>
            <ul>
              <li><a href="${b}index.html">Início</a></li>
              <li><a href="${b}pages/membros.html">Membros</a></li>
              <li><a href="${b}pages/projetos.html">Projetos & Eventos</a></li>
              <li><a href="${b}pages/recados.html">Recados</a></li>
              <li><a href="${b}pages/festa-julina.html">Festa Julina</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Participar</h4>
            <ul>
              <li><a href="${b}pages/sugestoes.html">Canal de Sugestões</a></li>
              <li><a href="${b}pages/recados.html">Recados da Escola</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-divider"></div>
        <div class="footer-bottom">
          <div class="footer-credits">
            <div>Grêmio Estudantil <span class="footer-dot"></span> Gestão 2026/2027</div>
            <div>Site criado por <strong>Matheus Damian De Bona</strong></span></div>
          </div>
          <div class="footer-badge">© 2026 · Todos os direitos reservados</div>
        </div>
      </div>
    </footer>
  `;
}

function renderScrollIndicator(labels) {
  const el = document.getElementById('scroll-indicator');
  if (el) el.innerHTML = '';
}
