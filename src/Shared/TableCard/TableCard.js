import React, { useContext } from "react";
import toast from "react-hot-toast";
import UseVerifyRole from "../../Components/Button/Hooook/VerifyRole";
import { AuthContext } from "../../contexts/AuthProvider";
import UseDelete from "../../Delete/DeleteHook";
import { FaCheckCircle } from "react-icons/fa";

const TableCard = ({ seller, idx, refetch }) => {
  const handleDelete = (seller) => {
    UseDelete(seller?._id).then((data) => {
      if (data.deletedCount > 0) {
        toast.success("deleted successfully");
        refetch();
      }
      //   console.log(data);
    });
  };

  const handleVerify = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("verified succesfully");
        refetch();
      });
  };

  return (
    <tr className="border-b-2">
      <th>{idx + 1}</th>

      <td className="flex gap-2">
        {seller.name}
        {seller.status === "verified" ? (
          <>
            <FaCheckCircle className="text-primary mt-2"></FaCheckCircle>
          </>
        ) : (
          <></>
        )}
      </td>
      <td>{seller.email}</td>

      <td>
        {" "}
        <button
          className="border px-2 rounded-xl hover:bg-slate-100 hover:text-black"
          onClick={() => handleDelete(seller)}
        >
          Delete
        </button>
      </td>
      {seller.role === "seller" ? (
        <>
          {seller.status === "verified" ? (
            <button className="border px-2 rounded-xl hover:bg-slate-100 hover:text-black">
              Verified
            </button>
          ) : (
            <td>
              <button
                className="border px-2 rounded-xl hover:bg-slate-100 hover:text-black"
                onClick={() => handleVerify(seller._id)}
              >
                unverified
              </button>
            </td>
          )}
        </>
      ) : (
        ""
      )}
    </tr>
  );
};

export default TableCard;
