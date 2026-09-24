/* ============================================
   MATEUS ALMEIDA — PORTFOLIO SCRIPT
   Vanilla JS: toggle de idioma, menu mobile,
   copiar para clipboard.
   Sem dependências. Sem build. Sem frameworks.
   ============================================ */

/* ---- TRADUÇÕES ---- */
const i18n = {
  pt: {
    /* <html> lang */
    lang: 'pt',

    /* Navbar */
    nav_available: 'Disponível para novos contratos & Fiverr',
    nav_copy_email: 'Copiar Email',
    nav_services: 'Serviços',
    nav_why: 'Por que QA + IA?',
    nav_projects: 'Projetos',
    nav_stack: 'Stack',
    nav_journey: 'Trajetória',
    mob_services: 'Serviços & Micro-tarefas',
    mob_why: 'Diferencial: Rigor de QA',
    mob_projects: 'Projetos & Arquiteturas',
    mob_stack: 'Habilidades Técnicas',
    mob_journey: 'Trajetória Industrial & QA',
    mob_contact: 'Contato Direto',

    /* Hero */
    hero_pill: 'Next.js 15 • Supabase • Vercel • Rigor de QA Industrial',
    hero_h1_line1: 'Aplicações Web e APIs prontas em',
    hero_h1_line2: 'dias, não semanas.',
    hero_subtitle: 'Engenharia de software moderna acelerada por IA, Vercel e Supabase unida a um <strong class="text-white font-semibold">rigoroso padrão de QA</strong>. Do levantamento de requisitos ao deploy seguro sem atalhos na estabilidade. Ideal para clientes Fiverr e contratos de baixo risco para empresas.',
    hero_cta1: 'Contratar no Fiverr',
    hero_cta2: 'Falar no WhatsApp',
    hero_badge1_title: 'Turnaround 24h-72h',
    hero_badge1_desc: 'Micro-tarefas, CRUDs e correções pontuais em velocidade recorde.',
    hero_badge2_title: 'Crivo de QA Industrial',
    hero_badge2_desc: 'Testes de borda, Postman, validação de regras e zero quebras em prod.',
    hero_badge3_title: 'Inglês C1 Avançado',
    hero_badge3_desc: 'Certificação EF SET, pronto para times globais, briefs e documentação.',
    hero_badge4_title: 'Montijo • Portugal',
    hero_badge4_desc: 'Fuso GMT compatível com Europa continental, Reino Unido e Américas.',
    terminal_line4: '✓ Deploy live na Vercel • Zero bugs em produção garantido.',

    /* Services */
    srv_tag: 'Serviços para Fiverr & Contratos Rápidos',
    srv_h2: 'O que eu entrego para o seu negócio',
    srv_intro: 'Formatos modulares e de baixo risco, ideais para agências com prazos apertados, empreendedores que precisam lançar e empresas que não toleram bugs em produção.',
    srv1_badge: 'Mais Popular',
    srv1_title: 'Apps & Micro-tarefas Full-Stack',
    srv1_desc: 'Sistemas web funcionais (Frontend + Backend), CRUDs rápidos, APIs customizadas e integrações modernas com Next.js e Supabase.',
    srv1_li1: 'Frontend moderno em Next.js 15 + Tailwind CSS',
    srv1_li2: 'Banco de dados Supabase (PostgreSQL) com RLS seguro',
    srv1_li3: 'Autenticação de usuários (Email, Google, Magic Link)',
    srv1_li4: 'Server Actions e APIs RESTful tipadas em TypeScript',
    srv1_li5: 'Deploy contínuo e infraestrutura na Vercel',
    srv1_time: 'Prazo:',
    srv1_days: '2 a 5 dias úteis',
    srv1_cta: 'Solicitar no Fiverr →',
    srv2_badge: 'Prioridade Urgente',
    srv2_title: 'Plantão de Bug Fixing Emergencial',
    srv2_desc: 'Resolução cirúrgica de quebras em produção, erros impeditivos de deploy, falhas de segurança e bugs que travam o seu faturamento.',
    srv2_li1: 'Erros de CORS e headers de segurança',
    srv2_li2: 'Falhas em políticas de Row Level Security (RLS) do Supabase',
    srv2_li3: 'Hydration mismatches e falhas de SSR no Next.js',
    srv2_li4: 'Quebras de responsividade mobile (iOS Safari & Android)',
    srv2_li5: 'Vazamentos de memória e lentidão em queries de banco',
    srv2_time: 'Prazo:',
    srv2_days: '24h a 48h',
    srv2_cta: 'Acionar Plantão →',
    srv3_badge: 'Risco Zero',
    srv3_title: 'Auditoria de QA & Diagnóstico de Saúde',
    srv3_desc: 'Revisão rigorosa de projetos para agências e devs encontrarem falhas críticas de usabilidade, API e segurança antes que os clientes percebam.',
    srv3_li1: 'Testes exploratórios e funcionais completos',
    srv3_li2: 'Suíte de testes de API no Postman com validação de status e payloads',
    srv3_li3: 'Mapeamento de cenários de borda (edge cases) e regras de negócio',
    srv3_li4: 'Relatório estruturado padrão Jira com severidade e impacto',
    srv3_li5: 'Checklist anti-vulnerabilidade e boas práticas de código',
    srv3_time: 'Prazo:',
    srv3_days: '1 a 3 dias úteis',
    srv3_cta: 'Contratar Auditoria →',
    srv4_badge: 'Google Rank',
    srv4_title: 'Otimização Técnica de SEO & Vercel Edge',
    srv4_desc: 'Estruturação profunda de metadados, performance Core Web Vitals e indexação para colocar seu projeto na frente nos motores de busca.',
    srv4_li1: 'Metadados dinâmicos e OpenGraph / Twitter Cards',
    srv4_li2: 'Estrutura JSON-LD (Schema.org) para Rich Snippets do Google',
    srv4_li3: 'Sitemap.xml dinâmico e robots.txt configurados para rastreamento',
    srv4_li4: 'Otimização de Core Web Vitals (LCP, INP, CLS verdes)',
    srv4_li5: 'Acessibilidade semântica (HTML5 / a11y)',
    srv4_time: 'Prazo:',
    srv4_days: '1 a 2 dias úteis',
    srv4_cta: 'Otimizar Meu Site →',

    /* Why */
    why_tag: 'Diferencial Competitivo',
    why_h2: 'Por que esse fluxo funciona tão rápido?',
    why_intro: 'Velocidade sem controle é apenas dívida técnica acumulada. Minha base em <strong class="text-emerald-400">Quality Assurance e Disciplina Industrial</strong> transforma o poder da IA em software estável, previsível e pronto para faturar.',
    why_bad_title: 'O Dev "Apenas IA" Comum',
    why_bad_sub: 'Rápido para entregar, caro para consertar',
    why_bad1: 'Gera código sem entender o ciclo de vida da aplicação ou casos de borda.',
    why_bad2: 'Supabase sem Row Level Security (RLS) adequado, expondo dados sensíveis.',
    why_bad3: 'Quebras de hidratação (hydration errors) e falhas no deploy da Vercel.',
    why_bad4: 'Nenhum plano de teste ou validação estruturada com Postman/Jira.',
    why_bad5: 'O cliente vira o testador (e descobre os bugs na frente dos próprios usuários).',
    why_good_title: 'Meu Fluxo: IA + Rigor de QA',
    why_good_sub: 'Velocidade de IA com segurança de engenharia',
    why_good1: '<strong class="text-white">Arquitetura Sólida:</strong> Código TypeScript tipado, Next.js 15 moderno e Clean Architecture.',
    why_good2: '<strong class="text-white">Supabase Blindado:</strong> Regras de RLS testadas, autenticação validada e queries otimizadas.',
    why_good3: '<strong class="text-white">Validação com Postman:</strong> Testes de integração de endpoints, status codes e payloads.',
    why_good4: '<strong class="text-white">Deploy Seguro na Vercel:</strong> Build limpo sem erros de tipagem ou conflitos de SSR.',
    why_good5: '<strong class="text-white">Bagagem Industrial (Honda & Parmalat):</strong> Disciplina Kaizen e obsessão por detalhes críticos.',

    /* Projects */
    proj_tag: 'Portfólio & Prova de Execução',
    proj_h2: 'Projetos & Arquiteturas em Destaque',
    proj_intro: 'Exemplos reais de engenharia full-stack, segurança de banco de dados e testes de qualidade prontos para servirem de base para o seu próximo produto.',
    proj1_tag: 'Full-Stack & Segurança',
    proj1_badge: 'Pronto para Deploy',
    proj1_title: 'Next.js 15 & Supabase SaaS Core',
    proj1_desc: 'Arquitetura completa de aplicação web com Next.js 15 App Router, TypeScript, Tailwind CSS e banco Supabase (PostgreSQL) com Row Level Security (RLS) blindado.',
    proj1_link: 'Ver no GitHub →',
    proj2_tag: 'Quality Assurance & APIs',
    proj2_badge: 'Suíte Validada',
    proj2_title: 'Suíte Automatizada de Testes de API',
    proj2_desc: 'Framework de validação de APIs REST utilizando Postman e Newman CLI, cobrindo validação de status HTTP, schema JSON, latência e segurança de headers.',
    proj2_link: 'Ver Documentação QA →',

    /* Skills */
    skills_tag: 'Arsenal Técnico',
    skills_h2: 'Habilidades Técnicas & Ferramentas',
    skills_intro: 'Combinação estratégica entre ferramentas modernas de desenvolvimento rápido e rigor técnico de testes para entregar software sem surpresas.',
    skill_level: 'Nível',
    skill_advanced: 'Avançado',
    skill_specialist: 'Especialista',

    /* Experience */
    exp_tag: 'Carreira & Disciplina',
    exp_h2: 'Do Rigor Industrial ao Software Moderno',
    exp_intro: 'Minha experiência em gigantes multinacionais como Honda e Parmalat forjou uma disciplina inegociável por qualidade, hoje traduzida em código limpo e entregas sem falhas.',
    exp1_badge: 'Foco Atual',
    exp1_period: '2024 — Presente',
    exp1_title: 'Full-Stack Developer & QA Delivery Engineer',
    exp1_company: 'Freelance & Contratos Ágeis (Fiverr / Global)',
    exp1_location: 'Montijo, Portugal',
    exp1_desc: 'Desenvolvimento rápido de aplicações web completas, micro-tarefas e plantão de bug fixing com foco em Vercel e Supabase.',
    exp2_badge: 'Formação QA',
    exp2_period: '2024',
    exp2_title: 'Analista de Quality Assurance (QA)',
    exp2_company: 'TripleTen QA Bootcamp',
    exp2_location: 'Formação Técnica',
    exp2_desc: 'Testes funcionais, testes de API com Postman, design de casos de teste estruturados e gestão de defeitos via Jira.',
    exp3_badge: 'Cultura Kaizen',
    exp3_period: 'Experiência Industrial',
    exp3_title: 'Controle de Qualidade & Processos',
    exp3_company: 'Honda',
    exp3_location: 'Setor Automotivo',
    exp3_desc: 'Aplicação do padrão japonês de zero-defeito (Kaizen), controle de qualidade e rigor operacional hoje aplicados em software.',
    exp4_badge: 'Padronização',
    exp4_period: 'Experiência Industrial',
    exp4_title: 'Garantia de Qualidade & Padronização',
    exp4_company: 'Parmalat',
    exp4_location: 'Manufatura',
    exp4_desc: 'Padronização de procedimentos operacionais e prevenção proativa de não-conformidades sob alta demanda.',

    /* Certs */
    cert_tag: 'Credenciais & Idiomas',
    cert_h2: 'Certificações & Validação Internacional',
    cert1_title: 'EF SET English Certificate',
    cert1_desc: 'Proficiência C1 em inglês (Advanced). Fluência para reuniões com clientes internacionais e briefs no Fiverr.',
    cert1_footer: 'Credencial Oficial',
    cert1_link: 'Verificar Certificado →',
    cert2_title: 'TripleTen QA Engineering',
    cert2_desc: 'Formação intensiva em metodologia de testes de software, validação de APIs com Postman e Jira.',
    cert2_footer: 'Formação Concluída',
    cert3_title: 'ISTQB Foundation (CTFL)',
    cert3_desc: 'Preparação contínua seguindo os padrões internacionais do ISTQB para excelência em processos de teste.',
    cert3_footer: 'Padrão Internacional',

    /* Contact / Footer */
    contact_pill: 'Atendimento Rápido • Resposta em menos de 2 horas',
    contact_h2: 'Vamos resolver o seu problema hoje?',
    contact_desc: 'Seja para criar um MVP completo no Next.js + Supabase, corrigir um bug que está travando sua produção ou realizar uma auditoria completa de QA no seu software.',
    contact_cta1: 'Contratar via Fiverr',
    contact_cta2: 'Chamar no WhatsApp',
    contact_cta3: 'Enviar Email Direto',
    contact_email_label: 'Email Profissional',
    contact_copy_email: 'Copiar Email',
    contact_phone_label: 'Telefone & WhatsApp',
    contact_copy_phone: 'Copiar Número',
    contact_location_label: 'Localização Base',
    contact_location_sub: 'Fuso Horário GMT / WET • Atendimento Global',
    footer_copy: 'Mateus Almeida • QA Engineer & Full-Stack Delivery',
    footer_top: 'Voltar ao Topo ↑',

    /* copy feedback */
    copied: 'Copiado!',
    email_copied: 'Email Copiado!',

    /* lang toggle label */
    lang_toggle: '🇬🇧 EN',
  },

  en: {
    lang: 'en',
    nav_available: 'Available for new contracts & Fiverr',
    nav_copy_email: 'Copy Email',
    nav_services: 'Services',
    nav_why: 'Why QA + AI?',
    nav_projects: 'Projects',
    nav_stack: 'Stack',
    nav_journey: 'Journey',
    mob_services: 'Services & Quick Tasks',
    mob_why: 'QA Rigor Advantage',
    mob_projects: 'Projects & Architecture',
    mob_stack: 'Technical Skills',
    mob_journey: 'Industrial & QA Journey',
    mob_contact: 'Direct Contact',
    hero_pill: 'Next.js 15 • Supabase • Vercel • Industrial QA Standards',
    hero_h1_line1: 'Web Apps and APIs ready in',
    hero_h1_line2: 'days, not weeks.',
    hero_subtitle: 'Modern software engineering accelerated by AI, Vercel and Supabase combined with a <strong class="text-white font-semibold">rigorous QA standard</strong>. From requirements to secure deployment without cutting corners on stability. Ideal for Fiverr clients and low-risk enterprise contracts.',
    hero_cta1: 'Hire on Fiverr',
    hero_cta2: 'Message on WhatsApp',
    hero_badge1_title: 'Turnaround 24h-72h',
    hero_badge1_desc: 'Micro-tasks, CRUDs and targeted fixes at record speed.',
    hero_badge2_title: 'Industrial QA Rigor',
    hero_badge2_desc: 'Edge case testing, Postman validation, zero production failures.',
    hero_badge3_title: 'English C1 Advanced',
    hero_badge3_desc: 'EF SET certified, ready for global teams, briefs and documentation.',
    hero_badge4_title: 'Montijo • Portugal',
    hero_badge4_desc: 'GMT timezone compatible with mainland Europe, UK and the Americas.',
    terminal_line4: '✓ Live on Vercel • Zero production bugs guaranteed.',
    srv_tag: 'Services for Fiverr & Quick Contracts',
    srv_h2: 'What I deliver for your business',
    srv_intro: 'Modular, low-risk formats ideal for agencies with tight deadlines, founders who need to launch fast, and companies that cannot afford production bugs.',
    srv1_badge: 'Most Popular',
    srv1_title: 'Apps & Full-Stack Quick Tasks',
    srv1_desc: 'Functional web systems (Frontend + Backend), fast CRUDs, custom APIs and modern integrations with Next.js and Supabase.',
    srv1_li1: 'Modern frontend in Next.js 15 + Tailwind CSS',
    srv1_li2: 'Supabase database (PostgreSQL) with secure RLS',
    srv1_li3: 'User authentication (Email, Google, Magic Link)',
    srv1_li4: 'Typed RESTful APIs and Server Actions in TypeScript',
    srv1_li5: 'Continuous deployment and infrastructure on Vercel',
    srv1_time: 'Deadline:',
    srv1_days: '2 to 5 business days',
    srv1_cta: 'Order on Fiverr →',
    srv2_badge: 'Urgent Priority',
    srv2_title: 'Emergency Bug Fixing Service',
    srv2_desc: 'Surgical resolution of production outages, blocking deployment errors, security failures and bugs costing you revenue.',
    srv2_li1: 'CORS errors and missing security headers',
    srv2_li2: 'Row Level Security (RLS) policy failures in Supabase',
    srv2_li3: 'Hydration mismatches and SSR failures in Next.js',
    srv2_li4: 'Mobile responsiveness breakdowns (iOS Safari & Android)',
    srv2_li5: 'Memory leaks and slow database queries',
    srv2_time: 'Deadline:',
    srv2_days: '24h to 48h',
    srv2_cta: 'Request Fix →',
    srv3_badge: 'Zero Risk',
    srv3_title: 'QA Audit & Health Diagnosis',
    srv3_desc: 'Rigorous project review for agencies and solo devs to find critical usability, API and security failures before users do.',
    srv3_li1: 'Complete exploratory and functional testing',
    srv3_li2: 'Postman API test suite with status and payload validation',
    srv3_li3: 'Edge case mapping and business rule coverage',
    srv3_li4: 'Structured Jira-style report with severity and impact',
    srv3_li5: 'Anti-vulnerability checklist and code best practices',
    srv3_time: 'Deadline:',
    srv3_days: '1 to 3 business days',
    srv3_cta: 'Order QA Audit →',
    srv4_badge: 'Google Rank',
    srv4_title: 'Technical SEO & Vercel Edge Optimization',
    srv4_desc: 'Deep metadata structuring, Core Web Vitals performance and indexing to put your project ahead in search results.',
    srv4_li1: 'Dynamic metadata and OpenGraph / Twitter Cards',
    srv4_li2: 'JSON-LD Schema.org structure for Google Rich Snippets',
    srv4_li3: 'Dynamic sitemap.xml and crawling-ready robots.txt',
    srv4_li4: 'Core Web Vitals optimization (LCP, INP, CLS in the green)',
    srv4_li5: 'Semantic accessibility (HTML5 / a11y)',
    srv4_time: 'Deadline:',
    srv4_days: '1 to 2 business days',
    srv4_cta: 'Optimize My Site →',
    why_tag: 'Competitive Advantage',
    why_h2: 'Why does this workflow deliver so fast?',
    why_intro: 'Speed without control is just accumulated technical debt. My foundation in <strong class="text-emerald-400">Quality Assurance and Industrial Discipline</strong> turns AI power into stable, predictable, revenue-ready software.',
    why_bad_title: 'The "AI-Only" Average Dev',
    why_bad_sub: 'Fast to ship, expensive to fix',
    why_bad1: 'Generates code without understanding application lifecycle or edge cases.',
    why_bad2: 'Supabase without proper Row Level Security (RLS), exposing sensitive data.',
    why_bad3: 'Hydration errors and deployment failures on Vercel.',
    why_bad4: 'No testing plan or structured validation with Postman/Jira.',
    why_bad5: 'The client becomes the tester (and finds bugs in front of their own users).',
    why_good_title: 'My Flow: AI + QA Rigor',
    why_good_sub: 'AI speed with engineering safety',
    why_good1: '<strong class="text-white">Solid Architecture:</strong> Typed TypeScript code, modern Next.js 15 and Clean Architecture.',
    why_good2: '<strong class="text-white">Hardened Supabase:</strong> Tested RLS rules, validated authentication and optimized queries.',
    why_good3: '<strong class="text-white">Postman Validation:</strong> Integration tests for endpoints, status codes and payloads.',
    why_good4: '<strong class="text-white">Safe Vercel Deploy:</strong> Clean build with no type errors or SSR conflicts.',
    why_good5: '<strong class="text-white">Industrial Background (Honda & Parmalat):</strong> Kaizen discipline and obsession with critical details.',
    proj_tag: 'Portfolio & Proof of Execution',
    proj_h2: 'Featured Projects & Architectures',
    proj_intro: 'Real examples of full-stack engineering, database security and quality testing ready to serve as a foundation for your next product.',
    proj1_tag: 'Full-Stack & Security',
    proj1_badge: 'Deploy Ready',
    proj1_title: 'Next.js 15 & Supabase SaaS Core',
    proj1_desc: 'Complete web application architecture with Next.js 15 App Router, TypeScript, Tailwind CSS and Supabase (PostgreSQL) with hardened Row Level Security (RLS).',
    proj1_link: 'View on GitHub →',
    proj2_tag: 'Quality Assurance & APIs',
    proj2_badge: 'Validated Suite',
    proj2_title: 'Automated API Test Suite',
    proj2_desc: 'REST API validation framework using Postman and Newman CLI, covering HTTP status validation, JSON schema, latency and header security.',
    proj2_link: 'View QA Documentation →',
    skills_tag: 'Technical Arsenal',
    skills_h2: 'Technical Skills & Tools',
    skills_intro: 'A strategic combination of modern rapid development tools and rigorous testing discipline to deliver software without surprises.',
    skill_level: 'Level',
    skill_advanced: 'Advanced',
    skill_specialist: 'Specialist',
    exp_tag: 'Career & Discipline',
    exp_h2: 'From Industrial Rigor to Modern Software',
    exp_intro: 'My experience at multinationals like Honda and Parmalat forged an uncompromising discipline for quality, now translated into clean code and zero-failure deliveries.',
    exp1_badge: 'Current Focus',
    exp1_period: '2024 — Present',
    exp1_title: 'Full-Stack Developer & QA Delivery Engineer',
    exp1_company: 'Freelance & Agile Contracts (Fiverr / Global)',
    exp1_location: 'Montijo, Portugal',
    exp1_desc: 'Rapid development of complete web applications, micro-tasks and emergency bug fixing focused on Vercel and Supabase.',
    exp2_badge: 'QA Training',
    exp2_period: '2024',
    exp2_title: 'Quality Assurance Analyst (QA)',
    exp2_company: 'TripleTen QA Bootcamp',
    exp2_location: 'Technical Training',
    exp2_desc: 'Functional testing, API testing with Postman, structured test case design and defect management via Jira.',
    exp3_badge: 'Kaizen Culture',
    exp3_period: 'Industrial Experience',
    exp3_title: 'Quality Control & Processes',
    exp3_company: 'Honda',
    exp3_location: 'Automotive Sector',
    exp3_desc: 'Application of the Japanese zero-defect standard (Kaizen), quality control and operational rigor now applied to software.',
    exp4_badge: 'Standardization',
    exp4_period: 'Industrial Experience',
    exp4_title: 'Quality Assurance & Standardization',
    exp4_company: 'Parmalat',
    exp4_location: 'Manufacturing',
    exp4_desc: 'Operational procedure standardization and proactive prevention of non-conformities under high demand.',
    cert_tag: 'Credentials & Languages',
    cert_h2: 'Certifications & International Validation',
    cert1_title: 'EF SET English Certificate',
    cert1_desc: 'C1 Advanced English proficiency. Fluent for international client meetings and Fiverr briefs.',
    cert1_footer: 'Official Credential',
    cert1_link: 'Verify Certificate →',
    cert2_title: 'TripleTen QA Engineering',
    cert2_desc: 'Intensive training in software testing methodology, API validation with Postman and Jira.',
    cert2_footer: 'Completed Training',
    cert3_title: 'ISTQB Foundation (CTFL)',
    cert3_desc: 'Ongoing preparation following international ISTQB standards for excellence in testing processes.',
    cert3_footer: 'International Standard',
    contact_pill: 'Quick Response • Reply within 2 hours',
    contact_h2: "Let's solve your problem today?",
    contact_desc: 'Whether you need a complete MVP in Next.js + Supabase, a fix for a production-blocking bug, or a full QA audit of your software.',
    contact_cta1: 'Hire via Fiverr',
    contact_cta2: 'Message on WhatsApp',
    contact_cta3: 'Send Direct Email',
    contact_email_label: 'Professional Email',
    contact_copy_email: 'Copy Email',
    contact_phone_label: 'Phone & WhatsApp',
    contact_copy_phone: 'Copy Number',
    contact_location_label: 'Base Location',
    contact_location_sub: 'GMT / WET Timezone • Global Service',
    footer_copy: 'Mateus Almeida • QA Engineer & Full-Stack Delivery',
    footer_top: 'Back to Top ↑',
    copied: 'Copied!',
    email_copied: 'Email Copied!',
    lang_toggle: '🇧🇷 PT',
  }
};

/* ---- ESTADO ---- */
let currentLang = 'pt';

/* ---- APLICAR TRADUÇÕES ---- */
function applyLang(lang) {
  const t = i18n[lang];
  document.documentElement.lang = lang;
  currentLang = lang;

  // Atualiza todos os elementos com data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      // innerHTML para os que têm tags <strong> etc.
      el.innerHTML = t[key];
    }
  });

  // Atualiza o botão de idioma
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) toggleBtn.innerHTML = `<span class="flag">${t.lang_toggle.split(' ')[0]}</span> ${t.lang_toggle.split(' ')[1]}`;

  // Salva preferência
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
  const msg = i18n[currentLang][successKey] || successKey;
  navigator.clipboard.writeText(text).then(() => {
    const original = button.innerHTML;
    button.innerHTML = `<span class="text-emerald-400 font-semibold">${msg}</span>`;
    setTimeout(() => { button.innerHTML = original; }, 2000);
  });
}

/* ---- INIT: carrega idioma salvo ---- */
document.addEventListener('DOMContentLoaded', () => {
  let saved = 'pt';
  try { saved = localStorage.getItem('lang') || 'pt'; } catch(e) {}
  applyLang(saved);
});
