// Home.tsx
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import NavBarComponent from '../../components/navbar/navbar.js';
import './Home.css';
import HeadingComponent from '../../components/heading/heading.js';
import DailyStreakStatsComponent from '../../components/dailystreakstats/dailystreakstats.js';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <NavBarComponent></NavBarComponent>
      </IonHeader>

      <IonContent fullscreen className="ion-padding-horizontal">
        <div className="flex">
          <HeadingComponent
            text='Good morning, Thomas'
            fontSize='1.45rem'
            fontWeight='700'
            color='var(--ion-color-950)'
            padding='2rem 0'
          ></HeadingComponent>
        </div>

        <DailyStreakStatsComponent
          nbStreak= "16"
          dailyChallenge= "2/3"
        ></DailyStreakStatsComponent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
