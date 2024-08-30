import React ,{ useState } from 'react'
import Driver from './components/Driver'
import HomePage from './components/HomePage';
import Orders from './components/Orders';
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/orders",
      element: <Orders />,
    },
    {
      path: "/track-order",
      element: <Driver />,
    },

  ])
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
