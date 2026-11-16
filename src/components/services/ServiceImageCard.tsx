interface ServiceImageCardProps {
  image: string;
  title: string;
  bgColor: string;
}

export const ServiceImageCard = ({
  image,
  title,
  bgColor,
}: ServiceImageCardProps) => {
  return (
    <div className="relative mb-6">
      <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={`inline-block px-6 py-2 rounded-full text-black font-medium ${bgColor}`}
      >
        {title}
      </div>
    </div>
  );
};
