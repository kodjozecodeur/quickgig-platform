import React from "react";
import { Link } from "react-router-dom";

const CtaBanner = () => {
  return (
    <section>
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-6">
            Join our community of junior developers and designers today.
          </p>
          <div className="flex justify-center gap-4 max-sm:text-xs">
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <Link
              to="/browse"
              className="inline-block bg-white text-gray-600 px-4 py-2 rounded border hover:bg-gray-100 transition"
            >
              Browse Gigs
            </Link>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full">
              Post a Gig
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
