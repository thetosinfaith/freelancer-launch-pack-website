import React from 'react';

interface ServiceBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesSection = ({ icon, title, description }: ServiceBlockProps) => {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
      <div className="mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2 capitalize">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServicesSection;