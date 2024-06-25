import ForYouChallengeGenerateByComponent from "../challengegenerateby/challengegenerateby.js";
import "./foryouchallenge.css";

interface ContainerProps {
  user_id: string;
  username: string;
  name: string;
  profilepictureLetter: string;
  waspostedtime: string;
  sentence: string;
  challengeid: string;
  likes: string;
  comments: string;
  usernamehasgeneratechallenge: string;
  challengetitle: string;
  numberpeoplejoined: string;
  generatedByUserId: string;
  joinedByUserId: string;
}

const ForYouChallengeTweetComponent: React.FC<ContainerProps> = ({ ...props }) => {
  return (
    <div className="for-you-tweet-container">
      {/* Left Tweet */}
      <div className="for-you-tweet-left-container">
        <div className="for-you-tweet-profile-picture flex">
          {props.profilepictureLetter.toUpperCase()}
        </div>
        <div className="for-you-tweet-line"></div>
      </div>

      {/* Right Tweet */}
      <div className="for-you-tweet-right-container">
        <div className="for-you-tweet-users-area">
          <span style={{ fontWeight: "600" }}>{props.name}</span>
          <span style={{ fontWeight: "400", color: "gray" }}>@{props.username} • {props.waspostedtime}</span>
        </div>

        <div style={{ fontSize: "1.05rem", fontWeight: "500", marginTop: "-5px" }}>{props.sentence}</div>

        {/* Container challenge join */}
        <ForYouChallengeGenerateByComponent
          user_id={props.user_id}
          challenge_id={props.challengeid}
          usernamehasgeneratechallenge={props.usernamehasgeneratechallenge}
          usernamejoinedchallenge={props.username}
          challengetitle={props.challengetitle}
          numberpeoplejoined={props.numberpeoplejoined}
          challengepicture={"https://assets.gqindia.com/photos/5cee7eb00379a73d25177759/4:3/w_1440,h_1080,c_limit/Pushup.jpg"}
          generatedByUserId={props.generatedByUserId}
          joinedByUserId={props.joinedByUserId}
        />
      </div>
    </div>
  );
};

export default ForYouChallengeTweetComponent;
