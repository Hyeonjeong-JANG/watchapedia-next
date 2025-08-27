import { countries } from "./countries";

export interface Person {
  tmdbId: number;
  name: string;
}

export const POPULAR_KOREAN_ACTORS = [
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

export const getActorDisplay = (tmdbId: number): string => {
  const actor = POPULAR_KOREAN_ACTORS.find(a => a.tmdbId === tmdbId);
  return actor ? actor.name : '';
};
