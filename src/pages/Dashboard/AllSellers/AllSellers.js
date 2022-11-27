import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import TableCard from "../../../Shared/TableCard/TableCard";

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
      <h1 className="text-2xl  mb-5 font-bold text-center my-3">All Sellers</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr className="border-b-2 border-l-2 border-r-2 border-t-2">
              <th></th>
              {/* <th>Name</th> */}
              <th className="border-r-2">Name</th>
              <th className="border-r-2">Email Address</th>
              <th className="border-r-2">Delete here</th>
              <th>Verify here</th>
            </tr>
          </thead>
          <tbody>
            {allsellers?.map((seller, idx) => (
              <TableCard
                key={idx}
                seller={seller}
                idx={idx}
                refetch={refetch}
              ></TableCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
