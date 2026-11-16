import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Pink from "../assets/shape.webp";

interface InfoCardProps {
  title: string;
  description: string;
  bgColorClass: string;
  titleColorClass: string;
  descColorClass: string;
  icon?: React.ReactNode;
  rotationDegree?: number;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  bgColorClass,
  titleColorClass,
  descColorClass,
  icon,
  rotationDegree = 0,
}) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md flex flex-col justify-between min-h-[180px]
                   transition-all duration-700 ease-in-out
                   transform-gpu
                   relative z-10
                   hover:scale-[1.08]
                   hover:shadow-2xl
                   hover:-translate-y-4
                   hover:rotate-x-6
                   hover:rotate-y-3
                   hover:rotate-[var(--hover-rotate-z, 0deg)]
                 `}
      style={
        {
          backgroundColor: bgColorClass.startsWith("#")
            ? bgColorClass
            : `var(--${bgColorClass})`,
          transform: `rotate(${rotationDegree}deg)`,
          "--hover-rotate-z": `${-rotationDegree * 0.5}deg`,
          backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 4px)`,
        } as React.CSSProperties
      }
      data-aos="zoom-in"
    >
      <div>
        <h3 className={`text-xl font-semibold mb-2 ${titleColorClass}`}>
          {title}
        </h3>
        <p className={`text-sm font-medium leading-relaxed ${descColorClass}`}>
          {description}
        </p>
      </div>
      {icon && <div className="mt-4 flex justify-center">{icon}</div>}
    </div>
  );
};

const Value: React.FC = () => {
const qualityCardBg = "#FFE4F0";       
const playCardBg = "#FFE9DC";       
const educationCardBg = "#FFF5E1";     
const practicalityCardBg = "#F6F6F6"; 
const aestheticsCardBg = "#F9EDFF";    
const communityCardBg = "#E5F3F8";      




  const qualityTitle = "text-[#374151]";        
const qualityDesc = "text-[#374151]";      

const playTitle = "text-[#374151]";         
const playDesc = "text-[#374151]";           

const educationTitle = "text-[#374151]";      
const educationDesc = "text-[#374151]";       

const practicalityTitle = "text-[#374151]";  
const practicalityDesc = "text-[#374151]";   

const aestheticsTitle = "text-[#374151]"; 
const aestheticsDesc = "text-[#374151]";   

const communityTitle = "text-[#374151]";     
const communityDesc = "text-[#374151]";      

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  const BerryIllustration = () => (
    <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 overflow-hidden pointer-events-none z-0 ">
      <img
        src={Pink}
        alt="Decorative Berries"
        className="w-full h-full object-cover"
      />
    </div>
  );

  const QualityIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill="#F4A261"
        stroke="#F4A261"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const PlayIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="#A3492C" strokeWidth="1.5" />
      <path
        d="M9.5 16C11.5 18 14.5 18 16.5 16"
        stroke="#A3492C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9H9.01"
        stroke="#A3492C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 9H15.01"
        stroke="#A3492C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const EducationIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 17L12 22L22 17M2 12L12 17L22 12M12 2L2 7L12 12L22 7L12 2Z"
        stroke="#F4A261"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const PracticalityIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="3" stroke="#333333" strokeWidth="1.5" />
      <path
        d="M19.4 15L22 17.6M22 6.4L19.4 9M4.6 15L2 17.6M2 6.4L4.6 9M15 4.6L17.6 2M6.4 2L9 4.6M15 19.4L17.6 22M6.4 22L9 19.4"
        stroke="#333333"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const AestheticsIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
        fill="#F4A261"
        stroke="#F4A261"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const CommunityIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 19.5H9L7.5 21L6 19.5H4C2.89543 19.5 2 18.6046 2 17.5V5.5C2 4.39543 2.89543 3.5 4 3.5H20C21.1046 3.5 22 4.39543 22 5.5V17.5C22 18.6046 21.1046 19.5 20 19.5H17Z"
        stroke="#2C3E50"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
        stroke="#2C3E50"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12V15"
        stroke="#2C3E50"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 15H15"
        stroke="#2C3E50"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section
      className={`relative min-h-screen py-24 px-4 sm:px-8 lg:px-16 overflow-hidden flex items-center justify-center
                   perspective-1000
                 `}
                 
      style={{ backgroundColor: "white" }}
      data-aos="fade-up"
    >
      <BerryIllustration />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div data-aos="fade-down" data-aos-delay="100">
          <p className="text-sm font-semibold text-gray-600 bg-pink-100 uppercase tracking-wide mb-5 inline-block px-4 py-1 rounded-full">
            WHAT YOU CAN EXPECT
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-12">
            {"My Promise to You..."}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          <div data-aos="fade-up" data-aos-delay="200">
            <InfoCard
              title="TRANSPARENCY"
              description="When we work together, you can trust that I’ll be consistent, communicative, and fully committed to delivering a website that meets (and exceeds!) your expectations. I’m here to support you at every stage of the process, from our first chat to post-launch."
              bgColorClass={qualityCardBg}
              titleColorClass={qualityTitle}
              descColorClass={qualityDesc}
              icon={<QualityIcon />}
              rotationDegree={-6}
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <InfoCard
              title="SIMPLICITY"
              description="Making the process of designing and developing your website clear, simple and easy to understand is so important to me. I’ll never bombard you with jargon or make things unnecessarily complicated - and there’s no such thing as a stupid question here!"
              bgColorClass={playCardBg}
              titleColorClass={playTitle}
              descColorClass={playDesc}
              icon={<PlayIcon />}
              rotationDegree={8}
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <InfoCard
              title="IMPACT"
              description="Your website needs to be impactful - it needs to grab attention and have a real impact on the growth of your business. I design with your business goals in mind, building websites that help your business reach its full potential."
              bgColorClass={educationCardBg}
              titleColorClass={educationTitle}
              descColorClass={educationDesc}
              icon={<EducationIcon />}
              rotationDegree={-6}
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="500">
            <InfoCard
              title="COLLABORATION"
              description="I really believe that the best things come from collaborating. When you work with me, you bring the expertise about your business. Combine that with my design and development expertise, and we’re on track for building the website you’ve dreamed of."
              bgColorClass={practicalityCardBg}
              titleColorClass={practicalityTitle}
              descColorClass={practicalityDesc}
              icon={<PracticalityIcon />}
              rotationDegree={7}
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="600">
            <InfoCard
              title="AESTHETICS"
              description="Your website should stand out and that’s where creativity comes in. I love finding unique, thoughtful design solutions that reflect your brand’s personality and make visitors remember you long after they’ve left your site."
              bgColorClass={aestheticsCardBg}
              titleColorClass={aestheticsTitle}
              descColorClass={aestheticsDesc}
              icon={<AestheticsIcon />}
              rotationDegree={-9}
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="700">
            <InfoCard
              title="SUPPORT"
              description="I don’t just hand over a website and disappear. I’m here to guide you even after launch whether you have questions, want to make updates, or just need reassurance. Your success is important to me, and I’m with you for the journey."
              bgColorClass={communityCardBg}
              titleColorClass={communityTitle}
              descColorClass={communityDesc}
              icon={<CommunityIcon />}
              rotationDegree={7}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
