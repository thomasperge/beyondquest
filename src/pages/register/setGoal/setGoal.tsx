import { IonContent, IonPage, IonButton } from "@ionic/react";
import { useHistory } from "react-router";
import HeadingComponent from "../../../components/heading/heading.js";
import targetSvg from "./../../../assets/svg/target.svg";
import rocketSvg from "./../../../assets/svg/rocket.svg";
import smsSvg from "./../../../assets/svg/sms.svg";
import statsSvg from "./../../../assets/svg/stats.svg";
import GoalitemsComponent from "../../../components/goalItems/goalItems.js";
import "./setGoal.css";
import { useState } from "react";

const SetGoalPage: React.FC = () => {
  const history = useHistory();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const handleNext = () => {
    if (currentIndex < goals.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      history.push('/signup/loading', 'root')
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      history.goBack(); // ou history.push('/previous-page');
    }
  };

  const goals = [
    {
      title: "Définissez des objectifs clairs et précis.",
      subtitle: "Une large variété de centre d'intêrets",
      svg: targetSvg,
      bgColor: "linear-gradient(120deg, #bbd4ff, #668aff)"
    },
    {
      title: "Recevez un défi quotidien",
      subtitle: "Chaque jour, à une heure prédéfinie, vous recevez une notification vous proposant un défi lié à l'un de vos centres d'intérêt",
      svg: rocketSvg,
      bgColor: "linear-gradient(120deg, #ded3ff, #aa83ff)"
    },
    {
      title: "Relevez le défi et partagez vos résultats",
      subtitle: "Acceptez le défi et capturez une photo ou une vidéo de vous-même en train de le réaliser puis partager le avec vos amis, famille et même la communauté BeyondQuest !",
      svg: smsSvg,
      bgColor: "linear-gradient(120deg, #f4e494, #e6b829)"
    },
    {
      title: "Suivez vos progrès et restez motivé",
      subtitle: "Consultez les statistiques de la communauté et comparer vos performances aux autres utilisateurs",
      svg: statsSvg,
      bgColor: "linear-gradient(120deg, #b7fbc7, #41e76a)" 
    }
  ];

  return (
    <IonPage>
      <IonContent fullscreen>
        <div id="containerSetGoal" >
          <div className="setgoal-title-area flex">
            <HeadingComponent
              text="BeyondQuest"
              color="var(--ion-color-600)"
              fontSize="2rem"
              fontWeight="600"
            />
          </div>

          <div className={`setgoal-texting-area`}>
            <GoalitemsComponent
              title={goals[currentIndex].title}
              subtitle={goals[currentIndex].subtitle}
              svg={goals[currentIndex].svg}
              bgColor={goals[currentIndex].bgColor}
            />
          </div>

          <div className="setgoal-button-area flex">
            <button className="button_prev" onClick={handlePrev}>Précédent</button>
            <button className="button_next" onClick={handleNext}>{currentIndex === goals.length - 1 ? "Let's Go!" : "Suivant"}</button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SetGoalPage;
