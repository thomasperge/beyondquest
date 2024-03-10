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
  onClick?: () => void;
}

const ButtonComponent: React.FC<ContainerProps> = ({ text, onClick, ...styles }) => {
  return (
    <button style={styles} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonComponent;