import React, { useContext } from "react";
import toast from "react-hot-toast";
import UseVerifyStatus from "../../../../Components/Button/Hooook/UseVerifyStatus";
import UseVerifyRole from "../../../../Components/Button/Hooook/VerifyRole";
import { AuthContext } from "../../../../contexts/AuthProvider";
import { FaCheckCircle } from "react-icons/fa";

const Card = ({ product, setItem }) => {
  const { user } = useContext(AuthContext);
  const [role] = UseVerifyRole(user?.email);

  console.log(product);
  const { brand, condition, duration, image, location, model, _id, name } =
    product;
  const handleReport = (id) => {
    fetch(`http://localhost:5000/product/reported/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("reported product");
        console.log(data);
      });
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl  border p-4">
      <figure>
        <img className="h-[300px] rounded" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title my-2">{model}</h2>
        <p className=" flex">
          Sellers Name : {name}{" "}
          {product?.status === "verified" ? (
            <>
              <FaCheckCircle className="text-primary ml-2"></FaCheckCircle>
            </>
          ) : (
            <></>
          )}
        </p>
        <p>condition:{condition}</p>
        <p>used:{duration}</p>
        <p>location:{location}</p>
        <p>post Date:{product.post_date}</p>
        <p>Original Price:{product.original_price}</p>
        <p>Resale Price:{product.resale_price}</p>

        {product?.status === "verified" ? (
          <>
            <p className="text-success my-3">Seller is Verified By Admin</p>
          </>
        ) : (
          <></>
        )}

        <div className="card-actions justify-end">
          <label
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
            onClick={() => setItem(product)}
          >
            Book Phone
          </label>
          {role === "buyer" ? (
            <>
              {" "}
              <label
                // htmlFor="booking-modal"
                className="btn btn-primary text-white"
                onClick={() => handleReport(_id)}
              >
                Report product
              </label>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
