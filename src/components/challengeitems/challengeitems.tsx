import { IonButtons, IonContent, IonHeader, IonIcon, IonModal, IonTextarea, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { caretBack, caretForwardOutline, } from 'ionicons/icons';
import { useRef, useState } from 'react';
import ButtonComponent from '../button/button.js';
import HeadingComponent from '../heading/heading.js';
import bustsvg from './../../assets/svg/bust.svg'
import blackflagsvg from './../../assets/svg/blackflag.svg'
import retweetsvg from './../../assets/svg/retweet.svg'
import userservice from '../../services/userservice.js';
import peoplesvg from '../../assets/svg/people.svg'
import camerasvg from '../../assets/svg/camera.svg'
import bookmarsvg from '../../assets/svg/bookmar.svg'
import bookmarYellowsvg from '../../assets/svg/bookmar_yellow.svg'
import './challengeitems.css';

interface ContainerProps {
  _id?: string;
  createdAt?: string;
  categorie?: string;
  challenge?: string;
  completed?: boolean;
  image?: string;
}

const ChallengeItemsComponent: React.FC<ContainerProps> = ({ ...props }) => {
  const [showModal, setShowModal] = useState(false);
  const [showToastRedo, setShowToastRedo] = useState(false);
  const [showToastPost, setShowToastPost] = useState(false);
  const [showToastDelete, setShowToastDelete] = useState(false);
  const [isRetweetModalOpen, setIsRetweetModalOpen] = useState(false);
  const [tweetContent, setTweetContent] = useState('');
  const tweetContentRef = useRef(tweetContent);

  const createdAtDate = new Date(props.createdAt || '');
  const timeDifference = Date.now() - createdAtDate.getTime();

  const minutesDifference = Math.floor(timeDifference / (1000 * 60));
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const monthsDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));

  const firstCharacter = (userservice.getUserData()?.name ?? '?')[0].toUpperCase();

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

  const fetchDataCreateTweet = async (content: any) => {
    try {
      const userData = {
        user_id: userservice.getUserData()._id,
        challenge_joined_id: props._id,
        text: content
      };

      console.log("fetchData => userData :", content);

      const response = await fetch('http://localhost:3000/tweet/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        setShowToastPost(true)
        setIsRetweetModalOpen(false);
      } else {
        throw new Error('Une erreur est survenue lors de la récupération des données.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataRedoAChallenge = async () => {
    try {
      const response = await fetch(`http://localhost:3000/challenge/redo/${props._id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('Une erreur est survenue lors de la complétion du challenge.');
      } else {
        setShowToastRedo(true);
        setShowModal(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLeave = async (idChallenge: string) => {
    try {
      const response = await fetch(`http://localhost:3000/challenge/leave/${idChallenge}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('Une erreur est survenue lors de la complétion du challenge.');
      } else {
        setShowToastDelete(true);
        setShowModal(false)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleTweetContentChange = (e: any) => {
    const newValue = e.detail.value;
    console.log("handleTweetContentChange :", newValue);
    setTweetContent(newValue);
    tweetContentRef.current = newValue;
  };

  const openModal = () => {
    setShowModal(true);
  };

  const handleRedoButtonClick = () => {
    fetchDataRedoAChallenge()
  };

  const handleDeleteButtonClick = () => {
    fetchLeave(props._id ? props._id : '');
    setShowModal(false);
  };

  const handleRetweetClick = () => {
    setIsRetweetModalOpen(true);
  };

  const handleCancelClick = () => {
    setIsRetweetModalOpen(false);
  };

  const handleSubmitClick = () => {
    fetchDataCreateTweet(tweetContentRef.current);
  };

  return (
    <div className="challenge-items-container">
      {/* Arrow redirection */}
      <div className="arrow-icon-container" onClick={openModal}>
        <IonIcon icon={caretForwardOutline} className='challenge-items-caretForwardOutline' />
      </div>

      {/* Logo */}
      {/* <div className="challenge-items-logo-area flex" style={{ backgroundImage: `url(${props.image})` }}></div> */}
      <div className="challenge-items-logo-area flex">
        <img src={camerasvg} alt="" className='flex' />
      </div>

      <div className="challenge-items-text column" style={{ justifyContent: "space-between" }}>
        <>
          <div>
            <span style={{ fontWeight: "600" }}>{ }</span>{props.categorie} - il y a {timeRepresentation}
          </div>

          <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, fontWeight: "525", fontSize: "1.07rem" }}>
            {props.challenge}
          </div>
        </>

        <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
          <div className="challenge-items-retweet flex" onClick={handleRetweetClick}>
            <img src={retweetsvg} className="flex" style={{ width: "18px", height: "18px" }} />
            Tweet
          </div>

          <div className="challenge-items-retweet flex">
            <img src={peoplesvg} className="flex" style={{ width: "18px", height: "18px" }} />
            1200
            {/* {props._id} */}
          </div>

          <div className="challenge-items-retweet flex">
            <img src={bookmarsvg} className="flex" style={{ width: "18px", height: "18px" }} />
          </div>
        </div>
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
          <div className="challenge-modal-container">
            {/* Content */}
            <div className="challenge-modal-content">
              <div style={{ fontSize: "1.1rem" }}><span style={{ fontWeight: "600", fontSize: "1.15rem" }}>Challenge: </span>{props.challenge}</div>

              <div className="challenge-modal-infos-container">
                {/* <img className="challenge-modal-image" src={props.image} alt="" /> */}
                <div className="challenge-modal-image flex">
                  <img src={camerasvg} alt="" className='flex' />
                </div>

                <div className="challenge-modal-infos">
                  <div><span style={{ fontWeight: "600" }}>Generated by: </span> <span style={{ textDecoration: "underline" }}>@{userservice.getUserData().name}</span></div>
                  <div><span style={{ fontWeight: "600" }}>Status: </span> <span style={{ color: "var(--ion-color-500)", fontWeight: "500" }}>Finished</span></div>
                  <div><span style={{ fontWeight: "600" }}>Categorie: </span> <span style={{ fontWeight: "500" }}>{props.categorie}</span></div>
                  <div><span style={{ fontWeight: "600" }}>Completed in: </span> <span style={{ fontWeight: "500" }}>{timeRepresentation}</span></div>
                </div>
              </div>

              {/* People */}
              <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
                <HeadingComponent
                  text="People's joined :"
                  fontSize="1.15rem"
                  fontWeight="600"
                />

                <div className="challenge-modal-people-container">
                  <div className="flex" style={{ gap: ".25rem", fontSize: "1.05rem", justifyContent: "start" }}>
                    <img src={bustsvg} style={{ width: "18px", height: "18px" }} className='flex' alt="" />
                    <span style={{ fontWeight: "600", fontSize: "1.11rem" }}>758</span>joined this challenge
                  </div>

                  <div className="flex" style={{ gap: ".25rem", fontSize: "1.05rem", justifyContent: "start" }}>
                    <img src={blackflagsvg} style={{ width: "18px", height: "18px" }} className='flex' alt="" />
                    <span style={{ fontWeight: "600", fontSize: "1.11rem" }}>12</span>finished
                  </div>

                  <div className="challenge-modal-people-joined"><span style={{ fontWeight: "600", fontSize: "1.11rem" }}>Average completion time:</span> 3d 12h</div>
                </div>
              </div>

            </div>

            {/* Button */}
            <div className="challenge-modal-button">
              <ButtonComponent
                text="Redo"
                width='100%'
                background='var(--ion-gradient-400)'
                padding='.4rem 2rem'
                color='white'
                fontSize='1rem'
                fontWeight='500'
                borderRadius='8px'
                onClick={handleRedoButtonClick}
              ></ButtonComponent>

              <ButtonComponent
                text="Delete"
                width='100%'
                padding='.4rem 2rem'
                fontSize='1rem'
                fontWeight='500'
                borderRadius='8px'
                className='challenge-modal-button-not-selected'
                onClick={handleDeleteButtonClick}
              ></ButtonComponent>
            </div>
          </div>
        </IonContent>
      </IonModal>

      {/* Modal Display Completed */}
      <IonModal isOpen={isRetweetModalOpen} onDidDismiss={() => setIsRetweetModalOpen(false)}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonIcon onClick={() => setIsRetweetModalOpen(false)} icon={caretBack} size='medium' />
            </IonButtons>

            <IonTitle>Tweet</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className='ion-padding'>
          <div className="challenge-items-container">
            {/* Arrow redirection */}
            <div className="arrow-icon-container" onClick={openModal}>
              <IonIcon icon={caretForwardOutline} className='challenge-items-caretForwardOutline' />
            </div>

            {/* Logo */}
            {/* <div className="challenge-items-logo-area flex" style={{ backgroundImage: `url(${props.image})` }}></div> */}
            <div className="challenge-items-logo-area flex">
              <img src={camerasvg} alt="" className='flex' />
            </div>

            <div className="challenge-items-text column">
              <div>
                <span style={{ fontWeight: "600" }}>{ }</span>{props.categorie} - il y a {timeRepresentation}
              </div>

              <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, fontWeight: "525", fontSize: "1.07rem" }}>
                {props.challenge}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                <div className="challenge-items-retweet flex">
                  <img src={peoplesvg} className="flex" style={{ width: "18px", height: "18px" }} />
                  1200 joined
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: ".7rem" }} className='ion-padding-vertical'>
            <div style={{ paddingTop: "5.5px" }}>
              <div className="challenge-items-retweet-pp flex">
                {firstCharacter}
              </div>
            </div>

            <IonTextarea
              onIonChange={handleTweetContentChange}
              rows={5}
              placeholder="What is happening?!"
              style={{ width: 'auto' }}
              autofocus
            ></IonTextarea>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', gap: ".5rem" }}>
            <ButtonComponent
              text="Post"
              width='100%'
              background='var(--ion-gradient-400)'
              padding='.4rem 2rem'
              color='white'
              fontSize='1rem'
              fontWeight='500'
              borderRadius='8px'
              onClick={handleSubmitClick}
            ></ButtonComponent>

            <ButtonComponent
              text="Cancel"
              width='100%'
              padding='.4rem 2rem'
              fontSize='1rem'
              fontWeight='500'
              borderRadius='8px'
              className='challenge-modal-button-not-selected'
              onClick={handleCancelClick}
            ></ButtonComponent>
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
        isOpen={showToastPost}
        onDidDismiss={() => setShowToastPost(false)}
        message="Votre tweet a été mis en ligne !"
        duration={5500}
        position="top"
        className="greentoaststyle"
      />
    </div>
  );
};

export default ChallengeItemsComponent;
