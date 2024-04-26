import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import AllTouristsSpot from './pages/AllTouristsSpot';
import AddTouristsSpot from './pages/AddTouristsSpot';
import MyList from './pages/MyList';
import Home from './components/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allTouristsSpot',
        element: <AllTouristsSpot></AllTouristsSpot>
      },
      {
        path: '/addTouristsSpot',
        element: <AddTouristsSpot></AddTouristsSpot>
      },
      {
        path: '/myList',
        element: <MyList></MyList>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
