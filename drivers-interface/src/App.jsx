import React from 'react';
import Driver from './components/Driver';
import HomePage from './components/HomePage';
import Orders from './components/Orders';
import DriverNav from './components/Google-Maps/GoogleMap';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<HomePage/>} />
        <Route
        path="/orders"
        element={
          <>
            <SignedIn>
              <Orders/>
            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>

          </>

        }
      />
        <Route
        path="/track-order"
        element={
          <>
            <SignedIn>
              <Driver/>
            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>

          </>

        }
      />
      <Route path="googles-map" element={<DriverNav />}/>
    </>
  )
);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
