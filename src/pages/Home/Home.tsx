import React from "react";
import { IonContent, IonFooter, IonPage } from "@ionic/react";
import { DifficultyDto } from "../../enum/difficulty.js";
import rocketSvg from "./../../assets/svg/rocket.svg";
import targetSvg from "./../../assets/svg/target.svg";
import statsSvg from "./../../assets/svg/stats.svg";
import ToolBarComponent from "../../components/toolbar/toolbar.js";
import HeadingComponent from "../../components/heading/heading.js";
import DailyStreakStatsComponent from "../../components/dailystreakstats/dailystreakstats.js";
import CalendarHomeComponent from "../../components/calendarhome/calendarhome.js";
import Navbar from "../../components/navbar/navbar.js";
import ChallengeItemsComponent from "../../components/challengeitems/challengeitems.js";

const Home: React.FC = () => {
  return (
    <IonPage>
      <ToolBarComponent />
      <IonContent fullscreen className="ion-padding-horizontal">
        {/* Good Morning / Afternoon */}
        <div className="flex">
          <HeadingComponent
            text="Good morning, Thomas"
            fontSize="1.5rem"
            fontWeight="600"
            color="var(--ion-color-950)"
            padding="2rem 0"
          />
        </div>

        {/* Streak Stats */}
        <div className="ion-margin-bottom">
          <DailyStreakStatsComponent nbStreak="16" dailyChallenge="2/3" />
        </div>

        {/* Calendar */}
        <HeadingComponent
          text="Calendar"
          fontSize="1.2rem"
          fontWeight="600"
          color="var(--ion-color-dark)"
          padding="0 0 .5rem 0"
        />

        <CalendarHomeComponent
          lastnbDays={14}
          daywithStreak={["1", "2"]}
          redirection="/challenge"
        />

        {/* Latest Challenge */}
        <HeadingComponent
          text="Latest Challenges"
          fontSize="1.2rem"
          fontWeight="600"
          color="var(--ion-color-dark)"
          padding="0 0 .5rem 0"
        />

        <div className="column ion-margin-bottom" style={{ gap: ".5rem" }}>
          <ChallengeItemsComponent
            days="Monday"
            hours="21h25"
            categorie="Cuisine"
            challenge="Faire des cookies originaux."
            difficulty={DifficultyDto.Easy}
            iconsvgurl={rocketSvg}
          ></ChallengeItemsComponent>

          <ChallengeItemsComponent
            days="Wednesday"
            hours="19h00"
            categorie="Sport"
            challenge="Faire une séance d'exercice de 30 minutes."
            difficulty={DifficultyDto.Medium}
            iconsvgurl={targetSvg}
          ></ChallengeItemsComponent>

          <ChallengeItemsComponent
            days="Friday"
            hours="18h30"
            categorie="Musique"
            challenge="Apprendre une nouvelle chanson à la guitare."
            difficulty={DifficultyDto.Hard}
            iconsvgurl={statsSvg}
          ></ChallengeItemsComponent>

        </div>
      </IonContent>
      <IonFooter>
        <Navbar />
      </IonFooter>
    </IonPage>
  );
};

export default Home;
