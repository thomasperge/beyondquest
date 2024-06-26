import './goalItems.css';

interface ContainerProps {
  title: string;
  subtitle: string;
  svg: string;
  bgColor: string;
}

const GoalitemsComponent: React.FC<ContainerProps> = ({ title, subtitle, svg, bgColor }) => {
  return (
    <div className="goalitems-items " style={{background: bgColor}}>
      {/* Logo */}
      <div className="goalitems-items-logo">
        <img src={svg} alt=""  />
      </div>
      {/* Text */}
      <div className="goalitems-items-text column">
        <div className="goalitems-items-title">
          {title}
        </div>
        <div className="goalitems-items-subtitle">
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default GoalitemsComponent;