'use client';

import { Dialog, DialogContent } from '@/shared/ui/dialog';
import { LoginForm } from '@/features/auth/components/LoginForm';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <h1 className="text-2xl font-bold text-center mb-6">로그인</h1>
        <LoginForm />
        <div className="mt-4 text-center text-sm">
          <Link href="/auth/signup" className="text-watcha-primary hover:underline">
            계정이 없으신가요? 회원가입
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}