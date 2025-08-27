'use client';

import { useState, useEffect } from 'react';
import { Movie } from '@/shared/types/movie';
import { fetchPopularMovies } from '@/infrastructure/api/tmdb';
import { RankChange } from '@/shared/ui/RankChange';
import { SlideButton } from '@/shared/ui/SlideButton';
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
        if (currentIndex < popularMovies.length - ITEMS_PER_SLIDE) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const isFirstSlide = currentIndex === 0;
    const isLastSlide = currentIndex >= popularMovies.length - ITEMS_PER_SLIDE;

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
                        <div
                            className="flex transition-transform duration-500 gap-4"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / ITEMS_PER_SLIDE)}%)`
                            }}
                        >
                            {popularMovies.map((movie, index) => (
                                <div key={movie.id} className="min-w-0 flex-none" style={{ flexBasis: `calc(100% / ${ITEMS_PER_SLIDE} - 12px)` }}>
                                    <div key={movie.id} className="relative group cursor-pointer">
                                        <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                                            <img
                                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                                alt={movie.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute top-2 left-2">
                                            <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                                                <span>{index + 1}</span>
                                                <RankChange rankChange={movie.rank_change} />
                                            </span>
                                        </div>
                                        <div className="mt-2">
                                            <h3 className="font-semibold text-sm line-clamp-2">{movie.title}</h3>
                                            <p className="text-gray-600 text-xs">평균 ★ {movie.vote_average.toFixed(1)}</p>
                                        </div>
                                    </div>
                                </div>
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