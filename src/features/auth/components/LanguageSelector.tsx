'use client';

import { useState } from 'react';
import { getLanguageDisplay } from '@/shared/data/languages';
import { getCountryDisplay } from '@/shared/data/countries';
import { LanguageModal } from './LanguageModal';
import { CountryModal } from './CountryModal';

interface LanguageSelectorProps {
  selectedLanguage: string;
  selectedCountry: string;
  onLanguageChange: (languageCode: string) => void;
  onCountryChange: (countryCode: string) => void;
}

export function LanguageSelector({
  selectedLanguage,
  selectedCountry,
  onLanguageChange,
  onCountryChange
}: LanguageSelectorProps) {
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showCountryModal, setShowCountryModal] = useState(false);

  const handleButtonClick = () => {
    setShowLanguageModal(true);
  };

  const handleLanguageSelect = (languageCode: string) => {
    onLanguageChange(languageCode);
  };

  const handleCountrySelect = (countryCode: string) => {
    onCountryChange(countryCode);
  };

  const handleShowCountryModal = () => {
    setShowLanguageModal(false);
    setShowCountryModal(true);
  };

  const handleBackToLanguage = () => {
    setShowCountryModal(false);
    setShowLanguageModal(true);
  };

  const displayText = `${getLanguageDisplay(selectedLanguage)} (${getCountryDisplay(selectedCountry)})`;

  return (
    <>
      <button
        type="button"
        onClick={handleButtonClick}
        className="border-1 border-amber-50 rounded-md px-0 py-3 text-gray-900 flex items-center justify-between hover:border-gray-200 transition-colors"
      >
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className='text-gray-400 h-5 w-5'><path d="M415.9 344L225 344C227.9 408.5 242.2 467.9 262.5 511.4C273.9 535.9 286.2 553.2 297.6 563.8C308.8 574.3 316.5 576 320.5 576C324.5 576 332.2 574.3 343.4 563.8C354.8 553.2 367.1 535.8 378.5 511.4C398.8 467.9 413.1 408.5 416 344zM224.9 296L415.8 296C413 231.5 398.7 172.1 378.4 128.6C367 104.2 354.7 86.8 343.3 76.2C332.1 65.7 324.4 64 320.4 64C316.4 64 308.7 65.7 297.5 76.2C286.1 86.8 273.8 104.2 262.4 128.6C242.1 172.1 227.8 231.5 224.9 296zM176.9 296C180.4 210.4 202.5 130.9 234.8 78.7C142.7 111.3 74.9 195.2 65.5 296L176.9 296zM65.5 344C74.9 444.8 142.7 528.7 234.8 561.3C202.5 509.1 180.4 429.6 176.9 344L65.5 344zM463.9 344C460.4 429.6 438.3 509.1 406 561.3C498.1 528.6 565.9 444.8 575.3 344L463.9 344zM575.3 296C565.9 195.2 498.1 111.3 406 78.7C438.3 130.9 460.4 210.4 463.9 296L575.3 296z" fill="currentColor"/></svg>
          <span className="underline text-gray-400">{displayText}</span>
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="text-gray-400 h-4 w-4">
  <path d="M160 352C147.1 352 135.4 359.8 130.4 371.8C125.4 383.8 128.2 397.5 137.4 406.6L297.4 566.6C309.9 579.1 330.2 579.1 342.7 566.6L502.7 406.6C511.9 397.4 514.6 383.7 509.6 371.7C504.6 359.7 492.9 352 480 352L160 352z" fill="currentColor"/>
  </svg>
 </div>
      </button>

      <LanguageModal
        open={showLanguageModal}
        onOpenChange={setShowLanguageModal}
        selectedLanguage={selectedLanguage}
        onLanguageSelect={handleLanguageSelect}
        onCountrySelect={handleShowCountryModal}
      />

      <CountryModal
        open={showCountryModal}
        onOpenChange={setShowCountryModal}
        selectedCountry={selectedCountry}
        onCountrySelect={handleCountrySelect}
        onBackToLanguage={handleBackToLanguage}
      />
    </>
  );
}
