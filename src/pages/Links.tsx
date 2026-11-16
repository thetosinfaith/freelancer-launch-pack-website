import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Link } from "react-router-dom";
import { MoreVertical, ExternalLink, Instagram, Linkedin, Mail, Facebook, X, Link as LinkIcon, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";

interface Config {
  title: string;
  subtitle: string;
  backToWebsiteText: string;
  backToWebsiteUrl?: string;
  hero: { image: string; alt: string; position: string };
  colors: { primary: string; background: string; shadowMuted: string };
  links: Array<{ text: string; url: string; primary: boolean; icon: string | null; subtext?: string; imageIcon?: string }>;
  socials?: { tiktok?: string; instagram?: string; linkedin?: string; mail?: string; facebook?: string; x?: string };
  navbar?: { logo: string; links: Array<{ name: string; path: string }> };
}

const Links: React.FC = () => {
  const [config, setConfig] = useState<Config | null>(null);
  const [loading, setLoading] = useState(true);
  const [shareModalData, setShareModalData] = useState<{ url: string; text: string; subtext?: string } | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const isPreview = new URLSearchParams(window.location.search).get('preview') === 'true';
        const slug = isPreview ? 'links-page-draft' : 'links-page';

        const { data } = await supabase
          .from('page_configs')
          .select('config')
          .eq('slug', slug)
          .single();
        if (data) setConfig(data.config);
      } catch (error) {
        console.error("Error fetching links config:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchConfig();
  }, []);

  const data = config;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto flex items-center lg:items-start justify-center p-4 md:p-8 font-sans relative overflow-hidden pt-24 lg:pt-32 pb-4">
      <div className="relative w-full max-w-[420px] bg-gradient-to-b from-[#f9d8e5] via-[#ffcce6] to-[#ffb3d9] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col items-center pb-8 min-h-0">

        {/* Top Action Buttons */}
        <div className="absolute top-4 left-4 z-20 w-8 h-8 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/70 transition-colors">
          <span className="text-sm font-bold">✹</span>
        </div>
        <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/70 transition-colors">
          <ExternalLink size={16} />
        </div>

        {/* Hero Image */}
       <div className="w-full h-80 relative">
  <div className="w-full h-full bg-cover bg-top" style={{ backgroundImage: `url(${data?.hero?.image})`, backgroundPosition: data?.hero?.position }} />
  {/* Gradient fade at bottom of image */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#ffcce6] via-[#ffcce6]/80 to-transparent" />
</div>

        {/* Profile Info */}
        <div className="w-full px-6 flex flex-col items-center text-center -mt-16 relative z-10">
          <h1
            className="text-3xl sm:text-4xl font-black text-rouge-reception uppercase tracking-tighter mb-2"
            style={{
              fontFamily: '"Unbounded", sans-serif',
              fontWeight: 900,
            }}
          >
            {data?.title}
          </h1>
          <p className="text-sm font-medium text-gray-900 leading-relaxed mb-6 max-w-[320px]">
            {data?.subtitle}
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-6">
            <a href={data?.socials?.tiktok || "#"} target="_blank" rel="noopener noreferrer" className="text-black hover:scale-110 transition-transform">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
            </a>
            <a href={data?.socials?.instagram} target="_blank" rel="noopener noreferrer" className="text-black hover:scale-110 transition-transform"><Instagram size={20} /></a>
            <a href={data?.socials?.linkedin} target="_blank" rel="noopener noreferrer" className="text-black hover:scale-110 transition-transform"><Linkedin size={20} /></a>
            <a href={data?.socials?.mail ? `mailto:${data?.socials?.mail}` : undefined} className="text-black hover:scale-110 transition-transform"><Mail size={20} /></a>
            <a href={data?.socials?.facebook} target="_blank" rel="noopener noreferrer" className="text-black hover:scale-110 transition-transform"><Facebook size={20} /></a>
            <a href={data?.socials?.x} target="_blank" rel="noopener noreferrer" className="text-black hover:scale-110 transition-transform">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        {/* Links Container */}
        <div className="w-full px-4 space-y-3 z-10">
          {data?.links?.map((link, index) => {
            const isExternal = link.url?.startsWith('http');
            const className = "relative flex items-center justify-center w-full min-h-[64px] py-3 pl-16 pr-12 bg-white rounded-full shadow-sm hover:scale-[1.02] transition-transform duration-200 group";
            const body = <>
                {link.imageIcon && (
                  <div className="absolute left-2 w-12 h-12 rounded-full overflow-hidden flex items-center justify-center p-0.5 shadow-sm">
                    <img
                      src={link.imageIcon}
                      alt="Icon"
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}

                <div className="flex flex-col items-center w-full">
                  <span className="text-[13px] sm:text-[14px] font-bold text-gray-900 text-center leading-tight">
                    {link.text}
                  </span>
                  {link.subtext && (
                    <span className="text-xs text-gray-500 mt-1">{link.subtext}</span>
                  )}
                </div>

                <div
                  className="absolute right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors bg-transparent rounded-full hover:bg-gray-100 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShareModalData({ url: link.url, text: link.text, subtext: link.subtext });
                  }}
                >
                  <MoreVertical size={18} />
                </div>
              </>;
            return isExternal
              ? <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={className}>{body}</a>
              : <Link key={index} to={link.url || "#"} className={className}>{body}</Link>;
          })}
        </div>

        {/* Footer Link */}
        <div className="mt-10 mb-6 z-10">
          {data?.backToWebsiteUrl?.startsWith('http') ? (
            <a href={data?.backToWebsiteUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white rounded-full text-[13px] font-bold text-gray-800 shadow-sm hover:scale-[1.02] transition-transform inline-block">{data?.backToWebsiteText}</a>
          ) : (
            <Link to={data?.backToWebsiteUrl || "/"} className="px-6 py-3 bg-white rounded-full text-[13px] font-bold text-gray-800 shadow-sm hover:scale-[1.02] transition-transform">{data?.backToWebsiteText}</Link>
          )}
        </div>

        {/* Footer Text */}
        <div className="text-[11px] font-medium text-gray-600 flex gap-2 z-10">
          <span className="cursor-pointer hover:underline">Cookie Preferences</span> •
          <span className="cursor-pointer hover:underline">Report</span> •
          <span className="cursor-pointer hover:underline">Privacy</span> •
          <span className="cursor-pointer hover:underline">Explore</span>
        </div>
      </div>
      
      {/* Desktop QR code - simulated */}
      <div className="hidden xl:flex flex-col items-center absolute right-16 top-1/2 -translate-y-1/2">
         <span className="text-[12px] text-gray-800 mb-3 font-bold tracking-wide">View on mobile</span>
         <div className="w-32 h-32 bg-white rounded-xl p-3 shadow-xl flex items-center justify-center">
           <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com" alt="QR Code" className="w-full h-full object-contain opacity-90" />
         </div>
      </div>

      </main>

      {/* Share Modal */}
      {shareModalData && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-sm rounded-[2rem] p-6 animate-in slide-in-from-bottom-10 sm:zoom-in-95 relative shadow-2xl">
            
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[15px] font-bold text-gray-900 mx-auto">Share link</h3>
              <button onClick={() => setShareModalData(null)} className="absolute right-6 top-6 text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full p-1 transition-colors">
                <X size={16} />
              </button>
            </div>

            {/* Link Details */}
            <div className="text-center mb-10">
              <h4 className="font-black text-[17px] uppercase mb-1 leading-tight tracking-tighter" style={{ fontFamily: '"Unbounded", sans-serif' }}>
                {shareModalData.text}
              </h4>
              <p className="text-[12px] text-gray-500 truncate px-4">{shareModalData.url}</p>
            </div>

            {/* Share Buttons Row */}
            <div className="flex justify-between items-center px-1 mb-2">
              <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => { navigator.clipboard.writeText(shareModalData.url); alert('Copied!'); }}>
                <div className="w-12 h-12 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full flex items-center justify-center text-gray-600"><LinkIcon size={20}/></div>
                <span className="text-[10px] text-gray-700 font-medium">Copy link</span>
              </div> {/* Social media brand colors are kept as is, as requested not to change design and these are external brand identities. */}
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareModalData.url)}&text=${encodeURIComponent(shareModalData.text)}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-black text-white hover:bg-gray-900 transition-colors rounded-full flex items-center justify-center font-bold text-lg">X</div>
                <span className="text-[10px] text-gray-700 font-medium">X</span>
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareModalData.url)}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-[#1877F2] text-white hover:bg-[#1865ce] transition-colors rounded-full flex items-center justify-center"><Facebook size={24} fill="currentColor" strokeWidth={0}/></div>
                <span className="text-[10px] text-gray-700 font-medium">Facebook</span>
              </a>
              <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareModalData.text + ' ' + shareModalData.url)}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-[#25D366] text-white hover:bg-[#20b958] transition-colors rounded-full flex items-center justify-center"><MessageCircle size={24} fill="currentColor" strokeWidth={0}/></div>
                <span className="text-[10px] text-gray-700 font-medium">WhatsApp</span>
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareModalData.url)}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-[#0A66C2] text-white hover:bg-[#08529e] transition-colors rounded-full flex items-center justify-center"><Linkedin size={20} fill="currentColor" strokeWidth={0}/></div>
                <span className="text-[10px] text-gray-700 font-medium">LinkedIn</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Links;
