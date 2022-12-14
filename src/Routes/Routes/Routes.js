import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../../ErrorElement/ErrorElement";
import Main from "../../Layout/Main/Main";
import Blogs from "../../pages/Blogs/Blogs";
import AddProduct from "../../pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../pages/Dashboard/AllBuyers/AllBuyers";
import AllReportedItem from "../../pages/Dashboard/AllReportedItem/AllReportedItem";
import AllSellers from "../../pages/Dashboard/AllSellers/AllSellers";
import DashboardMain from "../../pages/Dashboard/DashboardMain/DashboardMain";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../pages/Dashboard/MyProduct/MyProduct";
import Payment from "../../pages/Dashboard/Payment/Payment";
import DashboardLaout from "../../pages/DashboardLaout/DashboardLaout";
import Product from "../../pages/Home/Categories/Product/Product";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Login/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorElement></ErrorElement>,
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
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/phones/:brand",
        element: (
          <PrivateRoute>
            <Product></Product>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://serverside-sigma.vercel.app/phones/${params.brand}`
          );
        },
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorElement></ErrorElement>,
    element: (
      <PrivateRoute>
        <DashboardLaout></DashboardLaout>
      </PrivateRoute>
    ),
    children: [
      // { path: "/dashboard", element: <h1>welconme to dashboard</h1> },
      {
        path: "/dashboard",
        element: <DashboardMain></DashboardMain>,
      },
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProduct></MyProduct>,
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/allsellers",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "/dashboard/allbuyers",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "/dashboard/reporteditems",
        element: <AllReportedItem></AllReportedItem>,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) => {
          return fetch(
            `https://serverside-sigma.vercel.app/orders/${params.id}`
          );
        },
      },
    ],
  },
]);
export default router;
