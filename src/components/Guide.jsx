import React from "react";
import { steps } from "../assets/assets";

const Guide = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            QuickGig connects junior talent with businesses needing help with
            small projects.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 shadow-md"
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-800 to-purple-950 text-lg font-bold text-white
            "
            >
              {step.number}
            </div>

            <h4 className="mt-2 text-xl font-semibold">{step.title}</h4>
            <p className="mt-2 text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Guide;
