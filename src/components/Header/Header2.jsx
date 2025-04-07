import React, { useState, useRef, useEffect } from "react";
// eslint-disable-next-line 
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import bhdsLogo from "../../assets/logo.png";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Organisation", to: "/organisation" },
  { name: "Activities", to: "/activities" },
  { name: "Gallery", to: "/gallery" },
  { name: "Publication", to: "/publication" },
  { name: "Events", to: "/events" },
  { name: "News", to: "/news" },
  { name: "Tender", to: "/tender" },
  { name: "RTI", to: "/rti" },
  { name: "Contact Us", to: "/contact" },
];

const Header2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);

  // Detect outside click to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Scroll listener for sticky behavior on homepage
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        setIsSticky(window.scrollY > 80); // Trigger after 80px scroll
      } else {
        setIsSticky(true); // Always sticky on other pages
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  return (
    <header
      className={`${
        isSticky ? "fixed top-0 left-0 shadow-md z-50" : "relative"
      } bg-[#1A1A2E] text-white px-4 lg:px-10 py-3 w-full transition-all duration-300`}
    >
      <div className="flex justify-between items-center">
        {/* 🖼️ Logo */}
        <div
          className="cursor-pointer flex items-center gap-2"
          onClick={() => navigate("/")}
        >
          <img
            src={bhdsLogo}
            alt="BHDS Logo"
            className="h-14 md:h-16 object-contain"
          />
        </div>

        {/* 🍔 Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* 🧭 Desktop Nav */}
        <nav className="hidden lg:flex flex-wrap justify-center gap-4 lg:gap-6">
          {navLinks.map(({ name, to }, idx) => (
            <NavLink
              key={idx}
              to={to}
              className={({ isActive }) =>
                `text-sm font-semibold px-3 py-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? "text-[#FF4D5A] border-b-2 border-[#FF4D5A] bg-[#1D0E11]"
                    : "hover:text-[#FF4D5A] hover:bg-[#2C2C3E]"
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* 📱 Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
            ref={menuRef}
          >
            <div className="flex flex-col gap-2 pt-4 pb-4 px-2">
              {navLinks.map(({ name, to }, idx) => (
                <NavLink
                  key={idx}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block font-semibold px-4 py-2 rounded-md text-sm transition-colors ${
                      isActive
                        ? "text-[#FF4D5A] bg-[#1D0E11]"
                        : "text-white hover:bg-[#2C2C3E]"
                    }`
                  }
                >
                  {name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header2;
