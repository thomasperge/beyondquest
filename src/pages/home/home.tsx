import React, { useState } from "react";
import { DifficultyDto } from "../../enum/difficulty.js";
import { useHistory } from "react-router";
import gymimage from "./../../assets/imagecalendar/gym.png";
import booksimage from "./../../assets/imagecalendar/books.png";
import smoothieimage from "./../../assets/imagecalendar/smoothie.png";
import ChallengePromptComponent from "../../components/challengeprompt/challengeprompt.js";
import fire from "../../assets/svg/fire.svg";
import task from "../../assets/svg/task.svg";
import gems from "../../assets/svg/gems.svg";
import cooking from "../../assets/svg/cooking.svg";
import reading from "../../assets/svg/reading.svg";
import musculation from "../../assets/svg/musculation.svg";

import "./home.css";
import ChallengeItemsComponent from "../../components/challengeitems/challengeitems.js";

const Home: React.FC = () => {
  const history = useHistory();


  const isNewUser = localStorage.getItem("isNewUser") === "true";
  const [showChallengePrompt, setShowChallengePrompt] = useState(isNewUser);

  const handleChallengePromptDismiss = () => {
    setShowChallengePrompt(false);
    localStorage.setItem("isNewUser", "false");
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good morning,";
    } else if (hour < 18) {
      return "Good afternoon,";
    } else {
      return "Good evening,";
    }
  };

  return (
    <div className="home">
      <div className="home-header">
        <div className="header">
          <div className="title">
          <div>{getGreeting()}</div>
            <div>Thomas !</div>
          </div>
          <div className="stats">
            <div className="stat">
              <img src={fire} alt="" />
              <div>7</div>
            </div>
            <div className="stat">
              <img src={task} alt="" />
              <div>2/3</div>
            </div>
            <div className="stat">
              <img src={gems} alt="" />
              <div>48</div>
            </div>
          </div>
        </div>
        <div className="subtitle">Let's make a lot of Questies today !</div>
        <form className="form">
          <button>
            <svg
              width="17"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="search"
            >
              <path
                d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                stroke="currentColor"
                stroke-width="1.333"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <input className="input" placeholder="Search" type="text"></input>
          <button className="reset" type="reset">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </form>
        <div className="categories">
          <div className="category">
            <img src={cooking} alt="" className="category-icon"/>
            <div className="category-name">Cooking</div>
          </div>
          <div className="category">
            <img src={reading} alt="" className="category-icon"/>
            <div className="category-name">Reading</div>
          </div>
          <div className="category">
            <img src={musculation} alt="" className="category-icon"/>
            <div className="category-name">Musculation</div>
          </div>
        </div>
      </div>

      <div className="challenges">
        <div>
          <div className="flex justify-between">
            <div className="trending">Trending challenges</div>
            <div
              className="seeall"
              onClick={() => history.replace("/challenge", "root")}
            >
              See all
            </div>
          </div>
       
          <ChallengeItemsComponent />
        </div>
      </div>

      {showChallengePrompt && (
        <ChallengePromptComponent onDismiss={handleChallengePromptDismiss} />
      )}
    </div>
  );
};

// export default withUserData(Home);
export default Home;
