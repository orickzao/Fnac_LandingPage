import React from 'react';
import { X, CreditCard, Sparkles, CheckCircle2, Gift, Percent, ShieldCheck } from 'lucide-react';

interface CardBenefitsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CardBenefitsModal({ isOpen, onClose }: CardBenefitsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative max-w-lg w-full rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-2xl z-10 max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-amber-500/15 text-[#E8A200]">
            <CreditCard className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white tracking-tight">
              Vantagens do Cartão FNAC
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              O clube de vantagens culturais e tecnológicas mais premiado de Portugal.
            </p>
          </div>
        </div>

        <div className="space-y-3.5 text-xs">
          <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
            <Percent className="w-4 h-4 text-[#E8A200] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-zinc-900 dark:text-zinc-100 block">
                10% Desconto Permanente em Livros
              </span>
              <span className="text-zinc-600 dark:text-zinc-400 text-[11px]">
                Desconto imediato em todos os livros físicos e eBooks durante todo o ano.
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
            <Gift className="w-4 h-4 text-[#E8A200] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-zinc-900 dark:text-zinc-100 block">
                Oferta de 5€ em Saldo a cada 100€
              </span>
              <span className="text-zinc-600 dark:text-zinc-400 text-[11px]">
                Acumula saldo na tua conta para descontar em compras futuras de tecnologia ou entretenimento.
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#E8A200] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-zinc-900 dark:text-zinc-100 block">
                Portes Grátis sem Valor Mínimo
              </span>
              <span className="text-zinc-600 dark:text-zinc-400 text-[11px]">
                Entrega ao domicílio gratuita em encomendas de qualquer valor em Fnac.pt.
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-[#E8A200] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-zinc-900 dark:text-zinc-100 block">
                Financiamento em até 10x Sem Juros
              </span>
              <span className="text-zinc-600 dark:text-zinc-400 text-[11px]">
                Condições exclusivas de crédito sem juros para aquisição de portáteis, telemóveis e som.
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-[#E8A200] hover:bg-[#d69500] text-black font-extrabold text-xs transition-colors cursor-pointer"
          >
            Aderir ao Cartão FNAC (15€ / 3 Anos)
          </button>
        </div>
      </div>
    </div>
  );
}
