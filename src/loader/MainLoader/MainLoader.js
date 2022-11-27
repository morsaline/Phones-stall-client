import React from "react";
import "./MainLoader.css";
const MainLoader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="lds-grid ">
        <div></div>
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

export default MainLoader;
