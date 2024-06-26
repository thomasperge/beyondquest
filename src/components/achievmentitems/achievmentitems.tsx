import React from 'react';
import './achievmentitems.css';
import { footballOutline, restaurantOutline, barChartOutline, laptopOutline, peopleOutline, bookOutline, languageOutline, globe } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

interface Props {
  categorie_title: string
  description: string
  level: number
  number_challenge: number
}

const AchievmentItems: React.FC<Props> = ({ ...props }) => {
  const hobbyStyles: { [key: string]: { icon: any; background: string } } = {
    Sport: { icon: footballOutline, background: 'linear-gradient(180deg, #FFD700 0%, #FFA500 100%)' },
    Cuisine: { icon: restaurantOutline, background: 'linear-gradient(180deg, #FF4500 0%, #FF6347 100%)' },
    Finance: { icon: barChartOutline, background: 'linear-gradient(180deg, #00FF00 0%, #008000 100%)' },
    Informatique: { icon: laptopOutline, background: 'linear-gradient(180deg, #1E90FF 0%, #4169E1 100%)' },
    Relation_Sociale: { icon: peopleOutline, background: 'linear-gradient(180deg, #FF69B4 0%, #FF1493 100%)' },
    Lecture: { icon: bookOutline, background: 'linear-gradient(180deg, #87CEFA 0%, #4682B4 100%)' },
    Langue: { icon: languageOutline, background: 'linear-gradient(180deg, #6A5ACD 0%, #483D8B 100%)' },
    Autres: { icon: globe, background: 'linear-gradient(180deg, #A9A9A9 0%, #808080 100%)' },
  };

  const normalizeHobbyKey = (hobby: string): string => {
    let normalized = hobby.replace(/\s+/g, '_');
    normalized = normalized.replace(/\(.*\)/g, '');
    return normalized;
  };

  const normalizedCategoryKey = normalizeHobbyKey(props.categorie_title);

  const hobbyStyle = hobbyStyles[normalizedCategoryKey];

  return (
    <div className="achie-container">
      <div className="achie-area1">
        <div className="achie-icon flex" style={{background: hobbyStyle?.background,}}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <IonIcon icon={hobbyStyle?.icon} size="large" />
          </div>
        </div>
        <div className="achie-level">Level {props.level}</div>
      </div>

      <div className="achie-area2">
        <div style={{ display: "flex", flexDirection: "column", gap: ".2rem" }}>
          <div className="achie-title">{props.categorie_title}</div>
          <div className="achie-desc">{props.description}</div>
        </div>
        <div className="flex" style={{ gap: ".5rem" }}>
          <div className="archi-progress-bar">
            <div className="archi-progress-bar-container" style={{ width: `${(props.number_challenge / 5) * 100}%` }}></div>
          </div>
          <div className='archi-preogress-bar-level-text'>{props.number_challenge}/5</div>
        </div>
      </div>
    </div>
  );
};

export default AchievmentItems;
