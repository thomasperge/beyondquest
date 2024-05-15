import { useEffect, useState } from 'react';
import { IonSpinner } from '@ionic/react';
import ChallengeItemsComponent from '../../challengeitems/challengeitems.js';
import HeadingComponent from '../../heading/heading.js';
import ChallengeItemsInProgressComponent from '../../challengeitemsinprogress/challengeitemsinprogress.js';
import './mychallenge.css'

const MyChallengeComponent: React.FC = () => {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const userId = localStorage.getItem('user_id');

        const response = await fetch(`http://localhost:3000/challenge/user/${userId}`);
        if (!response.ok) {
          throw new Error('Une erreur est survenue lors de la récupération des données.');
        }

        const data = await response.json();
        setChallenges(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1.5rem 0' }}>
        <IonSpinner name="crescent"/>
      </div>
    );
  }

  return (
    <div className='ion-padding-bottom'>
      {/* Latest Challenges */}
      <HeadingComponent
        text="Latest Challenges"
        fontSize="1.2rem"
        fontWeight="600"
        color="var(--ion-color-dark)"
        padding="0 0 .5rem 0"
      />

      {/* Aucun challenge terminé */}
      {challenges.every(({ completed }) => !completed) && (
        <div style={{ color: "gray" }}>Aucun challenge terminé</div>
      )}

      {/* Challenges Terminés */}
      <div className="column ion-margin-bottom" style={{ gap: ".5rem" }}>
        {challenges.filter(({ completed }) => completed).map(({ _id, createdAt, hobbies, text, completed }) => (
          <ChallengeItemsComponent
            key={_id}
            createdAt={createdAt}
            categorie={hobbies}
            challenge={text}
            completed={completed}
            image=""
          />
        ))}
      </div>

      {/* Challenges en Cours */}
      <HeadingComponent
        text="Challenges in progress"
        fontSize="1.2rem"
        fontWeight="600"
        color="var(--ion-color-dark)"
        padding="0 0 .5rem 0"
      />

      {/* Aucun challenge en cours */}
      {challenges.every(({ completed }) => completed) && (
        <div style={{ color: "gray" }}>Aucun challenge en cours</div>
      )}

      {/* Challenges en Cours */}
      <div className="column ion-margin-bottom" style={{ gap: ".5rem" }}>
        {challenges.filter(({ completed }) => !completed).map(({ _id, createdAt, hobbies, text, completed }) => (
          <ChallengeItemsInProgressComponent
            key={_id}
            createdAt={createdAt}
            categorie={hobbies}
            challenge={text}
            completed={completed}
            image=""
          />
        ))}
      </div>
    </div>
  );
}

export default MyChallengeComponent;