import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Values from "../components/Values";
import Guide from "../components/Guide";
import CtaBanner from "../components/CtaBanner";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Values />
      <Guide />
      <CtaBanner />
    </div>
  );
};

export default Home;
