import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UseVerifyRole from "../../../Components/Button/Hooook/VerifyRole";
import { AuthContext } from "../../../contexts/AuthProvider";

const DashboardMain = () => {
  const { user } = useContext(AuthContext);
  const [role] = UseVerifyRole(user?.email);
  return (
    <div className="hero min-h-screen bg-base-200 mb-11">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold ">
            Welcome {role} <br /> <strong>To</strong> <br /> Dashboard <br />
            Go To
          </h1>

          <div className="flex justify-around mr-4 mt-5">
            {role === "buyer" && (
              <>
                <button className="border px-2 rounded-xl hover:bg-slate-100 hover:text-black">
                  <Link to="/dashboard/myorders">My Orders</Link>
                </button>
              </>
            )}
            {role === "seller" && (
              <>
                <button className="border px-2 rounded-xl hover:bg-slate-100 hover:text-black">
                  <Link to="/dashboard/myproducts">My Products</Link>
                </button>
                <button className="border px-2 rounded-xl hover:bg-slate-100 hover:text-black">
                  <Link to="/dashboard/addproduct">Add A Product</Link>
                </button>
              </>
            )}
            {role === "admin" && (
              <>
                {" "}
                <button className="border px-2 rounded-xl hover:bg-slate-100 hover:text-black">
                  <Link to="/dashboard/allsellers">All Sellers</Link>
                </button>
                <button className="border px-2 rounded-xl hover:bg-slate-100 hover:text-black">
                  <Link to="/dashboard/allbuyers">All Buyers</Link>
                </button>
                <button className="border px-2 rounded-xl hover:bg-slate-100 hover:text-black">
                  <Link to="/dashboard/reporteditems">All Reported Items</Link>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
