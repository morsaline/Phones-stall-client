import React from "react";
import toast from "react-hot-toast";
import UseDelete from "../../../../Delete/DeleteHook";
import MyProduct from "../MyProduct";

const Item = ({ product, refetch }) => {
  const { model, condition, duration, location, image, _id } = product;

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/product/${id}`, {
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
  const handleAdvertise = (id) => {
    fetch(`http://localhost:5000/advertise/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("advertise comlepted");
          refetch();
        }
      });
  };
  console.log(model);
  return (
    <div className="card w-[300px] mx-auto bg-base-100 shadow-xl border">
      <figure>
        <img className="h-[500px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{model}</h2>
          {product?.sold === true ? (
            <>
              <button>sold</button>
            </>
          ) : (
            <>
              <button>unsold</button>
            </>
          )}
        </div>
        <p>condition:{condition}</p>
        <p>used:{duration}</p>
        <p>location:{location}</p>
        <p>post Date:{product.post_date}</p>
        <p>Original Price:{product.original_price}</p>
        <p>Resale Price:{product.resale_price}</p>

        <div className="card-actions justify-end">
          <label
            // htmlFor="booking-modal"
            className="btn btn-primary text-white"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </label>
          <label
            // htmlFor="booking-modal"
            className="btn btn-primary text-white"
            onClick={() => handleAdvertise(_id)}
          >
            UnAdvertise
          </label>
        </div>
      </div>
    </div>
  );
};

export default Item;
