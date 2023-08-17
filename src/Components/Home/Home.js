import "./Home.css";
import Video from "../../Assets/video.mp4";
import { AiOutlineSwapRight } from "react-icons/ai";

const Home = () => {
  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>
      <div className="sectionText">
        <h1>Unlock Your Road Trip Dreams With Us</h1>
        <p>
          Discover the world's most adventurous nature, life is so short for a
          trip.
        </p>
        <button className="btn flex">
          GET STARTED
          <AiOutlineSwapRight className="icon" />
        </button>
      </div>
    </div>
  );
};
export default Home;
