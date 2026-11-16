import React from "react";
import { Button } from "@/components/ui/button";

interface ProjectHeroContentProps {
  title: string;
  subHeading: string;
  description: string;
  heroTag: string;
}

export function ProjectHeroContent({
  title,
  subHeading,
  description,
  heroTag,
}: ProjectHeroContentProps) {
  return (
    <div className="max-w-3xl mx-auto text-center px-0 sm:px-4 py-16 sm:py-24 -mt-10">
      <h1
        className="text-lg sm:text-sm uppercase tracking-widest mb-4 font-normal"
        style={{ color: "#333333" }}
      >
        {title}
      </h1>

      <h2
        className="text-3xl sm:text-5xl font-light mb-8"
        style={{ color: "#333333", fontFamily: "serif" }}
      >
        {subHeading.split("<br />").map((line, index) => (
          <React.Fragment key={index}>
            {line.includes('<em className="italic">') ? (
              <span
                dangerouslySetInnerHTML={{
                  __html: line.replace(
                    '<em className="italic">',
                    '<em class="font-normal not-italic" style="font-family: serif;">'
                  ),
                }}
              />
            ) : (
              line
            )}
            {index < subHeading.split("<br />").length - 1 && <br />}
          </React.Fragment>
        ))}
      </h2>
      <p
        className="text-base sm:text-lg leading-relaxed mb-8"
        style={{ color: "#333333" }}
      >
        {description}
      </p>
      <div className="text-center mt-6">
        <Button
          variant="outline"
          className="rounded-full bg-brand-primary border-brand-primary text-white hover:bg-black hover:text-white px-8 py-4"
          onClick={() => window.open(heroTag, "_blank", "noopener noreferrer")}
        >
          VIEW LIVE WEBSITE
        </Button>
      </div>
    </div>
  );
}
