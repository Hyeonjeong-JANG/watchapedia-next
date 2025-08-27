// 영화 API
import { Movie } from '@/shared/types/movie';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const API_HOST = process.env.NEXT_PUBLIC_TMDB_API_HOST;

// HOT RANKING
export async function fetchPopularMovies() {
  if (!API_KEY || !API_HOST) {
    console.error("API 환경 변수가 설정되지 않았습니다.");
    return null;
  }

  try {
    const url = `${API_HOST}/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;
    console.log("url: ", url);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP 오류: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("인기 영화를 불러오는 중 오류 발생:", error);
    return null;
  }
}

// UPCOMING MOVIES
export async function fetchUpcomingMovies(): Promise<Movie[] | null> {
  if (!API_KEY || !API_HOST) {
    console.error("API 환경 변수가 설정되지 않았습니다.");
    return null;
  }

  try {
    const url = `${API_HOST}/3/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP 오류: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("공개 예정 영화를 불러오는 중 오류 발생:", error);
    return null;
  }
}

// HOT PEOPLE
export async function fetchPersonById(personId: number) {
  if (!API_KEY || !API_HOST) {
    console.error("API 환경 변수가 설정되지 않았습니다.");
    return null;
  }

  try {
    // URL 수정: ? 뒤에 api_key와 language를 함께 추가
    const url = `${API_HOST}/3/person/${personId}?api_key=${API_KEY}&language=ko-KR`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP 오류: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("인물 정보를 불러오는 중 오류 발생:", error);
    return null;
  }
}