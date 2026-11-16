import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import You from "../assets/logo-black.webp";
import MapLOgo from "../assets/maplogo.webp";
import CliqueShoppa from "../assets/cpc.webp";
import Tixavo from "../assets/Tixavo.webp";
import Kindraise from "../assets/Kindraise.webp";
import AzuTravel from "../assets/AzuTravels.webp";
import Brooi from "../assets/brooi-logo.webp";
import VA4ME from "../assets/va4me.webp";
import ContentPlus from "../assets/contentplus.webp";
import TalkSexWithSugar from "../assets/Talksex.webp";
import Fostacomms from "../assets/fostacomm.webp";
import MyLandlord from "../assets/MyLandlord.webp";
import Muve from "../assets/Muve.webp";
import Rekora from "../assets/Rekora-logo-dark.webp";
import YellowQueen from "../assets/yellow-queen.webp";

const ClientsSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  const clients = [
    { name: "ETAL", logoSrc: You },
    { name: "EAT", logoSrc: MapLOgo },
    { name: "Kewa's Kitchen", logoSrc: CliqueShoppa },
    { name: "TemsDelight Event Planning Services", logoSrc: Rekora },
    { name: "Eventi Cocktails", logoSrc: Tixavo },
    { name: "Délani", logoSrc: Kindraise },
    { name: "The Blue Kitchen", logoSrc: AzuTravel },
    { name: "P & P Sip", logoSrc: Brooi },
    { name: "BETH Foundation", logoSrc: VA4ME },
    { name: "MB", logoSrc: Fostacomms },
    { name: "Békiri", logoSrc: TalkSexWithSugar },
    { name: "IDW & F", logoSrc: MyLandlord },
    { name: "Riot", logoSrc: YellowQueen },
    { name: "Ajòje", logoSrc: Muve },
    { name: "Tessallure", logoSrc: ContentPlus },
  ];

  const [showAllClients, setShowAllClients] = useState(false);
  const initialVisibleClientCount = 6;

  const handleToggleClients = () => {
    setShowAllClients(!showAllClients);
  };

  const currentVisibleClients = clients.slice(0, initialVisibleClientCount);
  const hiddenClients = clients.slice(initialVisibleClientCount);

  const showToggleButton = clients.length > initialVisibleClientCount;

  return (
        <section className="relative bg-brand-background overflow-hidden w-full py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
   
      <style>
        {`
          .client-logo {
            filter: none;
            transition: filter 0.4s cubic-bezier(.4,0,.2,1);
          }
          .client-card:hover .client-logo {
            filter: grayscale(1);
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-10 sm:mb-20">
          <p className="text-sm font-semibold text-white bg-brand-primary uppercase tracking-wide mb-5 inline-block px-4 py-1 rounded-full">
            I'VE WORKED WITH{" "}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black mb-10 leading-tight drop-shadow-lg">
            Happy{" "}
            <span className="relative inline-block">
              Brands<span className="text-pink-500">.</span>
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
                />
              </svg>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-left text-gray-600 max-w-3xl font-medium">
            Not to brag, but I’ve worked with some really cool brands.
          </p>
        </div>

        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-x-4 gap-y-6">
            {currentVisibleClients.map((client, index) => (
              <div
                key={`mobile-visible-${index}`}
                className="client-card relative flex flex-col items-center justify-center p-2 bg-white rounded-lg
                           hover:shadow-md transition-all duration-300 ease-in-out
                           transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <img
                  src={client.logoSrc}
                  alt={`${client.name} Logo`}
                  className="client-logo max-h-14 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div
            className={`grid grid-cols-2 gap-x-4 gap-y-6 mt-4
                         ${
                           showAllClients
                             ? "max-h-[1000px] opacity-100"
                             : "max-h-0 opacity-0"
                         }
                         overflow-hidden transition-all duration-500 ease-in-out`}
          >
            {hiddenClients.map((client, index) => (
              <div
                key={`mobile-hidden-${index}`}
                className="client-card relative flex flex-col items-center justify-center p-2 bg-white rounded-lg
                           hover:shadow-md transition-all duration-300 ease-in-out
                           transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={400 + index * 80}
              >
                <img
                  src={client.logoSrc}
                  alt={`${client.name} Logo`}
                  className="client-logo max-h-14 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {showToggleButton && (
            <div className="text-center mt-8">
              <button
                onClick={handleToggleClients}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full 
                           text-white bg-brand-primary hover:bg-brand-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500
                           transition-colors duration-300 ease-in-out"
              >
                {showAllClients ? (
                  <>
                    See Less Brands
                    <svg
                      className="ml-2 -mr-1 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    See More Brands
                    <svg
                      className="ml-2 -mr-1 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
          {clients.map((client, index) => (
            <div
              key={`desktop-${index}`}
              className="client-card relative flex flex-col items-center justify-center p-4 sm:p-6 bg-white rounded-xl
                         hover:shadow-lg transition-all duration-300 ease-in-out
                         transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
              data-aos="zoom-in-up"
              data-aos-delay={index * 80}
            >
              <img
                src={client.logoSrc}
                alt={`${client.name} Logo`}
                className="client-logo max-h-16 sm:max-h-20 lg:max-h-24 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
