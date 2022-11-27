import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero my-3 rounded h-[500px]"
      style={{
        backgroundImage: `url("https://t3.ftcdn.net/jpg/04/44/95/70/360_F_444957056_Gz4m48tyh5j89hNyuc5CsLvPNyiMWNvy.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome <br /> <strong className="text-primary">To</strong> <br />{" "}
            PhonesStall
          </h1>

          <Link to="/blog">
            {" "}
            <button className="btn btn-primary w-[50px]">BLOG</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
