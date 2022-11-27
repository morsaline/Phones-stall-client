import React from "react";
import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div
      className="hero my-3 rounded min-h-screen min-w-full"
      style={{
        backgroundImage: `url("https://st2.depositphotos.com/2673929/6455/i/450/depositphotos_64556341-stock-photo-404-symbol.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <Link to="/">
            {" "}
            <button className="btn btn-primary w-[150px] mt-10">
              Back To HomePage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorElement;
