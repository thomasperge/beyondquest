import { IonItem, IonIcon, IonInput } from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import './friends.css'
import HeadingComponent from "../../components/heading/heading.js";

const Friends: React.FC = () => {
  return (
    <div className="container ion-padding-vertical" style={{ height: "100%", color: "black", fontWeight: '600' }}>
      <IonItem lines="none" className="custom-input ion-margin-vertical">
        <IonIcon icon={searchOutline} slot="start" />
        <IonInput placeholder="Your text here" className="input-text"></IonInput>
      </IonItem>

      <HeadingComponent
        text="My friends"
        fontSize="1.1rem"
        fontWeight="600"
        color="var(--ion-color-dark)"
        padding=".5rem 0 .5rem 0"
      />

      <div className="friends-challenge-container flex column">
        <HeadingComponent
          text="You don’t have friends ?!!"
          fontSize="1rem"
          fontWeight="600"
          color="var(--ion-color-800)"
        />

        <HeadingComponent
          text="Invite your friends now and be productive together"
          fontSize=".75rem"
          fontWeight="400"
          padding="0 1.6rem"
          color="var(--ion-color-800)"
        />
      </div>
    </div>
  );
};

export default Friends;
