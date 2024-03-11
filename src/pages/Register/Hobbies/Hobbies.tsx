import {
  IonContent,
  IonPage,
  IonToast
} from "@ionic/react";
import ProgressBarComponent from "../../../components/progressbar/progressbar.js";
import HeadingComponent from "../../../components/heading/heading.js";
import arrowSvg from "./../../../assets/svg/leftarrow.svg";
import ButtonComponent from "../../../components/button/button.js";
import PrivacyPolicyComponent from "../../../components/PrivacyPolicy/Privacypolicy.js";
import "./Hobbies.css";
import ScrollableHobbiesList from "../../../components/ScrollableHobbiesList/ScrollableHobbiesList.js";
import { useState } from "react";
import { useHistory } from "react-router";

const HobbiesPage: React.FC = () => {
  const history = useHistory();

  // Toast
  const [toastIsShown, setToastIsShown] = useState(false);
  
  // Categorie
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const categories = ["Sport", "Cuisine", "Finance", "Informatique", "Relation Sociale", "Lecture", "Langue", "Autre(s)"]

  const handleCategoryClick = (category: string) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(category)) {
        return prevSelected.filter((c) => c !== category);
      } else {
        return [...prevSelected, category];
      }
    });
  };

  const validateHobbies = () => {
    return selectedCategories.length >= 2;
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div id="containerInformations">
          {/* Progress Bar */}
          <div className="progressBarContainer flex">
            {/* Arrow */}
            <img
              src={arrowSvg}
              alt=""
              onClick={() => history.push("/signup/informations", "root")}
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
          <div className="column" style={{ padding: "0 1rem", gap: "1rem" }}>
            <HeadingComponent
              text="Quels sont vos centres d’intérêt ?"
              color="var(--ion-color-dark)"
              fontSize="1.2rem"
              fontWeight="600"
            ></HeadingComponent>


            {/* Hobbies Categorie */}
            <div className="hobbies-area">
              <ScrollableHobbiesList 
                categories={categories}
                selectedCategories={selectedCategories}
                onCategoryClick={handleCategoryClick}/>
            </div>
          </div>

          <div className="HobbiesFooter flex column">
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
                  const selectedCategoriesCopy = [...selectedCategories]; 
                  console.log("Catégories sélectionnées :", selectedCategoriesCopy);
                  history.push("/signup/goal", "root");
                } else {
                  setToastIsShown(true);
                }
              }}
            />

            <IonToast
              isOpen={toastIsShown}
              onDidDismiss={() => setToastIsShown(false)}
              message="Veuillez sélectionner au moins 2 catégories"
              duration={2500}
              position="top"
              className="toast-hobbies"
            />

            <PrivacyPolicyComponent></PrivacyPolicyComponent>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HobbiesPage;
