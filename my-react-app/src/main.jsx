import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Logement from './pages_projet/page_logement';
import NotFound from './pages_projet/page_erreur';
import Home from './pages_projet/page_accueil';
import About from './pages_projet/page_a_propos';
import Root from "./pages_projet/composant-page.jsx"
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/locations/:locationId',
        element: <Logement />,
        //loader: locationLoader,
        errorElement: <NotFound />,
      },
    ],
  },
]);

// Rendu de l'application avec RouterProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);