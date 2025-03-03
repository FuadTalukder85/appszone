import React from "react";
import featured01 from "../assets/featured01.png";
import featured02 from "../assets/featured02.png";
import cursor from "../assets/cursor.png";
const Featured = () => {
  return (
    <div className="max-w-5xl mx-auto pb-20">
      <div className="flex items-center justify-between">
        <div className="-mt-48">
          <p className="text-[#9857D3] font-semibold text-lg">
            Featured Project
          </p>
          <h2 className="font-semibold text-4xl">Example Project</h2>
          <div className="absolute pt-8">
            <p className="z-50 md:w-[640px] p-6 rounded-xl font-medium text-lg bg-[#1e1233c9] backdrop-blur-2xl">
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </p>
            <div className="flex items-center gap-3 pt-8">
              <img src={cursor} alt="" />
              <img src={cursor} alt="" />
            </div>
          </div>
        </div>
        <div
          className="flex justify-end w-2xl py-20"
          style={{
            background:
              "radial-gradient(circle at center, rgba(105, 59, 147, 1) 0%,  rgba(50, 15, 133, 0) 60%, rgb(0, 0, 0,0) 60%)",
            borderRadius: "100%",
          }}
        >
          <div className="md:w-[500px] bg-[#2B0B3A] pt-6 pl-8 rounded-xl">
            <img src={featured01} alt="" />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center justify-between">
        <div
          className="w-2xl py-20"
          style={{
            background:
              "radial-gradient(circle at center, rgba(105, 59, 147, 1) 0%,  rgba(50, 15, 133, 0) 60%, rgb(0, 0, 0,0) 60%)",
            borderRadius: "100%",
          }}
        >
          <div className="md:w-[500px] bg-[#2B0B3A] pt-6 pl-8 rounded-xl">
            <img src={featured02} alt="" />
          </div>
        </div>
        <div className="relative -mt-48">
          <p className="text-end text-[#9857D3] font-semibold text-lg">
            Featured Project
          </p>
          <h2 className="text-end font-semibold text-4xl">Example Project</h2>
          <div className="absolute right-0 md:w-[640px] pt-8">
            <p className="p-6 rounded-xl font-medium text-lg bg-[#1e1233c9] backdrop-blur-2xl">
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </p>
            <div className="flex items-center justify-end gap-3 pt-8">
              <img src={cursor} alt="" />
              <img src={cursor} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
