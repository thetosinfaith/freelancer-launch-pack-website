import Logo from "../assets/logo_white - Copy.webp";
import { Facebook, Linkedin, Instagram, Globe } from "lucide-react";
import { CallToActionSection } from "./services/CallToActionSection";

function Footer() {
  return (
    <div className="bg-current py-8 px-2 md:px-6 max-w-screen-2xl mx-auto">
      <footer className="bg-[#d82382] relative rounded-xl overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-8 bg-[#d82382]">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 32"
            preserveAspectRatio="xMinYMin slice"
            fill="currentColor"
          >
            <path d="M0,32 C30,0 60,0 90,32 C120,0 150,0 180,32 C210,0 240,0 270,32 C300,0 330,0 360,32 C390,0 420,0 450,32 C480,0 510,0 540,32 C570,0 600,0 630,32 C660,0 690,0 720,32 C750,0 780,0 810,32 C840,0 870,0 900,32 C930,0 960,0 990,32 C1020,0 1050,0 1080,32 C1110,0 1140,0 1170,32 L1200,32 L1200,0 L0,0 Z" />
          </svg>
        </div>

        <div className="pt-12 pb-8 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left lg:items-center">
              <div className="lg:col-span-4 grid grid-cols-1 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">
                    {" "}
                    Helpful Links
                  </h3>
                  <ul className="space-y-2 text-white text-sm uppercase tracking-wide">
                    <li>
                      <a href="/services" className="hover:underline">
                        My Services
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="hover:underline">
                        About Me
                      </a>
                    </li>
                    <li>
                      <a href="/portfolio" className="hover:underline">
                        Visit Portfolio
                      </a>
                    </li>
                    <li>
                      <a href="/links" className="hover:underline">
                        Get Freebies
                      </a>
                    </li>
                    <li>
                      <a href="/booking" className="hover:underline">
                        Contact Me
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-start items-start gap-4 lg:justify-center lg:items-center">
                <img src={Logo} alt="Fika Logo" className="w-64 h-auto" />
                <div className="text-left lg:text-center">
                  <p className="text-xs text-white uppercase tracking-wide ">
                    © Tosin Faith, 2025 | All Rights Reserved.{" "}
                    <br className="md:hidden" />
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 lg:mt-0 flex w-full lg:justify-end">
                <div className="flex space-x-4 items-center">
                  <Instagram className="w-6 h-6 text-white hover:text-gray-600 cursor-pointer" />

                  <div className="w-6 h-6 text-white hover:text-gray-600 cursor-pointer">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-full h-full"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </div>
                  <div className="w-6 h-6 text-white hover:text-gray-600 cursor-pointer">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-full h-full"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <a
                    href="https://web.facebook.com/thetosinfaith"
                    aria-label="Facebook"
                    className="text-white hover:text-white transition-colors duration-200"
                  >
                    <Facebook size={25} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thetosinfaith/"
                    aria-label="LinkedIn"
                    className="text-white hover:text-white transition-colors duration-200"
                  >
                    <Linkedin size={25} />
                  </a>

                  <a
                    href="https://www.thetosinfaith.xyz/"
                    aria-label="Website"
                    className="text-white hover:text-white transition-colors duration-200"
                  >
                    <Globe size={25} />
                  </a>

                  <div className="w-6 h-6 text-white hover:text-gray-600 cursor-pointer">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-full h-full"
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
