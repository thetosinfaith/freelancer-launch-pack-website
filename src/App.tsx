import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio/Portfolio";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Services from "./pages/Services";
import SpeakingPortfolio from "./pages/SpeakingPortfolio";
import PortfolioDetail from "./pages/Portfolio/PortfolioDetail";
import Links from "./pages/Links";
import Admin from "./pages/Admin";
import UGCPortfolio from "./pages/UGCPortfolio";
import { useSiteContent } from "./hooks/use-site-content";
import SerenithPortfolio from "./pages/SerenithPortfolio";

const queryClient = new QueryClient();

const App = () => {
  const content = useSiteContent();
  const { headingFontUrl, bodyFontUrl } = content.theme;

  return (
  <QueryClientProvider client={queryClient}>
    <style>{`
      ${headingFontUrl ? `@font-face { font-family: "SiteHeading"; src: url("${headingFontUrl}"); font-display: swap; }` : ""}
      ${bodyFontUrl ? `@font-face { font-family: "SiteBody"; src: url("${bodyFontUrl}"); font-display: swap; }` : ""}
      :root {
        --site-heading-font: ${headingFontUrl ? '"SiteHeading"' : "inherit"};
        --site-body-font: ${bodyFontUrl ? '"SiteBody"' : "inherit"};
        --site-primary: ${content.theme.primaryColor};
        --site-accent: ${content.theme.accentColor};
      }
      body, button, input, textarea, select {
        font-family: var(--site-body-font);
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: var(--site-heading-font);
      }
    `}</style>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/speaking" element={<SpeakingPortfolio />} />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<PortfolioDetail />} />

          <Route path="/booking" element={<Booking />} />
          <Route path="/links" element={<Links />} />
          <Route path="/ugc" element={<UGCPortfolio />} />
          <Route path="/serenith" element={<SerenithPortfolio />} />
          <Route path="/admin" element={<Admin />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
