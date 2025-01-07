import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold mb-4">Geet Monjory</h2>
            <p className="text-gray-400">
              Celebrate the joy of music with Mugican. Connecting music lovers,
              artists, and communities worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="hover:text-red-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-red-500">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com/saju1976"
                className="hover:text-red-500"
              >
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-red-500">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-red-500">
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.youtube.com/@geetmonjory8955"
                className="hover:text-red-500"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 my-6"></div>
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Geet Monjory. All rights reserved.
          </p>
          <p>
            Designed by{" "}
            <a
              // href="https://www.facebook.com/touristmomen"
              className="hover:text-red-500"
            >
              Momen
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
