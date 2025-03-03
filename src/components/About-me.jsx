import React from "react";
import proImg from "../assets/proImg.png";
import arrow from "../assets/leftDownArrow.png";
import fbIcon from "../assets/fbIcon.png";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto py-28">
      <div className="flex items-center">
        <div
          className="w-[350px] h-[350px] rounded-full flex items-center justify-center"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.4) 30%, rgb(35, 0, 65) 60%, rgb(0, 0, 0) 85%)",
          }}
        >
          <img src={proImg} alt="" className="z-50" />
        </div>
        <div>
          <div className="flex">
            <img src={arrow} alt="" />
            <h5 className="text-xl">
              Hello! I Am <span className="text-[#7127BA]">Ibrahim Memon</span>
            </h5>
          </div>
          <h5 className="mt-20 text-lg underline">A Designer who</h5>
          <h1 className="text-5xl w-96 leading-16">
            Judges a book by its{" "}
            <span className="relative text-[#7127BA]">cover</span>
            {/* <span className="absolute h-20 w-48 border-2 border-white px-4 rounded-tr-full rounded-tl-full rounded-br-2xl"></span> */}
            ...
          </h1>
          <h5 className="text-xs">
            Because if the cover does not impress you what else can?
          </h5>
        </div>
      </div>
      <h1 className="text-5xl mt-24">I'm a Software Engineer.</h1>
      <h5 className="text-xl flex items-center mt-2">
        Currently, I'm a Software Engineer at{" "}
        <span className="px-2">
          <img src={fbIcon} alt="" />
        </span>
        <span className="text-[#1877F2]">Facebook</span>,
      </h5>
      <h5 className="mt-20 text-xl w-4xl pr-28">
        A self-taught UI/UX designer, functioning in the industry for 3+ years
        now. I make meaningful and delightful digital products that create an
        equilibrium between user needs and business goals.
      </h5>
    </div>
  );
};

export default About;
