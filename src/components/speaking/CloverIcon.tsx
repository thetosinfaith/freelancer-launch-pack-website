import React from 'react';

const CloverIcon = () => (
  <div className="relative w-16 h-16">
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-blue-400 rounded-t-full"></div>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-blue-400 rounded-b-full"></div>
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-6 bg-blue-400 rounded-l-full"></div>
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-6 bg-blue-400 rounded-r-full"></div>
  </div>
);

export default CloverIcon;