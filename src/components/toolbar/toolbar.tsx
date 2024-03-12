import { IonToolbar, IonTitle } from '@ionic/react';

const ToolBarComponent: React.FC = () => {
  return (
    <IonToolbar style={{ '--background': 'var(--ion-color-800)', '--min-height': '50px' }}>
      <IonTitle style={{ textAlign: 'center', color: 'white', fontSize: '1.1rem', fontWeight: '500' }}>BeyondQuest</IonTitle>
    </IonToolbar>
  );
};

export default ToolBarComponent;