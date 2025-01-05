import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md"; // Close icon
import logo from "../assets/logo.png";
import { AiOutlineBars } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Example nav items
  const navItems = [
    { label: "Home", to: "/" },
    { label: "Gallery", to: "/gallery" },
    { label: "Members", to: "/members" },
    { label: "Albums", to: "/albums" },
    { label: "Video", to: "/video" },
    { label: "About Us", to: "/about-us" },
  ];

  // Framer Motion Variants
  const variants = {
    hidden: { opacity: 0, x: 50 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.1 },
    }),
  };

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-900 text-white py-4">
      {/* Desktop Menu */}
      <div className="flex justify-center items-center">
        <div className="hidden md:flex space-x-5">
          {navItems.slice(0, 3).map((item) => (
            <Link
              to={item.to}
              key={item.label}
              className="hover:text-green-500"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="text-center mx-8 hidden md:block">
          <img src={logo} alt="logo" className="mx-auto w-56" />
        </div>
        <div className="hidden md:flex space-x-5">
          {navItems.slice(3).map((item) => (
            <Link
              to={item.to}
              key={item.label}
              className="hover:text-green-500"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-between items-center px-4">
        <button
          className="text-white"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <MdClose className="text-white h-6 w-6" />
          ) : (
          <AiOutlineBars className="text-white h-7 w-7" />
          )}
        </button>
      </div>
      <div
        ref={menuRef}
        className={`fixed top-0 z-50 right-0 h-full w-[70%] bg-gray-800 text-white p-4 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end">
          <button
            className="text-white"
            onClick={() => setMenuOpen(false)} // Close menu
          >
            <MdClose className="h-7 w-7" />
          </button>
        </div>

        {/* Animated Menu Items */}
        <motion.div
          className="flex flex-col mt-4 space-y-5 justify-center items-center"
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.to}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 font-bold hover:text-green-600"
                    : "hover:text-green-500"
                }
                onClick={() => setMenuOpen(false)} // Close menu on navigation
              >
                {item.label}
              </NavLink>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
