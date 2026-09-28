export interface ProductItem {
  id: string;
  name: string;
  category: string;
  tag?: string;
  badge?: string;
  originalPrice?: number;
  promoPrice: number;
  tradeInPrice?: number;
  tradeInAnchorText?: string;
  rating?: number;
  reviewsCount?: number;
  bundleAddon?: string;
  image: string;
  isPreOrder?: boolean;
  stockLeft?: number;
  description?: string;
  merchantCount?: number;
  merchantMinPrice?: number;
}

export interface Persona {
  id: string;
  role: string;
  subtitle: string;
  avatarIcon: string;
  tagline: string;
  keyFrustration: string;
  desiredOutcome: string;
  idealSolution: string;
}

export interface FeatureService {
  id: string;
  name: string;
  oneLineBenefit: string;
  iconName: string;
  highlightTag: string;
  detail: string;
}

export interface ExpertArticle {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  excerpt: string;
  fullBody: string[];
  author: string;
  expertRole: string;
  recommendedProducts: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  category: 'Logística' | 'Retoma & Preços' | 'Cartão FNAC' | 'Conselhos & Tecnologia' | 'Garantias';
  answer: string;
}

export interface StoreLocation {
  id: string;
  name: string;
  city: string;
  address: string;
  postalCode: string;
  openingHours: string;
  clickAndCollect1h: boolean;
  phone: string;
  hasRepairCenter: boolean;
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
  selectedBundle?: string;
}
