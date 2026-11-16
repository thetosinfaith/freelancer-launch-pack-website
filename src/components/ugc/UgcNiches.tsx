import React, { useState } from 'react';

// Custom SVG Icons matching exact visual shapes in the graphic
const FlowerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2a3 3 0 0 0-3 3 1 1 0 0 1-1 1 3 3 0 0 0-3 3 1 1 0 0 1-1 1 3 3 0 0 0 0 6 1 1 0 0 1 1 1 3 3 0 0 0 3 3 1 1 0 0 1 1 1 3 3 0 0 0 6 0 1 1 0 0 1 1-1 3 3 0 0 0 3-3 1 1 0 0 1 1-1 3 3 0 0 0 0-6 1 1 0 0 1-1-1 3 3 0 0 0-3-3 1 1 0 0 1-1-1 3 3 0 0 0-3-3zm0 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
  </svg>
);

const SkincareIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    <path d="M8 11.5C8 11.5 9.5 13 12 13C14.5 13 16 11.5 16 11.5" />
    <path d="M9 7.5H9.01" />
    <path d="M15 7.5H15.01" />
    <path d="M5.5 15C5.5 15 7.5 14 12 14C16.5 14 18.5 15 18.5 15" />
    <path d="M4 11C4 8 7 6 12 6C17 6 20 8 20 11" />
  </svg>
);

const CameraIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.17l-1.24-1.35A2 2 0 0 0 14.12 5H9.88a2 2 0 0 0-1.47.65L7.17 7H4zm8 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5z" />
  </svg>
);

const ShirtIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2l-3.5 3.5h-1L8 2 3 5l2.5 4.5L7 8.5V21h10V8.5l1.5 1L21 5l-5-3z" />
  </svg>
);

const HeartHandsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 7.27a2.41 2.41 0 0 0-4.17-1.7 2.38 2.38 0 0 0 0 3.39L12 13l4.17-4.04a2.38 2.38 0 0 0 0-3.39 2.41 2.41 0 0 0-4.17 1.7z" />
    <path d="M18.8 12.2c-.4-.3-1-.2-1.3.2l-2.5 3.1-2.2-2c-.4-.3-1-.3-1.4 0l-4.5 4.2H3v2h4.5c.3 0 .6-.1.8-.3l3.7-3.4 2.8 2.5c.2.2.5.3.8.3.3 0 .6-.1.8-.3l3.7-4.6c.4-.4.3-1-.1-1.3z" />
  </svg>
);

const PlaneIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 20v-6.5l8 2.5z" />
  </svg>
);

export interface NicheItem {
  id: string;
  label: string;
  icon: React.ComponentType;
}

export const UgcNiches: React.FC = () => {
  const [activeNiche, setActiveNiche] = useState<string | null>(null);

  const leftColumn: NicheItem[] = [
    { id: 'beauty', label: 'BEAUTY', icon: FlowerIcon },
    { id: 'skincare', label: 'SKINCARE', icon: SkincareIcon },
    { id: 'lifestyle', label: 'LIFESTYLE', icon: CameraIcon },
  ];

  const rightColumn: NicheItem[] = [
    { id: 'fashion', label: 'FASHION', icon: ShirtIcon },
    { id: 'wellness', label: 'WELLNESS', icon: HeartHandsIcon },
    { id: 'travel', label: 'TRAVEL', icon: PlaneIcon },
  ];

  return (
    <div className="w-full bg-[#231f20] min-h-[580px] py-10 px-4 sm:px-8 font-sans overflow-hidden flex items-center justify-center">
      {/* Import Web Fonts for Exact Headline & Cursive Script Alignment */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Caveat:wght@700&family=Great+Vibes&family=Oswald:wght@700&family=Radio+Canada+Big:wght@700&display=swap');
        
        .font-condensed {
          font-family: 'Anton', 'Oswald', sans-serif;
          letter-spacing: 0.02em;
        }

        .font-script {
          font-family: 'Great Vibes', 'Caveat', cursive;
        }

        .badge-border {
          box-shadow: 0 0 0 2.5px #ffffff, 0 8px 20px rgba(0, 0, 0, 0.4);
        }
      `}</style>

      {/* Main Container - Capped at max-w-7xl */}
      <section className="w-full max-w-7xl relative mx-auto flex flex-col items-center justify-between">
        
        {/* HEADER SECTION WITH LAYERED OVERLAYS */}
        <div className="relative w-full text-center z-10 pt-4 pb-2">
          {/* Main Giant Banner Title */}
          <h1 className="font-condensed text-[#f67ab4] text-[64px] sm:text-[96px] md:text-[124px] lg:text-[142px] leading-none uppercase tracking-tight font-bold select-none drop-shadow-sm">
            CONTENT NICHES
          </h1>

          {/* Script Overlay: "Create" overlapping bottom-right of NICHES */}
          <div className="absolute right-[4%] sm:right-[12%] md:right-[16%] lg:right-[20%] bottom-[-10px] sm:bottom-[-20px] md:bottom-[-28px] z-20">
            <span className="font-script text-white text-[56px] sm:text-[80px] md:text-[104px] lg:text-[120px] leading-none block -rotate-6 tracking-wide drop-shadow-lg">
              Create
            </span>
          </div>
        </div>

        {/* CONTENT GRID: SIDE BADGES & CENTER MODEL */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 items-center gap-6 mt-4 relative z-20">
          
          {/* Left Column Badges */}
          <div className="md:col-span-4 flex flex-col space-y-5 sm:space-y-6 z-30 px-2 sm:px-6">
            {leftColumn.map((item) => {
              const IconComp = item.icon;
              const isActive = activeNiche === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveNiche(item.id)}
                  className={`w-full bg-[#f67ab4] text-[#231f20] badge-border rounded-xl px-5 py-3.5 sm:py-4 flex items-center justify-start transition-all duration-200 transform hover:scale-[1.03] active:scale-[0.98] ${
                    isActive ? 'ring-4 ring-white shadow-2xl scale-[1.03]' : ''
                  }`}
                >
                  {/* Icon section with vertical divider line */}
                  <div className="pr-4 border-r-[2.5px] border-[#231f20] flex items-center justify-center">
                    <IconComp />
                  </div>
                  {/* Title Label */}
                  <span className="pl-4 font-condensed text-xl sm:text-2xl lg:text-3xl font-bold tracking-wider uppercase text-left">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Center Person Cutout Container */}
          <div className="md:col-span-4 relative flex justify-center items-end min-h-[320px] sm:min-h-[400px] md:min-h-[460px] my-4 md:my-0 z-20">
            {/* Model Vector Illustration Cutout */}
            <div className="relative w-full max-w-[340px] md:max-w-[380px] h-full flex justify-center items-end">
              <svg
                viewBox="0 0 400 550"
                className="w-full h-auto max-h-[480px] drop-shadow-2xl filter contrast-[1.02]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Pink Suit Gradients */}
                  <linearGradient id="suitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f88ec2" />
                    <stop offset="50%" stopColor="#f67ab4" />
                    <stop offset="100%" stopColor="#e55998" />
                  </linearGradient>
                  <linearGradient id="skirtGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f88ec2" />
                    <stop offset="100%" stopColor="#e25394" />
                  </linearGradient>
                </defs>

                {/* Hair Background */}
                <path d="M140 100 Q 200 40 260 100 Q 285 180 270 280 L 130 280 Q 115 180 140 100 Z" fill="#7a4627" />
                <path d="M130 140 Q 100 240 115 350 L 140 350 Q 125 240 135 140 Z" fill="#5c3219" />
                <path d="M270 140 Q 300 240 285 350 L 260 350 Q 275 240 265 140 Z" fill="#5c3219" />

                {/* Face & Neck */}
                <path d="M160 130 Q 200 130 240 130 Q 248 180 235 215 Q 200 245 165 215 Q 152 180 160 130 Z" fill="#f5c2a5" />
                <path d="M182 205 L 218 205 L 222 250 L 178 250 Z" fill="#e8ad8f" />

                {/* Glasses */}
                <rect x="160" y="152" width="32" height="18" rx="3" fill="none" stroke="#111" strokeWidth="3.5" />
                <rect x="208" y="152" width="32" height="18" rx="3" fill="none" stroke="#111" strokeWidth="3.5" />
                <line x1="192" y1="160" x2="208" y2="160" stroke="#111" strokeWidth="3.5" />
                <line x1="145" y1="158" x2="160" y2="158" stroke="#111" strokeWidth="3" />
                <line x1="240" y1="158" x2="255" y2="158" stroke="#111" strokeWidth="3" />

                {/* Hair Front Framing */}
                <path d="M158 125 Q 185 140 198 150 Q 170 140 155 130 Z" fill="#422310" />
                <path d="M242 125 Q 215 140 202 150 Q 230 140 245 130 Z" fill="#422310" />

                {/* White Shirt Collar */}
                <polygon points="170,240 200,285 180,290 158,255" fill="#ffffff" />
                <polygon points="230,240 200,285 220,290 242,255" fill="#ffffff" />
                <polygon points="180,240 200,270 220,240 200,290" fill="#ffffff" />

                {/* Hot Pink Tie */}
                <polygon points="193,260 207,260 212,400 200,430 188,400" fill="#f05b9f" />
                {/* Tie Clip */}
                <rect x="186" y="315" width="28" height="4" fill="#d1d5db" rx="1" />

                {/* Pink Suit Jacket */}
                <path d="M150 250 L 100 370 L 135 550 L 180 550 L 175 420 L 195 290 Z" fill="url(#suitGradient)" />
                <path d="M250 250 L 300 370 L 265 550 L 220 550 L 225 420 L 205 290 Z" fill="url(#suitGradient)" />
                
                {/* Jacket Lapels */}
                <polygon points="150,250 195,350 170,360 135,290" fill="#ea66a3" />
                <polygon points="250,250 205,350 230,360 265,290" fill="#ea66a3" />

                {/* Hand in Pocket Gesture */}
                <path d="M275 360 Q 315 440 260 500 L 240 480 Q 280 430 260 380 Z" fill="url(#suitGradient)" />
                <path d="M210 450 Q 230 460 245 445" stroke="#f5c2a5" strokeWidth="12" strokeLinecap="round" fill="none" />

                {/* Right Hand touching glasses */}
                <path d="M125 360 Q 95 280 145 165 L 160 175 Q 115 280 140 370 Z" fill="url(#suitGradient)" />
                <path d="M142 165 Q 148 152 154 158 Q 150 170 144 172 Z" fill="#f5c2a5" />

                {/* Skirt */}
                <polygon points="175,420 225,420 235,550 165,550" fill="url(#skirtGradient)" />
                {/* Skirt pinstripes */}
                <line x1="185" y1="420" x2="180" y2="550" stroke="#fba8d0" strokeWidth="1.5" opacity="0.6" />
                <line x1="200" y1="420" x2="200" y2="550" stroke="#fba8d0" strokeWidth="1.5" opacity="0.6" />
                <line x1="215" y1="420" x2="220" y2="550" stroke="#fba8d0" strokeWidth="1.5" opacity="0.6" />
              </svg>
            </div>
          </div>

          {/* Right Column Badges */}
          <div className="md:col-span-4 flex flex-col space-y-5 sm:space-y-6 z-30 px-2 sm:px-6">
            {rightColumn.map((item) => {
              const IconComp = item.icon;
              const isActive = activeNiche === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveNiche(item.id)}
                  className={`w-full bg-[#f67ab4] text-[#231f20] badge-border rounded-xl px-5 py-3.5 sm:py-4 flex items-center justify-start transition-all duration-200 transform hover:scale-[1.03] active:scale-[0.98] ${
                    isActive ? 'ring-4 ring-white shadow-2xl scale-[1.03]' : ''
                  }`}
                >
                  {/* Icon section with vertical divider line */}
                  <div className="pr-4 border-r-[2.5px] border-[#231f20] flex items-center justify-center">
                    <IconComp />
                  </div>
                  {/* Title Label */}
                  <span className="pl-4 font-condensed text-xl sm:text-2xl lg:text-3xl font-bold tracking-wider uppercase text-left">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

      </section>
    </div>
  );
};

export default UgcNiches;