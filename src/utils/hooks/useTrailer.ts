import {useEffect, useState} from "react"
import { TrailerInter } from "../Interfaces";

export default function useTrailer(id:string | undefined){
  const [Trailer, setTrailer] = useState<unknown | TrailerInter>({});


    useEffect(() => {
        async function fetchTrailer() {
          const response = await fetch(
            `http://api.themoviedb.org/3/movie/${id}/videos?api_key=${
              import.meta.env.VITE_APP_API_KEY
            }`
          );
          const data:{results:TrailerInter[]} = await response.json();
          setTrailer(data.results[3]);
        }
        fetchTrailer();
      }, [id]);

  
      return {Trailer}
}






