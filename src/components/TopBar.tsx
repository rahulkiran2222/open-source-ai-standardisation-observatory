import React from 'react';
import { Download, Plus, Database, Network, Search, BarChart3, BookOpen } from 'lucide-react';

export type NavTab = 'network' | 'register' | 'matcher' | 'reporting' | 'codebook';

interface TopBarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  onOpenNewRecordModal: () => void;
  onOpenCsvModal: () => void;
  totalRecordsCount: number;
}

export const TopBar: React.FC<TopBarProps> = ({
  activeTab,
  onTabChange,
  onOpenNewRecordModal,
  onOpenCsvModal,
  totalRecordsCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E7E3DC] px-6 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 rounded border border-[#D5CEBF] bg-[#F2EDE4] flex items-center justify-center text-[#78350F] shadow-xs">
            <Database className="w-4 h-4 stroke-[1.75]" />
          </div>
          <button
            onClick={() => onTabChange('network')}
            className="text-left group cursor-pointer"
          >
            <span className="text-base font-serif font-semibold tracking-tight text-[#1C1917] group-hover:text-[#9A3412] transition-colors whitespace-nowrap block">
              AI Standardisation Observatory
            </span>
          </button>
        </div>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-[#57534E]">
          <button
            onClick={() => onTabChange('network')}
            className={`whitespace-nowrap pb-0.5 border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'network'
                ? 'border-[#9A3412] text-[#1C1917] font-semibold'
                : 'border-transparent hover:text-[#1C1917] hover:border-[#D5CEBF]'
            }`}
          >
            <Network className="w-3.5 h-3.5 opacity-70" />
            <span>Network Explorer</span>
          </button>

          <button
            onClick={() => onTabChange('register')}
            className={`whitespace-nowrap pb-0.5 border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'register'
                ? 'border-[#9A3412] text-[#1C1917] font-semibold'
                : 'border-transparent hover:text-[#1C1917] hover:border-[#D5CEBF]'
            }`}
          >
            <Database className="w-3.5 h-3.5 opacity-70" />
            <span>Evidence Register</span>
            <span className="text-[11px] font-mono tabular-nums text-[#78716C]">
              ({totalRecordsCount})
            </span>
          </button>

          <button
            onClick={() => onTabChange('matcher')}
            className={`whitespace-nowrap pb-0.5 border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'matcher'
                ? 'border-[#9A3412] text-[#1C1917] font-semibold'
                : 'border-transparent hover:text-[#1C1917] hover:border-[#D5CEBF]'
            }`}
          >
            <Search className="w-3.5 h-3.5 opacity-70" />
            <span>Candidate Matcher</span>
          </button>

          <button
            onClick={() => onTabChange('reporting')}
            className={`whitespace-nowrap pb-0.5 border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'reporting'
                ? 'border-[#9A3412] text-[#1C1917] font-semibold'
                : 'border-transparent hover:text-[#1C1917] hover:border-[#D5CEBF]'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 opacity-70" />
            <span>Audit & Reports</span>
          </button>

          <button
            onClick={() => onTabChange('codebook')}
            className={`whitespace-nowrap pb-0.5 border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'codebook'
                ? 'border-[#9A3412] text-[#1C1917] font-semibold'
                : 'border-transparent hover:text-[#1C1917] hover:border-[#D5CEBF]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 opacity-70" />
            <span>Codebook & Python Engine</span>
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="./open-source-ai-standardisation-observatory.zip"
            download="open-source-ai-standardisation-observatory.zip"
            className="px-3 py-1.5 text-xs font-medium text-[#78350F] hover:text-[#1C1917] bg-[#FEF3C7] hover:bg-[#FDE68A] border border-[#FCD34D] rounded-md transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 shadow-2xs"
            title="Download full project repository as .zip for GitHub & GitHub Pages"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download ZIP</span>
          </a>

          <button
            onClick={onOpenCsvModal}
            className="px-3 py-1.5 text-xs font-medium text-[#57534E] hover:text-[#1C1917] bg-[#F2EDE4]/70 hover:bg-[#EBE4D8] border border-[#DDD6C8] rounded-md transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5"
            title="Import or Export CSV Dataset & GitHub Setup"
          >
            <Database className="w-3.5 h-3.5" />
            <span>CSV Data</span>
          </button>

          <button
            onClick={onOpenNewRecordModal}
            className="px-3.5 py-1.5 text-xs font-medium text-white bg-[#1C1917] hover:bg-[#292524] rounded-md transition-all shadow-xs whitespace-nowrap cursor-pointer flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Evidence</span>
          </button>
        </div>
      </div>
    </header>
  );
};
