// src/features/people/HotPeopleSection.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchPersonById } from '@/infrastructure/api/tmdb';

// Cine21 기사에서 언급된 배우 목록 (TMDb ID 연결)
const POPULAR_KOREAN_ACTORS = [
  { tmdbId: 75913, name: '하정우' },
  { tmdbId: 1251581, name: '김수현' },
  { tmdbId: 2117890, name: '변우석' },
  { tmdbId: 1223316, name: '조정석' },
  { tmdbId: 1024395, name: '마동석' },
  { tmdbId: 1067849, name: '김고은' },
  { tmdbId: 582130, name: '김지원' },
  { tmdbId: 1329984, name: '임지연' },
  { tmdbId: 1787992, name: '고민시' },
  { tmdbId: 1470763, name: '정해인' },
  { tmdbId: 73249, name: '이정재' },
  { tmdbId: 74421, name: '송혜교' },
  { tmdbId: 63436, name: '전지현' },
  { tmdbId: 86889, name: '손예진' },
  { tmdbId: 1988598, name: '박지현' },
  { tmdbId: 2200230, name: '추영우' },
  { tmdbId: 1929194, name: '홍경' },
  { tmdbId: 3276709, name: '채원빈' },
  { tmdbId: 2791233, name: '고윤정' },
  { tmdbId: 1257587, name: '노정의' },
];

export function HotPeopleSection() {
  const [people, setPeople] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPeopleData = async () => {
      setLoading(true);
      const fetchedPeople = await Promise.all(
        POPULAR_KOREAN_ACTORS.map(actor => fetchPersonById(actor.tmdbId))
      );
      const validPeople = fetchedPeople.filter(p => p !== null);
      setPeople(validPeople);
      setLoading(false);
    };

    getPeopleData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48 text-gray-500">
        인기 배우 정보를 불러오는 중입니다...
      </div>
    );
  }

  return (
    <section className="mb-12">
      <div className="flex items-center justify-start mb-6 gap-2">
        <div className="text-xs font-semibold bg-gray-500 text-white px-1 py-0.5 rounded">Beta</div>
        <h2 className="text-xl font-bold">한국에서 인기 있는 배우</h2>
        <div className="text-gray-400 text-sm ml-2 cursor-pointer">ⓘ</div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {people.map((person, index) => (
          <Link href={`/person/${person.id}`} key={person.id}>
            <div className="group cursor-pointer">
              <div className="relative w-full aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                {person.profile_path && (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                    alt={person.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                )}
                
                <div className="absolute top-2 left-2">
                  <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded">
                    {index + 1}
                  </span>
                </div>
              </div>
              <div className="mt-2 text-left">
                <h3 className="font-semibold text-sm leading-tight line-clamp-1">
                  {person.name}
                </h3>
                {person.known_for && person.known_for.length > 0 && (
                  <p className="text-gray-500 text-xs mt-1 line-clamp-1">
                    {person.known_for[0].title || person.known_for[0].name}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}