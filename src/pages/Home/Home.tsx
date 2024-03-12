import React from 'react';
import { IonContent, IonFooter, IonPage } from '@ionic/react';
import ToolBarComponent from '../../components/toolbar/toolbar.js';
import HeadingComponent from '../../components/heading/heading.js';
import DailyStreakStatsComponent from '../../components/dailystreakstats/dailystreakstats.js';
import CalendarHomeComponent from '../../components/calendarhome/calendarhome.js';
import Navbar from '../../components/navbar/navbar.js';

const Home: React.FC = () => {
  return (
    <IonPage>
      <ToolBarComponent />

      <IonContent fullscreen className="ion-padding-horizontal">
        {/* Good Morning / Afternoon */}
        <div className="flex">
          <HeadingComponent
            text='Good morning, Thomas'
            fontSize='1.5rem'
            fontWeight='600'
            color='var(--ion-color-950)'
            padding='2rem 0'
          />
        </div>

        {/* Streak Stats */}
        <div className="ion-margin-bottom">
          <DailyStreakStatsComponent
            nbStreak="16"
            dailyChallenge="2/3"
          />
        </div>

        {/* Calendar */}
        <HeadingComponent
          text='Calendar'
          fontSize='1.15rem'
          fontWeight='600'
          color='var(--ion-color-dark)'
          padding='0 0 .5rem 0'
        />

        <CalendarHomeComponent
          lastnbDays={14}
          daywithStreak={['1', '2']}
          redirection='/auth'
        />
      </IonContent>

      <IonFooter>
        <Navbar />
      </IonFooter>
    </IonPage>
  );
};

export default Home;
