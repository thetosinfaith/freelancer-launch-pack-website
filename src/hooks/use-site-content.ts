import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import clientLogo01 from "../assets/logo-black.webp";
import clientLogo02 from "../assets/maplogo.webp";
import clientLogo03 from "../assets/cpc.webp";
import clientLogo04 from "../assets/Rekora-logo-dark.webp";
import clientLogo05 from "../assets/Tixavo.webp";
import clientLogo06 from "../assets/Kindraise.webp";
import clientLogo07 from "../assets/AzuTravels.webp";
import clientLogo08 from "../assets/brooi-logo.webp";
import clientLogo09 from "../assets/va4me.webp";
import clientLogo10 from "../assets/fostacomm.webp";
import clientLogo11 from "../assets/Talksex.webp";
import clientLogo12 from "../assets/MyLandlord.webp";
import clientLogo13 from "../assets/yellow-queen.webp";
import clientLogo14 from "../assets/Muve.webp";
import clientLogo15 from "../assets/contentplus.webp";
import clientsAudienceImage from "../assets/tt.webp";
import headerLogo from "../assets/logo.webp";
import footerLogo from "../assets/logo_white - Copy.webp";
import homepageHeroImage from "../assets/girl.webp";
import homepageFeaturedImage from "../assets/reall.webp";
import projectOlhms from "../assets/OlhmsMedia.webp";
import projectFosta from "../assets/fosta.webp";
import projectChopchop from "../assets/chopchop (2).webp";
import projectAfterhome from "../assets/afterhome.webp";
import projectKindraise from "../assets/kindraiseWebsite.webp";
import projectContentplus from "../assets/contentpluss.webp";
import projectMicdee from "../assets/micdee.webp";
import projectRekora from "../assets/Rekoras.webp";
import projectRealDesmond from "../assets/reall.webp";
import projectVA4ME from "../assets/VA4MEe.webp";

export type EditableLink = { label: string; href: string; visible?: boolean };
export type EditableImage = { src: string; alt: string };
export type HomepageProject = {
  title: string;
  description: string;
  category: string;
  image: EditableImage;
  imageManaged: boolean;
  cardColor: string;
  buttonText: string;
  buttonColor: string;
  href: string;
  visible: boolean;
};
export type HomepageTestimonial = {
  name: string;
  role: string;
  tag: string;
  quote: string;
  image: EditableImage;
  visible: boolean;
};

export type SiteContent = {
  homepage: {
    heroTitle: string;
    heroDescription: string;
    primaryButton: string;
    secondaryButton: string;
    primaryHref: string;
    secondaryHref: string;
    visibility: { hero: boolean; showcase: boolean; clients: boolean; promise: boolean; brands: boolean; testimonials: boolean; projects: boolean };
    hero: { image: EditableImage; imageManaged: boolean; proudlyWorkedWith: string; proudLogos: Array<EditableImage>; proudLogosManaged: boolean; proudCounter: string; showCounter: boolean; showBrands: boolean };
    showcase: { badge: string; projectTitle: string; projectDescription: string; category: string; client: string; quote: string; button: string; buttonColor: string; href: string; image: EditableImage; imageManaged: boolean; testimonialAuthor: string; testimonialRole: string; testimonialImage: EditableImage };
    clients: { eyebrow: string; title: string; image: EditableImage; cards: Array<{ title: string; description: string; button: string; href: string; color: string; visible: boolean }> };
    promise: { eyebrow: string; title: string; cards: Array<{ title: string; description: string; color: string; visible: boolean }> };
    brands: { eyebrow: string; title: string; description: string; items: Array<{ name: string; image: EditableImage; href: string; visible: boolean }>; showCounter: boolean; counterText: string; managed: boolean };
    testimonials: { eyebrow: string; title: string; items: HomepageTestimonial[] };
    projects: { items: HomepageProject[]; displayMode: "hover" | "always" | "click"; showSection: boolean };
  };
  theme: {
    primaryColor: string;
    accentColor: string;
    headingFontUrl: string;
    bodyFontUrl: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    button: string;
    image: string;
  };
  services: {
    title: string;
    intro: string;
    packages: Array<{ title: string; description: string }>;
  };
  speaking: {
    cards: Array<{ title: string; description: string }>;
    button: string;
    statement: string;
  };
  booking: {
    title: string;
    description: string;
    submitButton: string;
  };
  linksPage: {
    title: string;
    subtitle: string;
    hero: { image: string; alt: string; position: string };
    colors: { background: string; card: string; fade: string };
    links: Array<{ text: string; url: string; primary?: boolean; icon?: string | null; subtext?: string; imageIcon?: string }>;
    socials: { tiktok: string; instagram: string; linkedin: string; mail: string; facebook: string; x: string };
    backToWebsiteText: string;
    backToWebsiteUrl: string;
  };
  portfolio: {
    title: string;
    projects: Array<{ title: string; categories: string[]; image: string; link: string; detail: { heroTitle: string; heroSubHeading: string; heroDescription: string; heroTag: string } }>;
  };
  shared: {
    brandName: string;
    footerText: string;
    whatsappNumber: string;
    showWhatsApp: boolean;
    header: { logo: EditableImage; logoManaged: boolean; showLogo: boolean; showNavigation: boolean; links: EditableLink[]; ctaText: string; ctaHref: string; showCta: boolean; mobileEmail: string; mobileTagline: string };
    footer: { logo: EditableImage; logoManaged: boolean; columns: Array<{ heading: string; links: EditableLink[] }>; socials: Array<{ label: string; href: string; visible: boolean }>; contact: string; whatsappLabel: string; showContact: boolean };
  };
  ugc: {
    navName: string;
    navLinks: Array<{ label: string; href: string }>;
    hero: { eyebrow: string; name: string; title: string; description: string; image: string };
    about: { heading: string; body: string; stats: Array<{ value: string; label: string }>; image: string };
    analytics: { heading: string; paragraphs: string[]; image: string; stats: Array<{ value: string; label: string }> };
    niches: Array<{ label: string; image: string }>;
    services: Array<{ title: string; description: string; image: string }>;
    photography: { heading: string; description: string; images: Array<{ image: string; brand: string }> };
    rates: Array<{ title: string; description: string; bullets: string[]; price: string }>;
    testimonials: Array<{ name: string; quote: string; image: string }>;
    contact: { heading: string; image: string; email: string; number: string; instagram: string; tiktok: string; youtube: string; x: string };
  };
};

export const defaultSiteContent: SiteContent = {
  homepage: {
    heroTitle: "I Design & Build Impactful Websites",
    heroDescription:
      "Hi! I’m Tee, a website designer, frontend dev, and all-around website obsessed human. Nothing makes me happier than making the process of getting a new website stress-free for you.",
    primaryButton: "Let's Create Your Site",
    secondaryButton: "Take Me to Portfolio",
    primaryHref: "/booking",
    secondaryHref: "/portfolio",
    visibility: { hero: true, showcase: true, clients: true, promise: true, brands: true, testimonials: true, projects: true },
    hero: {
      image: { src: homepageHeroImage, alt: "Tosin Faith" },
      imageManaged: false,
      proudlyWorkedWith: "Proudly worked with these brands:",
      proudLogos: [
        { src: clientLogo05, alt: "TEDx Ajegunle client logo" },
        { src: clientLogo14, alt: "Oga HR client logo" },
      ],
      proudLogosManaged: false,
      proudCounter: "+ 15 more!",
      showCounter: true,
      showBrands: true,
    },
    showcase: {
      badge: "I really loved working with Tee!",
      projectTitle: "A brand that feels like you",
      projectDescription: "A thoughtful visual identity and website made to help this business show up with confidence.",
      category: "WEBSITE DESIGN",
      client: "REAL DESMOND | BRAND DESIGNER",
      quote: "She always puts in 100% into helping me and making my dream website! It has been so easy to communicate with her too as she is so attentive & patient! Every small detail of the website is so well taken care of!",
      button: "VIEW PROJECTS",
      buttonColor: "#d82382",
      href: "/portfolio",
      image: { src: homepageFeaturedImage, alt: "Featured project" },
      imageManaged: false,
      testimonialAuthor: "Real Desmond",
      testimonialRole: "BRAND DESIGNER",
      testimonialImage: { src: "", alt: "Real Desmond" },
    },
    clients: {
      eyebrow: "WHO I WORK WITH",
      title: "This Is For You If...",
      image: { src: clientsAudienceImage, alt: "Website design client" },
      cards: [
        { title: "Creators", description: "You’ve spent HOURS trying to build a website yourself, but it still doesn’t look good enough to showcase your work.", button: "Let's Fix That", href: "/services", color: "#D2F9E5", visible: true },
        { title: "Personal Brand", description: "You’ve tried a few website templates, but none of them are doing justice to your brand, you need something that feels more you.", button: "Let’s Launch It", href: "/services", color: "#E2F0FD", visible: true },
        { title: "E-commerce Store", description: "You want a website that’s designed to handle selling products, so you can manage orders and deliveries without wasting time.", button: "Let’s Upgrade It", href: "/services", color: "#FFF8C0", visible: true },
        { title: "Service Provider", description: "You want to show your dream clients exactly how great you are and how you’re the best service provider for them.", button: "Let’s Build It", href: "/services", color: "#E7D6FA", visible: true },
      ],
    },
    promise: {
      eyebrow: "WHAT YOU CAN EXPECT",
      title: "My Promise to You...",
      cards: [
        { title: "TRANSPARENCY", description: "When we work together, you can trust that I’ll be consistent, communicative, and fully committed to delivering a website that meets (and exceeds!) your expectations.", color: "#FFE4F0", visible: true },
        { title: "SIMPLICITY", description: "Making the process of designing and developing your website clear, simple and easy to understand is so important to me.", color: "#FFE9DC", visible: true },
        { title: "IMPACT", description: "Your website needs to be impactful - it needs to grab attention and have a real impact on the growth of your business.", color: "#FFF5E1", visible: true },
        { title: "COLLABORATION", description: "I really believe that the best things come from collaborating. Combine your business expertise with mine and we can build the website you’ve dreamed of.", color: "#F6F6F6", visible: true },
        { title: "AESTHETICS", description: "Your website should stand out. I love finding unique, thoughtful design solutions that reflect your brand’s personality.", color: "#F9EDFF", visible: true },
        { title: "SUPPORT", description: "I don’t just hand over a website and disappear. I’m here to guide you even after launch.", color: "#E5F3F8", visible: true },
      ],
    },
    brands: {
      eyebrow: "I'VE WORKED WITH",
      title: "Happy Brands.",
      description: "Not to brag, but I’ve worked with some really cool brands.",
      items: [
        ["ETAL", clientLogo01], ["EAT", clientLogo02], ["Kewa's Kitchen", clientLogo03], ["TemsDelight", clientLogo04], ["Eventi Cocktails", clientLogo05], ["Délani", clientLogo06], ["The Blue Kitchen", clientLogo07], ["P & P Sip", clientLogo08], ["BETH Foundation", clientLogo09], ["MB", clientLogo10], ["Békiri", clientLogo11], ["IDW & F", clientLogo12], ["Riot", clientLogo13], ["Ajòje", clientLogo14], ["Tessallure", clientLogo15],
      ].map(([name, src]) => ({ name: name as string, image: { src: src as string, alt: `${name} logo` }, href: "", visible: true })),
      showCounter: false,
      counterText: "+ 15 more!",
      managed: true,
    },
    testimonials: {
      eyebrow: "TESTIMONIALS",
      title: "From The Brands",
      items: [
        { name: "Real Desmond", role: "BRAND DESIGNER", tag: "branding website", quote: "Iconic - Tosin UNDERSTOOD the assignment. The communication flow was amazing too, such a collaborative experience.", image: { src: "", alt: "Real Desmond" }, visible: true },
        { name: "Tosin Olomu", role: "VIDEOGRAPHER", tag: "made 6 figures", quote: "I struggle to see past the moodboard, but look at my website!! It's everything I wanted and everything I didn't know I needed.", image: { src: "", alt: "Tosin Olomu" }, visible: true },
        { name: "Maria Rodriguez", role: "BUSINESS OWNER", tag: "boosted sales", quote: "She has her onboarding process and structure totally nailed. She kept me informed at every stage.", image: { src: "", alt: "Maria Rodriguez" }, visible: true },
      ],
    },
    projects: {
      displayMode: "hover",
      showSection: true,
      items: [
        ...[["Olhms Media", "Videography & Photography", "Media", projectOlhms], ["Fostacomms", "PR & Communications", "Marketing", projectFosta], ["Chopchop", "Gourmet Food Delivery", "Food & Beverage", projectChopchop], ["Afterhome", "Gen Z Community", "Community & Living", projectAfterhome], ["KindRaise", "Nonprofit Fundraising", "Non-profit", projectKindraise], ["ContentPlus", "Premium Ghostwriting", "Creative", projectContentplus], ["Micdee", "Real Estate", "Land & Properties", projectMicdee], ["Rekora", "STEM Education", "Education", projectRekora], ["Real Desmond", "Brand Identity Designer", "Branding", projectRealDesmond], ["VA4ME", "Virtual Assistant Services", "Services", projectVA4ME]].map(([title, description, category, src]) => ({ title, description, category, image: { src, alt: title }, imageManaged: false, cardColor: "#fce7f3", buttonText: "Check it out", buttonColor: "#ec4899", href: `/portfolio/${String(title).toLowerCase().replace(/\s+/g, "")}`, visible: true })),
      ],
    },
  },
  theme: {
    primaryColor: "#d82382",
    accentColor: "#ffffff",
    headingFontUrl: "",
    bodyFontUrl: "",
  },
  about: {
    title: "Hi! I’m Tosin.",
    paragraphs: [
      "I’m a website designer and developer, but I do things differently. I hate jargon, I hate complicated technical words, and I offer a range of services to cater for brands at all stages of their journey.",
      "I work with ambitious brands & businesses on their websites materials. But what makes me unique? That would be my strong visual aesthetic that I always lean in to, I have a good eye for design and I know how to make things look fun, stylish, and still help you get more customers.",
      "My website design and dev process is simple: we work together to figure out exactly what your business needs before I do the BTS magic to make it come to life. Everything I do is collaborative, supportive and creative.",
    ],
    button: "SEE WHAT I'VE CREATED",
    image: "",
  },
  services: {
    title: "Services",
    intro: "Choose the website experience that fits where your business is right now.",
    packages: [
      { title: "Just Get Me Online", description: "A simple, clean website for when you just need to be online — fast." },
      { title: "Website Glow-Up", description: "Give your existing site a fresh, strategic new look you’ll love." },
      { title: "One-Day Website", description: "A premium one-day build experience to get you live fast." },
      { title: "The Shop & Sell", description: "A complete online storefront for your products and digital goods." },
    ],
  },
  speaking: {
    cards: [
      { title: "designer", description: "freelance dev with a wealth" },
      { title: "content creator", description: "creating meaningful and unique content for social & beyond" },
      { title: "designer", description: "mentorship opportunities for young up & coming stylists" },
    ],
    button: "go to portfolio",
    statement: "I work with ... and creators to deliver unique and striking websites.",
  },
  booking: {
    title: "Let's work together",
    description: "Tell me a little about your project and I’ll be in touch.",
    submitButton: "Send enquiry",
  },
  linksPage: {
    title: "Tosin Faith",
    subtitle: "Website designer, frontend developer, and website obsessed human.",
    hero: { image: "", alt: "Tosin Faith", position: "center 20%" },
    colors: { background: "#ffffff", card: "#ffcce6", fade: "#ffcce6" },
    links: [],
    socials: { tiktok: "", instagram: "", linkedin: "", mail: "", facebook: "", x: "" },
    backToWebsiteText: "Back to website",
    backToWebsiteUrl: "/",
  },
  portfolio: {
    title: "Selected work",
    projects: [
      { title: "Olhms Media", categories: ["BRANDING", "SOCIAL MEDIA", "PRINT"], image: "", link: "/portfolio/olhmsmedia", detail: { heroTitle: "", heroSubHeading: "", heroDescription: "", heroTag: "" } },
      { title: "Fostacomms", categories: ["BRANDING", "WEBSITE", "SOCIAL"], image: "", link: "/portfolio/fostacomms", detail: { heroTitle: "", heroSubHeading: "", heroDescription: "", heroTag: "" } },
      { title: "Rekora", categories: ["BRANDING", "WEBSITE"], image: "", link: "/portfolio/rekora", detail: { heroTitle: "", heroSubHeading: "", heroDescription: "", heroTag: "" } },
      { title: "Chopchop", categories: ["BRANDING", "WEBSITE", "SOCIAL"], image: "", link: "/portfolio/chopchop", detail: { heroTitle: "", heroSubHeading: "", heroDescription: "", heroTag: "" } },
      { title: "Real Desmond", categories: ["BRANDING", "WEBSITE"], image: "", link: "/portfolio/realdesmond", detail: { heroTitle: "", heroSubHeading: "", heroDescription: "", heroTag: "" } },
      { title: "KindRaise", categories: ["BRANDING", "WEBSITE"], image: "", link: "/portfolio/kindraise", detail: { heroTitle: "", heroSubHeading: "", heroDescription: "", heroTag: "" } },
    ],
  },
  shared: {
    brandName: "Tosin Faith",
    footerText: "© Tosin Faith. All rights reserved.",
    whatsappNumber: "2348123539192",
    showWhatsApp: true,
    header: {
      logo: { src: headerLogo, alt: "Tosin Faith" },
      logoManaged: false,
      showLogo: true,
      showNavigation: true,
      links: [
        { label: "Home", href: "/" },
        { label: "About Me", href: "/about" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/booking" },
      ],
      ctaText: "Start a Project",
      ctaHref: "/booking",
      showCta: true,
      mobileEmail: "hellotosinfaith@gmail.com",
      mobileTagline: "Let’s work together and create something awesome for your business!",
    },
    footer: {
      logo: { src: footerLogo, alt: "Tosin Faith" },
      logoManaged: false,
      columns: [{
        heading: "Helpful Links",
        links: [
          { label: "My Services", href: "/services" },
          { label: "About Me", href: "/about" },
          { label: "Visit Portfolio", href: "/portfolio" },
          { label: "Get Freebies", href: "/links" },
          { label: "Contact Me", href: "/booking" },
        ],
      }],
      socials: [
        { label: "Instagram", href: "", visible: true },
        { label: "TikTok", href: "", visible: true },
        { label: "X", href: "", visible: true },
        { label: "Facebook", href: "", visible: true },
        { label: "LinkedIn", href: "", visible: true },
        { label: "Website", href: "", visible: true },
      ],
      contact: "",
      whatsappLabel: "WhatsApp:",
      showContact: false,
    },
  },
  ugc: {
    navName: "OLIVIA STERLING",
    navLinks: [{ label: "MY WORK", href: "#work" }, { label: "SERVICES", href: "#services" }, { label: "CONTACT", href: "#contact" }],
    hero: { eyebrow: "hi, my name is", name: "Olivia", title: "UGC PORTFOLIO", description: "I'm a UGC content creator based in Los Angeles, California. I specialize in creating authentic lifestyle, beauty, and fashion content.", image: "" },
    about: { heading: "Who am I?", body: "Hi, I'm Olivia, a UGC creator passionate about helping brands connect with their audiences through authentic content.\n\nI specialize in creating lifestyle-focused videos and visuals that aligns with each brand's unique voice. My goal is to produce content that builds genuine relationships and inspires action.", stats: [{ value: "15+", label: "brand partners" }, { value: "10m+", label: "total views" }, { value: "5yrs+", label: "in experience" }], image: "" },
    analytics: { heading: "My Audience at a Glance", paragraphs: ["My audience is predominantly female between the ages of 18 to 34, based primarily in the United States."], image: "", stats: [{ value: "78%", label: "Female" }, { value: "18–34", label: "Age Range" }, { value: "55%", label: "United States" }, { value: "5.4%", label: "Av. Engagement" }] },
    niches: [{ label: "Beauty", image: "" }, { label: "Skincare", image: "" }, { label: "Lifestyle", image: "" }, { label: "Fashion", image: "" }, { label: "Wellness", image: "" }, { label: "Travel", image: "" }],
    services: [{ title: "PRODUCT REVIEW", description: "An authentic and honest video review of your product that builds trust and social proof with your target audience.", image: "" }, { title: "PAID UGC VIDEO", description: "High quality short form video content created specifically for your brand to use in paid ads across TikTok and Instagram.", image: "" }, { title: "UGC PHOTO AD", description: "Lifestyle photography that showcases your product in real and relatable settings perfect for social media and e-commerce.", image: "" }],
    photography: { heading: "Photography", description: "I have participated in multiple UGC photography campaigns with brands, creating high-quality content that helps brands connect with their audiences.", images: [{ image: "", brand: "BRAND NAME" }, { image: "", brand: "BRAND NAME" }, { image: "", brand: "BRAND NAME" }, { image: "", brand: "BRAND NAME" }, { image: "", brand: "BRAND NAME" }, { image: "", brand: "BRAND NAME" }, { image: "", brand: "BRAND NAME" }, { image: "", brand: "BRAND NAME" }] },
    rates: [{ title: "PRODUCT REVIEW", description: "An authentic review showcasing your product's features, benefits, and real-life use.", bullets: ["Honest product feedback", "Key features highlighted", "Demonstration of product use", "Customer-focused storytelling"], price: "STARTING AT $350" }, { title: "PAID UGC VIDEO", description: "A high-quality user-generated content video created for your brand's marketing needs.", bullets: ["Engaging video content", "Hook + call-to-action included", "Authentic creator-style delivery", "Optimized for social media"], price: "STARTING AT $550" }, { title: "UGC PHOTO AD", description: "Professional lifestyle photos featuring your product in a visually appealing setting.", bullets: ["High-resolution images", "Lifestyle product photography", "Brand-focused composition", "Social media ready"], price: "STARTING AT $630" }],
    testimonials: [{ name: "Sarah Thompson", quote: "Working with Olivia was an amazing experience. She delivered high-quality content that felt authentic and engaging.", image: "" }, { name: "Jessica Rivera", quote: "Olivia was professional, creative, and incredibly easy to work with. She understood our brand vision immediately.", image: "" }, { name: "Emily Carter", quote: "The quality of Olivia's photos and videos exceeded our expectations. Everything was visually appealing.", image: "" }],
    contact: { heading: "CONTACT ME", image: "", email: "OLIVIASTERLINGS@GMAIL.COM", number: "1+000-000-0000", instagram: "Oliviesterlings", tiktok: "Oliviesterlings", youtube: "Oliviesterlings", x: "Oliviesterlings1" },
  },
};

export function useSiteContent() {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);

  useEffect(() => {
    supabase
      .from("site_content")
      .select("content")
      .eq("key", "site")
      .maybeSingle()
      .then(({ data }) => {
        if (data?.content) {
          setContent({
            ...defaultSiteContent,
            ...(data.content as Partial<SiteContent>),
            homepage: {
              ...defaultSiteContent.homepage,
              ...((data.content as Partial<SiteContent>).homepage ?? {}),
              visibility: { ...defaultSiteContent.homepage.visibility, ...((data.content as Partial<SiteContent>).homepage?.visibility ?? {}) },
              hero: {
                ...defaultSiteContent.homepage.hero,
                ...((data.content as Partial<SiteContent>).homepage?.hero ?? {}),
                image: {
                  ...defaultSiteContent.homepage.hero.image,
                  ...((data.content as Partial<SiteContent>).homepage?.hero?.imageManaged || (data.content as Partial<SiteContent>).homepage?.hero?.image?.src
                    ? (data.content as Partial<SiteContent>).homepage?.hero?.image ?? {}
                    : {}),
                },
                showBrands: (data.content as Partial<SiteContent>).homepage?.hero?.showBrands ?? defaultSiteContent.homepage.hero.showBrands,
                proudLogos: ((data.content as Partial<SiteContent>).homepage?.hero?.proudLogosManaged
                  ? (data.content as Partial<SiteContent>).homepage?.hero?.proudLogos ?? []
                  : (data.content as Partial<SiteContent>).homepage?.hero?.proudLogos?.length
                    ? (data.content as Partial<SiteContent>).homepage?.hero?.proudLogos
                    : defaultSiteContent.homepage.hero.proudLogos),
              },
              showcase: {
                ...defaultSiteContent.homepage.showcase,
                ...((data.content as Partial<SiteContent>).homepage?.showcase ?? {}),
                image: {
                  ...defaultSiteContent.homepage.showcase.image,
                  ...((data.content as Partial<SiteContent>).homepage?.showcase?.imageManaged || (data.content as Partial<SiteContent>).homepage?.showcase?.image?.src
                    ? (data.content as Partial<SiteContent>).homepage?.showcase?.image ?? {}
                    : {}),
                },
                testimonialImage: {
                  ...defaultSiteContent.homepage.showcase.testimonialImage,
                  ...((data.content as Partial<SiteContent>).homepage?.showcase?.testimonialImage ?? {}),
                },
              },
              clients: {
                ...defaultSiteContent.homepage.clients,
                ...((data.content as Partial<SiteContent>).homepage?.clients ?? {}),
                image: { ...defaultSiteContent.homepage.clients.image, ...((data.content as Partial<SiteContent>).homepage?.clients?.image ?? {}) },
                cards: ((data.content as Partial<SiteContent>).homepage?.clients?.cards ?? defaultSiteContent.homepage.clients.cards),
              },
              promise: {
                ...defaultSiteContent.homepage.promise,
                ...((data.content as Partial<SiteContent>).homepage?.promise ?? {}),
                cards: ((data.content as Partial<SiteContent>).homepage?.promise?.cards ?? defaultSiteContent.homepage.promise.cards),
              },
              brands: {
                ...defaultSiteContent.homepage.brands,
                ...((data.content as Partial<SiteContent>).homepage?.brands ?? {}),
                managed: true,
                items: (((data.content as Partial<SiteContent>).homepage?.brands?.managed === true
                  ? (data.content as Partial<SiteContent>).homepage?.brands?.items ?? []
                  : (data.content as Partial<SiteContent>).homepage?.brands?.items?.length
                    ? (data.content as Partial<SiteContent>).homepage?.brands?.items ?? []
                    : defaultSiteContent.homepage.brands.items)).map((item) => ({
                  ...item,
                  image: { ...defaultSiteContent.homepage.brands.items[0]?.image, ...item.image },
                })),
              },
              testimonials: {
                ...defaultSiteContent.homepage.testimonials,
                ...((data.content as Partial<SiteContent>).homepage?.testimonials ?? {}),
                items: ((data.content as Partial<SiteContent>).homepage?.testimonials?.items ?? defaultSiteContent.homepage.testimonials.items).map((item) => ({ ...item, image: { ...defaultSiteContent.homepage.testimonials.items[0]?.image, ...item.image } })),
              },
              projects: {
                ...defaultSiteContent.homepage.projects,
                ...((data.content as Partial<SiteContent>).homepage?.projects ?? {}),
                items: ((data.content as Partial<SiteContent>).homepage?.projects?.items ?? defaultSiteContent.homepage.projects.items).map((item, index) => ({
                  ...item,
                  image: { ...(defaultSiteContent.homepage.projects.items[index] ?? defaultSiteContent.homepage.projects.items[0]).image, ...(item.imageManaged || item.image?.src ? item.image : {}) },
                })),
              },
            },
            theme: {
              ...defaultSiteContent.theme,
              ...((data.content as Partial<SiteContent>).theme ?? {}),
            },
            about: { ...defaultSiteContent.about, ...((data.content as Partial<SiteContent>).about ?? {}) },
            services: { ...defaultSiteContent.services, ...((data.content as Partial<SiteContent>).services ?? {}) },
            speaking: { ...defaultSiteContent.speaking, ...((data.content as Partial<SiteContent>).speaking ?? {}) },
            booking: { ...defaultSiteContent.booking, ...((data.content as Partial<SiteContent>).booking ?? {}) },
            linksPage: { ...defaultSiteContent.linksPage, ...((data.content as Partial<SiteContent>).linksPage ?? {}) },
            portfolio: {
              ...defaultSiteContent.portfolio,
              ...((data.content as Partial<SiteContent>).portfolio ?? {}),
              projects: (
                (data.content as Partial<SiteContent>).portfolio?.projects ??
                defaultSiteContent.portfolio.projects
              ).map((project, index) => ({
                ...defaultSiteContent.portfolio.projects[index],
                ...project,
                detail: {
                  ...defaultSiteContent.portfolio.projects[index]?.detail,
                  ...(project.detail ?? {}),
                },
              })),
            },
            shared: {
              ...defaultSiteContent.shared,
              ...((data.content as Partial<SiteContent>).shared ?? {}),
              header: {
                ...defaultSiteContent.shared.header,
                ...((data.content as Partial<SiteContent>).shared?.header ?? {}),
                logo: { ...defaultSiteContent.shared.header.logo, ...((data.content as Partial<SiteContent>).shared?.header?.logoManaged || (data.content as Partial<SiteContent>).shared?.header?.logo?.src ? (data.content as Partial<SiteContent>).shared?.header?.logo ?? {} : {}) },
                logoManaged: (data.content as Partial<SiteContent>).shared?.header?.logoManaged ?? false,
              },
              footer: {
                ...defaultSiteContent.shared.footer,
                ...((data.content as Partial<SiteContent>).shared?.footer ?? {}),
                logo: { ...defaultSiteContent.shared.footer.logo, ...((data.content as Partial<SiteContent>).shared?.footer?.logoManaged || (data.content as Partial<SiteContent>).shared?.footer?.logo?.src ? (data.content as Partial<SiteContent>).shared?.footer?.logo ?? {} : {}) },
                logoManaged: (data.content as Partial<SiteContent>).shared?.footer?.logoManaged ?? false,
                columns: ((data.content as Partial<SiteContent>).shared?.footer?.columns ?? defaultSiteContent.shared.footer.columns),
                socials: ((data.content as Partial<SiteContent>).shared?.footer?.socials ?? defaultSiteContent.shared.footer.socials),
              },
            },
            ugc: { ...defaultSiteContent.ugc, ...((data.content as Partial<SiteContent>).ugc ?? {}) },
          });
        }
      });
  }, []);

  return content;
}
