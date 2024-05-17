import { useEffect, useState } from 'react';
import { IonRefresher, IonRefresherContent, IonSpinner } from '@ionic/react';
import ChallengeItemsComponent from '../../challengeitems/challengeitems.js';
import HeadingComponent from '../../heading/heading.js';
import ChallengeItemsInProgressComponent from '../../challengeitemsinprogress/challengeitemsinprogress.js';
import './mychallenge.css'
import hourglassvg from '../../../assets/svg/hourglass.svg'
import targetvg from '../../../assets/svg/target.svg'

const MyChallengeComponent: React.FC = () => {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const userId = localStorage.getItem('user_id');

      const response = await fetch(`https://scary-ruby-cuff-links.cyclic.app/challenge/user/${userId}`);
      if (!response.ok) {
        throw new Error('Une erreur est survenue lors de la récupération des données.');
      }

      const data = await response.json();
      console.log(data);
      setChallenges(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1.5rem 0' }}>
        <IonSpinner name="crescent" />
      </div>
    );
  }

  const handleRefresh = async (event: CustomEvent) => {
    await fetchData();
    event.detail.complete();
  };

  return (
    <>
      <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
        <IonRefresherContent />
      </IonRefresher>

      {/* Affichage des données */}
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <IonSpinner name="crescent" />
        </div>
      ) : (
        <div className='ion-padding-vertical'>
          {/* Challenges en Cours */}
          <div style={{ display: 'flex', alignItems: 'center', gap: ".5rem" }} className='ion-padding-bottom'>
            <img src={hourglassvg} className='flex' alt="" style={{ width: "21px", height: "21px" }} />

            <HeadingComponent
              text="Challenges in progress"
              fontSize="1.2rem"
              fontWeight="600"
              color="var(--ion-color-dark)"
            />
          </div>

          {/* Aucun challenge en cours */}
          {challenges.every(({ completed }) => completed) && (
            <div style={{ color: "gray" }}>Aucun challenge en cours</div>
          )}

          {/* Challenges en Cours */}
          <div className="column ion-margin-bottom" style={{ gap: ".5rem" }}>
            {challenges.filter(({ completed }) => !completed).reverse().map(({ challenge_joined_id, challenge_id, createdAt, hobbies, text, completed }) => (
              <ChallengeItemsInProgressComponent
                key={challenge_id}
                _id={challenge_joined_id}
                createdAt={createdAt}
                categorie={hobbies}
                challenge={text}
                completed={completed}
                image=""
              />
            ))}
          </div>
          {/* Latest Challenges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: ".5rem" }} className='ion-padding-bottom'>
            <img src={targetvg} className='flex' alt="" style={{ width: "23px", height: "23px" }} />

            <HeadingComponent
              text="Challenges completed"
              fontSize="1.2rem"
              fontWeight="600"
              color="var(--ion-color-dark)"
            />
          </div>

          {/* Aucun challenge terminé */}
          {challenges.every(({ completed }) => !completed) && (
            <div style={{ color: "gray" }}>Aucun challenge terminé</div>
          )}

          {/* Challenges Terminés */}
          <div className="column ion-margin-bottom" style={{ gap: ".5rem" }}>
            {challenges.filter(({ completed }) => completed).reverse().map(({ challenge_joined_id, challenge_id, createdAt, hobbies, text, completed }) => (
              <ChallengeItemsComponent
                key={challenge_id}
                _id={challenge_joined_id}
                createdAt={createdAt}
                categorie={hobbies}
                challenge={text}
                completed={completed}
                image=""
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default MyChallengeComponent;