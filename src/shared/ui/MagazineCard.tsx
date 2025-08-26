// src/shared/ui/MagazineCard.tsx

import React from 'react';
import Link from 'next/link';

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
        <div className="relative w-full pb-[66.666%]"> {/* 가로세로 비율 3:2 */}
          <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
          <div className="bg-black text-white text-xs font-bold px-2 py-1 rounded w-fit">{tag}</div>
          <h3 className="font-semibold text-lg mt-1 line-clamp-2">{title}</h3>
          <p className="text-sm mt-1 line-clamp-2">{subTitle}</p>
        </div>
      </div>
    </Link>
  );
}