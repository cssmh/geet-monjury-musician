import Lottie from "lottie-react";
import animationData from "../assets/music.json";
import { motion } from "framer-motion";

const MusicVideo = () => {
  return (
    <div className="text-white my-7 lg:my-12">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="text-red-500">New</span> Music Shorts
      </motion.h2>
      <motion.p
        className="text-sm text-center mb-2 md:mb-6 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Enjoy the latest music video from Geet Monjory. Immerse yourself in the
        captivating visuals and soulful tunes!
      </motion.p>
      <div className="flex flex-col w-full lg:flex-row justify-center items-center gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Lottie
            animationData={animationData}
            className="w-2/3 mx-auto lg:w-[80%]"
            loop={true}
          />
        </motion.div>

        {/* YouTube Video */}
        <div className="w-full mx-2 lg:w-1/2">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/7GeUVrDM-oY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicVideo;
