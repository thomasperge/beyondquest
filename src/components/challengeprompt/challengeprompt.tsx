import React, { useState } from 'react';
import { IonAlert, IonActionSheet } from '@ionic/react';
import { toastController } from '@ionic/core';
import { closeCircleSharp } from 'ionicons/icons';

interface ChallengePromptProps {
  showToast: (message: string) => Promise<void>;
  onDismiss: () => void;
}

const ChallengePromptComponent: React.FC<ChallengePromptProps> = ({ showToast, onDismiss }) => {
  const [showAlert, setShowAlert] = useState(true);
  const [showActionSheet, setShowActionSheet] = useState(false);

  const handleActionSelected = async (category: string) => {
    setShowActionSheet(false);
    setShowAlert(false);
    if (category) {
      await showToastChallenge(`Nouveau défi !\n${category}`);
    }
  };

  const handleAlertDismiss = () => {
    setShowAlert(false);
  };

  const showToastChallenge = async (message: string) => {
    const toast = await toastController.create({
      message: message,
      duration: 5500,
      position: "top",
      cssClass: "orangetoaststyle",
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
            handler: onDismiss,
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
        onDidDismiss={onDismiss}
        buttons={[
          {
            text: "Cuisine",
            handler: () => handleActionSelected("Faire 10 cookies"),
          },
          {
            text: "Musculation",
            handler: () => handleActionSelected("Faire 250 pompes"),
          },
          {
            text: "Lecture",
            handler: () => handleActionSelected("Lire 25 pages"),
          },
          {
            text: "Annuler",
            role: "cancel",
            handler: onDismiss,
          },
        ]}
      />
    </>
  );
};

export default ChallengePromptComponent;
