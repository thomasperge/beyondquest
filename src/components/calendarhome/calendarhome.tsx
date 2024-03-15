import { useHistory } from 'react-router';
import { StreakDto } from '../../enum/streak.js';
import moment from 'moment';
import ButtonComponent from '../button/button.js';
import './calendarhome.css';

interface ContainerProps {
  lastnbDays: number;
  daywithStreak: StreakDto;
  redirection: string
}

const CalendarHomeComponent: React.FC<ContainerProps> = ({ ...props }) => {
  const history = useHistory();

  // Get Last 14 days
  const last14Days = [];
  for (let i = 0; i < props.lastnbDays; i++) {
    last14Days.push(moment().subtract(i, 'days').format('D'));
  }

  const specialDays = props.daywithStreak;

  const viewAllMemories = () => {
    history.push(props.redirection);
  };

  return (
    <div className="calendar-container ion-margin-bottom">
      <div className="calendar-header">Last 14 days</div>

      <div className="calendar-grid">
        {last14Days.reverse().map((day, index) => {
          const matchingPair = props.daywithStreak.find(([dayValue, _]) => dayValue === day);
          const backgroundImage = matchingPair ? `url(${matchingPair[1]})` : 'none';

          return (
            <div key={index} className={`calendar-day ${matchingPair ? 'special-day' : ''} flex`} style={{ background: backgroundImage !== 'none' ? `rgba(255, 255, 255, 0.5) ${backgroundImage} no-repeat center center / cover` : 'none', }}>
              {day}
            </div>
          );
        })}
      </div>

      <div className="flex">
        <ButtonComponent
          text='View all my challenges'
          padding='.8rem 1.5rem'
          background='transparent'
          color='#ffffff'
          fontSize='.9rem'
          fontWeight='500'
          border='3px solid #565656'
          borderRadius='15px'
          onClick={viewAllMemories}
        ></ButtonComponent>
      </div>
    </div>
  );
};

export default CalendarHomeComponent;