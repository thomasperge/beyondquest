import React, { useEffect, useState } from "react";
import { DifficultyDto } from "../../enum/difficulty.js";
import { useHistory } from "react-router";
import { IonRefresher, IonRefresherContent, IonSpinner } from "@ionic/react";
import gymimage from './../../assets/imagecalendar/gym.png'
import booksimage from './../../assets/imagecalendar/books.png'
import smoothieimage from './../../assets/imagecalendar/smoothie.png'
import HeadingComponent from "../../components/heading/heading.js";
import CalendarHomeComponent from "../../components/calendarhome/calendarhome.js";
import ChallengeItemsComponent from "../../components/challengeitems/challengeitems.js";
import ButtonComponent from "../../components/button/button.js";
import TrendsChallengeItemsComponent from "../../components/trendchallengeitems/trendchallengeitems.js";
import ChallengePromptComponent from "../../components/challengeprompt/challengeprompt.js";
import withUserData from "../../services/useUserData.js";
import heartfireSvg from '../../assets/svg/heartfire.svg'
import blackflagSvg from '../../assets/svg/blackflag.svg'
import environment from "../../environment.js";
import userservice from "../../services/userservice.js";

const Home: React.FC = () => {
  const history = useHistory();
  const isNewUser = localStorage.getItem("isNewUser") === "true";
  const userService = userservice.getUserData();

  const [showChallengePrompt, setShowChallengePrompt] = useState(isNewUser);
  const [lastChallenges, setLastChallenges] = useState([]);
  const [allChallenges, setAllChallenges] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChallengePromptDismiss = () => {
    setShowChallengePrompt(false);
    localStorage.setItem("isNewUser", "false");
  };

  const fetchData = async () => {
    try {
      const userId = userService._id;
      const response = await fetch(environment.ACTIVE_URL + `/challenge/user/${userId}`);

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

      setLastChallenges(lastFinishedChallenges);
      setAllChallenges(data);
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

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good morning,";
    } else if (hour < 18) {
      return "Good afternoon,";
    } else {
      return "Good evening,";
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
        <IonRefresherContent />
      </IonRefresher>

      <div className="home-header">
        <div className="header">
          <div className="title">
          <div>{getGreeting()}</div>
            <div>{userService.name} !</div>
          </div>
          <div className="stats">
            <div className="stat">
              <img src={fire} alt="" />
              <div>7</div>
            </div>
            <div className="stat">
              <img src={task} alt="" />
              <div>2/3</div>
            </div>
            <div className="stat">
              <img src={gems} alt="" />
              <div>48</div>
            </div>
          </div>
        </div>
        <div className="subtitle">Let's make a lot of Questies today !</div>
        <form className="form">
          <button>
            <svg
              width="17"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="search"
            >
              <path
                d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                stroke="currentColor"
                stroke-width="1.333"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <input className="input" placeholder="Search" type="text"></input>
          <button className="reset" type="reset">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </form>
        <div className="categories">
          <div className="category">
            <img src={cooking} alt="" className="category-icon"/>
            <div className="category-name">Cooking</div>
          </div>
          <div className="category">
            <img src={reading} alt="" className="category-icon"/>
            <div className="category-name">Reading</div>
          </div>
          <div className="category">
            <img src={musculation} alt="" className="category-icon"/>
            <div className="category-name">Musculation</div>
          </div>
        </div>
      </div>

      {/* Good Morning / Afternoon */}
      {/* <div className="flex">
        <HeadingComponent
          text="Good morning, Thomas"
          fontSize="1.5rem"
          fontWeight="600"
          color="var(--ion-color-950)"
          padding="2rem 0 1.5rem 0"
        />
      </div> */}

      {/* Streak Stats */}
      {/* <div className="ion-margin-bottom">
        <DailyStreakStatsComponent nbStreak="0" dailyChallenge="0/3" />
      </div> */}

      {/* Calendar Title */}
      {/* <HeadingComponent
        text="Calendar"
        fontSize="1.2rem"
        fontWeight="600"
        color="var(--ion-color-dark)"
        padding="0 0 .5rem 0"
      /> */}

      {/* Calendar */}
      <CalendarHomeComponent
        lastnbDays={14}
        daywithStreak={[["8", gymimage], ["11", smoothieimage], ["16", booksimage], ["20", booksimage]]}
        redirection="/challenge"
      />

      {/* Latest Challenge */}
      <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: ".5rem" }}>
        <img src={blackflagSvg} alt="" style={{ width: "1.35rem", height: "1.35rem" }} />

        <HeadingComponent
          text="My Latest Challenges"
          fontSize="1.2rem"
          fontWeight="600"
          color="var(--ion-color-dark)"
          padding="0 0 .5rem 0"
        />
      </div>

      {/* All Challenge */}
      <div className="column ion-margin-bottom" style={{ gap: ".5rem", border: "1.2px solid rgb(200, 200, 200)", backgroundColor: "rgb(248, 248, 248)", padding: ".5rem", borderRadius: "12px" }}>
        {loading ? (
          <div className="flex" style={{ margin: "1rem 0" }}>
            <IonSpinner name="crescent"></IonSpinner>
          </div>
        ) : (
          <>
            {lastChallenges.length === 0 ? (
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
                {lastChallenges.slice(0, 3).map(({ challenge_joined_id, challenge_id, createdAt, hobbies, text, completed }) => (
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
                {allChallenges.filter((challenge: any) => challenge.completed).length > 3 && (
                  <ButtonComponent
                    text='View all'
                    padding='.5rem 0'
                    background='transparent'
                    color='#686868'
                    fontSize='.9rem'
                    fontWeight='550'
                    onClick={() => history.replace('/challenge', 'root')}
                  ></ButtonComponent>
                )}
              </>
            )}
          </>
        )}
      </div>


      {/* Trends Challenge */}
      <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: ".5rem" }}>
        <img src={heartfireSvg} alt="" style={{ width: "1.5rem", height: "1.5rem" }} />

        <HeadingComponent
          text="Trending Challenges"
          fontSize="1.2rem"
          fontWeight="600"
          color="var(--ion-color-dark)"
        />
      </div>

      <div className="column ion-margin-bottom" style={{ gap: ".5rem", border: "1.2px solid rgb(200, 200, 200)", backgroundColor: "rgb(248, 248, 248)", padding: ".5rem", borderRadius: "12px" }}>
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
        <ButtonComponent
          text='View all'
          padding='.5rem 0'
          background='transparent'
          color='#686868'
          fontSize='.9rem'
          fontWeight='550'
          onClick={() => history.replace('/challenge', 'root')}
        ></ButtonComponent>
      </div>

      {showChallengePrompt && (
        <ChallengePromptComponent onDismiss={handleChallengePromptDismiss} />
      )}
    </>
  );
};

export default withUserData(Home);
