"use client";

import React from "react";
import { Award, ExternalLink, Globe, CheckCircle2, BookOpen } from "lucide-react";

export function Certifications() {
  return (
    <section className="py-16 border-t border-dark-border/60 bg-dark-bg/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-wider uppercase text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-full">
            Credenciais & Idiomas
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3 mb-2 tracking-tight">
            Certificações & Validação Internacional
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm">
            Comprovação de competências técnicas e fluência em comunicação para contratações globais sem barreiras.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* EF SET C1 */}
          <a
            href="https://cert.efset.org/pspgCD"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark-card border border-emerald-500/40 rounded-2xl p-6 flex flex-col justify-between card-hover-emerald group relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                  C1 Advanced
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                <span>EF SET English Certificate</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
              </h3>

              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Proficiência C1 em língua inglesa (Advanced). Fluência para reuniões com clientes internacionais, documentação técnica em inglês e briefs no Fiverr.
              </p>
            </div>

            <div className="pt-3 border-t border-dark-border flex items-center justify-between text-xs">
              <span className="text-dark-muted font-mono">Credencial Oficial</span>
              <span className="text-emerald-400 font-semibold group-hover:underline">Verificar Certificado →</span>
            </div>
          </a>

          {/* TripleTen QA */}
          <div className="bg-dark-card border border-dark-border rounded-2xl p-6 flex flex-col justify-between card-hover-effect">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-brand-blue bg-blue-950/60 border border-blue-800/40 px-2 py-0.5 rounded">
                  Bootcamp QA
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                TripleTen QA Engineering
              </h3>

              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Formação intensiva em metodologia de testes de software, validação de APIs com Postman, SQL para banco de dados e gestão de defeitos via Jira.
              </p>
            </div>

            <div className="pt-3 border-t border-dark-border flex items-center justify-between text-xs">
              <span className="text-dark-muted font-mono">Formação Concluída</span>
              <span className="text-emerald-400 font-semibold">2024</span>
            </div>
          </div>

          {/* ISTQB CTFL */}
          <div className="bg-dark-card border border-dark-border rounded-2xl p-6 flex flex-col justify-between card-hover-effect">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-purple-400 bg-purple-950/60 border border-purple-800/40 px-2 py-0.5 rounded">
                  Em Andamento
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                ISTQB Foundation (CTFL)
              </h3>

              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Preparação contínua seguindo os padrões internacionais do International Software Testing Qualifications Board para excelência em processos de teste.
              </p>
            </div>

            <div className="pt-3 border-t border-dark-border flex items-center justify-between text-xs">
              <span className="text-dark-muted font-mono">Padrão Internacional</span>
              <span className="text-purple-400 font-semibold">Preparação</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
