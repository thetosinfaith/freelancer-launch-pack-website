import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Image from "react";
import Navbar from "@/components/Navbar";
import HeaderNav from "@/components/HeaderNav";
import { CallToActionSection } from "@/components/services/CallToActionSection";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import fosta1 from "../../assets/fosta1.webp";
import fosta2 from "../../assets/fosta2.webp";
import fosta3 from "../../assets/fosta3.webp";
import Real1 from '../../assets/real 01.webp'
import Real2 from '../../assets/real 02.webp'
import Real3 from '../../assets/real 03.webp'
import Real4 from '../../assets/real 04.webp'
import Real5 from '../../assets/real 05.webp'
import Real6 from '../../assets/real 06.webp'



import OlhmsMedia from "../../assets/OlhmsMedia.webp";
import Fostacomms from "../../assets/fosta.webp";
import Rekora from "../../assets/Rekoras.webp";
import RealDesmond from "../../assets/reall.webp";
import Chopchop from "../../assets/chopchop (2).webp";
import KindRaise from "../../assets/kindraiseWebsite.webp";
import Micdee from "../../assets/micdee.webp";
import AfterHome from "../../assets/afterhome.webp";
import ContentPlus from "../../assets/contentpluss.webp";
import VA4ME from "../../assets/VA4MEe.webp";
import CreativeBabesClubHeroImage from "../../assets/contentpluss.webp";
import DefaultProjectHeroImage from "../../assets/contentpluss.webp";

import { ProjectHeroContent } from "@/components/portfolio-details/ProjectHeroContent";
import { ExpandableSection } from "@/components/portfolio-details/ExpandableSection";
import { BrandShowcase } from "@/components/portfolio-details/BrandShowcase";
import { BackButton } from "@/components/portfolio-details/BackButton";
import { DevicePreviews } from "@/components/portfolio-details/DevicePreviews";
import { useSiteContent } from "@/hooks/use-site-content";

interface GenericProjectContent {
  heroTitle: string;
  heroSubHeading: string;
  heroDescription: string;
  heroTag: string;
  expandableSectionContent?: React.ReactNode;
  showcaseItems: ShowcaseItem[];
}

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

interface PortfolioItem {
  imageSrc: string;
  title: string;
  categories: string[];
  link: string;
  imageAlt: string;
  barBgColorClass: string;
  description: string;
  detailContent: GenericProjectContent;
}

const portfolioItems: PortfolioItem[] = [
  {
    imageSrc: OlhmsMedia.src,
    title: "Olhms Media",
    categories: ["BRANDING", "SOCIAL MEDIA", "PRINT"],
    link: "/portfolio/olhmsmedia",
    imageAlt: "Olhms Media Website",
    barBgColorClass: "bg-zinc-300",
    description:
      "Olhms Media specializes in dynamic digital solutions, offering cutting-edge branding, social media management, and print design to elevate online presence.",
    detailContent: {
      heroTitle: "OLHMS MEDIA",
      heroSubHeading: "visual identity & digital presence",
      heroDescription:
        "Our collaboration with Olhms Media focused on developing a strong visual identity that resonates with their target audience and elevates their online presence. We delivered cutting-edge branding, social media management, and print design solutions.",
      heroTag: "https://olhms-media.vercel.app/",
      expandableSectionContent: (
        <p className="p-4 text-gray-700">
          "Working with Olhms Media was a fantastic experience. Their commitment
          to their brand's evolution allowed us to create truly impactful
          designs that exceeded their expectations." - Client Testimonial
        </p>
      ),
      showcaseItems: [
        {
          type: "image",
          src: OlhmsMedia.src,
          alt: "Olhms Media branding mockups",
          className: "bg-orange-100",
        },
        {
          type: "image",
          src: Fostacomms.src,
          alt: "Olhms Media social media campaigns",
          className: "bg-blue-100",
        },
        {
          type: "image",
          src: Rekora.src,
          alt: "Olhms Media print materials",
          className: "bg-green-100",
        },
      ],
    },
  },
  {
    imageSrc: Fostacomms.src,
    title: "Fostacomms",
    categories: ["BRANDING", "WEBSITE", "SOCIAL"],
    link: "/portfolio/fostacomms",
    imageAlt: "Fostacomms Website",
    barBgColorClass: "bg-yellow-300",
    description:
      "Fostacomms delivers robust communication solutions. We overhauled their digital presence, focusing on a user-friendly website and a strong brand narrative.",
    detailContent: {
      heroTitle: "FOSTACOMMS",
      heroSubHeading: "PR & Comms Solutions",
      heroDescription:
        "Fostacomms is a telecommunications company. I partnered with them to overhaul their digital presence, focusing on a user-friendly website and a strong brand narrative, enhancing their online footprint and user engagement.",
      heroTag: "https://fostacomms.vercel.app/",
      expandableSectionContent: (
        <p className="p-4 text-gray-700">
          "The new website and branding truly reflect our company's values and
          have significantly improved our online interactions." - Fostacomms
          Management
        </p>
      ),
      showcaseItems: [
        {
          type: "image",
          src: fosta1,
          alt: "Fostacomms website design",
          className: "bg-yellow-100",
        },
        {
          type: "image",
          src: fosta2,
          alt: "Fostacomms branding guidelines",
          className: "bg-pink-100",
        },
        {
          type: "image",
          src: fosta3,
          alt: "Fostacomms branding guidelines",
          className: "bg-pink-100",
        },
      ],
    },
  },
  {
    imageSrc: Rekora.src,
    title: "Rekora",
    categories: ["BRANDING", "WEBSITE"],
    link: "/portfolio/rekora",
    imageAlt: "Rekora Website",
    barBgColorClass: "bg-blue-300",
    description:
      "Rekora offers innovative software solutions. We crafted a brand identity reflecting their innovative spirit and a website articulating their cutting-edge offerings.",
    detailContent: {
      heroTitle: "REKORA",
      heroSubHeading: "innovative software branding",
      heroDescription:
        "Rekora is a technology startup specializing in cutting-edge software development. Our work involved crafting a brand identity that reflects their innovative spirit and a website that clearly articulates their offerings.",
      heroTag: "https://www.rekora.org/",
      expandableSectionContent: null,
      showcaseItems: [
        {
          type: "image",
          src: Rekora.src,
          alt: "Rekora software interface",
          className: "bg-blue-100",
        },
        {
          type: "image",
          src: Chopchop.src,
          alt: "Rekora brand elements",
          className: "bg-gray-100",
        },
      ],
    },
  },
  {
    imageSrc: Chopchop.src,
    title: "Chopchop",
    categories: ["BRANDING", "WEBSITE", "SOCIAL"],
    link: "/portfolio/chopchop",
    imageAlt: "Chopchop Website",
    barBgColorClass: "bg-red-300",
    description:
      "Chopchop is a vibrant food delivery service. We created a fun and inviting brand identity, user-friendly website, and engaging social media presence to stand out.",
    detailContent: {
      heroTitle: "CHOPCHOP",
      heroSubHeading: "fast, fresh & fun food delivery",
      heroDescription:
        "Chopchop is an exciting new food delivery platform. Our task was to create a fun and inviting brand identity that stood out in a competitive market, alongside a user-friendly website and engaging social media presence.",
      heroTag: "https://fostacomms.com/",
      expandableSectionContent: null,
      showcaseItems: [
        {
          type: "image",
          src: Chopchop.src,
          alt: "Chopchop app interface",
          className: "bg-red-100",
        },
        {
          type: "image",
          src: RealDesmond.src,
          alt: "Chopchop social media graphics",
          className: "bg-orange-100",
        },
      ],
    },
  },
  {
    imageSrc: RealDesmond.src,
    title: "Real Desmond",
    categories: ["BRANDING", "WEBSITE"],
    link: "/portfolio/realdesmond",
    imageAlt: "Real Desmond Website",
    barBgColorClass: "bg-yellow-200",
    description:
      "Real Desmond showcases a unique personal brand. Our goal was to build a website effectively communicating Desmond's professional persona and accomplishments.",
    detailContent: {
      heroTitle: "REAL DESMOND",
      heroSubHeading: "personal brand storytelling",
      heroDescription:
        "Real Desmond represents a personal branding project. Our goal was to build a website that effectively communicates Desmond's professional persona and accomplishments, along with a cohesive brand identity that truly reflects his unique voice.",
      heroTag: "https://www.realdesmond.com/",
      expandableSectionContent: null,
      showcaseItems: [
        {
          type: "image",
          src: Real1,
          alt: "Real Desmond personal website",
          className: "bg-yellow-100",
        },
        {
          type: "image",
          src: Real2,
          alt: "Real Desmond brand elements",
          className: "bg-gray-100",
        },
      
        {
          type: "image",
          src: Real3,
          alt: "Real Desmond brand elements",
          className: "bg-gray-100",
        },
        {
          type: "image",
          src: Real4,
          alt: "Real Desmond brand elements",
          className: "bg-gray-100",
        },
        {
          type: "image",
          src: Real5,
          alt: "Real Desmond brand elements",
          className: "bg-gray-100",
        },
        
      ],
    },
  },
  {
    imageSrc: KindRaise.src,
    title: "KindRaise",
    categories: ["BRANDING", "WEBSITE"],
    link: "/portfolio/kindraise",
    imageAlt: "KindRaise Website",
    barBgColorClass: "bg-green-200",
    description:
      "KindRaise is a platform for charitable initiatives. We developed a compassionate brand identity and an intuitive website to facilitate donations and highlight their impactful projects.",
    detailContent: {
      heroTitle: "KINDRAISE",
      heroSubHeading: "community support & compassion",
      heroDescription:
        "KindRaise is a non-profit organization dedicated to fostering community support. We assisted them in developing a compassionate brand identity and an intuitive website to facilitate donations and highlight their impactful projects, ensuring their message resonates with empathy.",
      heroTag: "https://kindraiseweb.vercel.app/",
      expandableSectionContent: null,
      showcaseItems: [
        {
          type: "image",
          src: KindRaise.src,
          alt: "KindRaise donation platform",
          className: "bg-green-100",
        },
        {
          type: "image",
          src: ContentPlus.src,
          alt: "KindRaise branding visuals",
          className: "bg-gray-100",
        },
      ],
    },
  },
  {
    imageSrc: ContentPlus.src,
    title: "Content Plus",
    categories: ["BRANDING", "WEBSITE"],
    link: "/portfolio/contentplus",
    imageAlt: "ContentPlus Website",
    barBgColorClass: "bg-orange-200",
    description:
      "Content Plus offers premium content creation services. We strengthened their brand identity and built a website showcasing their expertise and services clearly.",
    detailContent: {
      heroTitle: "CONTENT PLUS",
      heroSubHeading: "premium content creation",
      heroDescription:
        "Content Plus is a content marketing agency providing high-quality written and visual content. Our project with them involved strengthening their brand identity and building a website that clearly showcases their expertise and services, ensuring a professional and engaging online presence.",
      heroTag: "https://www.brandwithcontentplus.com/",
      expandableSectionContent: null,
      showcaseItems: [
        {
          type: "image",
          src: ContentPlus.src,
          alt: "Content Plus website showcase",
          className: "bg-orange-100",
        },
        {
          type: "image",
          src: Micdee.src,
          alt: "Content Plus branding elements",
          className: "bg-gray-100",
        },
      ],
    },
  },
  {
    imageSrc: Micdee.src,
    title: "Micdee",
    categories: ["BRANDING", "WEBSITE"],
    link: "/portfolio/micdee",
    imageAlt: "Micdee Website",
    barBgColorClass: "bg-red-200",
    description:
      "Micdee provides specialized consulting services. We created a sophisticated brand image and a comprehensive website reflecting their professionalism and breadth of services.",
    detailContent: {
      heroTitle: "MICDEE",
      heroSubHeading: "specialized consulting solutions",
      heroDescription:
        "Micdee is a consulting firm offering specialized advice in various sectors. We were tasked with creating a sophisticated brand image and a comprehensive website that reflects their professionalism and breadth of services, establishing a strong and trustworthy digital footprint.",
      heroTag: "https://fostacomms.com/",
      expandableSectionContent: null,
      showcaseItems: [
        {
          type: "image",
          src: Micdee.src,
          alt: "Micdee consulting website",
          className: "bg-red-100",
        },
        {
          type: "image",
          src: AfterHome.src,
          alt: "Micdee brand visuals",
          className: "bg-gray-100",
        },
      ],
    },
  },
  {
    imageSrc: AfterHome.src,
    title: "AfterHome",
    categories: ["BRANDING", "WEBSITE"],
    link: "/portfolio/afterhome",
    imageAlt: "AfterHome Website",
    barBgColorClass: "bg-pink-200",
    description:
      "AfterHome reimagines modern living spaces with post-occupancy services and smart home solutions. We created a futuristic brand and a user-friendly website.",
    detailContent: {
      heroTitle: "AFTERHOME",
      heroSubHeading:
        "the female community helping women connect and make friends.",
      heroDescription:
        "AfterHome is a women-only community in Nigeria with over six branches. They help women grow, and connect with others. I designed and built their website and led the team that made it happen making sure it looked great and worked well for their members.",
      heroTag: "https://muve-two.vercel.app/",
      expandableSectionContent: null,
      showcaseItems: [
        {
          type: "image",
          src: AfterHome.src,
          alt: "AfterHome smart home integration",
          className: "bg-pink-100",
        },
        {
          type: "image",
          src: VA4ME.src,
          alt: "AfterHome website concepts",
          className: "bg-gray-100",
        },
      ],
    },
  },
  {
    imageSrc: VA4ME.src,
    title: "VA4ME",
    categories: ["BRANDING", "WEBSITE"],
    link: "/portfolio/va4me",
    imageAlt: "VA4ME Website",
    barBgColorClass: "bg-green-400",
    description:
      "VA4ME connects businesses with virtual assistants. We created a professional and trustworthy brand image and a functional website streamlining the hiring process.",
    detailContent: {
      heroTitle: "VA4ME",
      heroSubHeading: "connecting businesses with talent",
      heroDescription:
        "VA4ME is a platform dedicated to connecting businesses with highly skilled virtual assistants. Our work involved creating a professional and trustworthy brand image and a functional website that streamlines the hiring process for virtual assistant services, ensuring seamless matches.",
      heroTag: "https://example.com/",
      expandableSectionContent: null,
      showcaseItems: [
        {
          type: "image",
          src: VA4ME.src,
          alt: "VA4ME platform interface",
          className: "bg-green-100",
        },
        {
          type: "image",
          src: OlhmsMedia.src,
          alt: "VA4ME branding elements",
          className: "bg-gray-100",
        },
      ],
    },
  },
  {
    imageSrc: CreativeBabesClubHeroImage.src,
    title: "Creative Babes Club",
    categories: ["BRANDING", "WEB DESIGN", "PODCAST ART"],
    link: "/portfolio/creative-babes-club",
    imageAlt: "Creative Babes Club Website and Branding",
    barBgColorClass: "bg-purple-300",
    description:
      "A complete rebrand for Creative Babes Club, focusing on cosy, colourful, and unapologetic vibes for creative wellbeing.",
    detailContent: {
      heroTitle: "CREATIVE BABES CLUB",
      heroSubHeading: "creative wellbeing coach and advocate",
      heroDescription: `Founded by the wonderful Alicia, Creative Babes Club inspires a community to protect their creative energy,
        inject passion and purpose into their business, and reclaim being sensitive and creative. Complete with a
        podcast, workshops and 1:1 coaching, Alicia is on a mission to help creatives thrive. Creatively, HEY GIRL
        worked with CBC on a full rebrand, including printed marketing materials and podcast artwork. The vibe was cosy,
        colourful & unapologetic.`,
      heroTag: "https://fostacomms.com/",
      expandableSectionContent: (
        <p className="p-4 text-gray-700">
          "The team at HEY GIRL truly understood our vision and brought the
          Creative Babes Club brand to life in a way we couldn't have imagined.
          The rebrand feels authentic and empowering!" - Alicia (Founder,
          Creative Babes Club)
        </p>
      ),
      showcaseItems: [
        {
          type: "complex-grid",
          src: "/placeholder.svg",
          alt: "Creative Babes Club scattered sticker designs",
          className: "bg-gradient-to-br from-purple-200 to-blue-200",
          content: (
            <div className="p-6">
              <div className="absolute top-8 left-8 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold transform -rotate-12">
                Club
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
                <div className="bg-red-500 text-white px-6 py-3 rounded-lg text-2xl font-bold">
                  creative
                </div>
              </div>
              <div className="absolute bottom-8 right-8 text-4xl">🍒</div>
              <div className="absolute top-1/4 right-8 bg-orange-400 text-white px-3 py-2 rounded text-lg font-bold transform rotate-12">
                CBC
              </div>
            </div>
          ),
        },
        {
          type: "complex-logo",
          src: "/placeholder.svg",
          alt: "Creative Babes Club main logo",
          className: "bg-gradient-to-br from-blue-200 to-purple-200",
          content: (
            <div className="flex items-center justify-center p-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-500 mb-2 leading-tight">
                  creative
                </div>
                <div className="text-5xl font-bold text-orange-500 mb-2 leading-tight">
                  babes
                </div>
                <div className="text-5xl font-bold text-orange-500 leading-tight">
                  club
                </div>
                <div className="flex justify-end mt-4">
                  <span className="text-3xl">🍒</span>
                </div>
              </div>
            </div>
          ),
        },
        {
          type: "complex-grid",
          src: "/placeholder.svg",
          alt: "Creative Babes Club podcast design",
          className:
            "bg-gradient-to-br from-orange-400 via-pink-400 to-purple-400",
          content: (
            <div className="flex items-center justify-center p-8">
              <div className=" backdrop-blur-sm rounded-full p-8 text-center shadow-lg">
                <div className="text-lg font-bold text-orange-500 mb-1">
                  it's the
                </div>
                <div className="text-2xl font-bold text-orange-500 mb-1">
                  creative
                </div>
                <div className="text-2xl font-bold text-orange-500 mb-1">
                  babes
                </div>
                <div className="text-2xl font-bold text-orange-500 mb-2">
                  club
                </div>
                <div className="text-sm text-orange-500 font-medium">
                  podcast
                </div>
                <div className="mt-3 text-xl">🍒</div>
              </div>
            </div>
          ),
        },
        {
          type: "complex-phone",
          src: "/placeholder.svg",
          alt: "Creative Babes Club mobile app mockup",
          className: "bg-gradient-to-br from-purple-200 to-orange-200 p-8",
          content: (
            <div className="flex items-center justify-center">
              <div className="bg-black rounded-3xl p-2 w-40 h-72 shadow-2xl">
                <div className=" rounded-2xl h-full p-3 flex flex-col">
                  <div className="flex-1 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
                    <div className="text-white font-bold text-center text-sm">
                      <div>creative</div>
                      <div>babes club</div>
                    </div>
                    <div className="absolute top-2 right-2 text-xs">🍒</div>
                  </div>
                  <div className="flex justify-center space-x-3 mb-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="h-1 bg-orange-400 rounded-full"></div>
                </div>
              </div>
            </div>
          ),
        },
        {
          type: "complex-pattern",
          src: "/placeholder.svg",
          alt: "Creative Babes Club pattern design",
          className: "bg-white shadow-lg",
          content: (
            <div className="p-4">
              <div className="grid grid-cols-6 gap-1 h-full">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded text-xs flex items-center justify-center font-bold ${
                      i % 4 === 0
                        ? "bg-orange-400 text-white"
                        : i % 4 === 1
                        ? "bg-purple-400 text-white"
                        : i % 4 === 2
                        ? "bg-blue-300 text-white"
                        : "bg-pink-300 text-white"
                    }`}
                  >
                    {i % 6 === 0
                      ? "🍒"
                      : i % 6 === 1
                      ? "C"
                      : i % 6 === 2
                      ? "B"
                      : i % 6 === 3
                      ? "C"
                      : ""}
                  </div>
                ))}
              </div>
            </div>
          ),
        },
        {
          type: "complex-presentation",
          src: "/placeholder.svg",
          alt: "Creative Babes Club brand identity presentation",
          className: "bg-gradient-to-br from-purple-500 to-blue-600",
          content: (
            <div className="flex items-center justify-center p-6">
              <div className="text-center text-white">
                <div className="text-xl font-bold mb-2">brand identity</div>
                <div className="text-3xl font-bold mb-3">glow up</div>
                <div className="text-sm mb-1">with creative</div>
                <div className="text-sm mb-4">babes club</div>
                <div className="w-10 h-10 bg-white rounded-full mx-auto flex items-center justify-center">
                  <span className="text-purple-500 text-lg">🍒</span>
                </div>
                <div className="mt-3 flex justify-center space-x-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
              </div>
            </div>
          ),
        },
        {
          type: "complex-elements",
          src: "/placeholder.svg",
          alt: "Creative Babes Club additional brand elements",
          className: "bg-gradient-to-br from-purple-300 to-blue-300",
          content: (
            <div className="flex items-center justify-center p-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🍒</div>
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <div className="text-2xl font-bold text-purple-500 mb-2">
                    CBC
                  </div>
                  <div className="text-xs text-gray-600">
                    Creative Babes Club
                  </div>
                </div>
                <div className="mt-4 flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
  },
];

const PortfolioDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const siteContent = useSiteContent();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    window.scrollTo(0, 0);
  }, []);

  const portfolioItem = portfolioItems.find(
    (item) => item.link.split("/").pop() === slug
  );
  const editableProject = siteContent.portfolio.projects.find((project) => project.link.split("/").pop() === slug);

  if (!portfolioItem) {
    return (
      <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center">
        <Navbar />
        <h1 className="text-4xl font-bold mb-4">
          404 - Portfolio Item Not Found
        </h1>
        <p className="text-lg">
          The portfolio item you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate("/portfolio")}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Go back to Portfolio
        </button>
        <Footer />
      </div>
    );
  }

  const mainHeroImage = portfolioItem.imageSrc;

  return (
    <>
      <div className="min-h-screen bg-[#ffe4f0] text-gray-800">
        <Navbar />

        <main className="container mx-auto px-4 py-24 lg:px-20">
          <section data-aos="fade-up" className="p-4 rounded-lg">
            <ProjectHeroContent
              title={editableProject?.detail.heroTitle || portfolioItem.detailContent.heroTitle}
              subHeading={editableProject?.detail.heroSubHeading || portfolioItem.detailContent.heroSubHeading}
              description={editableProject?.detail.heroDescription || portfolioItem.detailContent.heroDescription}
              heroTag={editableProject?.detail.heroTag || portfolioItem.detailContent.heroTag}
            />

            {mainHeroImage && (
              <div className="mb-12 flex justify-center">
                <img
                  src={mainHeroImage}
                  alt={portfolioItem.imageAlt}
                  className="max-w-full h-auto rounded-lg shadow-md object-cover"
                  style={{ maxHeight: "500px" }}
                />
              </div>
            )}

            {portfolioItem.detailContent.expandableSectionContent && (
              <ExpandableSection>
                {portfolioItem.detailContent.expandableSectionContent}
              </ExpandableSection>
            )}

            {portfolioItem.detailContent.showcaseItems.length > 0 && (
              <BrandShowcase
                items={portfolioItem.detailContent.showcaseItems}
              />
            )}

            <DevicePreviews url={editableProject?.detail.heroTag || portfolioItem.detailContent.heroTag} />

            <BackButton />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default PortfolioDetail;
