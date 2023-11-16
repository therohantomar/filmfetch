
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../utils/store";
import { addText } from "../utils/filmSearchSlice";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { toggleAuthentication } from "../utils/authenticationSlice";
import { auth } from "../utils/firebaseAuth";
import { BiSolidLogOutCircle } from "react-icons/bi";
import  {Toaster} from "react-hot-toast"
import { SignOut } from "../utils/helper";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const text = useSelector((store: RootState) => store.filmSearch.text);
  const isLogoutOpen=useSelector((store:RootState)=>store.logout.isLogoutOpen)
  

  return (
    <nav className="bg-slate-950 sticky top-0 left-0 right-0 z-10 flex justify-center p-4 gap-10 text-slate-400">
      <Toaster position="top-center"/>
      <span className="flex w-max gap-10">
        <Link to="/">
          <h1 className="cursor-pointer ">Movies</h1>
        </Link>
        <h1 className="cursor-pointer ">Series</h1>
      </span>
      <Link className="w-1/2" to={`search?text=${text}`}>
        <input
          type="text"
          className="text-slate-950 px-2 font-bold  w-full  rounded-sm"
          value={text}
          onChange={(e) => {
            dispatch(addText(e.target.value));
          }}
          placeholder="search..."
        />
      </Link>
      <span className="flex flex-col">
        {isLogoutOpen ? (
           <BiSolidLogOutCircle
           onClick={() => SignOut(auth,dispatch)}
           className="text-2xl hover:text-red-700  cursor-pointer"
         />
        ) : (
          <FaUserCircle
          onClick={() => {
            dispatch(toggleAuthentication());
          }}
          className="text-2xl cursor-pointer"
        />
        )}
        <h1 className="text-xs">{auth?.currentUser?.email?.slice(0, 6)}</h1>
      </span>
    </nav>
  );
};

export default Navbar;
