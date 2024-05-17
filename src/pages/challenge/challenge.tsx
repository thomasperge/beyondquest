import { useState } from 'react';
import MyChallengeComponent from '../../components/challenge/mychallenge/mychallenge.js';
import FriendsChallengeComponent from '../../components/challenge/friendschallenge/friendschallenge.js';
import './challenge.css'
import withUserData from '../../services/useUserData.js';

const Challenge: React.FC = () => {
  const [displayedComponent, setDisplayedComponent] = useState<string | null>('myChallenge');

  const showComponent = (componentName: string) => {
    setDisplayedComponent(componentName);
  };

  return (
    <div className="challenge-container">
      <div className='ion-padding-vertical challenge-component-container'>
        <MyChallengeComponent />
      </div>

     
    </div>
  );
};

export default withUserData(Challenge);
