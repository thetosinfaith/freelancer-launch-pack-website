import React from 'react';

const HexagonIcon = () => (
  <div
    className="w-16 h-16 bg-orange-500 transform rotate-45"
    style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)" }}
  ></div>
);

export default HexagonIcon;