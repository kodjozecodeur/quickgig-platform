import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FilterBox from "../components/FilterBox";
import GigsGrid from "../components/GigsGrid";

const Browse = () => {
  return (
    <div>
      <Navbar />
      <FilterBox />
      <GigsGrid />
    </div>
  );
};

export default Browse;
