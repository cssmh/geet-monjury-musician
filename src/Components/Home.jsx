import FeaturedArtists from "../Pages/FeaturedArtists";
import MusicVideo from "../Pages/MusicVideo";
import Banner from "./Banner";
import NewMusic from "./NewMusic";

const Home = () => {
  return (
    <div>
      <Banner />
      <MusicVideo />
      <NewMusic />
      <FeaturedArtists />
    </div>
  );
};

export default Home;
