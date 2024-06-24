import { IonButtons, IonContent, IonHeader, IonIcon, IonModal, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { caretBack, caretForwardOutline, } from 'ionicons/icons';
import { useState } from 'react';
import ButtonComponent from '../button/button.js';
import camerasvg from './../../assets/svg/camera.svg'
import userservice from '../../services/userservice.js';
import environment from '../../environment.js';
import './challengeitemsinprogress.css';

interface ContainerProps {
  _id?: string;
  createdAt?: string;
  categorie?: string;
  challenge?: string;
  completed?: boolean;
  image?: string;
}

const ChallengeItemsInProgressComponent: React.FC<ContainerProps> = ({ ...props }) => {
  const [showModal, setShowModal] = useState(false);
  const [showToastRedo, setShowToastRedo] = useState(false);
  const [showToastDelete, setShowToastDelete] = useState(false);
  const [showCompletionToast, setShowCompletionToast] = useState(false);
  const [showLeaveToast, setShowLeaveToast] = useState(false);

  const createdAtDate = new Date(props.createdAt || '');
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

  const openModal = () => {
    setShowModal(true);
  };

  const handleCompletion = async (idChallenge: string) => {
    try {
      const response = await fetch(environment.ACTIVE_URL + `/challenge/complete/${idChallenge}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('Une erreur est survenue lors de la complétion du challenge.');
      } else {
        setShowCompletionToast(true);
        setShowModal(false)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLeave = async (idChallenge: string) => {
    try {
      const response = await fetch(environment.ACTIVE_URL + `/challenge/leave/${idChallenge}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('Une erreur est survenue lors de la complétion du challenge.');
      } else {
        setShowLeaveToast(true);
        setShowModal(false)
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="challenge-items-progress-container">
      {/* Arrow redirection */}
      <div className="arrow-icon-container" onClick={openModal}>
        <IonIcon icon={caretForwardOutline} className='challenge-items-progress-caretForwardOutline' />
      </div>

      <div className="challenge-items-progress-text column" style={{ justifyContent: "space-between" }}>
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: ".2rem" }}>
            <span style={{ fontWeight: "500" }}>{props.categorie}</span> - il y a {timeRepresentation}
          </div>

          <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, fontWeight: "560", fontSize: "1.07rem" }}>
            {props.challenge}
          </div>
        </>
      </div>

      {/* Modal Display Challenge*/}
      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonIcon onClick={() => setShowModal(false)} icon={caretBack} size='medium' />
            </IonButtons>

            <IonTitle>Challenge</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className='ion-padding challenge-modal-container'>
          <div className="challenge-modal-progress-container">
            {/* Content */}
            <div className="challenge-modal-progress-content">
              <div style={{ fontSize: "1.1rem" }}><span style={{ fontWeight: "600", fontSize: "1.15rem" }}>Challenge: </span>{props.challenge}</div>

              <div className="challenge-modal-progress-infos-container">
                <div className="challenge-modal-progress-image flex column">
                  <div style={{ fontWeight: "500" }}>Take</div>
                  <div style={{ fontWeight: "500" }}>Picture</div>
                  <img src={camerasvg} className="challenge-modal-progress-svg flex" alt="Take Picture" style={{ marginTop: ".5rem" }} />
                </div>

                <div className="challenge-modal-progress-infos">
                  <div><span style={{ fontWeight: "600" }}>Generated by: </span> <span style={{ textDecoration: "underline" }}>@{userservice.getUserData().name}</span></div>
                  <div><span style={{ fontWeight: "600" }}>Status: </span> <span style={{ color: "var(--ion-color-500)", fontWeight: "500" }}>In Progress</span></div>
                  <div><span style={{ fontWeight: "600" }}>Categorie: </span> <span style={{ fontWeight: "500" }}>{props.categorie}</span></div>
                  <div><span style={{ fontWeight: "600" }}>Start since: </span> <span style={{ fontWeight: "500" }}>{timeRepresentation}</span></div>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="challenge-modal-progress-button-container">
              <div className="challenge-modal-button">
                <ButtonComponent
                  text="Completed"
                  width='65%'
                  background='var(--ion-gradient-400)'
                  padding='.55rem .6rem'
                  color='white'
                  fontSize='1rem'
                  fontWeight='500'
                  borderRadius='8px'
                  onClick={() => handleCompletion(props._id ? props._id : '')}
                ></ButtonComponent>

                <ButtonComponent
                  text="Leave"
                  width='35%'
                  padding='.5rem .6rem'
                  fontSize='1rem'
                  fontWeight='500'
                  borderRadius='8px'
                  className='challenge-modal-button-not-selected'
                  onClick={() => handleLeave(props._id ? props._id : '')}
                ></ButtonComponent>
              </div>
            </div>
          </div>
        </IonContent>
      </IonModal>

      <IonToast
        isOpen={showToastRedo}
        onDidDismiss={() => setShowToastRedo(false)}
        message="You redo a challenge !"
        duration={5500}
        position="top"
        className="orangetoaststyle"
      />

      <IonToast
        isOpen={showToastDelete}
        onDidDismiss={() => setShowToastDelete(false)}
        message="You delete a challenge !"
        duration={5500}
        position="top"
        className="redtoaststyle"
      />

      <IonToast
        isOpen={showCompletionToast}
        onDidDismiss={() => setShowCompletionToast(false)}
        message="A finish a challenge"
        duration={2000}
        position="top"
        className="greentoaststyle"
      />

      <IonToast
        isOpen={showLeaveToast}
        onDidDismiss={() => setShowCompletionToast(false)}
        message="You leave the challenge"
        duration={2000}
        position="top"
        className="redtoaststyle"
      />
    </div>
  );
};

export default ChallengeItemsInProgressComponent;
