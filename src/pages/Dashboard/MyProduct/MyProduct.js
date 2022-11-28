import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import SmallLoader from "../../../loader/SmallLoader/SmallLoader";
import Item from "./Item/Item";

const MyProduct = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  const {
    data: myproducts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["myproducts", user],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://serverside-sigma.vercel.app/myproducts/${user?.email}`
        );

        const data = await res.json();
        return data;
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  });

  if (isLoading) {
    return <SmallLoader></SmallLoader>;
  }
  return (
    <div>
      <h1 className="text-2xl  mb-5 text-center font-bold my-3">My Products</h1>
      {myproducts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {myproducts?.map((product) => (
              <Item
                key={product._id}
                product={product}
                refetch={refetch}
              ></Item>
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="text-3xl text-cener my-5">
            Not Added product your my products right now.
          </p>
        </>
      )}
    </div>
  );
};

export default MyProduct;
