// src/shared/ui/MagazineCard.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '../types/movie';
import { RankChange } from './RankChange';

interface HotRankCardProps {
  movie: Movie;
  rank: number;
}

export function HotRankCard({ movie, rank }: HotRankCardProps) {
  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="relative group cursor-pointer">
        <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
          {movie.poster_path && (
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          )}
        </div>
        <div className="absolute top-2 left-2">
          <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
            <span>{rank}</span>
            <RankChange rankChange={movie.rank_change ?? 0} />
          </span>
        </div>
        <div className="mt-2">
          <h3 className="font-semibold text-sm line-clamp-2">{movie.title}</h3>
          <p className="text-gray-600 text-xs">평균 ★ {movie.vote_average.toFixed(1)}</p>
        </div>
      </div>
    </Link>
  );
}
