import useSeries from "../utils/hooks/useSeries"
import CarouselShimmer from "./CarouselShimmer";
import MovielistShimmer from "./MovielistShimmer";
import SeriesCard from "./SeriesCard";

function Series() {
    const {popular, topRated, upcoming, loading, error}=useSeries()

    if (error) {
        return <div className="min-h-screen text-white"><h1>error occured</h1></div>;
      }
      if (loading) {
        return (<><CarouselShimmer/><MovielistShimmer/><MovielistShimmer/><MovielistShimmer/></>);
      }
      return (
        <main className=" bg-slate-950 min-h-screen w-full  flex flex-col gap-10  text-white">
           <h1 className="font-bold text-md">top_Rated</h1>
        <section className="flex gap-2 flex-wrap  w-full ">
          {topRated?.map((series)=>{
            return (<SeriesCard {...series}/>)
          })}
        </section>
        <h1 className="font-bold text-md">popular</h1>
        <section className="flex gap-2 flex-wrap  w-full ">
          {popular?.map((series)=>{
            return (<SeriesCard {...series}/>)
          })}
        </section>
        <h1 className="font-bold text-md">upcoming</h1>

        <section className="flex gap-2 flex-wrap  w-full ">
          {upcoming?.map((series)=>{
            return (<SeriesCard {...series}/>)
          })}
        </section>
        </main>
      );
    }


export default Series
