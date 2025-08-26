'use client';

import { useState } from 'react';
import magazines from '@/shared/data/magazines.json';
import { MagazineCard } from '@/shared/ui/MagazineCard';

const ITEMS_PER_SLIDE = 3;

export function MagazineSection() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleMagazines = magazines.slice(startIndex, startIndex + ITEMS_PER_SLIDE);

  const nextSlide = () => {
    if (startIndex + ITEMS_PER_SLIDE < magazines.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="mb-12">
      <div className="flex items-center space-x-4">
        <button onClick={prevSlide} disabled={startIndex === 0} className="px-3 py-2 border rounded-full">
          &#8592;
        </button>
        <div className="flex-1 overflow-hidden">
          <div className="flex gap-4" style={{ transform: `translateX(-${startIndex * (100 / ITEMS_PER_SLIDE)}%)` }}>
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
        <button onClick={nextSlide} disabled={startIndex + ITEMS_PER_SLIDE >= magazines.length} className="px-3 py-2 border rounded-full">
          &#8594;
        </button>
      </div>
    </section>
  );
}