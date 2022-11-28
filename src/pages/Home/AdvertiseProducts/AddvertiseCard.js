import React from "react";
import { Link } from "react-router-dom";

const AddvertiseCard = ({ product }) => {
  const { model, condition, duration, location, image, _id, brand } = product;
  return (
    <div className="card w-[300px] mx-auto bg-base-100 shadow-xl border">
      <figure>
        <img className="h-[350px]" src={image} alt="Shoes" />
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
          <Link to={`/phones/${brand}`}>
            <button className=" p-5 border transition rounded hover:bg-white hover:text-black">
              SEE MORE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddvertiseCard;
