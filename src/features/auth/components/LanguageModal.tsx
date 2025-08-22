'use client';

import { Dialog, DialogContent, DialogTitle, DialogClose } from '@/shared/ui/dialog';
import { languages, type Language } from '@/shared/data/languages';

interface LanguageModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedLanguage: string;
  onLanguageSelect: (languageCode: string) => void;
  onBack: () => void; // 설정 모달로 돌아가기
}

export function LanguageModal({
  open,
  onOpenChange,
  selectedLanguage,
  onLanguageSelect,
  onBack
}: LanguageModalProps) {
  const handleLanguageClick = (languageCode: string) => {
    onLanguageSelect(languageCode);
    onBack(); // 선택 후 설정 모달로 돌아가기
  };

  const handleClose = () => {
    onBack(); // X 버튼 클릭 시 설정 모달로 돌아가기
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm">
        <div className="relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
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
            
            <div className="space-y-1">
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
                    <span className="text-[#ff0558] text-lg">✓</span>
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
