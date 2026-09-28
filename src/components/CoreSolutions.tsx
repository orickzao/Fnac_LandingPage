import { RefreshCw, Layers, Truck, Award, CreditCard, ArrowUpRight } from 'lucide-react';
import { CORE_FEATURES } from '../data/fnacData';

interface CoreSolutionsProps {
  darkMode: boolean;
  onOpenTradeIn: () => void;
  onOpenCardBenefits: () => void;
  onOpenStoreFinder: () => void;
  onScrollToExperts: () => void;
}

export function CoreSolutions({
  darkMode,
  onOpenTradeIn,
  onOpenCardBenefits,
  onOpenStoreFinder,
  onScrollToExperts
}: CoreSolutionsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-emerald-500" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#E8A200]" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-blue-500" />;
      case 'Award':
        return <Award className="w-5 h-5 text-purple-500" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-amber-500" />;
      default:
        return <Award className="w-5 h-5 text-[#E8A200]" />;
    }
  };

  const handleFeatureClick = (id: string) => {
    if (id === 'feat-restart') onOpenTradeIn();
    else if (id === 'feat-card') onOpenCardBenefits();
    else if (id === 'feat-logistics') onOpenStoreFinder();
    else if (id === 'feat-experts') onScrollToExperts();
  };

  return (
    <section className={`py-12 sm:py-16 border-b transition-colors ${
      darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-amber-900 dark:text-[#E8A200] block mb-2">
              Soluções &amp; Vantagens Exclusivas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827] dark:text-white tracking-tight">
              A experiência FNAC focada no teu benefício real
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#4B5563] dark:text-zinc-400 max-w-md">
            Cada serviço foi concebido para eliminar atritos financeiros, logísticos e de decisão antes e depois da tua compra.
          </p>
        </div>

        {/* 5-Card Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CORE_FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              onClick={() => handleFeatureClick(feature.id)}
              className={`group cursor-pointer rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between ${
                idx === 0 ? 'lg:col-span-2 bg-gradient-to-br from-emerald-500/5 via-transparent to-amber-500/5' : ''
              } ${
                darkMode ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700' : 'bg-white border-zinc-200 hover:border-zinc-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${
                    darkMode ? 'bg-zinc-800' : 'bg-zinc-100 border border-zinc-200'
                  }`}>
                    {getIcon(feature.iconName)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700">
                      {feature.highlightTag}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-amber-900 dark:group-hover:text-[#E8A200] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <h3 className="font-extrabold text-base sm:text-lg text-[#111827] dark:text-white group-hover:text-amber-900 dark:group-hover:text-[#E8A200] transition-colors">
                  {feature.name}
                </h3>

                {/* Outcome-focused one-line benefit */}
                <p className="mt-2 text-xs sm:text-sm font-bold text-[#111827] dark:text-zinc-200 leading-snug">
                  {feature.oneLineBenefit}
                </p>

                <p className="mt-2 text-xs text-[#4B5563] dark:text-zinc-400 leading-relaxed">
                  {feature.detail}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-amber-900 dark:text-[#E8A200] font-bold">
                <span>Saber mais</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
