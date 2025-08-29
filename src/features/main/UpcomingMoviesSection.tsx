'use client';

import { useState, useEffect } from 'react';
import { fetchUpcomingMovies } from '@/infrastructure/api/tmdb';
import { Movie } from '@/shared/types/movie';
import { SlideButton } from '@/shared/ui/SlideButton';
import Link from 'next/link';

const ITEMS_PER_SLIDE = 5;

export function UpcomingMoviesSection() {
    const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [loadingUpcoming, setLoadingUpcoming] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {

    const getUpcomingMovies = async () => {
      const data = await fetchUpcomingMovies();
      if (data) {
        setUpcomingMovies(data.slice(0, 20)); // 20개 가져와서 슬라이드 가능하게
      }
      setLoadingUpcoming(false);
    };

    getUpcomingMovies();
  }, []);

  const nextSlide = () => {
    if (currentIndex + ITEMS_PER_SLIDE < upcomingMovies.length) {
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
  const isLastSlide = currentIndex + ITEMS_PER_SLIDE >= upcomingMovies.length;

  return (
<section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">영화 공개 예정작</h2>
            <Link href="/upcoming" className="text-[#ff0558] text-sm font-medium hover:underline">
              더보기 →
            </Link>
          </div>
          {loadingUpcoming ? (
            <div className="flex justify-center items-center h-48 text-gray-500">
              데이터를 불러오는 중입니다...
            </div>
          ) : (
            <div className="relative flex items-center">
              {/* 이전 버튼 */}
              {!isFirstSlide && (
                <SlideButton direction="left" onClick={prevSlide} disabled={isFirstSlide} />
              )}

              <div className="flex-1 overflow-hidden">
                <div className="grid grid-cols-5 gap-4">
                  {upcomingMovies.slice(currentIndex, currentIndex + ITEMS_PER_SLIDE).map((movie) => (
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