import React, { useEffect } from "react";
import Pink from "../assets/pink.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const HeaderNav: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <header className="relative bg-brand-primary py-32 sm:py-40 md:py-48 lg:py-56 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url(${Pink.src})`,
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mix-blend-screen opacity-20 animate-float"
        style={{ filter: "blur(60px)" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-pink-400 to-red-500 rounded-full mix-blend-screen opacity-20 animate-float-alt"
        style={{ filter: "blur(80px)" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-teal-300 to-blue-400 rounded-full mix-blend-screen opacity-20 animate-float"
        style={{ filter: "blur(40px)", animationDelay: "2s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center text-center">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 md:mb-8 leading-tight"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            Past <i className="font-light">Projects</i>
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl text-white text-opacity-80 mb-8 md:mb-10 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            Take a look at some of the clients I've had the privilege to work
            with!
          </p>
          <div
            className="flex justify-center"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-duration="1200"
          >
            <svg
              width="80"
              height="24"
              viewBox="0 0 80 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-pink-300 transform hover:scale-110 transition-transform duration-300"
            >
              <path
                d="M4 12L76 12M76 12L64 4M76 12L64 20"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
