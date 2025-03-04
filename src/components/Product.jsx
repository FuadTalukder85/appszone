import React from "react";
import product01 from "../assets/product01.png";
import product02 from "../assets/product02.png";
import product03 from "../assets/product03.png";
import product04 from "../assets/product04.png";
import product05 from "../assets/product05.png";
import product06 from "../assets/product06.png";
import product07 from "../assets/product07.png";
import product08 from "../assets/product08.png";
import product09 from "../assets/product09.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";
import product13 from "../assets/product13.png";
import line01 from "../assets/line01.png";
import line02 from "../assets/line02.png";
import line03 from "../assets/line03.png";
import line04 from "../assets/line04.png";
import line05 from "../assets/line05.png";
import line06 from "../assets/line06.png";
import img from "../assets/img.png";

const Product = () => {
  return (
    <div className="md:max-w-5xl mx-auto mt-20 p-3 md:p-0">
      <h1 className="text-2xl text-center">
        I'm currently looking to join a{" "}
        <span className="text-[#A362FF]">cross-functional</span> team
      </h1>
      <h5 className="text-lg text-center">
        that values improving people's lives through accessible design
      </h5>
      <div className="flex gap-4 items-center justify-center mt-10">
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={product01} alt="" />
        </div>
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={product02} alt="" />
        </div>
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={product03} alt="" />
        </div>
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={product04} alt="" />
        </div>
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={product05} alt="" />
        </div>
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={product06} alt="" />
        </div>
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={product07} alt="" />
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center mt-5">
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={product08} alt="" />
        </div>
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={product09} alt="" />
        </div>
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={product10} alt="" />
        </div>
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={product11} alt="" />
        </div>
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={product12} alt="" />
        </div>
        <div className="bg-[#251C31] w-14 h-14 rounded-full flex items-center justify-center">
          <img src={product13} alt="" />
        </div>
      </div>
      <div className="flex justify-center md:w-[350px] mx-auto">
        <div>
          <img src={line01} alt="" />
        </div>
        <div className="pr-10">
          <img src={line02} alt="" />
        </div>
        <div className="pr-10">
          <img src={line03} alt="" />
        </div>
        <div className="pr-10">
          <img src={line04} alt="" />
        </div>
        <div>
          <img src={line05} alt="" />
        </div>
        <div>
          <img src={line06} alt="" />
        </div>
      </div>
      <div className="flex justify-center">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Product;
