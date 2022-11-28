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
  const {
    brand,
    condition,
    email,
    duration,
    image,
    location,
    model,
    phone,
    _id,
    name,
    year_of_purchase,
    resale_price,
    original_price,
    description,
  } = product;
  const handleReport = (id) => {
    fetch(`https://serverside-sigma.vercel.app/product/reported/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("reported product");
        console.log(data);
      });
  };
  return (
    <div className=" md:w-full bg-base-100 shadow-xl w-10/12 mx-auto md:flex  border p-4 mb-4">
      <figure className=" md:w-2/5 mx-auto">
        <img
          className="h-[300px] rounded text-center w-full p-3"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className=" p-0 md:w-3/5">
        <h2 className=" my-2">{model}</h2>
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
        <p>email:{email}</p>
        <p>Brand:{brand}</p>
        <p>condition:{condition}</p>
        <p>Resale Price:{resale_price}</p>
        <p>Original Price:{original_price}</p>
        <p>purchase year:{year_of_purchase}</p>
        <p>location:{location}</p>
        <p>Phone Number:{phone}</p>
        <p>post Date:{product.post_date}</p>
        <p>Original Price:{product.original_price}</p>
        <p>Description:{description}</p>

        {product?.status === "verified" ? (
          <>
            <p className="text-success my-3">Seller is Verified By Admin</p>
          </>
        ) : (
          <></>
        )}

        <div className=" flex justify-end gap-4 ">
          <label
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
            onClick={() => setItem(product)}
          >
            Book Phone
          </label>

          <label
            // htmlFor="booking-modal"
            className="btn btn-primary text-white"
            onClick={() => handleReport(_id)}
          >
            Report product
          </label>
        </div>
      </div>
    </div>
  );
};

export default Card;
