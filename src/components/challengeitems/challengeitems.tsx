import { IonIcon } from '@ionic/react';
import { caretForwardOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { DifficultyDto } from '../../enum/difficulty.js';
import './challengeitems.css';

interface ContainerProps {
  days: string;
  hours: string;
  categorie: string;
  challenge: string;
  difficulty: DifficultyDto;
  image: string
}

const ChallengeItemsComponent: React.FC<ContainerProps> = ({ ...props }) => {
  const history = useHistory();

  const redirectToAuthPage = () => {
    history.push('/auth');
  };

  return (
    <div className="challenge-items-container">
      {/* Arrow redirection */}
      <div className="arrow-icon-container" onClick={redirectToAuthPage}>
        <IonIcon icon={caretForwardOutline} className='challenge-items-caretForwardOutline' />
      </div>

      {/* Logo */}
      <div className="challenge-items-logo-area flex" style={{ backgroundImage: `url(${props.image})` }}></div>

      {/* Title / Description */}
      <div className="challenge-items-text column">
        {/* Date */}
        <div>
          <span style={{ fontWeight: "600" }}>{props.days}</span> - {props.hours}
        </div>

        {/* Description */}
        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2 }}>
          {props.challenge}
        </div>
      </div>
    </div>
  );
};

export default ChallengeItemsComponent
