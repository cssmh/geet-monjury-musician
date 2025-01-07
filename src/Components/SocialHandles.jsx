import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa";
import logo from "../assets/monjory_logo.png";

const SocialHandles = () => {
  return (
    <div className="bg-[#202021] mt-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-8">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-[40%]" />
        </div>
        <div className="flex space-x-7">
          <a
            href="https://www.facebook.com/saju1976"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <FaFacebook
              size={70}
              className="text-blue-600 transition duration-300"
            />
            <span className="text-white pt-3">Facebook</span>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <FaTwitter
              size={70}
              className="text-blue-400 transition duration-300"
            />
            <span className="text-white pt-3">Twitter</span>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <FaInstagram
              size={70}
              className="text-pink-500 transition duration-300"
            />
            <span className="text-white pt-3">Instagram</span>
          </a>
          <a
            href="https://www.youtube.com/@geetmonjory8955"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <FaYoutube
              size={70}
              className="text-red-600 transition duration-300"
            />
            <span className="text-white pt-3">YouTube</span>
          </a>
          <a
            href="https://www.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <FaSpotify
              size={70}
              className="text-green-500 transition duration-300"
            />
            <span className="text-white pt-3">Spotify</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialHandles;
