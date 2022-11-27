import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import TableCard from "../../../Shared/TableCard/TableCard";

const AllReportedItem = () => {
  const {
    data: reporteditem = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["reporteditem"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/reporteditem`);
        const data = await res.json();
        // console.log(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handleReportDelete = (id) => {
    fetch(`http://localhost:5000/reporteditem/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("deleted successfully");
          refetch();
        }
        //   console.log(data);
      });
  };
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
              <th>Report Item</th>
              <th>Delete Here</th>
            </tr>
          </thead>
          <tbody>
            {reporteditem?.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>
                  <img src={item.image} className="w-12 h-15" alt="" />
                </td>
                <td>{item.model}</td>
                <td>
                  {item.reported ? (
                    <>
                      <h1>reported</h1>
                    </>
                  ) : (
                    ""
                  )}
                </td>
                {/* <td>{item.slot}</td> */}
                <td>
                  {" "}
                  <button onClick={() => handleReportDelete(item._id)}>
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllReportedItem;