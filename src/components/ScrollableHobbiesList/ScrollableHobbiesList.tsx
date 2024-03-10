import React, { useEffect, useState } from "react";
import { IonContent } from "@ionic/react";
import HobbiesCategoriesComponent from "../HobbiesCategories/HobbiesCategories.js";
import "./ScrollableHobbiesList.css";

interface ScrollableHobbiesListProps {
  categories: string[];
}

const ScrollableHobbiesList: React.FC<ScrollableHobbiesListProps> = ({
  categories,
}) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(category)) {
        return prevSelected.filter((c) => c !== category);
      } else {
        return [...prevSelected, category];
      }
    });
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
