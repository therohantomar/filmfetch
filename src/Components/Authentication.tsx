import {useState} from "react"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../utils/store";
import {RxCrossCircled} from "react-icons/rx"
import { toggleAuthentication } from "../utils/authenticationSlice";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebaseAuth";


const Authentication = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [registerLoading,SetRegisterLoading]=useState(false)
    const [signInLoading,SetSignInLoading]=useState(false)
    const dispatch=useDispatch<AppDispatch>()


    const registerUser=(e:React.FormEvent)=>{
        e.preventDefault()
        SetSignInLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then(res=>res)
        .catch(err=>console.log(err))
        .finally(()=>SetSignInLoading(false))

    }
    const SignIn=(e:React.FormEvent)=>{
        e.preventDefault()
        SetRegisterLoading(true)
        signInWithEmailAndPassword(auth,email,password)
        .then(res=>res)
        .catch(err=>console.log(err))
        .finally(()=>SetRegisterLoading(false))

    }



  return (
    <div className="fixed transition-all z-20 top-0  bottom-0 left-0 right-0 bg-slate-600 bg-opacity-95">
        <RxCrossCircled className="text-red-600 cursor-pointer font-bold m-10 text-3xl  " onClick={()=>dispatch(toggleAuthentication())} />
      <form onSubmit={(e)=>registerUser(e)} className="flex flex-col gap-4 m-auto items-center my-24 bg-slate-950 shadow-xl text-white w-max px-20 py-14">
        <span className="flex  flex-col">
          <label htmlFor="email" className="font-mono font-bold text-md text-slate-400">Email</label>
          <input type="email" required className="px-4 py-2 rounded-md border-2  text-slate-800"  placeholder="Enter here..." name="Email" value={email}  onChange={(e)=>setEmail(e.target.value)} />
        </span>
        <span className="flex flex-col mb-6">
          <label htmlFor="email" className="font-mono font-bold text-md text-slate-400">Password</label>
          <input type="password" required className="px-4 py-2 rounded-md border-2 text-slate-800" placeholder="Enter here..." name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </span>
        <input type="button" onClick={(e)=>SignIn(e)} disabled={signInLoading} className="px-10 w-full bg-red-800 text-white font-mono font-bold rounded-md cursor-pointer py-2" name="Submit" value={"SignIn"} />
        <input type="submit" disabled={registerLoading}   className="px-10 w-full bg-red-800 text-white font-mono font-bold rounded-md cursor-pointer py-2" name="Submit" value={"Register"} />
      </form>
    </div>
  );
};

export default Authentication;
