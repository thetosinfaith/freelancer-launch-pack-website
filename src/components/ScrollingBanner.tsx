"use client";

import { Instagram } from "lucide-react";

export default function ScrollingBanner() {
  const scrollingItems = [
    { text: " ~ lately on insta ~", icon: Instagram },
    { text: " ~ lately on insta ~", icon: Instagram },
    { text: " ~ lately on insta ~", icon: Instagram },
    { text: " ~ lately on insta ~", icon: Instagram },
    { text: " ~ lately on insta ~", icon: Instagram },
    { text: " ~ lately on insta ~", icon: Instagram },
  ];

  return (
    <div className="w-full relative z-10">
      <div className="bg-[#d82382] text-white py-4 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <div className="inline-flex items-center space-x-10 text-lg md:text-xl ">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="inline-flex items-center space-x-10">
                {scrollingItems.map((item, index) => (
                  <span key={index} className="inline-flex items-center group">
                    {item.icon && (
                      <item.icon className="mr-2 h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                    )}
                    {item.text}
                    {index < scrollingItems.length - 1 && (
                      <span className="mx-5 text-3xl animate-pulse"></span>
                    )}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse {
          animation: pulse 1.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
