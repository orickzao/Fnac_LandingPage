import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ChevronDown,
  RotateCcw,
  ExternalLink,
  HelpCircle,
  Phone,
  Store,
  RefreshCw,
  CreditCard,
  CheckCircle2,
  Minimize2,
  Maximize2,
  Calendar,
  Clock,
  AlertCircle
} from 'lucide-react';
import { FAQS, FNAC_STORES } from '../data/fnacData';
import { createCalBooking } from '../../calService';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  matchedFaqId?: string;
  category?: string;
  actionButton?: {
    label: string;
    actionType: 'trade-in' | 'stores' | 'card' | 'call' | 'faq-scroll';
  };
  suggestedQuestions?: string[];
  showBookingForm?: boolean;
}

interface FaqChatbotProps {
  darkMode: boolean;
  isOpen?: boolean;
  onToggleOpen?: (open: boolean) => void;
  onOpenTradeIn: () => void;
  onOpenStoreFinder: () => void;
  onOpenCardBenefits: () => void;
  onScrollToFaq: () => void;
}

// Helper to normalize Portuguese text for fuzzy/keyword matching
function normalizeText(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

// Popular starter question prompts
const POPULAR_QUESTIONS = [
  'Como funciona a retoma no iPhone 18 Pro?',
  '📅 Agendar Reunião com Expert FNAC',
  'Quais as condições para portes grátis?',
  'Não estou em casa para receber a encomenda',
  'Como funciona o levantamento em 1h?',
  'Quais as vantagens do Cartão FNAC?',
  'Posso devolver em qualquer loja física?'
];

interface BookingBoxProps {
  darkMode?: boolean;
  onSuccess: (nome: string, email: string, dataHora: string) => void;
}

const BookingFormBox: React.FC<BookingBoxProps> = ({ darkMode = false, onSuccess }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [dataHora, setDataHora] = useState('');
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  // Generate tomorrow 10:00 as default initial value
  const now = new Date();
  now.setDate(now.getDate() + 1);
  now.setHours(10, 0, 0, 0);
  const minDateTime = new Date().toISOString().slice(0, 16);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !email.trim() || !dataHora) {
      setErro('Por favor preenche todos os campos.');
      return;
    }

    setLoading(true);
    setErro('');

    const res = await createCalBooking({
      name: nome.trim(),
      email: email.trim(),
      start: new Date(dataHora).toISOString()
    });

    setLoading(false);

    if (res.success) {
      onSuccess(nome.trim(), email.trim(), dataHora);
    } else {
      setErro(res.error || 'Erro ao agendar reunião. Tenta novamente.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`mt-2.5 p-3.5 rounded-xl border flex flex-col gap-2.5 max-w-[320px] transition-all shadow-xs ${
        darkMode
          ? 'bg-zinc-800/90 border-[#E8A200]/30 text-zinc-100'
          : 'bg-amber-50/70 border-amber-200 text-zinc-900'
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-[#E8A200] text-black flex items-center justify-center font-bold text-xs shrink-0">
          <Calendar className="w-3.5 h-3.5" />
        </div>
        <div>
          <div className="font-bold text-xs leading-tight text-zinc-900 dark:text-zinc-100">
            Agendar com Expert FNAC
          </div>
          <div className="text-[10px] text-zinc-500 dark:text-zinc-400">
            Aconselhamento personalizado via Cal.com
          </div>
        </div>
      </div>

      <div className="space-y-2 mt-1">
        <div>
          <label className="block text-[10px] font-semibold text-zinc-600 dark:text-zinc-300 mb-1">
            Nome Completo
          </label>
          <input
            type="text"
            placeholder="Ex: Mariana Silva"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className={`w-full px-2.5 py-1.5 rounded-lg border text-xs focus:outline-none focus:ring-2 focus:ring-[#E8A200] transition-colors ${
              darkMode
                ? 'bg-zinc-900 border-zinc-700 text-zinc-100 placeholder-zinc-500'
                : 'bg-white border-zinc-300 text-zinc-900 placeholder-zinc-400'
            }`}
          />
        </div>

        <div>
          <label className="block text-[10px] font-semibold text-zinc-600 dark:text-zinc-300 mb-1">
            Email de Contacto
          </label>
          <input
            type="email"
            placeholder="Ex: mariana@exemplo.pt"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`w-full px-2.5 py-1.5 rounded-lg border text-xs focus:outline-none focus:ring-2 focus:ring-[#E8A200] transition-colors ${
              darkMode
                ? 'bg-zinc-900 border-zinc-700 text-zinc-100 placeholder-zinc-500'
                : 'bg-white border-zinc-300 text-zinc-900 placeholder-zinc-400'
            }`}
          />
        </div>

        <div>
          <label className="block text-[10px] font-semibold text-zinc-600 dark:text-zinc-300 mb-1">
            Data e Hora Preferida
          </label>
          <input
            type="datetime-local"
            min={minDateTime}
            value={dataHora}
            onChange={(e) => setDataHora(e.target.value)}
            required
            className={`w-full px-2.5 py-1.5 rounded-lg border text-xs focus:outline-none focus:ring-2 focus:ring-[#E8A200] transition-colors ${
              darkMode
                ? 'bg-zinc-900 border-zinc-700 text-zinc-100'
                : 'bg-white border-zinc-300 text-zinc-900'
            }`}
          />
        </div>
      </div>

      {erro && (
        <div className="flex items-center gap-1.5 text-[#d90429] dark:text-red-400 text-[11px] font-medium p-1.5 rounded bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{erro}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`w-full mt-1 py-2 px-3 rounded-lg font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer ${
          loading
            ? 'bg-zinc-300 dark:bg-zinc-700 text-zinc-500 cursor-not-allowed'
            : 'bg-[#E8A200] hover:bg-[#d69500] text-black active:scale-[0.98]'
        }`}
      >
        {loading ? (
          <>
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            <span>A confirmar com Cal.com...</span>
          </>
        ) : (
          <>
            <Clock className="w-3.5 h-3.5" />
            <span>Confirmar Agendamento</span>
          </>
        )}
      </button>
    </form>
  );
};
export function FaqChatbot({
  darkMode,
  isOpen: controlledIsOpen,
  onToggleOpen,
  onOpenTradeIn,
  onOpenStoreFinder,
  onOpenCardBenefits,
  onScrollToFaq
}: FaqChatbotProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const setIsOpen = (val: boolean) => {
    if (onToggleOpen) {
      onToggleOpen(val);
    } else {
      setInternalIsOpen(val);
    }
  };
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnreadAlert, setHasUnreadAlert] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const initialBotMessage: ChatMessage = {
    id: 'welcome',
    sender: 'bot',
    text: 'Olá! Sou o Assistente Virtual da FNAC.pt 🟡\nComo posso ajudar-te hoje? Tens dúvidas sobre retomas de equipamentos, entregas, portes grátis ou o Cartão FNAC?',
    timestamp: new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' }),
    suggestedQuestions: [
      'Como funciona a retoma?',
      'Como ter portes grátis?',
      'Levantamento em loja 1h',
      'Vantagens Cartão FNAC'
    ]
  };

  const [messages, setMessages] = useState<ChatMessage[]>([initialBotMessage]);

  useEffect(() => {
    if (isOpen) {
      setHasUnreadAlert(false);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages, isTyping]);

  // Answer resolution engine based on the FAQ database
  const findBestAnswer = (userQuery: string): {
    answer: string;
    matchedFaqId?: string;
    category?: string;
    action?: { label: string; actionType: 'trade-in' | 'stores' | 'card' | 'call' | 'faq-scroll' };
    suggested?: string[];
  } => {
    const qNorm = normalizeText(userQuery);

    // 1. Greetings
    if (
      qNorm === 'ola' ||
      qNorm === 'bom dia' ||
      qNorm === 'boa tarde' ||
      qNorm === 'boa noite' ||
      qNorm === 'oi' ||
      qNorm.startsWith('ola ')
    ) {
      return {
        answer: 'Olá! Estou ao teu dispor para tirar qualquer dúvida sobre compras, entregas e serviços da FNAC.pt. O que gostarias de saber?',
        suggested: ['Condições de portes grátis', 'Simular retoma de telemóvel', 'Levantamento gratuito em 1h']
      };
    }

    // 2. Direct store / location queries
    if (qNorm.includes('loja') || qNorm.includes('colombo') || qNorm.includes('chiado') || qNorm.includes('norte shopping') || qNorm.includes('horario') || qNorm.includes('morada')) {
      const storeList = FNAC_STORES.slice(0, 3).map(s => `• ${s.name} (${s.city}): ${s.openingHours}`).join('\n');
      return {
        answer: `Temos mais de 35 lojas FNAC em Portugal com levantamento gratuito em 1 hora e serviços de Clínica FNAC para reparações.\n\nAlgumas lojas principais:\n${storeList}\n\nPodes pesquisar todas as localizações e horários diretamente no nosso localizador.`,
        action: { label: 'Ver Todas as Lojas FNAC', actionType: 'stores' },
        suggested: ['Como funciona o levantamento em 1h?', 'Posso devolver na loja?']
      };
    }

    // 3. Direct Contact query
    if (qNorm.includes('telefone') || qNorm.includes('contacto') || qNorm.includes('ligar') || qNorm.includes('apoio ao cliente') || qNorm.includes('numero')) {
      return {
        answer: 'Podes contactar a Linha de Apoio e Encomendas da FNAC através do número 210 351 000 (disponível de Segunda a Sábado das 09h às 21h). Também estamos disponíveis presencialmente em qualquer balcão de apoio em loja.',
        action: { label: 'Ligar para 210 351 000', actionType: 'call' },
        suggested: ['Ver horários das lojas', 'Posso devolver na loja?']
      };
    }

    // 4. Score matching against all 12 FAQs
    let bestFaq = null;
    let bestScore = 0;

    for (const faq of FAQS) {
      const qText = normalizeText(faq.question);
      const aText = normalizeText(faq.answer);
      const catText = normalizeText(faq.category);

      let score = 0;
      const queryWords = qNorm.split(/\s+/).filter(w => w.length > 2);

      for (const word of queryWords) {
        if (qText.includes(word)) score += 4;
        if (aText.includes(word)) score += 2;
        if (catText.includes(word)) score += 3;
      }

      // Specific intent boosts
      if ((qNorm.includes('retoma') || qNorm.includes('restart') || qNorm.includes('usado') || qNorm.includes('vender') || qNorm.includes('iphone 18')) && faq.id === 'faq-trade-in') {
        score += 15;
      }
      if ((qNorm.includes('porte') || qNorm.includes('envio') || qNorm.includes('gratis') || qNorm.includes('15€')) && faq.id === 'faq-shipping-free') {
        score += 15;
      }
      if ((qNorm.includes('nao estou') || qNorm.includes('ausente') || qNorm.includes('pudo') || qNorm.includes('ponto')) && faq.id === 'faq-not-home') {
        score += 15;
      }
      if ((qNorm.includes('1h') || qNorm.includes('hora') || qNorm.includes('click') || qNorm.includes('collect')) && faq.id === 'faq-click-collect') {
        score += 15;
      }
      if ((qNorm.includes('cartao') || qNorm.includes('aderente') || qNorm.includes('10%') || qNorm.includes('saldo')) && faq.id === 'faq-cartao-fnac') {
        score += 15;
      }
      if ((qNorm.includes('ia') || qNorm.includes('copilot') || qNorm.includes('inteligencia') || qNorm.includes('portatil')) && faq.id === 'faq-ai-pc') {
        score += 15;
      }
      if ((qNorm.includes('bundle') || qNorm.includes('mochila') || qNorm.includes('rato') || qNorm.includes('teclado')) && faq.id === 'faq-bundles') {
        score += 15;
      }
      if ((qNorm.includes('devolver') || qNorm.includes('troca') || qNorm.includes('devolucao') || qNorm.includes('reembolso')) && faq.id === 'faq-returns') {
        score += 15;
      }
      if ((qNorm.includes('escola') || qNorm.includes('manual') || qNorm.includes('mega') || qNorm.includes('livro')) && faq.id === 'faq-back-to-school') {
        score += 15;
      }
      if ((qNorm.includes('primeiro') || qNorm.includes('pre venda') || qNorm.includes('reserva')) && faq.id === 'faq-chega-primeiro') {
        score += 15;
      }

      if (score > bestScore) {
        bestScore = score;
        bestFaq = faq;
      }
    }

    if (bestFaq && bestScore >= 4) {
      // Determine relevant action button
      let action: any = undefined;
      if (bestFaq.id === 'faq-trade-in') {
        action = { label: 'Abrir Simulador de Retoma FNAC', actionType: 'trade-in' };
      } else if (bestFaq.id === 'faq-click-collect' || bestFaq.id === 'faq-not-home') {
        action = { label: 'Consultar Lojas & Pontos de Recolha', actionType: 'stores' };
      } else if (bestFaq.id === 'faq-cartao-fnac') {
        action = { label: 'Ver Vantagens do Cartão FNAC', actionType: 'card' };
      } else if (bestFaq.id === 'faq-expert-advice') {
        action = { label: 'Ver Todas as FAQs da FNAC', actionType: 'faq-scroll' };
      }

      // Pick 2 other related questions
      const otherQuestions = FAQS
        .filter(f => f.id !== bestFaq.id)
        .slice(0, 2)
        .map(f => f.question);

      return {
        answer: bestFaq.answer,
        matchedFaqId: bestFaq.id,
        category: bestFaq.category,
        action,
        suggested: otherQuestions
      };
    }

    // 5. Fallback when score is low
    return {
      answer: 'Não encontrei uma resposta exata para a tua pergunta na base de dados das FAQ, mas posso ajudar-te com as nossas dúvidas mais frequentes:\n\n• Retoma de telemóveis e abatimento no preço\n• Envio com portes grátis em livros e aderentes\n• Levantamento gratuito em 1 hora em loja física\n• Pontos de recolha PUDO se não estiveres em casa\n\nPodes também ligar gratuitamente para o nosso apoio ao cliente no 210 351 000.',
      action: { label: 'Ligar para Apoio (210 351 000)', actionType: 'call' },
      suggested: [
        'Como funciona a retoma de usados?',
        'Condições de Portes Grátis',
        'Levantamento em loja 1h'
      ]
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query.trim(),
      timestamp: new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Natural typing delay simulation (350ms - 600ms)
    // Natural typing delay simulation (350ms - 600ms)
    setTimeout(async () => {
      const lowerQuery = query.toLowerCase();

      // Deteção se o utilizador quer agendar reunião
      const isBookingIntent =
        lowerQuery.includes('agendar') ||
        lowerQuery.includes('marcar') ||
        lowerQuery.includes('reuni') ||
        lowerQuery.includes('consulta') ||
        lowerQuery.includes('sessao') ||
        lowerQuery.includes('sessão') ||
        lowerQuery.includes('expert') ||
        lowerQuery.includes('especialista') ||
        lowerQuery.includes('marcar hora') ||
        lowerQuery.includes('cal.com');

      // Procura se o utilizador escreveu um email na mensagem
      const emailMatch = query.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);

      if (isBookingIntent) {
        const botReply: ChatMessage = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: "Com certeza! Preenche os teus dados abaixo para agendares diretamente uma sessão com um Expert FNAC:",
          timestamp: new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' }),
          showBookingForm: true,
        };

        setMessages(prev => [...prev, botReply]);
        setIsTyping(false);
        return;
      }

      

      // Fluxo existente de FAQs
      const matchResult = findBestAnswer(query);

      const botReply: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: matchResult.answer,
        timestamp: new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' }),
        matchedFaqId: matchResult.matchedFaqId,
        category: matchResult.category,
        actionButton: matchResult.action,
        suggestedQuestions: matchResult.suggested
      };

      setMessages(prev => [...prev, botReply]);
      setIsTyping(false);
    }, 450);
  };

  const handleActionClick = (actionType: 'trade-in' | 'stores' | 'card' | 'call' | 'faq-scroll') => {
    if (actionType === 'trade-in') {
      onOpenTradeIn();
    } else if (actionType === 'stores') {
      onOpenStoreFinder();
    } else if (actionType === 'card') {
      onOpenCardBenefits();
    } else if (actionType === 'call') {
      window.location.href = 'tel:210351000';
    } else if (actionType === 'faq-scroll') {
      onScrollToFaq();
      setIsOpen(false);
    }
  };

  const handleResetChat = () => {
    setMessages([initialBotMessage]);
  };

  return (
    <>
      {/* Floating launcher trigger button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
          {hasUnreadAlert && (
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold text-xs shadow-xl border border-zinc-700 animate-in fade-in slide-in-from-right duration-300">
              <span className="w-2 h-2 rounded-full bg-[#E8A200] animate-ping" />
              <span>Dúvidas sobre entregas ou retoma? Pergunta-me!</span>
            </div>
          )}
          <button
            onClick={() => {
              setIsOpen(true);
              setIsMinimized(false);
            }}
            className="p-3.5 sm:p-4 rounded-2xl bg-[#E8A200] hover:bg-[#d69500] text-black font-extrabold shadow-2xl transition-all duration-200 hover:scale-105 cursor-pointer flex items-center gap-2 group ring-2 ring-black/10"
            aria-label="Abrir Chatbot FNAC"
          >
            <MessageSquare className="w-5 h-5 fill-black group-hover:rotate-6 transition-transform" />
            <span className="text-xs font-black hidden sm:inline">Assistente FNAC</span>
          </button>
        </div>
      )}

      {/* Main Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[410px] rounded-3xl border shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
            isMinimized ? 'h-[64px]' : 'h-[580px] max-h-[82vh]'
          } ${
            darkMode
              ? 'bg-zinc-900 border-zinc-700 text-zinc-100'
              : 'bg-white border-zinc-200 text-zinc-900'
          }`}
        >
          {/* Header Bar */}
          <div className="p-4 bg-zinc-950 text-white flex items-center justify-between border-b border-zinc-800 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-xl bg-[#E8A200] text-black font-black flex items-center justify-center text-xs shadow-sm">
                  FNAC
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-zinc-950" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-extrabold text-xs sm:text-sm tracking-tight text-white">
                    Assistente Virtual FNAC
                  </h3>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-[#E8A200] border border-amber-500/30">
                    FAQ Base
                  </span>
                </div>
                <span className="text-[10px] text-zinc-400 block">
                  Respostas instantâneas a retomas, entregas e lojas
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                title="Reiniciar conversa"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                title={isMinimized ? 'Expandir' : 'Minimizar'}
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                title="Fechar chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Chat Message History */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs leading-relaxed">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      msg.sender === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div
                      className={`flex gap-2 max-w-[88%] ${
                        msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                      }`}
                    >
                      {/* Avatar */}
                      <div
                        className={`w-6 h-6 rounded-lg shrink-0 flex items-center justify-center text-[10px] font-bold ${
                          msg.sender === 'user'
                            ? 'bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200'
                            : 'bg-[#E8A200] text-black'
                        }`}
                      >
                        {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                      </div>

                      {/* Bubble */}
          <div className="space-y-2">
            <div
              className={`p-3.5 rounded-2xl whitespace-pre-line shadow-xs ${
                msg.sender === 'user'
                  ? 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-medium rounded-tr-xs'
                  : darkMode
                  ? 'bg-zinc-800/90 text-zinc-100 rounded-tl-xs border border-zinc-700/80'
                  : 'bg-zinc-100 text-zinc-900 rounded-tl-xs border border-zinc-200'
              }`}
            >
              {msg.category && (
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#E8A200] block mb-1">
                  {msg.category}
                </span>
              )}
              <p>{msg.text}</p>
            </div>

            {msg.showBookingForm && (
              <BookingFormBox 
                darkMode={darkMode}
                onSuccess={(nome, email, dataHora) => {
                  const formattedDate = new Date(dataHora).toLocaleString('pt-PT', {
                    dateStyle: 'medium',
                    timeStyle: 'short'
                  });
                  const confirmMsg: ChatMessage = {
                    id: `bot-${Date.now()}`,
                    sender: 'bot',
                    text: `✅ Sessão confirmada com sucesso para ${nome} no dia ${formattedDate}!\n\nO convite foi registado e enviado para ${email}. Um Expert FNAC estará pronto para o seu atendimento.`,
                    timestamp: new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })
                  };
                  setMessages(prev => [...prev, confirmMsg]);
                }} 
              />
            )}


                        {/* Interactive Action Button inside message */}
                        {msg.actionButton && (
                          <div>
                            <button
                              onClick={() => handleActionClick(msg.actionButton!.actionType)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#E8A200] hover:bg-[#d49400] text-black font-extrabold text-[11px] shadow-xs transition-colors cursor-pointer"
                            >
                              <span>{msg.actionButton.label}</span>
                              <ExternalLink className="w-3 h-3" />
                            </button>
                          </div>
                        )}

                        {/* Suggested Follow-up Prompts */}
                        {msg.suggestedQuestions && msg.suggestedQuestions.length > 0 && (
                          <div className="pt-1 flex flex-wrap gap-1.5">
                            {msg.suggestedQuestions.map((q, qIdx) => (
                              <button
                                key={qIdx}
                                onClick={() => handleSendMessage(q)}
                                className={`text-[10px] font-bold px-2.5 py-1 rounded-full border text-left transition-all cursor-pointer ${
                                  darkMode
                                    ? 'bg-zinc-800/60 border-zinc-700 text-zinc-300 hover:border-[#E8A200] hover:text-[#E8A200]'
                                    : 'bg-[#F3F4F6] border-zinc-300 text-[#111827] hover:border-[#E8A200] hover:bg-amber-50'
                                }`}
                              >
                                {q}
                              </button>
                            ))}
                          </div>
                        )}

                        <span className="text-[9px] text-[#6B7280] block px-1">
                          {msg.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Live Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-[#E8A200] text-black flex items-center justify-center font-bold">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div className={`p-3 rounded-2xl rounded-tl-xs flex items-center gap-1 ${
                      darkMode ? 'bg-zinc-800' : 'bg-zinc-100 border border-zinc-200'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A200] animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A200] animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A200] animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Fast-Topic Quick Prompts Bar */}
              <div className="px-3 py-2 border-t border-zinc-200 dark:border-zinc-800 bg-[#F9FAFB] dark:bg-zinc-900/60 overflow-x-auto no-scrollbar">
                <div className="flex gap-1.5">
                  {POPULAR_QUESTIONS.slice(0, 4).map((pq, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(pq)}
                      className="px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap bg-zinc-200 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 text-[#111827] dark:text-zinc-200 hover:bg-[#E8A200] hover:text-black dark:hover:bg-[#E8A200] dark:hover:text-black transition-colors shrink-0 cursor-pointer"
                    >
                      {pq}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="p-3 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Escreve a tua dúvida (ex: retoma, portes, colombo)..."
                  className={`flex-1 px-3.5 py-2.5 rounded-xl text-xs border focus:outline-none focus:ring-2 focus:ring-[#E8A200] transition-colors ${
                    darkMode
                      ? 'bg-zinc-800 border-zinc-700 text-zinc-100 placeholder-zinc-500'
                      : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400'
                  }`}
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className={`p-2.5 rounded-xl transition-all ${
                    inputText.trim()
                      ? 'bg-[#E8A200] hover:bg-[#d69500] text-black cursor-pointer shadow-xs'
                      : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-400 cursor-not-allowed'
                  }`}
                  aria-label="Enviar mensagem"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
