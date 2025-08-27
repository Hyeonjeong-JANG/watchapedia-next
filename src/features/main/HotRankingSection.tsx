'use client';

import { useState, useEffect } from 'react';
import { Movie } from '@/shared/types/movie';
import { fetchPopularMovies } from '@/infrastructure/api/tmdb';
import { RankChange } from '@/shared/ui/RankChange';

export function HotRankingSection() {
    const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
    const [loadingPopular, setLoadingPopular] = useState(true);
    const [rankChange, setRankChange] = useState<number | null>(null);

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

  return (
<section className="mb-12">
          <h2 className="text-xl font-bold mb-6">왓챠피디아 HOT 랭킹</h2>
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
                      <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                        <span>{index + 1}</span>
                        {/* 랭킹 변화 */}
                        <RankChange rankChange={movie.rank_change ?? 0} />
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
  );
}