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
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1 },
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
      <div className="flex justify-center items-center">
        <div className="hidden md:flex space-x-5">
          {navItems.slice(0, 3).map((item) => (
            <Link to={item.to} key={item.label} className="hover:text-red-500">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="text-center mx-8 hidden md:block">
          <img src={logo} alt="logo" className="mx-auto w-40" />
        </div>
        <div className="hidden md:flex space-x-5">
          {navItems.slice(3).map((item) => (
            <Link to={item.to} key={item.label} className="hover:text-red-500">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="md:hidden flex justify-between items-center px-4">
        <img src={logo} alt="logo" className="w-32" />
        <button className="text-white" onClick={() => setMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <MdClose className="text-white h-6 w-6" />
          ) : (
            <AiOutlineBars className="text-white h-7 w-7" />
          )}
        </button>
      </div>
      <div
        ref={menuRef}
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-[74px] left-0 w-full bg-gray-800 text-white p-4 transition-all z-50`}
      >
        <motion.div
          className="flex flex-col space-y-5 mx-5"
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
      </div>
    </nav>
  );
};

export default Navbar;
