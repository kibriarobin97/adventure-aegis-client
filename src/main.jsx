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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/spot')
      },
      {
        path: '/viewDetails/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/spots/${params.id}`)
      },
      {
        path: '/allTouristsSpot',
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch('http://localhost:5000/spots')
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
