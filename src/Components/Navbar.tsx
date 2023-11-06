import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../utils/store"
import { addText } from "../utils/filmSearchSlice"
import {Link} from "react-router-dom"
const Navbar = () => {
  const dispatch=useDispatch<AppDispatch>()
  const text=useSelector((store:RootState)=>store.filmSearch.text)

  return (
    <nav className="bg-slate-950 sticky top-0 left-0 right-0 z-10 flex justify-center p-4 gap-10 text-slate-400">
      <span className="flex gap-10">
        <h1  className="cursor-pointer ">Movies</h1>
        <h1 className="cursor-pointer ">Series</h1>
      </span>
      <Link to={`search?text=${text}`}><input type="text" value={text} onChange={(e)=>{dispatch(addText(e.target.value))}} placeholder="search..." /></Link>
      <h1 className="cursor-pointer ">user</h1>
    </nav>
  )
}

export default Navbar
