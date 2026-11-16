import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"; // Use useNavigate

export function BackButton() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-16">
      <Button
        variant="outline"
        className="rounded-none border-black px-8 py-3 bg-transparent"
        onClick={() => navigate("/portfolio")} // Use navigate to go back
      >
        BACK TO THE PORTFOLIO
      </Button>
    </div>
  );
}