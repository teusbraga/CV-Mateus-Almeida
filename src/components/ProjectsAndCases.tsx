"use client";

import React from "react";
import { 
  FolderGit2, 
  ExternalLink, 
  ShieldCheck, 
  Layers, 
  Database, 
  CheckCircle2, 
  Zap, 
  Code2,
  FileCheck
} from "lucide-react";

const projects = [
  {
    title: "Next.js 15 & Supabase SaaS Core",
    category: "Full-Stack & Segurança",
    description: "Arquitetura completa de aplicação web com Next.js 15 App Router, TypeScript, Tailwind CSS e banco Supabase (PostgreSQL) com Row Level Security (RLS) blindado.",
    features: [
      "Autenticação completa (OAuth, Magic Link, Email)",
      "Políticas de isolamento de dados via RLS no PostgreSQL",
      "Server Actions e APIs RESTful tipadas",
      "Deploy contínuo e Edge Functions na Vercel"
    ],
    tags: ["Next.js 15", "Supabase", "TypeScript", "Tailwind", "PostgreSQL", "RLS"],
    linkText: "Ver Arquitetura no GitHub",
    linkUrl: "https://github.com/teusbraga",
    statusBadge: "Pronto para Deploy"
  },
  {
    title: "Suíte Automatizada de Testes de API",
    category: "Quality Assurance & APIs",
    description: "Framework de validação de APIs REST utilizando Postman e Newman CLI, cobrindo validação de status HTTP, schema JSON, latência e segurança de headers.",
    features: [
      "Coleções completas no Postman com scripts de pré-requisição",
      "Validação estrita de contratos de payload (JSON Schema)",
      "Testes de regressão automatizados para rotas críticas",
      "Relatórios de execução exportáveis para times de engenharia"
    ],
    tags: ["Postman", "API Testing", "Newman", "JSON Schema", "JavaScript", "REST"],
    linkText: "Ver Documentação QA",
    linkUrl: "https://github.com/teusbraga",
    statusBadge: "Suíte Validada"
  },
  {
    title: "Plano de Testes & Auditoria de QA (TripleTen)",
    category: "Manual Testing & Bug Triage",
    description: "Ciclo rigoroso de testes funcionais, exploratórios e de regressão em sistema web, com levantamento de requisitos, matriz de rastreabilidade e bug reports no Jira.",
    features: [
      "Criação de casos de teste estruturados (Pré-condições, Passos, Esperado)",
      "Classificação de defeitos por Severidade e Prioridade de negócio",
      "Testes de borda em fluxos críticos de pagamento e formulários",
      "Comunicação técnica clara com desenvolvedores"
    ],
    tags: ["Manual QA", "Jira", "Test Cases", "Exploratory", "Regression", "SDLC"],
    linkText: "Acessar Case de QA",
    linkUrl: "https://github.com/teusbraga",
    statusBadge: "Aprovado em Bootcamp"
  },
  {
    title: "Landing Page Otimizada para SEO & Vercel Edge",
    category: "Performance & SEO Técnico",
    description: "Estrutura web moderna focada em rankeamento no Google, máxima velocidade de carregamento (Core Web Vitals verdes) e snippets estruturados Schema.org.",
    features: [
      "LCP &lt; 0.8s e pontuação de performance próxima de 100/100",
      "Schema.org JSON-LD para Person e ProfessionalService",
      "Sitemap.xml dinâmico e robots.txt automáticos",
      "Acessibilidade completa (a11y) e semântica HTML5"
    ],
    tags: ["SEO Técnico", "Core Web Vitals", "Next.js", "JSON-LD", "Vercel", "a11y"],
    linkText: "Ver no Vercel",
    linkUrl: "https://github.com/teusbraga",
    statusBadge: "Core Web Vitals Verdes"
  }
];

export function ProjectsAndCases() {
  return (
    <section id="cases" className="py-20 border-t border-dark-border/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-wider uppercase text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-full">
            Portfólio & Prova de Execução
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            Projetos & Arquiteturas em Destaque
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Exemplos reais de engenharia full-stack, segurança de banco de dados e testes de qualidade prontos para servirem de base para o seu próximo produto.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-dark-card border border-dark-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between card-hover-effect group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/30 px-2.5 py-0.5 rounded-full">
                    {proj.category}
                  </span>
                  <span className="text-[11px] font-mono text-dark-muted px-2 py-0.5 rounded bg-dark-subtle border border-dark-border">
                    {proj.statusBadge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {proj.title}
                </h3>
                
                <p className="text-gray-400 text-xs sm:text-sm mb-6 leading-relaxed">
                  {proj.description}
                </p>

                <div className="space-y-2 mb-6">
                  {proj.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-dark-border/80">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-dark-subtle text-gray-300 border border-dark-border/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>{proj.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
