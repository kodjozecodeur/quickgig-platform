import React from "react";
import { categoryColors, gigData } from "../assets/assets";
import { Link } from "react-router-dom";

const GigsGrid = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {gigData.map((gig) => (
          <div
            key={gig.id}
            className="bg-white  border-[#E5E7EB] border-1 rounded-xl p-4 hover:shadow-md hover:scale-[1.01] transition-all duration-200"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg">{gig.title}</h3>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  categoryColors[gig.category] || "bg-gray-200 text-gray-700"
                }`}
              >
                {gig.category}
              </span>
            </div>

            <div className="flex justify-between text-sm mt-2 text-gray-600">
              <span>{gig.budget}</span>
              <span>{gig.time}</span>
            </div>

            <p className="text-sm text-gray-500 mt-3 line-clamp-3">
              {gig.description}
            </p>

            <Link
              to={`/gigs/${gig.id}`}
              className="inline-block mt-4 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GigsGrid;
