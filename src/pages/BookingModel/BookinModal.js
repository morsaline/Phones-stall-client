import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const BookinModal = ({ item, setItem }) => {
  const { user } = useContext(AuthContext);
  const { resale_price, model, image } = item;
  console.log(item);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const itemName = form.model.value;
    const price = form.price.value;
    const name = form.name.value;

    const email = form.email.value;
    const phone = form.phone.value;
    const meetLocation = form.location.value;
    const booking = {
      email,
      phone,
      name,
      image,
      itemName,
      price,
      meetLocation,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setItem(null);

          toast.success("Booking confirmed");
          //   refetch();
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <label htmlFor="">Item Name:</label>
            <input
              name="model"
              type="text"
              disabled
              value={model}
              className="input w-full input-bordered "
            />
            <label htmlFor="">Resale Price:</label>
            <input
              name="price"
              type="text"
              disabled
              value={resale_price}
              className="input w-full input-bordered "
            />
            <label htmlFor=""> Name:</label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
              value={user?.displayName}
              disabled
            />
            <label htmlFor=""> Email:</label>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered"
              value={user?.email}
              disabled
            />
            <label htmlFor=""> Phone Number:</label>
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <label htmlFor=""> Meeting Location:</label>
            <input
              name="location"
              type="text"
              placeholder="meeting location"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookinModal;
