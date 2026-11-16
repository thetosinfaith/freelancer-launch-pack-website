import { Link } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";

import OlhmsMedia from "../assets/reall.webp";
import AnotherScreenshot from "../assets/OlhmsMedia.webp";
import ThirdScreenshot from "../assets/FostacommsWebsite.webp";

export const Showcase = () => {
  const images = [OlhmsMedia, AnotherScreenshot, ThirdScreenshot];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextImage();
      } else if (event.key === "ArrowLeft") {
        prevImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextImage, prevImage]);

  return (
    <div className="bg-white text-gray-800">
      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center md:items-stretch justify-between gap-12 md:gap-20">
          <div className="w-full md:w-1/2 space-y-10 md:text-left flex flex-col justify-center">
            <div className="flex flex-wrap justify-start gap-4">
              <span className="relative px-7 py-3 bg-pink-500 hover:bg-pink-700 rounded-full text-white text-base md:text-lg font-script tracking-wide shadow-xl hover:shadow-2xl transform translate-y-1 transition-all duration-400 ease-in-out group">
                I really loved working with Tee!
                <span className="absolute top-0 left-0 w-full h-full border-2 border-pink-300 rounded-full animate-ping opacity-75"></span>
              </span>
            </div>

            <div className="space-y-5">
              <div className="text-sm md:text-base font-serif text-brand-primary">
                <p className="uppercase tracking-widest">
                  REAL DESMOND | BRAND DESIGNER
                </p>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl font-light">
                She always puts in 100% into helping me and making my dream
                website! It has been so easy to communicate with her too as she
                is so attentive & patient! If there are any more complex
                questions you have, she also films videos to show you how
                everything works which is helpful! Every small detail of the
                website is so well taken care of! I will definitely recommend
                Tosin to everyone looking to make their dream website come to
                life!
              </p>
              <div className="pt-4">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center text-base md:text-lg font-semibold text-brand-primary group hover:text-rose-600 transition-colors duration-300 ease-in-out"
                >
                  VIEW PROJECTS
                  <span
                    className="
                      bg-brand-primary text-white rounded-full p-2 ml-3
                      transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110
                      shadow-md
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
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
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center relative p-3 md:p-6 bg-white rounded-2xl shadow-3xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-600 ease-in-out">
            <div className="relative w-full max-w-lg mx-auto aspect-[16/10] rounded-xl overflow-hidden shadow-2xl">
              <img
                src={images[currentImageIndex]}
                alt="Website Screenshot"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-800 ease-in-out hover:scale-105"
              />
            </div>
            <div className="flex justify-center items-center gap-5 mt-6 w-full">
              <button
                onClick={prevImage}
                className="bg-purple-300 bg-opacity-70 text-purple-800 p-2.5 md:p-3.5 rounded-full
                  hover:bg-opacity-100 transition-all duration-300 ease-in-out z-10 shadow-lg
                  transform hover:scale-110 cursor-pointer
                  focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60"
                aria-label="Previous image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-left"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <div className="flex space-x-2.5">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-3 w-3 md:h-3.5 md:w-3.5 rounded-full transition-colors duration-300 transform hover:scale-110 ${
                      index === currentImageIndex
                        ? "bg-pink-500 shadow-lg"
                        : "bg-pink-200 hover:bg-pink-300"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  ></button>
                ))}
              </div>
              <button
                onClick={nextImage}
                className="bg-purple-300 bg-opacity-70 text-purple-800 p-2.5 md:p-3.5 rounded-full
                  hover:bg-opacity-100 transition-all duration-300 ease-in-out z-10 shadow-lg
                  transform hover:scale-110 cursor-pointer
                  focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60"
                aria-label="Next image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
