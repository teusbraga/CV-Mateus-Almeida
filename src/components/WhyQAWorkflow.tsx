"use client";

import React from "react";
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Cpu, 
  Sparkles, 
  Factory, 
  GitBranch, 
  BugOff 
} from "lucide-react";

export function WhyQAWorkflow() {
  return (
    <section id="diferencial" className="py-20 border-t border-dark-border/60 bg-dark-bg/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-wider uppercase text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-full">
            Diferencial Competitivo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            Por que esse fluxo funciona tão rápido?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Velocidade sem controle é apenas dívida técnica acumulada. Minha base em{" "}
            <strong className="text-emerald-400">Quality Assurance e Disciplina Industrial</strong>{" "}
            transforma o poder da IA em software estável, previsível e pronto para faturar.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Common AI Dev */}
          <div className="bg-dark-card/60 border border-red-950/60 rounded-2xl p-6 sm:p-8 relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-200">
                  O Dev &quot;Apenas IA&quot; Comum
                </h3>
                <span className="text-xs text-red-400/90 font-mono">
                  Rápido para entregar, caro para consertar
                </span>
              </div>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✕</span>
                <span>Gera código sem entender o ciclo de vida da aplicação ou casos de borda (edge cases).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✕</span>
                <span>Supabase configurado sem Row Level Security (RLS) adequado, expondo dados sensíveis.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✕</span>
                <span>Quebras de hidratação (hydration errors) e travamento no deploy da Vercel.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✕</span>
                <span>Nenhum plano de teste ou validação estruturada com Postman/Jira.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✕</span>
                <span>O cliente vira o testador (e descobre os bugs na frente dos próprios usuários).</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Mateus Almeida QA + AI Workflow */}
          <div className="bg-gradient-to-b from-dark-card to-dark-subtle/80 border border-emerald-500/40 rounded-2xl p-6 sm:p-8 relative shadow-xl shadow-emerald-950/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  Meu Fluxo: IA + Rigor de QA
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500 text-gray-950 font-extrabold">
                    Zero Defect
                  </span>
                </h3>
                <span className="text-xs text-emerald-400 font-mono">
                  Velocidade de IA com segurança de engenharia
                </span>
              </div>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-gray-200">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Arquitetura Sólida:</strong> Código TypeScript tipado, Next.js 15 moderno e padrões de Clean Architecture.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Supabase Blindado:</strong> Regras de RLS testadas, autenticação validada e queries otimizadas em PostgreSQL.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Validação Prévia com Postman:</strong> Testes de integração de endpoints, status codes e payloads antes do merge.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Deploy Seguro na Vercel:</strong> Build limpo sem erros de tipagem ou conflitos de SSR.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Bagagem Industrial (Honda & Parmalat):</strong> Disciplina de melhoria contínua (Kaizen) e obsessão por detalhes críticos.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 3 Pillars of Quality */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-dark-card border border-dark-border text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-white text-base mb-2">1. IA como Acelerador</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Uso IA avançada para acelerar a escrita de boilerplate, geração de esquemas e scaffolding de telas em minutos.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-dark-card border border-dark-border text-center">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue flex items-center justify-center mx-auto mb-4">
              <BugOff className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-white text-base mb-2">2. Crivo de QA Rigoroso</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Cada funcionalidade passa por testes funcionais, verificação de dados vazados e testes de borda que robôs ignoram.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-dark-card border border-dark-border text-center">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mx-auto mb-4">
              <Factory className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-white text-base mb-2">3. Deploy Zero-Stress</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Integração fluida via Git para Vercel Edge. Entrego seu projeto pronto para receber tráfego sem sustos.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
