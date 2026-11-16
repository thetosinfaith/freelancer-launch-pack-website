import { useEffect } from "react";
import AOS from "aos";
import { NavLink } from "react-router-dom";
import "aos/dist/aos.css";
import { Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Brooi from "../assets/brooi.webp";
import TeaCcHLogo from "../assets/brooi.webp";

export default function WorkExperience() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
    AOS.refresh();
  }, []);

  const experiences = [
    {
      id: 1,
      logo: Brooi,
      alt: "Brooi Logo",
      title: "Frontend Intern",
      company: "Brooi (Shortlets)",
      location: "Remote",
      duration: "Nov 2022 - Present",
      yearsMonths: "0 Years 4 Months",
      delay: "100",
    },
    {
      id: 2,
      logo: TeaCcHLogo,
      alt: "TeaCcH Logo",
      title: "Frontend Developer",
      company: "TeaCcH (Co-Creation Hub)",
      location: "Ademola Saka, Oshodi-Isolo, Lagos.",
      duration: "May 2024 - Present",
      yearsMonths: "0 Years 3 Months",
      delay: "250",
    },
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-br from-gray-950 to-pink-950 text-white px-6 md:px-8 lg:px-12 py-16 md:py-24 font-sans relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="w-96 h-96  rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob top-0 left-0"></div>
        <div className="w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 top-0 right-0"></div>
        <div className="w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 bottom-0 left-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16 pb-8 border-b border-pink-600"
          data-aos="fade-down"
        >
          <div className="mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
              <span className="text-pink-300">Work</span> Experience
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-pink-200">
              7 months of impact...
            </h2>
            <p className="text-gray-300 text-lg max-w-lg">{""}</p>
          </div>

          <div className="flex flex-col items-start lg:items-end">
            <p className="text-gray-300 mb-4 text-lg">
              Curious for more details?
            </p>
            <Button className="bg-white hover:bg-purple-700 hover:text-white transition-all duration-300 text-black px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-lg">
              DOWNLOAD CV
              <Download className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="space-y-16">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="flex flex-col lg:flex-row lg:items-start gap-8 p-7 rounded-2xl shadow-2xl hover:scale-[1.015] transition-transform duration-300 backdrop-blur-md"
              data-aos="fade-up"
              data-aos-delay={exp.delay}
            >
              <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center overflow-hidden rounded-full bg-white/80 shadow-lg ring-4 ring-pink-200">
                <img
                  src={exp.logo}
                  alt={exp.alt}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">
                  {exp.title}
                </h3>
                <h4 className="text-xl md:text-2xl text-pink-100 mb-2 font-medium">
                  {exp.company}
                </h4>
                <p className="text-pink-200 text-lg">{exp.location}</p>
              </div>

              <div className="text-left lg:text-right flex-shrink-0 mt-4 lg:mt-0">
                <p className="text-white font-semibold text-xl mb-1">
                  {exp.duration}
                </p>
                <p className="text-pink-100 text-md">{exp.yearsMonths}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-16 flex justify-center"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <NavLink
            to="/portfolio"
            className="group flex items-center bg-white hover:bg-pink-700 text-black font-medium rounded-full px-6 py-3 text-base lg:text-lg
                          shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300
                          focus:outline-none focus:ring-4 focus:ring-pink-600 border border-bg-[#5a3d35]"
          >
            VIEW MY PROJECTS
            <span
              className={`bg-white text-[#5a3d35] rounded-full p-2 ml-2 transition-transform duration-200 group-hover:rotate-45`}
            >
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
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
