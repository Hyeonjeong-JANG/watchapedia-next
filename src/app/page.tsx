import Link from "next/link";

export default function Home() {
    return (
    <>
      {/* 메인 배너 섹션 */}
      <div className="relative">
        {/* 히어로 배너 슬라이더 */}
        <div className="relative h-96 bg-gradient-to-r from-purple-900 to-blue-900 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">지금 가장 핫한 작품</h1>
              <p className="text-lg mb-6">새로운 이야기를 발견해보세요</p>
              <Link 
                href="/signup" 
                className="bg-[#ff0558] hover:bg-[#e6044d] text-white px-8 py-3 rounded-md font-semibold transition-colors"
              >
                지금 시작하기
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 컨텐츠 섹션 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* HOT 랭킹 섹션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">왓챠피디아 HOT 랭킹</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((rank) => (
              <div key={rank} className="relative group cursor-pointer">
                <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-gray-600 text-lg font-bold">#{rank}</span>
                  </div>
                </div>
                <div className="absolute top-2 left-2">
                  <span className="bg-[#ff0558] text-white text-xs font-bold px-2 py-1 rounded">
                    {rank}
                  </span>
                </div>
                <div className="mt-2">
                  <h3 className="font-semibold text-sm line-clamp-2">영화 제목 {rank}</h3>
                  <p className="text-gray-600 text-xs">평균 ★ 4.{rank}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 공개 예정작 섹션 */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">영화 공개 예정작</h2>
            <Link href="/upcoming" className="text-[#ff0558] text-sm font-medium hover:underline">
              더보기 →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden mb-2">
                  <div className="w-full h-full bg-gradient-to-br from-blue-300 to-purple-400 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">D-{item}</span>
                  </div>
                </div>
                <div className="flex items-center mb-1">
                  <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-2">D-{item}</span>
                  <span className="text-xs text-gray-600">보고싶어요 {Math.floor(Math.random() * 50)}K</span>
                </div>
                <h3 className="font-semibold text-sm line-clamp-2">예정작 제목 {item}</h3>
                <p className="text-gray-600 text-xs">개봉일 2025.08.2{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 인물 랭킹 섹션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Beta 왓챠피디아 인물 랭킹</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((rank) => (
              <div key={rank} className="text-center group cursor-pointer">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto bg-gray-300 rounded-full overflow-hidden mb-2">
                    <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{rank}</span>
                    </div>
                  </div>
                  <div className="absolute -top-1 -left-1">
                    <span className="bg-[#ff0558] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                      {rank}
                    </span>
                  </div>
                </div>
                <h3 className="font-medium text-sm">인물 {rank}</h3>
              </div>
            ))}
          </div>
        </section>
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
