'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Button } from './Button';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // 인기검색어 더미 데이터
  const popularSearches = [
    '아이언맨',
    '예담냄이',
    '해방촌 10',
    '귀멸의 칼날: 무한열차편',
    '내성 임마식: 빙어실 캐릭터',
    '오징어 게임',
    '아바타',
    '킬링로맨스',
    '서울의 봄',
    '간이역 어느 청소년 내비',
  ];

  // 검색바 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getLinkClass = (href: string) => {
    const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
    return `font-semibold hover:text-black ${isActive ? 'text-black' : 'text-gray-500'}`;
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
        {/* 로고 */}
          <div className="flex items-center">
            <Link href="/" >
              <Image src="/images/logo.svg" alt="와차 로고" width={150.99} height={35} />
            </Link>
          </div>

          {/* 네비게이션 메뉴 */}
          <nav className="hidden md:flex space-x-8 px-8">
            <Link href="/" className={getLinkClass('/')}>
              홈
            </Link>
            <Link href="/movies" className={getLinkClass('/movies')}>
              영화
            </Link>
            <Link href="/series" className={getLinkClass('/series')}>
              시리즈
            </Link>
              <Link href="/books" className={getLinkClass('/books')}>
              책
            </Link>
            <Link href="/webtoons" className={getLinkClass('/webtoons')}>
              웹툰
            </Link>
          </nav>
          </div>
        <div className="flex items-center">
          {/* 검색바 */}
          <div className="flex-1 max-w-lg mx-8" ref={searchRef}>
            <div className="relative">
              <div className="relative w-full">
                {/* 돋보기 아이콘 */}
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                </div>
                
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  placeholder="콘텐츠, 인물, 컬렉션, 유저, 매거진 검색"
                  className="w-full bg-gray-100 border-0 pl-10 pr-4 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
                />
              </div>
              
              {/* 인기검색어 드롭다운 */}
              {isSearchFocused && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 shadow-lg z-50 max-h-auto">
                    <h3 className="text-sm font-semibold text-primary  px-4 py-2">인기검색어</h3>
                    <div className="mb-2">
                    <div className="space-y-1">
                      {popularSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSearchValue(search);
                            setIsSearchFocused(false);
                          }}
                          className="w-full text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between group px-4 py-1 cursor-pointer"
                        >
                          <div className="flex items-stretch">
                            <div className="">
                              {search}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 로그인/회원가입 또는 사용자 메뉴 */}
          <div className="flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Link href="/login" className="text-gray-600 font-semibold text-xs hover:text-black  px-3 py-2">
                  로그인
                </Link>
                <Link href="/signup" className="text-black font-semibold text-xs hover:bg-gray-100 border border-gray-300 px-3 py-2 rounded">
                  회원가입
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Button
                  variant="minimal"
                  size="small"
                  className="text-gray-700 hover:text-black"
                >
                  평가하기
                </Button>
                <Button
                  variant="minimal"
                  size="small"
                  className="text-gray-700 hover:text-black"
                >
                  소식
                </Button>
                <div className="w-8 h-8 bg-gray-300 rounded-full cursor-pointer"></div>
              </div>
            )}
          </div>
</div>

        </div>
      </div>
    </header>
  );
}
