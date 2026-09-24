"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Copy, 
  Check, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Terminal, 
  ExternalLink,
  MessageSquare
} from "lucide-react";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mts.almeida7@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Subtle pill tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card border border-dark-border mb-6 animate-fade-in text-xs font-mono text-gray-300">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
          <span>Next.js 15 • Supabase • Vercel • Rigor de QA Industrial</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Aplicações Web e APIs prontas em{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
            dias, não semanas.
          </span>
        </h1>

        {/* Subtitle / Value Proposition */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          Engenharia de software moderna acelerada por IA, Vercel e Supabase unida a um{" "}
          <strong className="text-white font-semibold">rigoroso padrão de QA</strong>.
          Do levantamento de requisitos ao deploy seguro sem atalhos na estabilidade. Ideal para clientes Fiverr e contratos de baixo risco para empresas.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="https://www.fiverr.com/seu-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold px-7 py-3.5 rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20 text-sm md:text-base"
          >
            <span>Contratar no Fiverr</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="https://wa.me/351924689447?text=Olá%20Mateus,%20vi%20seu%20portfolio%20e%20gostaria%20de%20um%20orçamento%20rápido."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-emerald-500/40 bg-emerald-950/20 hover:bg-emerald-950/40 text-emerald-300 font-semibold px-6 py-3.5 rounded-xl transition-all transform hover:-translate-y-0.5 text-sm md:text-base"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Falar no WhatsApp</span>
          </a>

          <button
            onClick={copyEmail}
            className="flex items-center gap-2 border border-dark-border bg-dark-card hover:bg-dark-subtle text-gray-200 font-medium px-5 py-3.5 rounded-xl transition-all transform hover:-translate-y-0.5 text-sm md:text-base"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-mono text-xs md:text-sm">Email Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-gray-400" />
                <span className="font-mono text-xs md:text-sm">mts.almeida7@gmail.com</span>
              </>
            )}
          </button>
        </div>

        {/* Live Metrics / Trust Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-14 text-left">
          <div className="p-4 rounded-xl bg-dark-card/90 border border-dark-border/80 card-hover-effect">
            <div className="flex items-center gap-2 text-emerald-400 mb-1 font-semibold text-xs md:text-sm">
              <Zap className="w-4 h-4" />
              <span>Turnaround 24h-72h</span>
            </div>
            <p className="text-xs text-dark-muted">
              Micro-tarefas, CRUDs e correções pontuais em velocidade recorde.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-dark-card/90 border border-dark-border/80 card-hover-effect">
            <div className="flex items-center gap-2 text-brand-blue mb-1 font-semibold text-xs md:text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Crivo de QA Industrial</span>
            </div>
            <p className="text-xs text-dark-muted">
              Testes de borda, Postman, validação de regras e zero quebras em prod.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-dark-card/90 border border-dark-border/80 card-hover-effect">
            <div className="flex items-center gap-2 text-emerald-400 mb-1 font-semibold text-xs md:text-sm">
              <Globe className="w-4 h-4" />
              <span>Inglês C1 Avançado</span>
            </div>
            <p className="text-xs text-dark-muted">
              Certificação EF SET, pronto para times globais, briefs e documentação.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-dark-card/90 border border-dark-border/80 card-hover-effect">
            <div className="flex items-center gap-2 text-brand-blue mb-1 font-semibold text-xs md:text-sm">
              <Terminal className="w-4 h-4" />
              <span>Montijo • Portugal</span>
            </div>
            <p className="text-xs text-dark-muted">
              Fuso GMT compatível com Europa continental, Reino Unido e Américas.
            </p>
          </div>
        </div>

        {/* Interactive CI/CD Pipeline Simulator (Visual Proof of Workflow) */}
        <div className="max-w-3xl mx-auto rounded-2xl border border-dark-border bg-dark-card/70 backdrop-blur-md p-4 sm:p-6 text-left shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between border-b border-dark-border/80 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="text-xs font-mono text-dark-muted ml-2">delivery-pipeline.config.ts</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/50 text-emerald-400">
              Vercel Edge Ready
            </span>
          </div>

          <div className="space-y-2 font-mono text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-emerald-400 font-bold">$</span>
              <span>git push origin main</span>
            </div>
            <div className="text-dark-muted pl-4">
              &gt; Next.js 15 App Router compilation (SSG + Edge API): <span className="text-emerald-400 font-semibold">Ready (0.7s)</span>
            </div>
            <div className="text-dark-muted pl-4">
              &gt; Supabase Row Level Security (RLS) & Auth policies: <span className="text-emerald-400 font-semibold">100% Protected</span>
            </div>
            <div className="text-dark-muted pl-4">
              &gt; QA Suite: 34 API Assertions (Postman/Newman) + Exploratory checks: <span className="text-emerald-400 font-semibold">34 Passed</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold pt-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Deploy live na Vercel • Zero bugs em produção garantido.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
