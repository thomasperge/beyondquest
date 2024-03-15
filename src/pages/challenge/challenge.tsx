import { IonContent, IonFooter, IonPage } from '@ionic/react';
import { useState } from 'react';
import Navbar from '../../components/navbar/navbar.js';
import ToolBarComponent from '../../components/toolbar/toolbar.js';
import './challenge.css'
import ButtonComponent from '../../components/button/button.js';

const Challenge: React.FC = () => {
  const [displayedComponent, setDisplayedComponent] = useState<string | null>('myChallenge');

  const showComponent = (componentName: string) => {
    setDisplayedComponent(componentName);
  };

  const MyChallengeComponent: React.FC = () => {
    return (
      <div className="myChallengeContent">
        <h1>My Challenge</h1>
      </div>
    );
  };

  const FriendsChallengeComponent: React.FC = () => {
    return (
      <div>
        <h1>Friend's Challenge</h1>
      </div>
    );
  };

  return (
    <IonPage>
      <ToolBarComponent />

      <IonContent>
        {displayedComponent === 'myChallenge' && <MyChallengeComponent />}
        {displayedComponent === 'friendsChallenge' && <FriendsChallengeComponent />}
      </IonContent>

      <IonFooter>
        <div className='challengeContainer'>
          <ButtonComponent 
            text='My Challenge'
            width='50%'
            fontSize='1rem'
            fontWeight='600'
            padding='.6rem .15rem'
            className={displayedComponent === 'myChallenge' ? 'selected' : 'not-selected'}
            onClick={() => showComponent('myChallenge')}
          />
          <ButtonComponent 
            text="Friend's Challenge"
            width='50%'
            fontSize='1rem'
            fontWeight='600'
            padding='.6rem .15rem'
            className={displayedComponent === 'friendsChallenge' ? 'selected' : 'not-selected'}
            onClick={() => showComponent('friendsChallenge')}
          />
        </div>
        <Navbar />
      </IonFooter>
    </IonPage>
  );
};

export default Challenge;
