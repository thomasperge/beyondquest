import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Button from '../../components/button/button.js';
import Heading from '../../components/heading/heading.js';
import { useIonRouter } from '@ionic/react';
import './login.css'

const LoginPage: React.FC = () => {
  const navigate = useIonRouter();

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container">
          hello
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
