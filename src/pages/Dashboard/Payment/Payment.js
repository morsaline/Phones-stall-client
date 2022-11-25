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
      <h1>hi payment</h1>
      <div className=" w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm order={order} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
