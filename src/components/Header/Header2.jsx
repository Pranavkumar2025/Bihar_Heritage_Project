import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import bhdsLogo from "../../assets/logo.png";

const Header2 = () => {
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/organisation" },
    { name: "Collections", to: "/gallery" },
    { name: "Events", to: "/events" },
    { name: "Publications", to: "/publication" },
    { name: "Contact", to: "/contact" },
  ];

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          className="w-full z-50 fixed top-0 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155] shadow-md"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <motion.div
              onClick={() => navigate("/")}
              className="cursor-pointer z-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src={bhdsLogo} alt="Logo" className="h-10 w-auto" />
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 z-10">
              {navLinks.map(({ name, to }, idx) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.4 }}
                >
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `text-base font-medium transition duration-200 ${
                        isActive
                          ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                          : "text-white hover:text-yellow-400"
                      }`
                    }
                  >
                    {name}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-20">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
              </button>
            </div>

            {/* Mobile Nav Menu */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-16 left-0 w-full bg-[#1e293b] text-white flex flex-col items-center py-4 gap-4 md:hidden"
                >
                  {navLinks.map(({ name, to }) => (
                    <NavLink
                      key={name}
                      to={to}
                      onClick={() => setMenuOpen(false)}
                      className="text-base font-medium hover:text-yellow-400"
                    >
                      {name}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header2;
