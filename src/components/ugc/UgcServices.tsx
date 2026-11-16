import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  includes: string[];
  startingPrice: string;
  imageUrl: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
}

export interface UgcServicesProps {
  headerTitleMy?: string;
  headerTitleServices?: string;
  services?: ServiceItem[];
}

const defaultServices: ServiceItem[] = [
  {
    id: 'ugc-videos',
    title: 'UGC VIDEOS',
    description:
      'Created to help brands build trust, increase engagement, and drive conversions through authentic, high-performing content tailored for today’s fast-moving social platforms. Each piece is designed to feel natural, relatable and visually engaging while showcasing your product in a way that resonates with modern consumers.',
    includes: [
      'Product demos',
      'Trend-based & humor',
      'Unboxings',
      'Lifestyle content',
      'Talking-to-camera videos',
      'Voiceover videos',
      'TikTok / Reels style edits',
      'Hook variations',
      'CTA variations',
      'Raw + edited options',
    ],
    startingPrice: '$250',
    imageUrl:
      'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Iced Matcha Green Tea Drinks',
    imagePosition: 'right',
  },
  {
    id: 'paid-ad-ugc',
    title: 'PAID AD UGC',
    description:
      'Created for brands ready to scale with high-converting content designed to stop the scroll, build trust, and drive results across TikTok, Instagram Feed, YouTube Shorts, and Meta platforms. Each video is strategically crafted using proven hooks, persuasive messaging, and clear calls to action.',
    includes: [
      'Direct response ad creatives',
      'Problem / solution videos',
      'Multiple hooks',
      'A/B test variations',
      'Product benefit videos',
      'Retargeting creatives',
      'Strong CTAs',
      'Conversion-focused scripting',
      'Raw + edited options available',
      'Native-style platform edits',
    ],
    startingPrice: '$350',
    imageUrl:
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Hand holding skincare serum bottle',
    imagePosition: 'left',
  },
  {
    id: 'product-photography',
    title: 'PRODUCT PHOTOGRAPHY',
    description:
      'Elevated, clean product imagery designed to help your brand stand out across websites, email campaigns, paid ads, and social media. Every image is styled to feel polished, premium, and aligned with your brand identity while showcasing your product in the most compelling way possible.',
    includes: [
      'Lifestyle product photography',
      'Flatlays & detail shots',
      'Ecommerce white background options',
      'Multiple product angles',
      'Texture / close-up shots',
      'In-use product styling',
      'Natural light or studio aesthetic',
      'Web-ready high-resolution files',
      'Edited and retouched images',
      'Content for ads, socials & website use',
    ],
    startingPrice: '$200',
    imageUrl:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Rhode Skincare Lip Treats in White Ceramic Bowl',
    imagePosition: 'right',
  },
];

export const UgcServices: React.FC<UgcServicesProps> = ({
  headerTitleMy = 'MY',
  headerTitleServices = 'services',
  services = defaultServices,
}) => {
  return (
    <section className="w-full bg-[#222222] min-h-screen py-14 sm:py-20 px-4 sm:px-6 lg:px-8 select-none font-sans">
      {/* Import Web Serif Font for stylized "services" header */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,400&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
        
        .font-services-serif {
          font-family: 'Playfair Display', Georgia, serif;
        }

        .font-body-sans {
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        }
      `}</style>

      {/* Main Container constrained to max-w-7xl */}
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* HEADER SECTION */}
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-wider flex items-center justify-center gap-2 sm:gap-3">
            <span className="font-body-sans uppercase text-[#ffffff] tracking-widest font-extrabold">
              {headerTitleMy}
            </span>
            <span className="font-services-serif lowercase text-[#ffffff] font-normal italic tracking-normal">
              {headerTitleServices}
            </span>
          </h2>
        </div>

        {/* SERVICE CARDS LIST */}
        <div className="w-full flex flex-col space-y-8 sm:space-y-10">
          {services.map((service) => {
            const isImageLeft = service.imagePosition === 'left';

            return (
              <div
                key={service.id}
                className="w-full bg-[#FAF0F5] border-[2px] border-[#1a1a1a] p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-stretch gap-6 sm:gap-8 rounded-none shadow-md transition-shadow duration-300 hover:shadow-xl"
              >
                {/* TEXT CONTENT CONTAINER */}
                <div
                  className={`w-full md:w-1/2 flex flex-col justify-between items-center text-center py-2 px-2 sm:px-4 ${
                    isImageLeft ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  {/* Top Header & Overview */}
                  <div className="w-full flex flex-col items-center">
                    <h3 className="font-body-sans text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1a1a1a] tracking-wider uppercase mb-3">
                      {service.title}
                    </h3>
                    <p className="font-body-sans text-xs sm:text-sm text-[#333333] leading-relaxed max-w-lg mb-5 font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Included List Section */}
                  <div className="w-full flex flex-col items-center my-2">
                    <h4 className="font-body-sans text-xs sm:text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">
                      Includes
                    </h4>
                    <ul className="flex flex-col items-center space-y-0.5 text-xs sm:text-sm text-[#2b2b2b] font-medium">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="leading-snug">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing Footer */}
                  <div className="pt-6 w-full text-center">
                    <span className="font-body-sans text-lg sm:text-xl md:text-2xl font-extrabold text-[#1a1a1a] tracking-tight">
                      Starting at {service.startingPrice}
                    </span>
                  </div>
                </div>

                {/* IMAGE CONTAINER */}
                <div
                  className={`w-full md:w-1/2 min-h-[300px] sm:min-h-[380px] md:min-h-[460px] relative border-[1.5px] border-[#1a1a1a] overflow-hidden bg-neutral-100 ${
                    isImageLeft ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  <img
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover object-center filter brightness-[1.01] contrast-[1.02]"
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default UgcServices;