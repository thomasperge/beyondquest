import React from 'react';
import { IonTabBar, IonTabButton, IonIcon } from '@ionic/react';
import { useLocation } from 'react-router-dom';
import { homeOutline, receiptOutline, cogOutline, playOutline, peopleOutline } from 'ionicons/icons';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <IonTabBar slot="bottom">
      <IonTabButton tab="friends" href="/friends" selected={location.pathname === '/friends'}>
        <IonIcon icon={peopleOutline} color={location.pathname === '/friends' ? 'primary' : 'medium'} size="medium" />
      </IonTabButton>

      <IonTabButton tab="challenge" href="/challenge" selected={location.pathname === '/challenge'}>
        <IonIcon icon={receiptOutline} color={location.pathname === '/challenge' ? 'primary' : 'medium'} size="medium" />
      </IonTabButton>

      <IonTabButton tab="home" href="/home" selected={location.pathname === '/home'}>
        <IonIcon icon={homeOutline} color={location.pathname === '/home' ? 'primary' : 'medium'} size="medium" />
      </IonTabButton>

      <IonTabButton tab="discover" href="/discover" selected={location.pathname === '/discover'}>
        <IonIcon icon={playOutline} color={location.pathname === '/discover' ? 'primary' : 'medium'} size="medium" />
      </IonTabButton>

      <IonTabButton tab="settings" href="/settings" selected={location.pathname === '/settings'}>
        <IonIcon icon={cogOutline} color={location.pathname === '/settings' ? 'primary' : 'medium'} size="medium" />
      </IonTabButton>
    </IonTabBar>
  );
};

export default Navbar;
