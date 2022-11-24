import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookinModal from "../../../BookingModel/BookinModal";
import Card from "./Card";

const Product = () => {
  const [item, setItem] = useState(null);
  const products = useLoaderData();

  console.log(products);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <Card key={product._id} product={product} setItem={setItem}></Card>
        ))}
      </div>
      {item && <BookinModal item={item} setItem={setItem}></BookinModal>}
    </div>
  );
};

export default Product;
