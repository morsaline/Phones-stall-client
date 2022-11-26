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
          `http://localhost:5000/myproducts/${user?.email}`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("authToken")}`,
            },
          }
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
  // console.log(myproducts);
  // const [myproducts, setMyproducts] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/myproducts/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setMyproducts(data);
  //     });
  // }, [user?.email]);
  // console.log(myproducts);
  return (
    <div>
      <h1 className="text-2xl  mb-5">My Products</h1>
      <div>
        {myproducts?.map((product) => (
          <Item key={product._id} product={product} refetch={refetch}></Item>
        ))}
      </div>
    </div>
  );
};

export default MyProduct;
