import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Olomu from "../assets/vm.webp";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-pink-50 px-4 pt-32 pb-20 sm:pt-24 md:pt-16 flex items-center justify-center lg:items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-pink-800 leading-tight mb-4 sm:mb-6 animate-fadeIn">
                  <span className="italic text-pink-600 font-bold">
                    {" "}
                    Coming Soon...
                  </span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed animate-fadeIn delay-100">
                  It looks like the page you're searching for has either taken a
                  little detour or decided to redecorate elsewhere.
                </p>
                <Button
                  size="lg"
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                  onClick={() => navigate("/")}
                >
                  Let's Go Home
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center items-center py-8 lg:py-0">
              <div className="relative">
                <div className="absolute -top-8 left-4 w-16 h-16 sm:-top-12 sm:left-8 sm:w-24 sm:h-24 border-2 border-pink-300 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute -top-4 left-8 w-12 h-12 sm:-top-8 sm:left-12 sm:w-16 sm:h-16 border-2 border-pink-200 rounded-full opacity-40 animate-pulse delay-100"></div>
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden border-4 border-pink-500 relative shadow-xl aspect-square">
                  <img
                    src={Olomu}
                    alt="404 illustration"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-fuchsia-200 text-fuchsia-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-md animate-bounce slow">
                  dreaming
                </div>
                <div className="absolute bottom-10 -left-4 sm:bottom-20 sm:-left-8 bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-md animate-bounce delay-200">
                  creating
                </div>
                <div className="absolute -bottom-2 right-4 sm:-bottom-4 sm:right-12 bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-md animate-bounce delay-400">
                  flourishing
                </div>
                <div className="absolute bottom-4 -right-8 w-6 h-6 sm:bottom-8 sm:-right-12 sm:w-8 sm:h-8 bg-pink-200 rounded-lg transform rotate-45 opacity-70 animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
