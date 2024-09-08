import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Change from .tsx to .jsx
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';
import { Provider } from "react-redux";
import store from "./redux/store";
// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </Provider>
);
