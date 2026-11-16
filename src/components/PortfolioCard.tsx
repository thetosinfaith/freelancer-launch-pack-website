import React from 'react';

interface PortfolioCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  categories: string[];
  link: string;
  barBgColorClass: string;
}

export default function PortfolioCard({
  title,
  imageSrc,
  imageAlt,
  categories,
  link,
  barBgColorClass,
}: PortfolioCardProps) {
  const categoryString = categories.join(' | ');

  return (
    <a
      href={link}
      className="block group rounded-lg overflow-hidden transition-all duration-300 ease-in-out"
    >
      <div className="aspect-[1/1] h-auto relative overflow-hidden">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
      </div>

      <div className="p-6 bg-white text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
      </div>

      <div
        className={`
          ${barBgColorClass}
          text-black
          font-bold
          uppercase
          py-4 px-2
          text-sm
          tracking-wide
          text-center
        `}
      >
        {categoryString}
      </div>
    </a>
  );
}