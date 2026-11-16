import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import User from "../assets/girl.webp";

const Button = ({ asChild, children, className, ...props }) => {
  const Component = asChild ? "span" : "button";
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};

export default function ConsultationSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

  return (
    <section
      className="relative px-6 py-20 md:py-32 overflow-hidden bg-white dark:bg-gray-900"
    >
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40 dark:opacity-20">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply blur-3xl animate-blob dark:bg-purple-700/50"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000 dark:bg-pink-700/50"></div>
        <div className="absolute top-1/3 left-[45%] w-72 h-72 bg-fuchsia-200 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-4000 dark:bg-fuchsia-700/50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-[auto_auto] gap-12 items-center lg:justify-center lg:gap-16">          <div className="flex justify-center" data-aos="fade-right" data-aos-once="true">
            <div className="relative p-3 rounded-full bg-gradient-to-tr from-purple-300 via-pink-300 to-fuchsia-400 shadow-2xl transform transition-transform duration-500 hover:scale-105 group">
              <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-white dark:border-gray-800 relative z-10">
                <img
                  src={User}
                  alt="Consultant with laptop"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 rounded-full ring-8 ring-offset-8 ring-transparent group-hover:ring-pink-500 group-hover:ring-offset-pink-50 transition-all duration-500 ease-out"></div>
            </div>
          </div>

          <div className="text-center lg:text-left px-4">
            <div className="max-w-full lg:max-w-xl xl:max-w-2xl mx-auto lg:mx-0" data-aos="fade-left" data-aos-once="true">
                <h2
                  className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight drop-shadow-sm"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-once="true"
                >
                  Not sure what website package is right for you?
                </h2>
                <p
                  className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed font-light"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-once="true"
                >
                  Book a{" "}
                  <span className="font-bold text-purple-600 dark:text-purple-400">
                    free 15-minute consultation
                  </span>{" "}
                  with me to get clarity and recommendations.
                </p>
                <Button
                  asChild
                  className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium rounded-full bg-brand-primary text-white shadow-xl hover:from-pink-700 hover:to-purple-800 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-75 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-once="true"
                >
                  <a href="/booking" className="flex items-center">
                    <svg className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h.01M16 11h.01M9 16h.01M15 16h.01M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    Schedule a Call With Me
                  </a>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}