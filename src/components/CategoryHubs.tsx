import React, { useState } from 'react';
import { Sparkles, ShoppingBag, Plus, Star, Check } from 'lucide-react';
import { TECH_HIGHLIGHTS, ENTERTAINMENT_HIGHLIGHTS } from '../data/fnacData';
import { ProductItem } from '../types';

interface CategoryHubsProps {
  darkMode: boolean;
  onAddToCart: (product: ProductItem) => void;
  onSelectCategoryFilter: (category: string) => void;
}

export function CategoryHubs({ darkMode, onAddToCart, onSelectCategoryFilter }: CategoryHubsProps) {
  const [activeTab, setActiveTab] = useState<'tech' | 'entertainment'>('tech');

  const techJumpLinks = [
    'Mobilidade Elétrica',
    'Oppo A6k 256GB + Auriculares',
    'Samsung Galaxy Watch',
    'Asus VB Go 15,6" R5 16GB',
    'Idea Tab + Pen + Teclado',
    'UltraGear OLED 27" 240Hz',
    'TV e Home Cinema',
    'Cozinha e Eletrodomésticos',
    'Máquinas Mirrorless e Objetivas',
    'Action Cams e Drones'
  ];

  const entertainmentJumpLinks = [
    'Acessórios Consola',
    'Gifts para Book Lovers',
    'Livros Universitários',
    'Pianos Yamaha com Suporte por +20€',
    'Vinil e Gira-Discos',
    'Merchandising Pop Culture',
    'Jogos de Tabuleiro e Lógica'
  ];

  const activeProducts = activeTab === 'tech' ? TECH_HIGHLIGHTS : ENTERTAINMENT_HIGHLIGHTS;

  return (
    <section id="category-hubs-section" className={`py-12 sm:py-16 border-b transition-colors ${
      darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Category Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-amber-900 dark:text-[#E8A200] block mb-2">
              Hubs de Acesso Rápido
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827] dark:text-white tracking-tight">
              {activeTab === 'tech' ? 'Tecnologia em Destaque' : 'Entretenimento em Destaque'}
            </h2>
          </div>

          {/* Toggle between Tech and Entertainment with high contrast */}
          <div className="inline-flex p-1.5 rounded-xl bg-[#F3F4F6] dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 self-start sm:self-auto gap-1">
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'tech'
                  ? 'bg-[#111111] text-white shadow-xs'
                  : 'text-[#4B5563] dark:text-zinc-400 hover:text-[#111827] dark:hover:text-white'
              }`}
            >
              Tecnologia em Destaque
            </button>
            <button
              onClick={() => setActiveTab('entertainment')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'entertainment'
                  ? 'bg-[#111111] text-white shadow-xs'
                  : 'text-[#4B5563] dark:text-zinc-400 hover:text-[#111827] dark:hover:text-white'
              }`}
            >
              Entretenimento &amp; Cultura
            </button>
          </div>
        </div>

        {/* Quick jump link tags bar */}
        <div className="mb-8 overflow-x-auto no-scrollbar pb-1">
          <div className="flex flex-wrap gap-2 text-xs">
            {(activeTab === 'tech' ? techJumpLinks : entertainmentJumpLinks).map((link, idx) => (
              <button
                key={idx}
                onClick={() => onSelectCategoryFilter(link)}
                className={`px-3 py-1.5 rounded-full border transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                  darkMode
                    ? 'bg-zinc-900 border-zinc-700/80 text-zinc-300 hover:border-[#E8A200] hover:text-white'
                    : 'bg-[#F3F4F6] border-zinc-200 text-[#111827] hover:border-[#E8A200] hover:bg-amber-50 font-semibold'
                }`}
              >
                <span>{link}</span>
                <span className="text-amber-900 dark:text-[#E8A200] font-bold">›</span>
              </button>
            ))}
          </div>
        </div>

        {/* Product Bundle Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {activeProducts.map((product) => (
            <div
              key={product.id}
              className={`group flex flex-col justify-between rounded-2xl border overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                darkMode ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700' : 'bg-white border-zinc-200 hover:border-zinc-300'
              }`}
            >
              <div>
                {/* Product Image & Badges */}
                <div className="relative aspect-4/3 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-black text-white shadow-xs">
                      {product.badge}
                    </span>
                  )}
                  {product.rating && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[11px] font-bold text-white">
                      <Star className="w-3 h-3 fill-[#E8A200] text-[#E8A200]" />
                      <span>{product.rating}</span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-5">
                  <span className="text-[11px] font-bold text-[#6B7280] block mb-1">
                    {product.category}
                  </span>
                  <h3 className="font-bold text-sm text-[#111827] dark:text-white line-clamp-2 leading-snug group-hover:text-amber-900 dark:group-hover:text-[#E8A200] transition-colors">
                    {product.name}
                  </h3>

                  {/* Bundle Addon Highlight */}
                  {product.bundleAddon && (
                    <div className="mt-2.5 flex items-center gap-1.5 p-2 rounded-lg bg-amber-100 border border-amber-300 text-[11px] font-bold text-amber-900 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800">
                      <Check className="w-3.5 h-3.5 text-[#E8A200] shrink-0 stroke-[2.5]" />
                      <span className="truncate">{product.bundleAddon}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Price & Add to Cart button */}
              <div className="p-4 sm:p-5 pt-0">
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="text-lg font-black text-[#111827] dark:text-white">
                      {product.promoPrice.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}€
                    </span>
                    {product.originalPrice && (
                      <span className="ml-2 text-xs text-[#6B7280] line-through font-medium">
                        {product.originalPrice.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}€
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-emerald-900 dark:text-emerald-300 font-bold bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 px-1.5 py-0.5 rounded">
                    Em Stock
                  </span>
                </div>

                <button
                  onClick={() => onAddToCart(product)}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#111111] hover:bg-[#E8A200] hover:text-black dark:bg-zinc-800 dark:hover:bg-[#E8A200] dark:hover:text-black text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Adicionar ao Cesto</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
