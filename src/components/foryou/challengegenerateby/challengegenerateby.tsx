import ButtonComponent from '../../button/button.js';
import bustimage from './../../../assets/svg/bust.svg'
import './challengegenerateby.css';

interface ContainerProps {
  usernamehasgeneratechallenge: string;
  usernamejoinedchallenge?: string;
  challengetitle: string;
  numberpeoplejoined: string;
  challengepicture: string;
}

const ForYouChallengeGenerateByComponent: React.FC<ContainerProps> = ({ ...props }) => {
  return (
    <>
      <div className="challenge-generate-by-container">
        <div className="challenge-generate-for">
          {props.usernamejoinedchallenge ? (
            <div className='challenge-generate-for-text'>Generate for <span style={{textDecoration: "underline"}}>@{props.usernamejoinedchallenge}</span> by <span style={{textDecoration: "underline"}}>@{props.usernamehasgeneratechallenge}</span></div>
          ) : (
            <div className='challenge-generate-for-text'>Generate for <span style={{textDecoration: "underline"}}>@{props.usernamehasgeneratechallenge}</span></div>
          )}
        </div>

        <div className="challenge-generate-by-area">
          <img src={props.challengepicture} alt="" className="challenge-generate-by-image" />

          <div className="challenge-generate-by-infos">
            <div className="challenge-generate-by-title">{props.challengetitle}</div>
            <div className="challenge-generate-by-people">
              <img src={bustimage} alt="" className="challenge-generate-by-people-logo flex" />
              <div className="flex">{props.numberpeoplejoined} joined</div>
            </div>
            <ButtonComponent
              text="Join"
              background='var(--ion-gradient-400)'
              padding='.4rem 2rem'
              color='white'
              fontSize='1rem'
              fontWeight='500'
              borderRadius='8px'
              className='challenge-generate-by-join-button flex'
            ></ButtonComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForYouChallengeGenerateByComponent;
