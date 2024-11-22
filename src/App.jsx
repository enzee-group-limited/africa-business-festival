import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/rootLayout';
import Home from './pages/landingPage/home';
import About from './pages/aboutPage/about';
import Event from './pages/eventPage/event';
import Contact from './pages/contactPage/contact';

function App() {
    const router = createBrowserRouter([
      {
        path :"/",
        element:<RootLayout/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: "about",
                element: <About />,
              },
              {
                path: "events",
                element: <Event />,
              },
              {
                path: "contact",
                element: <Contact />,
              },



        ]
      }
    ]);
  
    return <RouterProvider router={router} />;
  }
  
  export default App;
  