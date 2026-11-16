import { Link } from "react-router-dom";
import Mic from '../../../assets/mic.webp'

interface ResourcesCardProps {
  title: string;
  imageSrc: string;
  href: string;
}

function ResourcesCard({ title, imageSrc, href }: ResourcesCardProps) {
  return (
    <Link
      to={href}
      className="block mb-3 relative overflow-hidden rounded-xl group"
    >
      <div className="relative h-24 w-full overflow-hidden rounded-xl">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-300 z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
        <h3 className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-2xl font-bold z-20">
          {title}
        </h3>
      </div>
    </Link>
  );
}

export default function ResourcesDropdown() {
  return (
    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-lg p-4 z-50">
      <div className="absolute -top-2 left-4 w-4 h-4 bg-white rotate-45"></div>
      <ResourcesCard
        title="Podcast"
        imageSrc={Mic}
        href="/resources/skilled-trades"
      />
      <ResourcesCard
        title="Newsletter"
        imageSrc="/placeholder.svg?height=200&width=400"
        href="/resources/healthcare"
      />
      <ResourcesCard
        title="Our Blog"
        imageSrc="/placeholder.svg?height=200&width=400"
        href="/resources/stem"
      />
    </div>
  );
}