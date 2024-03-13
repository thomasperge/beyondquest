import { IonContent, IonFooter, IonPage } from '@ionic/react';
import Navbar from '../../components/navbar/navbar.js';
import ToolBarComponent from '../../components/toolbar/toolbar.js';

const Challenge: React.FC = () => {

  return (
    <IonPage>
      <ToolBarComponent />
      
      <IonContent fullscreen>
        <div className="container">
          Challenge
        </div>
      </IonContent>
      
      <IonFooter>
        <Navbar />
      </IonFooter>
    </IonPage>
  );
};

export default Challenge;
