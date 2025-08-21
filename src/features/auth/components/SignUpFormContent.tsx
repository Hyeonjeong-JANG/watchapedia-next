'use client';

import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { useState } from 'react';
import Link from 'next/link';

export function SignUpFormContent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [country, setCountry] = useState('한국어 (대한민국)');
  const [agreeAll, setAgreeAll] = useState(false);
  const [agreeAge, setAgreeAge] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!agreeAge || !agreeTerms || !agreePrivacy) {
      alert('필수 약관에 동의해야 합니다.');
      return;
    }
    
    console.log('회원가입 정보:', { name, email, password, agreeMarketing });
    // TODO: 회원가입 API 호출 로직 추가
  };

  const handleAgreeAllChange = (checked: boolean) => {
    setAgreeAll(checked);
    setAgreeAge(checked);
    setAgreeTerms(checked);
    setAgreePrivacy(checked);
    setAgreeMarketing(checked);
  };

  return (
    <>
      {/* 회원가입 타이틀 */}
      <h2 className="text-xl font-bold text-center mb-6">회원가입</h2>

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
        <select 
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full bg-gray-100 border-0 rounded-md px-4 py-3 text-gray-900 appearance-none cursor-pointer"
        >
          <option value="한국어 (대한민국)">한국어 (대한민국)</option>
          <option value="English (United States)">English (United States)</option>
          <option value="日本語 (日本)">日本語 (日本)</option>
        </select>

        <Button 
          type="submit" 
          className="w-full bg-[#ff0558] hover:bg-[#e6044d] text-white font-semibold py-3 rounded-md transition-colors"
        >
          회원가입
        </Button>
      </form>

      {/* 약관 동의 섹션 */}
      <div className="mt-6 space-y-3">
        <h3 className="font-semibold text-sm mb-3">
          약관에 동의하시면<br />
          가입이 완료됩니다.
        </h3>
        
        <div className="space-y-2 text-sm">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={agreeAll}
              onChange={(e) => handleAgreeAllChange(e.target.checked)}
              className="rounded"
            />
            <span>전체 약관 동의</span>
          </label>
          
          <label className="flex items-center space-x-2 text-gray-600">
            <input
              type="checkbox"
              checked={agreeAge}
              onChange={(e) => setAgreeAge(e.target.checked)}
              className="rounded"
            />
            <span>만 14세 이상입니다.</span>
          </label>
          
          <label className="flex items-center justify-between text-gray-600">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="rounded"
              />
              <span>서비스 이용약관</span>
            </div>
            <button type="button" className="text-gray-400 text-xs underline">보기</button>
          </label>
          
          <label className="flex items-center justify-between text-gray-600">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={agreePrivacy}
                onChange={(e) => setAgreePrivacy(e.target.checked)}
                className="rounded"
              />
              <span>개인정보 수집 이용 동의</span>
            </div>
            <button type="button" className="text-gray-400 text-xs underline">보기</button>
          </label>
          
          <label className="flex items-center justify-between text-gray-600">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={agreeMarketing}
                onChange={(e) => setAgreeMarketing(e.target.checked)}
                className="rounded"
              />
              <span>신작 알림, 이벤트 정보 수신(선택)</span>
            </div>
            <button type="button" className="text-gray-400 text-xs underline">보기</button>
          </label>
        </div>

        <Button 
          type="submit" 
          className={`w-full font-semibold py-3 rounded-md transition-colors ${
            agreeAge && agreeTerms && agreePrivacy
              ? 'bg-[#ff0558] hover:bg-[#e6044d] text-white'
              : 'bg-gray-400 text-white cursor-not-allowed'
          }`}
          disabled={!agreeAge || !agreeTerms || !agreePrivacy}
        >
          가입하기
        </Button>
      </div>

      {/* 링크 */}
      <div className="text-center mt-4">
        <div className="text-sm text-gray-600">
          이미 가입하셨나요? <Link href="/login" className="text-[#ff0558] hover:underline">로그인</Link>
        </div>
      </div>
    </>
  );
}
