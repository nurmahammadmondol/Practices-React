import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import User from './Components/Main/User';
import About from './Components/Main/About';
import Contact from './Components/Main/Contact';
import HomePage from './Components/Main/HomePage';
import UserAllDetails from './Components/Main/UserAllDetails';
import ErrorPage from './Components/Main/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
      },
      {
        path: '/User',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <User></User>,
      },
      {
        path: '/details/:DetailsID',
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.DetailsID}`
          ),
        element: <UserAllDetails></UserAllDetails>,
      },
      {
        path: '/About',

        element: <About></About>,
      },
      {
        path: '/ContactUS',
        element: <Contact></Contact>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
