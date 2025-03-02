import React from "react";
import logo from "../assets/logo.png";
const menu = ["Home", "Products", "Support", "About", "Contact"];
const Navbar = () => {
  return (
    <div className="bg-[#1A0B2E] py-10">
      <div className="max-w-5xl mx-auto flex justify-between">
        <img src={logo}></img>
        <ul className="flex gap-12 items-center font-semibold text-xl">
          {menu?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
