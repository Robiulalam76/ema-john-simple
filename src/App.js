import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Orders from './Components/Orders/Orders';
import { ProductsAndCartLoader } from './Components/ProductsAndCartLoader/ProductsAndCartLoader';
import Shop from './Components/Shop/Shop';
import Main from './Layout/Main';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        // { path: '/', element: <Home></Home> },
        // { path: '/home', element: <Home></Home> },
        {
          path: '/',
          loader: async () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/shop',
          loader: async () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: ProductsAndCartLoader,
          element: <Orders></Orders>
        },
        { path: '/inventory', element: <Inventory></Inventory> },
        { path: '/about', element: <About></About> },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
