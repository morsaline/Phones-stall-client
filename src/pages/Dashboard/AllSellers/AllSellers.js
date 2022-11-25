import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const AllSellers = () => {
  const { user } = useContext(AuthContext);
  const {
    data: allsellers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allsellers"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/allsellers`);
        const data = await res.json();
        // console.log(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });
  console.log(allsellers);
  return (
    <div>
      <h1 className="text-2xl  mb-5">All Sellers</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              {/* <th>Name</th> */}
              <th>Name</th>
              <th>Email Address</th>
              <th>Delete here</th>
              <th>Verify here</th>
            </tr>
          </thead>
          <tbody>
            {allsellers?.map((seller, idx) => (
              <tr key={seller._id}>
                <th>{idx + 1}</th>

                <td>{seller.name}</td>
                <td>{seller.email}</td>
                {/* <td>{item.slot}</td> */}
                {/* <td> */}
                {/* {seller.price && !seller.paid && (
                    <Link to={`/dashboard/payment/${seller._id}`}>
                      <button className="btn btn-primary btn-xs">Pay</button>
                    </Link>
                  )} */}
                <td>
                  {" "}
                  <button>delete</button>
                </td>
                <td>
                  <button>Verify</button>
                </td>
                {/* 
                  {item.price && item.paid && (
                    <span className=" text-green-400 font-bold">Paid </span>
                  )} */}
                {/* </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
