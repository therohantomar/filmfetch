
import useAllTrendings from "../utils/hooks/useAllTrendings";
import CarouselBox from "./CarouselBox";
import Movielist from "./Movielist";
import CarouselShimmer from "./CarouselShimmer";
import MovielistShimmer from "./MovielistShimmer";

const Movies = () => {
  const { trendingAll, popular, topRated, upcoming, loading, error } =
    useAllTrendings();
  if (error) {
    return <h1>error occured</h1>;
  }
  if (loading) {
    return (<><CarouselShimmer/><MovielistShimmer/><MovielistShimmer/><MovielistShimmer/></>);
  }

  return (
    <main className=" bg-slate-950 min-h-screen w-full  flex flex-col gap-10  text-white">
      <CarouselBox trendingAll={trendingAll} />
        <h1 className="font-bold uppercase text-xl text-red-700">Popular</h1>
        <Movielist Movies={popular} />
        <h1 className="font-bold uppercase text-xl text-red-700">Top Rated</h1>
        <Movielist Movies={topRated} />
        <h1 className="font-bold uppercase text-xl text-red-700">UpComings...</h1>
        <Movielist Movies={upcoming} />
    </main>
  );
};

export default Movies;
