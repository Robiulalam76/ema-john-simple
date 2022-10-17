import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import { ProductsAndCartLoader } from './Components/ProductsAndCartLoader/ProductsAndCartLoader';
import Shipping from './Components/Shipping/Shipping';
import Shop from './Components/Shop/Shop';
import Signup from './Components/Signup/Signup';
import Main from './Layout/Main';
import PriveteRoute from './Routes/PriveteRoute';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', element: <Home></Home> },
        {
          path: '/home',
          element: <Home></Home>
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
        { path: '/inventory', element: <PriveteRoute><Inventory></Inventory></PriveteRoute> },
        { path: '/about', element: <About></About> },
        { path: '/signup', element: <Signup></Signup> },
        { path: '/login', element: <Login></Login> },
        { path: '/shipping', element: <PriveteRoute><Shipping></Shipping></PriveteRoute> },
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
