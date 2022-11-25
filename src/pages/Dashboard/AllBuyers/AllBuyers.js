import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
// import { useDelete } from "../../../Delete/Delete";
import TableCard from "../../../Shared/TableCard/TableCard";

const AllBuyers = () => {
  const { user } = useContext(AuthContext);

  const {
    data: allbuyers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allbuyers"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/allbuyers`);
        const data = await res.json();
        // console.log(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  // useDelete();

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
            {allbuyers?.map((seller, idx) => (
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

export default AllBuyers;
