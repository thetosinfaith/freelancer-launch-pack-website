import React, { useEffect } from 'react';

const InstagramWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-[#fdeff2] py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <div className="elfsight-app-8b483e51-7075-430a-88fe-3ffc33b211d4" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default InstagramWidget;