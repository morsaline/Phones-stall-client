import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 text-center bg-neutral flex justify-center items-center text-neutral-content mt-10">
      <div className="text-center">
        <img className="text-center mx-auto" src="footerimg.png" alt="" />
        <p>
          PhonesStall LTD.
          <br />
          Providing reliable tech since 2022.
        </p>
        <p> @Copyright 2022 All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
