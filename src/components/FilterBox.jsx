import React from "react";

const FilterBox = () => {
  return (
    <div className="container mx-auto px-4 2xl:px-20 py-8">
      <h1 className="text-3xl font-bold mb-8">Browse gigs</h1>
      {/* filter bar */}
      <div>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search for gigs"
            className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/3"
          />
          <select className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/3">
            <option value="">Select Category</option>
            <option value="web-development">Frontend</option>
            <option value="graphic-design">Design</option>
            <option value="writing">Wordpress</option>
          </select>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
            Search
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <select className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/3">
            <option value="">Gigs for</option>
            <option value="developper">Developper</option>
            <option value="designer">Designer</option>
            <option value="nocode">No Code</option>
          </select>
          <select className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/3">
            <option value="">Select a Budget Range</option>
            <option value="50$">Under 50$</option>
            <option value="100$"> 100$</option>
            <option value="200$">200$</option>
          </select>
          <select className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/3">
            <option value="">Time Estimate</option>
            <option value="1-hour">Under 1 hour</option>
            <option value="1-3 hours">1-3 hours</option>
            <option value="Over 3 hours">Over 3 hours</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
