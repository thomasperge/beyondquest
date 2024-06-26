import React, { useEffect, useState } from 'react';
import { UserAllChallengeJoinedDto } from '../../enum/userAllChallenge.js';
import withUserData from '../../services/useUserData.js';
import AchievmentItems from '../../components/achievmentitems/achievmentitems.js';
import environment from '../../environment.js';
import { IonRefresher, IonRefresherContent, IonSpinner } from '@ionic/react';
import './challenge.css';

const Achievment: React.FC = () => {
  const [allchallenge, setallchallenge] = useState<UserAllChallengeJoinedDto[]>([]);
  const [loading, setLoading] = useState(true);

  const categoryCountMap = allchallenge.reduce((acc, challenge) => {
    if (acc[challenge.hobbies]) {
      acc[challenge.hobbies]++;
    } else {
      acc[challenge.hobbies] = 1;
    }
    return acc;
  }, {} as { [key: string]: number });

  const handleRefresh = async (event: CustomEvent) => {
    await fetchData();
    event.detail.complete();
  };

  const uniqueCategories = Object.keys(categoryCountMap);

  const fetchData = async () => {
    try {
      const response = await fetch(environment.ACTIVE_URL + `/challenge/user/${localStorage.getItem("user_id")}`);

      if (!response.ok) {
        throw new Error('Une erreur est survenue lors de la récupération des données.');
      }

      const data = await response.json();
      const finishedChallenges = data.filter((challenge: any) => challenge.completed);

      finishedChallenges.sort((a: any, b: any) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });

      setallchallenge(finishedChallenges)
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [localStorage.getItem("user_id")]);



  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1.5rem 0' }}>
        <IonSpinner name="crescent" />
      </div>
    );
  }

  return (
    <>
      <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
        <IonRefresherContent />
      </IonRefresher>

      <div className="challenge-container">
        <div className="category-list">
          <p style={{fontWeight: "600", fontSize: "1.2rem"}}>Liste des catégories :</p>
          {uniqueCategories.length > 0 ? (
            uniqueCategories.map((category, index) => (
              <AchievmentItems
                key={index} // Utilisation de l'index comme clé, ce qui peut provoquer des problèmes
                categorie_title={category}
                description={`Jouer à ${category}`}
                level={Math.floor(categoryCountMap[category] / 4)}
                number_challenge={categoryCountMap[category]}
              />
            ))
          ) : (
            <p>Aucun challenge trouvé.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default withUserData(Achievment);
