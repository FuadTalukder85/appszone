import React from "react";
import img01 from "../assets/img01.png";
import img02 from "../assets/img02.png";
import img03 from "../assets/img03.png";
import img04 from "../assets/img04.png";
const data = [
  {
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    btn: "LEARN MORE",
    img: img01,
  },
  {
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    btn: "LEARN MORE",
    img: img02,
  },
  {
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    btn: "LEARN MORE",
    img: img03,
  },
  {
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    btn: "LEARN MORE",
    img: img04,
  },
];
const Experience = () => {
  return (
    <div
      className="max-w-5xl mx-auto py-20 p-3 md:p-0"
      style={{
        background:
          "radial-gradient(circle at center, rgba(105, 59, 147, 1) 0%,  rgba(50, 15, 133, 0) 40%, rgb(0, 0, 0,0) 40%)",
        borderRadius: "100%",
      }}
    >
      <h1 className="text-3xl md:text-[40px]">Work Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {data?.map((dt) => (
          <div className="md:flex gap-4 items-center ps-5 md:pr-28 py-5 border-t-4 border-[#4F228D] rounded-2xl bg-[linear-gradient(to_right,#130428,#251043,#38126D,#261045,#190634)]">
            <div className="flex md:block justify-center">
              <img src={dt.img} alt="" />
            </div>
            <div>
              <h2 className="font-semibold text-2xl text-center md:text-start">
                {dt.title}
              </h2>
              <p className="font-medium text-[8px] text-center md:text-start">
                {dt.description}
              </p>
              <div className="flex md:block justify-center">
                <button className="mt-2 px-6 py-2 rounded-lg border border-[#693B93] bg-[#2C1250] font-medium text-[10px] uppercase hover:bg-[#693B93] transition-all duration-300 cursor-pointer">
                  {dt.btn}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
