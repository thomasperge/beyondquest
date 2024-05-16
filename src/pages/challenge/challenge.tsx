import { useState } from 'react';
import MyChallengeComponent from '../../components/challenge/mychallenge/mychallenge.js';
import ButtonComponent from '../../components/button/button.js';
import FriendsChallengeComponent from '../../components/challenge/friendschallenge/friendschallenge.js';
import withUserData from '../../services/useUserData.js';
import './challenge.css'

const Challenge: React.FC = () => {
  const [displayedComponent, setDisplayedComponent] = useState<string | null>('myChallenge');

  const showComponent = (componentName: string) => {
    setDisplayedComponent(componentName);
  };

  return (
    <div className="challenge-container">
      <div className='ion-padding-vertical challenge-component-container'>
        {displayedComponent === 'myChallenge' && <MyChallengeComponent />}
        {displayedComponent === 'friendsChallenge' && <FriendsChallengeComponent />}
      </div>

      <div className='challenge-button-container'>
        <ButtonComponent
          text='My Challenge'
          width='50%'
          fontSize='.95rem'
          fontWeight='600'
          padding='.6rem .15rem'
          className={displayedComponent === 'myChallenge' ? 'selected' : 'not-selected'}
          onClick={() => showComponent('myChallenge')}
        />
        <ButtonComponent
          text="Friend's Challenge"
          width='50%'
          fontSize='.95rem'
          fontWeight='600'
          padding='.6rem .15rem'
          className={displayedComponent === 'friendsChallenge' ? 'selected' : 'not-selected'}
          onClick={() => showComponent('friendsChallenge')}
        />
      </div>
    </div>
  );
};

export default withUserData(Challenge);
