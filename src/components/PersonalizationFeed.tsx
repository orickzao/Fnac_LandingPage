import React, { useState } from 'react';
import { Sparkles, ShoppingBag, Heart, Star, CheckCircle, RefreshCcw } from 'lucide-react';
import { PERSONALIZED_FEED } from '../data/fnacData';
import { ProductItem } from '../types';

interface PersonalizationFeedProps {
  darkMode: boolean;
  onAddToCart: (product: ProductItem) => void;
  onToggleWishlist: (productId: string) => void;
  wishlistIds: string[];
}

export function PersonalizationFeed({
  darkMode,
  onAddToCart,
  onToggleWishlist,
  wishlistIds
}: PersonalizationFeedProps) {
  const [filterType, setFilterType] = useState<'all' | 'books' | 'digital'>('all');

  const filteredFeed = PERSONALIZED_FEED.filter((item) => {
    if (filterType === 'books') return item.category.includes('Livros') || item.category.includes('Manuais');
    if (filterType === 'digital') return item.category.includes('Digital') || item.category.includes('Software');
    return true;
  });

  return (
    <section className={`py-12 sm:py-16 border-b transition-colors ${
      darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Hyper-Relevance Copy */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-900 dark:text-[#E8A200] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E8A200]" />
              <span>Feed Algorítmico Pessoal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827] dark:text-white tracking-tight">
              Esta seleção é única (como tu)...
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#4B5563] dark:text-zinc-400">
              Itens práticos, recargas digitais e leituras de conveniência recomendados com base no teu perfil.
            </p>
          </div>

          {/* Quick filter pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#F3F4F6] dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 self-start sm:self-auto text-xs font-semibold">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filterType === 'all'
                  ? 'bg-[#111111] text-white shadow-xs font-bold'
                  : 'text-[#4B5563] dark:text-zinc-400 hover:text-[#111827] dark:hover:text-white'
              }`}
            >
              Todos ({PERSONALIZED_FEED.length})
            </button>
            <button
              onClick={() => setFilterType('books')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filterType === 'books'
                  ? 'bg-[#111111] text-white shadow-xs font-bold'
                  : 'text-[#4B5563] dark:text-zinc-400 hover:text-[#111827] dark:hover:text-white'
              }`}
            >
              Livros &amp; Apoio Escolar
            </button>
            <button
              onClick={() => setFilterType('digital')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filterType === 'digital'
                  ? 'bg-[#111111] text-white shadow-xs font-bold'
                  : 'text-[#4B5563] dark:text-zinc-400 hover:text-[#111827] dark:hover:text-white'
              }`}
            >
              Digitais &amp; Software
            </button>
          </div>
        </div>

        {/* 5-Item Carousel / Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredFeed.map((item) => {
            const isWishlisted = wishlistIds.includes(item.id);

            return (
              <div
                key={item.id}
                className={`rounded-2xl border p-4 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                  darkMode ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700' : 'bg-white border-zinc-200 hover:border-zinc-300'
                }`}
              >
                <div>
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-3 bg-zinc-100 dark:bg-zinc-800">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {item.badge && (
                      <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-black text-white shadow-xs">
                        {item.badge}
                      </span>
                    )}
                    <button
                      onClick={() => onToggleWishlist(item.id)}
                      className={`absolute top-2 right-2 p-1.5 rounded-full backdrop-blur-md transition-colors cursor-pointer ${
                        isWishlisted
                          ? 'bg-red-500 text-white'
                          : 'bg-black/50 text-white hover:bg-black/70'
                      }`}
                      aria-label="Guardar nos favoritos"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-white' : ''}`} />
                    </button>
                  </div>

                  <span className="text-[10px] text-[#6B7280] block font-bold">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-xs text-[#111827] dark:text-white mt-1 line-clamp-2 leading-snug">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-[11px] text-[#4B5563] dark:text-zinc-400 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                  {item.merchantCount && (
                    <span className="text-[10px] text-[#6B7280] block mb-1 font-medium">
                      {item.merchantCount} novos desde {item.merchantMinPrice?.toFixed(2)}€
                    </span>
                  )}
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-black text-sm text-[#111827] dark:text-white">
                      {item.promoPrice.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}€
                    </span>
                    {item.originalPrice && (
                      <span className="text-xs text-[#6B7280] line-through font-medium">
                        {item.originalPrice.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}€
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onAddToCart(item)}
                    className="w-full py-2 px-2 rounded-xl bg-zinc-100 hover:bg-[#E8A200] text-[#111827] hover:text-black border border-zinc-200 font-bold text-[11px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>Adicionar</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
