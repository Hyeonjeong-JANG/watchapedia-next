'use client';

import { CustomDialog } from '@/shared/ui/custom-dialog';
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
    <CustomDialog
      open={open}
      onOpenChange={onOpenChange}
      title="설정"
      showBrand={false}
      showUnderline={true}
      closePosition="left"
    >
      <div className="space-y-2">
        <button
          onClick={onLanguageClick}
          className="w-full text-left px-4 py-3 rounded-md text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-between border-b border-gray-200"
        >
          <span className="text-gray-600">언어</span>
          <span className="text-gray-900">{getLanguageDisplay(selectedLanguage)}</span>
        </button>

        <button
          onClick={onCountryClick}
          className="w-full text-left px-4 py-3 rounded-md text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-between border-b border-gray-200"
        >
          <span className="text-gray-600">국가/지역</span>
          <span className="text-gray-900">{getCountryDisplay(selectedCountry)}</span>
        </button>
      </div>
    </CustomDialog>
  );
}
