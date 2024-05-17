import React, { useState } from 'react';
import { IonAlert, IonActionSheet, IonLoading } from '@ionic/react';
import { toastController } from '@ionic/core';
import userservice from '../../services/userservice';

interface ChallengePromptProps {
  onDismiss: () => void;
}

const ChallengePromptComponent: React.FC<ChallengePromptProps> = ({ onDismiss }) => {
  const [showAlert, setShowAlert] = useState(true);
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const handleAlertDismiss = () => {
    setShowAlert(false);
    setShowActionSheet(true);
  };

  const handleActionSheetSelected = async (hobby: string) => {
    setShowActionSheet(false);
    setShowLoading(true);

    // setTimeout(() => {
    //   setShowLoading(false);
    //   showToastChallenge("Chargement terminé.");
    //   onDismiss();
    // }, 3000);

    try {
      const userData = { ...userservice.getUserData(), hobbies: hobby };
      const response = await fetch('https://scary-ruby-cuff-links.cyclic.app/challenge/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      console.log(response);

      if (response.ok) {
        try {
          const responseData = await response.json();

          setShowLoading(false);
          showToastChallenge(responseData.text);
        } catch (error) {
          console.log(error);
        }
      } else {
        throw new Error('Une erreur est survenue lors de la récupération des données.');
      }
    } catch (error: any) {
      console.log(error);
      setShowLoading(false);
      showToastChallenge(error.message);
    } finally {
      onDismiss();
    }
  };

  const showToastChallenge = async (message: string) => {
    const toast = await toastController.create({
      message: message,
      duration: 5500,
      position: "top",
      cssClass: "greentoaststyle",
    });
    toast.present();
  };

  return (
    <>
      {/* IonAlert */}
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={handleAlertDismiss}
        header={"Prêt à relever un défi ?"}
        message={"Sélectionnez votre choix ci-dessous."}
        buttons={[
          {
            text: "Pas maintenant",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
              onDismiss();
            },
          },
          {
            text: "Je suis prêt !",
            cssClass: "success",
            handler: () => setShowActionSheet(true),
          },
        ]}
      />

      {/* IonActionSheet => Choose Categorie */}
      <IonActionSheet
        isOpen={showActionSheet}
        buttons={[
          ...(userservice.getUserData().hobbies || []).map((hobby, index) => ({
            text: hobby,
            handler: () => handleActionSheetSelected(hobby),
          })),
          {
            text: "Annuler",
            role: "cancel",
            handler: onDismiss,
          },
        ]}
      />

      {/* IonLoading */}
      <IonLoading
        isOpen={showLoading}
        message={'Chargement... Veuillez patienter.'}
        duration={3000}
      />
    </>
  );
};

export default ChallengePromptComponent;
