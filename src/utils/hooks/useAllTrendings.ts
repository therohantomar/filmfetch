import { useEffect, useState } from "react";
import { ALL_TRENDINGS, MOVIE_BY_CATEGORY_LINK } from "../helper";
import {  Movie } from "../Interfaces";

const useAllTrendings = () => {
  const [trendingAll, SetTrendingAll] = useState<Movie[]>([]);
  const [popular, SetPopular] =useState<Movie[]>([]);
  const [topRated, SetTopRated] = useState<Movie[]>([]);
  const [upcoming, SetUpcoming] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function FETCHUPCOMING() {
    const response = await fetch(
      `${MOVIE_BY_CATEGORY_LINK + "upcoming?language=en-US&page=1"}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_APP_ACCESS_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    return data;
  }

  async function FETCHTOPRATED() {
    const response = await fetch(
      `${MOVIE_BY_CATEGORY_LINK + "top_rated?language=en-US&page=1"}`,
      {
        method: "GET",
        headers: {

          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_APP_ACCESS_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    return data;
  }

  async function FETCHPOPULAR() {
    const response = await fetch(
      `${MOVIE_BY_CATEGORY_LINK + "popular?language=en-US&page=1"}`,
      {
        method: "GET",
        headers: {


          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_APP_ACCESS_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    return data;
  }

  async function FETCHTRENDING() {
    const response = await fetch(`${ALL_TRENDINGS}`, {
      method: "GET",
      headers: {

        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_APP_ACCESS_TOKEN}`,
      },
    });
    const data = await response.json();
    return data;
  }
  useEffect(() => {
    Promise.allSettled([
      FETCHTRENDING(),
      FETCHPOPULAR(),
      FETCHTOPRATED(),
      FETCHUPCOMING(),
    ])
      .then((response) => {
       console.log(response)
        if (response[0].status === 'fulfilled') {
        
          SetTrendingAll(response[0].value.results);
        } else {
           setError(true);
        }
  
        if (response[1].status === 'fulfilled') {
          SetPopular(response[1].value.results);
        } else {
          setError(true);
          
        }
  
        if (response[2].status === 'fulfilled') {
          SetTopRated(response[2].value.results);
        } else {
          setError(true);
          
        }
  
        if (response[3].status === 'fulfilled') {
          SetUpcoming(response[3].value.results);
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  

  return { trendingAll, popular, topRated, upcoming, loading, error };
};

export default useAllTrendings;
