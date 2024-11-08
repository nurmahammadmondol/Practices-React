import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home/Home';
import HomePage from './Componenet/Main/HomePage';
import User from './Componenet/Main/User';
import SelectBook from './Componenet/Main/SelectBook';
import About from './Componenet/Main/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/HomePage',
        loader: () =>
          fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <HomePage></HomePage>,
      },
      {
        path: '/User',
        element: <User></User>,
      },
      {
        path: '/SelectBook',
        element: <SelectBook></SelectBook>,
      },
      {
        path: '/About',
        element: <About></About>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
