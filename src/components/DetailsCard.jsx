import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { categoryColors, gigData } from "../assets/assets";
import { ClipboardIcon } from "@heroicons/react/24/solid";

const DetailsCard = () => {
  const { id } = useParams();

  const gig = gigData.find((gig) => gig.id === id);
  // show the contact when user clicke on the apply button
  const [showContact, setShowContact] = useState(false);
  //handle apply button click
  const handleApplyClick = () => {
    setShowContact(!showContact);
  };
  return (
    <section>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link
          to="/gigs"
          className="text-gray-600 hover:underline mb-6 inline-block"
        >
          ← Back to Browse
        </Link>
        <div className="bg-white shadow rounded-xl p-6 border">
          <div className="flex items-start justify-between">
            <h1 className="text-xl font-semibold">{gig.title}</h1>
            <div className=" flex flex-col gap-4">
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  categoryColors[gig.category] || "bg-gray-200 text-gray-700"
                }`}
              >
                {gig.category}
              </span>
              <span className="text-sm text-gray-500">{gig.timeEstimate}</span>
            </div>
          </div>

          <p className="text-lg font-medium mt-2 text-gray-700">{gig.budget}</p>

          <div className="mt-6">
            <h2 className="font-semibold mb-1">Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {gig.description}
            </p>
          </div>

          {/* <Link className="block bg-[#155DFC] text-white mt-6 py-2 rounded w-full text-center hover:bg-gray-800 transition">
            Apply Now
          </Link> */}
          {/* apply button when show is not clicked */}
          {!showContact && (
            <button
              onClick={handleApplyClick}
              className="block bg-[#155DFC] text-white mt-6 py-2 rounded w-full text-center hover:bg-gray-800 transition"
            >
              Apply Now
            </button>
          )}
          {/* contact info when show is clicked */}
          {showContact && (
            <div className="mt-6 p-4 bg-gray-50 rounded border">
              <p className="font-semibold">Contact Information</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-gray-800">johndoe@example.com</span>
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button
                  onClick={() =>
                    navigator.clipboard.writeText("johndoe@example.com")
                  }
                  className="flex items-center text-sm text-gray-600 hover:text-gray-800"
                >
                  <ClipboardIcon className="w-4 h-4 mr-1" />
                  Copy
                </button>
              </div>
              <p className="text-sm text-center text-gray-500 mt-4">
                Good luck with your application!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DetailsCard;
