import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="shadow py-4">
      <div className="conainer px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img src={assets.logo} alt="Logo svg" />
        <div className="flex gap-4 max-sm:text-xs">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button className="text-gray-600">Browse Gigs</button>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full">
            Post a Gig
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
