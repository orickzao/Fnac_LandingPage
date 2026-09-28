import React from 'react';
import { Cpu, GraduationCap, BookOpen, AlertCircle, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { PERSONAS } from '../data/fnacData';

interface TargetAudienceProps {
  darkMode: boolean;
  onOpenTradeIn: () => void;
  onScrollToCampaigns: () => void;
  onScrollToCategories: () => void;
}

export function TargetAudience({
  darkMode,
  onOpenTradeIn,
  onScrollToCampaigns,
  onScrollToCategories
}: TargetAudienceProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#E8A200]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-blue-500" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-emerald-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#E8A200]" />;
    }
  };

  const getPersonaAction = (id: string) => {
    if (id === 'persona-tech') return onOpenTradeIn;
    if (id === 'persona-student') return onScrollToCampaigns;
    return onScrollToCategories;
  };

  const getPersonaActionLabel = (id: string) => {
    if (id === 'persona-tech') return 'Simular Retoma do Equipamento';
    if (id === 'persona-student') return 'Ver Campanhas de Regresso';
    return 'Explorar Livros & Cultura';
  };

  return (
    <section className={`py-12 sm:py-16 border-b transition-colors ${
      darkMode ? 'bg-zinc-950/60 border-zinc-800' : 'bg-white border-zinc-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-extrabold text-amber-900 dark:text-[#E8A200] block mb-2">
            Target Audience &amp; Quem Servimos
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] dark:text-white tracking-tight">
            Desenhado para quem vive a tecnologia, o saber e a criatividade
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4B5563] dark:text-zinc-400">
            A FNAC combina conveniência omnicanal, economia circular e curadoria crítica para resolver as maiores frustrações de cada perfil de cliente.
          </p>
        </div>

        {/* 3 Personas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PERSONAS.map((persona) => {
            const handleAction = getPersonaAction(persona.id);
            const actionLabel = getPersonaActionLabel(persona.id);

            return (
              <div
                key={persona.id}
                className={`flex flex-col justify-between rounded-2xl border p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1 shadow-xs hover:shadow-md ${
                  darkMode
                    ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
                    : 'bg-white border-zinc-200 hover:border-zinc-300'
                }`}
              >
                <div>
                  {/* Persona Header & Badge */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className={`p-3 rounded-xl ${
                      darkMode ? 'bg-zinc-800 border border-zinc-700' : 'bg-zinc-100 border border-zinc-200'
                    }`}>
                      {getIcon(persona.avatarIcon)}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[#111827] dark:text-white leading-tight">
                        {persona.role}
                      </h3>
                      <span className="text-xs text-[#4B5563] dark:text-zinc-400 font-medium">
                        {persona.subtitle}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs font-bold text-amber-950 dark:text-amber-200 bg-amber-100 dark:bg-amber-950/30 px-3 py-1.5 rounded-lg border border-amber-300 dark:border-amber-800/60 mb-5">
                    "{persona.tagline}"
                  </p>

                  {/* Frustration Block */}
                  <div className="space-y-4 text-xs">
                    <div className="p-3.5 rounded-xl bg-red-50/70 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30">
                      <div className="flex items-center gap-1.5 font-bold text-red-900 dark:text-red-300 mb-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>A Frustração Principal</span>
                      </div>
                      <p className="text-[#4B5563] dark:text-zinc-300 leading-relaxed">
                        {persona.keyFrustration}
                      </p>
                    </div>

                    {/* Desired Outcome Block */}
                    <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-900 dark:text-emerald-300 mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>Resultado Desejado</span>
                      </div>
                      <p className="text-[#4B5563] dark:text-zinc-300 leading-relaxed">
                        {persona.desiredOutcome}
                      </p>
                    </div>

                    {/* FNAC Solution */}
                    <div className="pt-2 text-zinc-600 dark:text-zinc-400">
                      <span className="font-bold text-[#111827] dark:text-zinc-200 block mb-0.5">
                        Solução FNAC Dedicada:
                      </span>
                      <span className="text-[#4B5563] dark:text-zinc-400">{persona.idealSolution}</span>
                    </div>
                  </div>
                </div>

                {/* Persona Action CTA */}
                <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <button
                    onClick={handleAction}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center border-2 border-zinc-200 dark:border-zinc-700 hover:border-[#111827] dark:hover:border-zinc-300 text-[#111827] dark:text-white bg-zinc-50 dark:bg-zinc-800 hover:bg-white transition-all flex items-center justify-center gap-1.5 group cursor-pointer shadow-xs"
                  >
                    <span>{actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E8A200] group-hover:translate-x-1 transition-transform" />
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
