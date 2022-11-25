import React from "react";
import toast from "react-hot-toast";
import UseDelete from "../../Delete/DeleteHook";

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

  return (
    <tr>
      <th>{idx + 1}</th>

      <td>{seller.name}</td>
      <td>{seller.email}</td>

      <td>
        {" "}
        <button onClick={() => handleDelete(seller)}>delete</button>
      </td>
      <td>
        <button>Verify</button>
      </td>
    </tr>
  );
};

export default TableCard;
