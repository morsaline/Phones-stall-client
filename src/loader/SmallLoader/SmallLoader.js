import React from "react";
import "../SmallLoader/SmallLoader.css";

const SmallLoader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="lds-roller ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SmallLoader;
