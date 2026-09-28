import React, { useState } from 'react';
import { BookOpen, User, Clock, ArrowRight, X, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { EXPERT_ARTICLES } from '../data/fnacData';
import { ExpertArticle } from '../types';

interface ExpertAdviceSectionProps {
  darkMode: boolean;
  onSelectProductRecommendation?: (productName: string) => void;
}

export function ExpertAdviceSection({ darkMode, onSelectProductRecommendation }: ExpertAdviceSectionProps) {
  const [selectedArticle, setSelectedArticle] = useState<ExpertArticle | null>(null);

  return (
    <section id="expert-advice-section" className={`py-12 sm:py-16 border-b transition-colors ${
      darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-900 dark:text-[#E8A200] uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5 text-[#E8A200]" />
              <span>Autoridade &amp; Conteúdo Especializado</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827] dark:text-white tracking-tight">
              Conselhos dos Nossos Experts
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#4B5563] dark:text-zinc-400">
              Guias de compra honestos e reflexões culturais da equipa especializada da FNAC e da Revista ESTANTE.
            </p>
          </div>

          <div className="text-xs font-bold text-[#6B7280] dark:text-zinc-400">
            {EXPERT_ARTICLES.length} Guias Publicados
          </div>
        </div>

        {/* 7 Articles Grid: 1 Featured big card + 6 grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERT_ARTICLES.map((art, idx) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className={`group cursor-pointer rounded-2xl border p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                idx === 0
                  ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-amber-500/5 via-transparent to-blue-500/5'
                  : ''
              } ${
                darkMode ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700' : 'bg-white border-zinc-200 hover:border-zinc-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-3">
                  <span className="font-bold text-amber-900 dark:text-[#E8A200] uppercase text-[10px] tracking-wider">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-[#6B7280]">
                    <Clock className="w-3 h-3" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className={`font-black text-[#111827] dark:text-white group-hover:text-amber-900 dark:group-hover:text-[#E8A200] transition-colors ${
                  idx === 0 ? 'text-lg sm:text-xl' : 'text-sm sm:text-base'
                }`}>
                  {art.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#4B5563] dark:text-zinc-400 leading-relaxed">
                  "{art.excerpt}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-700 dark:text-zinc-300">
                    <User className="w-3 h-3" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold block text-[#111827] dark:text-zinc-200">
                      {art.author}
                    </span>
                    <span className="text-[10px] text-[#6B7280] dark:text-zinc-400 block truncate max-w-[180px]">
                      {art.expertRole}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-amber-900 dark:text-[#E8A200] group-hover:translate-x-1 transition-transform">
                  <span>Ler mais</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Article Reader */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
            <div
              className="fixed inset-0"
              onClick={() => setSelectedArticle(null)}
            />
            <div className={`relative max-w-2xl w-full max-h-[85vh] rounded-3xl p-6 sm:p-8 overflow-y-auto shadow-2xl border z-10 ${
              darkMode ? 'bg-zinc-900 border-zinc-700 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-800'
            }`}>
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Fechar artigo"
              >
                <X className="w-5 h-5 text-zinc-400" />
              </button>

              {/* Category & Time */}
              <div className="flex items-center gap-3 text-xs mb-3">
                <span className="px-2.5 py-0.5 rounded-full font-bold uppercase text-[10px] bg-amber-500/10 text-[#E8A200] border border-amber-500/20">
                  {selectedArticle.category}
                </span>
                <span className="text-zinc-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedArticle.readTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white tracking-tight">
                {selectedArticle.title}
              </h2>
              <p className="mt-1 text-sm font-semibold text-[#E8A200]">
                {selectedArticle.subtitle}
              </p>

              {/* Author & Badge */}
              <div className="my-5 p-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#E8A200] text-black font-extrabold flex items-center justify-center text-xs">
                  FNAC
                </div>
                <div>
                  <span className="font-bold text-xs block text-zinc-950 dark:text-white">
                    {selectedArticle.author}
                  </span>
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    {selectedArticle.expertRole}
                  </span>
                </div>
              </div>

              {/* Full Article Body */}
              <div className="space-y-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {selectedArticle.fullBody.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Recommended Equipment */}
              {selectedArticle.recommendedProducts.length > 0 && (
                <div className="mt-6 pt-5 border-t border-zinc-200 dark:border-zinc-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                    Equipamentos Recomendados pelo Expert:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedArticle.recommendedProducts.map((prod, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#E8A200]/15 text-[#B47C00] dark:text-[#E8A200] border border-[#E8A200]/30"
                      >
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 pt-4 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2.5 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-black font-bold text-xs hover:bg-[#E8A200] dark:hover:bg-[#E8A200] hover:text-black transition-colors"
                >
                  Concluir Leitura
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
