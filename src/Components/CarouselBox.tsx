import { useEffect, useState } from "react";
import { IMGURL } from "../utils/helper";
import { Movie } from "../utils/Interfaces";

const CarouselBox = (props: { trendingAll: Movie[]; }) => {
    const [index, setIndex] = useState(0);
    const { trendingAll } = props;
    const totalIndex = trendingAll.length;

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
            <div id="Carousel_Box" className="flex flex-col items-center w-full justify-center relative transition-all  ">
                <section key={trendingAll[index]?.id} id="Carousel_Block" className="w-full flex p-4  gap-4 h-full justify-center opacity-95 bg-gray-900">
                    <img src={IMGURL + trendingAll[index]?.poster_path} alt={trendingAll[index]?.name} className="shadow-xl w-[20em] h-[20em]   rounded-md cursor-pointer " />
                    <div className="flex flex-col">
                        <h1>{trendingAll[index]?.release_date}</h1>
                        <h1 className="font-bold">Language: {trendingAll[index]?.original_language.toLocaleUpperCase()}</h1>
                        <h1 className="px-2 my-2 rounded-sm bg-gray-500 w-max">Country: {trendingAll[index]?.origin_country}</h1>
                        <p className="my-2">Ratings: {Math.floor(trendingAll[index]?.vote_average)}</p>
                        <h1 className="text-sm font-bold my-4">Title: {trendingAll[index]?.original_title || trendingAll[index]?.original_name}</h1>
                        <p className="text-sm my-2 w-96 h-24 overflow-clip ">Overview: {trendingAll[index]?.overview}</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CarouselBox;
