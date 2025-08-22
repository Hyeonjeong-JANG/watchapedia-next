'use client';

import { Dialog, DialogContent, DialogTitle, DialogClose } from '@/shared/ui/dialog';
import { countries, type Country } from '@/shared/data/countries';

interface CountryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedCountry: string;
  onCountrySelect: (countryCode: string) => void;
  onBackToLanguage: () => void; // 언어 선택으로 돌아가기
}

export function CountryModal({
  open,
  onOpenChange,
  selectedCountry,
  onCountrySelect,
  onBackToLanguage
}: CountryModalProps) {
  const handleCountryClick = (countryCode: string) => {
    onCountrySelect(countryCode);
    onOpenChange(false); // 국가 선택 후 모달 닫기
  };

  const handleClose = () => {
    onBackToLanguage(); // X 버튼 클릭 시 언어 선택으로 돌아가기
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm max-h-[80vh] overflow-hidden">
        <div className="relative h-full flex flex-col">
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
                      <span className="text-[#ff0558]">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
