import Navbar from "./Navbar"
import {Outlet} from "react-router-dom"


const Container = () => {
  return (
    <div className="w-full bg-slate-950 h-full ">
    <Navbar/>
    <Outlet/>
    </div>
  )
}

export default Container
