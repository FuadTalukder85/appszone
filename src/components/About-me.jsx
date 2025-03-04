import React from "react";
import proImg from "../assets/proImg.png";
import arrow from "../assets/leftDownArrow.png";
import fbIcon from "../assets/fbIcon.png";
import ellipse from "../assets/ellipse.png";

const About = () => {
  return (
    <div className="md:max-w-5xl mx-auto md:py-28 p-3 md:p-0">
      <div className="md:flex items-center">
        <div className="flex md:hidden">
          <img src={arrow} alt="" />
          <h5 className="text-xl">
            Hello! I Am <span className="text-[#7127BA]">Ibrahim Memon</span>
          </h5>
        </div>
        <div
          className="w-[310px] md:w-[350px] h-[310px] md:h-[350px] rounded-full flex items-center justify-center"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.4) 30%, rgb(35, 0, 65) 60%, rgb(0, 0, 0) 85%)",
          }}
        >
          <img src={proImg} alt="" />
        </div>
        <div>
          <div className="hidden md:flex">
            <img src={arrow} alt="" />
            <h5 className="text-xl">
              Hello! I Am <span className="text-[#7127BA]">Ibrahim Memon</span>
            </h5>
          </div>
          <h5 className="mt-20 text-lg underline">A Designer who</h5>
          <h1 className="text-3xl md:text-5xl md:w-96 md:leading-16">
            Judges a book by its{" "}
            <span className="relative text-[#7127BA]">
              cover{" "}
              <img
                src={ellipse}
                alt=""
                className="absolute top-3 md:top-5 right-2"
              />
            </span>
            ...
          </h1>
          <h5 className="mt-3 md:mt-0 text-xs">
            Because if the cover does not impress you what else can?
          </h5>
        </div>
      </div>
      <h1 className="text-3xl md:text-5xl mt-24">I'm a Software Engineer.</h1>
      <h5 className="text-xl md:flex items-center mt-2">
        Currently, I'm a Software Engineer at{" "}
        <span className="hidden md:block px-2">
          <img src={fbIcon} alt="" />
        </span>
        <span className="text-[#1877F2]">Facebook</span>,
      </h5>
      <h5 className="mt-10 md:mt-20 text-xl md:w-4xl md:pr-28">
        A self-taught UI/UX designer, functioning in the industry for 3+ years
        now. I make meaningful and delightful digital products that create an
        equilibrium between user needs and business goals.
      </h5>
    </div>
  );
};

export default About;
