"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 pb-4">
      <button
        onClick={toggleOpen}
        className="flex justify-between items-center w-full text-left"
      >
        <h3 className="text-xl font-serif text-gray-900">{question}</h3>
        {isOpen ? (
          <Minus className="w-5 h-5 text-gray-600" />
        ) : (
          <Plus className="w-5 h-5 text-gray-600" />
        )}
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600 leading-relaxed">{answer}</div>
      )}
    </div>
  );
};
