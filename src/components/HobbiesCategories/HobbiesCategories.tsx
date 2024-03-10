import './HobbiesCategories.css';

interface ContainerProps {
  text: string;
  width?: string;
  height?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const HobbiesCategoriesComponent: React.FC<{
  text: string;
  isSelected?: boolean;
  onClick?: () => void;
}> = ({ text, isSelected = false, onClick }) => {
  return (
    <button
      className={`hobbies-categorie ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default HobbiesCategoriesComponent;