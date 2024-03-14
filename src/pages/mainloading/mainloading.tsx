import { IonContent, IonItem, IonLabel, IonPage, IonSpinner } from "@ionic/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import HeadingComponent from "../../components/heading/heading.js";
import './mainloading.css'

const MainLoadingPage: React.FC = () => {
	const history = useHistory();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
		setIsLoading(false);

		const isRegistred = localStorage.getItem('isRegistred') == 'true' || localStorage.getItem('isRegistred') == 'True';

		  if (isRegistred) {
		    history.push('/home');
		  } else {
		    history.push('/auth');
		  }
		}, 2500);

		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<IonPage>
			<IonContent fullscreen>
				<div id="mainloading" className="flex column">
					{/* Title */}
					<HeadingComponent
						text="BeyondQuest"
						color="white"
						fontSize="2rem"
						fontWeight="500"
					></HeadingComponent>

					<IonSpinner name="dots" className="ion-spinner-dots-main-loading"></IonSpinner>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default MainLoadingPage;

