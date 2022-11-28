import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { useLoaderData } from "react-router-dom";
const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PK}`);

console.log(stripePromise);
const Payment = () => {
  const order = useLoaderData();
  return (
    <div>
      <h2 className="text-3xl mb-5">
        Payment for{" "}
        <small className="text-primary font-bold">{order.itemName}.</small>
      </h2>
      <p className="text-xl ">
        {" "}
        Please pay <strong>${order.price}</strong> for your percel or delevery
        soon.
      </p>
      <div className=" w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm order={order} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
