import { useState  } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Nav from './comp/Nav';
import Home from './comp/Home';
import Paste from './comp/Paste';
import ViewPaste from './comp/ViewPaste';
import Aboutus from './comp/Aboutus';
function App() {
  const router=createBrowserRouter(
    [
    {
      path : "/" ,
      element :
      <div>
        <Nav />
      <Home/>
      </div>
    },
        {
      path : "/pastes",
      element :
      <div>
              <Nav />
             <Paste />
      </div>
    },
            {
      path : "/about-us",
      element :
      <div>
              <Nav />
               <Aboutus/>
      </div>
    },
    {
     path : "/pastes/:id",
      element :
      <div>
              <Nav/>
              <ViewPaste />

      </div>
    },
        {
      path : "/pastes/:id" ,
      element :
      <div>
              <Nav />

      </div>
    },
    ]
  );

  return (
   <RouterProvider router={router} />
  )
}

export default App
