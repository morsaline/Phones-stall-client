import React from "react";
import MyProduct from "../MyProduct";

const Item = ({ product }) => {
  const { model } = product;
  console.log(model);
  return (
    <div>
      <h1>{model}</h1>
    </div>
  );
};

export default Item;
