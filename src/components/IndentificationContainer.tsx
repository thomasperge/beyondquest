import './IndentificationContainer.css';

interface ContainerProps { }

const IndentificationContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      {/* Title */}
      <div className="titleArea">
        <div className="title">BeyondQuest</div>
        <div className="description">Boost your efficiency and achieve your goals faster</div>
      </div>

      {/* Button */}
      <div className="buttonArea">
        <div className="get-started-button flex">Get Started</div>
        <div className="already-account-button flex">I already have an account</div>
      </div>
    </div>
  );
};

export default IndentificationContainer;
