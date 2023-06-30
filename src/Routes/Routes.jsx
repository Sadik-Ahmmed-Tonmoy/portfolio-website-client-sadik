import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from '../Layouts/Main';
import Home from '../Pages/Home';
import Login from '../Components/Login/Login';
// import Login from '../Components/Login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/logInNow",
        element: <Login />,
      },
    ],
  },
]);


export default router;