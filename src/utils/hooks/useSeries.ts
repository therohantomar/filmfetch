import { useEffect, useState } from "react";
import { Movie } from "../Interfaces";

const useSeries = () => {
  const [popular, SetPopular] = useState<Movie[]>([]);
  const [topRated, SetTopRated] = useState<Movie[]>([]);
  const [upcoming, SetUpcoming] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function FETCHUPCOMING() {
    const response = await fetch(
      `${"https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1"}`,
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
      `${"https://api.themoviedb.org/3/tv/" + "top_rated?language=en-US&page=1"}`,
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
    const response = await fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
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

  useEffect(() => {
    Promise.allSettled([
      FETCHPOPULAR(),
      FETCHTOPRATED(),
      FETCHUPCOMING(),
    ])
      .then((response) => {
        if (response[0].status === 'fulfilled') {
          SetPopular(response[0].value.results);
        } else {
          setError(true);

        }

        if (response[1].status === 'fulfilled') {
          SetTopRated(response[1].value.results);
        } else {
          setError(true);

        }

        if (response[2].status === 'fulfilled') {
          SetUpcoming(response[2].value.results);
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


  return {  popular, topRated, upcoming, loading, error };
};

export default useSeries;
