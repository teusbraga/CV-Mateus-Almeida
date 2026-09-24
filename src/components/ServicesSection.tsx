"use client";

import React from "react";
import { 
  Rocket, 
  Flame, 
  ShieldCheck, 
  Search, 
  Check, 
  Clock, 
  ArrowRight,
  Database,
  Lock,
  Layers
} from "lucide-react";

const services = [
  {
    id: "fullstack-apps",
    badge: "Mais Popular",
    icon: Rocket,
    iconColor: "text-emerald-400",
    borderColor: "hover:border-emerald-500/50",
    title: "Apps & Micro-tarefas Full-Stack",
    description: "Sistemas web funcionais (Frontend + Backend), CRUDs rápidos, APIs customizadas e integrações modernas com Next.js e Supabase.",
    timeline: "2 a 5 dias úteis",
    benefits: [
      "Frontend moderno em Next.js 15 + Tailwind CSS",
      "Banco de dados Supabase (PostgreSQL) com RLS seguro",
      "Autenticação de usuários (Email, Google, Magic Link)",
      "Server Actions e APIs RESTful tipadas em TypeScript",
      "Deploy contínuo e infraestrutura na Vercel"
    ],
    fiverrTag: "Full-Stack MVP Gig"
  },
  {
    id: "bug-fixing",
    badge: "Prioridade Urgente",
    icon: Flame,
    iconColor: "text-amber-400",
    borderColor: "hover:border-amber-500/50",
    title: "Plantão de Bug Fixing Emergencial",
    description: "Resolução cirúrgica de quebras em produção, erros impeditivos de deploy, falhas de segurança e bugs que travam o seu faturamento.",
    timeline: "24h a 48h",
    benefits: [
      "Erros de CORS e headers de segurança",
      "Falhas em políticas de Row Level Security (RLS) do Supabase",
      "Hydration mismatches e falhas de SSR/React no Next.js",
      "Quebras de responsividade mobile (iOS Safari & Android)",
      "Vazamentos de memória e lentidão em queries de banco"
    ],
    fiverrTag: "Emergency Bug Fix"
  },
  {
    id: "qa-audit",
    badge: "Risco Zero",
    icon: ShieldCheck,
    iconColor: "text-brand-blue",
    borderColor: "hover:border-brand-blue/50",
    title: "Auditoria de QA & Diagnóstico de Saúde",
    description: "Revisão rigorosa de projetos para agências e devs encontrarem falhas críticas de usabilidade, API e segurança antes que os clientes percebam.",
    timeline: "1 a 3 dias úteis",
    benefits: [
      "Testes exploratórios e funcionais completos",
      "Suíte de testes de API no Postman com validação de status e payloads",
      "Mapeamento de cenários de borda (edge cases) e regras de negócio",
      "Relatório estruturado padrão Jira com severidade e impacto",
      "Checklist anti-vulnerabilidade e boas práticas de código"
    ],
    fiverrTag: "QA & Testing Audit"
  },
  {
    id: "seo-edge",
    badge: "Google Rank",
    icon: Search,
    iconColor: "text-purple-400",
    borderColor: "hover:border-purple-500/50",
    title: "Otimização Técnica de SEO & Vercel Edge",
    description: "Estruturação profunda de metadados, performance Core Web Vitals e indexação para colocar seu projeto na frente nos motores de busca.",
    timeline: "1 a 2 dias úteis",
    benefits: [
      "Metadados dinâmicos e OpenGraph / Twitter Cards",
      "Estrutura JSON-LD (Schema.org) para Rich Snippets do Google",
      "Sitemap.xml dinâmico e robots.txt configurados para rastreamento",
      "Otimização de Core Web Vitals (LCP, INP, CLS)",
      "Acessibilidade semântica (HTML5 / a11y) e boas práticas Vercel"
    ],
    fiverrTag: "Technical SEO Gig"
  }
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 border-t border-dark-border/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-wider uppercase text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-full">
            Serviços para Fiverr & Contratos Rápidos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            O que eu entrego para o seu negócio
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Formatos modulares e de baixo risco, ideais para agências com prazos apertados, empreendedores que precisam lançar e empresas que não toleram bugs em produção.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className={`bg-dark-card/90 border border-dark-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${srv.borderColor} card-hover-effect relative overflow-hidden group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-dark-subtle/80 border border-dark-border flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${srv.iconColor}`} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-dark-subtle border border-dark-border text-gray-300">
                        {srv.badge}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {srv.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-dark-border/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-dark-muted font-mono">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Prazo: <strong className="text-gray-200">{srv.timeline}</strong></span>
                  </div>

                  <a
                    href="https://www.fiverr.com/seu-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold group/link"
                  >
                    <span>Solicitar no Fiverr</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Low-Risk Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-dark-card via-dark-subtle to-dark-card border border-dark-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Garantia de Entrega sem Risco</h4>
              <p className="text-xs text-dark-muted max-w-xl">
                Pagamento seguro protegido pelo Fiverr ou Marcos de Entrega (milestones). Você só aprova quando tudo estiver 100% testado e funcional na sua Vercel.
              </p>
            </div>
          </div>
          <a
            href="mailto:mts.almeida7@gmail.com?subject=Solicitação%20de%20Serviço%20Rápido"
            className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold text-xs whitespace-nowrap transition-colors"
          >
            Falar com Mateus
          </a>
        </div>

      </div>
    </section>
  );
}
