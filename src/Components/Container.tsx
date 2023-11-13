import { useSelector } from "react-redux"
import Footer from "./Footer"
import Navbar from "./Navbar"
import {Outlet} from "react-router-dom"
import Authentication from "./Authentication"
import { RootState } from "../utils/store"
import ResetPassword from "./ResetPassword"

const Container = () => {
  const isOpen=useSelector((store:RootState)=>store.authentication.isOpen)
  const isResetOpen=useSelector((store:RootState)=>store.reset.isResetOpen)
  return (
    <div className="w-full bg-slate-950 min-h-screen ">
    <Navbar/>
    <Outlet/>
    <Footer/>
    {isResetOpen && <ResetPassword/>}
    {isOpen && <Authentication/>}
    </div>
  )
}

export default Container
