import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonTextarea,
  IonTitle,
  IonToast,
  IonToolbar,
} from "@ionic/react";
import { caretBack, caretForwardOutline } from "ionicons/icons";
import { useState } from "react";
import ButtonComponent from "../button/button.js";
import HeadingComponent from "../heading/heading.js";
import bustsvg from "./../../assets/svg/bust.svg";
import blackflagsvg from "./../../assets/svg/blackflag.svg";
import userservice from "../../services/userservice.js";
import booksvg from "../../assets/svg/book.svg";
import camerasvg from "../../assets/svg/camera.svg";
import back from "../../assets/svg/back.svg";
import gymimage from "./../../assets/imagecalendar/gym.png";
import booksimage from "./../../assets/imagecalendar/books.png";
import smoothieimage from "./../../assets/imagecalendar/smoothie.png";

import { DifficultyDto } from "../../enum/difficulty.js";

import "./challengeitems.css";

interface ContainerProps {
  _id?: string;
  createdAt?: string;
  categorie?: string;
  challenge?: string;
  completed?: boolean;
  image?: string;
}

const challenges = [
  {
    id: 1,
    days: "Mondays",
    hours: "21h25",
    categories: "Cuisine",
    challenge: "Faire des cookies originaux",
    difficulty: DifficultyDto.Easy,
    image: gymimage,
    followers: 115,
  },
  {
    id: 2,
    days: "Yesterday",
    hours: "06h15",
    categories: "Sport",
    challenge: "Faire 20 pompes et des 40 squats",
    difficulty: DifficultyDto.Medium,
    image: smoothieimage,
    followers: 194,
  },
  {
    id: 3,
    days: "Friday",
    hours: "12h35",
    categories: "Lecture",
    challenge: "Lire 30 pages et rédigés un résumé sur ces 20 pages",
    difficulty: DifficultyDto.Hard,
    image: booksimage,
    followers: 59,
  },
  {
    id: 4,
    days: "Sunday",
    hours: "23h56",
    categories: "Lecture",
    challenge: "Lire 60 pages et achter un nouveaux livre",
    difficulty: DifficultyDto.Medium,
    image: smoothieimage,
    followers: 15695,
  },
];

const ChallengeItemsComponent: React.FC<ContainerProps> = ({ ...props }) => {
  const [showModal, setShowModal] = useState(false);
  const [showToastRedo, setShowToastRedo] = useState(false);
  const [showToastDelete, setShowToastDelete] = useState(false);
  const [isRetweetModalOpen, setIsRetweetModalOpen] = useState(false);
  const [tweetContent, setTweetContent] = useState("");

  const createdAtDate = new Date(props.createdAt || "");
  const timeDifference = Date.now() - createdAtDate.getTime();

  const minutesDifference = Math.floor(timeDifference / (1000 * 60));
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const monthsDifference = Math.floor(
    timeDifference / (1000 * 60 * 60 * 24 * 30)
  );

  let timeRepresentation = "";
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

  const handleRedoButtonClick = () => {
    setShowToastRedo(true);
    setShowModal(false);
  };

  const handleDeleteButtonClick = () => {
    setShowToastDelete(true);
    setShowModal(false);
  };

  const handleRetweetClick = () => {
    setIsRetweetModalOpen(true);
  };

  const handleCancelClick = () => {
    setIsRetweetModalOpen(false);
    setTweetContent("");
  };

  const handleSubmitClick = () => {
    console.log("Tweet submitted:", tweetContent);
    setIsRetweetModalOpen(false);
    setTweetContent("");
  };

  return (
    <div>
      {challenges.map((challenge) => (
        <div key={challenge.id} className="challenge">
          <img
            src={challenge.image}
            alt={challenge.challenge}
            className="challenge-image"
          />
          <div className="flex justify-between challenge-stats">
            <div className="challenge-categories">{challenge.categories}</div>
            <div className="challenge-followers">{challenge.followers}</div>
          </div>
          <div className="flex justify-between challenge-details">
            <div className="challenge-title">{challenge.challenge}</div>
            <button className="challenge-button" onClick={openModal}>
              See more
            </button>
          </div>
        </div>
      ))}

      {/* Modal Display Challenge*/}
      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <IonHeader collapse="fade">
          <IonToolbar>
            <IonButtons slot="start">
              <IonIcon
                onClick={() => setShowModal(false)}
                icon={back}
                size="large"
              />
            </IonButtons>

            <IonTitle>Challenge</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div></div>

        <IonContent className="challenge-modal-container">
          <div className="challenge-modal-container">
            {/* Content */}
            <div className="challenge-modal-content">
              <img
                className="challenge-modal-image"
                src="https://images.pexels.com/photos/19602378/pexels-photo-19602378/free-photo-of-pizza-au-levain-c-est-l-heure-de-margherita.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <div className="tag">Sport</div>
              <div className="description">
                zzrbetnjukus atque! Repellendus, minima quia t illum id.
              </div>
            </div>
            <div className="challenge-modal-description">
              <div className="challenge-modal-description-section">
                <div className="challenge-modal-description-user">
                  Generated by @{userservice.getUserData()?.name ?? "thomato"}
                </div>
                <div className="status-tag">Done</div>
              </div>
              <div className="challenge-modal-description-stats">
                <div className="challenge-modal-description-stat">
                  <img src="#" alt="" />
                  <div className="challenge-modal-description-stat-text">
                    <div>9215</div>
                    <div>Joined</div>
                  </div>
                </div>
                <div className="challenge-modal-description-stat">
                  <img src="#" alt="" />
                  <div className="challenge-modal-description-stat-text">
                    <div>6125</div>
                    <div>Finished</div>
                  </div>
                </div>
                <div className="challenge-modal-description-stat">
                  <img src="#" alt="" />
                  <div className="challenge-modal-description-stat-text">
                    <div>25:07</div>
                    <div>Average</div>
                  </div>
                </div>
              </div>

              <div className="challenge-modal-description-comment">
                <div className="challenge-modal-description-comment-container">
                  <div className="challenge-modal-description-comment-image-container">
                    <img
                      src="https://images.pexels.com/photos/23657500/pexels-photo-23657500/free-photo-of-lumineux-leger-homme-gens.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                      className="challenge-modal-description-comment-image"
                    />
                  </div>
                  <div>
                    <div className="challenge-modal-description-comment-username">Thomato</div>
                    <div className="challenge-modal-description-comment-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto recusandae dignissimos pariatur voluptates? Ut vel
                      praesentium commodi eius ipsam nemo, harum eum blanditiis
                      quasi minus, quo enim facere cum qui?{" "}
                    </div>
                  </div>
                </div>
                <div className="challenge-modal-description-comment-container">
                  <div className="challenge-modal-description-comment-image-container">
                    <img
                      src="https://images.pexels.com/photos/23657500/pexels-photo-23657500/free-photo-of-lumineux-leger-homme-gens.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                      className="challenge-modal-description-comment-image"
                    />
                  </div>
                  <div>
                    <div className="challenge-modal-description-comment-username">Thomato</div>
                    <div className="challenge-modal-description-comment-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto recusandae dignissimos pariatur voluptates? Ut vel
                      praesentium commodi eius ipsam nemo, harum eum blanditiis
                      quasi minus, quo enim facere cum qui?{" "}
                    </div>
                  </div>
                </div>
                <div className="challenge-modal-description-comment-container">
                  <div className="challenge-modal-description-comment-image-container">
                    <img
                      src="https://images.pexels.com/photos/23657500/pexels-photo-23657500/free-photo-of-lumineux-leger-homme-gens.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                      className="challenge-modal-description-comment-image"
                    />
                  </div>
                  <div>
                    <div className="challenge-modal-description-comment-username">Thomato</div>
                    <div className="challenge-modal-description-comment-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto recusandae dignissimos pariatur voluptates? Ut vel
                      praesentium commodi eius ipsam nemo, harum eum blanditiis
                      quasi minus, quo enim facere cum qui?{" "}
                    </div>
                  </div>
                </div>
                <div className="challenge-modal-description-comment-container">
                  <div className="challenge-modal-description-comment-image-container">
                    <img
                      src="https://images.pexels.com/photos/23657500/pexels-photo-23657500/free-photo-of-lumineux-leger-homme-gens.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                      className="challenge-modal-description-comment-image"
                    />
                  </div>
                  <div>
                    <div className="challenge-modal-description-comment-username">Thomato</div>
                    <div className="challenge-modal-description-comment-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto recusandae dignissimos pariatur voluptates? Ut vel
                      praesentium commodi eius ipsam nemo, harum eum blanditiis
                      quasi minus, quo enim facere cum qui?{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="challenge-modal-button">
              <ButtonComponent
                text="Redo"
                width="100%"
                background="var(--ion-gradient-400)"
                padding=".4rem 2rem"
                color="white"
                fontSize="1rem"
                fontWeight="500"
                borderRadius="8px"
                onClick={handleRedoButtonClick}
              ></ButtonComponent>

              <ButtonComponent
                text="Delete"
                width="100%"
                padding=".4rem 2rem"
                fontSize="1rem"
                fontWeight="500"
                borderRadius="8px"
                className="challenge-modal-button-not-selected"
                onClick={handleDeleteButtonClick}
              ></ButtonComponent>
            </div>
          </div>
        </IonContent>
      </IonModal>

      {/* Modal Display Completed */}
      <IonModal
        isOpen={isRetweetModalOpen}
        onDidDismiss={() => setIsRetweetModalOpen(false)}
      >
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonIcon
                onClick={() => setIsRetweetModalOpen(false)}
                icon={caretBack}
                size="medium"
              />
            </IonButtons>

            <IonTitle>Retweet</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <div className="challenge-items-container">
            {/* Arrow redirection */}
            <div className="arrow-icon-container" onClick={openModal}>
              <IonIcon
                icon={caretForwardOutline}
                className="challenge-items-caretForwardOutline"
              />
            </div>

            {/* Logo */}
            {/* <div className="challenge-items-logo-area flex" style={{ backgroundImage: `url(${props.image})` }}></div> */}
            <div className="challenge-items-logo-area flex">
              <img src={camerasvg} alt="" className="flex" />
            </div>

            <div className="challenge-items-text column">
              <div>
                <span style={{ fontWeight: "600" }}>
                  Joined {timeRepresentation} ago
                </span>
              </div>

              <div
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                }}
              >
                {props.challenge}
              </div>
            </div>
          </div>

          <div
            style={{ display: "flex", gap: ".7rem" }}
            className="ion-padding-vertical"
          >
            <div style={{ paddingTop: "5.5px" }}>
              <div className="challenge-items-retweet-pp flex">
                {(userservice.getUserData()?.name ?? "?")[0].toUpperCase()}
              </div>
            </div>

            <IonTextarea
              value={tweetContent}
              onIonChange={(e) => setTweetContent(e.detail.value!)}
              rows={5}
              placeholder="What is happening?!"
              style={{ width: "auto" }}
              autofocus
            ></IonTextarea>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1rem",
              gap: ".5rem",
            }}
          >
            <ButtonComponent
              text="Post"
              width="100%"
              background="var(--ion-gradient-400)"
              padding=".4rem 2rem"
              color="white"
              fontSize="1rem"
              fontWeight="500"
              borderRadius="8px"
              onClick={handleSubmitClick}
            ></ButtonComponent>

            <ButtonComponent
              text="Cancel"
              width="100%"
              padding=".4rem 2rem"
              fontSize="1rem"
              fontWeight="500"
              borderRadius="8px"
              className="challenge-modal-button-not-selected"
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
    </div>
  );
};

export default ChallengeItemsComponent;
