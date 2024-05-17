import './button.css';

interface ContainerProps {
  text: string;
  width?: string;
  height?: string;
  color?: string;
  background?: string;
  border?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
  className?: string;
  onClick?: () => void;
}

const ButtonComponent: React.FC<ContainerProps> = ({ text, onClick, ...styles }) => {
  return (
    <button className={styles.className} style={styles} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonComponent;