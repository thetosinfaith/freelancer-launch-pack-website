import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExpandableSectionProps {
  // The 'title' prop is no longer needed if the text is hardcoded.
  // I've removed it from the interface and function parameters.
  children: React.ReactNode;
  initialState?: boolean;
}

export function ExpandableSection({ children, initialState = false }: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(initialState);

  return (
<div className="max-w-xl mx-auto mt-0 mb-6">
      <Button
        variant="ghost"        
        className="w-full bg-brand-primary hover:bg-brand-primary/90 border border-brand-primary/70 rounded-lg flex items-center justify-between px-6 py-5 transition-all duration-300 ease-in-out shadow-sm min-h-[60px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg text-white text-left flex-grow max-w-[calc(100%-40px)] truncate">
          Hear it from the brand
        </span>
        {isOpen ? (
          <Minus className="w-6 h-6 text-white flex-shrink-0 ml-4" />
        ) : (
          <Plus className="w-6 h-6 text-white flex-shrink-0 ml-4" />
        )}
      </Button>
      {isOpen && (
        <div className="p-5 mt-2 bg-gray-50 rounded-b-lg shadow-inner animate-fade-in-down text-gray-700 leading-relaxed border border-t-0 border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
}