import { Movie } from "../utils/Interfaces";
import { IMGURL } from "../utils/helper";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { useRef } from "react";

const MovieList = (props: { Movies: Movie[] }) => {
  const { Movies } = props;
  const boxRef = useRef<HTMLDivElement>(null);

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
    <div className="relative w-full h-60">
      <div className="absolute  h-full flex items-center bg-gray-800 opacity-80 top-0 right-0">
        <BiChevronRight onClick={next} className="text-2xl cursor-pointer" />
      </div>
      <span ref={boxRef} className="grid    overflow-x-hidden  ">
        <div className="flex w-max overflow-x-hidden">
          {Movies.map((data: Movie) => {
            return (
              <div key={data?.id}  className="mx-2 shadow-2xl cursor-pointer p-2 transition-all hover:p-0 w-60 h-60 ">
                <img
                  src={IMGURL + data.poster_path}
                  alt={data.name}
                  className="w-full    rounded-sm h-60"
                />
                <h1 className="hidden hover:block">hello</h1>
              </div>
            );
          })}
        </div>
      </span>
      <div className="absolute  h-full flex items-center z-10 bg-gray-800 opacity-80 top-0 left-0">
        <BiChevronLeft onClick={prev} className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default MovieList;
