import React, { useState } from 'react';
import { X, RefreshCw, Smartphone, Laptop, Watch, Tablet, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface TradeInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyTradeInToCart?: (creditAmount: number) => void;
}

export function TradeInModal({ isOpen, onClose, onApplyTradeInToCart }: TradeInModalProps) {
  const [deviceType, setDeviceType] = useState<'smartphone' | 'watch' | 'laptop' | 'tablet'>('smartphone');
  const [brand, setBrand] = useState('Apple');
  const [model, setModel] = useState('iPhone 15 Pro 256GB');
  const [condition, setCondition] = useState<'excelente' | 'bom' | 'marcas'>('excelente');
  const [applied, setApplied] = useState(false);

  if (!isOpen) return null;

  // Valuation algorithm simulation based on PRD anchor numbers
  let baseValue = 650;
  if (model.includes('15 Pro')) baseValue = 754.01;
  else if (model.includes('14 Pro')) baseValue = 540.00;
  else if (model.includes('Galaxy S24')) baseValue = 680.00;
  else if (model.includes('Watch Series 9')) baseValue = 240.00;
  else if (model.includes('MacBook')) baseValue = 820.00;

  const conditionMultiplier = condition === 'excelente' ? 1.0 : condition === 'bom' ? 0.85 : 0.65;
  const estimatedValue = Math.round(baseValue * conditionMultiplier * 100) / 100;
  const targetNewPrice = 1499.00;
  const priceAfterTradeIn = Math.max(0, targetNewPrice - estimatedValue);

  const handleApply = () => {
    setApplied(true);
    if (onApplyTradeInToCart) {
      onApplyTradeInToCart(estimatedValue);
    }
    setTimeout(() => {
      onClose();
      setApplied(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />
      
      <div className="relative max-w-xl w-full rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <RefreshCw className="w-6 h-6 animate-spin-slow" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white tracking-tight">
              Simulador FNAC Restart
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Avalia o teu equipamento usado e desconta o valor no novo lançamento.
            </p>
          </div>
        </div>

        {/* Step 1: Device Type */}
        <div className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-zinc-800 dark:text-zinc-200 block mb-2">
              1. Seleciona o Tipo de Equipamento
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { id: 'smartphone', label: 'Telemóvel', icon: Smartphone },
                { id: 'watch', label: 'Relógio', icon: Watch },
                { id: 'laptop', label: 'Portátil', icon: Laptop },
                { id: 'tablet', label: 'Tablet', icon: Tablet },
              ].map((item) => {
                const IconComponent = item.icon;
                const isSelected = deviceType === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setDeviceType(item.id as any)}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                      isSelected
                        ? 'border-[#E8A200] bg-amber-500/10 text-black dark:text-white font-bold ring-1 ring-[#E8A200]'
                        : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 text-[#E8A200]" />
                    <span className="text-[11px]">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Brand and Model */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-zinc-800 dark:text-zinc-200 block mb-1.5">
                2. Marca
              </label>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full p-2.5 rounded-xl border bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#E8A200]"
              >
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Xiaomi">Xiaomi</option>
                <option value="Asus">Asus</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-zinc-800 dark:text-zinc-200 block mb-1.5">
                3. Modelo
              </label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full p-2.5 rounded-xl border bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#E8A200]"
              >
                <option value="iPhone 15 Pro 256GB">iPhone 15 Pro 256GB</option>
                <option value="iPhone 14 Pro 128GB">iPhone 14 Pro 128GB</option>
                <option value="Galaxy S24 Ultra 256GB">Galaxy S24 Ultra 256GB</option>
                <option value="Apple Watch Series 9 45mm">Apple Watch Series 9 45mm</option>
                <option value="MacBook Air M2 13''">MacBook Air M2 13''</option>
              </select>
            </div>
          </div>

          {/* Step 3: Condition */}
          <div>
            <label className="font-bold text-zinc-800 dark:text-zinc-200 block mb-1.5">
              4. Estado de Conservação
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'excelente', label: 'Excelente', desc: 'Sem riscos, 100% operacional' },
                { id: 'bom', label: 'Bom', desc: 'Ligeiros sinais normais de uso' },
                { id: 'marcas', label: 'Marcas de Uso', desc: 'Riscos visíveis mas funcional' },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCondition(c.id as any)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    condition === c.id
                      ? 'border-emerald-500 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 ring-1 ring-emerald-500'
                      : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300'
                  }`}
                >
                  <span className="font-bold block text-xs">{c.label}</span>
                  <span className="text-[10px] text-zinc-500 block leading-tight">{c.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Calculation Summary Card */}
          <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-700">
              <span className="font-bold text-zinc-700 dark:text-zinc-300">
                Valor de Retoma Estimado:
              </span>
              <span className="font-black text-2xl text-emerald-600 dark:text-emerald-400">
                +{estimatedValue.toFixed(2)}€
              </span>
            </div>

            <div className="pt-3 space-y-1.5">
              <div className="flex justify-between text-zinc-500">
                <span>PVP Novo iPhone 18 Pro:</span>
                <span className="line-through">{targetNewPrice.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between font-black text-sm text-zinc-950 dark:text-white">
                <span>Preço Final com Abatimento FNAC Restart:</span>
                <span className="text-[#E8A200] text-base">
                  {priceAfterTradeIn.toFixed(2)}€
                </span>
              </div>
            </div>
            
            <p className="mt-3 text-[10px] text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Avaliação garantida por 7 dias. Entrega o teu usado numa loja FNAC ou envia gratuitamente.</span>
            </p>
          </div>

          {/* Apply Button */}
          <div className="pt-2">
            <button
              onClick={handleApply}
              disabled={applied}
              className={`w-full py-3.5 px-4 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                applied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#E8A200] hover:bg-[#d69500] text-black shadow-md'
              }`}
            >
              {applied ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  <span>Crédito de {estimatedValue.toFixed(2)}€ Aplicado com Sucesso!</span>
                </>
              ) : (
                <>
                  <span>Aplicar Desconto ao Novo iPhone 18 Pro</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
