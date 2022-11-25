import React from "react";
import MyProduct from "../MyProduct";

const Item = ({ product }) => {
  const { model, condition, duration, location, image } = product;
  console.log(model);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{model}</h2>
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
            // onClick={() => setItem(product)}
          >
            Book Phone
          </label>
        </div>
      </div>
    </div>
  );
};

export default Item;
