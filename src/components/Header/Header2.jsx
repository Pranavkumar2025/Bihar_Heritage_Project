import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom"; // Added useLocation
// eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import bhdsLogo from "../../assets/logo.png";

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const Header2 = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Added: to get current location and hash
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/#footer-section" }, // Changed for in-page scroll to footer
    { name: "Excavation", to: "/#excavation-section" },
    { name: "Exploration", to: "/#explore-join-section" }, // Changed for in-page scroll
    { name: "Activities", to: "/#conservation-section" }, // Changed to scroll to conservation section
    {
      name: "Events",
      subMenu: [
        { name: "Seminar/Workshop", to: "/events/seminar" },
        { name: "Heritage Week", to: "/events/heritage-week" },
        { name: "Women's Day", to: "/events/womens-day" },
        { name: "Upcoming Events", to: "/events/upcoming" },
      ],
    },
    {
      name: "Gallery",
      subMenu: [
       { name: "Photos", to: "/GalleryPage" }, // Corrected typo: GalleyPage -> GalleryPage
        { name: "Videos", to: "/VideoGalleryPage" },
      ],
    },
    { name: "Publications", to: "/publication" },
    { name: "Contact Us", to: "/contact" },
  ];

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
              <img src={bhdsLogo} alt="Bihar Heritage Logo" className="h-10 w-auto" />
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 z-10 relative" role="navigation">
              {navLinks.map(({ name, to, subMenu }, idx) => (
                <motion.div
                  key={name}
                  className="relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.4 }}
                >
                  {!subMenu ? (
                    <NavLink
                      to={to}
                      onClick={() => setActiveDropdown(null)} // Added: Close dropdown on main link click
                      className={({ isActive: navLinkIsActive }) => {
                        let isCurrentPageActive = false;
                        if (to.startsWith('/#')) {
                          isCurrentPageActive = location.pathname === '/' && location.hash === to.substring(1);
                        } else if (to === '/') {
                          isCurrentPageActive = location.pathname === '/' && (location.hash === '' || !navLinks.some(l => l.to.startsWith('/#') && l.to.substring(1) === location.hash));
                        } else {
                          isCurrentPageActive = navLinkIsActive && location.hash === ''; // Active only if path matches and no home-page hash
                        }
                        return `text-base font-medium transition duration-200 ${
                          isCurrentPageActive
                            ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                            : "text-white hover:text-yellow-400"
                        }`;
                      }}
                    >
                      {name}
                    </NavLink>
                  ) : (
                    <div className="relative">
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === name ? null : name)}
                        className="text-white hover:text-yellow-400 flex items-center gap-1"
                      >
                        {name} <ChevronDown size={16} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === name && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute bg-[#1e293b] shadow-lg mt-2 rounded-md z-50"
                          >
                            {subMenu.map((item) => (
                              <NavLink
                                key={item.name}
                                to={item.to}
                                onClick={() => setActiveDropdown(null)} // Added: Close dropdown on submenu item click
                                className={({ isActive }) =>
                                  `block px-4 py-2 text-white hover:bg-gray-700 whitespace-nowrap ${
                                    isActive ? "bg-gray-700 text-yellow-400" : ""
                                  }`
                                }
                              >
                                {item.name}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden z-20">
              <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
                {menuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
              </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-16 left-0 w-full bg-[#1e293b] text-white flex flex-col items-center py-4 gap-2 md:hidden z-40"
                >
                  {navLinks.map(({ name, to, subMenu }) => (
                    <div key={name} className="w-full text-center">
                      {!subMenu ? (
                        <NavLink
                          to={to}
                          onClick={() => {
                            setActiveDropdown(null); // Added: Close dropdown
                            setMenuOpen(false);
                          }}
                          className={({ isActive: navLinkIsActive }) => {
                            let isCurrentPageActive = false;
                            if (to.startsWith('/#')) {
                              isCurrentPageActive = location.pathname === '/' && location.hash === to.substring(1);
                            } else if (to === '/') {
                              isCurrentPageActive = location.pathname === '/' && (location.hash === '' || !navLinks.some(l => l.to.startsWith('/#') && l.to.substring(1) === location.hash));
                            } else {
                              isCurrentPageActive = navLinkIsActive && location.hash === '';
                            }
                            return `block py-2 text-base font-medium ${
                              isCurrentPageActive ? "text-yellow-400" : "hover:text-yellow-400"
                            }`;
                          }}
                        >
                          {name}
                        </NavLink>
                      ) : (
                        <>
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === name ? null : name)}
                            className="w-full py-2 text-base font-medium hover:text-yellow-400 flex justify-center items-center gap-1"
                          >
                            {name} <ChevronDown size={16} />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === name && (
                              <motion.div
                                variants={dropdownVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="bg-[#334155]"
                              >
                                {subMenu.map((item) => (
                                  <NavLink
                                    key={item.name}
                                    to={item.to}
                                    onClick={() => {
                                      setActiveDropdown(null); // Added: Close dropdown
                                      setMenuOpen(false);
                                    }}
                                    className={({ isActive }) =>
                                      `block py-2 px-4 text-sm hover:bg-gray-700 ${
                                        isActive ? "bg-gray-700 text-yellow-400" : ""
                                      }`
                                    }
                                  >
                                    {item.name}
                                  </NavLink>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      )}
                    </div>
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