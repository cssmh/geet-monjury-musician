import { useState, useRef, useEffect } from "react";
import music from "../assets/ami_parina.mp3";
import music2 from "../assets/kotha_koiyo_na.mp3";
import geet from "../assets/geet.jpg";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaStepForward,
  FaStepBackward,
} from "react-icons/fa";

const demoTracks = [
  {
    name: "আমি পারি না আর পারি না",
    artist: "Geet Monjory",
    image: geet,
    audio: music,
  },
  {
    name: "কথা কইও না | kotha koiyo na",
    artist: "Geet Monjory with team",
    image: geet,
    audio: music2,
  },
];

const PlayMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrack, isPlaying]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNextTrack = () => {
    setCurrentTrack((prevTrack) => (prevTrack + 1) % demoTracks.length);
  };

  const handlePreviousTrack = () => {
    setCurrentTrack(
      (prevTrack) => (prevTrack - 1 + demoTracks.length) % demoTracks.length
    );
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value;
  };

  const handleTrackChange = (index) => {
    setCurrentTrack(index);
    setIsPlaying(true);
  };

  return (
    <div className="my-12">
      <h1 className="text-3xl text-white text-center font-semibold">
        New <span className="text-red-600">Album</span>
      </h1>
      <p className="text-center text-white mb-6">
        Our newest album is now on youtube, offering a captivating blend of
        melodies and rhythms for listeners to enjoy.
      </p>
      <div className="max-w-7xl bg-gray-900 p-8 mx-auto rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <img
              src={demoTracks[currentTrack].image}
              alt="album cover"
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div className="flex flex-col ml-6 text-white">
              <h2 className="text-2xl font-semibold">
                {demoTracks[currentTrack].name}
              </h2>
              <p className="text-lg text-gray-400">
                {demoTracks[currentTrack].artist}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handlePreviousTrack}
              className="text-white p-3 rounded-full hover:bg-gray-700 transition"
            >
              <FaStepBackward className="text-2xl" />
            </button>
            <button
              onClick={togglePlayPause}
              className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition"
            >
              {isPlaying ? (
                <FaPause className="text-2xl" />
              ) : (
                <FaPlay className="text-2xl" />
              )}
            </button>
            <button
              onClick={handleNextTrack}
              className="text-white p-3 rounded-full hover:bg-gray-700 transition"
            >
              <FaStepForward className="text-2xl" />
            </button>
          </div>
        </div>
        <div className="relative w-full h-1 bg-gray-700 rounded-full mb-4">
          <audio ref={audioRef} src={demoTracks[currentTrack].audio} />
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="0"
            className="absolute top-0 left-0 w-full h-full bg-transparent cursor-pointer"
            onChange={(e) => {
              audioRef.current.currentTime =
                (e.target.value / 100) * audioRef.current.duration;
            }}
          />
        </div>
        <div className="flex items-center space-x-2 mb-6">
          <FaVolumeMute className="text-white" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24"
          />
          <FaVolumeUp className="text-white" />
        </div>
        <div className="mt-6 text-white">
          <h3 className="text-xl font-semibold mb-4">More Music</h3>
          <div className="grid grid-cols-1 gap-4">
            {demoTracks.map((track, index) => (
              <div
                key={index}
                onClick={() => handleTrackChange(index)}
                className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-lg transition"
              >
                <div className="flex items-center gap-2">
                  <p className="text-gray-500">{index + 1}.</p>
                  <div>
                    <h4>{track.name}</h4>
                    <p className="text-gray-400">{track.artist}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayMusic;
