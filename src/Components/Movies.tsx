
import useAllTrendings from "../utils/hooks/useAllTrendings";
import CarouselBox from "./CarouselBox";
import Movielist from "./Movielist";

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
    <main className=" bg-slate-950 min-h-screen flex flex-col gap-10  text-white">
      <CarouselBox trendingAll={trendingAll} />
      <>
        <h1 className="font-bold uppercase animate-pulse text-gray-400">Popular</h1>
        <Movielist Movies={popular} />

      </>
      <>
        <h1 className="font-bold uppercase animate-pulse text-gray-400">Top Rated</h1>
        <div className="flex flex-wrap relative my-4 w-full justify-center h-60 overflow-y-hidden">
        <Movielist Movies={topRated} />
        </div>
      </>
      <span>
        <h1 className="font-bold uppercase animate-pulse text-gray-400">UpComings...</h1>
        <div className="flex flex-wrap relative justify-center my-4 w-full h-60 overflow-y-hidden">
        <Movielist Movies={upcoming} />
        </div>
      </span>
    </main>
  );
};

export default Movies;
