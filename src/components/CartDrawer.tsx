import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Truck, CheckCircle, Tag, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  tradeInDiscount: number;
}

export function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  tradeInDiscount
}: CartDrawerProps) {
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [checkoutFinished, setCheckoutFinished] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = cartItems.reduce((acc, item) => acc + item.product.promoPrice * item.quantity, 0);
  const couponDiscount = couponApplied ? 5.00 : 0.00;
  const shippingFee = rawSubtotal >= 15 || rawSubtotal === 0 ? 0.00 : 3.99;
  const finalTotal = Math.max(0, rawSubtotal - tradeInDiscount - couponDiscount + shippingFee);
  const freeShippingThreshold = 15.00;
  const progressToFreeShipping = Math.min(100, (rawSubtotal / freeShippingThreshold) * 100);

  const applyCoupon = () => {
    if (couponCode.toUpperCase().trim() === 'OFERTA5') {
      setCouponApplied(true);
    }
  };

  const handleCheckout = () => {
    setCheckoutFinished(true);
    setTimeout(() => {
      setCheckoutFinished(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#E8A200]" />
              <h2 className="font-extrabold text-base text-zinc-950 dark:text-white">
                O Teu Cesto ({cartItems.reduce((a, b) => a + b.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Ribbon */}
          <div className="p-3.5 bg-amber-500/10 border-b border-amber-500/20 text-xs">
            <div className="flex items-center justify-between font-bold text-amber-900 dark:text-amber-300 mb-1.5">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#E8A200]" />
                {rawSubtotal >= freeShippingThreshold ? (
                  <span>Parabéns! Tens Portes Grátis garantidos.</span>
                ) : (
                  <span>Faltam {(freeShippingThreshold - rawSubtotal).toFixed(2)}€ para Portes Grátis</span>
                )}
              </span>
              <span>{Math.round(progressToFreeShipping)}%</span>
            </div>
            <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#E8A200] h-full transition-all duration-300 rounded-full"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 text-zinc-400">
                <ShoppingBag className="w-12 h-12 mx-auto stroke-1 mb-3 text-zinc-300 dark:text-zinc-700" />
                <p className="font-bold text-sm text-zinc-800 dark:text-zinc-200">O teu cesto está vazio</p>
                <p className="text-xs text-zinc-500 mt-1">Explora os bundles e novidades com retoma na página.</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 p-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/40 text-xs"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-xl object-cover bg-zinc-100 dark:bg-zinc-800 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] text-zinc-400 font-medium">{item.product.category}</span>
                    <h3 className="font-bold text-xs text-zinc-950 dark:text-white truncate">
                      {item.product.name}
                    </h3>
                    {item.product.bundleAddon && (
                      <span className="text-[10px] text-[#E8A200] font-semibold block truncate">
                        {item.product.bundleAddon}
                      </span>
                    )}

                    <div className="flex items-center justify-between mt-2.5">
                      <span className="font-black text-xs text-zinc-900 dark:text-white">
                        {(item.product.promoPrice * item.quantity).toFixed(2)}€
                      </span>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-700 rounded-lg px-2 py-0.5 bg-white dark:bg-zinc-800">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="text-zinc-400 hover:text-black dark:hover:text-white font-bold"
                        >
                          -
                        </button>
                        <span className="font-bold text-xs px-1">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="text-zinc-400 hover:text-black dark:hover:text-white font-bold"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-zinc-400 hover:text-red-500 transition-colors p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Coupon Code Input */}
            {cartItems.length > 0 && (
              <div className="pt-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Código cupão (usa 'OFERTA5')"
                    className="flex-1 px-3 py-2 text-xs rounded-xl border bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 uppercase font-mono"
                  />
                  <button
                    onClick={applyCoupon}
                    className="px-3 py-2 rounded-xl bg-zinc-900 hover:bg-black dark:bg-zinc-700 text-white font-bold text-xs"
                  >
                    Aplicar
                  </button>
                </div>
                {couponApplied && (
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 mt-1 block">
                    Cupão OFERTA5 aplicado: -5,00€ de desconto!
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Footer Order Summary */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/80 text-xs space-y-2">
              <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                <span>Subtotal:</span>
                <span>{rawSubtotal.toFixed(2)}€</span>
              </div>

              {tradeInDiscount > 0 && (
                <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-bold">
                  <span>Abatimento Retoma FNAC Restart:</span>
                  <span>-{tradeInDiscount.toFixed(2)}€</span>
                </div>
              )}

              {couponDiscount > 0 && (
                <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-bold">
                  <span>Desconto Exclusivo Online (OFERTA5):</span>
                  <span>-{couponDiscount.toFixed(2)}€</span>
                </div>
              )}

              <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                <span>Portes de Envio:</span>
                <span>{shippingFee === 0 ? <span className="text-emerald-600 font-bold">GRÁTIS</span> : `${shippingFee.toFixed(2)}€`}</span>
              </div>

              <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex justify-between font-black text-base text-zinc-950 dark:text-white">
                <span>Total a Pagar:</span>
                <span className="text-[#E8A200]">{finalTotal.toFixed(2)}€</span>
              </div>

              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 flex items-center gap-1 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Pagamento 100% seguro com MB WAY, Multibanco ou Cartão FNAC em até 10x sem juros.</span>
              </p>

              <button
                onClick={handleCheckout}
                disabled={checkoutFinished}
                className={`w-full py-3.5 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 transition-all mt-2 cursor-pointer ${
                  checkoutFinished
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#E8A200] hover:bg-[#d49400] text-black shadow-md'
                }`}
              >
                {checkoutFinished ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    <span>Encomenda Confirmada! Redirecionando...</span>
                  </>
                ) : (
                  <>
                    <span>Concluir Encomenda Segura</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
