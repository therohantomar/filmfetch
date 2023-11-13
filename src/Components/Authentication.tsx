import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../utils/store";
import { RxCrossCircled } from "react-icons/rx";
import { toggleAuthentication } from "../utils/authenticationSlice";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebaseAuth";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import toast,{Toaster } from "react-hot-toast"
import { toggleReset } from "../utils/resetSlice";
import { toggleLogout } from "../utils/logoutSlice";

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerLoading, SetRegisterLoading] = useState(false);
  const [signInLoading, SetSignInLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch<AppDispatch>();


  const registerUser = (e: React.FormEvent) => {
    e.preventDefault();
    SetRegisterLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) =>{ 
        setEmail("")
        setPassword("")
        toast.success(res.user.email + "user created!")
      })
      .catch((err) =>toast.error(err))
      .finally(() => SetRegisterLoading(false));
  };


  const SignIn = (e: React.FormEvent) => {

    e.preventDefault();
    SetSignInLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setEmail("")
        setPassword("")
        toast.success(res.user.email+"user signed in!")
         dispatch(toggleLogout())
        dispatch(toggleAuthentication());

      })
      .catch((err) => toast.error(err.message))
      .finally(() => SetSignInLoading(false));
  };


  return (
    <div className="fixed transition-all z-20 top-0  bottom-0 left-0 right-0 bg-slate-900 opacity-95  backdrop-blur-sm">
      <Toaster
         position="top-center"
          reverseOrder={false}/>
      <RxCrossCircled
        className="text-red-800  absolute  right-4 cursor-pointer font-extrabold  text-3xl  "
        onClick={() => dispatch(toggleAuthentication())}
      />
      <form className="flex  flex-col  gap-4 m-auto items-center my-24 bg-slate-950 shadow-xl text-white w-max px-20 py-14">
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
        <span className="flex flex-col mb-6">
          <label
            htmlFor="email"
            className="font-mono font-bold text-md text-slate-400"
          >
            Password
          </label>
          <span className="relative">
            <input
              type={visible ? "text" : "password"}
              required
              className="px-4 py-2 rounded-md border-2   text-slate-800"
              placeholder="Enter here..."
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p onClick={()=>{dispatch(toggleReset())}} className="text-red-600 cursor-pointer">forget password?</p>
            {visible ? (
              <AiFillEye
                onClick={() => setVisible((prev) => !prev)}
                className="absolute  cursor-pointer top-3 right-2 text-red-700"
              />
            ) : (
              <AiFillEyeInvisible
                onClick={() => setVisible((prev) => !prev)}
                className="absolute top-3 right-2 cursor-pointer text-red-700"
              />
            )}
          </span>
        </span>
        {!signInLoading ? (
          <button
            onClick={(e) => SignIn(e)}
            className="px-10 w-full bg-red-800 text-white font-mono font-bold rounded-md cursor-pointer py-2"
            name="Submit"
          >
            SignIn
          </button>
        ) : (
          <button
            className="px-10 w-full inline-flex justify-center bg-red-800 text-white font-mono font-bold rounded-md cursor-pointer py-2"
            name="Submit"
          >
            {" "}
            <svg
              className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </button>
        )}
       { !registerLoading?<button
          onClick={(e) => registerUser(e)}
          className="px-10 w-full bg-gray-800 text-white font-mono font-bold rounded-md cursor-pointer py-2"
          name="Submit"
        >
          Register
        </button>: <button
          className="px-10 w-full bg-gray-800 text-white font-mono font-bold rounded-md cursor-pointer py-2"
          name="Submit"
        >
           <svg
              className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>

        </button>}
      </form>
    </div>
  );
};

export default Authentication;
