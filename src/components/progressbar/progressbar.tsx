import './progressbar.css';

interface ContainerProps {
  width: string;
  height: string;
  percentage: string;
  color: string;
  backgroundColor?: string
}

const ProgressBarComponent: React.FC<ContainerProps> = ({ ...styles }) => {
  return (
    <div className="containerProgressBar" style={{
      width: styles.width,
      height: styles.height,
      backgroundColor: styles.backgroundColor
    }}>
      <div className="progressbar" style={{
        width: styles.percentage,
        height: styles.height,
        backgroundColor: styles.color
      }}>
      </div>
    </div>
  );
};

export default ProgressBarComponent;