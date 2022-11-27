import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import UseVerifyRole from "../../Components/Button/Hooook/VerifyRole";
// import useVerifyRole, {
//   UseVerifyRole,
// } from "../../Components/Button/Hooook/VerifyRole";
import { AuthContext } from "../../contexts/AuthProvider";
import Navbar from "../Navbar/Navbar";

const DashboardLaout = () => {
  const { user } = useContext(AuthContext);
  // const isBuyer = (user?.role?==="buyer")
  const [role] = UseVerifyRole(user?.email);
  // console.log(role);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content">
            {/* <li>
              <Link to="/dashboard">My Appointment</Link>
            </li> */}

            {role === "buyer" && (
              <>
                <li className="border-b-2 rounded-xl">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link
                    className="border-b-2 rounded-xl"
                    to="/dashboard/myorders"
                  >
                    My Orders
                  </Link>
                </li>
              </>
            )}
            {role === "seller" && (
              <>
                <li>
                  <Link className="border-b-2 rounded-xl" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="border-b-2 rounded-xl"
                    to="/dashboard/myproducts"
                  >
                    My Products
                  </Link>
                </li>
                <li>
                  <Link
                    className="border-b-2 rounded-xl"
                    to="/dashboard/addproduct"
                  >
                    Add A Product
                  </Link>
                </li>
              </>
            )}
            {role === "admin" && (
              <>
                <li>
                  <Link className="border-b-2 rounded-xl" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="border-b-2 rounded-xl"
                    to="/dashboard/allsellers"
                  >
                    All Sellers
                  </Link>
                </li>
                <li>
                  <Link
                    className="border-b-2 rounded-xl"
                    to="/dashboard/allbuyers"
                  >
                    All Buyers
                  </Link>
                </li>
                <li>
                  <Link
                    className="border-b-2 rounded-xl"
                    to="/dashboard/reporteditems"
                  >
                    All Reported Items
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLaout;
