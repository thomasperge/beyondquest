import React from "react";
import { useEffect, useState } from "react";
import { IonRefresher, IonRefresherContent, IonSpinner } from "@ionic/react";
import ForYouChallengeTweetComponent from "../../components/foryou/foryouchallenge/foryouchallenge.js";
import environment from "../../environment.js";
import './discover.css';

const Discover: React.FC = () => {
	const [tweets, setTweets] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		try {
			const response = await fetch(environment.ACTIVE_URL + `/tweet/all`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				},
			});

			if (!response.ok) {
				throw new Error('Une erreur est survenue lors de la complétion du challenge.');
			}

			const data = await response.json();
			setTweets(data);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const getStringTimePosted = (createdAt: any) => {
		const createdAtDate = new Date(createdAt || '');
		const timeDifference = Date.now() - createdAtDate.getTime();

		const minutesDifference = Math.floor(timeDifference / (1000 * 60));
		const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
		const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
		const monthsDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));

		let timeRepresentation = '';
		if (monthsDifference >= 1) {
			timeRepresentation = `${monthsDifference}mo`;
		} else if (daysDifference >= 1) {
			timeRepresentation = `${daysDifference}d`;
		} else if (hoursDifference >= 1) {
			timeRepresentation = `${hoursDifference}h`;
		} else {
			timeRepresentation = `${minutesDifference}m`;
		}

		return timeRepresentation;
	}

	const handleRefresh = async (event: CustomEvent) => {
		await fetchData();
		event.detail.complete();
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
				<IonRefresherContent />
			</IonRefresher>

			<div className="discover-container ion-padding-vertical">
				{loading ? (
					<div className="flex" style={{ margin: "1rem 0" }}>
						<IonSpinner name="crescent"></IonSpinner>
					</div>
				) : (
					tweets.length === 0 ? (
						<div>No tweets found.</div>
					) : (
						tweets.map((tweet: any, index: number) => (
							<React.Fragment key={`${tweet._id}-${index}`}>
								<ForYouChallengeTweetComponent
									user_id={tweet.user_id}
									username={tweet.joinedByUser.name}
									name={tweet.joinedByUser.name}
									profilepictureLetter={(tweet.joinedByUser.name ?? '?')[0].toUpperCase()}
									waspostedtime={getStringTimePosted(tweet.createdAt)}
									sentence={tweet.text}
									challengeid={tweet.challenge_id}
									likes={"458"}
									comments={"12"}
									usernamehasgeneratechallenge={tweet.generatedByUser.name}
									challengetitle={tweet.challenge.text}
									numberpeoplejoined={tweet.numberOfParticipants}
  								generatedByUserId= {tweet.generatedByUser._id}
  								joinedByUserId= {tweet.joinedByUser._id}
								/>
								<div className="discover-separation"></div>
							</React.Fragment>
						))
					)
				)}
			</div>
		</>
	);
};

export default Discover;
