import React, { useState } from 'react';
import { Search, ShoppingBag, RefreshCw, CreditCard, Sparkles, X, Heart } from 'lucide-react';

interface MainNavbarProps {
  darkMode: boolean;
  cartCount: number;
  wishlistCount: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenCart: () => void;
  onOpenTradeIn: () => void;
  onOpenCardBenefits: () => void;
}

export function MainNavbar({
  darkMode,
  cartCount,
  wishlistCount,
  searchQuery,
  onSearchChange,
  onOpenCart,
  onOpenTradeIn,
  onOpenCardBenefits
}: MainNavbarProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const quickPills = [
    'iPhone 18 Pro',
    'Asus Vivobook + Mochila',
    'Murdoku',
    'Regresso Universitário',
    'Apple Watch Series 12'
  ];

  return (
    <header className={`sticky top-0 z-30 transition-colors border-b backdrop-blur-md ${
      darkMode ? 'bg-zinc-950/95 border-zinc-800' : 'bg-white/95 border-zinc-200 shadow-xs'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="bg-[#E8A200] text-black font-extrabold text-2xl tracking-tighter px-3 py-1.5 rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-200">
              fnac
            </div>
            <div className="hidden sm:block leading-tight">
              <span className={`block font-bold text-sm tracking-tight ${darkMode ? 'text-white' : 'text-[#111827]'}`}>
                Cultura &amp; Tecnologia
              </span>
              <span className="text-[11px] text-amber-900 dark:text-[#E8A200] font-bold tracking-wide">
                Lê Mais, Ganha Mais
              </span>
            </div>
          </a>

          {/* Global Search Bar */}
          <div className="flex-1 max-w-2xl relative">
            <div className="relative">
              <input
                id="global-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                placeholder="Pesquisar iPhone 18, livros, informática, gaming, conselhos..."
                className={`w-full pl-10 pr-10 py-2.5 text-sm rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-[#E8A200] ${
                  darkMode
                    ? 'bg-zinc-900 border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:bg-zinc-900'
                    : 'bg-[#F3F4F6] border-zinc-300 text-[#111827] placeholder-[#6B7280] focus:bg-white focus:border-zinc-400'
                }`}
              />
              <Search className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-black p-1 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Live Autocomplete suggestions when focused or empty */}
            {isSearchFocused && !searchQuery && (
              <div className={`absolute top-full left-0 right-0 mt-1.5 p-3 rounded-xl shadow-xl border z-40 text-xs ${
                darkMode ? 'bg-zinc-900 border-zinc-700 text-zinc-200' : 'bg-white border-zinc-200 text-[#111827]'
              }`}>
                <div className="flex items-center gap-1.5 text-[#6B7280] font-semibold mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#E8A200]" />
                  <span>Tendências de Pesquisa Imediata</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {quickPills.map((pill, idx) => (
                    <button
                      key={idx}
                      onMouseDown={() => onSearchChange(pill)}
                      className={`px-2.5 py-1 rounded-full border transition-colors cursor-pointer ${
                        darkMode
                          ? 'bg-zinc-800 border-zinc-700 text-zinc-300 hover:border-[#E8A200] hover:text-white'
                          : 'bg-[#F3F4F6] border-zinc-200 text-[#111827] hover:border-[#E8A200] hover:bg-amber-50 font-medium'
                      }`}
                    >
                      {pill}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* FNAC Restart Quick Action */}
            <button
              id="navbar-restart-btn"
              onClick={onOpenTradeIn}
              className="hidden lg:flex items-center gap-2 px-3 py-2 text-xs font-bold rounded-xl border border-emerald-300 bg-emerald-100 text-emerald-950 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-700 hover:bg-emerald-200 transition-colors cursor-pointer shadow-xs"
              title="Calcula a retoma do teu telemóvel antigo"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>FNAC Restart</span>
            </button>

            {/* Cartão FNAC */}
            <button
              id="navbar-card-btn"
              onClick={onOpenCardBenefits}
              className="hidden md:flex items-center gap-2 px-3 py-2 text-xs font-bold rounded-xl border border-amber-300 bg-amber-100 text-amber-950 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-700 hover:bg-amber-200 transition-colors cursor-pointer shadow-xs"
            >
              <CreditCard className="w-3.5 h-3.5 text-amber-900 dark:text-[#E8A200]" />
              <span>Cartão FNAC</span>
            </button>

            {/* Wishlist Indicator */}
            {wishlistCount > 0 && (
              <div className="flex items-center gap-1 text-xs font-bold text-red-600 px-2 py-1 bg-red-100 dark:bg-red-950/30 rounded-lg">
                <Heart className="w-3.5 h-3.5 fill-red-600" />
                <span className="hidden sm:inline">{wishlistCount}</span>
              </div>
            )}

            {/* Shopping Cart Button */}
            <button
              id="navbar-cart-btn"
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-xl bg-[#E8A200] hover:bg-amber-500 text-black shadow-xs transition-transform active:scale-95 cursor-pointer"
              aria-label="Abrir cesto de compras"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Cesto</span>
              {cartCount > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-[11px] font-black rounded-full bg-black text-[#E8A200]">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
