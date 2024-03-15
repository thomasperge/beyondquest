import { DifficultyDto } from '../../../enum/difficulty.js';
import ChallengeItemsComponent from '../../challengeitems/challengeitems.js';
import HeadingComponent from '../../heading/heading.js';
import cookSvg from "./../../../assets/svg/cook.svg";
import sportSvg from "./../../../assets/svg/sport.svg";
import bookSvg from "./../../../assets/svg/book.svg";
import notepadSvg from "./../../../assets/svg/notepad.svg";
import './mychallenge.css'

const MyChallengeComponent: React.FC = () => {
  const challenges = [
    {
      id: 1,
      days: "Mondays",
      hours: "21h25",
      categories: "Cuisine",
      challenge: "Faire des cookies originaux",
      difficulty: DifficultyDto.Easy,
      iconsvgurl: cookSvg,
    },
    {
      id: 2,
      days: "Yesterday",
      hours: "06h15",
      categories: "Sport",
      challenge: "Faire 20 pompes et des 40 squats",
      difficulty: DifficultyDto.Medium,
      iconsvgurl: sportSvg,
    },
    {
      id: 3,
      days: "Friday",
      hours: "12h35",
      categories: "Lecture",
      challenge: "Lire 30 pages et rédigés un résumé sur ces 20 pages",
      difficulty: DifficultyDto.Hard,
      iconsvgurl: bookSvg,
    },
    {
      id: 4,
      days: "Sunday",
      hours: "23h56",
      categories: "Lecture",
      challenge: "Lire 60 pages et achter un nouveaux livre",
      difficulty: DifficultyDto.Medium,
      iconsvgurl: bookSvg,
    },
    {
      id: 5,
      days: "Monday",
      hours: "11h45",
      categories: "Organisation",
      challenge: "Organiser fete des mères et pères",
      difficulty: DifficultyDto.Easy,
      iconsvgurl: notepadSvg,
    },
  ];

  return (
    <div className='ion-padding-vertical'>
      {/* Latest Challenge */}
      <HeadingComponent
        text="Latest Challenges"
        fontSize="1.2rem"
        fontWeight="600"
        color="var(--ion-color-dark)"
        padding="0 0 .5rem 0"
      />

      {/* All Challenge */}
      <div className="column ion-margin-bottom" style={{ gap: ".5rem" }}>
        {challenges.map(
          ({ id, days, hours, categories, challenge, difficulty, iconsvgurl }) => (
            <ChallengeItemsComponent
              key={id}
              days={days}
              hours={hours}
              categorie={categories}
              challenge={challenge}
              difficulty={difficulty}
              iconsvgurl={iconsvgurl}
            />
          )
        )}
      </div>
    </div>
  );
};

export default MyChallengeComponent;