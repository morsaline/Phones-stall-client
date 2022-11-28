import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const {
    data: brands = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/brands`);
        const data = await res.json();
        return data;
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  });

  //   console.log(brands);

  //   const [brands, setBrands] = useState([]);

  //   useEffect(() => {
  //     fetch("http://localhost:5000/brands")
  //       .then((res) => res.json())
  //       .then((data) => setBrands(data));
  //   }, []);
  //   console.log(brands);
  return (
    <div>
      <p className="text-center p-5  mx-auto font-bold text-3xl my-3">
        Categories
      </p>
      <div className="grid grid-cols-1 w-11/12 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5 border rounded p-5">
        {brands.map((brand, i) => (
          <h2
            key={i}
            brand={brand}
            className="text-center mx-auto hover:bg-white hover:text-black transition border w-[100px] h-[100px] rounded-full flex justify-center items-center text-xl font-bold"
          >
            {" "}
            <Link className="mx-auto" to={`/phones/${brand}`}>
              {brand}
            </Link>
          </h2>
        ))}
      </div>
    </div>
  );
};

export default Categories;
