import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  TwitterIcon as TikTok,
  Linkedin,
  Youtube,
  MapPin,
} from "lucide-react";

export default function SocialLinks() {
  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com", icon: <Facebook /> },
    {
      name: "Instagram",
      href: "https://www.instagram.com",
      icon: <Instagram />,
    },
    { name: "LinkedIn", href: "https://www.linkedin.com", icon: <Linkedin /> },
    { name: "Youtube", href: "https://www.youtube.com", icon: <Youtube /> },
  ];

  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          to={social.href}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
          aria-label={social.name}
        >
          <span className="text-sm">{social.icon}</span>
        </Link>
      ))}
    </div>
  );
}
