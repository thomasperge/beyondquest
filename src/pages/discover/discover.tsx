import { IonContent, IonFooter, IonPage } from '@ionic/react';
import Navbar from '../../components/navbar/navbar.js';
import ToolBarComponent from '../../components/toolbar/toolbar.js';

const Discover: React.FC = () => {

  return (
    <IonPage>
      <ToolBarComponent />
      
      <IonContent fullscreen>
        <div className="container">
          Discover
        </div>
      </IonContent>
      
      <IonFooter>
        <Navbar />
      </IonFooter>
    </IonPage>
  );
};

export default Discover;
