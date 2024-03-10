import {
  IonContent,
  IonPage,
  useIonRouter,
} from "@ionic/react";
import ProgressBarComponent from "../../../components/progressbar/progressbar.js";
import HeadingComponent from "../../../components/heading/heading.js";
import arrowSvg from "./../../../assets/svg/leftarrow.svg";
import ButtonComponent from "../../../components/button/button.js";
import PrivacyPolicyComponent from "../../../components/PrivacyPolicy/Privacypolicy.js";
import "./Hobbies.css";
import ScrollableHobbiesList from "../../../components/ScrollableHobbiesList/ScrollableHobbiesList.js";

const HobbiesPage: React.FC = () => {
  const navigate = useIonRouter();
  const categories = ["Sport", "Cuisine", "Finance", "Informatique", "Jeux pleine air", "Relation Sociale", "Lecture", "Langue", "Autre(s)"]

  const validateHobbies = () => {
    const inputs = document.querySelectorAll(".input-field");
    let allFilled = true;

    inputs.forEach((input) => {
      const inputElement = input as HTMLInputElement;
      if (!inputElement.value) {
        allFilled = false;
      }
    });

    return allFilled
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div id="containerInformations">
          <div className="InformationsHeader">
            {/* Progress Bar */}
            <div className="progressBarContainer flex">
              {/* Arrow */}
              <img
                src={arrowSvg}
                alt=""
                onClick={() => navigate.push("/signup/informations", "root", "replace")}
              />

              {/* Progress Bar */}
              <ProgressBarComponent
                width="80%"
                height="20px"
                percentage="66%"
                color="var(--ion-color-500)"
                backgroundColor="#D9D9D9"
              />
            </div>

            {/* Informations Title + Input */}
            <div className="column" style={{ padding: "0 2rem", gap: "1rem" }}>
              <HeadingComponent
                text="Quels sont vos centres d’intérêt ?"
                color="var(--ion-color-dark)"
                fontSize="1.2rem"
                fontWeight="600"
              ></HeadingComponent>


              {/* Hobbies Categorie */}
              <ScrollableHobbiesList categories={categories}/>
            </div>
          </div>

          <div className="InformationsFooter flex column">
            <ButtonComponent
              text="Continue"
              width="100%"
              height="50px"
              color="var(--ion-color-light)"
              fontSize="1.2rem"
              fontWeight="600"
              background="var(--ionc-gradient-400)"
              borderRadius="8px"
              padding=".5rem"
              onClick={() => {
                if (validateHobbies()) {
                  navigate.push('/auth', 'root', 'replace')
                }
              }}
            />

            <PrivacyPolicyComponent></PrivacyPolicyComponent>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HobbiesPage;
