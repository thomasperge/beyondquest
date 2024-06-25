import { IonToast } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import ButtonComponent from '../../button/button.js';
import peoplesvg from './../../../assets/svg/people.svg'
import camerasvg from '../../../assets/svg/camera.svg'
import userservice from '../../../services/userservice.js';
import environment from '../../../environment.js';
import './challengegenerateby.css';

interface ContainerProps {
  user_id: string;
  challenge_id: string;
  usernamehasgeneratechallenge: string;
  usernamejoinedchallenge: string;
  challengetitle: string;
  numberpeoplejoined: string;
  challengepicture: string;
  generatedByUserId: string;
  joinedByUserId: string;
}

const ForYouChallengeGenerateByComponent: React.FC<ContainerProps> = ({ ...props }) => {
  const [showToast, setShowToast] = useState(false);
  const history = useHistory();

  const handleSpanClick = (userid: any) => {
    history.push(`/profil/${userid}`);
  };

  const fetchDataJoinAChallenge = async () => {
    try {
      const userData = {
        user_id: userservice.getUserData()._id,
        challenge_id: props.challenge_id,
      };

      const response = await fetch(environment.ACTIVE_URL + '/challenge/join-challenge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        setShowToast(true)
      } else {
        throw new Error('Une erreur est survenue lors de la récupération des données.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleJoinChallengeButtonClick = () => {
    fetchDataJoinAChallenge();
  };

  return (
    <>
      <div className="challenge-generate-by-container">
        <div className="challenge-generate-by">
          {props.usernamejoinedchallenge && props.usernamejoinedchallenge != props.usernamehasgeneratechallenge  ? (
            <div className='challenge-generate-by-text'>Joined by <span onClick={() => handleSpanClick(props.joinedByUserId)} style={{ textDecoration: "underline", fontWeight: "600" }}>@{props.usernamejoinedchallenge}</span> (by <span onClick={() => handleSpanClick(props.generatedByUserId)} style={{ textDecoration: "underline", fontWeight: "600" }}>@{props.usernamehasgeneratechallenge})</span></div>
          ) : (
            <div className='challenge-generate-by-text'>Generate by <span onClick={() => handleSpanClick(props.generatedByUserId)} style={{ textDecoration: "underline", fontWeight: "600" }}>@{props.usernamehasgeneratechallenge}</span></div>
          )}
        </div>

        <div className="challenge-generate-by-area">
          {/* <img src={props.challengepicture} alt="" className="challenge-generate-by-image" /> */}
          <div className="challenge-generate-by-image flex">
            <img src={camerasvg} alt="" />
          </div>

          <div className="challenge-generate-by-infos">
            <div className="challenge-generate-by-title">{props.challengetitle}</div>
            <div className="challenge-items-retweet flex">
              <img src={peoplesvg} className="flex" style={{ width: "18px", height: "18px" }} />
              {props.numberpeoplejoined} joined
            </div>

            <ButtonComponent
              text="Join now !"
              background='rgb(247, 247, 247)'
              padding='.4rem 2rem'
              color='black'
              border='1.3px solid gray'
              fontSize='.9rem'
              fontWeight='500'
              borderRadius='8px'
              className='challenge-generate-by-join-button flex'
              onClick={handleJoinChallengeButtonClick}
            ></ButtonComponent>

            <IonToast
              isOpen={showToast}
              onDidDismiss={() => setShowToast(false)}
              message="You join a new challenge !"
              duration={5500}
              position="top"
              className="orangetoaststyle"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForYouChallengeGenerateByComponent;
