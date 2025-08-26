'use client';

import Link from "next/link";
import { useEffect, useState } from 'react';
import { fetchPopularMovies, fetchUpcomingMovies } from '@/infrastructure/api/tmdb';
import { Movie } from '@/shared/types/movie';
import { MagazineSection } from '@/features/main/MagazineSection'; 
import { ShortcutSection } from '@/features/main/ShortcutSection';

export default function Home() {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [loadingPopular, setLoadingPopular] = useState(true);
  const [loadingUpcoming, setLoadingUpcoming] = useState(true);

  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetchPopularMovies();
      if (data) {
        setPopularMovies(data);
      }
      setLoadingPopular(false);
    };

    const getUpcomingMovies = async () => {
      const data = await fetchUpcomingMovies();
      if (data) {
        setUpcomingMovies(data.slice(0, 5)); // 5개만 가져오도록
      }
      setLoadingUpcoming(false);
    };

    getPopularMovies();
    getUpcomingMovies();
  }, []);

  return (
    <>
      {/* 메인 배너 섹션 */}
      <div className="relative">
      
      </div>

      {/* 컨텐츠 섹션 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 매거진 섹션 */}
        <section className="mb-12">
        <MagazineSection />
      </section>

        {/* 바로가기 섹션 */}
        <section className="mb-12">
          <ShortcutSection />
        </section>

        {/* HOT 랭킹 섹션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">왓챠피디아 HOT 랭킹</h2>
          {loadingPopular ? (
            <div className="flex justify-center items-center h-48 text-gray-500">
              데이터를 불러오는 중입니다...
            </div>
          ) : (
            <>
              {popularMovies.length === 0 ? (
              <div className="text-center text-gray-500">영화 데이터가 없습니다.</div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {popularMovies.map((movie, index) => (
                  <div key={movie.id} className="relative group cursor-pointer">
                    <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute top-2 left-2">
                      <span className="bg-[#ff0558] text-white text-xs font-bold px-2 py-1 rounded">
                        {index + 1}
                      </span>
                    </div>
                    <div className="mt-2">
                      <h3 className="font-semibold text-sm line-clamp-2">{movie.title}</h3>
                      <p className="text-gray-600 text-xs">평균 ★ {movie.vote_average.toFixed(1)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            </>
          )}
        </section>

        {/* 공개 예정작 섹션 */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">영화 공개 예정작</h2>
            <Link href="/upcoming" className="text-[#ff0558] text-sm font-medium hover:underline">
              더보기 →
            </Link>
          </div>
          {loadingUpcoming ? (
            <div className="flex justify-center items-center h-48 text-gray-500">
              데이터를 불러오는 중입니다...
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {upcomingMovies.map((movie) => (
                <div key={movie.id} className="group cursor-pointer">
                  <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden mb-2">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center mb-1">
                    <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-2">
                      개봉 {movie.release_date}
                    </span>
                    <span className="text-xs text-gray-600">
                      평균 ★ {movie.vote_average.toFixed(1)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm line-clamp-2">{movie.title}</h3>
                  <p className="text-gray-600 text-xs">개봉일 {movie.release_date}</p>
                </div>
              ))}
            </div>
          )}
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