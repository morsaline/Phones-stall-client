import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import SmallLoader from "../../../loader/SmallLoader/SmallLoader";
import AddvertiseCard from "./AddvertiseCard";

const AdvertiseProducts = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    data: advertisedproducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["advertisedproducts", user],

    queryFn: async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/advertisedproducts`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("authtoken")},
						`,
            },
          }
        );
        console.log(res);

        return await res.data;
      } catch (err) {
        if (err.response.status === 401 || err.response.status === 403) {
          logout();
          navigate("/");
        }
        console.log(err);
      }
    },
  });
  if (advertisedproducts === 0) {
    return;
  }

  if (isLoading) {
    return <SmallLoader></SmallLoader>;
  }
  console.log(advertisedproducts);
  return (
    <div>
      <h1 className="text-center text-2xl my-5">Advertise Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {advertisedproducts.map((product) => (
          <AddvertiseCard key={product._id} product={product}></AddvertiseCard>
        ))}
      </div>
    </div>
  );
};

export default AdvertiseProducts;
