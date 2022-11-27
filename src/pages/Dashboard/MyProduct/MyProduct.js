import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
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
          `http://localhost:5000/myproducts/${user?.email}`
        );
        if (res.status === 403 || res.status === 401) {
          logout();
        }
        const data = await res.json();
        return data;
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  });
  
  return (
    <div>
      <h1 className="text-2xl  mb-5 text-center font-bold my-3">My Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {myproducts?.map((product) => (
          <Item key={product._id} product={product} refetch={refetch}></Item>
        ))}
      </div>
    </div>
  );
};

export default MyProduct;
