import Lottie from "lottie-react";
import musicVideo from "../assets/music_video.mp4";
import animationData from "../assets/music.json";

const MusicVideo = () => {
  return (
    <div className="text-white py-7">
      <h2 className="text-3xl font-bold text-center mb-6">New Music Shorts</h2>
      <p className="text-center mb-8 px-4">
        Enjoy the latest music video from our featured artist. Immerse yourself
        in the captivating visuals and soulful tunes!
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <Lottie animationData={animationData} loop={true} />
        <video
          src={musicVideo}
          controls
          className="w-full lg:w-96 h-72 lg:h-96 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default MusicVideo;
