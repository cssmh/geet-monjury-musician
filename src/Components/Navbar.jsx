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
    { label: "Monjory", to: "/monjory" },
    { label: "Albums", to: "/albums" },
    { label: "Video", to: "/videos" },
    { label: "About Us", to: "/about-us" },
  ];

  const variants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.4,
      },
    }),
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <nav className="bg-gradient-to-b from-[#0f010f] via-[#2d0151] to-[#000000] text-white">
      <div className="flex justify-between items-center px-8 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <motion.img
            src={logo}
            alt="logo"
            className="w-24 md:w-32"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial="hidden"
              animate="visible"
              custom={index}
              variants={variants}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#f39c12] underline"
                    : "hover:text-[#f39c12] transition"
                }
              >
                {item.label}
              </NavLink>
            </motion.div>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <MdClose /> : <AiOutlineBars />}
        </button>
      </div>
      {/* Mobile Menu */}
      <motion.div
        ref={menuRef}
        initial={{ height: 0 }}
        animate={{ height: isMenuOpen ? "auto" : 0 }}
        className="md:hidden overflow-hidden bg-gradient-to-b from-[#0f010f] via-[#2d0151] to-[#000000] text-white"
      >
        <div className="flex flex-col space-y-4 p-4">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#f39c12] font-semibold underline"
                    : "hover:text-[#f39c12] transition"
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
