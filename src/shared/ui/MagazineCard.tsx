// src/shared/ui/MagazineCard.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MagazineCardProps {
  id: number;
  tag: string;
  title: string;
  subTitle: string;
  image: string;
}

export function MagazineCard({ id, tag, title, subTitle, image }: MagazineCardProps) {
  return (
    <Link href={`/magazines/${id}`}>
      <div className="relative rounded-lg shadow-md overflow-hidden cursor-pointer">
        <div className="relative w-full pb-[100%]"> {/* 가로세로 비율 1:1 */}
          <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        </div>
        
        {/* 상단 '인기 아티클' 태그 */}
        <div className="absolute top-0 left-0 p-2">
          <div className="bg-black text-white text-xs font-bold px-2 py-1 rounded">
            {tag}
          </div>
        </div>

        {/* 하단 내용: 와차 로고, 태그, 제목, 부제목 */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
          <div className="flex items-center mb-2">
            {/* 와차 로고 */}
            {/* 이 부분은 와차 로고 이미지 컴포넌트나 SVG를 사용하세요 */}
            <Image src="/images/logo-mini-round.png" alt="와차 로고" width={20} height={20} />
            {/* 아티클 태그 */}
            <span className="text-white text-xs font-bold ml-1">{tag}</span>
          </div>
          <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
          <p className="text-sm mt-1 line-clamp-2">{subTitle}</p>
        </div>
      </div>
    </Link>
  );
}