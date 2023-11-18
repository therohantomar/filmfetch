import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { SEARCH_LINK } from "../helper";
import { Movie } from "../Interfaces";
import { RootState } from "../store";

const useSearchFilm = (page: number, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    const text = useSelector((store: RootState) => store.filmSearch.text)
    const [error, setError] = useState(false)
    const [searchedFilm, setSearchedFilm] = useState<Movie[]>([])
    const [prevText, setPrevText] = useState(text)


    useEffect(() => {
        const timeoutid = setTimeout(() => {
            FETCH_SEARCH()
        }, 250);
        async function FETCH_SEARCH() {
            if (prevText != text) {
                setPrevText(text)
                setSearchedFilm([])
            }
            try {
                const response = await fetch(SEARCH_LINK + `&page=${page}&query=${text}`, {
                    method: "GET",
                    headers: {
                        accept: "application/json",
                        Authorization: `Bearer ${import.meta.env.VITE_APP_ACCESS_TOKEN}`
                    }
                })
                const data = await response.json()
                if (text === "") {
                    setSearchedFilm([])
                }
                setSearchedFilm(prev => [...prev, ...data.results])
                setLoading(false)
            }
            catch {
                setError(true)
            }
        }

        return () => {
            clearTimeout(timeoutid)
        }
    }, [text, page])

    return { error, searchedFilm }

}

export default useSearchFilm
