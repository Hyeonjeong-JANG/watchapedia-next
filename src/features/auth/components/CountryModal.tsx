'use client';

import { CustomDialog } from '@/shared/ui/CustomDialog';
import { countries, type Country } from '@/shared/data/countries';

interface CountryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedCountry: string;
  onCountrySelect: (countryCode: string) => void;
  onBack: () => void; // 설정 모달로 돌아가기
}

export function CountryModal({
  open,
  onOpenChange,
  selectedCountry,
  onCountrySelect,
  onBack
}: CountryModalProps) {
  const handleCountryClick = (countryCode: string) => {
    onCountrySelect(countryCode);
    onBack(); // 국가 선택 후 설정 모달로 돌아가기
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
      className="max-h-[80vh] overflow-hidden"
    >
      <div className="mb-6 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-center mb-4">국가</h3>
        
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-1 pr-2">
            {countries.map((country: Country) => (
              <button
                key={`${country.code}-${country.name}`}
                onClick={() => handleCountryClick(country.code)}
                className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                  selectedCountry === country.code
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700 hover:bg-gray-50'
                } flex items-center justify-between`}
              >
                <span className="text-sm">{country.name}</span>
                {selectedCountry === country.code && (
                  <span className="text-[#ff0558] text-lg">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </CustomDialog>
  );
}
