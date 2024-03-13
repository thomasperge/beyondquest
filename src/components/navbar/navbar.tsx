import React from 'react';
import { IonTabBar, IonTabButton, IonIcon } from '@ionic/react';
import { useLocation } from 'react-router-dom';
import { homeSharp, receiptSharp, cogSharp, playSharp, peopleSharp } from 'ionicons/icons';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <IonTabBar slot="bottom">
      <IonTabButton tab="friends" href="/friends" selected={location.pathname === '/friends'}>
        <IonIcon icon={peopleSharp} style={{ color: location.pathname === '/friends' ? 'var(--ion-color-600)' : '#ababab'}} size="medium" />
      </IonTabButton>

      <IonTabButton tab="challenge" href="/challenge" selected={location.pathname === '/challenge'}>
        <IonIcon icon={receiptSharp} style={{ color: location.pathname === '/challenge' ? 'var(--ion-color-600)' : '#ababab'}} size="medium" />
      </IonTabButton>

      <IonTabButton tab="home" href="/home" selected={location.pathname === '/home'}>
        <IonIcon icon={homeSharp} style={{ color: location.pathname === '/home' ? 'var(--ion-color-600)' : '#ababab'}} size="medium" />
      </IonTabButton>

      <IonTabButton tab="discover" href="/discover" selected={location.pathname === '/discover'}>
        <IonIcon icon={playSharp} style={{ color: location.pathname === '/discover' ? 'var(--ion-color-600)' : '#ababab'}} size="medium" />
      </IonTabButton>

      <IonTabButton tab="settings" href="/settings" selected={location.pathname === '/settings'}>
        <IonIcon icon={cogSharp} style={{ color: location.pathname === '/settings' ? 'var(--ion-color-600)' : '#ababab'}} size="medium" />
      </IonTabButton>

    </IonTabBar>
  );
};

export default Navbar;
