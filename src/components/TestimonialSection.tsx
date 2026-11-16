import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import Hero from "../assets/hero.webp";
import Real from "../assets/real-test.webp";

const testimonials = [
  {
    id: 1,
    tag: "branding website",
    image: Real,
    name: "Real Desmond",
    title: "BRAND DESIGNER",
    quote:
      "Iconic - Tosin UNDERSTOOD the assignment. The communication flow was amazing too, such a collaborative experience. MY BRANDING IS ME NOW!! I've had such lovely comments already - what a DREAM!",
  },
  {
    id: 2,
    tag: "made 6 figures",
    image: Hero,
    name: "Tosin Olomu",
    title: "VIDEOGRAPHER",
    quote:
      "I struggle to see past the moodboard, like what else could anyone possibly design but, look at my website!! It's everything I wanted and everything I didn't know I needed. I can't wait to slap it across everything I do.",
  },
  {
    id: 3,
    tag: "boosted sales",
    image: "/placeholder.svg?height=64&width=64",
    name: "Maria Rodriguez",
    title: "BUSINESS OWNER",
    quote:
      "She has her onboarding process and structure totally nailed. She kept me informed at every stage and made clear what she needed from me and vice-versa. A results that I am absolutely in love with!",
  },
  {
    id: 4,
    tag: "unlocked potential",
    image: "/placeholder.svg?height=64&width=64",
    name: "Samuel Green",
    title: "STARTUP FOUNDER",
    quote:
      "Tosin listened attentively to every note I provided and went above and beyond to ensure I loved my website and rebrand as much as I do. On a personal level, she was an absolute joy to work with - genuinely lovely and always supportive.",
  },
  {
    id: 5,
    tag: "brand recognition",
    image: "/placeholder.svg?height=64&width=64",
    name: "Emily White",
    title: "MARKETING DIRECTOR",
    quote:
      "From start to finish, everything was efficient, yet it always felt like she devoted a substantial amount of time and effort to my rebrand and website. ",
  },
  {
    id: 6,
    tag: "increased engagement",
    image: "/placeholder.svg?height=64&width=64",
    name: "Michael Brown",
    title: "COMMUNITY MANAGER",
    quote:
      "Our community engagement soared after implementing Tosin's design recommendations. She has a keen eye for what resonates with an audience.",
  },
];

const getItemsPerPage = (width) => {
  if (width >= 1024) return 3;
  if (width >= 768) return 2;
  return 1;
};

const CustomLeftArrow = () => (
  <svg
    width="36"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-current text-white"
  >
    <path
      d="M21 12H3"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 19L3 12L10 5"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CustomRightArrow = () => (
  <svg
    width="36"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-current text-white"
  >
    <path
      d="M3 12H21"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 5L21 12L14 19"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage(window.innerWidth));
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlideIndex = testimonials.length - itemsPerPage;

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlideIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
  };

  const transformPercentage = currentSlide * (100 / itemsPerPage);

  return (
    <section className="py-16 px-4 bg- overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between mb-10 sm:mb-14">
          <div>
            <p className="text-sm font-semibold text-gray-600 bg-pink-100 uppercase tracking-wide mb-5 inline-block px-4 py-1 rounded-full">
              TESTIMONIALS{" "}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black mb-4 leading-tight drop-shadow-lg">
              From{" "}
              <span className="relative inline-block">
                The Brands
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 100 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 6C20 2 80 10 95 6"
                    stroke="#"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          <div className="hidden lg:flex space-x-6">
            <Button
              size="icon"
              variant="outline"
              className="rounded-none border-2 border-brand-primary bg-brand-primary text-white hover:bg-brand-primary w-16 h-16 transition-all duration-300 shadow-md flex items-center justify-center"
              onClick={goToPrevious}
              aria-label="Previous testimonial"
            >
              <CustomLeftArrow />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="rounded-none border-2 border-brand-primary bg-brand-primary text-white hover:bg-pink-400 w-16 h-16 transition-all duration-300 shadow-md flex items-center justify-center"
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              <CustomRightArrow />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div
            className="flex transition-transform duration-700 ease-in-out items-stretch"
            style={{
              transform: `translateX(-${transformPercentage}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`flex-shrink-0 px-3 sm:px-4 flex`}
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <div className="bg-white border-4 border-gray-900 rounded-[2.5rem] p-8 relative flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-300 flex-grow">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-5 border-2 border-gray-300 shadow-sm">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-gray-900 text-xl">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 uppercase text-sm tracking-widest mt-0.5">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-gray-800 text-lg leading-relaxed flex-grow">
                    {testimonial.quote}
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12 space-x-5 lg:hidden">
          <Button
            size="icon"
            className="rounded-none bg-brand-primary text-white hover:bg-pink-400 w-16 h-16 transition-all duration-300 shadow-lg flex items-center justify-center border-2 border-pink-600"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <CustomLeftArrow />
          </Button>
          <Button
            size="icon"
            className="rounded-none bg-brand-primary text-white hover:bg-pink-400 w-16 h-16 transition-all duration-300 shadow-lg flex items-center justify-center border-2 border-pink-600"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <CustomRightArrow />
          </Button>
        </div>

        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: testimonials.length }).map((_, idx) => (
            <button
              key={idx}
              className={`h-4 w-4 rounded-full transition-colors duration-300 ${
                currentSlide === idx
                  ? "bg-brand-primary"
                  : "bg-brand-primary hover:bg-gray-500"
              }`}
              onClick={() => {
                setCurrentSlide(idx);
              }}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
