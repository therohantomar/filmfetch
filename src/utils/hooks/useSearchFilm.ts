import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SEARCH_LINK } from "../helper";
import { Movie } from "../Interfaces";

const useSearchFilm = () => {
    const [searchParams] = useSearchParams();
    const [error,setError]=useState(false)
    const [searchedFilm,setSearchedFilm]=useState<Movie[]>([])
    const text=searchParams.get("text")


    useEffect(()=>{
        FETCH_SEARCH()
        async function FETCH_SEARCH(){
            try{
                const response=await fetch(SEARCH_LINK+text,{
                    method:"GET",
                    headers:{
                        accept:"application/json",
                        Authorization:`Bearer ${import.meta.env.VITE_APP_ACCESS_TOKEN}`
                    }
                })
                const data=await response.json()
                setSearchedFilm(data.results)
            }
            catch{
                setError(true)
            }
        }

    },[text])

    return {error, searchedFilm}

}

export default useSearchFilm
