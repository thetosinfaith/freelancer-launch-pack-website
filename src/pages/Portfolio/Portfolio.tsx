import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import PortfolioCard from "@/components/PortfolioCard";
import HeaderNav from "@/components/HeaderNav";
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
import AOS from "aos";
import "aos/dist/aos.css"; 
import { CallToActionSection } from "@/components/services/CallToActionSection";
import Footer from "@/components/Footer";
import { useSiteContent } from "@/hooks/use-site-content";

interface PortfolioItem {
  imageSrc: string;
  title: string;
  categories: string[];
  link: string;
  imageAlt: string;
  barBgColorClass: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    imageSrc: OlhmsMedia,
    title: "Olhms Media",
    categories: ["BRANDING", "SOCIAL MEDIA", "PRINT"],
    link: "/portfolio/olhmsmedia",
    imageAlt: "Olhms Media Website",
    barBgColorClass: "bg-zinc-300",
  },
  {
    imageSrc: Fostacomms,
    title: "Fostacomms",
    categories: ["BRANDING", "WEBSITE", "SOCIAL"],
    link: "/portfolio/fostacomms",
    imageAlt: "Fostacomms Website",
    barBgColorClass: "bg-yellow-300",
  },
  {
    imageSrc: Rekora,
    title: "Rekora",
    categories: ["BRANDING", "WEBSITE"],
    link: "/portfolio/rekora",
    imageAlt: "Rekora Website",
    barBgColorClass: "bg-blue-300",
  },
  {
    imageSrc: Chopchop,
    title: "Chopchop",
    categories: ["BRANDING", "WEBSITE", "SOCIAL"],
    link: "/portfolio/chopchop",
    imageAlt: "Chopchop Website",
    barBgColorClass: "bg-red-300",
  },
  {
    imageSrc: RealDesmond,
    title: "Real Desmond",
    categories: ["BRANDING", "WEBSITE"],
    link: "/portfolio/realdesmond",
    imageAlt: "Real Desmond Website",
    barBgColorClass: "bg-yellow-200",
  },
  {
    imageSrc: KindRaise,
    title: "KindRaise",
    categories: ["BRANDING", "WEBSITE"],
    link: "/portfolio/kindraise",
    imageAlt: "KindRaise Website",
    barBgColorClass: "bg-green-200",
  },
  {
    imageSrc: ContentPlus,
    title: "Content Plus",
    categories: ["BRANDING", "WEBSITE"],
    link: "/portfolio/contentplus",
    imageAlt: "ContentPlus Website",
    barBgColorClass: "bg-orange-200",
  },
  {
    imageSrc: Micdee,
    title: "Micdee",
    categories: ["BRANDING", "WEBSITE"],
    link: "/portfolio/contentplus",
    imageAlt: "ContentPlus Website",
    barBgColorClass: "bg-red-200",
  },
  {
    imageSrc: AfterHome,
    title: "AfterHome",
    categories: ["BRANDING", "WEBSITE"],
    link: "/portfolio/afterhome",
    imageAlt: "AfterHome Website",
    barBgColorClass: "bg-pink-200",
  },
  {
    imageSrc: VA4ME,
    title: "VA4ME",
    categories: ["BRANDING", "WEBSITE"],
    link: "/portfolio/afterhome",
    imageAlt: "AfterHome Website",
    barBgColorClass: "bg-green-400",
  },
];

const Portfolio: React.FC = () => {
  const siteContent = useSiteContent();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className="min-h-screen bg-white text-white">
      <Navbar />
      <HeaderNav />

      <main className="container mx-auto px-4 py-8 lg:px-20">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(siteContent.portfolio.projects.length ? siteContent.portfolio.projects.map((project, index) => {
            const known = portfolioItems.find((item) => item.link === project.link || item.title.toLowerCase() === project.title.toLowerCase());
            return {
              imageSrc: project.image || known?.imageSrc || "",
              title: project.title,
              categories: project.categories,
              link: project.link,
              imageAlt: `${project.title} website`,
              barBgColorClass: known?.barBgColorClass || "bg-pink-200",
            };
          }) : portfolioItems).map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <PortfolioCard
                imageSrc={item.imageSrc}
                title={item.title}
                categories={item.categories}
                link={item.link}
                imageAlt={item.imageAlt}
                barBgColorClass={item.barBgColorClass}
              />
            </div>
          ))}
        </section>
      </main>
    </div>
    <CallToActionSection/>
    <Footer/>
    </>
  );
};

export default Portfolio;
