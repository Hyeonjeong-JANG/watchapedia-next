'use client';

import Link from "next/link";
import { MagazineSection } from '@/features/main/MagazineSection'; 
import { ShortcutSection } from '@/features/main/ShortcutSection';
import { HotRankingSection } from '@/features/main/HotRankingSection';
import { UpcomingMoviesSection } from '@/features/main/UpcomingMoviesSection';
import { HotPeopleSection } from '@/features/main/HotPeopleSection';

export default function Home() {

  return (
    <>
      {/* 메인 배너 섹션 */}
      <div className="relative"></div>

      {/* 컨텐츠 섹션 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 매거진 섹션 */}
        <MagazineSection />

        {/* 바로가기 섹션 */}
        <ShortcutSection />

        {/* HOT 랭킹 섹션 */}
        <HotRankingSection />

        {/* 공개 예정작 섹션 */}
        <UpcomingMoviesSection />

        {/* 인물 랭킹 섹션 */}
        <HotPeopleSection />
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-100 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 text-sm">
            <p className="mb-2">
              본 사이트의 모든 콘텐츠는 왓챠피디아의 자산이며, 사전 동의 없이 복제, 전재, 재배포, 인용, 크롤링, AI학습, 데이터 수집 등에 사용하는 것을 금지합니다.
            </p>
            <div className="flex justify-center space-x-4 text-xs">
              <Link href="/terms" className="hover:text-[#ff0558]">서비스 이용약관</Link>
              <Link href="/privacy" className="hover:text-[#ff0558]">개인정보 처리방침</Link>
              <Link href="/company" className="hover:text-[#ff0558]">회사 안내</Link>
              <Link href="/support" className="hover:text-[#ff0558]">고객센터</Link>
            </div>
            <p className="mt-2 text-xs">© 2025 by WATCHA, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}