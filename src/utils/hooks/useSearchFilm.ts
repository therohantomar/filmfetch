import { useEffect, useState } from "react"
import {  useSelector } from "react-redux";
import { SEARCH_LINK } from "../helper";
import { Movie } from "../Interfaces";
import { RootState } from "../store";

const useSearchFilm = () => {
    const text=useSelector((store:RootState)=>store.filmSearch.text)
    const [error,setError]=useState(false)
    const [searchedFilm,setSearchedFilm]=useState<Movie[]>([])


    useEffect(()=>{
        const timeoutid=setTimeout(() => {
        FETCH_SEARCH()
        }, 250);
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

        return ()=>{
            clearTimeout(timeoutid)
        }
    },[text])

    return {error, searchedFilm}

}

export default useSearchFilm
