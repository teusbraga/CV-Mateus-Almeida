"use client";

import React, { useState } from "react";
import { Terminal, ShieldCheck, Menu, X, ArrowUpRight, Check, Copy } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mts.almeida7@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-dark-border/80 bg-dark-bg/85 backdrop-blur-md transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 transition-colors">
            <Terminal className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              Mateus Almeida
            </span>
            <span className="text-[11px] text-dark-muted font-mono flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400 inline" /> QA + Full-Stack
            </span>
          </div>
        </a>

        {/* Live Availability Pill (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-xs text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Disponível para novos contratos & Fiverr</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#servicos" className="hover:text-emerald-400 transition-colors">
            Serviços
          </a>
          <a href="#diferencial" className="hover:text-emerald-400 transition-colors">
            Por que QA + IA?
          </a>
          <a href="#cases" className="hover:text-emerald-400 transition-colors">
            Projetos
          </a>
          <a href="#skills" className="hover:text-emerald-400 transition-colors">
            Stack
          </a>
          <a href="#experiencia" className="hover:text-emerald-400 transition-colors">
            Trajetória
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={copyEmail}
            aria-label="Copiar email de contato"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dark-border bg-dark-card hover:bg-dark-subtle text-xs text-gray-300 hover:text-white transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Email copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar Email</span>
              </>
            )}
          </button>
          
          <a
            href="https://www.fiverr.com/seu-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-semibold text-xs tracking-wide transition-all shadow-sm hover:shadow-emerald-500/20"
          >
            <span>Fiverr</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu de navegação"
          className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-dark-card transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-dark-border bg-dark-bg/95 backdrop-blur-xl px-4 py-5 space-y-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-xs text-emerald-300 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Disponível para novos projetos</span>
          </div>

          <nav className="flex flex-col space-y-3 text-sm text-gray-200">
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-dark-card transition-colors"
            >
              Serviços & Micro-tarefas
            </a>
            <a
              href="#diferencial"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-dark-card transition-colors"
            >
              Diferencial: Rigor de QA
            </a>
            <a
              href="#cases"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-dark-card transition-colors"
            >
              Projetos & Arquiteturas
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-dark-card transition-colors"
            >
              Habilidades Técnicas
            </a>
            <a
              href="#experiencia"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-dark-card transition-colors"
            >
              Experiência Industrial & QA
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-dark-card transition-colors"
            >
              Contato Direto
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-2 border-t border-dark-border">
            <button
              onClick={copyEmail}
              className="flex items-center justify-center gap-2 py-2 rounded-lg border border-dark-border bg-dark-card text-xs text-gray-200"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">mts.almeida7@gmail.com copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar Email (mts.almeida7@gmail.com)</span>
                </>
              )}
            </button>
            <a
              href="https://www.fiverr.com/seu-link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold text-xs"
            >
              <span>Contratar no Fiverr</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
