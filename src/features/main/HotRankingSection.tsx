'use client';

import { useState, useEffect } from 'react';
import { Movie } from '@/shared/types/movie';
import { fetchPopularMovies } from '@/infrastructure/api/tmdb';
import { RankChange } from '@/shared/ui/RankChange';
import { SlideButton } from '@/shared/ui/SlideButton';
import { HotRankCard } from '@/shared/ui/HotRankCard';
const ITEMS_PER_SLIDE = 5;

export function HotRankingSection() {
    const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
    const [loadingPopular, setLoadingPopular] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetchPopularMovies();
      if (data) {
        // API 데이터에 rank_change를 0으로 할당
        const moviesWithRank = data.map((movie: Movie) => ({
            ...movie,
            rank_change: 0, // 기본값을 0으로 설정
        }));
        setPopularMovies(moviesWithRank);
      }
      setLoadingPopular(false);
    };

    getPopularMovies();

  }, []);
    const nextSlide = () => {
        if (currentIndex + ITEMS_PER_SLIDE < popularMovies.length) {
            setCurrentIndex(currentIndex + ITEMS_PER_SLIDE);
        }
    };

    const prevSlide = () => {
        if (currentIndex >= ITEMS_PER_SLIDE) {
            setCurrentIndex(currentIndex - ITEMS_PER_SLIDE);
        } else {
            setCurrentIndex(0);
        }
    };

    const isFirstSlide = currentIndex === 0;
    const isLastSlide = currentIndex + ITEMS_PER_SLIDE >= popularMovies.length;

    return (
        <section className="mb-12">
            <h2 className="text-xl font-bold mb-6">왓챠피디아 HOT 랭킹</h2>
            {loadingPopular ? (
                <div className="flex justify-center items-center h-48 text-gray-500">
                    데이터를 불러오는 중입니다...
                </div>
            ) : popularMovies.length === 0 ? (
                <div className="text-center text-gray-500">영화 데이터가 없습니다.</div>
            ) : (
                <div className="relative flex items-center">
                    {/* 이전 버튼 */}
                    {!isFirstSlide && (
                        <SlideButton direction="left" onClick={prevSlide} disabled={isFirstSlide} />
                    )}

                    <div className="flex-1 overflow-hidden">
                        <div className="grid grid-cols-5 gap-4">
                            {popularMovies.slice(currentIndex, currentIndex + ITEMS_PER_SLIDE).map((movie, index) => (
              <HotRankCard
                key={movie.id}
                movie={movie}
                rank={currentIndex + index + 1}
              />
            ))}
                        </div>
                    </div>
                    {/* 다음 버튼 */}
                    {!isLastSlide && (
                        <SlideButton direction="right" onClick={nextSlide} disabled={isLastSlide} />
                    )}
                </div>
            )}
    </section>
  );
}