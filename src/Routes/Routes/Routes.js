import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Product from "../../pages/Home/Categories/Product/Product";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Login/Signup";

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
        element: <Product></Product>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/phones/${params.brand}`);
        },
      },
    ],
  },
]);
export default router;
