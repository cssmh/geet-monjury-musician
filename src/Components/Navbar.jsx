import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="flex justify-center items-center">
        <div className="flex space-x-5">
          <Link to="/" className="hover:text-green-500">
            Home
          </Link>
          <Link to="/gallery" className="hover:text-green-500">
            Gallery
          </Link>
          <Link to="/members" className="hover:text-green-500">
            Members
          </Link>
        </div>
        <div className="text-center mx-8">
          <img src={logo} alt="logo" className="mx-auto w-56" />
        </div>
        <div className="flex space-x-5">
          <Link to="/albums " className="hover:text-green-500">
            Albums
          </Link>
          <Link to="/video" className="hover:text-green-500">
            Video
          </Link>
          <Link to="/about-us" className="hover:text-green-500">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
