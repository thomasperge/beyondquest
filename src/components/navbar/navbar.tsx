import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet, IonTab, IonIcon, IonContent } from '@ionic/react';
import { homeOutline, receiptOutline, cogOutline, playOutline, peopleOutline } from 'ionicons/icons';

const Navbar: React.FC = () => {
  return (
    <IonTabBar slot="bottom">
      <IonTabButton tab="home" href="/home" selected={window.location.pathname === '/home'}>
        <IonIcon icon={peopleOutline} color={window.location.pathname === '/home' ? 'primary' : 'medium'} size="medium" />
      </IonTabButton>

      <IonTabButton tab="signin" href="/signin" selected={window.location.pathname === '/signin'}>
        <IonIcon icon={receiptOutline} color={window.location.pathname === '/signin' ? 'primary' : 'medium'} size="medium" />
      </IonTabButton>

      <IonTabButton tab="home" href="/home" selected={window.location.pathname === '/home'}>
        <IonIcon icon={homeOutline} color={window.location.pathname === '/home' ? 'primary' : 'medium'} size="medium" />
      </IonTabButton>

      <IonTabButton tab="signin" href="/signin" selected={window.location.pathname === '/signin'}>
        <IonIcon icon={playOutline} color={window.location.pathname === '/signin' ? 'primary' : 'medium'} size="medium" />
      </IonTabButton>

      <IonTabButton tab="home" href="/home" selected={window.location.pathname === '/home'}>
        <IonIcon icon={cogOutline} color={window.location.pathname === '/home' ? 'primary' : 'medium'} size="medium" />
      </IonTabButton>
    </IonTabBar>
  );
};

export default Navbar;
