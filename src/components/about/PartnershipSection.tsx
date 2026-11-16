import React from "react";
import PartnershipCard from "./PartnershipCard";

const PartnershipSection: React.FC = () => {
  const goodFitPoints = [
    "You want a website that keeps visitors engaged – and nudges them into buying from you.",
    "You want a simple, sleek and efficient design and development process.",
    "You'd like to partner with someone who cares as much about your business as you do.",
    "You like what I do and want some of that for yourself!!",
  ];

  const notBestFitPoints = [
    "You only care about your website being pretty down to the tiniest detail, not how user friendly it is.",
    "You like to micromanage every part of the process.",
    "You care only about how much it costs.",
    "You want to outsource to someone who does exactly what you say, rather than working collaboratively.",
  ];

  return (
    <section className="relative bg-[#d92483] py-14 md:py-16 px-2 sm:px-8 lg:px-20 font-sans text-gray-800 overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='1' fill='%23fff' fill-opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 justify-center items-stretch relative z-10">
        <div className="flex-1 bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border-2 border-pink-200 hover:scale-[1.03] hover:shadow-pink-300 transition-all duration-300 flex flex-col">
          <PartnershipCard
            title={
              <span>
                <span className="inline-block text-2xl md:text-3xl font-bold text-[#d92483] mb-2">
                  Let’s work together if…
                </span>
              </span>
            }
            points={goodFitPoints}
            buttonText={
              <span className="block text-center w-full text-white bg-[#d92483] hover:bg-pink-700 rounded-full px-6 py-3 font-semibold transition">
                LET'S DO THIS!
              </span>
            }
            isGoodFit={true}
          />
        </div>
        <div className="flex-1 bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl border-2 border-fuchsia-200 hover:scale-[1.03] transition-all duration-300 flex flex-col">
          <PartnershipCard
            title={
              <span>
                <span className="inline-block text-2xl md:text-3xl font-bold text-[#ec4899] mb-2">
                  We’re not the best fit if…
                </span>
              </span>
            }
            points={notBestFitPoints}
            buttonText={
              <span className="block text-center w-full">HMM, MAYBE NOT?</span>
            }
            isGoodFit={false}
          />
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
