import { IonContent, IonFooter, IonPage } from '@ionic/react';
import './signin.css'
import Navbar from '../../components/navbar/navbar.js';

const LoginPage: React.FC = () => {

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container">
          Login
        </div>
      </IonContent>
      <IonFooter>
        <Navbar />
      </IonFooter>
    </IonPage>
  );
};

export default LoginPage;
