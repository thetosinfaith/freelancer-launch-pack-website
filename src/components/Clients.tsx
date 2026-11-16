import { Store, Users, Megaphone, Palette } from "lucide-react";
import Olomu from "../assets/tt.webp";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom"; 

export default function Clients() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const navigate = useNavigate();

  const handleServicesClick = () => {
    navigate("/services"); 
  };

  return (
    <div className="pt-16 pb-8 px-4 bg-white ">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-up">
          <p className="text-sm font-semibold text-gray-800 bg-brand-background uppercase tracking-wide mb-5 inline-block px-4 py-1 rounded-full">
            WHO I WORK WITH
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 mb-10 leading-tight drop-shadow-lg">
            This Is{" "}
            <span className="relative inline-block">
              For You If
              <span className="text-balck">...</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 100 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 6C20 2 80 10 95 6"
                  stroke="#c01a5"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-y-12 lg:gap-x-6 lg:items-stretch mt-8 mb-8">
          <div
            className="bg-[#D2F9E5] rounded-3xl p-8 relative flex flex-col text-left"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="bg-white rounded-2xl p-4 w-16 h-16 mb-6 flex items-center justify-center">
              <Palette className="h-8 w-8 text-gray-800" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Creators</h3>
            <p className="text-gray-700 mb-8 flex-grow">
              You’ve spent HOURS trying to build a website yourself, but it
              still doesn’t look good enough to showcase your work.
            </p>
            <Button
              variant="outline"
              className="mt-auto bg-gray-700 text-white border-gray-700 hover:bg-pink-700 hover:scale-105 transition-all w-fit px-8 py-5 text-lg shadow-lg hover:shadow-xl rounded-full" 
              onClick={handleServicesClick} 
            >
              Let's Fix That <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div
            className="lg:row-span-2 lg:col-start-2 flex justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-full lg:w-[380px] h-full rounded-3xl overflow-hidden">
              <img
                src={Olomu}
                alt="Smiling man with curly hair"
                width={380}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div
            className="bg-[#E2F0FD] rounded-3xl p-8 relative flex flex-col text-left"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="bg-white rounded-2xl p-4 w-16 h-16 mb-6 flex items-center justify-center">
              <Megaphone className="h-8 w-8 text-gray-800" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Personal Brand
            </h3>
            <p className="text-gray-700 mb-8 flex-grow">
              You’ve tried a few website templates, but none of them are doing
              justice to your brand, you need something that feels more you.
            </p>
            <Button
              variant="outline"
              className="mt-auto bg-gray-700 text-white border-gray-700 hover:bg-pink-700 hover:scale-105 transition-all w-fit px-8 py-5 text-lg shadow-lg hover:shadow-xl rounded-full"
              onClick={handleServicesClick} 
            >
              Let’s Launch It
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div
            className="bg-[#FFF8C0] rounded-3xl p-8 lg:row-start-2 lg:col-start-1 relative flex flex-col text-left"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="bg-white rounded-2xl p-4 w-16 h-16 mb-6 flex items-center justify-center">
              <Store className="h-8 w-8 text-gray-800" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              E-commerce Store
            </h3>
            <p className="text-gray-700 mb-8 flex-grow">
              You want a website that’s designed to handle selling products, so
              you can manage orders and deliveries without wasting time.
            </p>
            <Button
              variant="outline"
              className="mt-auto bg-gray-700 text-white border-gray-700 hover:bg-pink-700 hover:scale-105 transition-all w-fit px-8 py-5 text-lg shadow-lg hover:shadow-xl rounded-full" 
              onClick={handleServicesClick} 
            >
              Let’s Upgrade It
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div
            className="bg-[#E7D6FA] rounded-3xl p-8 lg:row-start-2 lg:col-start-3 relative flex flex-col text-left"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="bg-white rounded-2xl p-4 w-16 h-16 mb-6 flex items-center justify-center">
              <Users className="h-8 w-8 text-gray-800" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Service Provider
            </h3>
            <p className="text-gray-700 mb-8 flex-grow">
              You want to show your dream clients exactly how great you are and
              how you’re the best service provider for them
            </p>
            <Button
              variant="outline"
              className="mt-auto bg-gray-700 text-white border-gray-700 hover:bg-pink-700 hover:scale-105 transition-all w-fit px-8 py-5 text-lg shadow-lg hover:shadow-xl rounded-full" 
              onClick={handleServicesClick} 
            >
              Let’s Build It
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
