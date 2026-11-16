import { useState } from "react";
import Ladies from "../assets/vm.webp";

export default function ServicesSection() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const services = [
    {
      id: "creator",
      title: "Creator",
      color: "bg-blue-300/70",
      content:
        "Stop wasting hours on repetitive tasks. I build custom tools that automate your workflows, eliminate manual work, and integrate your systems. Focus on growth while automation handles the boring stuff.",
      buttonText: "AUTOMATION SERVICES",
    },
    {
      id: "ecommerce",
      title: "Personal Brand",
      color: "bg-pink-300/70",
      content:
        "Need a website that actually makes sales? I build conversion-focused sites with proven funnels, lead capture, and payment systems. Turn more visitors into paying customers.",
      buttonText: "ECOMMERCE SERVICES",
    },
    {
      id: "saas",
      title: "E-commerce Store",
      color: "bg-green-300/70",
      content:
        "Tired of software that almost fits your needs? I build custom web applications tailored to your exact business processes. Own your solution instead of paying monthly subscriptions.",
      buttonText: "WEB APP SERVICES",
    },
    {
      id: "optimization",
      title: "Service-Based Business",
      color: "bg-yellow-300/70",
      content:
        "Is your slow website costing you sales? I optimize performance, boost search rankings, and maintain security to transform your site into a revenue-generating machine.",
      buttonText: "OPTIMIZATION SERVICES",
    },
  ];

  const handleSectionClick = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const ContentWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6 py-8 md:py-16">
      {children}
    </div>
  );

  return (
    <>
      <ContentWrapper>
        <div className="flex flex-col md:flex-row min-h-[60vh] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          <div className="w-full md:w-1/2 relative h-[40vh] md:h-[500px] rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
            <img
              src={Ladies}
              alt="Person working creatively"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col bg-pink-50 p-4 md:p-6 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">
            {services.map((service) => (
              <div key={service.id} className="w-full">
                <div
                  className={`flex-1 ${service.color} flex items-center justify-between p-6 md:p-8 rounded-xl my-2 md:my-1 cursor-pointer hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group`}
                  onClick={() => handleSectionClick(service.id)}
                >
                  <h2 className="font-sans text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-white transition-colors">
                    {service.title}
                  </h2>
                  <div className="text-3xl sm:text-4xl font-light text-gray-900 group-hover:text-white transform group-hover:rotate-45 transition-transform duration-300">
                    +
                  </div>
                </div>

                {expandedSection === service.id && (
                  <div
                    className={`${service.color} p-6 md:p-8 rounded-b-xl shadow-inner border-t border-gray-100 mb-2 md:mb-1 transform transition-all duration-300 ease-in-out`}
                  >
                    <p className="font-sans text-base sm:text-lg text-gray-800 leading-relaxed mb-6">
                      {service.content}
                    </p>
                    <button className="inline-flex items-center px-6 py-3 bg-gray-900 text-white text-md font-semibold rounded-lg hover:bg-gray-700 active:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg">
                      {service.buttonText}
                      <span className="ml-2">→</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </>
  );
}