"use client";

import React, { useState } from "react";
import { 
  Code2, 
  Database, 
  ShieldCheck, 
  Cloud, 
  Search, 
  Check, 
  Cpu, 
  GitBranch 
} from "lucide-react";

const categories = [
  {
    id: "all",
    name: "Todas as Habilidades"
  },
  {
    id: "fullstack",
    name: "Full-Stack & Frontend",
    icon: Code2
  },
  {
    id: "backend",
    name: "Backend & Supabase",
    icon: Database
  },
  {
    id: "qa",
    name: "Quality Assurance & Testes",
    icon: ShieldCheck
  },
  {
    id: "devops",
    name: "Deploy, Git & Nuvem",
    icon: Cloud
  },
  {
    id: "seo",
    name: "SEO Técnico & Performance",
    icon: Search
  }
];

const skills = [
  // Full-Stack
  { name: "Next.js 15 (App Router)", category: "fullstack", level: "Avançado", badge: "Core" },
  { name: "TypeScript", category: "fullstack", level: "Avançado", badge: "Core" },
  { name: "React 19", category: "fullstack", level: "Avançado", badge: "Core" },
  { name: "Tailwind CSS", category: "fullstack", level: "Avançado", badge: "Core" },
  { name: "JavaScript (ES6+)", category: "fullstack", level: "Avançado" },
  { name: "HTML5 Semântico / a11y", category: "fullstack", level: "Avançado" },

  // Backend & Supabase
  { name: "Supabase (PostgreSQL)", category: "backend", level: "Avançado", badge: "Core" },
  { name: "Row Level Security (RLS)", category: "backend", level: "Avançado", badge: "Segurança" },
  { name: "APIs RESTful", category: "backend", level: "Avançado", badge: "Core" },
  { name: "SQL Queries & Modeling", category: "backend", level: "Sólido" },
  { name: "Server Actions / Edge APIs", category: "backend", level: "Avançado" },
  { name: "Supabase Auth & Storage", category: "backend", level: "Avançado" },

  // QA & Testing
  { name: "Testes de API com Postman", category: "qa", level: "Especialista", badge: "Destaque" },
  { name: "Testes Manuais & Exploratórios", category: "qa", level: "Especialista", badge: "Destaque" },
  { name: "Testes de Regressão", category: "qa", level: "Especialista" },
  { name: "Test Case Design & Rastreabilidade", category: "qa", level: "Especialista" },
  { name: "Bug Reporting & Triage (Jira)", category: "qa", level: "Especialista" },
  { name: "Automação com Python + Selenium", category: "qa", level: "Intermediário" },

  // DevOps & Cloud
  { name: "Vercel Platform & Edge Network", category: "devops", level: "Avançado", badge: "Deploy" },
  { name: "Git & GitHub Workflow", category: "devops", level: "Avançado", badge: "Core" },
  { name: "Linux & SSH", category: "devops", level: "Sólido" },
  { name: "CI/CD & GitHub Actions", category: "devops", level: "Sólido" },

  // SEO & Performance
  { name: "Schema.org (JSON-LD Rich Snippets)", category: "seo", level: "Avançado", badge: "SEO" },
  { name: "Core Web Vitals (LCP, INP, CLS)", category: "seo", level: "Avançado", badge: "Performance" },
  { name: "OpenGraph & Social Metas", category: "seo", level: "Avançado" },
  { name: "Sitemaps Dinâmicos & Robots.txt", category: "seo", level: "Avançado" },

  // Metodologias & Outras
  { name: "Scrum & Kanban", category: "qa", level: "Prática Contínua" },
  { name: "Análise de Causa-Raiz (Kaizen)", category: "qa", level: "Industrial" }
];

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 border-t border-dark-border/60 bg-dark-bg/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-wider uppercase text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-full">
            Arsenal Técnico
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            Habilidades Técnicas & Ferramentas
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Uma combinação estratégica entre ferramentas modernas de desenvolvimento rápido e rigor técnico de testes para entregar software sem surpresas.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-emerald-500 text-gray-950 font-bold shadow-md shadow-emerald-500/20"
                  : "bg-dark-card border border-dark-border text-gray-400 hover:text-white hover:bg-dark-subtle"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-dark-card border border-dark-border/80 flex flex-col justify-between card-hover-effect"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="font-semibold text-xs sm:text-sm text-white">
                  {skill.name}
                </span>
                {skill.badge && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 shrink-0">
                    {skill.badge}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between text-[11px] text-dark-muted font-mono mt-2 pt-2 border-t border-dark-border/40">
                <span>Nível</span>
                <span className="text-gray-300">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Work Ethic */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-dark-card/60 border border-dark-border">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>Mentalidade de Engenharia & Soft Skills</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Pensamento Analítico",
              "Comunicação Técnica Clara",
              "Foco no Usuário Final",
              "Resolução Ágil de Problemas",
              "Melhoria Contínua (Kaizen)",
              "Atenção Extrema aos Detalhes",
              "Autonomia & Responsabilidade (Ownership)",
              "Adaptabilidade Rápida",
              "Previsibilidade de Entrega"
            ].map((trait, tIdx) => (
              <span
                key={tIdx}
                className="text-xs px-3 py-1.5 rounded-lg bg-dark-subtle text-gray-300 border border-dark-border/70"
              >
                ✓ {trait}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
