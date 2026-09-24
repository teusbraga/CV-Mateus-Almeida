/* ============================================
   MATEUS ALMEIDA — PORTFOLIO SCRIPT
   Vanilla JS: toggle de idioma, menu mobile,
   copiar para clipboard.
   Sem dependências. Sem build. Sem frameworks.
   ============================================ */

/* ---- CHAVES QUE CONTÊM HTML INTERNO ---- */
const HTML_KEYS = new Set([
  'hero_subtitle',
  'why_intro',
  'why_good1',
  'why_good2',
  'why_good3',
  'why_good4',
  'why_good5',
]);

/* ---- TRADUÇÃO EN ---- */
const en = {
  lang: 'en',

  /* Navbar */
  nav_available:  'Available for new contracts & Fiverr',
  nav_send_email: 'Send Email',
  nav_services:   'Services',
  nav_why:        'Why QA + AI?',
  nav_projects:   'Projects',
  nav_stack:      'Stack',
  nav_journey:    'Journey',
  mob_services:   'Services & Quick Tasks',
  mob_why:        'QA Rigor Advantage',
  mob_projects:   'Projects & Architecture',
  mob_stack:      'Technical Skills',
  mob_journey:    'Industrial & QA Journey',
  mob_contact:    'Direct Contact',

  /* Hero */
  hero_pill:       'Next.js 15 • Supabase • Vercel • Industrial QA Standards',
  hero_h1_line1:   'Web Apps and APIs ready in',
  hero_h1_line2:   'days, not weeks.',
  hero_subtitle:   'Modern software development powered by AI, Vercel and Supabase, backed by rigorous QA. From requirements gathering to secure deployment, I build stable software without cutting corners. Ideal for Fiverr clients and businesses with clearly scoped projects.',
  hero_cta1:       'Hire on Fiverr',
  hero_cta2:       'Message on WhatsApp',
  hero_badge1_title: 'Turnaround 24h-72h',
  hero_badge1_desc:  'Micro-tasks, CRUDs and targeted fixes at record speed.',
  hero_badge2_title: 'Rigorous QA backed by industrial experience',
  hero_badge2_desc:  'Edge case testing, Postman validation, and high runtime stability.',
  hero_badge3_title: 'English C1 Advanced',
  hero_badge3_desc:  'EF SET certified, ready for global teams, briefs and documentation.',
  hero_badge4_title: 'Montijo • Portugal',
  hero_badge4_desc:  'GMT timezone compatible with mainland Europe, UK and the Americas.',
  terminal_line4:    '✓ Live on Vercel • High stability & production ready.',

  /* Services */
  srv_tag:   'Services for Fiverr & Short-Term Projects',
  srv_h2:    'What I deliver for your business',
  srv_intro: 'Modular, low-risk formats ideal for agencies with tight deadlines, founders who need to launch fast, and companies that require reliable, tested software.',

  srv1_badge: 'Most Popular',
  srv1_title: 'Apps & Full-Stack Quick Tasks',
  srv1_desc:  'Functional web systems (Frontend + Backend), fast CRUDs, custom APIs and modern integrations with Next.js and Supabase.',
  srv1_li1:   'Modern frontend in Next.js 15 + Tailwind CSS',
  srv1_li2:   'Supabase database (PostgreSQL) with secure RLS',
  srv1_li3:   'User authentication (Email, Google, Magic Link)',
  srv1_li4:   'Typed RESTful APIs and Server Actions in TypeScript',
  srv1_li5:   'Continuous deployment and infrastructure on Vercel',
  srv1_time:  'Deadline:',
  srv1_days:  '2 to 5 business days',
  srv1_cta:   'Order on Fiverr →',

  srv2_badge: 'Urgent Priority',
  srv2_title: 'Emergency Bug Fixing Service',
  srv2_desc:  'Surgical resolution of production outages, blocking deployment errors, security failures and bugs impacting your users.',
  srv2_li1:   'CORS errors and missing security headers',
  srv2_li2:   'Row Level Security (RLS) policy failures in Supabase',
  srv2_li3:   'Hydration mismatches and SSR failures in Next.js',
  srv2_li4:   'Mobile responsiveness breakdowns (iOS Safari & Android)',
  srv2_li5:   'Memory leaks and slow database queries',
  srv2_time:  'Deadline:',
  srv2_days:  '24h to 48h',
  srv2_cta:   'Request Fix →',

  srv3_badge: 'High Reliability',
  srv3_title: 'QA Audit & Health Diagnosis',
  srv3_desc:  'Rigorous project review for agencies and solo devs to catch critical usability, API and security issues before launch.',
  srv3_li1:   'Complete exploratory and functional testing',
  srv3_li2:   'Postman API test suite with status and payload validation',
  srv3_li3:   'Edge case mapping and business rule coverage',
  srv3_li4:   'Structured Jira-style report with severity and impact',
  srv3_li5:   'Anti-vulnerability checklist and code best practices',
  srv3_time:  'Deadline:',
  srv3_days:  '1 to 3 business days',
  srv3_cta:   'Order QA Audit →',

  srv4_badge: 'Google Rank',
  srv4_title: 'Technical SEO & Vercel Edge Optimization',
  srv4_desc:  'Metadata optimization, Core Web Vitals performance and indexing to put your project ahead in search results.',
  srv4_li1:   'Dynamic metadata and OpenGraph / Twitter Cards',
  srv4_li2:   'JSON-LD Schema.org structure for Google Rich Snippets',
  srv4_li3:   'Dynamic sitemap.xml and crawling-ready robots.txt',
  srv4_li4:   'Core Web Vitals optimization (LCP, INP, CLS in the green)',
  srv4_li5:   'Semantic accessibility (HTML5 / a11y)',
  srv4_time:  'Deadline:',
  srv4_days:  '1 to 2 business days',
  srv4_cta:   'Optimize My Site →',

  /* Why */
  why_tag:        'Competitive Advantage',
  why_h2:         'Why does this workflow deliver so fast?',
  why_intro:      'Speed without control is just accumulated technical debt. My foundation in <strong class="text-emerald-400">Quality Assurance and Industrial Discipline</strong> turns AI power into stable, predictable, revenue-ready software.',
  why_bad_title:  'The "AI-Only" Average Dev',
  why_bad_sub:    'Fast to ship, expensive to fix',
  why_bad1:       'Generates code without understanding application lifecycle or edge cases.',
  why_bad2:       'Supabase without proper Row Level Security (RLS), exposing sensitive data.',
  why_bad3:       'Hydration errors and deployment failures on Vercel.',
  why_bad4:       'No testing plan or structured validation with Postman/Jira.',
  why_bad5:       'The client becomes the tester (and finds bugs in front of their own users).',
  why_good_title: 'My approach: AI-assisted development with rigorous QA',
  why_badge:      'Robust QA',
  why_good_sub:   'AI speed with engineering safety',
  why_good1:      '<strong class="text-white">Solid Architecture:</strong> Typed TypeScript code, modern Next.js 15 and Clean Architecture.',
  why_good2:      '<strong class="text-white">Hardened Supabase:</strong> Tested RLS rules, validated authentication and optimized queries.',
  why_good3:      '<strong class="text-white">Postman Validation:</strong> Integration tests for endpoints, status codes and payloads.',
  why_good4:      '<strong class="text-white">Safe Vercel Deploy:</strong> Clean build with no type errors or SSR conflicts.',
  why_good5:      '<strong class="text-white">Multinational Corporate Background:</strong> Experience across major multinationals (Volkswagen, Honda, and Parmalat), combining clear communication, business acumen, and operational discipline.',

  /* Projects */
  proj_tag:    'Portfolio & Case Studies',
  proj_h2:     'Featured Projects & Architectures',
  proj_intro:  'Real examples of full-stack engineering, database security and quality testing ready to serve as a foundation for your next product.',
  proj1_tag:   'Full-Stack & Security',
  proj1_badge: 'Deploy Ready',
  proj1_title: 'Next.js 15 & Supabase SaaS Core',
  proj1_desc:  'Complete web application architecture with Next.js 15 App Router, TypeScript, Tailwind CSS and Supabase (PostgreSQL) with hardened Row Level Security (RLS).',
  proj1_link:  'View on GitHub →',
  proj2_tag:   'Quality Assurance & APIs',
  proj2_badge: 'Validated Suite',
  proj2_title: 'Automated API Test Suite',
  proj2_desc:  'REST API validation framework using Postman and Newman CLI, covering HTTP status validation, JSON schema, latency and header security.',
  proj2_link:  'View QA Documentation →',

  /* Skills */
  skills_tag:           'Technical Arsenal',
  skills_h2:            'Technical Skills & Tools',
  skills_intro:         'A strategic combination of modern rapid development tools and rigorous testing discipline to deliver software without surprises.',
  skill_level:          'Level',
  skill_advanced:       'Advanced',
  skill_specialist:     'Specialist',
  skill_security_badge: 'Security',
  skill_seo_title:      'Technical SEO (JSON-LD)',

  /* Experience */
  exp_tag:       'Career & Discipline',
  exp_h2:        'From Industrial Rigor to Modern Software',
  exp_intro:     'My career across major multinationals (Volkswagen, Honda, and Parmalat) built a solid background in logistics, negotiation, and handling demanding operations — now applied to agile software delivery.',
  exp1_badge:    'Current Focus',
  exp1_period:   '2024 — Present',
  exp1_title:    'Full-Stack Developer & QA Delivery Engineer',
  exp1_company:  'Freelance & Agile Contracts (Fiverr / Global)',
  exp1_location: 'Montijo, Portugal',
  exp1_desc:     'Rapid development of complete web applications, micro-tasks and emergency bug fixing focused on Vercel and Supabase.',
  exp2_badge:    'QA Training',
  exp2_period:   '2024',
  exp2_title:    'Quality Assurance Analyst (QA)',
  exp2_company:  'TripleTen QA Bootcamp',
  exp2_location: 'Technical Training',
  exp2_desc:     'Functional testing, API testing with Postman, structured test case design and defect management via Jira.',
  exp3_badge:    'Commercial & Logistics',
  exp3_period:   'Corporate Experience',
  exp3_title:    'Sales, Customer Operations & Logistics',
  exp3_company:  'Volkswagen & Honda',
  exp3_location: 'Automotive Sector',
  exp3_desc:     'Experience across automotive dealerships and supply operations, ensuring tight deadlines, client satisfaction, and dependable execution.',
  exp4_badge:    'Operations & Supply Chain',
  exp4_period:   'Corporate Experience',
  exp4_title:    'Logistics & Commercial Distribution',
  exp4_company:  'Parmalat',
  exp4_location: 'Food & Beverage',
  exp4_desc:     'Operational routines and fulfillment within a fast-paced enterprise environment, prioritizing punctuality and problem resolution.',

  /* Certifications */
  cert_tag:     'Credentials & Languages',
  cert_h2:      'Certifications & International Validation',
  cert1_title:  'EF SET English Certificate',
  cert1_desc:   'C1 Advanced English proficiency. Fluent for international client meetings and Fiverr briefs.',
  cert1_footer: 'Official Credential',
  cert1_link:   'Verify Certificate →',
  cert2_title:  'TripleTen QA Engineering',
  cert2_desc:   'Intensive training in software testing methodology, API validation with Postman and Jira.',
  cert2_footer: 'Completed Training',
  cert3_badge:  'In Progress',
  cert3_title:  'ISTQB Foundation (CTFL)',
  cert3_desc:   'Ongoing preparation following international ISTQB standards for excellence in testing processes.',
  cert3_footer: 'International Standard',
  cert3_status: 'Preparing',

  /* Contact / Footer */
  contact_pill:          'Quick Response • Reply within 2 hours',
  contact_h2:            'Need help with a project?',
  contact_desc:          'Whether you need a complete MVP in Next.js + Supabase, a fix for a production-blocking bug, or a full QA audit of your software.',
  contact_cta1:          'Hire via Fiverr',
  contact_cta2:          'Message on WhatsApp',
  contact_cta3:          'Send Direct Email',
  contact_email_label:   'Professional Email',
  contact_send_btn:      'Send Email',
  contact_copy_email:    'Copy Email',
  contact_phone_label:   'Phone & WhatsApp',
  contact_copy_phone:    'Copy Number',
  contact_location_label:'Base Location',
  contact_location_sub:  'GMT / WET Timezone • Global Service',
  footer_copy:           'Mateus Almeida • QA Engineer & Full-Stack Delivery',
  footer_top:            'Back to Top ↑',

  /* Feedback */
  copied:       'Copied!',
  email_copied: 'Email Copied!',

  /* Lang toggle label */
  lang_toggle: '🇧🇷 PT',
};

/* ---- ESTADO ---- */
let currentLang = 'pt';
let defaults = {};   // snapshot PT do DOM — carregado uma vez no init

/* ---- APLICAR TRADUÇÕES ---- */
function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  const t = lang === 'en' ? en : null;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');

    if (lang === 'pt') {
      // Restaura o snapshot original do HTML
      if (defaults[key] !== undefined) el.innerHTML = defaults[key];
    } else {
      // Aplica EN — textContent para texto puro, innerHTML onde há tags
      if (t[key] === undefined) return;
      if (HTML_KEYS.has(key)) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Atualiza o botão de idioma (desktop e mobile) com SVGs para compatibilidade universal (Windows/Linux/Mac/iOS/Android)
  const toggleBtn = document.getElementById('lang-toggle');
  const isEn = lang === 'en';
  
  // Bandeira BR (quando em EN para voltar ao PT) ou UK (quando em PT para ir pro EN)
  const flagSvg = isEn
    ? `<svg class="w-4 h-3 rounded-[2px] shadow-sm inline-block" viewBox="0 0 720 504" fill="none"><rect width="720" height="504" fill="#009B3A"/><polygon points="360,42 678,252 360,462 42,252" fill="#FEDF00"/><circle cx="360" cy="252" r="126" fill="#002776"/></svg>`
    : `<svg class="w-4 h-3 rounded-[2px] shadow-sm inline-block" viewBox="0 0 60 30" fill="none"><clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#s)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg>`;

  if (toggleBtn) {
    toggleBtn.innerHTML = `${flagSvg} <span>${isEn ? 'PT' : 'EN'}</span>`;
  }

  const mobToggle = document.getElementById('lang-toggle-mobile');
  if (mobToggle) {
    mobToggle.innerHTML = `${flagSvg} <span>${isEn ? 'Mudar para Português (PT)' : 'Switch to English (EN)'}</span>`;
  }

  try { localStorage.setItem('lang', lang); } catch(e) {}
}

/* ---- TOGGLE DE IDIOMA ---- */
function toggleLang() {
  applyLang(currentLang === 'pt' ? 'en' : 'pt');
}

/* ---- MENU MOBILE ---- */
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.toggle('hidden');
}

/* ---- COPIAR PARA CLIPBOARD ---- */
function copyToClipboard(text, button, successKey) {
  const t     = currentLang === 'en' ? en : defaults;
  const msg   = t[successKey] || successKey;
  navigator.clipboard.writeText(text).then(() => {
    const original = button.innerHTML;
    button.innerHTML = `<span class="text-emerald-400 font-semibold">${msg}</span>`;
    setTimeout(() => { button.innerHTML = original; }, 2000);
  });
}

/* ---- INIT ---- */
document.addEventListener('DOMContentLoaded', () => {
  // Snapshot do DOM original (PT) antes de qualquer tradução
  document.querySelectorAll('[data-i18n]').forEach(el => {
    defaults[el.getAttribute('data-i18n')] = el.innerHTML;
  });

  // Aplica idioma salvo (se houver) ou inicializa botões de idioma
  let saved = 'pt';
  try { saved = localStorage.getItem('lang') || 'pt'; } catch(e) {}
  applyLang(saved);
});
