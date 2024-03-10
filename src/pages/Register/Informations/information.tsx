import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ProgressBarComponent from '../../../components/progressbar/progressbar.js';
import './information.css';
import arrowSvg from './../../../assets/svg/leftarrow.svg'

const InformationPage: React.FC = () => {

  return (
    <IonPage>
      <IonContent fullscreen>
        <div id="containerInformations">
          <div className="progressBarContainer flex">
            {/* Arrow */}
            <img src={arrowSvg} alt="" />
            
            {/* Progress Bar */}
            <ProgressBarComponent
              width="90%"
              height="20px"
              percentage="33%"
              color="#02C7A4"
              backgroundColor="#D9D9D9"
            />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default InformationPage;
