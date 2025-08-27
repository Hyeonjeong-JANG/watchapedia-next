'use client';

import { useState, useEffect } from 'react';
import { fetchUpcomingMovies } from '@/infrastructure/api/tmdb';
import { Movie } from '@/shared/types/movie';
import Link from 'next/link';

export function UpcomingMoviesSection() {
    const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [loadingUpcoming, setLoadingUpcoming] = useState(true);

    useEffect(() => {

    const getUpcomingMovies = async () => {
      const data = await fetchUpcomingMovies();
      if (data) {
        setUpcomingMovies(data.slice(0, 5)); // 5개만 가져오도록
      }
      setLoadingUpcoming(false);
    };

    getUpcomingMovies();
  }, []);

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
  );
}