// src/shared/ui/HotActorCard.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HotActorCardProps {
  rank: number;
  id: number;
  name: string;
  profile_path: string;
  representative_work?: string;
  likes?: number;
  rank_change?: number;
}

export function HotActorCard({
  rank,
  id,
  name,
  profile_path,
  representative_work,
  likes,
  rank_change,
}: HotActorCardProps) {
  return (
    <Link href={`/person/${id}`}>
      <div className="group cursor-pointer">
        <div className="relative w-full aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
          {profile_path && (
            <Image
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          )}

          {/* 랭킹 뱃지 */}
          <div className="absolute top-2 left-2">
            <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded">
              {rank}
            </span>
          </div>

          {/* 랭킹 변화 뱃지 (옵션) */}
          {rank_change !== undefined && (
            <div
              className={`absolute top-2 right-2 text-white text-xs font-bold px-1.5 py-0.5 rounded-full ${
                rank_change > 0 ? 'bg-red-500' : rank_change < 0 ? 'bg-blue-500' : 'bg-gray-500'
              }`}
            >
              {rank_change === 0 ? 'NEW' : rank_change > 0 ? `▲${rank_change}` : `▼${Math.abs(rank_change)}`}
            </div>
          )}
        </div>

        <div className="mt-2 text-left">
          <h3 className="font-semibold text-sm leading-tight line-clamp-1">
            {name}
          </h3>
          {representative_work && (
            <p className="text-gray-500 text-xs mt-1 line-clamp-1">
              {representative_work}
            </p>
          )}
          {likes !== undefined && (
            <div className="flex items-center text-gray-500 text-xs mt-1">
              {/* 좋아요 아이콘 */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21H3v-7a2 2 0 012-2h7.071c.676 0 1.348-.052 2-.153zM12 9v6m-3-3h6" />
              </svg>
              <span>좋아요 {likes.toLocaleString()}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}