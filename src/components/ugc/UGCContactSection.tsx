import React, { useState } from 'react';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

interface FormData {
  name: string;
  message: string;
  order: string;
  email: string;
}

export const UGCContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    message: '',
    order: '',
    email: '',
  });

  const handlePackageSelect = (packageName: string) => {
    setFormData((prev) => ({ ...prev, order: packageName }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffc0d9] via-[#fffbf0] to-[#fffbf0] flex items-center justify-center p-6 md:p-12 font-sans">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-stretch gap-12">
        
        {/* Left Branding Section */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          {/* Main Title Stack */}
          <div className="relative mb-8">
            <h1 className="font-black text-6xl md:text-7xl lg:text-8xl text-[#2b2b2b] tracking-wider uppercase leading-tight font-serif">
              LET'S CREATE
            </h1>
            <span 
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 -rotate-6 text-6xl md:text-8xl text-[#ff7ebb] whitespace-nowrap pointer-events-none drop-shadow-sm"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Together
            </span>
          </div>

          {/* Pill Button */}
          <button 
            type="button" 
            className="mt-6 border-4 border-[#ff88cc] text-[#ff88cc] font-extrabold text-lg md:text-xl px-8 py-3 rounded-full tracking-wide hover:bg-[#ff88cc] hover:text-white transition-colors duration-200"
          >
            START A CONVERSATION
          </button>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-10 mb-4 text-[#2b2b2b]">
            <a href="#instagram" aria-label="Instagram" className="hover:text-[#ff88cc] transition-colors">
              <FaInstagram className="w-10 h-10" />
            </a>
            <a href="#youtube" aria-label="YouTube" className="hover:text-[#ff88cc] transition-colors">
              <FaYoutube className="w-10 h-10" />
            </a>
            <a href="#tiktok" aria-label="TikTok" className="hover:text-[#ff88cc] transition-colors">
              <FaTiktok className="w-9 h-9" />
            </a>
          </div>

          {/* Contact Email */}
          <p className="text-xl md:text-2xl font-extrabold text-[#2b2b2b]">
            valeriacreator@gmail.com
          </p>
        </div>

        {/* Right Form Section */}
        <div className="flex-[1.1] bg-[#fffdf5] p-8 md:p-10 rounded-2xl shadow-sm border border-[#f0eadc] w-full">
          <h2 className="text-3xl font-black text-[#2b2b2b] mb-6">
            Contact Me
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-[#333] mb-2">
                Your Name*
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-[#fffdf5] border border-[#c8c2b5] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff88cc]"
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-[#333] mb-2">
                Message*
              </label>
              <textarea
                id="message"
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-[#fffdf5] border border-[#c8c2b5] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff88cc] resize-y"
              />
            </div>

            {/* Package Selection */}
            <div>
              <label className="block text-sm font-bold text-[#333] mb-2">
                Your order*
              </label>
              <div className="flex flex-col gap-2.5">
                {['STARTER', 'GROWTH', 'PREMIUM'].map((pkg) => (
                  <button
                    key={pkg}
                    type="button"
                    onClick={() => handlePackageSelect(pkg)}
                    className={`w-full text-left px-5 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all ${
                      formData.order === pkg
                        ? 'bg-[#dfd7cb] border-2 border-[#ff66b2] text-[#2b2b2b]'
                        : 'bg-[#e6dfd3] border-2 border-transparent text-[#4a463d] hover:bg-[#ded7cb]'
                    }`}
                  >
                    {pkg}
                  </button>
                ))}
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-[#333] mb-2">
                Enter your E-mail*
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#fffdf5] border border-[#c8c2b5] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff88cc]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#ff88cc] hover:bg-[#ff66b2] text-[#2b2b2b] font-bold text-base py-4 rounded-full transition-colors duration-200 mt-2"
            >
              Submit Order
            </button>

            {/* Subtext */}
            <p className="text-center text-xs text-gray-500 mt-2">
              Your Canva profile name will be shared. Never submit passwords.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};