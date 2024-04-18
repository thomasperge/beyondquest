import ForYouChallengeGenerateByComponent from "../challengegenerateby/challengegenerateby.js";
import likesvg from "./../../../assets/svg/like.svg"
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
        <div className="for-you-tweet-users-area">
          <span style={{ fontWeight: "600" }}>{props.name}</span>
          <span style={{ fontWeight: "400", color: "gray" }}>@{props.username} • {props.waspostedtime}</span>
        </div>

        <div style={{ fontWeight: "500", marginTop: "-5px" }}>{props.sentence}</div>

        {/* Container challenge join */}
        <ForYouChallengeGenerateByComponent
          usernamehasgeneratechallenge={"thomasperge"}
          challengetitle={"Make 1000 pushup in 30m"}
          numberpeoplejoined={"750"}
          challengepicture={"https://assets.gqindia.com/photos/5cee7eb00379a73d25177759/4:3/w_1440,h_1080,c_limit/Pushup.jpg"}
        />

        <div className="for-you-tweet-interaction">
          <img className="for-you-tweet-like flex" src={likesvg} alt="" />
          <div>{props.likes} likes</div>
        </div>
      </div>
    </div>
  );
};

export default ForYouChallengeTweetComponent;
