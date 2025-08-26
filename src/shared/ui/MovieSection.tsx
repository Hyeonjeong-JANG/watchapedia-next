import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '@/shared/types/movie';

interface MovieSectionProps {
  title: string;
  movies: Movie[];
  loading: boolean;
  hasRank: boolean; // 랭킹 표시 여부 결정
}

export function MovieSection({ title, movies, loading, hasRank }: MovieSectionProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-48 text-gray-500">
        데이터를 불러오는 중입니다...
      </div>
    );
  }

  if (movies.length === 0) {
    return <div className="text-center text-gray-500">영화 데이터가 없습니다.</div>;
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {movies.map((movie, index) => (
          <div key={movie.id} className="relative group cursor-pointer">
            <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* hasRank prop이 true일 때만 순위 배지 표시 */}
            {hasRank && (
              <div className="absolute top-2 left-2">
                <span className="bg-[#ff0558] text-white text-xs font-bold px-2 py-1 rounded">
                  {index + 1}
                </span>
              </div>
            )}
            <div className="mt-2">
              <h3 className="font-semibold text-sm line-clamp-2">{movie.title}</h3>
              <p className="text-gray-600 text-xs">평균 ★ {movie.vote_average.toFixed(1)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}