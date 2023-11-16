import toast from "react-hot-toast/headless";
import { AppDispatch } from "./store";
import { Auth,signOut } from "firebase/auth";
import { toggleLogout } from "./logoutSlice";

export const IMGURL="https://image.tmdb.org/t/p/w500"
export const MOVIE_BY_CATEGORY_LINK="https://api.themoviedb.org/3/movie/"
export const ALL_TRENDINGS="https://api.themoviedb.org/3/trending/all/day?language=en-US"
export const  SEARCH_LINK="https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query="
export const  TRAILER="https://api.themoviedb.org/3/movie/297762/videos"

export function SignOut(auth:Auth, dispatch:AppDispatch ) {
    signOut(auth)
      .then(() => {
      toast.success("sucessfully Logged out")
      dispatch(toggleLogout())
      })
      .catch((err) => console.log(err));
  }