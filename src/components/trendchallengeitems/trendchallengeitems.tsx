import { IonIcon } from "@ionic/react";
import { caretForwardOutline } from "ionicons/icons";
import { useHistory } from "react-router";
import { DifficultyDto } from "../../enum/difficulty.js";
import peopleSvg from "./../../assets/svg/people.svg";
import "./trendchallengeitems.css";
import ButtonComponent from "../button/button.js";
import HeadingComponent from "../heading/heading.js";

interface ContainerProps {
  categorie: string;
  challenge: string;
  difficulty: DifficultyDto;
  nbOfParticipants: number;
  image: string;
  generateBy: string;
}

const TrendsChallengeItemsComponent: React.FC<ContainerProps> = ({
  ...props
}) => {
  const history = useHistory();

  const redirectToAuthPage = () => {
    history.push("/challenge");
  };

  return (
    <div className="trends-challenge-items-container">
      <div className="" style={{ marginBottom: "10px" }}>
        <div className="trends-challenge-generate-by-area">
          Generate by{" "}
          <span
            onClick={redirectToAuthPage}
            style={{ fontWeight: "600", textDecoration: "underline" }}
          >
            @{props.generateBy}
          </span>
        </div>
      </div>
      {/* Logo */}

      <div>
        <img src={props.image} className="trends-challenge-items-img" alt="" />
      </div>
      <div className=" space-between" style={{ marginTop: "10px" }}>
        <div style={{ fontWeight: "700", fontSize: "1.25rem" }}>
          {props.categorie}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
          <img
            src={peopleSvg}
            alt=""
            style={{ width: "16px", height: "16px" }}
            className="flex"
          />
          <div className="span">{props.nbOfParticipants}</div>
        </div>
      </div>
      {/* Title / Description */}
      <div className="space-between" style={{ marginTop: "5px" }}>
        {/* Generate */}
        {/* Description */}
        <div
          className="trends-challenge-challenge"
          style={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          {props.challenge}
        </div>
        <div className="trend-challenge-join-area">
          {/* Button Join */}
          <ButtonComponent
            text="Join"
            background="var(--ion-gradient-400)"
            padding=".4rem 1.5rem"
            color="white"
            fontSize="1rem"
            fontWeight="500"
            borderRadius="8px"
          ></ButtonComponent>
          {/* Number of participants */}
        </div>
      </div>
    </div>
  );
};

export default TrendsChallengeItemsComponent;
