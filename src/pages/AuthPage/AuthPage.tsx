import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Button from '../../components/button/button.js';
import Heading from '../../components/heading/heading.js';
import { useIonRouter } from '@ionic/react';
import './AuthPage.css';

const AuthPage: React.FC = () => {
  const navigate = useIonRouter();

  return (
    <IonPage>
      <IonContent fullscreen>
        <div id="container">
          <div className="titleArea">
            {/* Title */}
            <Heading
              text="BeyondQuest"
              color="var(--ion-color-600)"
              fontSize="1.8rem"
              fontWeight="700"
            />

            {/* Subtitle */}
            <Heading
              text="Boost your efficiency and achieve your goals faster"
              color="var(--ion-color-dark)"
              fontSize="1.15rem"
              fontWeight="500"
              padding="0 2rem"
            />
          </div>

          <div className="buttonArea">
            {/* Get started */}
            <Button
              text="Get Started"
              width="90%"
              color="var(--ion-color-light)"
              fontSize="1.2rem"
              fontWeight="600"
              background="var(--ionc-gradient-400)"
              borderRadius="8px"
              padding=".5rem"
              onClick={() => navigate.push('/signup/informations', 'root', 'replace')}
            />

            {/* Already have an account */}
            <Button
              text="I already have an account"
              width="90%"
              color="var(--ion-color-dark)"
              fontSize="1.2rem"
              fontWeight="600"
              borderRadius="8px"
              background="transparent"
              border="2px solid var(--ion-color-500)"
              padding=".5rem"
              onClick={() => navigate.push('/signin', 'root', 'replace')}
            />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AuthPage;
