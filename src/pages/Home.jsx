import React from "react";
import About from "../components/About-me";
import Experience from "../components/Experience";
import Featured from "../components/Featured";
import Product from "../components/Product";

const Home = () => {
  return (
    <div>
      <About></About>
      <Experience></Experience>
      <Product></Product>
      <Featured></Featured>
    </div>
  );
};

export default Home;
