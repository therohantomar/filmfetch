
import Movies from "./Components/Movies"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import store from "./utils/store"
import Container from "./Components/Container"
import SearchedContent from "./Components/SearchedContent"

const BrowserRouter=createBrowserRouter([
  {
    path:"/",
    element:<Container/>,
    children:[{
      path:"/",
      element:<Movies/>
    },{
      path:"/search",
      element:<SearchedContent/>
    }]
  },
  
])





function App() {
  
  return (
    <>
    <Provider store={store} >
    <RouterProvider router={BrowserRouter} />
    
    
    </Provider>
    </>
  )
}

export default App
