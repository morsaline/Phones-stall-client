import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Navbar from "../Navbar/Navbar";

const DashboardLaout = () => {
  const { user } = useContext(AuthContext);
  // const isBuyer = (user?.role?==="buyer")
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
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>

            {user?.role === "buyer" && (
              <>
                <li>
                  <Link to="/dashboard/myorders">My Orders</Link>
                </li>
              </>
            )}
            {/* {isAdmin && (
              <>
                <li>
                  <Link to="dashboard/AllUsers">All users</Link>
                </li>
                <li>
                  <Link to="dashboard/addDoctor">Add Doctor</Link>
                </li>
                <li>
                  <Link to="dashboard/managedoctors">Manage Doctors</Link>
                </li>
              </>
            )} */}
          </ul>
        </div>
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default DashboardLaout;
