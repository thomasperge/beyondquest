import ForYouChallengeTweetComponent from "../../components/foryou/foryouchallenge/foryouchallenge.js";

const Discover: React.FC = () => {

  return (
    <div className="container flex" style={{ height: "100%", color: "black", fontWeight: '600' }}>
      <ForYouChallengeTweetComponent username={""} name={""} waspostedtime={""} sentence={""} challengeid={""} likes={""} comments={""} profilepicture={""}></ForYouChallengeTweetComponent>
    </div>
  );
};

export default Discover;
