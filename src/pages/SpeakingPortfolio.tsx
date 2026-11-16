import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SpeakingSection from "@/components/speaking/SpeakingSection";
import HexagonIcon from "@/components/speaking/HexagonIcon";
import QuarterCircleIcon from "@/components/speaking/QuarterCircleIcon";
import CloverIcon from "@/components/speaking/CloverIcon";

export default function SpeakingPortfolio() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <section className="px-6 py-40 bg-gradient-to-b from-blue-50 to-pink-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <SpeakingSection
                icon={<HexagonIcon />}
                title="designer"
                description="freelance dev with a wealth"
              />
              <SpeakingSection
                icon={<QuarterCircleIcon />}
                title="content creator"
                description="creating meaningful and unique content for social & beyond"
              />
              <SpeakingSection
                icon={<CloverIcon />}
                title="designer"
                description="mentorship opportunities for young up & coming stylists"
              />
            </div>

            <div className="text-center">
              <button className="border-2 border-blue-300 text-blue-400 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200">
                go to portfolio
              </button>
            </div>
          </div>
        </section>

        <section className="bg-pink-300 px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
                  I work with ... and{" "}
                  <span className="italic font-serif">creators</span> to deliver{" "}
                  <span className="italic font-serif">unique</span> and{" "}
                  <span className="italic font-serif">striking</span> websites.
                </h2>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-80 h-96 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=320"
                    alt="Editorial fashion styling work"
                    width={320}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-pink-300 px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center lg:justify-start">
                <div className="w-80 h-80 rounded-t-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=320&width=320"
                    alt="Stylist with 10 years experience"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-white">
                <h2 className="text-4xl md:text-5xl font-light leading-tight">
                  I have 10 years <span className="italic">industry</span>{" "}
                  <span className="italic font-serif">experience</span>, where I
                  have built a diverse portfolio working with photographers &
                  editors.
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
