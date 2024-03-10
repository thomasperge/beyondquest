import {
	IonContent,
	IonPage,
} from "@ionic/react";
import ProgressBarComponent from "../../../components/progressbar/progressbar.js";
import HeadingComponent from "../../../components/heading/heading.js";
import { useIonRouter } from "@ionic/react";
import arrowSvg from "./../../../assets/svg/leftarrow.svg";
import "./information.css";
import InputComponent from "../../../components/input/input.js";

const InformationPage: React.FC = () => {
	const navigate = useIonRouter();

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
							onClick={() => navigate.push("/auth", "root", "replace")}
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
							text="Vos informations"
							color="var(--ion-color-black)"
							fontSize="1.25rem"
							fontWeight="600"
						></HeadingComponent>

						{/* Input */}
						<InputComponent
							text="Name"
							type="text"
							width="100%"
							color="var(--ion-color-black)"
							background="var(--ion-color-50)"
							border="2px solid var(--ion-color-500)"
							borderRadius="8px"
							fontSize="1.2rem"
							fontWeight="500"
							padding=".8rem 1rem"
						></InputComponent>

						<InputComponent
							text="Last Name"
							type="text"
							width="100%"
							color="var(--ion-color-black)"
							background="var(--ion-color-50)"
							border="2px solid var(--ion-color-500)"
							borderRadius="8px"
							fontSize="1.2rem"
							fontWeight="500"
							padding=".8rem 1rem"
						></InputComponent>

						<InputComponent
							text="Age"
							type="text"
							width="100%"
							color="var(--ion-color-black)"
							background="var(--ion-color-50)"
							border="2px solid var(--ion-color-500)"
							borderRadius="8px"
							fontSize="1.2rem"
							fontWeight="500"
							padding=".8rem 1rem"
						></InputComponent>

						<InputComponent
							text="Country"
							type="text"
							width="100%"
							color="var(--ion-color-black)"
							background="var(--ion-color-50)"
							border="2px solid var(--ion-color-500)"
							borderRadius="8px"
							fontSize="1.2rem"
							fontWeight="500"
							padding=".8rem 1rem"
						></InputComponent>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default InformationPage;
