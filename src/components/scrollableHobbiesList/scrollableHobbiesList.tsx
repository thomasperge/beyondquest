import React, { useEffect } from "react";
import HobbiesCategoriesComponent from "../hobbiesCategories/hobbiesCategories.js";
import "./scrollableHobbiesList.css";

interface ScrollableHobbiesListProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryClick: (category: string) => void;
}

const ScrollableHobbiesList: React.FC<ScrollableHobbiesListProps> = ({
  categories,
  selectedCategories,
  onCategoryClick
}) => {

  const handleCategoryClick = (category: string) => {
    if (onCategoryClick) {
      onCategoryClick(category);
    }
  };

  useEffect(() => {
    console.log(selectedCategories);
  }, [selectedCategories]);

  return (
    <div className="column scrollable-hobbies-list" style={{ gap: "1rem" }}>
      {categories.map((category) => (
        <HobbiesCategoriesComponent
          key={category}
          text={category}
          isSelected={selectedCategories.includes(category)}
          onClick={() => handleCategoryClick(category)}
        />
      ))}
    </div>
  );
};

export default ScrollableHobbiesList;