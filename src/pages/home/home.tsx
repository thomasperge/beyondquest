import React, { useEffect, useState } from "react";
import { DifficultyDto } from "../../enum/difficulty.js";
import { useHistory } from "react-router";
import gymimage from './../../assets/imagecalendar/gym.png'
import booksimage from './../../assets/imagecalendar/books.png'
import smoothieimage from './../../assets/imagecalendar/smoothie.png'
import HeadingComponent from "../../components/heading/heading.js";
import DailyStreakStatsComponent from "../../components/dailystreakstats/dailystreakstats.js";
import CalendarHomeComponent from "../../components/calendarhome/calendarhome.js";
import ChallengeItemsComponent from "../../components/challengeitems/challengeitems.js";
import ButtonComponent from "../../components/button/button.js";
import TrendsChallengeItemsComponent from "../../components/trendchallengeitems/trendchallengeitems.js";
import ChallengePromptComponent from "../../components/challengeprompt/challengeprompt.js";
import withUserData from "../../services/useUserData.js";
import userservice from "../../services/userservice.js";
import { IonRefresher, IonRefresherContent, IonSpinner } from "@ionic/react";

const Home: React.FC = () => {
  const history = useHistory();
  const isNewUser = localStorage.getItem("isNewUser") === "true";

  const [showChallengePrompt, setShowChallengePrompt] = useState(isNewUser);
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChallengePromptDismiss = () => {
    setShowChallengePrompt(false);
    localStorage.setItem("isNewUser", "false");
  };

  const fetchData = async () => {
    try {
      const userId = userservice.getUserData()._id;
      const response = await fetch(`http://localhost:3000/challenge/user/${userId}`);

      if (!response.ok) {
        throw new Error('Une erreur est survenue lors de la récupération des données.');
      }

      const data = await response.json();

      const finishedChallenges = data.filter((challenge: any) => challenge.completed);

      finishedChallenges.sort((a: any, b: any) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });

      const lastFinishedChallenges = finishedChallenges.slice(0, 3);
      console.log(lastFinishedChallenges);
      setChallenges(lastFinishedChallenges);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async (event: CustomEvent) => {
    await fetchData();
    event.detail.complete();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
        <IonRefresherContent />
      </IonRefresher>

      {/* Good Morning / Afternoon */}
      <div className="flex">
        <HeadingComponent
          text="Good morning, Thomas"
          fontSize="1.5rem"
          fontWeight="600"
          color="var(--ion-color-950)"
          padding="2rem 0 1.5rem 0"
        />
      </div>

      {/* Streak Stats */}
      <div className="ion-margin-bottom">
        <DailyStreakStatsComponent nbStreak="16" dailyChallenge="2/3" />
      </div>

      {/* Calendar Title */}
      <HeadingComponent
        text="Calendar"
        fontSize="1.2rem"
        fontWeight="600"
        color="var(--ion-color-dark)"
        padding="0 0 .5rem 0"
      />

      {/* Calendar */}
      <CalendarHomeComponent
        lastnbDays={14}
        daywithStreak={[["8", gymimage], ["11", smoothieimage], ["16", booksimage], ["20", booksimage]]}
        redirection="/challenge"
      />

      {/* Latest Challenge */}
      <HeadingComponent
        text="My Latest Challenges"
        fontSize="1.2rem"
        fontWeight="600"
        color="var(--ion-color-dark)"
        padding="0 0 .5rem 0"
      />

      {/* All Challenge */}
      <div className="column ion-margin-bottom" style={{ gap: ".5rem" }}>
        {loading ? (
          <div className="flex" style={{ margin: "1rem 0" }}>
            <IonSpinner name="crescent"></IonSpinner>
          </div>
        ) : (
          challenges.length === 0 && loading == false ? (
            <ButtonComponent
              text='No challenge'
              padding='1rem 0'
              background='transparent'
              color='#686868'
              fontSize='.9rem'
              fontWeight='500'
            ></ButtonComponent>
          ) : (
            <>
              {challenges.slice(0, 3).map(({ challenge_joined_id, challenge_id, createdAt, hobbies, text, completed }) => (
                <ChallengeItemsComponent
                  key={challenge_joined_id}
                  _id={challenge_joined_id}
                  createdAt={createdAt}
                  categorie={hobbies}
                  challenge={text}
                  completed={completed}
                  image=""
                />
              ))}
              {challenges.length > 3 && (
                <ButtonComponent
                  text='View all'
                  padding='1rem 0'
                  background='transparent'
                  color='#686868'
                  fontSize='.9rem'
                  fontWeight='500'
                  onClick={() => history.replace('/challenge', 'root')}
                ></ButtonComponent>
              )}
            </>
          )
        )}

      </div>

      {/* Trends Challenge */}
      <HeadingComponent
        text="Trending Challenges"
        fontSize="1.2rem"
        fontWeight="600"
        color="var(--ion-color-dark)"
        padding="0 0 .5rem 0"
      />

      <div className="column ion-margin-bottom" style={{ gap: ".5rem" }}>
        <TrendsChallengeItemsComponent
          categorie="Productivité"
          challenge="Planifier demain en 5 minutes"
          difficulty={DifficultyDto.Easy}
          image={booksimage}
          nbOfParticipants={11589}
          generateBy="@eltoma"
        />
        <TrendsChallengeItemsComponent
          categorie="Musculation"
          challenge="Faire 850 tractions en 1 semaine"
          difficulty={DifficultyDto.Hard}
          image={smoothieimage}
          nbOfParticipants={1254}
          generateBy="@askralos"
        />
        <TrendsChallengeItemsComponent
          categorie="Méditation"
          challenge="Méditer pendant 10 minutes/jour"
          difficulty={DifficultyDto.Medium}
          image={gymimage}
          nbOfParticipants={789}
          generateBy="@solarkaaaaaaaaaaaaaaaaaaaaaa"
        />
      </div>

      {showChallengePrompt && (
        <ChallengePromptComponent onDismiss={handleChallengePromptDismiss} />
      )}
    </>
  );
};

export default withUserData(Home);
