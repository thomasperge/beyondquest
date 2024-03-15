import './goalItems.css';

interface ContainerProps {
  title: string;
  subtitle: string;
  svg: string;
}

const FriendsChallengeComponent: React.FC<ContainerProps> = ({ title, subtitle, svg }) => {
  return (
    <div className="goalitems-items flex">
      {/* Logo */}
      <div className="goalitems-items-logo">
        <img src={svg} alt="" style={{width: "35px", height: "70%"}} />
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

export default FriendsChallengeComponent;