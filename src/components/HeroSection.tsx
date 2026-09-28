import React, { useState, useEffect } from 'react';
import { RefreshCw, ArrowRight, ShieldCheck, Zap, Star, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { HERO_SLIDES } from '../data/fnacData';
import { ProductItem } from '../types';

interface HeroSectionProps {
  darkMode: boolean;
  onAddToCart: (product: ProductItem) => void;
  onOpenTradeIn: () => void;
  onScrollToExperts: () => void;
}

export function HeroSection({
  darkMode,
  onAddToCart,
  onOpenTradeIn,
  onScrollToExperts
}: HeroSectionProps) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeSlide = HERO_SLIDES[activeSlideIndex];

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pt-4 pb-12 sm:pb-16 border-b transition-colors">
      {/* Background ambient subtle glow */}
      <div className={`absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20 ${
        darkMode ? 'bg-amber-500/20' : 'bg-amber-300/40'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Value Proposition & Pain Point Solution Header */}
        <div className="max-w-3xl mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-700 mb-3 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-[#E8A200]" />
            <span>Exclusivo FNAC: Programa Restart &amp; Lançamentos 2026</span>
          </div>

          {/* Headline: max 10 words */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-[#111827] dark:text-white">
            Chega primeiro à tecnologia e cultura com retoma garantida
          </h1>

          {/* Subheadline: max 25 words */}
          <p className="mt-3 text-base sm:text-lg text-[#4B5563] dark:text-zinc-300 leading-relaxed font-normal">
            Abate até 754€ no teu iPhone novo entregando o equipamento antigo, com levantamento grátis em 1h e portes sem custo.
          </p>
        </div>

        {/* Hero Card with Product Launch Showcase & Trade-in Price Anchor */}
        <div className={`relative rounded-3xl border overflow-hidden shadow-lg transition-all duration-300 ${
          darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200'
        }`}>
          {/* Slide navigation tabs with clear active/inactive states */}
          <div className="flex border-b border-zinc-200 dark:border-zinc-800 bg-[#F3F4F6] dark:bg-zinc-950 overflow-x-auto no-scrollbar gap-1.5 p-2">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = activeSlideIndex === idx;
              return (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlideIndex(idx)}
                  className={`flex-1 min-w-[200px] px-4 py-3 rounded-xl text-xs text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${
                    isActive
                      ? 'bg-[#111111] text-white shadow-md'
                      : 'bg-[#F3F4F6] text-[#4B5563] hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200'
                  }`}
                >
                  <div className="min-w-0">
                    <span className={`block font-bold text-xs truncate ${isActive ? 'text-white' : 'text-[#111827] dark:text-zinc-200'}`}>
                      {slide.name}
                    </span>
                    <span className={`text-[11px] font-medium block truncate mt-0.5 ${isActive ? 'text-[#E8A200]' : 'text-[#4B5563] dark:text-zinc-400'}`}>
                      {slide.tradeInAnchorText?.split(' na ')[0]}
                    </span>
                  </div>
                  {isActive && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E8A200] shrink-0 ring-2 ring-amber-400/50" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Slide Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-6 sm:p-8 lg:p-10 items-center">
            {/* Left Content column: 7 cols */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-black text-white shadow-xs">
                  {activeSlide.tag}
                </span>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-700">
                  {activeSlide.badge}
                </span>
                {activeSlide.isPreOrder && (
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-700">
                    Pré-Reserva Garantida
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] dark:text-white tracking-tight">
                  {activeSlide.name}
                </h2>
                <p className="mt-2 text-sm sm:text-base text-[#4B5563] dark:text-zinc-300 max-w-xl leading-relaxed">
                  {activeSlide.description}
                </p>
                {activeSlide.bundleAddon && (
                  <div className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/40 px-3 py-1.5 rounded-lg border border-amber-300 dark:border-amber-800">
                    <Check className="w-3.5 h-3.5 text-[#E8A200]" />
                    <span>{activeSlide.bundleAddon}</span>
                  </div>
                )}
              </div>

              {/* Psychological Anchor Price Matrix */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F9FAFB] dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 shadow-xs">
                <div className="text-xs text-[#4B5563] dark:text-zinc-400 font-semibold mb-1">
                  Enquadramento de Preço com Retoma FNAC Restart:
                </div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs uppercase font-extrabold text-[#B47C00] dark:text-[#E8A200]">Desde</span>
                    <span className="text-3xl sm:text-4xl font-black text-[#111827] dark:text-white tracking-tight">
                      {activeSlide.promoPrice.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}€
                    </span>
                  </div>
                  {activeSlide.originalPrice && (
                    <div className="text-sm line-through text-[#6B7280] dark:text-zinc-500 font-medium">
                      PVP {activeSlide.originalPrice.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}€
                    </div>
                  )}
                  <span className="text-xs font-bold text-emerald-900 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 px-2 py-0.5 rounded">
                    Poupança até {(activeSlide.originalPrice! - activeSlide.promoPrice).toFixed(2)}€
                  </span>
                </div>
                <p className="mt-2 text-[11px] text-[#4B5563] dark:text-zinc-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Valor final calculado com base na entrega do modelo anterior em estado excelente.</span>
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                {/* Primary CTA */}
                <button
                  id="hero-primary-cta-btn"
                  onClick={() => onAddToCart(activeSlide)}
                  className="px-6 py-3.5 rounded-xl bg-[#E8A200] hover:bg-amber-500 text-black font-bold text-sm shadow-xs transition-all active:scale-95 flex items-center gap-2 group cursor-pointer"
                >
                  <span>Aproveita ainda</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Secondary CTA: Simulate Trade-in */}
                <button
                  id="hero-tradein-cta-btn"
                  onClick={onOpenTradeIn}
                  className="px-5 py-3.5 rounded-xl border-2 border-zinc-300 dark:border-zinc-700 hover:border-[#111827] dark:hover:border-zinc-300 font-bold text-sm text-[#111827] dark:text-white transition-colors flex items-center gap-2 bg-white dark:bg-zinc-800 hover:bg-zinc-50 cursor-pointer shadow-xs"
                >
                  <RefreshCw className="w-4 h-4 text-[#E8A200]" />
                  <span>Simular Retoma Restart</span>
                </button>

                {/* Editorial link */}
                <button
                  onClick={onScrollToExperts}
                  className="text-xs font-bold text-[#4B5563] dark:text-zinc-300 hover:text-[#111827] dark:hover:text-[#E8A200] underline underline-offset-4 transition-colors cursor-pointer"
                >
                  Ler Análise dos Nossos Experts →
                </button>
              </div>
            </div>

            {/* Right Media column: 5 cols */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-2xl border border-zinc-200/50 dark:border-zinc-700/50 bg-zinc-950">
                <img
                  src={activeSlide.image}
                  alt={activeSlide.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Overlay Floating Specs Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">Data de Lançamento</span>
                    <span className="text-xs font-bold text-white">Disponível em Loja & Online</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#E8A200] text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-[#E8A200]" />
                    <span>{activeSlide.rating} ({activeSlide.reviewsCount})</span>
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => setActiveSlideIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
                  className="p-2 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors"
                  aria-label="Slide anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex gap-1.5">
                  {HERO_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlideIndex(i)}
                      className={`h-2 rounded-full transition-all ${
                        activeSlideIndex === i ? 'w-6 bg-[#E8A200]' : 'w-2 bg-zinc-300 dark:bg-zinc-700'
                      }`}
                      aria-label={`Ir para slide ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setActiveSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length)}
                  className="p-2 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors"
                  aria-label="Slide seguinte"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
