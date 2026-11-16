import React from "react";
import { BrandShowcaseItem } from "./BrandShowcaseItem";

interface ShowcaseItem {
  type:
    | "image"
    | "complex-grid"
    | "complex-logo"
    | "complex-phone"
    | "complex-pattern"
    | "complex-presentation"
    | "complex-elements";
  src: string;
  alt: string;
  className?: string;
  content?: React.ReactNode;
}

interface BrandShowcaseProps {
  items: ShowcaseItem[];
}

export function BrandShowcase({ items }: BrandShowcaseProps) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {items.map((item, index) => (
          <BrandShowcaseItem
            key={index}
            src={item.src}
            alt={item.alt}
            className={item.className}
          >
            {item.content}
          </BrandShowcaseItem>
        ))}
      </div>
    </div>
  );
}
