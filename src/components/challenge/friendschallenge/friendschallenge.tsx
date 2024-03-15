import HeadingComponent from "../../heading/heading.js";
import './friendschallenge.css'

interface ContainerProps {
  title: string;
  subtitle: string;
  svg: string;
}

const FriendsChallengeComponent: React.FC = () => {
  return (
    <div className='ion-padding-vertical'>
      <HeadingComponent
        text="Friends Challenges"
        fontSize="1.2rem"
        fontWeight="600"
        color="var(--ion-color-dark)"
        padding="0 0 .5rem 0"
      />

      <div className="friends-challenge-container flex column">
        <HeadingComponent
          text="Your friends haven't posted yet"
          fontSize="1rem"
          fontWeight="600"
          color="var(--ion-color-800)"
        />

        <HeadingComponent
          text="Wait for their post and discuss among yourselves"
          fontSize=".75rem"
          fontWeight="400"
          padding="0 1.6rem"
          color="var(--ion-color-800)"
        />
      </div>
    </div>
  );
};

export default FriendsChallengeComponent;