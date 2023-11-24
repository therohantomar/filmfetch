import { useRouteError,  useNavigate } from "react-router-dom"

interface errorInter{
    status:string | number,
    statusText:string
}
function Error() {
    const error=useRouteError() as errorInter
    const navigate=useNavigate()
    
  return (
    <div className="w-full  min-h-screen flex flex-col border-2 border-red-500 items-center justify-center gap-2  text-white  bg-black">
      <h1 className="text-gray-400 text-xl ">{error?.status}</h1>
      <h1 className="text-gray-400 text-xl ">{error?.statusText}</h1>
      <button onClick={()=>navigate("/")} className="px-4 py-2 mt-2  text-white font-bold rounded bg-red-600 shadow-xl transition-all hover:bg-red-500 ">Home</button>

    </div>
  )
}

export default Error
