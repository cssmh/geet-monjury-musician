import Artists from "../Pages/Artists";
import MusicVideo from "../Pages/MusicVideo";
import Banner from "./Banner";
import Explore from "./Explore";
import SocialHandles from "./SocialHandles";

const Home = () => {
  return (
    <div>
      <Banner />
      <MusicVideo />
      <Explore />
      <Artists />
      <SocialHandles />
    </div>
  );
};

export default Home;
