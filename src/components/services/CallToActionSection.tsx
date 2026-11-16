import React from "react";
import { NavLink } from "react-router-dom";

interface CallToActionProps {
  heading?: React.ReactNode;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export const CallToActionSection = ({
  heading = (
    <>
      Ready to <span className="text-brand-primary">Build</span>{" "}
      <br className="md:hidden" /> Your Website?
    </>
  ),
  description = "I’m excited that you want to work together on a project! Please fill out the form below with as much detail as possible. I’ll get back to you within 2 working days to arrange a free call where we can have a friendly chat about your project goals.",
  buttonText = "Start a Project",
  buttonLink = "/booking",
}: CallToActionProps) => {
  return (
<section className="relative bg-white px-6 py-12 md:py-24 overflow-hidden w-full">
  

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-[#111827] drop-shadow-sm">
          {heading}
        </h2>
        <p className="mb-10 text-lg md:text-xl text-gray-700 font-light">
          {description}
        </p>
        <NavLink
          to={buttonLink || "/booking"}
          className="group inline-flex items-center justify-center bg-brand-primary hover:bg-pink-400 text-white font-medium px-10 py-4 rounded-full shadow-lg transition-all duration-200 text-lg tracking-wide"
        >
          <span>{buttonText}</span>
          <span className="bg-white text-[#5a3d35] rounded-full p-2 ml-3 transition-transform duration-200 group-hover:rotate-45 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </span>
        </NavLink>
      </div>
    </section>
  );
};
