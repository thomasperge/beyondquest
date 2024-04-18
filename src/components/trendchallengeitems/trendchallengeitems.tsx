import { IonIcon } from '@ionic/react';
import { caretForwardOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { DifficultyDto } from '../../enum/difficulty.js';
import peopleSvg from './../../assets/svg/bust.svg'
import './trendchallengeitems.css';
import ButtonComponent from '../button/button.js';

interface ContainerProps {
  categorie: string
  challenge: string
  difficulty: DifficultyDto
  nbOfParticipants: number
  image: string
  generateBy: string
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
      <div className={`trends-challenge-items-logo-area flex`} style={{ backgroundImage: `url(${props.image})` }}></div>

      {/* Title / Description */}
      <div className="trends-challenge-items-text column">
        {/* Generate */}
        <div className="trends-challenge-generate-by-area">
          Generate by <span onClick={redirectToAuthPage} className='trends-challenge-generate-by'>{props.generateBy}</span>
        </div>

        {/* Description */}
        <div className='trends-challenge-challenge' style={{ overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2 }}>
          {props.challenge}
        </div>

        <div className="trend-challenge-join-area">
          {/* Button Join */}
          <ButtonComponent
            text="Join"
            background='var(--ion-gradient-400)'
            padding='.4rem 2rem'
            color='white'
            fontSize='1rem'
            fontWeight='500'
            borderRadius='8px'
          ></ButtonComponent>

          {/* Number of participants */}
          <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
            <img src={peopleSvg} alt="" style={{ width: "16px", height: "16px" }} className='flex' />
            <div className="span">{props.nbOfParticipants}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendsChallengeItemsComponent
