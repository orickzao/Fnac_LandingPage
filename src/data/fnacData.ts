import { ProductItem, Persona, FeatureService, ExpertArticle, FaqItem, StoreLocation } from '../types';

export const FNAC_DEPARTMENTS = [
  'Outlet e Recondicionados',
  'Livros e eBooks',
  'Papelaria e Gifts',
  'Música, CDs, Vinil e Gira-Discos',
  'Bilheteira',
  'Merchandising e Filmes',
  'Gaming & Consolas',
  'Jogos e Brinquedos',
  'Telemóveis e Conectáveis',
  'Informática & Acessórios',
  'Fotografia e Vídeo',
  'TV e Home Cinema',
  'Som e Auscultadores',
  'Cozinha e Eletrodomésticos',
  'Beleza e Saúde',
  'Casa e Decoração',
  'Bricolage, Jardim e Pets',
  'Desporto e Mobilidade Elétrica',
  'Instrumentos Musicais',
  'Nature & Découvertes',
  'Packs Experiência',
  'Serviços FNAC',
  'Blog Expert FNAC',
  'Cultura FNAC'
];

export const HERO_SLIDES: ProductItem[] = [
  {
    id: 'hero-iphone-18-pro',
    name: 'Apple iPhone 18 Pro',
    category: 'Telemóveis e Conectáveis',
    tag: 'Novidade FNAC',
    badge: 'Retoma com Abatimento Imediato',
    originalPrice: 1499.00,
    promoPrice: 744.99,
    tradeInPrice: 744.99,
    tradeInAnchorText: 'Desde 744,99€ em vez de 1.499€ na retoma',
    rating: 4.9,
    reviewsCount: 342,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=80',
    description: 'Chassi em titânio aeroespacial de 5ª geração, motor neuronal com Apple Intelligence avançada e sistema de câmaras penta-prisma.',
    isPreOrder: true,
    bundleAddon: 'Oferta de 3 meses Apple Music + 10% em capa oficial'
  },
  {
    id: 'hero-watch-series-12',
    name: 'Apple Watch Series 12',
    category: 'Telemóveis e Conectáveis',
    tag: 'Lançamento Mundial',
    badge: 'Retoma de Relógio Inteligente',
    originalPrice: 549.99,
    promoPrice: 309.99,
    tradeInPrice: 309.99,
    tradeInAnchorText: 'Desde 309,99€ na retoma de Apple Watch antigo',
    rating: 4.8,
    reviewsCount: 198,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=1000&q=80',
    description: 'Monitorização avançada de tensão arterial, ecrã OLED ultra-brilhante de 3000 nits e bateria de 72 horas em modo poupança.',
    isPreOrder: false,
    bundleAddon: 'Braçadeira Sport Loop extra por +15€'
  },
  {
    id: 'hero-iphone-duo',
    name: 'Apple iPhone Duo Fold Edition',
    category: 'Telemóveis e Conectáveis',
    tag: 'Exclusivo Pré-Venda',
    badge: 'Garantia Chega Primeiro',
    originalPrice: 1899.00,
    promoPrice: 1149.00,
    tradeInPrice: 1149.00,
    tradeInAnchorText: 'Desde 1.149€ em vez de 1.899€ com Restart',
    rating: 5.0,
    reviewsCount: 89,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80',
    description: 'A revolução do formato duplo com ecrã expansível ProMotion 144Hz e bateria de grafeno de longa duração.',
    isPreOrder: true,
    bundleAddon: 'Carregador MagSafe Duo incluído na compra conjunta'
  }
];

export const PERSONAS: Persona[] = [
  {
    id: 'persona-tech',
    role: 'O Entusiasta Tech & Early Adopter',
    subtitle: 'Profissional digital e vanguardista',
    avatarIcon: 'Cpu',
    tagline: 'Quer o topo de gama no dia de lançamento sem pagar o PVP integral.',
    keyFrustration: 'Os novos smartphones topo de gama custam mais de 1.499€ e os aparelhos anteriores perdem valor desnecessariamente esquecidos numa gaveta.',
    desiredOutcome: 'Garantir a primeira vaga de entrega dos novos iPhones e dobráveis com abatimento substancial imediato da retoma sem burocracias.',
    idealSolution: 'Retoma Inteligente FNAC Restart com estimativa instantânea e garantia de entrega antecipada "Chega Primeiro".'
  },
  {
    id: 'persona-student',
    role: 'O Estudante Universitário & Criativo',
    subtitle: 'Ensino superior & jovens criadores',
    avatarIcon: 'GraduationCap',
    tagline: 'Precisa de equipamento produtivo completo dentro do orçamento.',
    keyFrustration: 'Comprar um portátil novo, manuais universitários, mochila e acessórios separadamente estoura o limite orçamental no início do semestre.',
    desiredOutcome: 'Packs com acessórios essenciais já incluídos ("+ Mochila + Rato" ou "+ Pen + Teclado") e descontos sazonais até -40% em livros técnicos.',
    idealSolution: 'Campanhas de Regresso Universitário, bundles chave-na-mão e financiamento flexível em prestações com Cartão FNAC.'
  },
  {
    id: 'persona-culture',
    role: 'O Book Lover & Colecionador Cultural',
    subtitle: 'Leitor voraz e apaixonado por música',
    avatarIcon: 'BookOpen',
    tagline: 'Valoriza curadoria crítica e compras sem taxas de entrega surpresa.',
    keyFrustration: 'Pagar portes de envio em livros pontuais e faltar a entregas durante o dia de trabalho por não estar em casa para assinar.',
    desiredOutcome: 'Portes 100% gratuitos a partir de 15€, levantamento flexível após o expediente em mais de 2.000 pontos PUDO e recomendações literárias especializadas.',
    idealSolution: 'Fricção zero na entrega, rede capilar PUDO nacional e artigos de curadoria crítica da Revista ESTANTE.'
  }
];

export const CORE_FEATURES: FeatureService[] = [
  {
    id: 'feat-restart',
    name: 'FNAC Restart: Retoma Inteligente',
    oneLineBenefit: 'Transforma os teus smartphones e tablets usados num desconto direto até 754€ no teu próximo equipamento.',
    iconName: 'RefreshCw',
    highlightTag: 'Economia Circular',
    detail: 'Avaliação transparente online ou em loja física. O crédito é aplicado de imediato no preço do novo produto sem esperas bancárias.'
  },
  {
    id: 'feat-bundles',
    name: 'Bundles de Alto Valor Adicionado',
    oneLineBenefit: 'Recebe acessórios essenciais como mochilas, capas, ratos e pens digitais integrados no mesmo valor.',
    iconName: 'Layers',
    highlightTag: 'Zero Custos Ocultos',
    detail: 'Packs exclusivos com periféricos originais concebidos para utilização imediata sem necessidade de compras complementares.'
  },
  {
    id: 'feat-logistics',
    name: 'Logística Omnicanal Sem Atrito',
    oneLineBenefit: 'Levanta a tua encomenda grátis em 1h na loja mais próxima ou em mais de 2.000 pontos de recolha alargados.',
    iconName: 'Truck',
    highlightTag: 'Conveniência Total',
    detail: 'Portes grátis em livros a partir de 15€ e para todos os membros Aderentes. Recolhas após o horário de trabalho perto de tua casa.'
  },
  {
    id: 'feat-experts',
    name: 'Curadoria dos Nossos Experts',
    oneLineBenefit: 'Decide com confiança absoluta através de ensaios técnicos e recomendações de livreiros e especialistas.',
    iconName: 'Award',
    highlightTag: 'Autoridade Independente',
    detail: 'Conselhos práticos que desmistificam se deves comprar portáteis com IA, qual o jogo ideal para o teu estilo ou os livros indispensáveis.'
  },
  {
    id: 'feat-card',
    name: 'Cartão FNAC & Programa de Fidelização',
    oneLineBenefit: 'Ganha 5€ de oferta por cada patamar de compras e usufrui de bilheteira VIP com 10% de desconto permanente.',
    iconName: 'CreditCard',
    highlightTag: 'Vantagens Exclusivas',
    detail: 'Acesso a dias de promoção exclusiva online, portes gratuitos sem valor mínimo e condições especiais de financiamento sem juros.'
  }
];

export const TECH_HIGHLIGHTS: ProductItem[] = [
  {
    id: 'tech-oppo',
    name: 'Oppo A6k 256GB',
    bundleAddon: '+ Auriculares Enco Buds2 Grátis',
    category: 'Telemóveis e Conectáveis',
    originalPrice: 249.99,
    promoPrice: 189.99,
    rating: 4.6,
    reviewsCount: 84,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80',
    badge: 'Bundle Exclusivo'
  },
  {
    id: 'tech-galaxy-watch',
    name: 'Samsung Galaxy Watch 7',
    bundleAddon: 'Oferta de Bracelete Desportiva',
    category: 'Telemóveis e Conectáveis',
    originalPrice: 329.99,
    promoPrice: 269.99,
    rating: 4.8,
    reviewsCount: 112,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80',
    badge: 'Top Vendas'
  },
  {
    id: 'tech-asus-vb',
    name: 'Asus Vivobook Go 15,6" R5 16GB 512GB SSD',
    bundleAddon: 'Inclui 1 Ano Microsoft 365',
    category: 'Informática',
    originalPrice: 649.99,
    promoPrice: 499.99,
    rating: 4.7,
    reviewsCount: 156,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80',
    badge: 'Ideal Estudantes'
  },
  {
    id: 'tech-lenovo-tab',
    name: 'Idea Tab 256GB WiFi',
    bundleAddon: '+ Pen Ativa + Teclado Magnético',
    category: 'Informática',
    originalPrice: 389.99,
    promoPrice: 299.99,
    rating: 4.9,
    reviewsCount: 97,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80',
    badge: 'Pack Completo'
  },
  {
    id: 'tech-ultragear',
    name: 'LG UltraGear OLED 27" 240Hz QHD',
    bundleAddon: 'Cabo DisplayPort Pro Gratuito',
    category: 'Gaming',
    originalPrice: 899.99,
    promoPrice: 699.99,
    rating: 4.9,
    reviewsCount: 64,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80',
    badge: 'Gaming Pro'
  },
  {
    id: 'tech-mobility',
    name: 'Trotineta Elétrica Xiaomi 4 Pro Max',
    bundleAddon: 'Capacete de Proteção Incluído',
    category: 'Desporto e Mobilidade',
    originalPrice: 599.99,
    promoPrice: 479.99,
    rating: 4.8,
    reviewsCount: 42,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80',
    badge: 'Mobilidade Verde'
  }
];

export const ENTERTAINMENT_HIGHLIGHTS: ProductItem[] = [
  {
    id: 'ent-piano',
    name: 'Piano Digital Yamaha P-145',
    bundleAddon: 'Suporte de Estante Oficial por +20€',
    category: 'Instrumentos Musicais',
    originalPrice: 499.00,
    promoPrice: 419.00,
    rating: 4.9,
    reviewsCount: 78,
    image: 'https://images.unsplash.com/photo-1520523839898-507127053c37?auto=format&fit=crop&w=600&q=80',
    badge: 'Oportunidade'
  },
  {
    id: 'ent-zelda',
    name: 'Zelda: Ocarina of Time Remaster',
    bundleAddon: 'Porta-Chaves Colecionável em Pré-Venda',
    category: 'Gaming',
    originalPrice: 69.99,
    promoPrice: 54.99,
    rating: 5.0,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1612287233207-6950269f8c65?auto=format&fit=crop&w=600&q=80',
    badge: 'Pré-Venda Chega Primeiro'
  },
  {
    id: 'ent-book-lovers',
    name: 'Gift Pack "Book Lovers": Candeeiro + Marcador',
    bundleAddon: 'Oferta de Tote Bag FNAC Cultura',
    category: 'Papelaria e Gifts',
    originalPrice: 34.90,
    promoPrice: 24.90,
    rating: 4.8,
    reviewsCount: 145,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    badge: 'Best-Seller Gifts'
  },
  {
    id: 'ent-university-books',
    name: 'Manual de Direito & Economia Contemporânea',
    bundleAddon: 'Portes Grátis + 10% Desconto Aderente',
    category: 'Livros e eBooks',
    originalPrice: 45.00,
    promoPrice: 38.25,
    rating: 4.7,
    reviewsCount: 39,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80',
    badge: 'Regresso Universitário'
  }
];

export const SEASONAL_CAMPAIGNS = [
  {
    id: 'camp-uni',
    title: 'Promoção Regresso Universitário',
    dates: '17 setembro a 21 outubro',
    discount: 'Até -40% em Livros Universitários & Apoio',
    actionText: 'Equipa-te para o Semestre',
    color: 'from-amber-600 to-amber-700',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80',
    description: 'Manuais técnicos, livros de direito, gestão, medicina e calculadoras gráficas com descontos acumuláveis.'
  },
  {
    id: 'camp-school',
    title: 'Manuais Escolares & Cadernos de Atividades',
    dates: '31 de agosto a 11 de outubro',
    discount: '100% Manuais Oficiais + Vouchers MEGA',
    actionText: 'Encomendar Manuais',
    color: 'from-slate-800 to-slate-900',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=700&q=80',
    description: 'Encadernação ecológica gratuita e receção garantida em loja com portes grátis ao domicílio.'
  },
  {
    id: 'camp-pixel',
    title: 'Campanha Conjunta Google Pixel & Chromebook',
    dates: 'Promoção Limitada ao Stock',
    discount: 'Até -100€ em Chromebook na compra conjunta',
    actionText: 'Ver Bundles Google',
    color: 'from-blue-700 to-indigo-900',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=700&q=80',
    description: 'Combina a inteligência móvel do Google Pixel com a produtividade do ecossistema ChromeOS.'
  }
];

export const CHEGA_PRIMEIRO_ITEMS: ProductItem[] = [
  {
    id: 'cp-iphone-18',
    name: 'Apple iPhone 18 Pro Titânio',
    category: 'Telemóveis e Conectáveis',
    badge: '1ª Vaga Lançamento',
    originalPrice: 1499.00,
    promoPrice: 744.99,
    tradeInPrice: 744.99,
    tradeInAnchorText: 'Desde 744,99€ na retoma',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80',
    isPreOrder: true,
    stockLeft: 14,
    description: 'Pré-reserva prioritária com garantia de entrega na data oficial de lançamento.'
  },
  {
    id: 'cp-asus-s14',
    name: 'Asus S14 C5 16GB 512GB SSD',
    bundleAddon: '+ Mochila Executiva + Rato Sem Fios',
    category: 'Informática',
    badge: 'Exclusivo FNAC',
    originalPrice: 799.99,
    promoPrice: 599.99,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80',
    isPreOrder: false,
    stockLeft: 8,
    description: 'Portátil ultra-fino equipado com processador otimizado para tarefas de produtividade diária.'
  },
  {
    id: 'cp-xiaomi-redmi',
    name: 'Xiaomi Redmi Note 14 Series 5G',
    bundleAddon: 'Película de Vidro e Capa Oferecida',
    category: 'Telemóveis e Conectáveis',
    badge: 'Novo Lançamento',
    originalPrice: 299.99,
    promoPrice: 229.99,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
    isPreOrder: false,
    stockLeft: 22,
    description: 'Câmara principal de 200MP e carregamento hyper-charge de 67W.'
  },
  {
    id: 'cp-legami',
    name: 'Legami Kawaii Teddy Bear Coleção Limitada',
    category: 'Papelaria e Gifts',
    badge: 'Tendência TikTok',
    originalPrice: 19.99,
    promoPrice: 14.99,
    image: 'https://images.unsplash.com/photo-1558877385-81a1c7e67d72?auto=format&fit=crop&w=600&q=80',
    isPreOrder: false,
    stockLeft: 5,
    description: 'Caneta de tinta apagável temática de urso com recargas originais.'
  }
];

export const PERSONALIZED_FEED: ProductItem[] = [
  {
    id: 'feed-murdoku',
    name: 'Murdoku - 80 Crimes para Resolver',
    category: 'Livros e Jogos de Lógica',
    originalPrice: 18.99,
    promoPrice: 17.09,
    badge: 'Promoção FNAC -10%',
    merchantCount: 3,
    merchantMinPrice: 17.09,
    rating: 4.9,
    reviewsCount: 231,
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80',
    description: 'Manuel Garand reúne os enigmas de dedução policial mais aclamados do momento.'
  },
  {
    id: 'feed-mcafee',
    name: 'McAfee Internet Security - 3 Dispositivos - 1 Ano',
    category: 'Software & Segurança',
    promoPrice: 59.99,
    badge: 'Cartão Digital Imediato',
    rating: 4.5,
    reviewsCount: 92,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
    description: 'Proteção antivírus, firewall e navegação segura com envio imediato da chave digital por email.'
  },
  {
    id: 'feed-matematica',
    name: 'Vamos Praticar + Matemática - 1º Ano - Caderno de Atividades',
    category: 'Manuais & Apoio Escolar',
    promoPrice: 12.80,
    badge: 'Apoio Oficial',
    rating: 4.8,
    reviewsCount: 167,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80',
    description: 'Exercícios práticos alinhados com as metas curriculares do Ministério da Educação.'
  },
  {
    id: 'feed-english',
    name: "Student's File (Workbook) - Easy-peasy English - 4.º Ano",
    category: 'Manuais Escolares',
    promoPrice: 11.80,
    badge: 'Portes Grátis >15€',
    rating: 4.7,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80',
    description: 'Caderno de exercícios de inglês com jogos pedagógicos e áudio para download.'
  },
  {
    id: 'feed-netflix',
    name: 'Netflix Digital Code 25€ (Código de Recarga)',
    category: 'Cartões Digitais & Subscrições',
    promoPrice: 25.00,
    badge: 'Sem Validade / Sem Cartão',
    rating: 5.0,
    reviewsCount: 420,
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=600&q=80',
    description: 'Adiciona crédito diretamente na tua conta Netflix sem necessidade de associar cartão bancário.'
  }
];

export const EXPERT_ARTICLES: ExpertArticle[] = [
  {
    id: 'art-ai-pc',
    title: 'Portáteis com Inteligência Artificial: vale a pena comprar um PC com IA?',
    subtitle: 'NPU dedicada, Copilot+ e autonomia real no teu dia a dia.',
    category: 'Tecnologia & Informática',
    readTime: '4 min de leitura',
    author: 'Tiago Neves',
    expertRole: 'Especialista de Informática FNAC Colombo',
    excerpt: 'Com a chegada das NPU dedicadas e dos computadores Copilot+, analisamos se o ganho de produtividade e bateria justifica a mudança.',
    fullBody: [
      'A grande transformação dos computadores portáteis recentes não reside apenas em processadores mais rápidos, mas na introdução da NPU (Neural Processing Unit). Esta unidade autónoma gere tarefas de inteligência artificial sem sobrecarregar a CPU ou esgotar a bateria.',
      'Na FNAC testámos em primeira mão a transcrição em tempo real, os efeitos de câmara com enquadramento dinâmico e o resumo de reuniões offline. Para estudantes universitários e criadores de conteúdos, a poupança de tempo é palpável e a autonomia atinge facilmente 16 a 20 horas.',
      'A nossa conclusão: se estás a atualizar um portátil com mais de 3 anos, escolher um modelo com suporte de IA e NPU superior a 40 TOPS é a melhor garantia de longevidade para os próximos 5 anos.'
    ],
    recommendedProducts: ['Asus Vivobook Go 15,6"', 'Idea Tab 256GB + Teclado']
  },
  {
    id: 'art-apple-future',
    title: 'Apple mostra o futuro com os novos iPhone Duo, iPhone 18 Pro, Apple Watch e AirPods',
    subtitle: 'Análise detalhada ao ecossistema e à tecnologia Apple Intelligence.',
    category: 'Ecossistema Apple',
    readTime: '5 min de leitura',
    author: 'Mariana Duarte',
    expertRole: 'Apple Certified Master FNAC Chiado',
    excerpt: 'Explora todas as novidades da Apple e encontra o equipamento ideal para elevar o teu fluxo pessoal e profissional.',
    fullBody: [
      'A nova geração do iPhone 18 Pro estabelece uma rutura através do sistema ótico com abertura variável e do corpo em titânio micro-texturado. Mas a verdadeira estrela é a integração nativa com Apple Intelligence, permitindo automatizar fluxos complexos em segundos.',
      'Ao mesmo tempo, o novo Apple Watch Series 12 aprofunda o papel como guardião da saúde com sensores preditivos e resposta tátil precisa. Graças à política FNAC Restart, trocar o modelo da geração anterior por um novo torna o investimento muito mais leve.',
      'Os novos AirPods completam a experiência com cancelamento de ruído dinâmico calibrado em tempo real conforme a acústica da divisão.'
    ],
    recommendedProducts: ['Apple iPhone 18 Pro', 'Apple Watch Series 12']
  },
  {
    id: 'art-gamer-archetype',
    title: 'Descobre que tipo de gamer és (e o jogo ideal para ti)',
    subtitle: 'Do competitivo e-sports ao apreciador de narrativas cinematográficas.',
    category: 'Gaming & Lazer',
    readTime: '3 min de leitura',
    author: 'Gonçalo Pires',
    expertRole: 'Curador Gaming FNAC NorteShopping',
    excerpt: 'Nem todos os jogadores procuram a mesma adrenalina. Analisamos três perfis essenciais e as melhores combinações de consolas e ecrãs OLED.',
    fullBody: [
      'Identificar o teu estilo poupa dinheiro em compras por impulso. Se valorizas narrativas densas e mundos abertos contemplativos, o caminho ideal passa por ecrãs OLED de alta precisão cromática como o UltraGear 27".',
      'Para quem procura sessões sociais rápidas em família ou em viagem, títulos remasterizados e consolas portáteis oferecem versatilidade incomparável.',
      'Passa pela secção de Gaming de qualquer loja FNAC para testar periféricos antes de decidir.'
    ],
    recommendedProducts: ['LG UltraGear OLED 27"', 'Zelda: Ocarina of Time Remaster']
  },
  {
    id: 'art-school-trend',
    title: 'Material escolar: a trend este ano é ter o melhor regresso às aulas',
    subtitle: 'Organização inteligente, papelaria pastel e ferramentas digitais combinadas.',
    category: 'Escola & Criatividade',
    readTime: '3 min de leitura',
    author: 'Inês Carmo',
    expertRole: 'Curadora de Papelaria FNAC CascaiShopping',
    excerpt: 'Esquece as listas aborrecidas de regresso às aulas: a nova vaga aposta em design ergonómico, cores calmantes e cadernos híbridos.',
    fullBody: [
      'O regresso às aulas ganhou uma dimensão de expressão pessoal. As coleções Legami com canetas de tinta térmica apagável e cadernos de toque aveludado dominam as preferências dos mais jovens.',
      'Em paralelo, a combinação de cadernos físicos de síntese com tablets munidos de stylus melhora a retenção da memória em 30% segundo os dados mais recentes de pedagogia cognitiva.',
      'Na FNAC podes associar os teus vouchers escolares do Ministério e receber os manuais prontos e plastificados sem filas.'
    ],
    recommendedProducts: ['Legami Kawaii Teddy Bear', 'Idea Tab 256GB + Pen']
  },
  {
    id: 'art-google-pixel',
    title: 'Nova geração Google Pixel: conhece os Pixel e o Pixel Watch',
    subtitle: 'Fotografia computacional de referência e inteligência Gemini nativa.',
    category: 'Tecnologia Móvel',
    readTime: '4 min de leitura',
    author: 'Ricardo Santos',
    expertRole: 'Expert Android & Smart Home FNAC Almada',
    excerpt: 'O ecossistema Google atinge a maturidade com sincronização imediata entre smartphone, relógio e Chromebook com descontos até 100€.',
    fullBody: [
      'Os novos smartphones Google Pixel continuam a ditar as regras em fotografia noturna e retrato computacional. A capacidade de remover ruído de fundo em chamadas telefónicas com um único clique é revolucionária.',
      'A promoção conjunta com Chromebook permite construir uma estação de trabalho completa e sincronizada na nuvem com um desconto substancial.'
    ],
    recommendedProducts: ['Google Pixel Series', 'Chromebook Bundle']
  },
  {
    id: 'art-books-estante',
    title: 'Revista ESTANTE: Será que homens e mulheres preferem escritores diferentes?',
    subtitle: 'Um olhar crítico sobre os padrões literários e os romances que definem a época.',
    category: 'Cultura & Literatura',
    readTime: '6 min de leitura',
    author: 'Sérgio Almeida',
    expertRole: 'Crítico Literário & Diretor Revista ESTANTE FNAC',
    excerpt: 'Uma reflexão aprofundada sobre a receção de clássicos e best-sellers contemporâneos nas livrarias portuguesas.',
    fullBody: [
      'As estatísticas das nossas livrarias mostram que as fronteiras de género literário estão a diluir-se a favor de romances psicológicos profundos e ensaios históricos bem fundamentados.',
      'O fenómeno de comunidades digitais de leitores trouxe uma revitalização extraordinária aos romances gráficos e edições ilustradas.',
      'Descobre a seleção completa na Revista ESTANTE disponível gratuitamente nas lojas FNAC e online.'
    ],
    recommendedProducts: ['Murdoku - 80 Crimes para Resolver', 'Gift Pack Book Lovers']
  },
  {
    id: 'art-chega-primeiro-cultura',
    title: 'Na FNAC chega primeiro: Apoio escolar, Zodiac Academy e Marvel\'s Wolverine',
    subtitle: 'Da tecnologia de ponta aos livros mais aguardados e merchandising oficial.',
    category: 'Cultura & Novidades',
    readTime: '3 min de leitura',
    author: 'Beatriz Fonseca',
    expertRole: 'Curadora Cultural FNAC Chiado',
    excerpt: 'Se há uma grande novidade no panorama cultural ou tecnológico mundial, podes contar com a FNAC para ter o acesso prioritário.',
    fullBody: [
      'A promessa "Chega Primeiro" não é apenas um lema comercial: é a garantia de que as maiores pré-vendas de gaming, lançamentos de literatura fantástica e novidades musicais têm distribuição prioritária garantida.',
      'Reservar com antecedência na FNAC garante o melhor preço pré-venda e a certeza de que recebes no dia 1 sem correr o risco de rutura de stock.'
    ],
    recommendedProducts: ['Zelda: Ocarina of Time', 'Murdoku']
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-trade-in',
    category: 'Retoma & Preços',
    question: 'Como funciona a Retoma Inteligente FNAC Restart e o desconto no iPhone 18 Pro?',
    answer: 'O programa FNAC Restart permite-te entregar o teu smartphone, tablet ou smartwatch antigo (de qualquer marca) e abater imediatamente o valor da avaliação na compra do novo equipamento. No caso do iPhone 18 Pro, podes reduzir o preço de tabela de 1.499€ para valores a partir de 744,99€ dependendo do estado de conservação do teu aparelho anterior. O processo pode ser simulado online e concluído em qualquer loja física FNAC em menos de 10 minutos.'
  },
  {
    id: 'faq-shipping-free',
    category: 'Logística',
    question: 'Quais são as condições para usufruir de Portes Grátis?',
    answer: 'Oferecemos Portes Grátis em todos os Livros para encomendas superiores a 15€ e Portes Grátis sem valor mínimo para todos os clientes aderentes do Cartão FNAC. Adicionalmente, o levantamento em qualquer loja física FNAC é sempre 100% gratuito para todos os artigos disponíveis em stock.'
  },
  {
    id: 'faq-not-home',
    category: 'Logística',
    question: 'Não vou estar em casa para receber a encomenda. Que alternativas tenho?',
    answer: 'Dispomos de uma rede com mais de 2.000 pontos de recolha (PUDO / Pick-up points) distribuídos por todo o território nacional, com horários de funcionamento alargados (incluindo noites e fins de semana). Podes também optar pelo Click & Collect para levantar numa loja FNAC à tua escolha.'
  },
  {
    id: 'faq-click-collect',
    category: 'Logística',
    question: 'O que é o serviço de Levantamento em Loja em 1h (Click & Collect)?',
    answer: 'Se o artigo que pretendes estiver disponível no stock da loja FNAC selecionada, podes efetuar o pagamento online e levantar a tua encomenda pronta ao balcão de apoio em apenas 1 hora, sem filas de pagamento normais e sem qualquer custo adicional de portes.'
  },
  {
    id: 'faq-alg-feed',
    category: 'Conselhos & Tecnologia',
    question: 'O que significa a mensagem "Esta seleção é única (como tu)"?',
    answer: 'Esta secção utiliza algoritmos de recomendação baseados no teu perfil de navegação e interesses de conveniência para apresentar artigos práticos do quotidiano (desde livros de atividades escolares e cartões digitais Netflix a soluções de segurança cibernética) com descontos exclusivos e compra num só clique.'
  },
  {
    id: 'faq-ai-pc',
    category: 'Conselhos & Tecnologia',
    question: 'O que são os portáteis com Inteligência Artificial e vale a pena investir?',
    answer: 'São computadores equipados com NPUs dedicadas (unidades de processamento neural com mais de 40 TOPS) concebidas para correr assistentes inteligentes como o Copilot localmente, sem depender de servidores remotos. Oferecem ganhos brutais de autonomia de bateria (até 20 horas de utilização contínua) e automatização de escrita, transcrição e edição criativa. Vale a pena para quem necessita de um portátil moderno à prova de futuro para os próximos anos.'
  },
  {
    id: 'faq-back-to-school',
    category: 'Logística',
    question: 'Como funciona a campanha do Regresso Universitário e Manuais Escolares?',
    answer: 'A campanha de Regresso Universitário decorre com descontos até -40% em livros técnicos e universitários. Para o ensino básico e secundário, aceitamos os vouchers MEGA do Ministério da Educação, disponibilizamos serviço de encadernação protetora e asseguramos que todos os manuais encomendados chegam a tempo do início das aulas.'
  },
  {
    id: 'faq-cartao-fnac',
    category: 'Cartão FNAC',
    question: 'Que vantagens exclusivas oferece o Cartão FNAC?',
    answer: 'O Cartão FNAC concede 10% de desconto permanente em livros, 5€ de saldo de oferta a cada 100€ de compras em dias de bónus, portes grátis ilimitados em encomendas online, acesso a vendas privadas exclusivas, descontos em mais de 100 parceiros culturais e condições de pagamento em prestações sem juros.'
  },
  {
    id: 'faq-bundles',
    category: 'Retoma & Preços',
    question: 'Os bundles anunciados com "+ Mochila + Rato" ou "+ Pen + Teclado" têm custo adicional?',
    answer: 'Não. Os bundles de alto valor adicionado da FNAC são configurados especificamente com os acessórios já incluídos no preço promocional final do produto, poupando ao cliente entre 40€ a 120€ face à compra individual dos mesmos componentes.'
  },
  {
    id: 'faq-chega-primeiro',
    category: 'Garantias',
    question: 'O que é a garantia "Chega Primeiro às Novidades" da FNAC?',
    answer: 'É o nosso compromisso editorial e logístico que assegura que os clientes em regime de pré-reserva recebem o seu exemplar, consola ou smartphone exatamente no dia do lançamento oficial em Portugal, com proteção de preço caso o valor desça até à data de faturação.'
  },
  {
    id: 'faq-returns',
    category: 'Garantias',
    question: 'Posso devolver ou trocar um artigo comprado online diretamente numa loja física?',
    answer: 'Sim, qualquer artigo comprado em Fnac.pt pode ser trocado ou devolvido gratuitamente em qualquer balcão de apoio ao cliente das nossas lojas físicas em Portugal, no prazo legal de 14 dias (alargado para 30 dias para aderentes com Cartão FNAC).'
  },
  {
    id: 'faq-expert-advice',
    category: 'Conselhos & Tecnologia',
    question: 'Como posso falar com um Expert FNAC antes de tomar uma decisão?',
    answer: 'Podes ler os ensaios técnicos no Blog dos Nossos Experts, contactar o serviço "Liga e Encomenda" por telefone, ou dirigir-te a uma loja FNAC onde os nossos conselheiros especializados estão disponíveis para demonstrações e testes práticos sem compromisso de compra.'
  }
];

export const FNAC_STORES: StoreLocation[] = [
  {
    id: 'store-colombo',
    name: 'FNAC Colombo',
    city: 'Lisboa',
    address: 'Centro Comercial Colombo, Piso 0 e 1, Av. Lusíada',
    postalCode: '1500-392 Lisboa',
    openingHours: '10:00 - 23:00 (Segunda a Domingo)',
    clickAndCollect1h: true,
    phone: '210 351 000',
    hasRepairCenter: true
  },
  {
    id: 'store-chiado',
    name: 'FNAC Chiado',
    city: 'Lisboa',
    address: 'Armazéns do Chiado, Rua do Carmo nº 2',
    postalCode: '1200-094 Lisboa',
    openingHours: '10:00 - 22:00 (Segunda a Domingo)',
    clickAndCollect1h: true,
    phone: '210 351 100',
    hasRepairCenter: false
  },
  {
    id: 'store-norteshopping',
    name: 'FNAC NorteShopping',
    city: 'Porto / Matosinhos',
    address: 'Centro Comercial NorteShopping, Piso 0, R. Sara Afonso',
    postalCode: '4460-841 Senhora da Hora',
    openingHours: '10:00 - 23:00 (Segunda a Domingo)',
    clickAndCollect1h: true,
    phone: '220 351 000',
    hasRepairCenter: true
  },
  {
    id: 'store-santa-catarina',
    name: 'FNAC Santa Catarina',
    city: 'Porto',
    address: 'Rua de Santa Catarina, nº 73',
    postalCode: '4000-451 Porto',
    openingHours: '10:00 - 21:00 (Segunda a Sábado)',
    clickAndCollect1h: true,
    phone: '220 351 200',
    hasRepairCenter: false
  },
  {
    id: 'store-braga',
    name: 'FNAC Braga Parque',
    city: 'Braga',
    address: 'Braga Parque, Quinta dos Congregados',
    postalCode: '4710-427 Braga',
    openingHours: '10:00 - 23:00 (Segunda a Domingo)',
    clickAndCollect1h: true,
    phone: '253 035 100',
    hasRepairCenter: true
  },
  {
    id: 'store-coimbra',
    name: 'FNAC Coimbra',
    city: 'Coimbra',
    address: 'Fórum Coimbra, Av. José Bonifácio de Andrade e Silva',
    postalCode: '3044-520 Coimbra',
    openingHours: '10:00 - 23:00 (Segunda a Domingo)',
    clickAndCollect1h: true,
    phone: '239 035 100',
    hasRepairCenter: false
  },
  {
    id: 'store-algarve',
    name: 'FNAC AlgarveShopping',
    city: 'Guia / Albufeira',
    address: 'AlgarveShopping, Piso 0, E.N. 125',
    postalCode: '8200-417 Guia',
    openingHours: '10:00 - 23:00 (Segunda a Domingo)',
    clickAndCollect1h: true,
    phone: '289 035 100',
    hasRepairCenter: false
  }
];
