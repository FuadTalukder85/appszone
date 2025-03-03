import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Contact></Contact>
    </div>
  );
};

export default MainLayout;
