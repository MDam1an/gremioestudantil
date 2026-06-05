/* ═══════════════════════════════════════
   GRÊMIO ESTUDANTIL — Components
   Navbar + Footer injetados via JS
═══════════════════════════════════════ */

// ── NAVBAR ──
function renderNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  nav.innerHTML = `
    <nav class="navbar">
      <div class="container">
        <a href="../index.html" class="nav-logo">
          <span class="logo-ge">GRÊMIO<span class="logo-dot">.</span></span>
          <span class="logo-year">2026/27</span>
        </a>
        <div class="nav-links">
          <a href="../index.html"            class="nav-link">Início</a>
          <a href="../pages/membros.html"    class="nav-link">Membros</a>
          <a href="../pages/projetos.html"   class="nav-link">Projetos</a>
          <a href="../pages/recados.html"    class="nav-link">Recados</a>
          <a href="../pages/festa-julina.html" class="nav-link">🎪 Festa Julina</a>
          <a href="../pages/sugestoes.html"  class="nav-cta">Sugestões</a>
        </div>
        <button class="burger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div class="mobile-nav">
      <a href="../index.html"            class="nav-link">Início</a>
      <a href="../pages/membros.html"    class="nav-link">Membros</a>
      <a href="../pages/projetos.html"   class="nav-link">Projetos</a>
      <a href="../pages/recados.html"    class="nav-link">Recados</a>
      <a href="../pages/festa-julina.html" class="nav-link">🎪 Festa Julina</a>
      <a href="../pages/sugestoes.html"  class="nav-cta">💬 Canal de Sugestões</a>
    </div>
  `;
}

// ── NAVBAR (para index.html — paths relativos diferentes) ──
function renderNavbarRoot() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  nav.innerHTML = `
    <nav class="navbar">
      <div class="container">
        <a href="index.html" class="nav-logo">
          <span class="logo-ge">GRÊMIO<span class="logo-dot">.</span></span>
          <span class="logo-year">2026/27</span>
        </a>
        <div class="nav-links">
          <a href="index.html"                class="nav-link active">Início</a>
          <a href="pages/membros.html"        class="nav-link">Membros</a>
          <a href="pages/projetos.html"       class="nav-link">Projetos</a>
          <a href="pages/recados.html"        class="nav-link">Recados</a>
          <a href="pages/festa-julina.html"   class="nav-link">🎪 Festa Julina</a>
          <a href="pages/sugestoes.html"      class="nav-cta">Sugestões</a>
        </div>
        <button class="burger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div class="mobile-nav">
      <a href="index.html"                class="nav-link">Início</a>
      <a href="pages/membros.html"        class="nav-link">Membros</a>
      <a href="pages/projetos.html"       class="nav-link">Projetos</a>
      <a href="pages/recados.html"        class="nav-link">Recados</a>
      <a href="pages/festa-julina.html"   class="nav-link">🎪 Festa Julina</a>
      <a href="pages/sugestoes.html"      class="nav-cta">💬 Canal de Sugestões</a>
    </div>
  `;
}

// ── FOOTER ──
function renderFooter(root = false) {
  const el = document.getElementById('footer');
  if (!el) return;
  const base = root ? '' : '../';
  el.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3>GRÊMIO<span>.</span></h3>
            <div class="f-year">Gestão 2026 / 2027</div>
            <p>O Grêmio Estudantil é o espaço onde a voz dos alunos se transforma em ação. Projetos, eventos e mudanças reais — feitos por vocês, para vocês.</p>
          </div>
          <div class="footer-col">
            <h4>Páginas</h4>
            <ul>
              <li><a href="${base}index.html">Início</a></li>
              <li><a href="${base}pages/membros.html">Membros</a></li>
              <li><a href="${base}pages/projetos.html">Projetos & Eventos</a></li>
              <li><a href="${base}pages/recados.html">Recados</a></li>
              <li><a href="${base}pages/festa-julina.html">Festa Julina</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contato</h4>
            <ul>
              <li><a href="${base}pages/sugestoes.html">Canal de Sugestões</a></li>
              <li><a href="${base}pages/recados.html">Recados da Escola</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-divider"></div>
        <div class="footer-bottom">
          <div class="footer-credits">
            <div>Grêmio Estudantil <span class="footer-dot"></span> Gestão 2026/2027</div>
            <div>Site criado por <strong>Matheus Damian De Bona</strong> <span class="footer-dot"></span> Comunicação & Marketing</div>
          </div>
          <div class="footer-badge">© 2026 · Todos os direitos reservados</div>
        </div>
      </div>
    </footer>
  `;
}
