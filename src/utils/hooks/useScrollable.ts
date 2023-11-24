
import { useState, useEffect, SetStateAction } from "react"
export function useScrollable(setLoading:React.Dispatch<SetStateAction<boolean>>) {
    const [page, setPage] = useState(1);

    function scrollTap() {
        if (
            window.innerHeight + document.documentElement.scrollTop+1 >=
            document.documentElement.scrollHeight
        ) {
            setLoading(true)
            setPage((prev) => prev + 1);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", scrollTap);
        return () => {
            window.removeEventListener("scroll", scrollTap);
        };
    }, []);


    return page

}