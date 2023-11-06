import {useSearchParams} from "react-router-dom"
import {useEffect, useState} from "react"
import { SEARCH_LINK } from "../utils/helper";

const SearchedContent = () => {
    const [searchParams] = useSearchParams();
    const [SearchedFilm,setSearchedFilm]=useState([])
    const text=searchParams.get("text")


    useEffect(()=>{
        FETCH_SEARCH()
        async function FETCH_SEARCH(){
            const response=await fetch(SEARCH_LINK+text,{
                method:"GET",
                headers:{
                    accept:"application/json",
                    Authorization:`Bearer ${import.meta.env.VITE_APP_ACCESS_TOKEN}`
                }
            })

            const data=await response.json()
            setSearchedFilm(data)
            
        }

    },[text])

  return (
    <div className="text-white w-full min-h-screen bg-slate-950">
      {text}
    </div>
  )
}

export default SearchedContent
