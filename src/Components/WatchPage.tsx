import { useParams } from "react-router-dom";
import useTrailer from "../utils/hooks/useTrailer";
import { TrailerInter } from "../utils/Interfaces";


const WatchPage = () => {
  const { id } = useParams();
  const  {Trailer}  = useTrailer(id) as {Trailer:TrailerInter}

  if(Trailer){
  return ( <div className="realtive ,in-h-screen text-white w-full ">
      <iframe
        className="w-full relative  h-screen"
        src={`https://www.youtube.com/embed/${Trailer?.key}?autoplay=1&controls=0&showinfo=0&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        width={"100%"}
        height={"100%"}
      ></iframe>
      <span className="absolute top-96  bg-gray-400 opacity-50  left-0  text-4xl text-black"></span>
    </div>
  );

}
};



export default WatchPage;
