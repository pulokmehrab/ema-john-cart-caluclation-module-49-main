import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './layout/Main';
import Shop from './components/Shop/Shop';
import Order from './components/Orders/Order';
import Inventory from './components/Inventory';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Shop></Shop>
        },
        {
          path: '/orders',
          element: <Order></Order>
        },
        {
          path: '/inventory',
          element:<Inventory></Inventory>
        },
        {
          path: '/about',
          element:<About></About>
        }
        


      ]
    },
    {
      path: '/about',
      element:<About></About>
    }
  ])
  return (
    <div>
     <RouterProvider router ={router}></RouterProvider>
    </div>
  );
}

export default App;
