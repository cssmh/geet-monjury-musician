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
    <div className="bg-[#2d272d] mt-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center p-8">
        <div className="flex items-center space-y-3">
          <img
            src={logo}
            alt="Logo"
            className="w-32 lg:w-[40%] mx-auto md:mx-0"
          />
        </div>
        <div className="flex space-x-3 items-center md:space-x-9 mt-6 md:mt-0">
          <a
            data-aos="fade-down"
            data-aos-delay="200"
            href="https://www.facebook.com/saju1976"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <FaFacebook className="text-blue-600 text-3xl md:text-6xl transition duration-300" />
            <span className="text-white pt-3">Facebook</span>
          </a>
          <a
            data-aos="fade-down"
            data-aos-delay="400"
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <FaTwitter className="text-blue-400 text-3xl md:text-6xl transition duration-300" />
            <span className="text-white pt-3">Twitter</span>
          </a>
          <a
            data-aos="fade-down"
            data-aos-delay="600"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <FaInstagram className="text-pink-500 text-3xl md:text-6xl transition duration-300" />
            <span className="text-white pt-3">Instagram</span>
          </a>
          <a
            data-aos="fade-down"
            data-aos-delay="800"
            href="https://www.youtube.com/@geetmonjory8955"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <FaYoutube className="text-red-600 text-3xl md:text-6xl transition duration-300" />
            <span className="text-white pt-3">YouTube</span>
          </a>
          <a
            data-aos="fade-down"
            data-aos-delay="1000"
            href="https://www.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <FaSpotify className="text-green-500 text-3xl md:text-6xl transition duration-300" />
            <span className="text-white pt-3">Spotify</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialHandles;
