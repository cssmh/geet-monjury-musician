import { Link } from "react-router-dom";

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
            <div className="flex justify-center md:justify-start items-center gap-4">
              <Link to="/about-us" className="hover:text-red-500">
                About Us
              </Link>
              <Link to="/gallery" className="hover:text-red-500">
                Gallery
              </Link>
              <Link to="/contact" className="hover:text-red-500">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-400 mb-2">Email: sheikhsaju1976@gmail.com</p>
            <p className="text-gray-400 mb-2">Phone: +8801780710904</p>
            <p className="text-gray-400 mb-2">
              23/1 Maa, Palace, Zilla School Road, Mymensingh
            </p>
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
              href="https://www.facebook.com/touristmomen"
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
