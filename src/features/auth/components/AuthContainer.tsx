'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';

interface AuthContainerProps {
  children: React.ReactNode;
  showTip?: boolean;
}

export function AuthContainer({ children, showTip = true }: AuthContainerProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-auto">
      {/* WATCHA PEDIA 로고 */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">
          <span className="text-[#ff0558]">WATCHA</span>
          <span className="text-gray-700"> PEDIA</span>
        </h1>
      </div>

      {/* 중간 콘텐츠 (로그인 또는 회원가입 폼) */}
      {children}

      {/* OR 구분선 */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">OR</span>
        </div>
      </div>

      {/* 소셜 로그인 버튼들 */}
      <div className="flex justify-center space-x-3">
        <Button 
          type="button"
          className="w-12 h-12 rounded-full p-0 border-0"
          style={{ backgroundColor: '#FEE500' }}
        >
          <Image src="/images/kakao.svg" alt="카카오" width={20} height={20} />
        </Button>
        <Button 
          type="button"
          className="w-12 h-12 rounded-full p-0 bg-white border border-gray-300 hover:bg-gray-50"
        >
          <Image src="/images/google.svg" alt="구글" width={20} height={20} />
        </Button>
        <Button 
          type="button"
          className="w-12 h-12 rounded-full p-0 border-0"
          style={{ backgroundColor: '#1DA1F2' }}
        >
          <Image src="/images/twitter.svg" alt="트위터" width={20} height={20} />
        </Button>
        <Button 
          type="button"
          className="w-12 h-12 rounded-full p-0 bg-black border-0 hover:bg-gray-800"
        >
          <Image src="/images/apple.svg" alt="애플" width={20} height={20} />
        </Button>
        <Button 
          type="button"
          className="w-12 h-12 rounded-full p-0 border-0"
          style={{ backgroundColor: '#00C300' }}
        >
          <Image src="/images/line.svg" alt="라인" width={20} height={20} />
        </Button>
      </div>

      {/* 하단 안내 텍스트 */}
      {showTip && (
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">
            TIP 왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는<br />
            같은 계정을 사용해요.
          </p>
        </div>
      )}
    </div>
  );
}
