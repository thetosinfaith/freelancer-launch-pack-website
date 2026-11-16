import React from "react";

interface BrandShowcaseItemProps {
  src: string; // Will be a direct path string or imported .src for React
  alt: string;
  className?: string; // This is where you'll pass width utilities
  children?: React.ReactNode; // Make children optional as some items might just be images
}

export function BrandShowcaseItem({ src, alt, className = "", children }: BrandShowcaseItemProps) {
  const isComplex = children !== undefined && children !== null;

  return (
    // The width will be controlled by the 'className' prop passed in
    <div className={`rounded-lg overflow-hidden relative ${className}`}>
      <img src={src} alt={alt} className="object-cover w-full h-full" />
      {isComplex && <div className="absolute inset-0">{children}</div>}
    </div>
  );
}