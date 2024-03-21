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
      <img src={props.image} alt="" />
      <div className="challenge-items-description">
        <p>{props.days}</p>
        <p>{props.categorie}</p>
      </div>
    </div>
  );
};

export default ChallengeItemsComponent
