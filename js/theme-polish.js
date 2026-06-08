(function () {
  const palette = {
    pageBg: '#0D3D4A',
    topCardBg: '#0A2A2F',
    purpleCard: '#C49A6C',
    gold: '#F2C57C',
    cream: '#FFF1C7',
    tan: '#C49A6C',
    blackPurple: '#140023',
    chartPaper: '#CFE8D4',
    border: '1.5px solid rgba(242,197,124,0.58)',
    granite: 'linear-gradient(135deg, #4C315F, #006064)'
  };

  const pageIds = [
    'page-home','page-diabetes','page-dashboard','page-sparcs2024','page-a1c','page-epi2025',
    'page-stories','page-prdr','page-tools','page-reference','page-about','page-drugs','page-news',
    'page-recommended','page-blog'
  ];

  function set(el, styles) {
    if (!el) return;
    Object.keys(styles).forEach(key => { el.style[key] = styles[key]; });
  }

  function qsa(selector, root) {
    return Array.from((root || document).querySelectorAll(selector));
  }

  function titleBar(el) {
    if (!el) return;
    set(el, {
      background: palette.granite,
      backgroundColor: '',
      color: palette.gold,
      border: '1px solid rgba(242,197,124,0.55)',
      borderRadius: '10px',
      padding: el.style.padding || '0.72rem 1rem'
    });
  }

  function purpleCard(el) {
    // V3: this used to make most content cards dark purple.
    // Jasmine decided the beige/tan card style is easier to read and matches the Hispanic page better.
    if (!el) return;
    set(el, {
      background: palette.tan,
      backgroundColor: palette.tan,
      color: palette.blackPurple,
      border: palette.border,
      borderRadius: el.style.borderRadius || '16px',
      boxShadow: el.style.boxShadow || '0 10px 24px rgba(0,0,0,0.30)'
    });
  }

  function tanCard(el) {
    if (!el) return;
    set(el, {
      background: palette.tan,
      backgroundColor: palette.tan,
      color: palette.blackPurple,
      border: palette.border,
      borderRadius: el.style.borderRadius || '16px',
      boxShadow: el.style.boxShadow || '0 10px 24px rgba(0,0,0,0.30)'
    });
  }

  function metricCard(el) {
    if (!el) return;
    set(el, {
      background: '#2A1A40',
      backgroundColor: '#2A1A40',
      color: palette.cream,
      border: palette.border,
      borderRadius: el.style.borderRadius || '16px',
      boxShadow: el.style.boxShadow || '0 10px 24px rgba(0,0,0,0.30)'
    });
    qsa('p, li, span, div, strong, em, small, label, a', el).forEach(child => {
      if (child.classList.contains('stat-value') || child.tagName.toLowerCase() === 'strong') {
        child.style.color = palette.gold;
      } else if (!shouldSkipText(child)) {
        child.style.color = palette.cream;
      }
    });
    qsa('.stat-value, .kpi-value, .metric-value', el).forEach(child => {
      child.style.color = palette.gold;
    });
  }

  function chartSurface(el) {
    if (!el) return;
    set(el, {
      background: palette.chartPaper,
      backgroundColor: palette.chartPaper,
      border: '1px solid rgba(242,197,124,0.42)',
      borderRadius: el.style.borderRadius || '10px'
    });
  }

  function shouldSkipText(el) {
    return !!el.closest('canvas, svg, .chart-wrapper, .leaflet-container, .article-figure-wrap, .concept-diagram-shell, table, .data-table, input, textarea, select, button, .btn, .badge, .skill-pill, h1, h2, h3, h4, h5, h6');
  }

  function makeTextReadable(card, color) {
    qsa('p, li, span, div, strong, em, small, label, a', card).forEach(el => {
      if (shouldSkipText(el)) return;
      el.style.color = color;
    });
  }

  function applyThemePolish() {
    qsa('body, .page, .section-panel, .section-meadow, .section-woodland, .section-forest, .section-dark')
      .forEach(el => { el.style.background = palette.pageBg; });

    qsa('nav').forEach(el => {
      set(el, {
        borderBottom: '3px solid #F2C57C',
        boxShadow: '0 3px 0 rgba(242,197,124,0.22), 0 6px 18px rgba(0,0,0,0.35)'
      });
    });
    qsa('.nav-links a').forEach(el => {
      if (el.classList.contains('active')) {
        set(el, {
          background: '#2A1A40',
          backgroundColor: '#2A1A40',
          color: palette.gold,
          border: '1px solid rgba(242,197,124,0.55)',
          borderRadius: '20px'
        });
      } else {
        set(el, {
          background: 'transparent',
          backgroundColor: 'transparent',
          color: palette.cream,
          border: '1px solid transparent',
          borderRadius: '20px'
        });
      }
    });

    qsa('.page > section:first-child > div, .dashboard-hero-frame, .a1c-hero-frame, .epi-hero-frame, .rx-hero-frame, .sparcs-hero-frame')
      .forEach(el => set(el, {
        background: palette.topCardBg,
        backgroundColor: palette.topCardBg,
        border: palette.border,
        borderRadius: '18px',
        boxShadow: '0 12px 28px rgba(0,0,0,0.32)'
      }));

    qsa('#page-dashboard section.section-panel .dashboard-shell, #page-a1c section.section-panel .a1c-shell, #page-epi2025 section.section-panel .epi-shell, #page-drugs section.section-panel .rx-shell, #page-sparcs2024 section.section-panel .container, #page-news section.section-panel .container, #page-recommended section.section-panel .container, #page-blog section.section-panel .container, #page-tools section.section-panel .container, #page-reference section.section-panel .container, #page-stories section.section-panel .container, #page-prdr section.section-panel .container, [id^="page-prdr"] section.section-panel .container, .research-story-page section.section-panel .container')
      .forEach(el => set(el, { background: 'transparent', backgroundColor: 'transparent', border: '0', boxShadow: 'none', padding: el.classList.contains('container') ? el.style.padding : '0' }));

    const purpleSelectors = [
      '.chart-card:not(.dashboard-intro-card):not(.a1c-intro-card):not(.rx-intro-card):not(.sparcs-intro-card):not(.epi2025-section-intro)',
      '.stat-card', '.content-panel', '.nature-card', '.story-card', '.tool-card', '.ref-item',
      '.article-section-card', '.article-meta-tile', '.dashboard-map-card', '.diabetes-detail-grid > div',
      '.prdr-path-card', '.prdr-source-card', '.prdr-portal-card', '.prdr-row-card', '.prdr-kpi', '.prdr-kpi-tile',
      '.recommended-news-card', '.recommended-resource-card', '.recommended-feature-card', '.recommended-card',
      '.news-card', '.news-feature-card', '.rx-resource-card', '.rx-stat-card', '.epi2025-mini-card', '.epi2025-topic-shell',
      '.blog-post', '.forum-post', '.post-card'
    ].join(',');
    qsa(purpleSelectors).forEach(el => { purpleCard(el); makeTextReadable(el, palette.blackPurple); });

    const tanSelectors = [
      '.dashboard-intro-card', '.a1c-intro-card', '.rx-intro-card', '.sparcs-intro-card', '.epi2025-section-intro',
      '.article-hero-card', '.wooden-panel', '#page-about .section-panel .container > div > div', '#page-blog #blogPosts > div.info-card'
    ].join(',');
    qsa(tanSelectors).forEach(el => { tanCard(el); makeTextReadable(el, palette.blackPurple); });

    qsa('.stat-card, .rx-stat-card, .epi2025-mini-card, .prdr-kpi, .prdr-kpi-tile').forEach(metricCard);

    const titleSelectors = [
      '.chart-card h2', '.chart-card h3', '.dashboard-map-card h3', '.dashboard-intro-card h2', '.a1c-intro-card h2',
      '.rx-intro-card h2', '.sparcs-intro-card h2', '.article-hero-card h2', '.article-section-card h3', '.ref-item h4',
      '.tool-card h3', '.story-body h3', '.recommended-section-title', '.recommended-news-body h3', '.recommended-resource-card h4',
      '.news-card h3', '.news-feature-card h3', '#page-news .info-card h3', '.sparcs-section-heading', '.sparcs-title-dark', '.sparcs-title-light',
      '.epi2025-section-title', '.prdr-source-card h3', '.prdr-portal-card h3', '.prdr-row-title', '.prdr-story-panel h3',
      '#page-reference .container > h2', '#page-blog .filter-bar label', '#page-blog #postsList h3', '#page-blog .blog-post h3'
    ].join(',');
    qsa(titleSelectors).forEach(titleBar);

    qsa('.chart-wrapper, #dashboardLeafletMap, #sparcsDashboard .chart-wrapper, .leaflet-container, .concept-diagram-shell, .article-figure-wrap')
      .forEach(chartSurface);

    qsa('.dashboard-map-legend, .dashboard-map-legend span, [class*="legend"], [class*="legend"] span')
      .forEach(el => { el.style.color = palette.cream; });

    qsa('.stat-card .stat-value, .kpi-value, .metric-value, #epi2025HighlightValue')
      .forEach(el => { el.style.color = palette.gold; });
    qsa('#epi2025HighlightText').forEach(el => { el.style.color = palette.blackPurple; });

    qsa('.data-table, .data-table td, table.data-table tbody tr, #sparcsTable, #sparcsTable td')
      .forEach(el => { el.style.background = palette.tan; el.style.backgroundColor = palette.tan; el.style.color = palette.blackPurple; });
    qsa('.data-table th, #sparcsTable th')
      .forEach(el => { el.style.background = palette.topCardBg; el.style.backgroundColor = palette.topCardBg; el.style.color = palette.gold; });

    qsa('input, textarea, select').forEach(el => {
      if (el.closest('nav')) return;
      set(el, { background: palette.granite, color: palette.gold, border: palette.border, borderRadius: '10px', fontWeight: '800' });
    });

    qsa('#page-blog #blogName, #page-blog #blogPost').forEach(el => {
      set(el, { color: '#FFF1C7', background: palette.granite, border: palette.border, borderRadius: '10px', fontWeight: '800' });
    });
    qsa('#page-blog select option').forEach(el => {
      set(el, { background: '#ffffff', backgroundColor: '#ffffff', color: '#140023' });
    });
    qsa('#page-stories .article-filter-controls select option, #page-prdr .article-filter-controls select option').forEach(el => {
      set(el, { background: '#ffffff', backgroundColor: '#ffffff', color: '#140023' });
    });

    // Keep action buttons in the granite theme on beige cards.
    qsa('.btn, button, .prdr-action, .article-link-row a, .article-link-row button, .prdr-portal-card button')
      .forEach(el => {
        if (el.closest('nav')) return;
        set(el, {
          background: palette.granite,
          backgroundColor: '',
          color: palette.gold,
          border: '1px solid rgba(242,197,124,0.65)',
          borderRadius: el.style.borderRadius || '10px',
          fontWeight: '900'
        });
      });

    // Restore Diabetes sidebar behavior: only the active topic looks selected.
    qsa('.diabetes-topic-menu button').forEach(el => {
      const isFuture = el.classList.contains('diabetes-side-future');
      const isActive = el.classList.contains('active');
      if (isFuture) {
        set(el, {
          background: 'rgba(196,154,108,0.12)',
          backgroundColor: '',
          color: 'rgba(255,241,199,0.62)',
          border: '1px solid rgba(242,197,124,0.22)',
          boxShadow: 'none',
          borderRadius: '12px',
          fontWeight: '900'
        });
        return;
      }
      if (isActive) {
        set(el, {
          background: palette.granite,
          backgroundColor: '',
          color: palette.gold,
          border: '1.5px solid rgba(242,197,124,0.75)',
          boxShadow: '0 6px 14px rgba(0,0,0,0.25)',
          borderRadius: '12px',
          fontWeight: '900'
        });
      } else {
        set(el, {
          background: 'transparent',
          backgroundColor: 'transparent',
          color: palette.cream,
          border: '1px solid transparent',
          boxShadow: 'none',
          borderRadius: '12px',
          fontWeight: '900'
        });
      }
    });

    // Fix JavaScript-reset chart title bars on dashboard.
    qsa('#chartTitle1, #chartTitleRace, #chartTitle3, #chartTitle4, #dashboardMapTitle').forEach(titleBar);

    // EPI 2025: remove the extra beige grouped layer, keep only the individual beige cards.
    qsa('#page-epi2025 .epi2025-topic-shell').forEach(el => {
      set(el, {
        background: 'transparent',
        backgroundColor: 'transparent',
        border: '0',
        boxShadow: 'none',
        padding: '0',
        marginTop: el.style.marginTop || '1rem'
      });
    });

    // EPI 2025: make the subsection controls behave like a clean side menu, not a row of active-looking buttons.
    qsa('#page-epi2025 .epi2025-tab-row').forEach(row => {
      set(row, {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.65rem',
        borderLeft: '2px solid rgba(242,197,124,0.35)',
        paddingLeft: '1.4rem',
        margin: '1.25rem 0 1.8rem 0'
      });
    });
    qsa('#page-epi2025 .epi2025-tab').forEach(btn => {
      if (btn.classList.contains('active')) {
        set(btn, {
          background: palette.granite,
          backgroundColor: '',
          color: palette.gold,
          border: '1.5px solid rgba(242,197,124,0.75)',
          borderRadius: '12px',
          boxShadow: '0 6px 14px rgba(0,0,0,0.25)',
          padding: '0.85rem 1.2rem',
          minWidth: '220px',
          textAlign: 'left',
          fontWeight: '900'
        });
      } else {
        set(btn, {
          background: 'transparent',
          backgroundColor: 'transparent',
          color: palette.cream,
          border: '1px solid transparent',
          borderRadius: '10px',
          boxShadow: 'none',
          padding: '0.45rem 0.35rem',
          minWidth: '220px',
          textAlign: 'left',
          fontWeight: '900'
        });
      }
    });

    // Table card polish: tan shell, granite title, dark teal table header.
    qsa('.table-card-shell').forEach(shell => {
      set(shell, {
        background: palette.tan,
        backgroundColor: palette.tan,
        border: palette.border,
        borderRadius: '18px',
        boxShadow: '0 10px 24px rgba(0,0,0,0.30)',
        padding: '1.25rem',
        marginBottom: '2rem',
        color: palette.blackPurple
      });
      qsa('h2, h3, h4', shell).forEach(titleBar);
      qsa('table, table td').forEach(el => {
        el.style.background = palette.tan;
        el.style.backgroundColor = palette.tan;
        el.style.color = palette.blackPurple;
      });
      qsa('table th').forEach(el => {
        el.style.background = palette.topCardBg;
        el.style.backgroundColor = palette.topCardBg;
        el.style.color = palette.gold;
      });
    });
  }

  window.applyThemePolish = applyThemePolish;

  let polishQueued = false;

  function runSoon() {
    if (polishQueued) return;
    polishQueued = true;
    window.requestAnimationFrame(function () {
      applyThemePolish();
      polishQueued = false;
    });
  }

  document.addEventListener('DOMContentLoaded', runSoon);
  window.addEventListener('load', runSoon);

  const hook = setInterval(function () {
    if (typeof window.showPage === 'function' && !window.showPage.__themePolishHooked) {
      const originalShowPage = window.showPage;
      window.showPage = function () {
        const result = originalShowPage.apply(this, arguments);
        runSoon();
        return result;
      };
      window.showPage.__themePolishHooked = true;
    }

    if (typeof window.setDiabetesTopic === 'function' && !window.setDiabetesTopic.__themePolishHooked) {
      const originalSetDiabetesTopic = window.setDiabetesTopic;
      window.setDiabetesTopic = function () {
        const result = originalSetDiabetesTopic.apply(this, arguments);
        runSoon();
        return result;
      };
      window.setDiabetesTopic.__themePolishHooked = true;
    }

    if (window.showPage && window.showPage.__themePolishHooked &&
        window.setDiabetesTopic && window.setDiabetesTopic.__themePolishHooked) {
      clearInterval(hook);
    }
  }, 50);

  setTimeout(function () { clearInterval(hook); }, 4000);
})();
