import React, { useState } from 'react';
import { IonAlert, IonActionSheet, IonLoading } from '@ionic/react';
import { toastController } from '@ionic/core';

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

  const handleActionSheetSelected = async (category: string) => {
    setShowActionSheet(false);
    setShowLoading(true); // Afficher le IonLoading
    setTimeout(() => {
      setShowLoading(false); // Masquer le IonLoading après 3000 ms
      showToastChallenge("Chargement terminé."); // Afficher le toast après le chargement
      onDismiss(); // Fermer le composant
    }, 3000);
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
              onDismiss(); // Fermer le composant
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
          {
            text: "Cuisine",
            handler: () => handleActionSheetSelected("Faire 10 cookies"),
          },
          {
            text: "Musculation",
            handler: () => handleActionSheetSelected("Faire 250 pompes"),
          },
          {
            text: "Lecture",
            handler: () => handleActionSheetSelected("Lire 25 pages"),
          },
          {
            text: "Annuler",
            role: "cancel",
            handler: () => {
              onDismiss();
            },
          },
        ]}
      />

      {/* IonLoading */}
      <IonLoading
        isOpen={showLoading}
        message={'Chargement... Veuillez patienter.'}
        duration={3000} // Durée d'affichage en ms
      />
    </>
  );
};

export default ChallengePromptComponent;
