import React, { useEffect, useState } from "react";
import { DifficultyDto } from "../../enum/difficulty.js";
import { IonActionSheet, IonAlert, IonToast } from "@ionic/react";
import { toastController } from "@ionic/core";
import { closeCircleSharp } from "ionicons/icons";
import gymimage from "./../../assets/imagecalendar/gym.png";
import booksimage from "./../../assets/imagecalendar/books.png";
import smoothieimage from "./../../assets/imagecalendar/smoothie.png";
import meditationSvg from "./../../assets/svg/meditation.svg";
import notepadSvg from "./../../assets/svg/notepad.svg";
import HeadingComponent from "../../components/heading/heading.js";
import DailyStreakStatsComponent from "../../components/dailystreakstats/dailystreakstats.js";
import CalendarHomeComponent from "../../components/calendarhome/calendarhome.js";
import ChallengeItemsComponent from "../../components/challengeitems/challengeitems.js";
import { useHistory } from "react-router";
import ButtonComponent from "../../components/button/button.js";
import TrendsChallengeItemsComponent from "../../components/trendchallengeitems/trendchallengeitems.js";

const challenges = [
  {
    id: 1,
    days: "Mondays",
    hours: "21h25",
    categories: "Cuisine",
    challenge: "Faire des cookies originaux",
    difficulty: DifficultyDto.Easy,
    image: gymimage,
  },
  {
    id: 2,
    days: "Yesterday",
    hours: "06h15",
    categories: "Sport",
    challenge: "Faire 20 pompes et des 40 squats",
    difficulty: DifficultyDto.Medium,
    image: smoothieimage,
  },
  {
    id: 3,
    days: "Friday",
    hours: "12h35",
    categories: "Lecture",
    challenge: "Lire 30 pages et rédigés un résumé sur ces 20 pages",
    difficulty: DifficultyDto.Hard,
    image: booksimage,
  },
  {
    id: 4,
    days: "Sunday",
    hours: "23h56",
    categories: "Lecture",
    challenge: "Lire 60 pages et achter un nouveaux livre",
    difficulty: DifficultyDto.Medium,
    image: smoothieimage,
  },
];

const trends = [
  {
    id: 1,
    categories: "Cuisine",
    challenge: "Faire des cookies originaux",
    difficulty: DifficultyDto.Easy,
    image: gymimage,
    nbOfParticipants: 128,
    generatedBy: "elThomas",
  },
  {
    id: 2,
    categories: "Sport",
    challenge: "Faire 20 pompes et des 40 squats",
    difficulty: DifficultyDto.Medium,
    image: smoothieimage,
    nbOfParticipants: 20665,
    generatedBy: "tom",
  },
  {
    id: 3,
    categories: "Lecture",
    challenge: "Lire 30 pages et rédigés un résumé sur ces 20 pages",
    difficulty: DifficultyDto.Hard,
    image: booksimage,
    nbOfParticipants: 658156,
    generatedBy: "kangHaerin",
  },
  {
    id: 4,
    categories: "Lecture",
    challenge: "Lire 60 pages et achter un nouveaux livre",
    difficulty: DifficultyDto.Medium,
    image: smoothieimage,
    nbOfParticipants: 6195,
    generatedBy: "Askralos",
  },
];
const Home: React.FC = () => {
  const history = useHistory();

  const [showAlert, setShowAlert] = useState(false);
  const [showActionSheet, setShowActionSheet] = useState(false);

  useEffect(() => {
    const isNewUser = localStorage.getItem("isNewUser") === "true";

    if (isNewUser) {
      setShowAlert(true);
      localStorage.setItem("isNewUser", "false");
    }
  }, []);

  const showToast = async (message: string) => {
    const toast = await toastController.create({
      message: message,
      duration: 6000,
      position: "top",
      buttons: [
        {
          side: "end",
          icon: closeCircleSharp,
          role: "cancel",
          handler: () => {
            toast.dismiss();
          },
        },
      ],
      cssClass: "newchallengetoast",
    });
    toast.present();
  };

  return (
    <>
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
        padding="1rem 0 .5rem 0"
      />

      {/* Calendar */}
      <CalendarHomeComponent
        lastnbDays={14}
        daywithStreak={[
          ["8", gymimage],
          ["11", smoothieimage],
          ["16", booksimage],
          ["20", booksimage],
        ]}
        redirection="/challenge"
      />

      {/* Latest Challenge */}
      <div className="space-between" style={{marginTop: "2rem", marginBottom: "0.5rem" }}>
        <HeadingComponent
          text="My Latest Challenges"
          fontSize="1.2rem"
          fontWeight="600"
          color="var(--ion-color-dark)"
        />
        <ButtonComponent
          text="View all"
          background="transparent"
          color="#686868"
          fontSize=".9rem"
          fontWeight="500"
          onClick={() => history.replace("/challenge", "root")}
        ></ButtonComponent>
      </div>

      {/* All Challenge */}
      <div
        className="flex ion-margin-bottom"
        style={{ gap: ".5rem", height: "140px" }}
      >
        {challenges
          .slice(0, 3)
          .map(
            ({ id, days, hours, categories, challenge, difficulty, image }) => (
              <ChallengeItemsComponent
                key={id}
                days={days}
                hours={hours}
                categorie={categories}
                challenge={challenge}
                difficulty={difficulty}
                image={image}
              />
            )
          )}
      </div>

      {/* Trends Challenge */}

      <div className="space-between" style={{ marginBottom: "0.5rem", marginTop:"2rem" }}>
        <HeadingComponent
          text="Trending Challenges"
          fontSize="1.2rem"
          fontWeight="600"
          color="var(--ion-color-dark)"
        />
        <ButtonComponent
          text="View all"
          background="transparent"
          color="#686868"
          fontSize=".9rem"
          fontWeight="500"
          onClick={() => history.replace("/challenge", "root")}
        ></ButtonComponent>
      </div>

      <div className="column ion-margin-bottom" style={{ gap: ".5rem" }}>
          
      {trends
          .slice(0, 3)
          .map(
            ({ id, categories, challenge, difficulty, image, generatedBy, nbOfParticipants }) => (
              <TrendsChallengeItemsComponent
              key={id}
              categorie={categories}
              challenge={challenge}
              difficulty={difficulty}
              image={image}
              nbOfParticipants={nbOfParticipants}
              generateBy={generatedBy}
            />
              
            )
          )}
      </div>

      {/* IonAlert */}
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={"Prêt à relever un défi ?"}
        message={"Sélectionnez votre choix ci-dessous."}
        buttons={[
          {
            text: "Pas maintenant",
            role: "cancel",
            cssClass: "secondary",
          },
          {
            text: "Je suis prêt !",
            cssClass: "success",
            handler: () => {
              setShowActionSheet(true);
            },
          },
        ]}
      />

      {/* IonActionSheet */}
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={[
          {
            text: "Cuisine",
            handler: () => {
              showToast("Nouveau défi !\nFaire 10 cookies");
            },
          },
          {
            text: "Musculation",
            handler: () => {
              showToast("Nouveau défi !\nFaire 250 pompes");
            },
          },
          {
            text: "Lecture",
            handler: () => {
              showToast("Nouveau défi !\nLire 25 pages");
            },
          },
          {
            text: "Annuler",
            role: "cancel",
          },
        ]}
      />
    </>
  );
};

export default Home;
