export enum MagazineCategory {
  ARTICLE = '아티클',
  WATCHAPEDIA_INTERVIEW = '왓피인터뷰',
  CURATION = '큐레이션',
  CONTENT_NEWS = '콘텐츠소식',
  WATCHA_DIGGING_CLUB = '#왓챠디깅클럽',
  OPEN_EDITOR = '오픈에디터',
}

export interface Magazine {
  id: number;
  title: string;
  subTitle: string;
  tag: MagazineCategory; 
}