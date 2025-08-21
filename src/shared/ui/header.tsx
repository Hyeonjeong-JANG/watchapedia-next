'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from './button';

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-[#ff0558]">WATCHA</span>
              <span className="text-gray-700"> PEDIA</span>
            </Link>
          </div>

          {/* 네비게이션 메뉴 */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/movies" className="text-gray-700 hover:text-[#ff0558] font-medium">
              영화
            </Link>
            <Link href="/series" className="text-gray-700 hover:text-[#ff0558] font-medium">
              시리즈
            </Link>
            <Link href="/books" className="text-gray-700 hover:text-[#ff0558] font-medium">
              책
            </Link>
            <Link href="/webtoons" className="text-gray-700 hover:text-[#ff0558] font-medium">
              웹툰
            </Link>
          </nav>

          {/* 검색바 */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
                className="w-full bg-gray-100 border-0 rounded-full px-4 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff0558]"
              />
            </div>
          </div>

          {/* 로그인/회원가입 또는 사용자 메뉴 */}
          <div className="flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Link href="/login" className="text-gray-700 hover:text-[#ff0558] font-medium">
                  로그인
                </Link>
                <Link href="/signup" className="text-gray-700 hover:text-[#ff0558] font-medium">
                  회원가입
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-700 hover:text-[#ff0558]"
                >
                  평가하기
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-700 hover:text-[#ff0558]"
                >
                  소식
                </Button>
                <div className="w-8 h-8 bg-gray-300 rounded-full cursor-pointer"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
