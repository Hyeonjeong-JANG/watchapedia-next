'use client';

import { useState } from 'react';
import magazines from '@/shared/data/magazines.json';
import { MagazineCard } from '@/shared/ui/MagazineCard';

const ITEMS_PER_SLIDE = 3;

export function MagazineSection() {
  const visibleMagazines = magazines.slice(0, ITEMS_PER_SLIDE);

  return (
    <section className="mb-12">
      <div className="flex items-center space-x-4">
        <div className="flex-1 overflow-hidden">
          <div className="flex gap-4">
            {visibleMagazines.map((magazine) => (
              <div key={magazine.id} className="min-w-0 flex-none w-1/3">
                <MagazineCard
                  id={magazine.id}
                  tag={magazine.tag}
                  title={magazine.title}
                  subTitle={magazine.subTitle}
                  image={magazine.images[0]} // 표지 이미지만 사용
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}