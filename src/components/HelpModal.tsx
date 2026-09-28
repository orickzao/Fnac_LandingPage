import React from 'react';
import { X, HelpCircle, Phone, Mail, MessageSquare, MapPin, FileText } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollToFaq: () => void;
  onOpenChatbot?: () => void;
}

export function HelpModal({ isOpen, onClose, onScrollToFaq, onOpenChatbot }: HelpModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative max-w-md w-full rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-2xl z-10">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="p-3 rounded-2xl bg-amber-500/10 text-[#E8A200]">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-black text-zinc-950 dark:text-white">
              Apoio ao Cliente FNAC
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Estamos disponíveis para te ajudar em todos os passos.
            </p>
          </div>
        </div>

        <div className="space-y-3 text-xs">
          {onOpenChatbot && (
            <button
              onClick={() => {
                onClose();
                onOpenChatbot();
              }}
              className="w-full text-left p-3.5 rounded-2xl border border-amber-500/30 bg-amber-500/10 flex items-center gap-3 hover:border-[#E8A200] transition-colors group cursor-pointer"
            >
              <div className="p-2 rounded-xl bg-[#E8A200] text-black">
                <MessageSquare className="w-4 h-4 fill-black" />
              </div>
              <div>
                <span className="font-bold text-zinc-900 dark:text-zinc-100 block">
                  Conversar com o Assistente Virtual (FAQ Bot)
                </span>
                <span className="text-zinc-500 text-[11px]">
                  Respostas instantâneas a retomas, entregas e condições
                </span>
              </div>
            </button>
          )}

          <a
            href="tel:210351000"
            className="p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 flex items-center gap-3 hover:border-[#E8A200] transition-colors group"
          >
            <div className="p-2 rounded-xl bg-zinc-200 dark:bg-zinc-700 text-[#E8A200]">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-zinc-900 dark:text-zinc-100 block">
                Linha de Apoio & Encomendas
              </span>
              <span className="text-zinc-500 text-[11px]">
                210 351 000 (Seg a Sáb: 09h às 21h)
              </span>
            </div>
          </a>

          <button
            onClick={() => {
              onClose();
              onScrollToFaq();
            }}
            className="w-full text-left p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 flex items-center gap-3 hover:border-[#E8A200] transition-colors group"
          >
            <div className="p-2 rounded-xl bg-zinc-200 dark:bg-zinc-700 text-[#E8A200]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-zinc-900 dark:text-zinc-100 block">
                Perguntas Frequentes & Devoluções
              </span>
              <span className="text-zinc-500 text-[11px]">
                Consulta as 12 respostas imediatas do FAQ
              </span>
            </div>
          </button>
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-center">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-800 text-white font-bold text-xs hover:bg-[#E8A200] hover:text-black transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
