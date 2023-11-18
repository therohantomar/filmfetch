import { useEffect, useState } from "react";
import { IMGURL } from "../utils/helper";
import { Movie } from "../utils/Interfaces";
import { FaCirclePlay, FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const CarouselBox = (props: { trendingAll: Movie[]; }) => {
    const [index, setIndex] = useState(0);
    const { trendingAll } = props;
    const totalIndex = trendingAll.length;
    const Navigate=useNavigate()

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % totalIndex);
        }, 2000);

        return () => {
            clearInterval(intervalId);
        };
    }, [totalIndex]);

    return (
        <div>
            <div id="Carousel_Box" className="flex flex-col items-center bg-movieAlbum w-full justify-center relative transition-all  ">
                <section key={trendingAll[index]?.id} id="Carousel_Block" className="w-full flex p-4  gap-4 h-full justify-center flex-wrap bg-slate-800 opacity-95">
                    <img src={IMGURL + trendingAll[index]?.poster_path} alt={trendingAll[index]?.name} className="shadow-xl   w-2/5   h-[35rem] object-center  rounded-md cursor-pointer " />
                    <div className="flex flex-col absolute  bottom-8 left-20  ">
                        <h1>{trendingAll[index]?.release_date}</h1>
                        <h1 className="font-bold">Language: {trendingAll[index]?.original_language.toLocaleUpperCase()}</h1>
                        <h1 className="px-2 my-2 rounded-sm bg-gray-500 w-max">Country:{trendingAll[index]?.origin_country}</h1>
                        <p className="my-2 flex items-center px-2  w-max  rounded-sm bg-gray-500 gap-4 ">Ratings: {Math.floor(trendingAll[index]?.vote_average)} <FaStar/></p>
                        <span className="inline-flex items-center gap-5"><FaCirclePlay onClick={()=>Navigate(`/video/${trendingAll[index]?.id}`)} className="text-xl cursor-pointer" /> Play Trailer</span>
                        <h1 className="text-sm font-bold my-4">Title: {trendingAll[index]?.original_title || trendingAll[index]?.original_name}</h1>
                        <p className="text-sm my-2 w-96 h-24 overflow-clip">Overview: {trendingAll[index]?.overview}</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CarouselBox;
