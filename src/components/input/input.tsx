import './input.css';

interface ContainerProps {
  text: string;
  type: string;
  width?: string;
  height?: string;
  color?: string;
  background?: string;
  border?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: React.FC<ContainerProps> = ({ onChange, ...styles }) => {
  return (
    <input onChange={onChange} className={styles.className} type={styles.type} placeholder={styles.text} style={styles} />
  );
};

export default InputComponent;