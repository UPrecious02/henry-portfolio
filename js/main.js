/* ==========================================================
   Analytics By Henry — interactions
   ========================================================== */
(function () {
  'use strict';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const icon = (id, cls = 'i') => `<svg class="${cls}" aria-hidden="true"><use href="#i-${id}"></use></svg>`;

  /* ---------- Header: border on scroll ---------- */
  const header = $('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  const toggle = $('.nav__toggle');
  const menu = $('#mobileMenu');
  if (toggle && menu) {
    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menu.classList.toggle('is-open', open);
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    $$('a', menu).forEach((a) => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
    const mq = window.matchMedia('(min-width: 900px)');
    const onMq = (e) => { if (e.matches) setOpen(false); };
    if (mq.addEventListener) mq.addEventListener('change', onMq); else mq.addListener(onMq);
  }

  /* ---------- Footer year ---------- */
  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  /* ---------- Project thumbnails (generated SVG charts) ---------- */
  let uid = 0;
  const C = { a: '#FF6A2B', a2: '#FF9A6B', m: '#232A38', m2: '#323B4F', m3: '#4A5468', g: '#1C2230' };
  const wrap = (inner, defs = '') => `<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false"><defs>${defs}</defs>${inner}</svg>`;
  const gridLines = () => { let s = ''; for (let y = 30; y <= 150; y += 40) s += `<line x1="8" x2="312" y1="${y}" y2="${y}" stroke="${C.g}" stroke-dasharray="3 6"/>`; return s; };
  const glow = (id) => `<filter id="${id}" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`;
  const fade = (id, c, o = 0.45) => `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c}" stop-opacity="${o}"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></linearGradient>`;

  const CHARTS = {
    bars() {
      const f = 'pf' + (++uid);
      const h = [48, 70, 60, 92, 80, 112, 100, 136];
      const bars = h.map((v, i) => {
        const last = i === h.length - 1;
        return `<rect x="${22 + i * 36}" y="${166 - v}" width="24" height="${v}" rx="4" fill="${last ? C.a : C.m2}"${last ? ` filter="url(#${f})"` : ''}/>`;
      }).join('');
      return wrap(gridLines() + bars, glow(f));
    },
    donut() {
      const f = 'pf' + (++uid);
      const seg = [[44, C.a], [26, C.a2], [18, C.m2], [12, C.m3]];
      let off = 0, s = '';
      seg.forEach(([v, col], i) => {
        s += `<circle cx="96" cy="90" r="54" fill="none" stroke="${col}" stroke-width="20" pathLength="100" stroke-dasharray="${v - 1.5} ${100 - v + 1.5}" stroke-dashoffset="${-off}" transform="rotate(-90 96 90)"${i === 0 ? ` filter="url(#${f})"` : ''}/>`;
        off += v;
      });
      s += `<text x="96" y="98" text-anchor="middle" fill="#EEF1F6" font-family="Space Grotesk, sans-serif" font-size="22" font-weight="700">44%</text>`;
      seg.forEach(([, col], i) => {
        const y = 48 + i * 28;
        s += `<rect x="186" y="${y}" width="10" height="10" rx="2" fill="${col}"/><rect x="204" y="${y + 2}" width="${70 - i * 12}" height="6" rx="3" fill="${C.m}"/><rect x="284" y="${y + 2}" width="18" height="6" rx="3" fill="${C.m2}"/>`;
      });
      return wrap(s, glow(f));
    },
    scatter() {
      const f = 'pf' + (++uid);
      let s = gridLines();
      for (let i = 0; i < 26; i++) {
        const x = 24 + i * 10.8;
        const y = 150 - (x - 24) * 0.33 + Math.sin(i * 2.3) * 22;
        const hot = i % 5 === 0;
        s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${hot ? 4.5 : 3.5}" fill="${hot ? C.a2 : C.m3}"/>`;
      }
      s += `<line x1="20" y1="152" x2="300" y2="58" stroke="${C.a}" stroke-width="2.5" stroke-linecap="round" filter="url(#${f})"/>`;
      return wrap(s, glow(f));
    },
    hbars() {
      const f = 'pf' + (++uid);
      const v = [236, 190, 150, 118, 92, 70];
      const s = v.map((w, i) => {
        const y = 20 + i * 25;
        return `<rect x="16" y="${y + 4}" width="36" height="6" rx="3" fill="${C.m}"/><rect x="62" y="${y}" width="${w}" height="14" rx="4" fill="${i === 0 ? C.a : C.m2}"${i === 0 ? ` filter="url(#${f})"` : ''}/>`;
      }).join('');
      return wrap(s, glow(f));
    },
    line() {
      const f = 'pf' + (++uid), g = 'pg' + uid;
      const a = [120, 104, 112, 86, 92, 64, 70, 44];
      const b = [140, 132, 136, 124, 128, 116, 120, 108];
      const pts = (arr) => arr.map((y, i) => `${20 + i * 40},${y}`).join(' ');
      const area = `M20,166 ` + a.map((y, i) => `L${20 + i * 40},${y}`).join(' ') + ' L300,166 Z';
      return wrap(
        gridLines() +
        `<path d="${area}" fill="url(#${g})"/>` +
        `<polyline points="${pts(b)}" fill="none" stroke="${C.m3}" stroke-width="2" stroke-dasharray="5 5"/>` +
        `<polyline points="${pts(a)}" fill="none" stroke="${C.a}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" filter="url(#${f})"/>` +
        `<circle cx="300" cy="44" r="5" fill="${C.a}" filter="url(#${f})"/>`,
        glow(f) + fade(g, C.a)
      );
    },
    area() {
      const f = 'pf' + (++uid), g = 'pg' + uid;
      let s = '';
      [0, 1, 2].forEach((i) => {
        const x = 12 + i * 102;
        s += `<rect x="${x}" y="10" width="92" height="42" rx="8" fill="#161B25" stroke="${i === 0 ? 'rgba(255,106,43,.5)' : C.m}"/>` +
             `<rect x="${x + 10}" y="20" width="36" height="5" rx="2.5" fill="${C.m2}"/>` +
             `<rect x="${x + 10}" y="33" width="${i === 0 ? 54 : 44}" height="9" rx="3" fill="${i === 0 ? C.a : C.m3}"/>`;
      });
      const ys = [150, 138, 142, 124, 130, 112, 118, 98, 104, 86];
      const step = 300 / (ys.length - 1);
      const pts = ys.map((y, i) => `${(10 + i * step).toFixed(1)},${y}`);
      s += `<path d="M10,170 L${pts.join(' L')} L310,170 Z" fill="url(#${g})"/>` +
           `<polyline points="${pts.join(' ')}" fill="none" stroke="${C.a}" stroke-width="2.5" stroke-linejoin="round" filter="url(#${f})"/>`;
      return wrap(s, glow(f) + fade(g, C.a, 0.4));
    }
  };
  const chart = (type) => (CHARTS[type] || CHARTS.bars)();

  /* ---------- Project card ---------- */
  const projectCard = (p, clone = false) => `
    <article class="pcard" data-tools="${esc(p.tools.join('|'))}"${clone ? ' aria-hidden="true"' : ''}>
      <div class="pcard__viz">${chart(p.chart)}<span class="pcard__id">${esc(p.id)}</span></div>
      <div class="pcard__body">
        <h3 class="pcard__title">${esc(p.title)}</h3>
        <p class="pcard__desc">${esc(p.desc)}</p>
        <ul class="pcard__tools" aria-label="Tools used">${p.tools.map((t) => `<li class="tag">${esc(t)}</li>`).join('')}</ul>
      </div>
      <a class="pcard__link" href="${esc(p.repo)}" target="_blank" rel="noopener"${clone ? ' tabindex="-1"' : ''}>
        <span>View on GitHub<span class="sr-only"> — ${esc(p.title)} (opens in a new tab)</span></span>${icon('arrow-ur')}
      </a>
    </article>`;

  const PROJECTS = window.PROJECTS || [];

  /* ---------- Home: auto-scrolling project row ---------- */
  const marquee = $('[data-marquee]');
  const track = $('[data-marquee-track]');
  if (marquee && track && PROJECTS.length) {
    // Two identical sets so the loop is seamless; the copy is hidden from screen readers.
    track.innerHTML = PROJECTS.map((p) => projectCard(p)).join('') + PROJECTS.map((p) => projectCard(p, true)).join('');

    const btn = $('[data-marquee-toggle]');
    const state = $('[data-marquee-state]');
    const stateText = state ? $('[data-state-text]', state) : null;
    const render = () => {
      const paused = marquee.classList.contains('is-paused') || marquee.matches(':hover');
      if (state) state.dataset.paused = String(paused);
      if (stateText) stateText.textContent = paused ? 'Paused' : 'Auto-scrolling';
    };
    if (btn) {
      btn.addEventListener('click', () => {
        const paused = marquee.classList.toggle('is-paused');
        btn.setAttribute('aria-pressed', String(paused));
        btn.setAttribute('aria-label', paused ? 'Play project carousel' : 'Pause project carousel');
        const use = $('use', btn);
        if (use) use.setAttribute('href', paused ? '#i-play' : '#i-pause');
        render();
      });
    }
    marquee.addEventListener('mouseenter', render);
    marquee.addEventListener('mouseleave', render);
    if (reduceMotion && state) state.hidden = true;
  }

  /* ---------- Projects page: grid + filters ---------- */
  const grid = $('#projectGrid');
  if (grid && PROJECTS.length) {
    grid.innerHTML = PROJECTS.map((p) => projectCard(p)).join('');
    const bar = $('#projectFilters');
    const count = $('#projectCount');
    const setCount = (n) => { if (count) count.textContent = `Showing ${n} project${n === 1 ? '' : 's'}`; };
    setCount(PROJECTS.length);

    if (bar) {
      const filters = window.PROJECT_FILTERS || ['All'];
      bar.innerHTML = filters.map((f, i) => `<button type="button" class="chip" data-filter="${esc(f)}" aria-pressed="${i === 0}">${esc(f)}</button>`).join('');
      bar.addEventListener('click', (e) => {
        const b = e.target.closest('[data-filter]');
        if (!b) return;
        $$('[data-filter]', bar).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
        const f = b.dataset.filter;
        let n = 0;
        $$('.pcard', grid).forEach((card) => {
          const show = f === 'All' || card.dataset.tools.split('|').includes(f);
          card.hidden = !show;
          if (show) n++;
        });
        setCount(n);
      });
    }
  }

  /* ---------- About: skill cards ---------- */
  const skillGrid = $('#skillGrid');
  if (skillGrid && window.SKILLS) {
    skillGrid.innerHTML = window.SKILLS.map((s) => `
      <a class="skill" href="${esc(s.link)}" target="_blank" rel="noopener">
        <div class="skill__top">
          <span class="skill__icon">${icon(s.icon, 'i i--lg')}</span>
          <span class="skill__pct"><span data-pct="${s.level}">0</span>%</span>
        </div>
        <h3 class="skill__name">${esc(s.name)}</h3>
        <p class="skill__note">${esc(s.note)}</p>
        <div class="skill__bar" aria-hidden="true"><span style="--w:${s.level}%"></span></div>
        <span class="skill__cta">View on GitHub ${icon('arrow-ur')}</span>
        <span class="sr-only">${esc(s.name)} proficiency ${s.level} percent, opens GitHub in a new tab</span>
      </a>`).join('');
  }

  /* ---------- Count-up numbers ---------- */
  const countUp = (el) => {
    const end = Number(el.dataset.pct ?? el.dataset.count) || 0;
    const pad = Number(el.dataset.pad) || 0;
    const out = (v) => { el.textContent = String(v).padStart(pad, '0'); };
    if (reduceMotion) { out(end); return; }
    const t0 = performance.now(), dur = 1200;
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / dur);
      out(Math.round(end * (1 - Math.pow(1 - k, 3))));
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  /* ---------- Reveal on scroll ---------- */
  const reveal = (el) => {
    el.classList.add('is-in');
    $$('[data-pct], [data-count]', el).forEach(countUp);
  };
  const revealEls = $$('[data-reveal]');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        reveal(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach(reveal);
  }

  /* ---------- Copy email ---------- */
  $$('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(text);
      } catch (_) {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'absolute';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (e) { /* ignore */ }
        ta.remove();
      }
      const label = $('[data-label]', btn);
      if (!label) return;
      label.textContent = 'Copied';
      btn.classList.add('is-done');
      setTimeout(() => { label.textContent = 'Copy'; btn.classList.remove('is-done'); }, 1800);
    });
  });

  /* ---------- Contact form ---------- */
  const form = $('#contactForm');
  if (form) {
    const status = $('#formStatus');
    const say = (msg, state) => { if (!status) return; status.textContent = msg; status.dataset.state = state; };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const data = new FormData(form);
      if (data.get('bot-field')) return;

      const btn = $('[type="submit"]', form);
      if (btn) btn.disabled = true;
      say('Sending…', '');

      try {
        // Netlify Forms endpoint. Other hosts reject this POST and we fall back to email.
        const res = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(data).toString()
        });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        say("Thanks, your message is in. I'll reply within 24 hours.", 'ok');
      } catch (err) {
        const to = form.dataset.email;
        const subject = encodeURIComponent(data.get('subject') || `Portfolio enquiry from ${data.get('name')}`);
        const body = encodeURIComponent(`${data.get('message')}\n\n${data.get('name')} (${data.get('email')})`);
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
        say('Opening your email app to send this message…', 'ok');
      } finally {
        if (btn) btn.disabled = false;
      }
    });
  }
})();
