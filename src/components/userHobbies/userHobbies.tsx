import React from 'react';
import { footballOutline, bookOutline, barChartOutline, globeOutline, languageOutline, laptopOutline, peopleOutline, restaurantOutline, globe } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const UserHobbiesComponent: React.FC<{ hobbies: string[] }> = ({ hobbies }) => {
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

  return (
    <>
      {hobbies.map((hobby, index) => {
        const normalizedHobby = normalizeHobbyKey(hobby);
        const style = hobbyStyles[normalizedHobby] || {
          icon: globe,
          background: 'linear-gradient(180deg, #7DF452 0%, #39AD10 100%)'
        };

        return (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem 1.8rem",
              background: style.background,

              borderRadius: "8px",
            }}
          >
            {" "}
            <IonIcon icon={style.icon} size="large" />
          </div>
        );
      })}
    </>
  );
};

export default UserHobbiesComponent