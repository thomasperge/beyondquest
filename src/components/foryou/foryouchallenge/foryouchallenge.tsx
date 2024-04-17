import ForYouChallengeGenerateByComponent from "../challengegenerateby/challengegenerateby.js";
import "./foryouchallenge.css";

interface ContainerProps {
  profilepicture: string;
  username: string;
  name: string;
  waspostedtime: string;
  sentence: string;
  challengeid: string;
  likes: string;
  comments: string;
}

const ForYouChallengeTweetComponent: React.FC<ContainerProps> = ({ ...props }) => {
  return (
    <div className="for-you-tweet-container">
      {/* Left Tweet */}
      <div className="for-you-tweet-left-container">
        <img src={props.profilepicture} className="for-you-tweet-profile-picture" />
        <div className="for-you-tweet-line"></div>
      </div>

      {/* Right Tweet */}
      <div className="for-you-tweet-right-container">

      </div>

      {/* Container challenge join */}
      <ForYouChallengeGenerateByComponent
        usernamehasgeneratechallenge={"thomasperge"}
        challengetitle={"Make 1000 pushup in 30m"}
        numberpeoplejoined={"750"}
        challengepicture={"https://assets.gqindia.com/photos/5cee7eb00379a73d25177759/4:3/w_1440,h_1080,c_limit/Pushup.jpg"}
      />


    </div>
  );
};

export default ForYouChallengeTweetComponent;
