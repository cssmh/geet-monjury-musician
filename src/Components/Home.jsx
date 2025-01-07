import Artists from "../Pages/Artists";
import MusicVideo from "../Pages/MusicVideo";
import PlayMusic from "../Pages/PlayMusic";
import Banner from "./Banner";
import Explore from "./Explore";
import SocialHandles from "./SocialHandles";

const Home = () => {
  return (
    <div>
      <Banner />
      <MusicVideo />
      <Explore />
      <PlayMusic />
      <Artists />
      <SocialHandles />
    </div>
  );
};

export default Home;
