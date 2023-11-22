import { Movie } from "../utils/Interfaces";
import { IMGURL } from "../utils/helper";
import { FaCirclePlay } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function SeriesCard(props: Movie) {
  const { id, poster_path, name } = props;
  const Navigate=useNavigate()
  return (
    <div key={id}  className="bg-white  transition-all w-max rounded " >
      <img src={IMGURL + poster_path} alt={name} className="w-60 p-2 hover:p-0 cursor-pointer h-60" />
      <p className="text-black">{name}</p>
      <span className="flex items-center p-2 gap-2  text-black"><FaCirclePlay className="text-black cursor-pointer" onClick={()=>Navigate(`/video/${id}?v=series`)} />Play Trailer</span>
    </div>
  );
}

export default SeriesCard;
