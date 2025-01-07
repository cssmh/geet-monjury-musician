import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/monjory_logo.png";
import { MdClose } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Gallery", to: "/gallery" },
    { label: "Members", to: "/members" },
    { label: "Albums", to: "/albums" },
    { label: "Video", to: "/video" },
    { label: "About Us", to: "/about-us" },
  ];

  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 70,
        damping: 10,
        delay: i * 0.2,
        duration: 0.4,
      },
    }),
  };

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
    <nav className="bg-gray-900 text-white py-1">
      {/* Desktop Navbar */}
      <div className="flex justify-center items-center">
        <div className="hidden md:flex space-x-5">
          {navItems.slice(0, 3).map((item, index) => (
            <motion.div
              key={item.label}
              initial="hidden"
              animate="visible"
              custom={index}
              variants={variants}
            >
              <Link to={item.to} className="hover:text-red-500 font-semibold">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mx-8 hidden md:block">
          <motion.img
            src={logo}
            alt="logo"
            className="mx-auto w-40"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
        <div className="hidden md:flex space-x-5">
          {navItems.slice(3).map((item, index) => (
            <motion.div
              key={item.label}
              initial="hidden"
              animate="visible"
              custom={index}
              variants={variants}
            >
              <Link to={item.to} className="hover:text-red-500 font-semibold">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center px-4">
        <motion.img
          src={logo}
          alt="logo"
          className="w-32"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.button
          className="text-white"
          onClick={() => setMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.2 }}
        >
          {isMenuOpen ? (
            <MdClose className="text-white h-6 w-6" />
          ) : (
            <AiOutlineBars className="text-white h-7 w-7" />
          )}
        </motion.button>
      </div>
      {/* Mobile Menu */}
      <motion.div
        ref={menuRef}
        initial={{ x: "-100%" }}
        animate={{ x: isMenuOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3 }}
        className="absolute top-[74px] left-0 w-full bg-gray-800 text-white p-4 z-50"
      >
        <motion.div
          className="flex flex-col space-y-4 mx-5"
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.to}
              custom={index}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 font-bold hover:text-red-600"
                    : "hover:text-red-500"
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
