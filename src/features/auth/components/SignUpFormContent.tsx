'use client';

import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { useState } from 'react';
import Link from 'next/link';
import { LanguageSelector } from './LanguageSelector';

export function SignUpFormContent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('ko');
  const [selectedCountry, setSelectedCountry] = useState('KR');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // TODO: 회원가입 API 호출 로직 추가
  };

  return (
    <>
      {/* 회원가입 타이틀 */}
      <h2 className="text-xl font-bold text-center mb-6 text-black">회원가입</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-gray-100 border-0 rounded-md px-4 py-3 text-gray-900 placeholder-gray-500"
          required
        />
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-100 border-0 rounded-md px-4 py-3 text-gray-900 placeholder-gray-500"
          required
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-gray-100 border-0 rounded-md px-4 py-3 text-gray-900 placeholder-gray-500"
          required
        />

        {/* 국가/언어 선택 */}
        <LanguageSelector
          selectedLanguage={selectedLanguage}
          selectedCountry={selectedCountry}
          onLanguageChange={setSelectedLanguage}
          onCountryChange={setSelectedCountry}
        />

        <Button 
          type="submit" 
          className="w-full bg-[#ff0558] hover:bg-[#e6044d] text-white font-semibold py-3 rounded-md transition-colors"
        >
          회원가입
        </Button>
      </form>

      {/* 링크 */}
      <div className="text-center mt-4">
        <div className="text-sm text-gray-600">
          이미 가입하셨나요? <Link href="/login" className="text-[#ff0558] hover:underline">로그인</Link>
        </div>
      </div>
    </>
  );
}
