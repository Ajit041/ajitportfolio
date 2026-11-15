/* ============================================================
   AJIT BEDWAL — PORTFOLIO · script.js
   Vanilla JS only. Content is rendered from PORTFOLIO_DATA below,
   so projects, skills and experience can be updated without
   touching the HTML or CSS.
   ============================================================ */
(() => {
  'use strict';

  /* ==========================================================
     1. PORTFOLIO DATA  ·  ✏️ EDIT THIS BLOCK TO UPDATE THE SITE
     ========================================================== */
  const PORTFOLIO_DATA = {
    profile: {
      firstName: 'Ajit',
      fullName: 'Ajit Bhagwan Bedwal',
      // Rotating roles shown in the hero typewriter
      roles: ['Python Developer', 'AI & Automation Enthusiast', 'Embedded Systems Explorer', 'Web Developer'],

      email: 'bedwal.ajit1@gmail.com',
      phoneDisplay: '+91 95292 88050',
      phoneHref: 'tel:+919529288050',
      location: 'Pune, Maharashtra, India',
      linkedin: 'https://www.linkedin.com/in/ajit-bedwal',
      github: 'https://github.com/Ajit041',
      resumePath: 'assets/resume/Ajit_Bedwal_Resume.pdf',
    },

    education: [
      {
        icon: 'grad',
        degree: 'B.Tech — Computer Engineering',
        school: 'ISBM College of Engineering, Pune',
        period: 'Sep 2024 — Present',
        score: 'Pursuing',
        note: 'Deepening my focus on Python, AI and software development while building on the engineering fundamentals from my diploma.',
      },
      {
        icon: 'grad',
        degree: 'Diploma — Computer Engineering',
        school: 'MIT Polytechnic, Rotegaon',
        period: 'Aug 2021 — Jun 2024',
        score: '84.74%',
        note: 'Built my core engineering foundations, won 1st rank twice in technical poster presentations, and shipped Pure Planting as my final-year project.',
      },
      {
        icon: 'book-open',
        degree: '10th Standard',
        school: 'Saint Monica School, Vaijapur',
        period: 'Jun 2011 — Jun 2021',
        score: '85.00%',
        note: 'Where the curiosity began — taking apart how things work eventually grew into a love for building software and hardware.',
      },
    ],

    skillGroups: [
      {
        icon: 'code',
        title: 'Programming Languages',
        blurb: 'My core toolkit, sharpened across projects and my internship.',
        skills: [
          { name: 'Python', note: 'Primary language — internship, Jarvis AI & automation' },
          { name: 'JavaScript', note: 'Interactive, data-driven web experiences' },
          { name: 'HTML5', note: 'Semantic, accessible markup' },
          { name: 'CSS3', note: 'Layouts, animation & responsive design' },
        ],
      },
      {
        icon: 'sparkles',
        title: 'AI & Automation',
        blurb: 'Building assistants and automations that do real work.',
        skills: [
          { name: 'AI Model Building', note: 'Designing models for practical, real-world tasks' },
          { name: 'Gemini API', note: 'LLM-powered responses in Jarvis AI' },
          { name: 'SpeechRecognition + PyAudio', note: 'Speech-to-text voice pipelines' },
          { name: 'Text-to-Speech', note: 'Natural spoken replies' },
          { name: 'Task Automation', note: 'Apps, web search & system actions' },
        ],
      },
      {
        icon: 'cpu',
        title: 'Embedded Systems & IoT',
        blurb: 'Where my software meets real hardware.',
        skills: [
          { name: 'ESP32', note: 'Hardware AI module development at Insclupt Technologies' },
          { name: 'Sensors & Microcontrollers', note: 'Integrated with Python applications' },
          { name: 'Hardware Integration', note: 'Peripheral devices & automation' },
          { name: 'Embedded Debugging', note: 'Reliability & performance tuning' },
        ],
      },
      {
        icon: 'globe',
        title: 'Web & Databases',
        blurb: 'Front-ends and the data layer behind them.',
        skills: [
          { name: 'Responsive Front-ends', note: 'Pure Planting UI with HTML/CSS/JS' },
          { name: 'MySQL', note: 'Centralised databases for web platforms' },
          { name: 'REST API Consumption', note: 'Integrating external services' },
        ],
      },
      {
        icon: 'wrench',
        title: 'Tools & Practices',
        blurb: 'How I build, test and ship.',
        skills: [
          { name: 'Git / GitHub', note: 'Version control & collaboration' },
          { name: 'API Integration', note: 'REST APIs across projects' },
          { name: 'Debugging', note: 'Systematic troubleshooting' },
          { name: 'Testing & Optimisation', note: 'Performance-first mindset' },
        ],
      },
    ],

    projects: [
      {
        id: 'jarvis-ai',
        title: 'Jarvis AI',
        subtitle: 'Desktop Personal AI Assistant',
        category: 'ai',
        categoryLabel: 'AI & Automation',
        year: 'Personal Project',
        role: 'Sole Developer',
        tagline:
          'A voice-driven desktop assistant that runs system tasks from natural speech — with a privacy-first, runs-locally design.',
        problem:
          'Everyday computer tasks — launching apps, searching the web, running routine actions — usually mean navigating menus and typing. I wanted a hands-free way to control my machine with natural voice commands, without handing my data over to a cloud service.',
        description:
          'Jarvis AI listens for spoken commands, converts them to text, and acts on them — launching applications, performing web searches and automating system tasks. Speech-recognition and text-to-speech modules create a two-way voice loop, while the Gemini API and other REST APIs give the assistant intelligent, contextual responses.',
        contributions: [
          'Built the complete voice interaction pipeline: SpeechRecognition and PyAudio for speech-to-text, plus a Text-to-Speech module for spoken replies.',
          'Integrated the Gemini API and external REST APIs to generate intelligent responses and enable task automation.',
          'Implemented system actions — application launching, web search and OS-level automation — triggered by natural language commands.',
          'Designed the architecture around a privacy-first approach, processing tasks locally to reduce dependence on cloud services and minimise data-security risks.',
          'Profiled and tuned the assistant for faster response times, higher command accuracy and a smoother user experience.',
        ],
        features: [
          'Natural voice command interaction (speech-to-text + text-to-speech)',
          'Application launching & system automation',
          'Web search and intelligent replies via the Gemini API',
          'Local-first processing designed for privacy',
          'Optimised response time and command accuracy',
        ],
        stack: ['Python', 'SpeechRecognition', 'PyAudio', 'Gemini API', 'REST APIs', 'Text-to-Speech', 'Git'],
        visual: 'jarvis',
        links: { github: '', demo: '' }, // ← add repo / demo URLs when available
      },
      {
        id: 'pure-planting',
        title: 'Pure Planting',
        subtitle: 'Organic Farming Support System',
        category: 'web',
        categoryLabel: 'Web Development',
        year: 'Diploma Final-Year Project',
        role: 'Designer & Developer',
        tagline:
          'A web platform that puts reliable organic-farming knowledge — from disease identification to sustainable practices — in farmers\u2019 hands.',
        problem:
          'Farmers practising organic farming often lack easy access to trustworthy, centralised guidance — how to identify crop diseases and pests, which organic treatments actually work, and how to keep soil healthy season after season.',
        description:
          'Pure Planting is a web-based support system for organic farmers. It helps users identify common crop diseases and pests with recommended organic treatments, offers guidance on organic fertilisers, composting and crop rotation, and serves seasonal crop recommendations and cultivation tips — all through a simple, farmer-friendly interface backed by a centralised MySQL database.',
        contributions: [
          'Designed and developed the platform end-to-end as my diploma final-year project — from concept and interface design to implementation.',
          'Built the crop disease and pest identification feature, paired with recommended organic treatment methods.',
          'Created content modules for organic fertilisers, composting techniques, crop rotation and sustainable farming practices.',
          'Implemented seasonal crop recommendations, cultivation tips and best-practice guides behind a simple, user-friendly interface.',
          'Designed a centralised MySQL database to keep farming information organised and easily accessible.',
        ],
        features: [
          'Crop disease & pest identification with organic remedies',
          'Organic fertiliser, composting & crop-rotation guidance',
          'Seasonal crop recommendations & cultivation tips',
          'Farmer-friendly, simple interface',
          'Centralised MySQL database for farming information',
        ],
        stack: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
        visual: 'planting',
        links: { github: '', demo: '' },
      },
    ],

    experience: [
      {
        role: 'Software Developer Intern',
        company: 'Insclupt Technologies LLP',
        location: 'Pune, India',
        badge: 'Internship',
        period: 'Jan 2026 — Mar 2026',
        summary:
          'Worked at the intersection of Python software and embedded hardware — developing code for robotic kits and ESP32-based AI modules.',
        points: [
          'Developed Python code for robotic kits in line with product requirements and functional specifications.',
          'Worked on ESP32-based hardware AI modules, assisting in the development and integration of embedded AI solutions.',
          'Integrated sensors, microcontrollers and peripheral devices with Python applications for hardware automation.',
          'Developed and tested communication between software applications and embedded hardware components.',
          'Debugged, tested and optimised embedded software to improve system performance and reliability.',
          'Collaborated with the development team to implement new features, resolve technical issues and validate product functionality.',
        ],
        skills: ['Python', 'ESP32', 'Embedded Systems', 'IoT', 'Hardware Integration', 'API Integration', 'Git/GitHub', 'Debugging', 'Testing'],
      },
    ],

    achievements: [
      {
        icon: 'trophy',
        tag: 'Hackathon',
        title: 'Smart India Hackathon (SIH)',
        org: 'National-Level Participant',
        period: 'College qualifier → National round',
        text: 'Qualified through the college-level SIH competition and went on to participate in the Smart India Hackathon at the national level.',
      },
      {
        icon: 'award',
        tag: 'Award',
        title: 'Technical Poster Presentation — 1st Rank ×2',
        org: 'MIT Polytechnic, Rotegaon',
        period: 'Diploma years',
        text: 'Secured 1st rank twice for outstanding topic selection and presentation performance in technical poster competitions.',
      },
      {
        icon: 'code',
        tag: 'Hackathon',
        title: 'Hack Spirit Hackathon',
        org: 'College hackathon',
        period: 'Mar 2025',
        text: 'Participated in the Hack Spirit hackathon held at college — fast decisions, teamwork and building under a deadline.',
      },
    ],

    journey: [
      {
        phase: '2021 — 2024',
        title: 'Foundations',
        text: 'Diploma in Computer Engineering at MIT Polytechnic, Rotegaon — programming, web technologies and databases, two 1st-rank poster presentations, and Pure Planting as my final-year project.',
        chips: ['Diploma · 84.74%', 'Pure Planting', 'Poster presentations'],
      },
      {
        phase: '2024 — Present',
        title: 'B.Tech & Hackathons',
        text: 'Pursuing B.Tech in Computer Engineering at ISBM College of Engineering, Pune — focusing on Python and software development, and testing my skills in hackathons like Hack Spirit and Smart India Hackathon.',
        chips: ['B.Tech', 'SIH · National level', 'Hack Spirit'],
      },
      {
        phase: 'Jan — Mar 2026',
        title: 'Industry Experience',
        text: 'Software Developer Intern at Insclupt Technologies LLP, Pune — wrote Python for robotic kits and worked on ESP32-based embedded AI modules, learning how software and hardware come together in real products.',
        chips: ['Python', 'ESP32', 'IoT'],
      },
      {
        phase: 'Now',
        title: 'Learning Priorities',
        text: 'Currently going deeper into AI model building and automation, strengthening my Python, and exploring where embedded hardware meets intelligent software.',
        chips: ['AI / ML', 'Python', 'Embedded AI'],
      },
      {
        phase: 'Next',
        title: 'The Goal',
        text: 'Short term: an internship or fresher role where I can build and ship real products. Long term: grow into an engineer who designs intelligent, reliable software that solves real-world problems.',
        chips: ['Open to opportunities', 'Software development'],
      },
    ],

    interests: [
      { icon: 'book-open', title: 'Reading Books', text: 'Fiction, tech and everything in between — reading keeps me curious and patient.' },
      { icon: 'lightbulb', title: 'Learning New Tech', text: 'Exploring new tools, APIs and frameworks is my default way to spend free time.' },
      { icon: 'globe', title: 'Travelling', text: 'New places, new perspectives — travel resets my mind and sparks new ideas.' },
      { icon: 'bot', title: 'Robotics', text: 'My internship with robotic kits and ESP32 turned a curiosity into a genuine passion.' },
      { icon: 'rocket', title: 'Aerospace & Space', text: 'Fascinated by rockets, missions and the engineering that reaches beyond Earth.' },
    ],
  };

  /* ==========================================================
     2. SMALL HELPERS
     ========================================================== */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FINE_POINTER = window.matchMedia('(pointer: fine)').matches;
  const P = PORTFOLIO_DATA.profile;

  const icon = (name, cls = 'icon') => `<svg class="${cls}" aria-hidden="true"><use href="#i-${name}"></use></svg>`;

  /* ==========================================================
     3. PROJECT VISUALS (inline SVG illustrations)
     ========================================================== */
  const VISUALS = {
    jarvis: () => {
      const bars = Array.from({ length: 26 }, (_, i) => {
        const h = 8 + Math.abs(Math.sin(i * 0.85)) * 42 + (i % 5) * 3;
        const x = 68 + i * 11.2;
        const y = 204 - h;
        const c = i % 3 === 0 ? '#22d3ee' : i % 3 === 1 ? '#4f8cff' : '#8b5cf6';
        return `<rect class="wave-bar" x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="4.6" height="${h.toFixed(1)}" rx="2.3" fill="${c}" opacity="0.78" style="animation-delay:${(-i * 0.085).toFixed(2)}s"/>`;
      }).join('');
      return `
      <svg viewBox="0 0 420 240" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Stylised illustration of the Jarvis AI voice assistant">
        <circle cx="210" cy="96" r="46" fill="none" stroke="#22d3ee" stroke-opacity="0.35" stroke-width="1.5"/>
        <circle cx="210" cy="96" r="58" fill="none" stroke="#4f8cff" stroke-opacity="0.18" stroke-dasharray="3 6"/>
        <circle cx="210" cy="96" r="30" fill="rgba(34,211,238,0.08)" stroke="#22d3ee" stroke-width="1.6"/>
        <rect x="200" y="82" width="20" height="20" rx="10" fill="none" stroke="#22d3ee" stroke-width="2"/>
        <path d="M194 96a16 16 0 0 0 32 0" fill="none" stroke="#22d3ee" stroke-width="2" stroke-linecap="round"/>
        <line x1="210" y1="114" x2="210" y2="120" stroke="#22d3ee" stroke-width="2" stroke-linecap="round"/>
        <circle cx="168" cy="72" r="3" fill="#8b5cf6" opacity="0.8"/>
        <circle cx="256" cy="118" r="2.5" fill="#22d3ee" opacity="0.8"/>
        ${bars}
        <text x="24" y="30" font-family="monospace" font-size="12" fill="#22d3ee" opacity="0.85">JARVIS v1.0</text>
        <text x="24" y="48" font-family="monospace" font-size="9" fill="#7c86a2">voice · local-first · automation</text>
      </svg>`;
    },
    planting: () => `
      <svg viewBox="0 0 420 240" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Stylised illustration of the Pure Planting organic farming platform">
        <g transform="translate(258 52) scale(5.4)" fill="none" stroke="#34d399" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
        </g>
        <circle cx="88" cy="64" r="20" fill="none" stroke="#22d3ee" stroke-opacity="0.5" stroke-width="1.6"/>
        <circle cx="88" cy="64" r="9" fill="rgba(34,211,238,0.14)" stroke="#22d3ee" stroke-width="1.4"/>
        <line x1="88" y1="84" x2="88" y2="128" stroke="#4f8cff" stroke-opacity="0.55" stroke-width="1.4"/>
        <line x1="88" y1="104" x2="150" y2="128" stroke="#4f8cff" stroke-opacity="0.4" stroke-width="1.2" stroke-dasharray="4 4"/>
        <line x1="88" y1="116" x2="196" y2="140" stroke="#8b5cf6" stroke-opacity="0.4" stroke-width="1.2" stroke-dasharray="4 4"/>
        <rect x="146" y="124" width="9" height="9" rx="2" fill="none" stroke="#4f8cff" stroke-opacity="0.7" stroke-width="1.3"/>
        <rect x="192" y="136" width="9" height="9" rx="2" fill="none" stroke="#8b5cf6" stroke-opacity="0.7" stroke-width="1.3"/>
        <circle cx="88" cy="128" r="3" fill="#22d3ee"/>
        <line x1="36" y1="188" x2="384" y2="188" stroke="#34d399" stroke-opacity="0.45" stroke-width="1.4" stroke-dasharray="6 7"/>
        <g fill="none" stroke="#34d399" stroke-width="1.6" stroke-linecap="round">
          <path d="M120 188v-16"/><path d="M120 176c-8-2-11-8-11-14 7 0 11 5 11 14z"/><path d="M120 172c8-2 11-8 11-14-7 0-11 5-11 14z"/>
          <path d="M208 188v-22"/><path d="M208 170c-9-2-13-9-13-16 8 0 13 6 13 16z"/><path d="M208 165c9-2 13-9 13-16-8 0-13 6-13 16z"/>
          <path d="M300 188v-14"/><path d="M300 178c-7-2-10-7-10-12 6 0 10 4 10 12z"/><path d="M300 174c7-2 10-7 10-12-6 0-10 4-10 12z"/>
        </g>
        <text x="24" y="30" font-family="monospace" font-size="12" fill="#34d399" opacity="0.9">PURE PLANTING</text>
        <text x="24" y="48" font-family="monospace" font-size="9" fill="#7c86a2">organic farming · web · mysql</text>
      </svg>`,
  };

  /* ==========================================================
     4. RENDERERS — build repeated sections from the data above
     ========================================================== */

  // --- Social links (hero, drawer, footer) ---
  function renderSocials() {
    const socials = [
      { label: 'LinkedIn', icon: 'linkedin', href: P.linkedin },
      { label: 'Email', icon: 'mail', href: `mailto:${P.email}` },
      { label: 'Phone', icon: 'phone', href: P.phoneHref },
      { label: 'GitHub', icon: 'github', href: P.github }, // renders only when a URL is set in the data block
    ].filter((s) => s.href);

    $$('[data-socials]').forEach((mount) => {
      mount.innerHTML = `<div class="socials">${socials
        .map(
          (s) => `
        <a class="social-btn" href="${s.href}" target="${s.href.startsWith('http') ? '_blank" rel="noopener' : '"'}"
           aria-label="${s.label}" title="${s.label}" data-cursor>${icon(s.icon)}</a>`
        )
        .join('')}</div>`;
    });
  }

  // --- Education timeline ---
  function renderEducation() {
    const track = $('#education-track');
    if (!track) return;
    track.innerHTML = PORTFOLIO_DATA.education
      .map(
        (e) => `
      <div class="edu-item reveal">
        <div class="edu-dot">${icon(e.icon)}</div>
        <div class="edu-card glass">
          <span class="edu-period mono">${icon('calendar')} ${e.period}</span>
          <h3>${e.degree}</h3>
          <p class="edu-school">${e.school}</p>
          <p class="edu-note">${e.note}</p>
          <span class="edu-score">${e.score}</span>
        </div>
      </div>`
      )
      .join('');
  }

  // --- Skills ---
  function renderSkills() {
    const grid = $('#skills-grid');
    if (!grid) return;
    grid.innerHTML = PORTFOLIO_DATA.skillGroups
      .map(
        (g) => `
      <article class="skill-card glass reveal">
        <div class="skill-head">
          <span class="skill-ico">${icon(g.icon)}</span>
          <div>
            <h3>${g.title}</h3>
            <p class="skill-blurb">${g.blurb}</p>
          </div>
        </div>
        <div class="skill-list">
          ${g.skills.map((s) => `<div class="skill-row"><b>${s.name}</b><span>${s.note}</span></div>`).join('')}
        </div>
      </article>`
      )
      .join('');
  }

  // --- Projects: filter bar, cards, modal content ---
  let currentFilter = 'all';

  function renderFilterBar() {
    const bar = $('#filter-bar');
    if (!bar) return;
    const cats = [{ id: 'all', label: 'All' }];
    PORTFOLIO_DATA.projects.forEach((p) => {
      if (!cats.some((c) => c.id === p.category)) cats.push({ id: p.category, label: p.categoryLabel });
    });
    bar.innerHTML = cats
      .map(
        (c) =>
          `<button class="filter-btn${c.id === currentFilter ? ' active' : ''}" data-filter="${c.id}" data-cursor type="button" aria-pressed="${c.id === currentFilter}">${c.label}</button>`
      )
      .join('');
  }

  function projectCard(p) {
    const chips = p.stack.slice(0, 4).map((s) => `<span>${s}</span>`).join('');
    const extra = p.stack.length > 4 ? `<span>+${p.stack.length - 4} more</span>` : '';
    return `
    <article class="project-card glass reveal" data-category="${p.category}" data-id="${p.id}">
      <div class="p-visual${p.visual === 'planting' ? ' visual-green' : ''}" aria-hidden="true">${VISUALS[p.visual]()}</div>
      <div class="p-body">
        <div class="p-meta"><span class="p-cat">${p.categoryLabel}</span><span class="p-year">${p.year}</span></div>
        <h3 class="p-title">${p.title}</h3>
        <p class="p-subtitle">${p.subtitle}</p>
        <p class="p-tagline">${p.tagline}</p>
        <div class="p-stack">${chips}${extra}</div>
        <div class="p-actions">
          <button class="btn btn-primary btn-sm" data-open-project="${p.id}" type="button" data-cursor>
            Case Study ${icon('arrow-right')}
          </button>
          ${p.links.github ? `<a class="p-gh" href="${p.links.github}" target="_blank" rel="noopener" aria-label="${p.title} on GitHub" data-cursor>${icon('github')}</a>` : ''}
        </div>
      </div>
    </article>`;
  }

  function renderProjects() {
    const grid = $('#projects-grid');
    if (!grid) return;
    grid.innerHTML = PORTFOLIO_DATA.projects.map(projectCard).join('');
  }

  function applyFilter(cat) {
    currentFilter = cat;
    renderFilterBar();
    const cards = $$('#projects-grid .project-card');
    cards.forEach((card) => {
      const show = cat === 'all' || card.dataset.category === cat;
      card.classList.toggle('hide', !show);
      if (show && !REDUCED) {
        card.style.animation = 'none';
        void card.offsetWidth; // restart the entrance animation
        card.style.animation = 'cardIn 0.45s ease both';
      }
    });
  }

  function modalContent(p) {
    const hasGithub = !!p.links.github;
    const hasDemo = !!p.links.demo;
    const linkButtons = [
      hasGithub ? `<a class="btn btn-ghost btn-sm" href="${p.links.github}" target="_blank" rel="noopener" data-cursor>${icon('github')} Source Code</a>` : '',
      hasDemo ? `<a class="btn btn-primary btn-sm" href="${p.links.demo}" target="_blank" rel="noopener" data-cursor>${icon('external')} Live Demo</a>` : '',
      !hasGithub && !hasDemo ? `<p class="m-note">Source code is available on request — feel free to reach out via the contact section.</p>` : '',
    ].join('');

    return `
    <div class="m-visual${p.visual === 'planting' ? ' visual-green' : ''}" aria-hidden="true">${VISUALS[p.visual]()}</div>
    <div class="m-body">
      <h3 id="modal-title">${p.title}</h3>
      <p class="m-sub">${p.subtitle}</p>
      <div class="m-meta">
        <span>${p.categoryLabel}</span><span>${p.year}</span><span>Role: ${p.role}</span>
      </div>

      <div class="m-section">
        <h4>The Problem</h4>
        <p>${p.problem}</p>
      </div>

      <div class="m-section">
        <h4>What I Built</h4>
        <ul class="m-list">
          ${p.features.map((f) => `<li>${icon('check')}<span>${f}</span></li>`).join('')}
        </ul>
      </div>

      <div class="m-section">
        <h4>My Contributions</h4>
        <ul class="m-list">
          ${p.contributions.map((c) => `<li>${icon('check')}<span>${c}</span></li>`).join('')}
        </ul>
      </div>

      <div class="m-section">
        <h4>Technology Stack</h4>
        <div class="m-stack">${p.stack.map((s) => `<span>${s}</span>`).join('')}</div>
      </div>

      <div class="m-links">${linkButtons}</div>
      <div class="m-cta">
        <a class="btn-link" href="#contact" data-close-modal data-cursor>
          Let's talk about this project ${icon('arrow-right')}
        </a>
      </div>
    </div>`;
  }

  // --- Experience ---
  function renderExperience() {
    const track = $('#experience-track');
    if (!track) return;
    track.innerHTML = PORTFOLIO_DATA.experience
      .map(
        (x) => `
      <article class="xp-item glass reveal">
        <span class="xp-icon">${icon('briefcase')}</span>
        <div class="xp-head">
          <div>
            <h3>${x.role}</h3>
            <p class="xp-company">${x.company} · ${x.location}</p>
          </div>
          <span class="xp-badge">${x.badge}</span>
        </div>
        <span class="xp-period">${icon('calendar')} ${x.period}</span>
        <p class="xp-summary">${x.summary}</p>
        <ul class="xp-list">${x.points.map((pt) => `<li>${pt}</li>`).join('')}</ul>
        <div class="xp-skills">${x.skills.map((s) => `<span>${s}</span>`).join('')}</div>
      </article>`
      )
      .join('');
  }

  // --- Achievements ---
  function renderAchievements() {
    const grid = $('#achievements-grid');
    if (!grid) return;
    grid.innerHTML = PORTFOLIO_DATA.achievements
      .map(
        (a) => `
      <article class="ach-card glass reveal">
        <span class="ach-ico">${icon(a.icon)}</span>
        <span class="ach-tag">${a.tag}</span>
        <h3 class="ach-title">${a.title}</h3>
        <p class="ach-org">${a.org}</p>
        <p class="ach-period">${a.period}</p>
        <p class="ach-text">${a.text}</p>
      </article>`
      )
      .join('');
  }

  // --- Journey roadmap ---
  function renderJourney() {
    const track = $('#journey-track');
    if (!track) return;
    track.innerHTML = PORTFOLIO_DATA.journey
      .map(
        (j) => `
      <div class="j-item reveal">
        <span class="j-phase">${j.phase}</span>
        <h3 class="j-title">${j.title}</h3>
        <p class="j-text">${j.text}</p>
        <div class="j-chips">${j.chips.map((c) => `<span>${c}</span>`).join('')}</div>
      </div>`
      )
      .join('');
  }

  // --- Interests ---
  function renderInterests() {
    const grid = $('#interests-grid');
    if (!grid) return;
    grid.innerHTML = PORTFOLIO_DATA.interests
      .map(
        (i) => `
      <article class="int-card glass reveal">
        <span class="int-ico">${icon(i.icon)}</span>
        <h3 class="int-title">${i.title}</h3>
        <p class="int-text">${i.text}</p>
      </article>`
      )
      .join('');
  }

  /* ==========================================================
     5. STAGGER + SCROLL REVEAL (Intersection Observer)
     ========================================================== */
  function setupReveals() {
    // Stagger children of any [data-stagger] container
    $$('[data-stagger]').forEach((parent) => {
      $$('.reveal', parent).forEach((el, i) => {
        el.style.setProperty('--rd', `${Math.min(i * 90, 540)}ms`);
      });
    });

    if (REDUCED || !('IntersectionObserver' in window)) {
      $$('.reveal').forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    $$('.reveal').forEach((el) => io.observe(el));
  }

  /* ==========================================================
     6. PRELOADER
     ========================================================== */
  function setupPreloader() {
    const pre = $('#preloader');
    if (!pre) return;
    const finish = () => {
      pre.classList.add('done');
      setTimeout(() => pre.remove(), 700);
    };
    if (REDUCED) return finish();
    let done = false;
    const once = () => { if (!done) { done = true; setTimeout(finish, 350); } };
    window.addEventListener('load', once);
    setTimeout(once, 1400); // never hold the page hostage
  }

  /* ==========================================================
     7. NAVBAR · SCROLL STATE · ACTIVE LINK · PROGRESS · BACK-TO-TOP
     ========================================================== */
  function setupScrollChrome() {
    const navbar = $('#navbar');
    const progressBar = $('#scroll-progress-bar');
    const backToTop = $('#back-to-top');
    if (!navbar) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        navbar.classList.toggle('scrolled', y > 24);
        if (backToTop) backToTop.classList.toggle('show', y > 560);
        if (progressBar) {
          const max = document.documentElement.scrollHeight - window.innerHeight;
          progressBar.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (backToTop) {
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: REDUCED ? 'auto' : 'smooth' });
      });
    }

    // Highlight the nav link of the section currently in view
    const sections = $$('main section[id]');
    const allNavLinks = $$('.nav-link, .drawer-link');
    const setActive = (id) => {
      allNavLinks.forEach((l) => {
        const href = l.getAttribute('href');
        l.classList.toggle('active', href === `#${id}`);
      });
    };
    if ('IntersectionObserver' in window) {
      const spy = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
        },
        { rootMargin: '-42% 0px -52% 0px' }
      );
      sections.forEach((s) => spy.observe(s));
    }
  }

  /* ==========================================================
     8. MOBILE DRAWER
     ========================================================== */
  function setupDrawer() {
    const toggle = $('#nav-toggle');
    const drawer = $('#drawer');
    const overlay = $('#drawer-overlay');
    const closeBtn = $('#drawer-close');
    if (!toggle || !drawer || !overlay) return;

    const open = () => {
      overlay.hidden = false;
      requestAnimationFrame(() => overlay.classList.add('open'));
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      closeBtn && closeBtn.focus();
    };
    const close = () => {
      overlay.classList.remove('open');
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      setTimeout(() => { overlay.hidden = true; }, 360);
      toggle.focus();
    };

    toggle.addEventListener('click', open);
    closeBtn && closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', close);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) close();
    });
    $$('.drawer-link', drawer).forEach((l) => l.addEventListener('click', close));
  }

  /* ==========================================================
     9. HERO TYPEWRITER
     ========================================================== */
  function setupTypewriter() {
    const el = $('#typed');
    if (!el) return;
    const roles = P.roles.length ? P.roles : ['Developer'];
    if (REDUCED) { el.textContent = roles[0]; return; }

    let roleIdx = 0, charIdx = 0, deleting = false;
    const TYPE = 68, DELETE = 34, HOLD = 1700, GAP = 420;

    const tick = () => {
      const word = roles[roleIdx];
      charIdx += deleting ? -1 : 1;
      el.textContent = word.slice(0, charIdx);

      let delay = deleting ? DELETE : TYPE;
      if (!deleting && charIdx === word.length) { deleting = true; delay = HOLD; }
      else if (deleting && charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        delay = GAP;
      }
      setTimeout(tick, delay);
    };
    setTimeout(tick, 700);
  }

  /* ==========================================================
     10. HERO TERMINAL LOOP
     ========================================================== */
  function setupTerminal() {
    const body = $('#term-body');
    if (!body) return;
    const script = [
      { cls: 't-cmd', text: 'jarvis.listen()' },
      { cls: 't-user', text: '"Hey Jarvis, open my code editor"' },
      { cls: 't-ok', text: 'launching application … done' },
      { cls: 't-dim', text: '# privacy-first · processed locally' },
    ];

    if (REDUCED) {
      body.innerHTML = script.map((l) => `<div class="${l.cls}">${l.text}</div>`).join('');
      return;
    }

    const caret = '<span class="term-caret"></span>';
    let line = 0, ch = 0, el = null;

    const step = () => {
      if (ch === 0) {
        el = document.createElement('div');
        el.className = script[line].cls;
        body.appendChild(el);
        if (body.children.length > 4) body.removeChild(body.firstChild);
      }
      ch++;
      el.innerHTML = script[line].text.slice(0, ch) + caret;
      if (ch >= script[line].text.length) {
        el.innerHTML = script[line].text;
        line = (line + 1) % script.length;
        ch = 0;
        if (line === 0) {
          setTimeout(() => { body.innerHTML = ''; step(); }, 3200);
          return;
        }
        setTimeout(step, 560);
        return;
      }
      setTimeout(step, 34);
    };
    setTimeout(step, 900);
  }

  /* ==========================================================
     11. PARTICLE FIELD (canvas — light, pauses when tab hidden)
     ========================================================== */
  function setupParticles() {
    if (REDUCED) return;
    const canvas = $('#particle-canvas');
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const COLORS = ['34, 211, 238', '79, 140, 255', '139, 92, 246'];
    let W = 0, H = 0, parts = [], raf = null;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W * DPR; canvas.height = H * DPR;
      canvas.style.width = `${W}px`; canvas.style.height = `${H}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const count = W < 720 ? 26 : W < 1200 ? 44 : 62;
      parts = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.6,
        c: COLORS[(Math.random() * COLORS.length) | 0],
        a: Math.random() * 0.45 + 0.2,
      }));
    };

    const LINK = 115;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -20) p.x = W + 20; else if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20; else if (p.y > H + 20) p.y = -20;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c}, ${p.a})`;
        ctx.fill();
      }
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const dx = parts[i].x - parts[j].x, dy = parts[i].y - parts[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK * LINK) {
            const alpha = (1 - Math.sqrt(d2) / LINK) * 0.14;
            ctx.strokeStyle = `rgba(${parts[i].c}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(parts[i].x, parts[i].y);
            ctx.lineTo(parts[j].x, parts[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) { cancelAnimationFrame(raf); raf = null; }
      else if (!raf) { draw(); }
    });
  }

  /* ==========================================================
     12. BUTTON MICRO-INTERACTIONS · ripple · magnetic · tilt
     ========================================================== */
  function setupMicro() {
    if (REDUCED) return;

    // Ripple
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn');
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const d = Math.max(rect.width, rect.height);
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = `${d}px`;
      ripple.style.left = `${e.clientX - rect.left - d / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - d / 2}px`;
      btn.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });

    if (!FINE_POINTER) return;

    // Magnetic pull on buttons
    $$('.magnetic').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const relX = e.clientX - r.left - r.width / 2;
        const relY = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${relX * 0.12}px, ${relY * 0.18}px)`;
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });

    // Subtle 3D tilt on marked cards
    $$('[data-tilt]').forEach((el) => {
      el.style.transformStyle = 'preserve-3d';
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${(-py * 4).toFixed(2)}deg) rotateY(${(px * 4).toFixed(2)}deg)`;
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
  }

  /* ==========================================================
     13. CUSTOM CURSOR (fine pointers only)
     ========================================================== */
  function setupCursor() {
    if (REDUCED || !FINE_POINTER) return;
    const dot = $('.cursor-dot');
    const ring = $('.cursor-ring');
    if (!dot || !ring) return;

    let mx = -100, my = -100, rx = -100, ry = -100;
    document.addEventListener('pointermove', (e) => {
      mx = e.clientX; my = e.clientY;
      document.body.classList.add('cursor-on');
    }, { passive: true });

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    const hoverSel = 'a, button, [data-cursor], input, textarea, .filter-btn';
    document.addEventListener('pointerover', (e) => {
      if (e.target.closest(hoverSel)) ring.classList.add('hovering');
    });
    document.addEventListener('pointerout', (e) => {
      if (e.target.closest(hoverSel)) ring.classList.remove('hovering');
    });
  }

  /* ==========================================================
     14. PROJECT FILTERING
     ========================================================== */
  function setupFiltering() {
    const bar = $('#filter-bar');
    if (!bar) return;
    bar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      applyFilter(btn.dataset.filter);
    });
  }

  /* ==========================================================
     15. PROJECT MODAL (accessible: focus trap, Esc, backdrop)
     ========================================================== */
  const Modal = {
    el: null, card: null, content: null, closeBtn: null, lastFocus: null,

    init() {
      this.el = $('#project-modal');
      if (!this.el) return;
      this.card = $('.modal-card', this.el);
      this.content = $('#modal-content');
      this.closeBtn = $('#modal-close');

      document.addEventListener('click', (e) => {
        const opener = e.target.closest('[data-open-project]');
        if (opener) {
          const project = PORTFOLIO_DATA.projects.find((p) => p.id === opener.dataset.openProject);
          if (project) this.open(project);
        }
        if (e.target === this.el || e.target.closest('[data-close-modal]')) this.close();
      });
      this.closeBtn && this.closeBtn.addEventListener('click', () => this.close());
      document.addEventListener('keydown', (e) => {
        if (!this.el.classList.contains('open')) return;
        if (e.key === 'Escape') this.close();
        if (e.key === 'Tab') this.trapTab(e);
      });
    },

    open(project) {
      if (!this.el) return;
      this.content.innerHTML = modalContent(project);
      this.lastFocus = document.activeElement;
      this.el.classList.add('open');
      this.el.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      this.closeBtn && this.closeBtn.focus();
    },

    close() {
      if (!this.el || !this.el.classList.contains('open')) return;
      this.el.classList.remove('open');
      this.el.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      this.lastFocus && this.lastFocus.focus();
    },

    trapTab(e) {
      const focusables = $$('a[href], button:not([disabled])', this.card);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
      else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
    },
  };

  /* ==========================================================
     16. CONTACT FORM (client-side validation → mailto compose)
     ========================================================== */
  function setupForm() {
    const form = $('#contact-form');
    if (!form) return;

    const fields = {
      name: { input: $('#cf-name'), test: (v) => v.trim().length >= 2, msg: 'Please enter your name (at least 2 characters).' },
      email: {
        input: $('#cf-email'),
        test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
        msg: 'Please enter a valid email address.',
      },
      subject: { input: $('#cf-subject'), test: (v) => v.trim().length >= 3, msg: 'Please add a short subject (at least 3 characters).' },
      message: { input: $('#cf-message'), test: (v) => v.trim().length >= 10, msg: 'Please write a message of at least 10 characters.' },
    };

    const setError = (key, on) => {
      const f = fields[key];
      const wrap = f.input.closest('.field');
      const errEl = $(`[data-err="${key}"]`, form);
      wrap && wrap.classList.toggle('invalid', on);
      errEl && errEl.classList.toggle('show', on);
      if (on) errEl.textContent = f.msg; else errEl.textContent = '';
      f.input.setAttribute('aria-invalid', on ? 'true' : 'false');
    };

    Object.entries(fields).forEach(([key, f]) => {
      f.input.addEventListener('input', () => setError(key, false));
      f.input.addEventListener('blur', () => {
        if (f.input.value.trim() !== '' && !f.test(f.input.value)) setError(key, true);
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let firstBad = null;
      Object.entries(fields).forEach(([key, f]) => {
        const ok = f.test(f.input.value);
        setError(key, !ok);
        if (!ok && !firstBad) firstBad = f.input;
      });
      if (firstBad) { firstBad.focus(); return; }

      // Honest "send": compose in the visitor's email app (no backend, nothing stored).
      const subject = encodeURIComponent(fields.subject.input.value.trim());
      const body = encodeURIComponent(
        `Hi Ajit,\n\n${fields.message.input.value.trim()}\n\n— ${fields.name.input.value.trim()} (${fields.email.input.value.trim()})`
      );
      window.location.href = `mailto:${P.email}?subject=${subject}&body=${body}`;

      const ok = $('#form-success');
      ok && (ok.hidden = false);
      form.reset();
      showToast('Opening your email app with the message pre-filled…', 'success');
    });
  }

  /* ==========================================================
     17. TOAST + COPY EMAIL
     ========================================================== */
  let toastTimer = null;
  function showToast(msg, type = '') {
    const toast = $('#toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.className = `toast show${type ? ` ${type}` : ''}`;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.className = 'toast'; }, 2800);
  }

  function setupCopyEmail() {
    const btn = $('#copy-email');
    if (!btn) return;
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(P.email);
        } else {
          const ta = document.createElement('textarea');
          ta.value = P.email;
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          ta.remove();
        }
        showToast('Email address copied to clipboard ✓', 'success');
      } catch {
        showToast('Could not copy — the address is bedwal.ajit1@gmail.com');
      }
    });
  }

  /* ==========================================================
     18. FOOTER YEAR + BOOT
     ========================================================== */
  function setYear() {
    const y = $('#year');
    if (y) y.textContent = new Date().getFullYear();
  }

  function boot() {
    // Render content first…
    renderSocials();
    renderEducation();
    renderSkills();
    renderFilterBar();
    renderProjects();
    renderExperience();
    renderAchievements();
    renderJourney();
    renderInterests();

    // …then wire up behaviour.
    setupReveals();
    setupPreloader();
    setupScrollChrome();
    setupDrawer();
    setupTypewriter();
    setupTerminal();
    setupParticles();
    setupMicro();
    setupCursor();
    setupFiltering();
    Modal.init();
    setupForm();
    setupCopyEmail();
    setYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
