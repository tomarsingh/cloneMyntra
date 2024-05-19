import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './Screens/LandingPage/Landing';
import Men from './components/Men/Men';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter> <App /></BrowserRouter>
   
    {/* <RouterProvider router={router} /> */}

  </React.StrictMode>
);


