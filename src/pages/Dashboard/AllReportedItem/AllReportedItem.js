import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import SmallLoader from "../../../loader/SmallLoader/SmallLoader";
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
        const res = await fetch(
          `https://serverside-sigma.vercel.app/reporteditem`
        );
        const data = await res.json();
        // console.log(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handleReportDelete = (id) => {
    fetch(`https://serverside-sigma.vercel.app/reporteditem/${id}`, {
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
  if (isLoading) {
    return <SmallLoader></SmallLoader>;
  }
  return (
    <div>
      <h1 className="text-2xl  mb-5 font-bold text-center my-3">
        All Reported Items
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr className="border-b-2 my-3 border-t-2 border-l-2 border-r-2">
              <th></th>
              {/* <th>Name</th> */}
              <th className="border-r-2">Item Photo</th>
              <th className="border-r-2">Title</th>
              <th className="border-r-2">Report Item</th>
              <th>Delete Here</th>
            </tr>
          </thead>
          <tbody>
            {reporteditem?.map((item, idx) => (
              <tr key={item._id} className="border-b-2 border-l-2 border-r-2">
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
                  <button
                    className="border px-2 rounded-xl hover:bg-slate-100 hover:text-black"
                    onClick={() => handleReportDelete(item._id)}
                  >
                    Delete
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
