import React from "react";
import { Movie } from "../utils/Interfaces";
import { IMGURL } from "../utils/helper";

const Carousel = (props: Movie) => {
  const {
    adult,
    backdrop_path,
    id,
    media_type,
    name,
    origin_country,
    original_language,
    original_name,
    overview,
    poster_path,
  } = props;
  return (<section className="w-max   h-full mx-2">
           <img src={IMGURL+poster_path} alt={name} className="w-60 h-full" />

          </section>);
};

export default Carousel;
