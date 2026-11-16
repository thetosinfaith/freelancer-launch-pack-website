import { useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroPortrait from "../assets/girl.webp";
import QuoteBg from "../assets/girlll.webp";
import PartnershipSection from "./about/PartnershipSection";
import { Link } from "react-router-dom";
import Expectations from "./about/ExpectationCard";
import Value from "./Value";
import InstagramWidget from "./about/InstagramWidget";
import ScrollImg from "./ScrollImg";
import WorkExperience from "./WorkExperience";
import ScrollingBanner from "./ScrollingBanner";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });

    window.scrollTo(0, 0);

    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className=" bg-brand-background pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 text-left lg:text-left space-y-7 flex flex-col justify-center order-1 lg:order-2">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-serif text-pink-800 leading-tight"
                data-aos="fade-left"
              >
                <span className="italic text-[#d82382] font-bold">
                  {" "}
                  Hi! I’m Tosin.{" "}
                </span>
              </h1>
              <p
                className="text-lg text-gray-700 leading-relaxed mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                I’m a website designer and developer, but I do things
                differently. I hate jargon, I hate complicated technical words,
                and I offer a range of services to cater for brands at all
                stages of their journey.
              </p>
              <p
                className="text-lg text-gray-700 leading-relaxed mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                I work with ambitious brands & businesses on their websites
                materials. But what makes me unique? That would be my strong
                visual aesthetic that I always lean in to, I have a good eye for
                design and I know how to make things look fun, stylish, and
                still help you get more customers.
              </p>

              <p
                className="text-lg text-gray-700 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                My website design and dev process is simple: we work together to
                figure out exactly what your business needs before I do the BTS
                magic to make it come to life. Everything I do is collaborative,
                supportive and creative.
              </p>
              <div
                className="max-w-4xl text-left relative z-10"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Link
                  to="/portfolio"
                  className="inline-flex items-center text-base md:text-lg font-bold text-[#d82382] group hover:text-rose-600 transition-colors duration-300 ease-in-out"
                >
                  SEE WHAT I'VE CREATED
                  <span
                    className="
                          bg-gradient-to-br from-[#d82382] to-pink-500 text-white rounded-full p-2 ml-3
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

            <div
              className="relative w-full lg:w-1/2 flex justify-center order-2 lg:order-1"
              data-aos="fade-right"
            >
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none lg:h-[600px] flex-shrink-0">
                <img
                  src={HeroPortrait}
                  alt="holding a glass of wine."
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        <PartnershipSection data-aos="fade-up" />
        <Expectations data-aos="fade-up" />

        <section
          className="relative bg-cover bg-center py-24 px-4 sm:px-6 lg:px-8"
          style={{
            backgroundImage: `url(${QuoteBg})`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="max-w-3xl mx-auto text-center relative z-10 h-[300px] sm:h-[400px] lg:h-[500px]">
            <p className="text-white text-3xl sm:text-4xl lg:text-5xl font-serif italic leading-tight drop-shadow-lg mb-8"></p>
            <p className="text-white text-xl font-medium"></p>
          </div>
        </section>
        <Value data-aos="fade-up" />
        <ScrollingBanner data-aos="fade-up" />
        <InstagramWidget data-aos="fade-up" />
      </main>
    </>
  );
};

export default About;
