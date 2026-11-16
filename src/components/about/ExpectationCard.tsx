import React from "react";
import { Button } from "@/components/ui/button";
import Map from "../../assets/OlhmsMedia - Copy - Copy.webp";

const Expectations = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center max-w-7xl mx-auto">
          <div className="relative w-full flex justify-center">
            <img
              src={Map}
              alt="Professional working on laptop showing website design"
              width={800}
              height={600}
              className="rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-full object-cover"
            />
          </div>

          <div className="space-y-6 w-full">
            <div className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
              OLHMS MEDIA | WEBSITE DESIGN
            </div>

            <blockquote className="text-xl md:text-2xl lg:text-2xl leading-relaxed text-gray-800">
              Tosin has been nothing short of{" "}
              <em className=" italic text-gray-600">outstanding</em> in building
              the website for Olhms Media, from scratch. Her quite frankly{" "}
              <em className="font-light italic text-gray-600"> blend</em> of
              coding skills, and eye for design make her{" "}
              <em className="font-light italic text-gray-600">
                truly stand out
              </em>
            </blockquote>

            <a
              href="/portfolio/olmhs-media"
              className="inline-block border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full font-medium bg-transparent w-full sm:w-auto text-center"
            >
              SEE THE WORK
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expectations;
