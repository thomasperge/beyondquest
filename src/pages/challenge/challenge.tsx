import MyChallengeComponent from '../../components/challenge/mychallenge/mychallenge.js';
import './challenge.css'

const Challenge: React.FC = () => {

  return (
    <div className="challenge-container">
      <div className='ion-padding-vertical challenge-component-container'>
        <MyChallengeComponent />
      </div>

    
    </div>
  );
};

export default Challenge;
