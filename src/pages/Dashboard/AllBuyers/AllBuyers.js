import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import UseVerifyRole from "../../../Components/Button/Hooook/VerifyRole";
import { AuthContext } from "../../../contexts/AuthProvider";
// import { useDelete } from "../../../Delete/Delete";
import TableCard from "../../../Shared/TableCard/TableCard";

const AllBuyers = () => {
  const { user } = useContext(AuthContext);
  const [role] = UseVerifyRole(user?.email);

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
      <h1 className="text-2xl  mb-5 my-4 text-center font-bold">All Buyers</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr className="border-b-2">
              <th></th>
              {/* <th>Name</th> */}
              <th>Name</th>
              <th>Email Address</th>
              <th>Delete here</th>
              {role === "seller" ? <th>Verify here</th> : <th></th>}
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
