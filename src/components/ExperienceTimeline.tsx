"use client";

import React from "react";
import { Briefcase, Factory, GraduationCap, Calendar, CheckCircle2, Shield } from "lucide-react";

const experiences = [
  {
    role: "Full-Stack Developer & QA Delivery Engineer",
    company: "Freelance & Contratos Ágeis (Fiverr / Global)",
    period: "2024 — Presente",
    location: "Montijo, Portugal (Atendimento Remoto Global)",
    badge: "Foco Atual",
    description: "Desenvolvimento rápido de aplicações completas, micro-tarefas e plantão de bug fixing com foco em Vercel e Supabase.",
    highlights: [
      "Construção de CRUDs, portais e dashboards em Next.js 15 e TypeScript",
      "Modelagem e blindagem de bancos de dados Supabase com Row Level Security (RLS)",
      "Plantão de suporte para resolução de bugs de CORS, layout responsivo e falhas de hidratação",
      "Validação de APIs com Postman e garantia de deploy estável sem retrabalho"
    ]
  },
  {
    role: "Analista de Quality Assurance (QA)",
    company: "TripleTen QA Bootcamp",
    period: "2024",
    location: "Formação Técnica Especializada",
    badge: "Formação QA",
    description: "Imersão prática intensiva em testes manuais, testes de API, design de casos de teste e gestão de defeitos.",
    highlights: [
      "Execução de testes funcionais, exploratórios e de regressão em aplicações web reais",
      "Validação de requisições e respostas de APIs RESTful usando Postman",
      "Elaboração de bug reports detalhados no Jira com passos exatos, severidade e impacto",
      "Criação de planos de teste e matrizes de rastreabilidade de requisitos"
    ]
  },
  {
    role: "Controle de Qualidade & Processos Industriais",
    company: "Honda",
    period: "Experiência Industrial",
    location: "Setor Automotivo de Alta Precisão",
    badge: "Cultura Kaizen",
    description: "Atuação no padrão rigoroso da indústria automotiva japonesa, onde qualquer falha gera prejuízos milionários.",
    highlights: [
      "Aplicação direta da filosofia de melhoria contínua (Kaizen) e padrão zero-defeito",
      "Controle de qualidade minucioso e identificação de anomalias na fonte",
      "Trabalho em equipe sincronizado e comunicação técnica em ambientes de alta criticidade",
      "Disciplina operacional que hoje aplico na arquitetura e revisão de código"
    ]
  },
  {
    role: "Garantia de Qualidade & Padronização",
    company: "Parmalat",
    period: "Experiência Industrial",
    location: "Setor de Manufatura e Alimentos",
    badge: "Padronização",
    description: "Garantia de conformidade, padronização de processos e controle de qualidade sob alta demanda operacional.",
    highlights: [
      "Auditoria de conformidade com procedimentos operacionais padrão (SOP)",
      "Prevenção proativa de não-conformidades em linhas de produção contínua",
      "Foco inegociável em processos previsíveis e repetíveis"
    ]
  }
];

export function ExperienceTimeline() {
  return (
    <section id="experiencia" className="py-20 border-t border-dark-border/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-wider uppercase text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-full">
            Carreira & Disciplina
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            Do Rigor Industrial ao Software Moderno
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Minha experiência em gigantes multinacionais como Honda e Parmalat forjou uma disciplina inegociável por qualidade, hoje traduzida em código limpo e entregas sem falhas.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-emerald-500/40 ml-4 sm:ml-6 space-y-12 pl-6 sm:pl-8">
          {experiences.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-5 h-5 rounded-full bg-dark-bg border-2 border-emerald-500 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform"></div>
              </div>

              {/* Card */}
              <div className="bg-dark-card border border-dark-border rounded-2xl p-6 sm:p-7 card-hover-effect">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 font-semibold">
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-dark-muted font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {item.role}
                </h3>
                
                <div className="text-sm font-semibold text-brand-blue mb-3">
                  {item.company} • <span className="text-xs text-gray-400 font-normal">{item.location}</span>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-dark-border/60">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
