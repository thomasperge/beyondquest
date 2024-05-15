import { IonContent, IonPage, IonSpinner } from "@ionic/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import HeadingComponent from "../../components/heading/heading.js";
import userservice from "../../services/userservice.js";
import './mainloading.css'

const MainLoadingPage: React.FC = () => {
	const history = useHistory();
	const [isLoading, setIsLoading] = useState(true);

	// ==> Fetch Data
	useEffect(() => {
		const checkUserRegistration = async () => {
			const isRegistred = localStorage.getItem('isRegistred') == 'true' || localStorage.getItem('isRegistred') == 'True';
			const userId = localStorage.getItem('user_id');

			if (isRegistred && userId) {
				try {
					const response = await fetch(`http://localhost:3000/users/data/${userId}`);
					if (response.status === 200) {
						const userData = await response.json();
						console.log('User data:', userData);
						userservice.saveUserInfo(userData)
						console.log("MainLoading : User Service Stockage user data : ", userservice.getUserData())
						history.push('/home');
					} else {
						const userData = await response.json();
						console.log('User not found', userData);
						history.push('/auth');
					}
				} catch (error) {
					console.error('Error fetching user data:', error);
					history.push('/auth');
				}
			} else {
				console.log("local storage error");
				history.push('/auth');
			}
		};

		checkUserRegistration();
	}, []);

	// useEffect(() => {
	// 	const timeoutId = setTimeout(() => {
	// 	setIsLoading(false);

	// 	const isRegistred = localStorage.getItem('isRegistred') == 'true' || localStorage.getItem('isRegistred') == 'True';

	// 	  if (isRegistred) {
	// 	    history.push('/home');
	// 	  } else {
	// 	    history.push('/auth');
	// 	  }
	// 	}, 2500);

	// 	return () => clearTimeout(timeoutId);
	// }, []);
	
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

