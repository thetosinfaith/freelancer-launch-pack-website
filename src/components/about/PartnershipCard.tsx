import React from "react";

interface PartnershipCardProps {
  title: string;
  points: string[];
  buttonText: string;
  isGoodFit: boolean;
}

const PartnershipCard: React.FC<PartnershipCardProps> = ({
  title,
  points,
  buttonText,
  isGoodFit,
}) => {
  const cardClasses = isGoodFit
    ? "bg-white border-2 border-transparent hover:border-purple-400"
    : "bg-white border-2 border-transparent hover:border-gray-300";

  const titleClasses = isGoodFit ? "text-purple-600" : "text-gray-800";

  const buttonClasses = isGoodFit
    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 shadow-lg"
    : "border-2 border-gray-300 text-gray-700 hover:bg-gray-100";

  return (
    <div
      className={`flex flex-col p-6 sm:p-8 rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${cardClasses}`}
    >
      <h3
        className={`text-2xl sm:text-3xl font-extrabold mb-6 ${titleClasses}`}
      >
        {title}
      </h3>
      <ul className="list-none space-y-4 flex-grow mb-8">
        {points.map((point, index) => (
          <li key={index} className="flex items-start text-gray-700">
            {isGoodFit ? (
              <span className="text-purple-500 mr-3 text-xl flex-shrink-0">
                ✓
              </span>
            ) : (
              <span className="text-red-400 mr-3 text-xl flex-shrink-0">✗</span>
            )}
            <p className="flex-grow leading-relaxed">{point}</p>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 px-6 rounded-full text-lg font-bold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 ${
          isGoodFit ? "focus:ring-purple-400" : "focus:ring-gray-300"
        } ${buttonClasses}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PartnershipCard;
