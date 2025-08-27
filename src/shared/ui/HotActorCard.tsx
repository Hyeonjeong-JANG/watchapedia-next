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
        <div className="relative w-full aspect-[4/4] bg-gray-200 rounded-lg overflow-hidden">
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


        </div>

        <div className="mt-2 text-left">
          <div className="flex items-center gap-1 mb-1">
            <h3 className="font-semibold text-sm leading-tight line-clamp-1">
              {name}
            </h3>
            {/* 랭킹 변화를 이름 옆에 표시 */}
            {rank_change !== undefined && rank_change !== 0 && (
              <span
                className={`text-xs font-bold ${
                  rank_change > 0 ? 'text-red-500' : 'text-blue-500'
                }`}
              >
                ({rank_change > 0 ? `▲ ${rank_change}` : `▼ ${Math.abs(rank_change)}`})
              </span>
            )}
            {/* NEW 표시 */}
            {rank_change === 0 && (
              <span className="text-xs font-bold text-green-600">
                NEW
              </span>
            )}
          </div>
          
          {/* 대표작을 회색 박스에 표시 */}
          {representative_work && (
            <div className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded mb-1 inline-block">
              {representative_work}
            </div>
          )}
          
          {/* 추가 설명 텍스트 */}
          {representative_work === "특리커" && (
            <p className="text-gray-500 text-xs mt-1">
              악의 마음을 읽는 자들
            </p>
          )}
          
          {/* 좋아요 */}
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