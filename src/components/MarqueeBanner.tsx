import React from 'react';

// The text content you want to scroll
const MARQUEE_TEXT = 'Now booking for 2026';

// Repeat the text multiple times to ensure continuous scrolling
// The more repetitions, the smoother the transition will look before it loops
const REPETITION_COUNT = 20;

const MarqueeBanner: React.FC = () => {
  // Create an array of text elements for rendering
  const textElements = Array(REPETITION_COUNT).fill(MARQUEE_TEXT);

  return (
    <div className="overflow-hidden bg-yellow-300/70 py-2 border-y-2 border-yellow-500">
      <div className="flex w-fit animate-marquee whitespace-nowrap">
        {textElements.map((text, index) => (
          <span
            key={index}
            className="text-lg font-semibold text-gray-800 px-4 select-none"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;