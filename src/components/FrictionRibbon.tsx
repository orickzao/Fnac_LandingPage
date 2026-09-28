import { Truck, Store, MapPin, Sparkles, Tag, ShieldCheck } from 'lucide-react';

interface FrictionRibbonProps {
  darkMode: boolean;
  onOpenStoreFinder: () => void;
}

export function FrictionRibbon({ darkMode, onOpenStoreFinder }: FrictionRibbonProps) {
  return (
    <div className="w-full">
      {/* Top promotional flash bar */}
      <div className="bg-[#E8A200] text-black font-extrabold text-xs py-2 px-4 shadow-xs border-b border-amber-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="bg-[#111111] text-white text-[10px] uppercase font-black px-2 py-0.5 rounded tracking-wider shadow-xs">
              Hoje Online
            </span>
            <span className="tracking-tight text-black font-black">
              Promoção Exclusiva Online: Lê Mais, Ganha Mais. Oferta 5€ de Saldo Direto.
            </span>
          </div>
          <div className="text-[11px] font-bold text-zinc-950 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Válido para compras superiores a 50€ em todo o catálogo</span>
          </div>
        </div>
      </div>

      {/* Main 4-point Friction Reduction Ribbon with crisp contrasting cards */}
      <div className={`border-b transition-colors ${
        darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-[#F9FAFB] border-zinc-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {/* 1. Free Book Shipping */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
              <div className="p-2.5 rounded-lg bg-[#E8A200] text-black shrink-0 shadow-xs font-bold">
                <Truck className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div className="min-w-0">
                <span className="font-extrabold block text-xs sm:text-sm text-[#111827] dark:text-white leading-tight">
                  Portes Grátis &gt;15€
                </span>
                <span className="text-[11px] sm:text-xs text-[#4B5563] dark:text-zinc-400 font-medium block truncate mt-0.5">
                  Livros &amp; eBooks
                </span>
              </div>
            </div>

            {/* 2. Free for Cartão FNAC */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
              <div className="p-2.5 rounded-lg bg-blue-600 text-white shrink-0 shadow-xs font-bold">
                <Tag className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div className="min-w-0">
                <span className="font-extrabold block text-xs sm:text-sm text-[#111827] dark:text-white leading-tight">
                  Portes Grátis Aderentes
                </span>
                <span className="text-[11px] sm:text-xs text-[#4B5563] dark:text-zinc-400 font-medium block truncate mt-0.5">
                  Sem mínimo c/ Cartão FNAC
                </span>
              </div>
            </div>

            {/* 3. Click & Collect in 1h */}
            <button
              onClick={onOpenStoreFinder}
              className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all text-left cursor-pointer"
            >
              <div className="p-2.5 rounded-lg bg-emerald-600 text-white shrink-0 shadow-xs font-bold">
                <Store className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div className="min-w-0">
                <span className="font-extrabold block text-xs sm:text-sm text-[#111827] dark:text-white leading-tight flex items-center gap-1.5">
                  Encomendas em Loja
                  <span className="text-[10px] text-emerald-950 font-black bg-emerald-200 px-1.5 py-0.2 rounded">1h</span>
                </span>
                <span className="text-[11px] sm:text-xs text-[#4B5563] dark:text-zinc-400 font-medium block truncate mt-0.5">
                  Levantamento em 35+ lojas
                </span>
              </div>
            </button>

            {/* 4. 2000+ PUDO Pick-up Points */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
              <div className="p-2.5 rounded-lg bg-[#111111] text-[#E8A200] shrink-0 shadow-xs font-bold">
                <MapPin className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div className="min-w-0">
                <span className="font-extrabold block text-xs sm:text-sm text-[#111827] dark:text-white leading-tight">
                  +2.000 Pontos Recolha
                </span>
                <span className="text-[11px] sm:text-xs text-[#4B5563] dark:text-zinc-400 font-medium block truncate mt-0.5">
                  Horários noturnos alargados
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
