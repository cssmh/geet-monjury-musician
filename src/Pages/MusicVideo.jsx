import Lottie from "lottie-react";
import animationData from "../assets/music.json";

const MusicVideo = () => {
  return (
    <div className="text-white my-7 lg:my-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">New Music Shorts</h2>
      <p className="text-sm text-center mb-2 md:mb-6 px-4">
        Enjoy the latest music video from geet monjory. Immerse yourself
        in the captivating visuals and soulful tunes!
      </p>

      <div className="flex flex-col w-full lg:flex-row justify-center items-center gap-3">
        <div>
          <Lottie animationData={animationData} loop={true} />
        </div>
        <div className="w-full mx-2 lg:w-1/2">
          <iframe
            width="100%"
            height="415"
            src="https://www.youtube.com/embed/7GeUVrDM-oY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MusicVideo;
