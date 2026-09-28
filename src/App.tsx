import React, { useState, useEffect } from 'react';
import { UtilityHeader } from './components/UtilityHeader';
import { MainNavbar } from './components/MainNavbar';
import { FrictionRibbon } from './components/FrictionRibbon';
import { HeroSection } from './components/HeroSection';
import { TargetAudience } from './components/TargetAudience';
import { CoreSolutions } from './components/CoreSolutions';
import { CategoryHubs } from './components/CategoryHubs';
import { SeasonalCampaignMatrix } from './components/SeasonalCampaignMatrix';
import { ChegaPrimeiroShowcase } from './components/ChegaPrimeiroShowcase';
import { PersonalizationFeed } from './components/PersonalizationFeed';
import { ExpertAdviceSection } from './components/ExpertAdviceSection';
import { FaqSection } from './components/FaqSection';
import { FooterTaxonomy } from './components/FooterTaxonomy';
import { TradeInModal } from './components/TradeInModal';
import { StoreFinderModal } from './components/StoreFinderModal';
import { CartDrawer } from './components/CartDrawer';
import { CardBenefitsModal } from './components/CardBenefitsModal';
import { HelpModal } from './components/HelpModal';
import { FaqChatbot } from './components/FaqChatbot';
import { ProductItem, CartItem } from './types';
import { HERO_SLIDES, TECH_HIGHLIGHTS, PERSONALIZED_FEED } from './data/fnacData';
import { Check, X } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [tradeInDiscount, setTradeInDiscount] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals state
  const [isTradeInOpen, setIsTradeInOpen] = useState(false);
  const [isStoreFinderOpen, setIsStoreFinderOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCardBenefitsOpen, setIsCardBenefitsOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Notification Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (product: ProductItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showToast(`"${product.name}" adicionado ao teu cesto!`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
    showToast(wishlistIds.includes(productId) ? 'Removido dos favoritos' : 'Guardado nos teus favoritos!');
  };

  const handleApplyTradeInDiscount = (amount: number) => {
    setTradeInDiscount(amount);
    showToast(`Desconto de Retoma Restart de ${amount.toFixed(2)}€ aplicado ao cesto!`);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFilter = (catName: string) => {
    setSearchQuery(catName);
    scrollToSection('category-hubs-section');
    showToast(`Filtrando catálogo por "${catName}"`);
  };

  return (
    <div className={`min-h-screen transition-colors ${darkMode ? 'dark bg-zinc-950 text-zinc-100' : 'bg-[#FFFFFF] text-[#111827]'}`}>
      {/* 1. Utility Header & Global Search */}
      <UtilityHeader
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        onOpenStoreFinder={() => setIsStoreFinderOpen(true)}
        onOpenHelp={() => setIsHelpOpen(true)}
        onSelectCategory={handleSelectCategoryFilter}
      />

      {/* Main Sticky Navbar */}
      <MainNavbar
        darkMode={darkMode}
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        wishlistCount={wishlistIds.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenTradeIn={() => setIsTradeInOpen(true)}
        onOpenCardBenefits={() => setIsCardBenefitsOpen(true)}
      />

      {/* 2. Universal Value Proposition (UVP) / Friction Ribbon */}
      <FrictionRibbon
        darkMode={darkMode}
        onOpenStoreFinder={() => setIsStoreFinderOpen(true)}
      />

      {/* Search results banner if searching */}
      {searchQuery && (
        <div className="bg-amber-500/10 border-b border-amber-500/20 py-2.5 px-4 text-center text-xs font-bold text-amber-900 dark:text-amber-300 flex items-center justify-center gap-3">
          <span>A mostrar resultados para: "{searchQuery}"</span>
          <button
            onClick={() => setSearchQuery('')}
            className="text-xs underline hover:text-black dark:hover:text-white cursor-pointer"
          >
            Limpar filtro
          </button>
        </div>
      )}

      {/* 3. Hero Carousel (Trade-in / Device Launches) with Problem Statement & Compelling Headline */}
      <HeroSection
        darkMode={darkMode}
        onAddToCart={handleAddToCart}
        onOpenTradeIn={() => setIsTradeInOpen(true)}
        onScrollToExperts={() => scrollToSection('expert-advice-section')}
      />

      {/* Target Audience Section (2-3 User Personas) */}
      <TargetAudience
        darkMode={darkMode}
        onOpenTradeIn={() => setIsTradeInOpen(true)}
        onScrollToCampaigns={() => scrollToSection('seasonal-campaigns-section')}
        onScrollToCategories={() => scrollToSection('category-hubs-section')}
      />

      {/* Core Solutions & Services (3-5 Core Features Grid) */}
      <CoreSolutions
        darkMode={darkMode}
        onOpenTradeIn={() => setIsTradeInOpen(true)}
        onOpenCardBenefits={() => setIsCardBenefitsOpen(true)}
        onOpenStoreFinder={() => setIsStoreFinderOpen(true)}
        onScrollToExperts={() => scrollToSection('expert-advice-section')}
      />

      {/* 4. Quick-Access Category Hubs (Tech & Entertainment Bundles) */}
      <CategoryHubs
        darkMode={darkMode}
        onAddToCart={handleAddToCart}
        onSelectCategoryFilter={handleSelectCategoryFilter}
      />

      {/* 5. Seasonal / Event-Driven Banner Matrix */}
      <SeasonalCampaignMatrix
        darkMode={darkMode}
        onExploreCampaign={(title) => {
          showToast(`Campanha selecionada: ${title}`);
          scrollToSection('category-hubs-section');
        }}
      />

      {/* 6. "Chega Primeiro às Novidades" (Trend & Scarcity Showcase) */}
      <ChegaPrimeiroShowcase
        darkMode={darkMode}
        onAddToCart={handleAddToCart}
        onSelectCategoryFilter={handleSelectCategoryFilter}
      />

      {/* 7. Algorithmic Personalization Feed ("Esta seleção é única (como tu)...") */}
      <PersonalizationFeed
        darkMode={darkMode}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        wishlistIds={wishlistIds}
      />

      {/* 8. "Conselhos dos Nossos Experts" (Authority / Content-Led Commerce) */}
      <ExpertAdviceSection
        darkMode={darkMode}
        onSelectProductRecommendation={(product) => {
          setSearchQuery(product);
          scrollToSection('category-hubs-section');
        }}
      />

      {/* FAQ Section (10+ Q&A addressing customer objections) */}
      <FaqSection darkMode={darkMode} />

      {/* 9. Comprehensive Taxonomy & Footer Ecosystem */}
      <FooterTaxonomy
        darkMode={darkMode}
        onOpenTradeIn={() => setIsTradeInOpen(true)}
        onOpenStoreFinder={() => setIsStoreFinderOpen(true)}
        onOpenHelp={() => setIsHelpOpen(true)}
      />

      {/* Modals & Slide-over Drawers */}
      <TradeInModal
        isOpen={isTradeInOpen}
        onClose={() => setIsTradeInOpen(false)}
        onApplyTradeInToCart={handleApplyTradeInDiscount}
      />

      <StoreFinderModal
        isOpen={isStoreFinderOpen}
        onClose={() => setIsStoreFinderOpen(false)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        tradeInDiscount={tradeInDiscount}
      />

      <CardBenefitsModal
        isOpen={isCardBenefitsOpen}
        onClose={() => setIsCardBenefitsOpen(false)}
      />

      <HelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
        onScrollToFaq={() => scrollToSection('faq-section')}
        onOpenChatbot={() => setIsChatOpen(true)}
      />

      {/* Interactive FAQ Chatbot ("Assistente FNAC") */}
      <FaqChatbot
        darkMode={darkMode}
        isOpen={isChatOpen}
        onToggleOpen={setIsChatOpen}
        onOpenTradeIn={() => setIsTradeInOpen(true)}
        onOpenStoreFinder={() => setIsStoreFinderOpen(true)}
        onOpenCardBenefits={() => setIsCardBenefitsOpen(true)}
        onScrollToFaq={() => scrollToSection('faq-section')}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-22 sm:bottom-24 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold text-xs shadow-2xl border border-zinc-700 animate-in slide-in-from-bottom duration-200">
          <div className="w-5 h-5 rounded-full bg-[#E8A200] text-black flex items-center justify-center">
            <Check className="w-3 h-3 stroke-3" />
          </div>
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="ml-2 text-zinc-400 hover:text-white dark:hover:text-black"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
