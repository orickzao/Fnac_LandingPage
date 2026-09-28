import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/fnacData';

interface FaqSectionProps {
  darkMode: boolean;
}

export function FaqSection({ darkMode }: FaqSectionProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-trade-in');
  const [activeCategory, setActiveCategory] = useState<string>('Todas');
  const [searchFilter, setSearchFilter] = useState('');

  const categories = ['Todas', 'Logística', 'Retoma & Preços', 'Cartão FNAC', 'Conselhos & Tecnologia', 'Garantias'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'Todas' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchFilter.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq-section" className={`py-12 sm:py-16 border-b transition-colors ${
      darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-900 dark:text-[#E8A200] uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#E8A200]" />
            <span>Perguntas Frequentes (FAQ)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#111827] dark:text-white tracking-tight">
            Tudo o que precisas de saber sobre encomendas, retomas e entregas
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#4B5563] dark:text-zinc-400">
            Respostas diretas às principais dúvidas de envios, levantamentos, financiamento e garantias.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Pesquisar nas perguntas frequentes (ex: portes, retoma, manuais, garantia)..."
              className={`w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-[#E8A200] ${
                darkMode
                  ? 'bg-zinc-900 border-zinc-700 text-zinc-100 placeholder-zinc-500'
                  : 'bg-white border-zinc-300 text-[#111827] placeholder-[#6B7280]'
              }`}
            />
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#111111] text-white shadow-xs font-bold border border-[#111111]'
                    : darkMode
                    ? 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                    : 'bg-[#F3F4F6] text-[#4B5563] hover:text-[#111827] border border-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List (12 items) */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-xs text-[#6B7280] rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800">
              Nenhuma pergunta encontrada com o termo "{searchFilter}".
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all ${
                    isOpen
                      ? darkMode
                        ? 'bg-zinc-900 border-zinc-700 shadow-sm'
                        : 'bg-white border-zinc-300 shadow-sm'
                      : darkMode
                      ? 'bg-zinc-900/60 border-zinc-800/80 hover:border-zinc-700'
                      : 'bg-white border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A200] shrink-0" />
                      <span className="font-bold text-xs sm:text-sm text-[#111827] dark:text-zinc-100">
                        {faq.question}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[#6B7280] dark:text-zinc-400 hidden sm:inline-block">
                        {faq.category}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-600 dark:text-[#E8A200]' : ''
                      }`} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4B5563] dark:text-zinc-300 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/60 mt-1">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Live Support Prompt */}
        <div className="mt-8 p-4 rounded-2xl bg-amber-100 border border-amber-300 dark:bg-amber-950/20 dark:border-amber-800 text-center flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2.5 text-xs text-amber-950 dark:text-amber-200 text-left font-medium">
            <MessageSquare className="w-4 h-4 text-[#B47C00] dark:text-[#E8A200] shrink-0" />
            <span>Ficaste com alguma dúvida técnica sobre um equipamento ou encomenda?</span>
          </div>
          <a
            href="tel:210351000"
            className="px-4 py-2 rounded-xl bg-[#E8A200] hover:bg-amber-500 text-black font-bold text-xs shrink-0 transition-colors shadow-xs"
          >
            Ligar para 210 351 000
          </a>
        </div>
      </div>
    </section>
  );
}
