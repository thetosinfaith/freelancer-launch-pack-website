import React from 'react';

export interface UgcFooterProps {
  handle?: string;
  emailUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  photos?: string[];
}

// White 4-Point Star Sparkle
const WhiteStar: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#FFFFFF"
    className={`select-none pointer-events-none drop-shadow-sm ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

// Mail Envelope Icon
const MailIcon: React.FC<{ className?: string }> = ({ className = 'h-6 w-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M1.5 4.5A2.5 2.5 0 0 1 4 2h16a2.5 2.5 0 0 1 2.5 2.5v15a2.5 2.5 0 0 1-2.5 2.5H4a2.5 2.5 0 0 1-2.5-2.5v-15zM4 4a.5.5 0 0 0-.5.5v.632l8.5 5.313 8.5-5.313V4.5a.5.5 0 0 0-.5-.5H4zm16.5 2.868l-8.083 5.052a.75.75 0 0 1-.834 0L3.5 6.868V19.5a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5V6.868z" />
  </svg>
);

// Instagram SVG Icon
const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'h-6 w-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// TikTok SVG Icon
const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'h-6 w-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.83V7.63a6.34 6.34 0 1 0 7.89 6.13V9.6a8.26 8.26 0 0 0 4.87 1.57V7.72a4.83 4.83 0 0 1-2.65-1.03z" />
  </svg>
);

export const UgcFooter: React.FC<UgcFooterProps> = ({
  handle = '@OLIVIAWILSON',
  emailUrl = 'mailto:hello@oliviawilson.com',
  instagramUrl = '#',
  tiktokUrl = '#',
  photos = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
  ],
}) => {
  return (
    <footer className="w-full bg-[#F5C2CE] min-h-[500px] flex items-center justify-center font-sans select-none overflow-hidden">
      {/* INNER CONTENT CONTAINER (MAX-W-7XL) */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        
        {/* LEFT COLUMN: ROUNDED CREAM CARD */}
        <div className="w-full md:w-1/2 bg-[#FFFDF9] rounded-[32px] md:rounded-[40px] p-8 md:p-12 lg:p-14 shadow-sm flex flex-col justify-between items-start min-h-[340px] md:min-h-[400px]">
          
          {/* Headline */}
          <div className="space-y-1">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#2A0C13] tracking-tight leading-[1.02]">
              Let’s
            </h2>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#2A0C13] tracking-tight leading-[1.02]">
              collaborate!
            </h2>
          </div>

          {/* Bottom Controls: Pill + Social Icons */}
          <div className="mt-8 md:mt-12 flex flex-col items-start gap-4">
            {/* Hot Pink Pill Handle */}
            <div className="bg-[#FF5EA9] text-white font-bold tracking-wider px-5 py-2 md:px-6 md:py-2.5 rounded-full uppercase text-sm md:text-base shadow-sm inline-block">
              {handle}
            </div>

            {/* Social & Contact Icons */}
            <div className="flex items-center gap-4 text-[#2A0C13] pt-1">
              <a
                href={emailUrl}
                aria-label="Send Email"
                className="hover:text-[#FF5EA9] transition-colors p-1"
              >
                <MailIcon className="h-6 w-6 md:h-7 md:w-7" />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="hover:text-[#FF5EA9] transition-colors p-1"
              >
                <InstagramIcon className="h-6 w-6 md:h-7 md:w-7" />
              </a>
              <a
                href={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Profile"
                className="hover:text-[#FF5EA9] transition-colors p-1"
              >
                <TikTokIcon className="h-6 w-6 md:h-7 md:w-7" />
              </a>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: TILTED 2x2 BLACK & WHITE PHOTO COLLAGE */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative py-4">
          
          {/* Tilted Photo Grid Container (-10deg angle) */}
          <div className="relative transform -rotate-[10deg] hover:rotate-0 transition-transform duration-500 ease-out">
            
            {/* Photo Grid with Dark Border */}
            <div className="bg-[#2A0C13] p-[3px] border-2 border-[#2A0C13] grid grid-cols-2 gap-[3px] w-[280px] sm:w-[320px] lg:w-[370px] shadow-2xl rounded-sm overflow-hidden">
              {photos.slice(0, 4).map((imgUrl, index) => (
                <div key={index} className="aspect-[3/4] bg-neutral-200 overflow-hidden">
                  <img
                    src={imgUrl}
                    alt={`Creator Portrait ${index + 1}`}
                    className="w-full h-full object-cover grayscale contrast-125 brightness-105"
                  />
                </div>
              ))}
            </div>

            {/* Decorative Corner Sparkles */}
            <div className="absolute -top-4 -left-5 z-20">
              <WhiteStar size={28} />
            </div>
            <div className="absolute -bottom-3 -right-4 z-20">
              <WhiteStar size={24} />
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default UgcFooter;