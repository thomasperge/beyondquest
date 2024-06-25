import "./profile.css";
import { IonIcon, IonSpinner } from "@ionic/react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import {
  checkmark,
  clipboardOutline,
  flame,
  timer,
} from "ionicons/icons";
import userservice from "../../services/userservice";
import ButtonComponent from "../../components/button/button";
import UserHobbiesComponent from "../../components/userHobbies/userHobbies";
import environment from "../../environment";
import { UserInformationsDto } from "../../enum/userInformation";

const ProfilePage: React.FC = () => {
  const userData = userservice.getUserData();
  const params = useParams();
  const userid: any = params;
  const [profileUserProps, setProfileUserProps] = useState<UserInformationsDto>({
    _id: '',
    name: '',
    lastname: '',
    age: 0,
    password: '',
    hobbies: [],
    createdAt: new Date(),
  });
  const [loading, setLoading] = useState(false);

  // == Followed useState
  const [isFollowed, setIsFollowed] = useState(false);
  const handleFollowClick = () => {
    setIsFollowed(!isFollowed);
  };

  let result;

  const getDateString = (userDateJoined: any) => {
    if (userDateJoined) {
      const date = new Date(userDateJoined);

      const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long' as 'long'
      };
      const formattedDate = date.toLocaleDateString('fr-FR', options);

      result = `A rejoint le ${formattedDate}`;
      return result;
    }
  }

  const fetchUserData = async (userId: string) => {
    setLoading(true);
    try {
      const response = await fetch(environment.ACTIVE_URL + `/users/data/${userId}`);
      if (!response.ok) {
        throw new Error('Une erreur est survenue lors de la récupération des données.');
      }

      const data = await response.json();
      setProfileUserProps({ ...data });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userid?.userid) {
      fetchUserData(userid.userid);
    }
  }, [userid.userid]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1.5rem 0' }}>
        <IonSpinner name="crescent" />
      </div>
    );
  }

  return (
    <div style={{ marginTop: "30px" }} className="ion-padding-bottom">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ fontWeight: "700", fontSize: " 1.5rem" }}>
            {userid.userid ? profileUserProps.name : userData.name}
          </div>
          <div style={{ fontWeight: "500", color: "#00302B80" }}>France</div>
          <div style={{ fontWeight: "500", color: "#00302B80" }}>
            {userid.userid ? getDateString(profileUserProps.createdAt) : getDateString(userData.createdAt)}
          </div>
        </div>
        <div
          style={{
            borderRadius: "100%",
            padding: "2rem",
            backgroundColor: "#4573E8",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "600",
            color: "white",
            fontSize: "2rem",
          }}
        >
          {userid.userid ? profileUserProps.name?.toUpperCase()[0] : userData.name?.toUpperCase()[0]}
        </div>
      </div>
      <div style={{ margin: "20px 0px", color: "#02C7A4", fontWeight: "600" }}>
        0 Followers
      </div>


      {!userid?.userid ? (
        <ButtonComponent
          text="Edit"
          background="var(--ion-gradient-400)"
          padding=".7rem"
          width="100%"
          color="white"
          fontSize="1rem"
          fontWeight="500"
          borderRadius="8px"
          className="flex"
        />
      ) : (
        <ButtonComponent
          text={isFollowed ? "Followed" : "Follow"}
          background={isFollowed ? "blue" : "transparent"}
          padding=".7rem"
          width="100%"
          color={isFollowed ? "white" : "black"}
          fontSize="1rem"
          fontWeight="500"
          borderRadius="8px"
          border={isFollowed ? "none" : "1.5px solid gray"}
          className="flex"
          onClick={handleFollowClick}
        />
      )}

      <div style={{ margin: "30px 0px" }}>
        <div
          style={{ fontWeight: "600", fontSize: "1.1rem", marginBottom: "10px" }}
        >
          Biographie
        </div>
        <div style={{ fontSize: "0.9rem" }}>
          No bio.
        </div>
      </div>

      <div>
        <div
          style={{ fontWeight: "600", fontSize: "1.1rem", marginBottom: "10px" }}
        >
          Statistics
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "10px",
          }}
        >
          <div
            style={{
              backgroundColor: "#EBFEF8",
              borderRadius: "8px",
              padding: " 1.2rem .8rem",
              boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <IonIcon icon={flame} size="small"></IonIcon>
              <div
                style={{
                  fontWeight: "600",
                  color: "#00302B",
                  fontSize: "1.2rem",
                }}
              >
                0
              </div>
            </div>
            <div
              style={{
                fontWeight: "600",
                color: "#00302B90",
                marginTop: "6px",
              }}
            >
              Day Streak
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#EBFEF8",
              borderRadius: "8px",
              padding: " 1.2rem .8rem",
              boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <IonIcon icon={checkmark} size="small"></IonIcon>
              <div
                style={{
                  fontWeight: "600",
                  color: "#00302B",
                  fontSize: "1.2rem",
                }}
              >
                0
              </div>
            </div>
            <div
              style={{
                fontWeight: "600",
                color: "#00302B90",
                marginTop: "6px",
              }}
            >
              Total challenges
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#EBFEF8",
              borderRadius: "8px",
              padding: " 1.2rem .8rem",
              boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <IonIcon icon={timer} size="small"></IonIcon>
              <div
                style={{
                  fontWeight: "600",
                  color: "#00302B",
                  fontSize: "1.2rem",
                }}
              >
                0:00
              </div>
            </div>
            <div
              style={{
                fontWeight: "600",
                color: "#00302B90",
                marginTop: "6px",
              }}
            >
              Best time
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#EBFEF8",
              borderRadius: "8px",
              padding: " 1.2rem .8rem",
              boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <IonIcon icon={clipboardOutline} size="small"></IonIcon>
              <div
                style={{
                  fontWeight: "600",
                  color: "#00302B",
                  fontSize: "1.2rem",
                }}
              >
                0/3
              </div>
            </div>
            <div
              style={{
                fontWeight: "600",
                color: "#00302B90",
                marginTop: "6px",
              }}
            >
              Questies
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            fontWeight: "600",
            fontSize: "1.1rem",
            marginBottom: "10px",
            marginTop: "30px",
          }}
        >
          Centre d'intérêt(s)
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <UserHobbiesComponent hobbies={userData.hobbies || []} />
          {userid.userid ? <UserHobbiesComponent hobbies={profileUserProps.hobbies || []} /> : <UserHobbiesComponent hobbies={userData.hobbies || []} />}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem 1.8rem",
              borderRadius: "8px",
            }}
          >
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
