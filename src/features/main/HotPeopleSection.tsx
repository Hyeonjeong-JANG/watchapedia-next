// src/features/people/HotPeopleSection.tsx
'use client';

import { useState, useEffect } from 'react';
import { HotActorCard } from '@/shared/ui/HotActorCard';
import { fetchPersonById } from '@/infrastructure/api/tmdb';
import { POPULAR_KOREAN_ACTORS } from '@/shared/data/popularKoreanActers';


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
          <HotActorCard
            key={person.id}
            rank={index + 1}
            id={person.id}
            name={person.name}
            profile_path={person.profile_path}
            // TMDb에서 제공하지 않는 데이터이므로 더미값이나 별도 API 사용 필요
            // representative_work={person.known_for[0]?.title || person.known_for[0]?.name}
            // likes={...}
            // rank_change={...}
          />
        ))}
      </div>
    </section>
  );
}