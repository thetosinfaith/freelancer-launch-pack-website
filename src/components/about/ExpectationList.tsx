import React from "react";
import ExpectationCard from "./ExpectationCard";

interface ListItem {
  text: string;
  borderColor?: string;
  customBgColor?: string;
  rotate?: number;
  position?: { top?: string; bottom?: string; left?: string; right?: string };
}

interface ExpectationListProps {
  title: string;
  items: (string | ListItem)[];
  isPositiveList: boolean;
}

const ExpectationList: React.FC<ExpectationListProps> = ({
  title,
  items,
  isPositiveList,
}) => {
  const headingItalicWord = isPositiveList ? "can expect" : "won't get";

  const alignClasses = isPositiveList
    ? "lg:items-end text-center lg:text-right"
    : "lg:items-start text-center lg:text-left";
  const justifyClasses = isPositiveList ? "lg:justify-end" : "lg:justify-start";

  return (
    <div
      className={`w-full lg:w-1/2 flex flex-col items-center ${alignClasses}`}
    >
      <h2 className="text-4xl font-serif text-gray-800 mb-12">
        What you <span className="italic font-normal">{headingItalicWord}</span>{" "}
        from me...
      </h2>
      <div
        className={`relative flex flex-wrap justify-center ${justifyClasses} gap-4 max-w-lg lg:max-w-none`}
      >
        {items.map((item, index) => {
          const itemData = typeof item === "string" ? { text: item } : item;

          const positionClasses =
            isPositiveList && itemData.position ? "absolute" : "";

          return (
            <div
              key={index}
              className={`${positionClasses} ${
                isPositiveList ? "" : "flex-shrink-0"
              }`}
              style={
                isPositiveList && itemData.position ? itemData.position : {}
              }
            >
              <ExpectationCard
                text={itemData.text}
                isPositive={isPositiveList}
                borderColor={itemData.borderColor}
                customBgColor={itemData.customBgColor}
                rotate={itemData.rotate}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpectationList;
