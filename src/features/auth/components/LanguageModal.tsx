'use client';

import { Dialog, DialogContent, DialogTitle, DialogClose } from '@/shared/ui/dialog';
import { languages, type Language } from '@/shared/data/languages';

interface LanguageModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedLanguage: string;
  onLanguageSelect: (languageCode: string) => void;
  onCountrySelect: () => void; // 국가/지역 선택으로 이동
}

export function LanguageModal({
  open,
  onOpenChange,
  selectedLanguage,
  onLanguageSelect,
  onCountrySelect
}: LanguageModalProps) {
  const handleLanguageClick = (languageCode: string) => {
    onLanguageSelect(languageCode);
    onCountrySelect(); //  선택 후 국가 선택 모달로 이동
  };

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
            <h3 className="text-lg font-semibold text-center mb-4">언어</h3>
            
            <div className="space-y-2">
              {languages.map((language: Language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageClick(language.code)}
                  className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                    selectedLanguage === language.code
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-700 hover:bg-gray-50'
                  } flex items-center justify-between`}
                >
                  <span>{language.nativeName}</span>
                  {selectedLanguage === language.code && (
                    <span className="text-[#ff0558]">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
