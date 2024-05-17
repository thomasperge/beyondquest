import React, { useState } from "react";
import {IonToast } from '@ionic/react';
import { DifficultyDto } from "../../enum/difficulty.js";
import { useHistory } from "react-router";
import gymimage from "./../../assets/imagecalendar/gym.png";
import booksimage from "./../../assets/imagecalendar/books.png";
import smoothieimage from "./../../assets/imagecalendar/smoothie.png";
import ChallengePromptComponent from "../../components/challengeprompt/challengeprompt.js";

import "./home.css";

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

const Home: React.FC = () => {
  const history = useHistory();

  const redirectToAuthPage = () => {
    history.push('/challenge');

  };

  const isNewUser = localStorage.getItem("isNewUser") === "true";
  const [showChallengePrompt, setShowChallengePrompt] = useState(isNewUser);

  const handleChallengePromptDismiss = () => {
    setShowChallengePrompt(false);
    localStorage.setItem("isNewUser", "false");
  };

  return (
    <div className="home">
      <div className="home-header">
        <div className="header">
          <div className="title">
            <div>Good morning,</div>
            <div>Thomas !</div>
          </div>
          <div className="stats">
            <div className="stat">7</div>
            <div className="stat">2/3</div>
            <div className="stat">48</div>
          </div>
        </div>
        <div className="subtitle">Let's make a lot of Questies today !</div>
        <input type="text" placeholder="Search" className="searchbar"/>
        <div className="categories">
          <div className="category">
            <div className="icon">icon</div>
            <div className="category-name">Cooking</div>
          </div>
          <div className="category">
            <div className="icon">icon</div>
            <div className="category-name">Reading</div>
          </div>
          <div className="category">
            <div className="icon">icon</div>
            <div className="category-name">Musculation</div>
          </div>
        </div>
      </div>

      <div className="challenges">
       <div>
        <div className="flex justify-between">
          <div className="trending">Trending challenges</div>
          <div className="seeall" onClick={() => history.replace('/challenge', 'root')}>See all</div>
        </div>
        {challenges.map((challenge) => (
          <div key={challenge.id} className="challenge">
            <img src={challenge.image} alt={challenge.challenge} className="challenge-image"/>
            <div className="flex justify-between challenge-stats">
              <div className="challenge-categories">{challenge.categories}</div>
              <div className="challenge-followers">{challenge.followers}</div>
            </div>
            <div className="flex justify-between challenge-details">
              <div className="challenge-title">{challenge.challenge}</div>
              <button className="challenge-button" onClick={redirectToAuthPage}>See more</button>
            </div>
          </div>
        ))}
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
