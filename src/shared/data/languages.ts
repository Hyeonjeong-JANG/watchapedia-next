export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export const languages: Language[] = [
  { code: 'ko', name: '한국어', nativeName: '한국어' },
  { code: 'ja', name: '일본어', nativeName: '日本語' },
  { code: 'en', name: '영어', nativeName: 'English' },
];

export const getLanguageDisplay = (code: string): string => {
  const language = languages.find(lang => lang.code === code);
  return language ? language.nativeName : '한국어';
};
