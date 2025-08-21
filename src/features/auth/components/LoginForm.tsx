'use client';

import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { useState } from 'react';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('로그인 정보:', { email, password });
    // TODO: 로그인 API 호출 로직 추가
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" className="w-full">
        로그인
      </Button>
      {/* TODO: "비밀번호를 잊으셨나요?" 링크와 소셜 로그인 버튼 추가 */}
    </form>
  );
}