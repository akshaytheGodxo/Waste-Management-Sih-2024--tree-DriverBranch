import React from 'react';
import Driver from './components/Driver';
import HomePage from './components/HomePage';
import Orders from './components/Orders';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <SignedOut>
          <HomePage />
        </SignedOut>
      ),
    },
    {
      path: "/orders",
      element: (
        <SignedIn>
          <Orders />
        </SignedIn>
      ),
    },
    {
      path: "/track-order",
      element: (
        <SignedIn>
          <Driver />
        </SignedIn>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
