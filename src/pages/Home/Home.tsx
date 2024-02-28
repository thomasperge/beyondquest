import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import IndentificationContainer from '../../components/IndentificationContainer';
import './Home.module.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>BeyondQuest</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">BeyondQuest</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IndentificationContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
