
import { Movie } from "../utils/Interfaces";
import { IMGURL } from "../utils/helper";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { useRef } from "react";
import  {FaCirclePlay} from "react-icons/fa6"
import { useNavigate } from "react-router-dom";

const MovieList = (props: { Movies: Movie[] }) => {
  const { Movies } = props;
  const boxRef = useRef<HTMLDivElement>(null);
  const Navigate=useNavigate()

  function prev() {
    const box = boxRef.current;
    if (box) {
      box.scrollLeft = box?.clientWidth - box?.scrollLeft;
    }
  }

  function next() {
    const box = boxRef.current;
    if (box) {
      box.scrollLeft = box?.clientWidth + box?.scrollLeft;
    }
  }

  
  return (
    <div className="relative  w-full h-60">
      
      <span ref={boxRef}  className="grid scroll-smooth  overflow-x-hidden">
        <div className="flex w-max overflow-y-hidden items-center   overflow-x-hidden">
          {Movies.map((data: Movie) => {
            return (
              <div key={data?.id}    className="mx-2 relative group  cursor-pointer  hover:scale-105   transition-all  w-60 h-60 ">
                <img
                  src={IMGURL + data.poster_path}
                  alt={data.name}
                  className="w-full rounded-sm h-60"
                />
              <div className="absolute -bottom-30  transition-all delay-1000 left-0 opacity-90  right-0 group-hover:bottom-0 bg-slate-700  w-full h-24">
                {/* <h1 className="text-slate-100 font-bold text-sm font-mono">{data.original_title}</h1> */}
                <span className="inline-flex items-center gap-5"><FaCirclePlay onClick={()=>Navigate(`/video/${data?.id}`)} className="text-xl cursor-pointer" /> Play Trailer</span>

                <h1 className="text-slate-100 font-bold text-sm font-mono">Release Date: {data.release_date}</h1>
                <h1 className="text-slate-100 font-bold text-sm font-mono">{data.origin_country}</h1>
                {/* <p className="text-xs my-2 font-semibold ">{data.overview}</p> */}
              </div>
              </div>
            );
          })}
        </div>
      </span>
      <div className="absolute  h-full flex items-center  bg-red-900 opacity-95 top-0 right-0">
      <BiChevronRight onClick={next} className="text-2xl cursor-pointer" />

      </div>
      <div className="absolute   h-full flex items-center  bg-red-900 opacity-95 top-0 left-0">
        <BiChevronLeft onClick={prev} className="text-2xl cursor-pointer" />

      </div>
    </div>
  );
};

export default MovieList;
