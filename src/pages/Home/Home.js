import React from "react";
import AdvertiseProducts from "./AdvertiseProducts/AdvertiseProducts";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import UXReviews from "./UXReveiws/UXReviews";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <AdvertiseProducts></AdvertiseProducts>
      <Categories></Categories>
      <UXReviews></UXReviews>
    </div>
  );
};

export default Home;
