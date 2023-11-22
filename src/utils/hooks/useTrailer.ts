import {useEffect, useState} from "react"
import { TrailerInter } from "../Interfaces";

export default function useTrailer(id:string | undefined, type: string | null){
  const [Trailer, setTrailer] = useState<TrailerInter | null>();


    useEffect(() => {
        async function fetchTrailer() {
          const response = await fetch(
            `https://api.themoviedb.org/3/${type==="series"?"tv":"movie"}/${id}/videos?api_key=${
              import.meta.env.VITE_APP_API_KEY
            }`
          );
          const data:{results:TrailerInter[]} = await response.json();
          setTrailer(data.results[0]);
        }
        fetchTrailer();
      }, [id]);

  
      return {Trailer}
}






