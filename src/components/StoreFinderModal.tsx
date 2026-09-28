import React, { useState } from 'react';
import { X, MapPin, Store, Clock, Phone, CheckCircle, Search, Wrench } from 'lucide-react';
import { FNAC_STORES } from '../data/fnacData';

interface StoreFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StoreFinderModal({ isOpen, onClose }: StoreFinderModalProps) {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredStores = FNAC_STORES.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative max-w-2xl w-full rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-2xl z-10 max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-amber-500/10 text-[#E8A200]">
            <Store className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white tracking-tight">
              Encontrar uma Loja FNAC
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Levantamento gratuito em 1h e mais de 2.000 pontos de recolha em Portugal.
            </p>
          </div>
        </div>

        {/* Search input */}
        <div className="relative mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Pesquisar por cidade ou centro comercial (ex: Colombo, Porto, Braga)..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#E8A200]"
          />
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>

        {/* Stores list */}
        <div className="space-y-3">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/40 hover:border-[#E8A200] transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-zinc-950 dark:text-white">
                    {store.name}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300">
                    {store.city}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {store.clickAndCollect1h && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
                      <CheckCircle className="w-3 h-3" />
                      <span>Click & Collect 1h</span>
                    </span>
                  )}
                  {store.hasRepairCenter && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400">
                      <Wrench className="w-3 h-3" />
                      <span>Clínica FNAC</span>
                    </span>
                  )}
                </div>
              </div>

              <p className="text-xs text-zinc-600 dark:text-zinc-400 flex items-start gap-1.5 mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                <span>{store.address}, {store.postalCode}</span>
              </p>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 text-xs">
                <div className="flex items-center gap-1.5 text-zinc-500">
                  <Clock className="w-3.5 h-3.5 text-[#E8A200]" />
                  <span>{store.openingHours}</span>
                </div>
                <a
                  href={`tel:${store.phone.replace(/\s+/g, '')}`}
                  className="font-bold text-[#E8A200] hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  <span>{store.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
