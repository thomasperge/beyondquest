import { IonContent, IonPage, IonSpinner } from "@ionic/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ProgressBarComponent from "../../../components/progressbar/progressbar.js";
import arrowSvg from "./../../../assets/svg/leftarrow.svg";
import HeadingComponent from "../../../components/heading/heading.js";
import UserService from './../../../services/userservice.js'
import "./loading.css";
import userservice from "./../../../services/userservice.js";

const LoadingPage: React.FC = () => {
	const history = useHistory();
	const [isLoading, setIsLoading] = useState(true);

	// ==> Fetch Data
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:3000/users/signup', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(UserService.getUserData())
				});

				// Vérifier si la requête a réussi
				if (response.ok) {
					const data = await response.json();
					console.log(data);
					userservice.saveUserInfo(data)
					console.log("Loading : User Service Stockage user data : ", userservice.getUserData())

					// Arrêter le chargement
					setIsLoading(false);
					localStorage.setItem('isNewUser', 'true');
					localStorage.setItem('isRegistred', 'true');
					localStorage.setItem('user_id', data._id);
					history.push('/home');
				} else {
					throw new Error('Failed to fetch');
				}
			} catch (error) {
				console.error('Error:', error);
			}
		};

		fetchData();
	}, []);

	// useEffect(() => {
	// 	const timeoutId = setTimeout(() => {
	// 		setIsLoading(false);
	// 		localStorage.setItem('isNewUser', 'true');
	// 		localStorage.setItem('isRegistred', 'true')
	// 		history.push('/home');
	// 	}, 3500);

	// 	return () => clearTimeout(timeoutId);
	// }, []);
	
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
							onClick={() => history.push("/signup/goal", "root")}
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
