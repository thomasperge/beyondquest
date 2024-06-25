import "./profile.css";
import { IonIcon } from "@ionic/react";
import ButtonComponent from "../../components/button/button";
import {
  addCircleOutline,
  barbellOutline,
  bookOutline,
  checkmark,
  checkmarkDoneOutline,
  clipboardOutline,
  colorPaletteOutline,
  flame,
  timer,
} from "ionicons/icons";

const ProfilePage: React.FC = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ fontWeight: "700", fontSize: " 1.5rem" }}>
            Thomasperge
          </div>
          <div style={{ fontWeight: "500", color: "#00302B80" }}>France</div>
          <div style={{ fontWeight: "500", color: "#00302B80" }}>
            Joined February 2021
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
          T
        </div>
      </div>
      <div style={{ margin: "20px 0px", color: "#02C7A4", fontWeight: "600" }}>
        12 Followers
      </div>

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
      ></ButtonComponent>
      <div style={{ margin: "30px 0px" }}>
        <div
          style={{ fontWeight: "600", fontSize: "1.1rem", marginBottom: "10px" }}
        >
          Biographie
        </div>
        <div style={{ fontSize: "0.9rem" }}>
          Fighting tout le monde, soyez joyeux et atteigner vos objectif !!!
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
                12
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
                43
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
                8:12
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
                2/3
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
          Area of interest
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem 1.8rem",
              background: "linear-gradient(180deg, #FF4545 0%, #BF2222 100%)",
              borderRadius: "8px",
            }}
          >
            <IonIcon icon={bookOutline} size="large"></IonIcon>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem 1.8rem",
              background: "linear-gradient(180deg, #7DF452 0%, #39AD10 100%)",

              borderRadius: "8px",
            }}
          >
            {" "}
            <IonIcon icon={colorPaletteOutline} size="large"></IonIcon>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem 1.8rem",
              background: "linear-gradient(180deg, #2EB3EC 0%, #2582B7 100%)",

              borderRadius: "8px",
            }}
          >
            {" "}
            <IonIcon icon={barbellOutline} size="large"></IonIcon>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem 1.8rem",
              borderRadius: "8px",
            }}
          >
            <IonIcon icon={addCircleOutline} size="large"></IonIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
