import './heading.css';

interface ContainerProps {
  text: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string
}

const HeadingComponent: React.FC<ContainerProps> = ({ text, ...styles }) => {
  return (
    <div style={styles}>
      {text}
    </div>
  );
};

export default HeadingComponent;