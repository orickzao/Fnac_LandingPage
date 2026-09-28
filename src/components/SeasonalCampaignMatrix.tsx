import React from 'react';
import { Calendar, ArrowRight, BookOpen, GraduationCap, Laptop } from 'lucide-react';
import { SEASONAL_CAMPAIGNS } from '../data/fnacData';

interface SeasonalCampaignMatrixProps {
  darkMode: boolean;
  onExploreCampaign: (campaignTitle: string) => void;
}

export function SeasonalCampaignMatrix({ darkMode, onExploreCampaign }: SeasonalCampaignMatrixProps) {
  return (
    <section id="seasonal-campaigns-section" className={`py-12 sm:py-16 border-b transition-colors ${
      darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest font-extrabold text-amber-900 dark:text-[#E8A200] block mb-2">
            Campanhas Sazonais &amp; Eventos
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#111827] dark:text-white tracking-tight">
            Poupança com data marcada e bundles conjuntos
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#4B5563] dark:text-zinc-400">
            Aproveita as janelas promocionais de regresso às aulas e descontos de compra cruzada exclusivos da FNAC.
          </p>
        </div>

        {/* 3 Campaign Banners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SEASONAL_CAMPAIGNS.map((camp) => (
            <div
              key={camp.id}
              className={`group relative rounded-2xl overflow-hidden border flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 ${
                darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200'
              }`}
            >
              {/* Top Banner Image with Gradient Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={camp.image}
                  alt={camp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Dates badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-bold text-amber-300 border border-amber-400/30">
                  <Calendar className="w-3.5 h-3.5 text-[#E8A200]" />
                  <span>{camp.dates}</span>
                </div>

                {/* Big Discount Tag */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block px-2.5 py-1 rounded-lg text-xs font-black bg-[#E8A200] text-black tracking-tight shadow-xs">
                    {camp.discount}
                  </span>
                </div>
              </div>

              {/* Banner Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-lg text-[#111827] dark:text-white leading-tight group-hover:text-amber-900 dark:group-hover:text-[#E8A200] transition-colors">
                    {camp.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#4B5563] dark:text-zinc-400 leading-relaxed">
                    {camp.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <button
                    onClick={() => onExploreCampaign(camp.title)}
                    className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-zinc-100 hover:bg-[#E8A200] text-[#111827] hover:text-black border border-zinc-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>{camp.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
