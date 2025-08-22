'use client';

import { CustomDialog } from '@/shared/ui/custom-dialog';
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

  return (
    <CustomDialog
      open={open}
      onOpenChange={onOpenChange}
      title="회원가입"
      showBrand={true}
      showUnderline={false}
      closePosition="right"
      onClose={onBack}
    >
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
    </CustomDialog>
  );
}
