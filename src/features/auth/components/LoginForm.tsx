'use client';

import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { useState } from 'react';
import Link from 'next/link';
import { AuthContainer } from './AuthContainer';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('한국어 (대한민국)');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('로그인 정보:', { email, password });
    // TODO: 로그인 API 호출 로직 추가
  };

  return (
    <AuthContainer>
      {/* 로그인 타이틀 */}
      <h2 className="text-xl font-bold text-center mb-6">로그인</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-100 border-0 rounded-md px-4 py-3 text-gray-900 placeholder-gray-500"
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-gray-100 border-0 rounded-md px-4 py-3 text-gray-900 placeholder-gray-500"
        />

        <Button 
          type="submit" 
          className="w-full bg-[#ff0558] hover:bg-[#e6044d] text-white font-semibold py-3 rounded-md transition-colors"
        >
          로그인
        </Button>
      </form>

      {/* 링크들 */}
      <div className="text-center mt-4 space-y-2">
        <div>
          <Link href="/forgot-password" className="text-[#ff0558] text-sm hover:underline">
            비밀번호를 잊어버리셨나요?
          </Link>
        </div>
        <div className="text-sm text-gray-600">
          계정이 없으신가요? <Link href="/signup" className="text-[#ff0558] hover:underline">회원가입</Link>
        </div>
      </div>
    </AuthContainer>
  );
}