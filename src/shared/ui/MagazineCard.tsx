import React from 'react';
import Link from 'next/link';

interface MagazineCardProps {
  id: number;
  tag: string;
  title: string;
  subTitle: string;
  image: string; // 표지 이미지 경로
}

export function MagazineCard({ id, tag, title, subTitle, image }: MagazineCardProps) {
  return (
    <Link href={`/magazines/${id}`}>
      <div className="rounded-lg shadow-md overflow-hidden bg-white cursor-pointer">
        <div className="aspect-w-16 aspect-h-9">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <span className="text-xs text-gray-500">{tag}</span>
          <h3 className="font-semibold text-lg mt-1 line-clamp-2">{title}</h3>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{subTitle}</p>
        </div>
      </div>
    </Link>
  );
}