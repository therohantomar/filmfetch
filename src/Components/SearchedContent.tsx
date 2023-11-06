import { Movie } from "../utils/Interfaces"
import useSearchFilm from "../utils/hooks/useSearchFilm"
import { IMGURL } from "../utils/helper"


const SearchedContent = () => {
const {error, searchedFilm}= useSearchFilm()

 if(error){
 return <h1>its error</h1>
 }

 return (
    <div className="text-white w-full flex flex-col gap-4 min-h-screen bg-slate-950">
      {searchedFilm?.map((data:Movie)=>{
        return (<div className="flex gap-4" key={data.id}>
          <img src={IMGURL+data.poster_path || IMGURL+data.backdrop_path} alt={data.name} />
          <h1>{data.original_name}</h1>
          <h1>{data.origin_country}</h1>
        </div>)
      })}
    </div>
  )
}

export default SearchedContent
