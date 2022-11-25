import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
// import AuthContext from "../../../contexts/AuthProvider";
const AddProduct = () => {
  //   const { user } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;

    const model = form.model.value;

    // const price = form.price.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const resale_price = form.resaleprice.value;
    const original_price = form.originalprice.value;
    const email = form.email.value;
    const condition = form.condition.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const description = form.description.value;
    const post_date = form.postdate.value;
    const year_of_purchase = form.yearofpurchase.value;
    const image = form.photourl.value;
    const product = {
      email,
      phone,
      name,
      model,
      //   price,
      location,
      condition,
      resale_price,
      original_price,
      brand,
      post_date,
      year_of_purchase,
      description,
      image,
    };
    console.log(product);

    fetch("http://localhost:5000/phones", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          //   setItem(null);

          toast.success("Add successfully");
          //   refetch();
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1 className="text-center text-5xl my-5">Add A Product</h1>
      <form
        onSubmit={handleAddProduct}
        className="grid grid-cols-1 gap-3 mt-10 w-1/2 mx-auto my-6"
      >
        <label>Item Name:</label>
        <input
          name="model"
          type="text"
          required
          className="input w-full input-bordered "
        />
        <label>Resale Price:</label>
        <input
          name="resaleprice"
          type="text"
          required
          className="input w-full input-bordered "
        />
        <label>Original Price:</label>
        <input
          name="originalprice"
          type="text"
          required
          className="input w-full input-bordered "
        />
        <label>Condition:</label>
        <input
          name="condition"
          type="text"
          required
          placeholder="excelant/good/fair"
          className="input w-full input-bordered "
        />
        <label>Brand:</label>
        <input
          name="brand"
          type="text"
          required
          placeholder="BrandName"
          className="input w-full input-bordered "
        />
        <label> Name:</label>
        <input
          name="name"
          type="text"
          placeholder="your Name"
          className="input w-full input-bordered"
          value={user?.displayName}
          disabled
        />
        <label> Email:</label>
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          className="input w-full input-bordered"
          value={user?.email}
          disabled
        />
        <label> Phone Number:</label>
        <input
          required
          name="phone"
          type="text"
          placeholder="Phone Number"
          className="input w-full input-bordered"
        />
        <label> Year Of Purchase:</label>
        <input
          required
          name="yearofpurchase"
          type="text"
          placeholder="mobile purchase year"
          className="input w-full input-bordered"
        />
        <label> Post date:</label>
        <input
          required
          name="postdate"
          type="text"
          placeholder="post date month and year"
          className="input w-full input-bordered"
        />
        <label> Description:</label>
        <input
          required
          name="description"
          type="text"
          placeholder="description"
          className="input w-full input-bordered"
        />
        <label> photo url:</label>
        <input
          required
          name="photourl"
          type="text"
          placeholder="description"
          className="input w-full input-bordered"
        />
        <label>Location:</label>
        <input
          required
          name="location"
          type="text"
          placeholder="location"
          className="input w-full input-bordered"
        />
        <br />
        <input className="btn btn-accent w-full" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddProduct;
