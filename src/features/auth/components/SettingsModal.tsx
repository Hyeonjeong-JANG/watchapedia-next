'use client';

import { Dialog, DialogContent, DialogTitle, DialogClose } from '@/shared/ui/dialog';
import { getLanguageDisplay } from '@/shared/data/languages';
import { getCountryDisplay } from '@/shared/data/countries';

interface SettingsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedLanguage: string;
  selectedCountry: string;
  onLanguageClick: () => void;
  onCountryClick: () => void;
}

export function SettingsModal({
  open,
  onOpenChange,
  selectedLanguage,
  selectedCountry,
  onLanguageClick,
  onCountryClick
}: SettingsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm">
        <div className="relative">
          <DialogClose />
          
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">
              <span className="text-[#ff0558]">WATCHA</span>
              <span className="text-gray-700"> PEDIA</span>
            </h1>
          </div>

          <DialogTitle className="text-xl font-bold text-center mb-6 text-black">
            회원가입
          </DialogTitle>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-center mb-4">설정</h3>
            
            <div className="space-y-2">
              <button
                onClick={onLanguageClick}
                className="w-full text-left px-4 py-3 rounded-md text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-between border border-transparent hover:border-gray-200"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600">언어</span>
                  <span className="text-gray-900">{getLanguageDisplay(selectedLanguage)}</span>
                </div>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>

              <button
                onClick={onCountryClick}
                className="w-full text-left px-4 py-3 rounded-md text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-between border border-transparent hover:border-gray-200"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600">국가/지역</span>
                  <span className="text-gray-900">{getCountryDisplay(selectedCountry)}</span>
                </div>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
