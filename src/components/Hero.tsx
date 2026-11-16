import React, { useEffect, memo } from "react";
import { Link } from "react-router-dom";
import Olomu from "../assets/girl.webp";
import OgaHr from "../assets/Muve.webp";
import TedxAjegunle from "../assets/Tixavo.webp";
import Overlay from "../assets/vector-bg.webp";

import AOS from "aos";
import "aos/dist/aos.css";
import MarqueeBanner from "./MarqueeBanner";
import Navbar from "./Navbar";
import { useSiteContent } from "@/hooks/use-site-content";

function Hero({ className = "" }) {
  const { homepage } = useSiteContent();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      easing: "ease-out",
    });

    AOS.refresh();
  }, []);

  return (
   <>
    <section
      id="home"
      className={`relative bg-[#d82382] text-white py-16 md:py-20 lg:py-16 px-6 md:px-12 lg:px-20 overflow-hidden min-h-screen flex items-center pt-28 lg:pt-36 ${className}`}
      aria-labelledby="hero-title"
    >
      <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        aria-hidden="true"
      >
        <img
          src={Overlay}
          alt="Abstract geometric background pattern"
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-pink-500/20"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl mx-auto">
        <div className="space-y-8 text-left lg:text-left">
          <h1
            id="hero-title"
            className="text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg text-white"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            I Design & Build <br />
            Impactful&nbsp;Websites
          </h1>
          <p
            className="text-lg md:text-xl text-pink-100 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            {homepage.heroDescription}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1200"
          >
            <Link
              to={homepage.primaryHref}
              className="inline-flex items-center justify-center text-lg bg-white text-zinc-700 rounded-full px-8 py-4 font-medium hover:bg-gray-100 transition-all shadow-lg group transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-opacity-75"
              aria-label="Contact Tee to create a website together"
            >
              Let's Create Your Site
              <span className="bg-zinc-700 text-white rounded-full p-2 ml-3 transition-transform duration-300 group-hover:rotate-45">
                <ArrowRightIcon />
              </span>
            </Link>

            <Link
              to={homepage.secondaryHref}
              className="inline-flex items-center justify-center bg-transparent border border-pink-400 text-pink-100 rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-opacity-75 group"
              aria-label="Discover Tee's portfolio of past projects"
            >
              Take Me to Portfolio
              <span className="bg-pink-100 text-pink-800 rounded-full p-2 ml-3 transition-transform duration-300 group-hover:rotate-45">
                <ArrowRightIcon />
              </span>
            </Link>
          </div>

          <div
            className="mt-12 text-left lg:text-left"
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-duration="1200"
          >
            <p className="text-white text-base md:text-lg opacity-80 mb-4">
              {homepage.hero.proudlyWorkedWith}
            </p>
            <div className="flex flex-wrap justify-start lg:justify-start items-center gap-6">
              <img
                src={TedxAjegunle}
                alt="TEDx Ajegunle client logo"
                className="h-10 md:h-12 object-contain grayscale opacity-100 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
              <img
                src={OgaHr}
                alt="Oga HR client logo"
                className="h-10 md:h-12 object-contain grayscale opacity-100 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
              <span className="text-white text-base md:text-lg opacity-80 ml-2">
                + 15 more!
              </span>
            </div>
          </div>
        </div>

        <div
          className="relative flex items-center justify-center lg:justify-end h-[450px] md:h-[550px] mt-10 lg:mt-0"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div className="relative w-full max-w-xl h-full rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out group">
            <img
              src={Olomu}
              alt="Tee, a creative web designer and developer, smiling confidently."
              className="w-full h-full object-cover object-center transform scale-105 group-hover:scale-100 transition-transform duration-500"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/40 via-transparent to-transparent group-hover:bg-transparent transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </section>
   </>
  );
}

const ArrowRightIcon = memo(() => (
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
));

export default Hero;
