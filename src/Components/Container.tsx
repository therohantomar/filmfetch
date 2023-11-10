import { useSelector } from "react-redux"
import Footer from "./Footer"
import Navbar from "./Navbar"
import {Outlet} from "react-router-dom"
import Authentication from "./Authentication"
import { RootState } from "../utils/store"

const Container = () => {
  const isOpen=useSelector((store:RootState)=>store.authentication.isOpen)
  return (
    <div className="w-full bg-slate-950 min-h-screen ">
    <Navbar/>
    <Outlet/>
    <Footer/>
    {isOpen && <Authentication/>}
    </div>
  )
}

export default Container
