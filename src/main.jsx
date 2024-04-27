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
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ViewDetails from './pages/ViewDetails';
import ErrorPage from './pages/ErrorPage';
import UpdateSpots from './pages/UpdateSpots';
import CountrySpots from './pages/CountrySpots';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://adventure-aegis-server-4icsj657e-robins-projects-819ca55a.vercel.app/spot')
      },
      {
        path: '/viewDetails/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://adventure-aegis-server-4icsj657e-robins-projects-819ca55a.vercel.app/spots/${params.id}`)
      },
      {
        path: '/allTouristsSpot',
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch('https://adventure-aegis-server-4icsj657e-robins-projects-819ca55a.vercel.app/spots')
      },
      {
        path: '/addTouristsSpot',
        element: <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>
      },
      {
        path: '/myList',
        element: <PrivateRoute><MyList></MyList></PrivateRoute>
      },
      {
        path: '/updateSpots/:id',
        element: <UpdateSpots></UpdateSpots>,
        loader: ({params}) => fetch(`https://adventure-aegis-server-4icsj657e-robins-projects-819ca55a.vercel.app/spots/${params.id}`)
      },
      {
        path: '/countries/:country',
        element: <CountrySpots></CountrySpots>,
        loader: ({params}) => fetch(`http://localhost:5000/countrySpots/${params.country}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>,
)
