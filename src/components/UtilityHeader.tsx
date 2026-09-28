import { useState } from 'react';
import { MapPin, HelpCircle, Grid, Sun, Moon, PhoneCall, ChevronDown } from 'lucide-react';
import { FNAC_DEPARTMENTS } from '../data/fnacData';

interface UtilityHeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenStoreFinder: () => void;
  onOpenHelp: () => void;
  onSelectCategory: (category: string) => void;
}

export function UtilityHeader({
  darkMode,
  onToggleDarkMode,
  onOpenStoreFinder,
  onOpenHelp,
  onSelectCategory
}: UtilityHeaderProps) {
  const [showDepartments, setShowDepartments] = useState(false);

  return (
    <div className={`border-b text-xs transition-colors duration-200 ${
      darkMode ? 'bg-[#18181B] border-zinc-800 text-zinc-300' : 'bg-[#111827] border-gray-900 text-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9">
          {/* Left branding & store utilities */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <span className="font-bold tracking-wider text-[#E8A200] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A200] animate-pulse"></span>
              Fnac.pt
            </span>

            <button
              id="header-store-finder-btn"
              onClick={onOpenStoreFinder}
              className="flex items-center gap-1.5 hover:text-[#E8A200] transition-colors focus:outline-none"
            >
              <MapPin className="w-3.5 h-3.5 text-[#E8A200]" />
              <span className="hidden sm:inline">Encontrar uma loja</span>
              <span className="sm:hidden">Lojas</span>
            </button>

            <button
              id="header-help-btn"
              onClick={onOpenHelp}
              className="flex items-center gap-1.5 hover:text-[#E8A200] transition-colors focus:outline-none"
            >
              <HelpCircle className="w-3.5 h-3.5 text-zinc-400" />
              <span>Ajuda</span>
            </button>

            <a
              href="tel:210351000"
              className="hidden md:flex items-center gap-1.5 text-zinc-300 hover:text-[#E8A200] transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-[#E8A200]" />
              <span>Liga e Encomenda: 210 351 000</span>
            </a>
          </div>

          {/* Right utilities & category drawer dropdown */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            {/* Todas as áreas button */}
            <div className="relative">
              <button
                id="header-departments-toggle-btn"
                onClick={() => setShowDepartments(!showDepartments)}
                className="flex items-center gap-1.5 py-1 px-2.5 rounded bg-zinc-800/80 hover:bg-zinc-700/80 text-white font-medium transition-colors"
              >
                <Grid className="w-3.5 h-3.5 text-[#E8A200]" />
                <span>Todas as áreas</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${showDepartments ? 'rotate-180' : ''}`} />
              </button>

              {showDepartments && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowDepartments(false)}
                  />
                  <div className={`absolute right-0 mt-2 w-72 sm:w-96 rounded-xl shadow-2xl border p-4 z-50 max-h-[70vh] overflow-y-auto ${
                    darkMode ? 'bg-zinc-900 border-zinc-700 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-800'
                  }`}>
                    <div className="flex items-center justify-between pb-3 border-b mb-3">
                      <span className="font-semibold text-sm">Departamentos e Áreas FNAC</span>
                      <span className="text-[11px] text-[#E8A200] font-medium">24 Áreas</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {FNAC_DEPARTMENTS.map((dept, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            onSelectCategory(dept);
                            setShowDepartments(false);
                          }}
                          className={`text-left px-2.5 py-1.5 text-xs rounded-lg transition-colors flex items-center justify-between group ${
                            darkMode ? 'hover:bg-zinc-800 text-zinc-300 hover:text-white' : 'hover:bg-amber-50/80 text-zinc-700 hover:text-amber-900'
                          }`}
                        >
                          <span className="truncate">{dept}</span>
                          <span className="text-[#E8A200] opacity-0 group-hover:opacity-100 text-[10px]">→</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              id="header-theme-toggle-btn"
              onClick={onToggleDarkMode}
              className={`p-1.5 rounded-lg border transition-colors ${
                darkMode
                  ? 'bg-zinc-800 border-zinc-700 text-amber-400 hover:bg-zinc-700'
                  : 'bg-zinc-800 border-zinc-700 text-zinc-300 hover:text-white'
              }`}
              title={darkMode ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
              aria-label="Alternar tema de cor"
            >
              {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
