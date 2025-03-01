import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './ui/Layout.tsx'
import Product from './pages/Product.tsx'
import Cancel from './pages/Cancel.tsx'
import Cart from './pages/Cart.tsx'
import Category from './pages/Category.tsx'
import Favorite from './pages/Favorite.tsx'
import Profile from './pages/Profile.tsx'
import Success from './pages/Success.tsx'
import NotFound from './pages/NotFound.tsx'
import Orders from './pages/Orders.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },

      {
        path: '/product/',
        element: <Product />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
      {
        path: '/Cancel',
        element: <Cancel />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/Category',
        element: <Category />,
      },
      {
        path: '/favorite',
        element: <Favorite />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/success',
        element: <Success />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
      //Not found page element
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
