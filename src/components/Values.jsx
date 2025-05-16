import {
  CodeBracketIcon,
  PaintBrushIcon,
  BriefcaseIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const Values = () => {
  return (
    <section className=" bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <CodeBracketIcon className="w-10 h-10 mx-auto text-black mb-3 hover:text-purple-800 transition-colors duration-200" />
          <h3 className="text-lg font-semibold mb-2">For Junior Developers</h3>
          <p className="text-gray-600">
            Build your portfolio with real projects and gain valuable
            experience.
          </p>
        </div>

        <div>
          <PaintBrushIcon className="w-10 h-10 mx-auto text-black mb-3  hover:text-purple-800 transition-colors duration-200" />
          <h3 className="text-lg font-semibold mb-2">For Designers</h3>
          <p className="text-gray-600">
            Showcase your skills and connect with clients looking for fresh
            design talent.
          </p>
        </div>

        <div>
          <BriefcaseIcon className="w-10 h-10 mx-auto text-black mb-3  hover:text-purple-800 transition-colors duration-200" />
          <h3 className="text-lg font-semibold mb-2">For Businesses</h3>
          <p className="text-gray-600">
            Find affordable talent for small projects and one-off tasks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Values;
