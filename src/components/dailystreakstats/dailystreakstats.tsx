import './dailystreakstats.css';

interface ContainerProps {
  nbStreak: string;
  dailyChallenge: string;
}

const DailyStreakStatsComponent: React.FC<ContainerProps> = ({ ...props }) => {
  return (
    <div className="dailystreak">
      {/* Streak */}
      <div className="dailystreak-items column">
        <div className="dailystreak-title">
          Streak
        </div>
        <div className="dailystreak-number flex">
          {props.nbStreak}
        </div>
      </div>

      {/* Daily Challenge */}
      <div className="dailystreak-items column">
        <div className="dailystreak-title">
          Daily challenge
        </div>
        <div className="dailystreak-number flex">
          {props.dailyChallenge}
        </div>
      </div>
    </div>
  );
};

export default DailyStreakStatsComponent;