import { IonContent, IonPage } from "@ionic/react";
import { useHistory } from "react-router";
import HeadingComponent from "../../../components/heading/heading.js";
import ButtonComponent from "../../../components/button/button.js";
import targetSvg from "./../../../assets/svg/target.svg";
import rocketSvg from "./../../../assets/svg/rocket.svg";
import smsSvg from "./../../../assets/svg/sms.svg";
import statsSvg from "./../../../assets/svg/stats.svg";
import GoalitemsComponent from "../../../components/goalItems/goalItems.js";
import "./setGoal.css";

const SetGoalPage: React.FC = () => {
  const history = useHistory();

	return (
		<IonPage>
			<IonContent fullscreen>
				<div id="containerSetGoal">
					{/* Title */}
					<div className="setgoal-title-area flex">
						<HeadingComponent
							text="BeyondQuest"
							color="var(--ion-color-600)"
							fontSize="2rem"
							fontWeight="600"
						></HeadingComponent>
					</div>

					<div className="setgoal-texting-area">
						{/* Items */}
						<GoalitemsComponent
							title="Définissez des objectifs clairs et précis."
							subtitle="Une large variété de centre d’intêrets"
							svg={targetSvg}
						></GoalitemsComponent>

						<GoalitemsComponent
							title="Recevez un défi quotidien"
							subtitle="Chaque jour, à une heure prédéfinie, vous recevez une notification vous proposant un défi lié à l'un de vos centres d'intérêt"
							svg={rocketSvg}
						></GoalitemsComponent>

						<GoalitemsComponent
							title="Relevez le défi et partagez vos résultats"
							subtitle="Acceptez le défi et capturez une photo ou une vidéo de vous-même en train de le réaliser puis partager le avec vos amis, famille et même la communauté BeyondQuest !"
							svg={smsSvg}
						></GoalitemsComponent>

						<GoalitemsComponent
							title="Suivez vos progrès et restez motivé"
							subtitle="Consultez les statistiques de la communauté et comparer vos performances aux autres utilisateurs"
							svg={statsSvg}
						></GoalitemsComponent>

					</div>

					{/* Continue */}
					<div className="setgoal-button-area">
						<ButtonComponent
							text="Continue"
							width="100%"
							height="50px"
							color="var(--ion-color-light)"
							fontSize="1.2rem"
							fontWeight="600"
							background="var(--ionc-gradient-400)"
							borderRadius="8px"
							padding="1rem 0"
              onClick={() => {
                history.push('/signup/loading', 'root')
							}}
						/>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default SetGoalPage;
