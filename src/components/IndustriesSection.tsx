import React from 'react';

// Industries list to map over
const industries = [
  'Fashion designers',
  'social media managers',
  'beauty brands',
  'wedding stationary',
  'coaches',
  'loneliness communities',
  'candle makers',
  'therapists',
  'yoga studios',
  'pet care & so much more'
];

// Simple Keyboard SVG (replace with your actual icon/image)
const KeyboardIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-24 h-auto md:w-32 text-gray-800/80"
    fill="none"
    stroke="currentColor"
    strokeWidth="10"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* A simplified sketch-style keyboard representation */}
    <rect x="32" y="144" width="448" height="224" rx="20" ry="20" />
    <line x1="96" y1="216" x2="416" y2="216" />
    <line x1="96" y1="288" x2="416" y2="288" />
    <line x1="96" y1="360" x2="416" y2="360" />
    <path d="M128 144v-16a16 16 0 0 1 16-16h224a16 16 0 0 1 16 16v16" />
    <line x1="416" y1="216" x2="416" y2="288" />
    <line x1="416" y1="288" x2="416" y2="360" />
  </svg>
);

const IndustriesSection: React.FC = () => {
  return (
    <div className="p-8 md:p-16 bg-[#f7e6a7] rounded-xl max-w-4xl mx-auto shadow-lg">
      <div className="relative">
        {/* Keyboard Icon Positioned */}
        <div className="absolute top-0 right-0 transform -translate-y-1/4 translate-x-1/4">
          <KeyboardIcon />
        </div>

        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-black text-gray-800 tracking-wide mb-6 relative z-10">
          INDUSTRIES I'VE WORKED WITH
        </h2>
        
        {/* Industries List */}
        <p className="text-xl md:text-2xl text-gray-700 font-serif leading-relaxed mb-8">
          {industries.map((industry, index) => (
            <React.Fragment key={index}>
              <span className="inline-block">{industry}</span>
              {/* Add the slash separator except after the last item */}
              {index < industries.length - 1 && ' / '}
            </React.Fragment>
          ))}
        </p>

        {/* Portfolio Link */}
        <a
          href="#" // Replace with your actual portfolio URL
          className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-black transition duration-200"
        >
          See my portfolio
          <span className="ml-1 text-base">↗</span>
        </a>
      </div>
    </div>
  );
};

export default IndustriesSection;