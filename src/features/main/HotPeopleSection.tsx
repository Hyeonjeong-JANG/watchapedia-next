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
         {people.map((person, index) => {
           // 대표작 설정 (상위 6명은 실제 작품명, 7위부터는 "Acting")
           const representativeWorks = [
             "폭군의 세프트", 
             "어떻게기억될까", 
             "어떻게기억될까", 
             "특리커", 
             "춤비타", 
             "배우"
           ];
           const representativeWork = index < 6 ? representativeWorks[index] : "Acting";
           
           // 좋아요 수 (이미지와 동일한 값들)
           const baseLikes = [
             199, 9292, 619, 855, 174, 85,    // 1-6위
             159, 1083, 156, 288, 770, 462,   // 7-12위 
             118, 628, 106, 333, 102, 1067,   // 13-18위
             0, 0                             // 19-20위 (이미지에서 보이지 않음)
           ];
           const likes = baseLikes[index] || Math.floor(Math.random() * 500) + 100;
           
           // 랭킹 변화 (이미지와 동일한 패턴)
           const rankChanges = [
             2, 1, 0, 2, 1, 3,    // 1-6위 (▲2, ▲1, NEW, ▲2, ▲1, ▲3)
             0, 0, 0, 0, 0, 0,    // 7-12위 (모두 NEW)
             0, 0, 0, 0, 0, 0,    // 13-18위 (모두 NEW)
             0, 0                 // 19-20위 (NEW)
           ];
           const rankChange = rankChanges[index] || 0;

           return (
             <HotActorCard
               key={person.id}
               rank={index + 1}
               id={person.id}
               name={person.name}
               profile_path={person.profile_path}
               representative_work={representativeWork}
               likes={likes}
               rank_change={rankChange}
             />
           );
         })}
       </div>
    </section>
  );
}