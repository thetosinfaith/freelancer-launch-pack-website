interface InstagramPostProps {
  src: string;
  alt: string;
}

export const InstagramPost = ({ src, alt }: InstagramPostProps) => {
  return (
    <div className="aspect-square rounded-lg overflow-hidden relative group cursor-pointer">
      <img
        src={src}
        alt={alt}
        width={300}
        height={300}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-200"></div>
    </div>
  );
};
