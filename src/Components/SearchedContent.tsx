import { Movie } from "../utils/Interfaces";
import useSearchFilm from "../utils/hooks/useSearchFilm";
import { IMGURL } from "../utils/helper";
import { useSelector } from "react-redux";
import { RootState } from "../utils/store";

const SearchedContent = () => {
  const { error, searchedFilm } = useSearchFilm();
  const text = useSelector((store: RootState) => store.filmSearch.text);

  if (error) {
    return <h1>its error</h1>;
  }

  return (
    <div>
      <span className="flex gap-4 items-center  ">
        <h1 className="font-bold text-xl text-white">Your Search For </h1>
        <p className="font-bold uppercase text-2xl text-gray-400">{text}</p>
      </span>
      {searchedFilm?.map((data: Movie) => {
        return (
          <div className="flex gap-4 bg-gray-900 p-4 opacity-90 my-4 text-white w-full h-60" key={data.id}>
            <img
              src={IMGURL + data.poster_path || IMGURL + data.backdrop_path}
              alt={data?.name}
            />
             <span className="overflow-hidden">
                    <h1>{data.original_language}</h1>
                    <h1>{data?.name}</h1>
                    <p>{data?.vote_average}</p>
                    <p>{data?.media_type}</p>
                    <p>{data?.first_air_date}</p>
                    <p className="w-1/2 my-4">{data.overview}</p>
                </span>
          </div>
        );
      })}
    </div>
  );
};

export default SearchedContent;
