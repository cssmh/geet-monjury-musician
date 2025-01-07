import FeaturedArtists from "../Pages/FeaturedArtists";
import MusicVideo from "../Pages/MusicVideo";
import UpcomingEvents from "../Pages/UpcomingEvents";
import Banner from "./Banner";
import NewMusic from "./NewMusic";

const Home = () => {
  return (
    <div>
      <Banner />
      <MusicVideo />
      <NewMusic />
      <FeaturedArtists />
      <UpcomingEvents />
    </div>
  );
};

export default Home;
