import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const {
    data: myorders = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["myorders", user?.email],
    queryFn: async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/myorders/${user?.email}`
        );
        const data = await res.json();
        return data;
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <div>
      <h1 className="text-2xl  mb-5">My Orders</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              {/* <th>Name</th> */}
              <th>Item Photo</th>
              <th>Title</th>
              <th>price</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {myorders?.map((item, idx) => (
              <tr key={item._id}>
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
