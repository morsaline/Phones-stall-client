import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Item from "./Item/Item";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  // const {
  //   data: myproducts = [],
  //   refetch,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["myproducts", user?.email],
  //   queryFn: async () => {
  //     try {
  //       const res = await fetch(
  //         `http://localhost:5000/myproducts/${user?.email}`
  //       );
  //       const data = await res.json();
  //       console.log(data);
  //       // return data;
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   },
  // });
  const [myproducts, setMyproducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myproducts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyproducts(data);
      });
  }, [user?.email]);
  console.log(myproducts);
  return (
    <div>
      <h1 className="text-2xl  mb-5">My Products</h1>
      <div>
        {myproducts?.map((product) => (
          <Item key={product._id} product={product}></Item>
        ))}
      </div>
    </div>
  );
};

export default MyProduct;
