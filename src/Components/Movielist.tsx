import { Movie } from '../utils/Interfaces'
import { IMGURL } from '../utils/helper'
import { BiChevronRight, BiChevronLeft } from "react-icons/bi"
import { useRef } from 'react';


const MovieList = (props:{Movies:Movie[]}) => {
    const {Movies} = props;
    const boxRef = useRef(null);

    function prev() {
        const box = boxRef.current;
        if (box) {
            box.scrollLeft = box.clientWidth-box.scrollLeft;
        }
    }

    function next() {
        const box = boxRef.current;
        if (box) {
            box.scrollLeft = box.clientWidth+box.scrollLeft;
        }
    }

    return (
        <div className='flex relative  overflow-x-hidden over-y-hidden'>
            <div  className="absolute h-full flex items-center bg-gray-800 opacity-80 left-0">
                <BiChevronLeft  onClick={prev} className="text-2xl cursor-pointer"/>
            </div>
            <div ref={boxRef} className="flex flex-shrink-0 h-max overflow-hidden">
                {Movies.map((data: Movie) => {
                    return (
                        <div   key={data?.id} className="mx-2 w-60 h-60 ">
                            <img src={IMGURL+data.poster_path} alt={data.name} className="w-full rounded-sm h-60" />
                        </div>
                    )
                })}
            </div>
            <div className="absolute h-full flex items-center bg-gray-800 opacity-80 right-0">
                <BiChevronRight onClick={next} className="text-2xl cursor-pointer"/>
            </div>
        </div>
    )
}

export default MovieList;
