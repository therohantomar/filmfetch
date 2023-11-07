
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
    <main className=" bg-slate-950 min-h-screen w-full  flex flex-col gap-10  text-white">
      <CarouselBox trendingAll={trendingAll} />
        <h1 className="font-bold uppercase animate-pulse text-gray-100">Popular</h1>
        <Movielist Movies={popular} />
        <h1 className="font-bold uppercase animate-pulse text-gray-100">Top Rated</h1>
        <Movielist Movies={topRated} />
        <h1 className="font-bold uppercase animate-pulse text-gray-100">UpComings...</h1>
        <Movielist Movies={upcoming} />
    </main>
  );
};

export default Movies;
