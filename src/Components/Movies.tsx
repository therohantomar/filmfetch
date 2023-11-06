import { Movie } from "../utils/Interfaces";
import useAllTrendings from "../utils/hooks/useAllTrendings";
import Carousel from "./Carousel";

const Movies = () => {
  const { trendingAll, popular, topRated, upcoming, loading, error } =
    useAllTrendings();
  if (error) {
    return <h1>error occured</h1>;
  }
  if (loading) {
    return <h1>loading.....</h1>;
  }

  return (
    <main className="w-full bg-slate-950 text-white h-full">
      <h1 className="text-2xl font-mono font-bold">Trending</h1>
      <div className="flex flex-wrap  border-2  h-60 w-full overflow-y-hidden">
        {trendingAll.map((data: Movie) => {
          return <Carousel key={data.id} {...data} />;
        })}
      </div>
      <>
        <h1>Popular</h1>
        <div className="flex flex-wrap my-4 w-full h-80 overflow-y-hidden">
          {popular.map((data: Movie) => {
            return <Carousel key={data.id} {...data} />;
          })}
        </div>
      </>
      <>
        <h1>Top Rated</h1>
        <div className="flex flex-wrap my-4 w-full h-60 overflow-y-hidden">
          {topRated.map((data: Movie) => {
            return <Carousel key={data.id} {...data} />;
          })}
        </div>
      </>
      <>
        <h1>UpComings...</h1>
        <div className="flex flex-wrap my-4 w-full h-60 overflow-y-hidden">
          {upcoming.map((data: Movie) => {
            return <Carousel key={data.id} {...data} />;
          })}
        </div>
      </>
    </main>
  );
};

export default Movies;
