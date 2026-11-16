"use client";

import { ServiceImageCard } from "./ServiceImageCard";
import { FAQItem } from "./FAQItem";

interface FAQItemData {
  question: string;
  answer: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  bgColor: string;
  image: string;
  faqItems: FAQItemData[];
}

export const ServiceCard = ({
  title,
  description,
  bgColor,
  image,
  faqItems,
}: ServiceCardProps) => {
  return (
    <div className="flex flex-col">
      <ServiceImageCard image={image} title={title} bgColor={bgColor} />

      <p className="text-gray-700 mb-8 leading-relaxed">{description}</p>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};
