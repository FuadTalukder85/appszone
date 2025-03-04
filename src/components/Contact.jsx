import React from "react";
import icon01 from "../assets/icon01.png";
import icon02 from "../assets/icon02.png";
import icon03 from "../assets/icon03.png";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 p-3 md:p-0">
      <h1 className="text-2xl">Contact</h1>
      <h5 className="text-[15px] mt-16 md:w-3xl">
        I'm currently looking to join a cross-functional team that values
        improving people's lives through accessible design. or have a project in
        mind? Let's connect.
      </h5>
      <h5 className="text-[15px] mt-7">ibrhaimmemon930@gmail.com</h5>
      <div className="flex gap-4 items-center mt-7">
        <img src={icon01} alt="" /> <img src={icon02} alt="" />{" "}
        <img src={icon03} alt="" />
      </div>
    </div>
  );
};

export default Contact;
<h1>Contact</h1>;
