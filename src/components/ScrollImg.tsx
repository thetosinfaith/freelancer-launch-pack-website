import React, { useRef, useEffect } from "react";

import OlhmsMedia from "../assets/OlhmsMedia.webp";
import Fostacomms from "../assets/fosta.webp";
import Rekora from "../assets/Rekoras.webp";
import RealDesmond from "../assets/reall.webp";
import Chopchop from "../assets/chopchop (2).webp";
import KindRaise from "../assets/kindraiseWebsite.webp";
import Micdee from "../assets/micdee.webp";
import AfterHome from "../assets/afterhome.webp";
import ContentPlus from "../assets/contentpluss.webp";
import VA4ME from "../assets/VA4MEe.webp";

const originalImages = [
  { src: OlhmsMedia, alt: "Videography & Photography", category: "Media" },
  { src: Fostacomms, alt: "PR & Communications", category: "Marketing" },
  { src: Chopchop, alt: "Gourmet Food Delivery", category: "Food & Beverage" },
  { src: AfterHome, alt: "Gen Z Community", category: "Community & Living" },
  { src: KindRaise, alt: "Nonprofit Fundraising", category: "Non-profit" },
  { src: ContentPlus, alt: "Premium Ghostwriting", category: "Creative" },
  { src: Micdee, alt: "Real Estate", category: "Land & Properties" },
  { src: Rekora, alt: "STEM Education", category: "Education" },
  { src: RealDesmond, alt: "Brand Identity Designer", category: "Branding" },
  { src: VA4ME, alt: "Virtual Assistant Services", category: "Services" },
];

const images = [
  ...originalImages,
  ...originalImages,
  ...originalImages,
  ...originalImages,
];

const ScrollImg: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollInterval: number;
    let scrollSpeed = 1;

    const startAutoScroll = () => {
      scrollInterval = window.setInterval(() => {
        container.scrollLeft += scrollSpeed;

        const originalContentWidth =
          (container.scrollWidth / images.length) * originalImages.length;
        if (container.scrollLeft >= originalContentWidth * 2) {
          container.scrollLeft -= originalContentWidth;
        }
      }, 20);
    };

    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };

    startAutoScroll();

    container.addEventListener("mouseenter", stopAutoScroll);
    container.addEventListener("mouseleave", startAutoScroll);

    return () => {
      stopAutoScroll();
      if (container) {
        container.removeEventListener("mouseenter", stopAutoScroll);
        container.removeEventListener("mouseleave", startAutoScroll);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-2 py-4 sm:px-4 sm:py-8">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto w-full max-w-7xl pb-2 space-x-4 lg:space-x-8 scrollbar-hide perspective-1000 cursor-ew-resize"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full md:w-[600px] h-[340px] sm:h-[400px] md:h-[440px] relative rounded-[32px] overflow-hidden shadow-3xl bg-pink bg-opacity-10 backdrop-filter backdrop-blur-md border border-white border-opacity-30 transform transition-all duration-500 ease-out hover:scale-[1.03] hover:rotate-z-2 hover:shadow-4xl active:scale-98 group perspective-800"
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 group-hover:brightness-90 transform translate-z-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out bg-gradient-to-t from-black to-transparent backdrop-blur-sm">
              <span className="text-sm font-semibold uppercase tracking-wider text-purple-200 block mb-1">
                {image.category}
              </span>
              <h3 className="text-2xl font-bold leading-tight drop-shadow-md text-white">
                {image.alt}
              </h3>
              <button className="mt-4 px-5 py-2 bg-pink-500 text-white font-semibold rounded-full shadow-lg hover:bg-purple-600 active:bg-purple-700 transition-all duration-200 text-sm transform hover:scale-105">
                Check it out
              </button>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ScrollImg;
