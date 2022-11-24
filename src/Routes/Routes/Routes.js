import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";
import DashboardLaout from "../../pages/DashboardLaout/DashboardLaout";
import Product from "../../pages/Home/Categories/Product/Product";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Login/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/phones/:brand",
        element: (
          <PrivateRoute>
            <Product></Product>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/phones/${params.brand}`);
        },
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLaout></DashboardLaout>,
    children: [
      // { path: "/dashboard", element: <h1>welconme to dashboard</h1> },
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>,
      },
    ],
  },
]);
export default router;
