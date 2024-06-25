import { IonContent, IonPage, IonToast } from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router";
import { UserInformationsDto } from "../../enum/userInformation.js";
import ProgressBarComponent from "../../components/progressbar/progressbar.js";
import HeadingComponent from "../../components/heading/heading.js";
import arrowSvg from './../../assets/svg/leftarrow.svg'
import InputComponent from "../../components/input/input.js";
import ButtonComponent from "../../components/button/button.js";
import PrivacyPolicyComponent from "../../components/privacyPolicy/privacypolicy.js";
import UserService from "../../services/userservice.js";
import './signin.css'

const LoginPage: React.FC = () => {
  const history = useHistory();

  // Toast
  const [toastIsShown, setToastIsShown] = useState(false);

  // User data
  const [formData, setFormData] = useState<UserInformationsDto>({
    name: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof typeof formData) => {
    const value = e.target.value;
    setFormData(prevData => ({
      ...prevData,
      [fieldName]: value
    }));
  };

  const validateInputs = () => {
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
                onClick={() => history.push("/auth", "root")}
              />

              {/* Progress Bar */}
              <ProgressBarComponent
                width="80%"
                height="20px"
                percentage="33%"
                color="var(--ion-color-500)"
                backgroundColor="#D9D9D9"
              />
            </div>

            {/* Informations Title + Input */}
            <div className="column" style={{ padding: "0 2rem", gap: "1rem" }}>
              <HeadingComponent
                text="Connexion"
                color="var(--ion-color-dark)"
                fontSize="1.2rem"
                fontWeight="600"
              ></HeadingComponent>

              {/* Input */}
              <InputComponent
                text="Name"
                type="text"
                width="100%"
                color="var(--ion-color-dark)"
                background="var(--ion-color-50)"
                border="2px solid var(--ion-color-500)"
                borderRadius="8px"
                fontSize="1.2rem"
                fontWeight="500"
                padding=".8rem 1rem"
                className="input-field"
                onChange={(e) => handleInputChange(e, 'name')}
              ></InputComponent>

              <InputComponent
                text="Password"
                type="password"
                width="100%"
                color="var(--ion-color-dark)"
                background="var(--ion-color-50)"
                border="2px solid var(--ion-color-500)"
                borderRadius="8px"
                fontSize="1.2rem"
                fontWeight="500"
                padding=".8rem 1rem"
                className="input-field"
                onChange={(e) => handleInputChange(e, 'password')}
              ></InputComponent>
            </div>
          </div>

          <div className="InformationsFooter flex column">
            <ButtonComponent
              text="Se Connecter"
              width="100%"
              height="45px"
              color="var(--ion-color-light)"
              fontSize="1.2rem"
              fontWeight="600"
              background="var(--ion-gradient-400)"
              borderRadius="8px"
              padding=".5rem"
              onClick={() => {
                if (validateInputs()) {
                  UserService.saveUserInfo(formData);
                  history.push('/signin/loading')
                } else {
                  setToastIsShown(true);
                }
              }}
            />

            <ButtonComponent
              text="Crée un compte"
              width="100%"
              height="50px"
              color="var(--ion-color-dark)"
              fontSize="1.2rem"
              fontWeight="600"
              borderRadius="8px"
              background="transparent"
              border="2px solid var(--ion-color-500)"
              padding=".5rem"
              onClick={() => {
                history.push('/signup/informations')
              }}
            />

            <IonToast
              isOpen={toastIsShown}
              onDidDismiss={() => setToastIsShown(false)}
              message="Veuillez remplir tout les champs"
              duration={2500}
              position="top"
              className="redtoaststyle"
            />

            <PrivacyPolicyComponent></PrivacyPolicyComponent>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
