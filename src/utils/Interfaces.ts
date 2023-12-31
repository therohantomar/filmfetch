export interface Movie {
    adult: boolean;
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    name: string;
    origin_country: string[];
    original_title:string;
    original_language: string;
    original_name: string;
    release_date:string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
  }
  

 export interface Show {
    page:number,
    results:Movie[]
  }

  export interface Response{
    status:string,
    value:Show
  }
  export interface All{
    trendingAll:Show,
    popular:Show,
    topRated:Show,
    upcoming:Show,
    loading:boolean,
    error:boolean
  }


  export interface TrailerInter{
    id:string,
    name:string,
    key:string,


  }