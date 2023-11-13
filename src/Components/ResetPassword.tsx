import {useState} from "react"
import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../utils/firebaseAuth"
import toast, {Toaster} from "react-hot-toast"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../utils/store"
import { toggleReset } from "../utils/resetSlice"


const ResetPassword = () => {
    const dispatch=useDispatch<AppDispatch>()
    const [email,setEmail]=useState("")


    const resetPassword=(e:React.FormEvent)=>{
        e.preventDefault()
        
        sendPasswordResetEmail(auth,email).then(()=>{
            toast.success(`Reset Link Sended to ${email}`)
            dispatch(toggleReset())
        }).catch(err=>{
            toast.error(err.message)
        })
    }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-950 flex flex-col gap-2 items-center justify-center">
      <Toaster/>
      <form onSubmit={(e)=>resetPassword(e)} className="flex  flex-col  gap-4 m-auto items-center my-24 bg-slate-950 shadow-xl text-white w-max px-20 py-14">
        <span className="flex  flex-col">
          <label
            htmlFor="email"
            className="font-mono font-bold text-md text-slate-400"
          >
            Email
          </label>
          <input
            type="email"
            required
            className="px-4 py-2 rounded-md border-2  text-slate-800"
            placeholder="Enter here..."
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </span>
        <button className="bg-red-700 px-4 rounded-sm py-2">Reset Password</button>
        </form>
    </div>
  )
}

export default ResetPassword
