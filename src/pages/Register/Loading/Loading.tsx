import {
	IonContent,
	IonPage,
	IonSpinner,
	useIonRouter,
} from "@ionic/react";
import ProgressBarComponent from "../../../components/progressbar/progressbar.js";
import arrowSvg from "./../../../assets/svg/leftarrow.svg";
import "./Loading.css";
import HeadingComponent from "../../../components/heading/heading.js";

const LoadingPage: React.FC = () => {
	const navigate = useIonRouter();

	return (
		<IonPage>
			<IonContent fullscreen>
				<div id="loadingContainer">
					{/* Progress Bar */}
					<div className="progressBarContainer flex">
						{/* Arrow */}
						<img
							src={arrowSvg}
							alt=""
							onClick={() => navigate.push("/signup/goal", "root", "replace")}
						/>

						{/* Progress Bar */}
						<ProgressBarComponent
							width="80%"
							height="20px"
							percentage="100%"
							color="var(--ion-color-500)"
							backgroundColor="#D9D9D9"
						/>
					</div>

					<div className="loading-area flex column">
						<HeadingComponent
							text="Loading"
							color="var(--ion-color-600)"
							fontSize="2rem"
							fontWeight="600"
						></HeadingComponent>

						<IonSpinner name="dots" className="ion-spinner-dots" />

						<div className="loading-subtitle">
							Ready to sprint into productivity! Buckle up, the challenge starts
							on load!
						</div>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default LoadingPage;
