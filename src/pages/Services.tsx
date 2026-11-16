"use client";

import { useEffect } from "react";
import { ServiceCard } from "@/components/services/ServiceCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sparkles,
  ShoppingCart,
  Repeat,
  Rocket,
  Brush,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import ConsultationSection from "@/components/ConsultationSection";
import TestimonialsSection from "@/components/TestimonialSection";
import { motion } from "framer-motion";

import One from "../assets/1.webp";
import Two from "../assets/2.webp";
import Three from "../assets/3.webp";
import ImgPlaceholderFour from "../assets/1.webp";
import ImgPlaceholderFive from "../assets/2.webp";
import ImgPlaceholderSix from "../assets/3.webp";

export default function Services() {
  useEffect(() => {}, []);

  const packages = [
    {
      title: (
        <span className="inline-flex items-center gap-3 font-medium text-gray-900">
          <Rocket className="text-indigo-600 w-7 h-7" />
          Just Get Me Online
        </span>
      ),
      bgColor: "bg-indigo-50",
      image: One,
      animation: {
        initial: { opacity: 0, y: 60, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
      },
      faqItems: [
        {
          question: "Tell me more",
          answer:
            "This is the perfect package for anyone who needs a quick, good-looking website without the overwhelm. You get everything you need to launch — nothing you don’t.",
        },
        {
          question: "Who is it for?",
          answer: [
            "Service providers (coaches, consultants, stylists)",
            "Small business owners",
            "Freelancers",
            "Creatives or portfolio owners",
            "Anyone who says, “I just need to be online ASAP.”",
          ],
        },
        {
          question: "What's included?",
          answer: [
            "1–3 page responsive website (e.g., Home, About, Contact)",
            "Mobile-friendly design",
            "Custom colors and branding",
            "Contact form or booking link",
            "Social media integration",
            "Basic SEO setup",
            "Domain & hosting guidance (if needed)",
            "Add-ons like blog, store, or extra pages available at an additional cost.",
          ],
        },
        {
          question: "Investment",
          answer: "Starts at $250 (Timeline: 5–7 business days)",
        },
      ],
      description:
        "A simple, clean website for when you just need to be online — fast.",
    },
    {
      title: (
        <span className="inline-flex items-center gap-3 font-medium text-gray-900">
          <Brush className="text-rose-500 w-7 h-7" />
          Website Glow-Up
        </span>
      ),
      bgColor: "bg-rose-50",
      image: Two,
      animation: {
        initial: { opacity: 0, y: 60, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
      },
      faqItems: [
        {
          question: "Tell me more",
          answer:
            "Think of it like a digital makeover. We take your existing website and refresh the design, improve user experience, and align it with your current branding and goals.",
        },
        {
          question: "Who is it for?",
          answer: [
            "Business owners with an outdated site",
            "Creatives or freelancers ready for a rebrand",
            "Anyone with a DIY site that needs a professional touch",
            "Entrepreneurs who want to improve client experience",
          ],
        },
        {
          question: "What's included?",
          answer: [
            "Full homepage redesign",
            "Rebrand with updated colors, fonts, and layout",
            "3–5 refreshed pages (Home, About, Services, Contact, etc.)",
            "Enhanced mobile responsiveness",
            "Improved navigation and user flow",
            "Call-to-action optimization",
            "Social media and booking/contact integration",
            "Basic SEO refresh",
            "Optional: Blog layout update, portfolio design, or testimonials showcase",
          ],
        },
        {
          question: "Investment",
          answer: "Starts at $450 (Timeline: 7–10 business days)",
        },
      ],
      description:
        "Give your existing site a fresh, strategic new look you’ll love.",
    },
    {
      title: (
        <span className="inline-flex items-center gap-3 font-semibold text-gray-900">
          <Sparkles className="text-teal-500 w-7 h-7" />
          One-Day Website
        </span>
      ),
      bgColor: "bg-teal-50",
      image: Three,
      animation: {
        initial: { opacity: 0, y: 60, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
      },
      faqItems: [
        {
          question: "Tell me more",
          answer:
            "This is a VIP intensive: one full day dedicated to building your custom website. We’ll collaborate ahead of time to prepare all content and assets, then build and launch it in one focused day.",
        },
        {
          question: "Who is it for?",
          answer: [
            "Coaches, consultants, creatives",
            "Small business owners in a hurry",
            "Launching a new product/service",
            "Rebranding and need a fast turnaround",
            "Anyone who values speed + quality",
          ],
        },
        {
          question: "What's included?",
          answer: [
            "Prep call to organize content and assets",
            "3–5 page responsive website",
            "Mobile-optimized design",
            "Your branding: fonts, colors, logo",
            "Contact/booking form setup",
            "Basic SEO setup",
            "Social media + email integrations",
            "Launch support on the same day",
            "7 days of post-launch support",
          ],
        },
        {
          question: "Investment",
          answer: "Flat rate: $650 (Includes prep + build day)",
        },
      ],
      description: "A premium one-day build experience to get you live fast.",
    },
    {
      title: (
        <span className="inline-flex items-center gap-3 font-semibold text-gray-900">
          <ShoppingCart className="text-emerald-600 w-7 h-7" />
          The Shop & Sell
        </span>
      ),
      bgColor: "bg-emerald-50",
      image: ImgPlaceholderFour,
      animation: {
        initial: { opacity: 0, y: 60, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
      },
      faqItems: [
        {
          question: "Tell me more",
          answer:
            "Whether you're selling physical products, digital goods, or both — this package helps you set up a fully integrated online storefront.",
        },
        {
          question: "Who is it for?",
          answer: [
            "Small business owners (fashion, beauty, home goods, etc.)",
            "Digital product sellers (ebooks, templates, courses)",
            "Handmade or custom goods creators",
            "Instagram sellers ready to go pro",
            "First-time store owners looking for a seamless start",
          ],
        },
        {
          question: "What's included?",
          answer: [
            "E-commerce website with up to 10 products",
            "Product upload with images, pricing, & descriptions",
            "Shopping cart + secure checkout",
            "Payment gateway setup (Paystack, Stripe, PayPal, etc.)",
            "Mobile-optimized design",
            "Order confirmation & customer email setup",
            "Shipping/delivery options setup",
            "Basic SEO + store policies pages",
            "Admin dashboard tutorial",
          ],
        },
        {
          question: "Investment",
          answer: "Starts at $600 (Timeline: 10–14 business days)",
        },
      ],
      description:
        "Everything you need to start selling online — beautifully and professionally.",
    },
    {
      title: (
        <span className="inline-flex items-center gap-3 font-semibold text-gray-900">
          <ShieldCheck className="text-orange-500 w-7 h-7" />
          Do It All for Me
        </span>
      ),
      bgColor: "bg-orange-50",
      image: ImgPlaceholderFive,
      animation: {
        initial: { opacity: 0, y: 60, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
      },
      faqItems: [
        {
          question: "Tell me more",
          answer:
            "This is a done-for-you brand + website package that includes strategy, design, and setup. From your logo to your launch, we handle it all — no scattered freelancers, no DIY stress.",
        },
        {
          question: "Who is it for?",
          answer: [
            "New businesses ready for a strong first impression",
            "Entrepreneurs who want it all handled",
            "Founders launching a rebrand or full revamp",
            "Creatives and coaches needing both brand and site setup",
          ],
        },
        {
          question: "What's included?",
          answer: [
            "Logo design + brand guide",
            "Custom 5–7 page website",
            "Copywriting or copy polish",
            "Email & social integration",
            "SEO setup",
            "Blog or portfolio setup (optional)",
            "Launch graphics + support",
            "2 weeks of post-launch support",
          ],
        },
        {
          question: "Investment",
          answer:
            "Starts at $1,200 (Timeline: 3–4 weeks) – Payment plans available",
        },
      ],
      description:
        "Your full online presence handled from start to finish — so you don’t have to lift a finger.",
    },
    {
      title: (
        <span className="inline-flex items-center gap-3 font-semibold text-gray-900">
          <Repeat className="text-fuchsia-600 w-7 h-7" />
          Keep It Running
        </span>
      ),
      bgColor: "bg-fuchsia-50",
      image: ImgPlaceholderSix,
      animation: {
        initial: { opacity: 0, y: 60, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
      },
      faqItems: [
        {
          question: "Tell me more",
          answer:
            "Websites need regular care to stay fresh, secure, and functional. This gives you peace of mind knowing someone’s keeping things running in the background.",
        },
        {
          question: "Who is it for?",
          answer: [
            "Business owners with live websites",
            "Non-techy creatives who don’t want to 'break' anything",
            "Entrepreneurs who need regular updates or help",
            "Anyone who wants a pro on standby without hiring full-time",
          ],
        },
        {
          question: "What's included?",
          answer: [
            "Monthly maintenance",
            "Security checks + backup monitoring",
            "Plugin/theme updates",
            "Minor content edits",
            "Uptime monitoring",
            "Monthly report",
            "Priority response for small fixes",
          ],
        },
        {
          question: "Investment",
          answer: "$80/month or $220/quarter – Cancel anytime",
        },
      ],
      description:
        "Ongoing care and support to keep your website running beautifully.",
    },
  ];

  const renderAnswer = (answer, question) => {
    const listQuestions = ["Who is it for?", "What's included?"];
    if (listQuestions.includes(question)) {
      if (typeof answer === "string") {
        answer = [answer];
      } else if (!Array.isArray(answer)) {
        answer = [String(answer)];
      }
    }
    if (Array.isArray(answer)) {
      return (
        <ul className="list-disc list-inside space-y-2 text-gray-700 font-light">
          {answer.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    }
    return <span className="text-gray-700 font-light">{answer}</span>;
  };

  const RenderedServiceCard = ({ animation, ...props }) => (
    <motion.div
      initial={animation.initial}
      whileInView={animation.animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: props["data-aos-delay"] / 1000,
      }}
      className="h-full"
    >
      <ServiceCard
        {...props}
        faqItems={props.faqItems.map((faq) => ({
          ...faq,
          answer: renderAnswer(faq.answer, faq.question),
        }))}
      />
    </motion.div>
  );

  return (
    <>
      <Navbar />
      <section className="relative px-6 pt-32 md:pt-52 -pb-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 top-10 left-10 animate-blob"></div>
          <div className="absolute w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 bottom-20 right-20 animate-blob animation-delay-2000"></div>
          <div className="absolute w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 top-80 right-0 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 mb-12">
          <motion.h2
            className="text-3xl leading-tight md:text-7xl font-bold text-gray-900 tracking-tighter"
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Need a{" "}
            <span className="text-transparent bg-clip-text bg-brand-primary">
              {" "}
              Website?
            </span>
          </motion.h2>
          <motion.p
            className="text-base leading-normal md:text-2xl text-gray-800 font-light mt-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            I offer a range of services to cater for brands at all stages of
            their journey. Can’t find something that is quite right? I am always
            happy to provide a bespoke quote tailored to you, just leave a
            comment in the enquiry form and I will be in touch. Check out my
            services!
          </motion.p>
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          >
            <ArrowRight className="w-16 h-16 text-brand-primary animate-bounce-slow" />
          </motion.div>
        </div>
      </section>

      <div className="min-h-screen bg-white py-20">
        <section className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
            {packages.map((pkg, idx) => (
              <RenderedServiceCard
                key={idx}
                title={pkg.title}
                bgColor={pkg.bgColor}
                image={pkg.image}
                faqItems={pkg.faqItems}
                animation={pkg.animation}
                description={pkg.description}
                data-aos-delay={idx * 150}
              />
            ))}
          </div>
        </section>
      </div>
      <ConsultationSection />
      <TestimonialsSection />
      <Footer />

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.2, 1);
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s infinite ease-in-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
}
