import { RefreshCw, PhoneCall, ShieldCheck, Mail, MapPin, ExternalLink, Heart } from 'lucide-react';

interface FooterTaxonomyProps {
  darkMode: boolean;
  onOpenTradeIn: () => void;
  onOpenStoreFinder: () => void;
  onOpenHelp: () => void;
}

export function FooterTaxonomy({
  darkMode,
  onOpenTradeIn,
  onOpenStoreFinder,
  onOpenHelp
}: FooterTaxonomyProps) {
  return (
    <footer className={`border-t transition-colors ${
      darkMode ? 'bg-zinc-950 border-zinc-800 text-zinc-400' : 'bg-zinc-900 border-zinc-800 text-zinc-300'
    }`}>
      {/* Upper newsletter & support bar */}
      <div className="border-b border-zinc-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            {/* 1. Phone Orders */}
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-zinc-800 text-[#E8A200] shrink-0">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white block text-sm">Liga e Encomenda</span>
                <span className="text-zinc-400 text-[11px] block mt-0.5">Segunda a Sábado das 09h às 21h</span>
                <a href="tel:210351000" className="text-[#E8A200] font-black text-sm hover:underline mt-1 inline-block">
                  210 351 000
                </a>
              </div>
            </div>

            {/* 2. Store Locator */}
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-zinc-800 text-[#E8A200] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white block text-sm">35+ Lojas em Portugal</span>
                <span className="text-zinc-400 text-[11px] block mt-0.5">Levantamento gratuito em 1 hora</span>
                <button onClick={onOpenStoreFinder} className="text-[#E8A200] font-bold text-xs hover:underline mt-1 inline-block">
                  Ver Horários & Localizações →
                </button>
              </div>
            </div>

            {/* 3. Restart Buyback */}
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-zinc-800 text-emerald-400 shrink-0">
                <RefreshCw className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white block text-sm">FNAC Restart</span>
                <span className="text-zinc-400 text-[11px] block mt-0.5">Retoma e compra de telemóveis usados</span>
                <button onClick={onOpenTradeIn} className="text-emerald-400 font-bold text-xs hover:underline mt-1 inline-block">
                  Simular Valor de Retoma →
                </button>
              </div>
            </div>

            {/* 4. Newsletter */}
            <div>
              <span className="font-bold text-white block text-sm mb-1">Newsletter FNAC</span>
              <span className="text-zinc-400 text-[11px] block mb-2">Recebe novidades e ofertas de 5€ em primeira mão.</span>
              <div className="flex gap-1.5">
                <input
                  type="email"
                  placeholder="O teu e-mail..."
                  className="bg-zinc-800 border border-zinc-700 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-zinc-500 flex-1 focus:outline-none focus:ring-1 focus:ring-[#E8A200]"
                />
                <button className="bg-[#E8A200] text-black font-extrabold px-3 py-1.5 rounded-lg text-xs hover:bg-[#d69500] transition-colors">
                  Subscrever
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Taxonomy Columns from PRD */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-xs">
          {/* Col 1: FNAC Restart (Circular Economy) */}
          <div>
            <span className="font-black text-white text-xs tracking-wider uppercase block mb-3 text-[#E8A200]">
              FNAC Restart
            </span>
            <ul className="space-y-2">
              <li><button onClick={onOpenTradeIn} className="hover:text-white transition-colors">Vender iPhone Usado</button></li>
              <li><button onClick={onOpenTradeIn} className="hover:text-white transition-colors">Vender Samsung Galaxy</button></li>
              <li><button onClick={onOpenTradeIn} className="hover:text-white transition-colors">Vender Consola & Jogos</button></li>
              <li><button onClick={onOpenTradeIn} className="hover:text-white transition-colors">Simulador de Retoma Online</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Garantia Recondicionados FNAC</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Clínica FNAC Reparações</a></li>
            </ul>
          </div>

          {/* Col 2: Tendências & Lançamentos */}
          <div>
            <span className="font-black text-white text-xs tracking-wider uppercase block mb-3">
              Tendências
            </span>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Apple iPhone 18 Pro</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Apple Watch Series 12</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portáteis com Inteligência Artificial</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Regresso Universitário 2026</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Manuais Escolares & MEGA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Revista ESTANTE Críticas</a></li>
            </ul>
          </div>

          {/* Col 3: Essenciais & Categorias */}
          <div>
            <span className="font-black text-white text-xs tracking-wider uppercase block mb-3">
              Essenciais
            </span>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Livros & eBooks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Informática & Tablets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gaming & Periféricos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Som, Colunas e Auscultadores</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobilidade Elétrica Urbana</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Papelaria & Material Escolar</a></li>
            </ul>
          </div>

          {/* Col 4: Apoio ao Cliente */}
          <div>
            <span className="font-black text-white text-xs tracking-wider uppercase block mb-3">
              Apoio ao Cliente
            </span>
            <ul className="space-y-2">
              <li><button onClick={onOpenHelp} className="hover:text-white transition-colors">Ajuda FNAC & Perguntas</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Entregas e Prazos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bilheteira FNAC</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vantagens Cartão FNAC</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Seguros FNAC Garantia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Estado da Encomenda</a></li>
            </ul>
          </div>

          {/* Col 5: Informação Legal & Governança */}
          <div className="col-span-2 sm:col-span-1">
            <span className="font-black text-white text-xs tracking-wider uppercase block mb-3">
              Informação Legal
            </span>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Condições Gerais de Venda (CGV)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade & Cookies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Services Act (DSA)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Livro de Reclamações Eletrónico</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Resolução de Conflitos Online</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Segurança nos Pagamentos 3D Secure</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Copyright Strip */}
        <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#E8A200] text-black font-black text-[10px] flex items-center justify-center rounded">
              fnac
            </div>
            <span>© 2026 FNAC Portugal - Todos os direitos reservados. Preços e promoções válidos exclusivamente para Fnac.pt.</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <span>Multibanco</span>
            <span>•</span>
            <span>MB WAY</span>
            <span>•</span>
            <span>Visa / Mastercard</span>
            <span>•</span>
            <span>Cartão FNAC Crédito</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
