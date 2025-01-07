import musicVideo from "../assets/music_video.mp4";

const MusicVideo = () => {
  return (
    <div className="text-white py-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        New Music Shorts
      </h2>
      <p className="text-center mb-8 px-4">
        Enjoy the latest music video from our featured artist. Immerse yourself
        in the captivating visuals and soulful tunes!
      </p>
      <div className="flex justify-center">
        <video
          src={musicVideo}
          controls
          className="w-1/2 lg:w-44 rounded-lg shadow-lg"
        ></video>
      </div>
    </div>
  );
};

export default MusicVideo;
