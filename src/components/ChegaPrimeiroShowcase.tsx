import React, { useState, useEffect } from 'react';
import { Flame, Clock, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { CHEGA_PRIMEIRO_ITEMS } from '../data/fnacData';
import { ProductItem } from '../types';

interface ChegaPrimeiroShowcaseProps {
  darkMode: boolean;
  onAddToCart: (product: ProductItem) => void;
  onSelectCategoryFilter: (category: string) => void;
}

export function ChegaPrimeiroShowcase({
  darkMode,
  onAddToCart,
  onSelectCategoryFilter
}: ChegaPrimeiroShowcaseProps) {
  // Countdown timer simulation for early launch access window
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 28, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scarcityTags = [
    'Apple iPhone 18 Pro',
    'Apple iPhone Duo',
    'Apple Watch Series 12',
    'Xiaomi Redmi Note Series',
    'Asus S14 C5 + Mochila + Rato',
    'Zelda: Ocarina of Time',
    'Legami Kawaii Teddy Bear',
    'Instrumentos Musicais',
    'Pré-Vendas Livros',
    'Novidades Livros'
  ];

  return (
    <section className={`py-12 sm:py-16 border-b transition-colors ${
      darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Urgency Ticker */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800 gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-900 border border-red-300 dark:bg-red-950/30 dark:text-red-300 dark:border-red-900/50 mb-2 shadow-xs">
              <Flame className="w-3.5 h-3.5 fill-red-600 text-red-600 animate-bounce" />
              <span>Garantia de Entrega Prioritária Dia 1</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827] dark:text-white tracking-tight flex items-center gap-2">
              Chega Primeiro às Novidades
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#4B5563] dark:text-zinc-400">
              As primeiras vagas de stock reservadas para quem não aceita esperar.
            </p>
          </div>

          {/* Countdown Clock */}
          <div className={`flex items-center gap-3 p-3 rounded-2xl border ${
            darkMode ? 'bg-zinc-900 border-zinc-800 text-zinc-200' : 'bg-[#F9FAFB] border-zinc-200 text-zinc-800 shadow-xs'
          }`}>
            <Clock className="w-4 h-4 text-[#E8A200] shrink-0" />
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#6B7280] dark:text-zinc-400 block">
                Janela de Pré-Reserva Encerra Em:
              </span>
              <div className="font-mono font-black text-sm text-[#111827] dark:text-white">
                <span className="text-[#B47C00] dark:text-[#E8A200]">{String(timeLeft.hours).padStart(2, '0')}h</span> :{' '}
                <span>{String(timeLeft.minutes).padStart(2, '0')}m</span> :{' '}
                <span className="text-[#6B7280]">{String(timeLeft.seconds).padStart(2, '0')}s</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scarcity fast-tag carousel bar */}
        <div className="mb-8 overflow-x-auto no-scrollbar">
          <div className="flex gap-2">
            {scarcityTags.map((tag, i) => (
              <button
                key={i}
                onClick={() => onSelectCategoryFilter(tag)}
                className={`px-3 py-1 text-xs rounded-full border whitespace-nowrap font-semibold transition-colors cursor-pointer ${
                  darkMode
                    ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-[#E8A200]'
                    : 'bg-[#F3F4F6] border-zinc-200 text-[#111827] hover:border-[#E8A200] hover:bg-amber-50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Trend Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CHEGA_PRIMEIRO_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                darkMode ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700' : 'bg-white border-zinc-200 hover:border-zinc-300'
              }`}
            >
              <div>
                <div className="relative aspect-4/3 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white shadow-xs">
                    {item.badge}
                  </span>
                  {item.stockLeft && (
                    <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-bold bg-black/80 backdrop-blur-md text-amber-300 border border-amber-300/30">
                      Apenas {item.stockLeft} un. restantes
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <span className="text-[11px] font-bold text-[#6B7280] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-sm text-[#111827] dark:text-white line-clamp-1">
                    {item.name}
                  </h3>
                  {item.bundleAddon && (
                    <span className="mt-1 inline-block text-[11px] font-bold text-amber-900 dark:text-amber-300">
                      {item.bundleAddon}
                    </span>
                  )}
                  <p className="mt-2 text-xs text-[#4B5563] dark:text-zinc-400 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="text-base font-black text-[#111827] dark:text-white">
                      {item.promoPrice.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}€
                    </span>
                    {item.originalPrice && (
                      <span className="ml-2 text-xs text-[#6B7280] line-through font-medium">
                        {item.originalPrice.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}€
                      </span>
                    )}
                  </div>
                  {item.tradeInPrice && (
                    <span className="text-[10px] font-bold text-emerald-900 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 px-1 rounded">
                      c/ Retoma
                    </span>
                  )}
                </div>

                <button
                  onClick={() => onAddToCart(item)}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#E8A200] hover:bg-amber-500 text-black font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{item.isPreOrder ? 'Garantir Pré-Reserva' : 'Comprar Agora'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
