import React from 'react';
import { IonTabBar, IonTabButton, IonIcon } from '@ionic/react';
import { useLocation } from 'react-router-dom';
import { homeSharp, receiptSharp, cogSharp, playSharp, peopleSharp } from 'ionicons/icons';
import './navbar.css'

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <IonTabBar slot="bottom">
      <IonTabButton tab="challenge" href="/challenge" selected={location.pathname === '/challenge'}>
        <IonIcon icon={receiptSharp} style={{ color: location.pathname === '/challenge' ? 'var(--ion-color-600)' : '#C1C1C1' }} size="medium" />
        <span className='icon-text' style={{ color: location.pathname === '/challenge' ? 'var(--ion-color-600)' : '#C1C1C1' }}>Challenge</span>
      </IonTabButton>
      <IonTabButton tab="home" href="/home" selected={location.pathname === '/home'}>
        <IonIcon icon={homeSharp} style={{ color: location.pathname === '/home' ? 'var(--ion-color-600)' : '#C1C1C1' }} size="medium" />
        <span className='icon-text' style={{ color: location.pathname === '/home' ? 'var(--ion-color-600)' : '#C1C1C1' }}>Home</span>
      </IonTabButton>

      <IonTabButton tab="discover" href="/discover" selected={location.pathname === '/discover'}>
        <IonIcon icon={playSharp} style={{ color: location.pathname === '/discover' ? 'var(--ion-color-600)' : '#C1C1C1' }} size="medium" />
        <span className='icon-text' style={{ color: location.pathname === '/discover' ? 'var(--ion-color-600)' : '#C1C1C1' }}>Foryou</span>
      </IonTabButton>

      <IonTabButton tab="profile" href="/profil" selected={location.pathname === '/profil'}>
        <IonIcon icon={peopleSharp} style={{ color: location.pathname === '/profil' ? 'var(--ion-color-600)' : '#C1C1C1' }} size="medium" />
        <span className='icon-text' style={{ color: location.pathname === '/profil' ? 'var(--ion-color-600)' : '#C1C1C1' }}>Profile</span>
      </IonTabButton>
    </IonTabBar>
  );
};

export default Navbar;
