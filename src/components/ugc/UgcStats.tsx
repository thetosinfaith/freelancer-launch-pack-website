import React from 'react';

export const UgcStats: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto min-h-[500px] bg-gradient-to-b from-[#ffc5e3] via-[#fff5e6] to-[#fffdfa] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-12 font-sans text-[#222222] select-none">
      {/* Left Column: Stats & Header */}
      <div className="w-full md:w-1/2 flex flex-col max-w-md">
        {/* Section Header */}
        <div className="border-t-[3px] border-b-[3px] border-[#222222] py-4 mb-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
            My Audience<br />at a Glance
          </h2>
        </div>

        {/* Stats Table / List */}
        <div className="flex flex-col space-y-4">
          {/* Row 1 */}
          <div className="flex items-center justify-between border-b-[3px] border-[#222222] pb-3">
            <span className="text-2xl md:text-3xl font-extrabold tracking-tight">78%</span>
            <span className="text-2xl md:text-3xl font-extrabold tracking-tight">Female</span>
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-between border-b-[3px] border-[#222222] pb-3">
            <span className="text-2xl md:text-3xl font-extrabold tracking-tight">18–34</span>
            <span className="text-2xl md:text-3xl font-extrabold tracking-tight">Age Rage</span>
          </div>

          {/* Row 3 */}
          <div className="flex items-center justify-between border-b-[3px] border-[#222222] pb-3">
            <span className="text-2xl md:text-3xl font-extrabold tracking-tight">55%</span>
            <span className="text-2xl md:text-3xl font-extrabold tracking-tight">United States</span>
          </div>

          {/* Row 4 */}
          <div className="flex items-center justify-between border-b-[3px] border-[#222222] pb-3">
            <span className="text-2xl md:text-3xl font-extrabold tracking-tight">5.4%</span>
            <span className="text-2xl md:text-3xl font-extrabold tracking-tight">Av.Engagement</span>
          </div>
        </div>
      </div>

      {/* Right Column: Pie Chart with Labels */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center p-4">
        <div className="relative w-[340px] h-[340px]">
          {/* SVG Pie Chart built to exact percentage angles */}
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 rounded-full">
            {/* United States - 55% (#ff85c0) */}
            <circle
              r="25"
              cx="50"
              cy="50"
              fill="transparent"
              stroke="#ff85c0"
              strokeWidth="50"
              strokeDasharray="55 45"
              strokeDashoffset="0"
            />
            {/* United Kingdom - 25% (#ff99cf) */}
            <circle
              r="25"
              cx="50"
              cy="50"
              fill="transparent"
              stroke="#ff99cf"
              strokeWidth="50"
              strokeDasharray="25 75"
              strokeDashoffset="-55"
            />
            {/* Canada - 15% (#f07178) */}
            <circle
              r="25"
              cx="50"
              cy="50"
              fill="transparent"
              stroke="#f07178"
              strokeWidth="50"
              strokeDasharray="15 85"
              strokeDashoffset="-80"
            />
            {/* Australia - 5% (#e07a5f) */}
            <circle
              r="25"
              cx="50"
              cy="50"
              fill="transparent"
              stroke="#e07a5f"
              strokeWidth="50"
              strokeDasharray="5 95"
              strokeDashoffset="-95"
            />
          </svg>

          {/* Labels positioned precisely matching original layout */}
          <div className="absolute top-[2%] left-[45%] text-center leading-tight">
            <div className="text-sm font-bold text-[#222222]">Australia</div>
            <div className="text-sm font-bold text-[#222222]">5%</div>
          </div>

          <div className="absolute top-[14%] left-[10%] text-center leading-tight">
            <div className="text-sm font-bold text-[#222222]">Canada</div>
            <div className="text-sm font-bold text-[#222222]">15%</div>
          </div>

          <div className="absolute bottom-[20%] left-[-8%] text-center leading-tight">
            <div className="text-sm font-bold text-[#222222]">United Kingdom</div>
            <div className="text-sm font-bold text-[#222222]">25%</div>
          </div>

          <div className="absolute top-[46%] right-[-14%] text-center leading-tight">
            <div className="text-sm font-bold text-[#222222]">United States</div>
            <div className="text-sm font-bold text-[#222222]">55%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UgcStats;