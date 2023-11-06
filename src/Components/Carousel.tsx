import { Movie } from "../utils/Interfaces";
import { IMGURL } from "../utils/helper";

const Carousel = (props: Movie) => {
  const {
    name,
    origin_country,
    original_language,
    original_name,
    overview,
    poster_path,
  } = props;
  return (<section className="w-1/4 flex border-2 gap-4 text-black border-black h-full mx-2">
           <img src={IMGURL+poster_path}  alt={name} className="w-60 rounded-md cursor-pointer  h-full" />
           <div>
            <h1>{original_language}</h1>
            <h1>{origin_country}</h1>
            <h1>{original_name}</h1>
            <p>{overview}</p>
           </div>

          </section>);
};

export default Carousel;
