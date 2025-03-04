import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

const menu = ["Home", "Products", "Support", "About", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-50 bg-[#1A0B2E] py-6 px-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-10" />
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 items-center font-semibold text-xl text-white">
          {menu.map((item) => (
            <li key={item} className="hover:text-gray-300 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <div
        className={`z-50 fixed top-0 right-0 h-full bg-[#1A0B2E] w-72 p-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="text-white text-3xl mb-4"
          onClick={() => setIsOpen(false)}
        >
          <FiX />
        </button>
        <ul className="z-50 space-y-4 text-white text-xl font-semibold">
          {menu.map((item) => (
            <li
              key={item}
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
