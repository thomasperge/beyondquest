import { IonIcon } from '@ionic/react';
import { caretForwardOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { DifficultyDto } from '../../enum/difficulty.js';
import peopleSvg from './../../assets/svg/people.svg'
import './trendchallengeitems.css';

interface ContainerProps {
  challenge: string
  difficulty: DifficultyDto
  iconsvgurl: string
  nbOfParticipants: number
}

const TrendsChallengeItemsComponent: React.FC<ContainerProps> = ({ ...props }) => {
  const history = useHistory();

  const redirectToAuthPage = () => {
    history.push('/challenge');
  };

  return (
    <div className="trends-challenge-items-container">
      {/* Arrow redirection */}
      <div className="arrow-icon-container" onClick={redirectToAuthPage}>
        <IonIcon icon={caretForwardOutline} className='trends-challenge-items-caretForwardOutline' />
      </div>

      {/* Logo */}
      <div className={`trends-challenge-items-logo-area flex ${props.difficulty}`}>
        <img src={props.iconsvgurl} alt="" className="trends-challenge-items-logo" />
      </div>

      {/* Title / Description */}
      <div className="trends-challenge-items-text column">
        {/* Description */}
        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2 }}>
          {props.challenge}
        </div>

        {/* Number of participants */}
        <div style={{display: "flex", alignItems: "center", gap: ".5rem"}}>
          <img src={peopleSvg} alt="" style={{width: "16px", height: "16px"}} className='flex' />
          <div className="span">{props.nbOfParticipants}</div>
        </div>
      </div>
    </div>
  );
};

export default TrendsChallengeItemsComponent
