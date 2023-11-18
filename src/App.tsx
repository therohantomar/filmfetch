
import Movies from "./Components/Movies"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import store from "./utils/store"
import Container from "./Components/Container"
import SearchedContent from "./Components/SearchedContent"
import WatchPage from "./Components/WatchPage"

const BrowserRouter=createBrowserRouter([
  {
    path:"/",
    element:<Container/>,
    children:[{
      path:"/",
      element:<Movies/>
    },{
      path:"search",
      element:<SearchedContent/>
    },{
      path:"video/:id",
      element:<WatchPage/>
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
