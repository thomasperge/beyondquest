import React from 'react';
import { IonContent, IonFooter, IonPage } from '@ionic/react';
import Navbar from '../navbar/navbar';

interface ContainerProps {
  children: any,
  classname?: string,
}

const LayoutWithNav: React.FC<ContainerProps> = ({ children, classname }) => {
  return (
    <IonPage>
      <IonContent fullscreen className={classname}>
        {children}
      </IonContent >
      <IonFooter>
        <Navbar />
      </IonFooter>
    </IonPage>
  );
};

export default LayoutWithNav;
