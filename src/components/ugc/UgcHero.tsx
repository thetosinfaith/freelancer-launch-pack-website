import React from 'react';

// Props Interface for complete customizability
export interface UgcHeroProps {
  handle?: string;
  creatorName?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  modelImageUrl?: string;
  portraitImageUrl?: string;
}

// Background Star Decorative Component
const StarIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#FAD2E1"
    className={`select-none pointer-events-none opacity-70 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

// Instagram SVG Icon
const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// TikTok SVG Icon
const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.83V7.63a6.34 6.34 0 1 0 7.89 6.13V9.6a8.26 8.26 0 0 0 4.87 1.57V7.72a4.83 4.83 0 0 1-2.65-1.03z" />
  </svg>
);

export const UgcHero: React.FC<UgcHeroProps> = ({
  handle = '@OLIVIAWILSON',
  instagramUrl = '#',
  tiktokUrl = '#',
  modelImageUrl = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
  portraitImageUrl = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
}) => {
  return (
    <div className="w-full bg-[#FAF7F2] min-h-[580px] md:min-h-[640px] relative overflow-hidden flex items-center justify-center font-sans text-[#2B1216] select-none py-12 md:py-0">
      
      {/* BACKGROUND FLOATING STARS (SCATTERED AROUND THE CANVAS) */}
      <StarIcon size={24} className="absolute top-[12%] left-[4%]" />
      <StarIcon size={28} className="absolute top-[8%] left-[54%]" />
      <StarIcon size={26} className="absolute top-[10%] right-[9%]" />
      <StarIcon size={22} className="absolute top-[35%] right-[22%]" />
      <StarIcon size={20} className="absolute bottom-[28%] right-[32%]" />
      <StarIcon size={24} className="absolute bottom-[10%] right-[15%]" />
      <StarIcon size={26} className="absolute bottom-[14%] right-[42%]" />
      <StarIcon size={18} className="absolute bottom-[12%] left-[48%]" />

      {/* MAIN CONTAINER (MAX-W-7XL FULLY RESPONSIVE) */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        
        {/* LEFT COLUMN: MODEL HOLDING COSMETICS CUTOUT */}
        <div className="w-full md:w-1/2 flex items-end justify-center md:justify-start relative min-h-[380px] sm:min-h-[480px] md:min-h-[560px]">
          <div className="relative w-full max-w-[460px] lg:max-w-[520px] aspect-[4/5] flex items-end">
            
            {/* Soft pink highlight glow behind model */}
            <div className="absolute inset-x-8 bottom-0 top-12 bg-gradient-to-t from-[#F9D5E5]/40 to-transparent rounded-full blur-2xl -z-10" />

            {/* Model Image Cutout */}
            <img
              src={modelImageUrl}
              alt="UGC Creator holding beauty products"
              className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] drop-shadow-xl rounded-b-3xl md:rounded-none"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: TITLES, FRAMED PORTRAIT & SOCIAL HANDLES */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center pt-4 md:pt-0 pl-0 md:pl-4 lg:pl-8">
          
          {/* TITLE BLOCK WITH INTEGRATED POLAROID FRAME */}
          <div className="relative flex flex-col items-start tracking-tight">
            
            {/* ROW 1: "UGC" + FRAMED PORTRAIT THUMBNAIL */}
            <div className="flex items-center gap-3 sm:gap-5 leading-none">
              <span className="text-[76px] sm:text-[110px] lg:text-[132px] font-black tracking-[ -0.03em] text-[#240c12] uppercase font-sans">
                UGC
              </span>

              {/* Tilted Photo Frame Insert */}
              <div className="relative transform rotate-[4deg] -translate-y-2 sm:-translate-y-4 hover:rotate-0 transition-transform duration-300">
                {/* Polaroid / Framed Card Border */}
                <div className="bg-white p-1.5 sm:p-2 border-[2.5px] border-[#240c12] shadow-[4px_6px_0px_0px_rgba(36,12,18,0.15)] rounded-sm">
                  <img
                    src={portraitImageUrl}
                    alt="Creator Portrait Small"
                    className="w-16 h-20 sm:w-20 sm:h-24 lg:w-24 lg:h-28 object-cover filter grayscale contrast-125"
                  />
                </div>
                {/* Overlapping Pink Star Accent on Top Left of Frame */}
                <div className="absolute -top-3 -left-3 z-20">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="#FF5EA9">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* ROW 2: "Portfolio" */}
            <span className="text-[68px] sm:text-[100px] lg:text-[124px] font-black tracking-[-0.03em] text-[#240c12] leading-[0.88] font-sans -mt-2 sm:-mt-4">
              Portfolio
            </span>
          </div>

          {/* SOCIAL HANDLES ROW (PILL BADGE + ICONS) */}
          <div className="mt-8 sm:mt-10 flex items-center gap-4 sm:gap-5 flex-wrap">
            
            {/* Hot Pink Handle Pill */}
            <div className="bg-[#FF5EA9] text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-full shadow-sm hover:opacity-95 transition-opacity">
              <span className="text-base sm:text-xl font-extrabold tracking-wider font-sans uppercase">
                {handle}
              </span>
            </div>

            {/* Social Icons Container */}
            <div className="flex items-center gap-3 text-[#240c12]">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="p-1.5 hover:text-[#FF5EA9] transition-colors"
              >
                <InstagramIcon className="w-7 h-7 sm:w-8 sm:h-8" />
              </a>
              <a
                href={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Profile"
                className="p-1.5 hover:text-[#FF5EA9] transition-colors"
              >
                <TikTokIcon className="w-7 h-7 sm:w-8 sm:h-8" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default UgcHero;