import { useState } from "react";
import { Movie } from "../utils/Interfaces";
import useSearchFilm from "../utils/hooks/useSearchFilm";
import { IMGURL } from "../utils/helper";
import { useSelector } from "react-redux";
import { RootState } from "../utils/store";
import { AiFillStar } from "react-icons/ai";
import { FaPlayCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useScrollable } from "../utils/hooks/useScrollable";

const SearchedContent = () => {
  const [loading, setloading] = useState<boolean>(false);
  const page = useScrollable(setloading);
  const { error, searchedFilm } = useSearchFilm(page, setloading);
  const text = useSelector((store: RootState) => store.filmSearch.text);
  const Navigate = useNavigate();

  // early returns
  if (error) {
    return <h1>its error</h1>;
  }

  return (
    <div id="scroll" className="h-screen ">
      <span className="flex gap-4 items-center  ">
        <h1 className="font-bold sm:text-lg md:text-lg xs:text-lg lg:text-xl xl:text-xl 2xl:text-xl  text-white">
          {text === ""
            ? "Type in something to get the results"
            : "Your Search For"}{" "}
        </h1>
        <p className="font-bold uppercase sm:text-lg md:text-lg xs:text-lg lg:text-xl xl:text-xl 2xl:text-xl  text-gray-400">
          {text}
        </p>
      </span>
      <h1 className="font-bold text-xl  text-gray-500">
        {text === "" ? "" : searchedFilm.length + " " + "Results found"}{" "}
      </h1>
      {searchedFilm?.map((data: Movie) => {
        return (
          <div
            className="flex  gap-4 bg-gray-900 p-2 opacity-90 my-4 text-white w-full h-60"
            key={data.id}
          >
            <img
              src={IMGURL + data.poster_path || IMGURL + data.backdrop_path}
              alt={data?.name}
            />
            <span className="mx-2 overflow-hidden">
              <h1 className="px-2  mr-2 items-center gap-2 bg-gray-500 rounded-sm w-max my-2">
                Release Date: {data.release_date.toLocaleUpperCase()}
              </h1>
              <h1 className="px-2 inline-flex mr-2 items-center gap-2 bg-gray-500 rounded-sm w-max my-2">
                Language: {data.original_language.toLocaleUpperCase()}
              </h1>
              <p className="px-2 inline-flex items-center gap-2 bg-gray-500 rounded-sm w-max">
                Ratings: {Math.floor(data?.vote_average)}
                <AiFillStar />
              </p>
              <h1 className="xs:text-xs   sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-lg  font-bold  ">
                Title: {data?.original_title}
              </h1>
              <FaPlayCircle
                onClick={() => Navigate("/video/" + data?.id)}
                className="inline-flex text-xl cursor-pointer"
              />
              <p>{data?.media_type}</p>
              <p>{data?.first_air_date}</p>
              <p className=" xs:text-xs sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-lg my-2">
                {data.overview}
              </p>
            </span>
          </div>
        );
      })}
      {loading &&
        Array(1)
          .fill(0)
          .map((index) => (
            <span key={index}>
              {" "}
              <div className="w-full h-60 animate-pulse my-2 bg-slate-800"></div>
            </span>
          ))}
    </div>
  );
};

export default SearchedContent;
