import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import SmallLoader from "../../../loader/SmallLoader/SmallLoader";

const MyOrders = () => {
  const { user, logout } = useContext(AuthContext);
  const {
    data: myorders = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["myorders", user],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://serverside-sigma.vercel.app/myorders/${user?.email}`
        );

        const data = await res.json();
        return data;
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  });
  if (isLoading) {
    // console.log(user?.email);
    return <SmallLoader></SmallLoader>;
  }
  console.log(myorders);
  return (
    <div>
      <h1 className="text-2xl  mb-5 text-center my-3">My Orders</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr className="border-b-2 border-l-2 border-r-2 border-t-2">
              <th></th>
              {/* <th>Name</th> */}
              <th className="border-r-2">Item Photo</th>
              <th className="border-r-2">Title</th>
              <th className="border-r-2">price</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {myorders?.map((item, idx) => (
              <tr key={item._id} className="border-b-2 border-l-2 border-r-2">
                <th>{idx + 1}</th>
                <td>
                  <img src={item.image} className="w-12 h-15" alt="" />
                </td>
                <td>{item.itemName}</td>
                <td>{item.price}</td>
                {/* <td>{item.slot}</td> */}
                <td>
                  {item.price && !item.paid && (
                    <Link to={`/dashboard/payment/${item._id}`}>
                      <button className="btn btn-primary btn-xs">Pay</button>
                    </Link>
                  )}

                  {item.price && item.paid && (
                    <span className=" text-green-400 font-bold">Paid </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
