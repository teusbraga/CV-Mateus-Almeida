"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  Copy, 
  Check, 
  MessageSquare,
  ShieldCheck,
  ChevronUp
} from "lucide-react";

export function ContactFooter() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mts.almeida7@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+351924689447");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contato" className="py-20 border-t border-dark-border/80 bg-dark-bg relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Main CTA Box */}
        <div className="bg-gradient-to-b from-dark-card to-dark-subtle/90 border border-emerald-500/40 rounded-3xl p-8 sm:p-12 text-center mb-16 shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-xs font-mono text-emerald-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Atendimento Rápido • Resposta em menos de 2 horas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Vamos resolver o seu problema hoje?
          </h2>

          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Seja para criar um MVP completo no Next.js + Supabase, corrigir um bug que está travando sua produção ou realizar uma auditoria completa de QA no seu software.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.fiverr.com/seu-link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold px-7 py-3.5 rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20 text-sm md:text-base"
            >
              <span>Contratar via Fiverr</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/351924689447?text=Olá%20Mateus,%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-emerald-500/40 bg-emerald-950/30 hover:bg-emerald-950/50 text-emerald-300 font-semibold px-6 py-3.5 rounded-xl transition-all transform hover:-translate-y-0.5 text-sm md:text-base"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chamar no WhatsApp</span>
            </a>

            <a
              href="mailto:mts.almeida7@gmail.com?subject=Contato%20via%20Portfolio"
              className="flex items-center gap-2 border border-dark-border bg-dark-card hover:bg-dark-subtle text-gray-200 font-medium px-6 py-3.5 rounded-xl transition-all transform hover:-translate-y-0.5 text-sm md:text-base"
            >
              <Mail className="w-4 h-4 text-gray-400" />
              <span>Enviar Email Direto</span>
            </a>
          </div>
        </div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-center md:text-left">
          
          {/* Email */}
          <div className="p-6 rounded-2xl bg-dark-card border border-dark-border flex flex-col justify-between">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono text-dark-muted">Email Profissional</span>
            </div>
            <p className="text-sm font-semibold text-white mb-3 break-all">
              mts.almeida7@gmail.com
            </p>
            <button
              onClick={copyEmail}
              className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg border border-dark-border bg-dark-subtle text-xs text-gray-300 hover:text-white transition-all w-full"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar Email</span>
                </>
              )}
            </button>
          </div>

          {/* WhatsApp / Telefone */}
          <div className="p-6 rounded-2xl bg-dark-card border border-dark-border flex flex-col justify-between">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono text-dark-muted">Telefone & WhatsApp</span>
            </div>
            <p className="text-sm font-semibold text-white mb-3">
              +351 924 689 447
            </p>
            <button
              onClick={copyPhone}
              className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg border border-dark-border bg-dark-subtle text-xs text-gray-300 hover:text-white transition-all w-full"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar Número</span>
                </>
              )}
            </button>
          </div>

          {/* Localização & Fuso */}
          <div className="p-6 rounded-2xl bg-dark-card border border-dark-border flex flex-col justify-between">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono text-dark-muted">Localização Base</span>
            </div>
            <p className="text-sm font-semibold text-white mb-1">
              Montijo • Portugal
            </p>
            <p className="text-xs text-dark-muted mb-3">
              Fuso Horário GMT / WET • Atendimento Global
            </p>
            <div className="text-xs text-emerald-400 font-medium py-1 text-center md:text-left">
              ✓ Disponível para trabalho remoto
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-dark-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dark-muted">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-gray-300">Mateus Almeida</span>
            <span>•</span>
            <span>QA Engineer & Full-Stack Delivery</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/teusbraga"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>
            
            <a
              href="https://www.fiverr.com/seu-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              Fiverr
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Voltar ao topo da página"
              className="p-1.5 rounded-lg border border-dark-border bg-dark-card hover:bg-dark-subtle text-gray-400 hover:text-white transition-all ml-2"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
