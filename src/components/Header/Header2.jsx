import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    {
      name: "Organization",
      subMenu: [
        { name: "About Us", to: "/about" },
        { name: "Governing Body", to: "/governingbody" },
        { name: "Executive Committee", to: "/executive" },
        { name: "Key Functionaries", to: "/keyfunctionaries" },
        { name: "Archeological Team", to: "/archeologicalteam" },
      ],
    },
    { name: "Protected Sites", to: "/protected-sites" },
    {
      name: "Activities",
      subMenu: [
        { name: "Excavation", to: "/excavations#Excavation" },
        { name: "Exploration", to: "/excavations#Exploration" },
        { name: "Heritage Walk", to: "/excavations#HeritageWalk" },
        { name: "Workshop & Seminar", to: "/Activities" },
      ],
    },
    { name: "Events", to: "/events/upcoming" },
    {
      name: "Gallery",
      subMenu: [
        { name: "Photos", to: "/Gallery" },
        { name: "Videos", to: "/VideoGalleryPage" },
      ],
    },
    { name: "Publications", to: "/publication" },
    { name: "Contact Us", to: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 10);
      setIsPastHero(currentY > window.innerHeight - 50);

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

  const headerClass = `w-full fixed top-0 z-50 transition-all duration-300 ${
    isPastHero ? "bg-[#111827]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
  }`;

  const textColor = isPastHero
    ? "text-gray-100 hover:text-yellow-400"
    : "text-white hover:text-yellow-300";

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          className={headerClass}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.4 }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <motion.div
              onClick={() => navigate("/")}
              className="cursor-pointer z-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={bhdsLogo}
                alt="Bihar Heritage Logo"
                className="h-10 w-auto"
              />
            </motion.div>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex gap-8 z-10 relative"
              role="navigation"
            >
              {navLinks.map(({ name, to, subMenu, isHash }, idx) => (
                <motion.div
                  key={name}
                  className="relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.4 }}
                >
                  {!subMenu ? (
                    isHash ? (
                      <HashLink
                        smooth
                        to={to}
                        onClick={() => setActiveDropdown(null)}
                        className={`text-base font-medium transition duration-200 ${textColor}`}
                      >
                        {name}
                      </HashLink>
                    ) : (
                      <NavLink
                        to={to}
                        onClick={() => setActiveDropdown(null)}
                        className={({ isActive }) => {
                          let isCurrentPageActive = false;
                          if (to === "/") {
                            isCurrentPageActive =
                              location.pathname === "/" && location.hash === "";
                          } else {
                            isCurrentPageActive =
                              isActive && location.hash === "";
                          }
                          return `text-base font-medium transition duration-200 ${
                            isCurrentPageActive
                              ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                              : `${textColor}`
                          }`;
                        }}
                      >
                        {name}
                      </NavLink>
                    )
                  ) : (
                    <div className="relative">
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === name ? null : name
                          )
                        }
                        className={`flex items-center gap-1 ${textColor}`}
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
                            className="absolute bg-white shadow-lg mt-2 rounded-md z-50 overflow-hidden"
                          >
                            {subMenu.map((item) => (
                              <NavLink
                                key={item.name}
                                to={item.to}
                                onClick={() => setActiveDropdown(null)}
                                className={({ isActive }) =>
                                  `block px-4 py-2 text-gray-800 hover:bg-gray-100 whitespace-nowrap transition-colors duration-200 ${
                                    isActive
                                      ? "bg-gray-100 text-yellow-500"
                                      : ""
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

            {/* Mobile Toggle */}
            <div className="md:hidden z-20">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
              >
                {menuOpen ? (
                  <X size={28} className="text-white" />
                ) : (
                  <Menu size={28} className="text-white" />
                )}
              </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-16 left-0 w-full bg-[#1f2937] text-white flex flex-col items-center py-4 gap-2 md:hidden z-40"
                >
                  {navLinks.map(({ name, to, subMenu, isHash }) => (
                    <div key={name} className="w-full text-center">
                      {!subMenu ? (
                        isHash ? (
                          <HashLink
                            smooth
                            to={to}
                            onClick={() => setMenuOpen(false)}
                            className="block py-2 text-base font-medium hover:text-yellow-400"
                          >
                            {name}
                          </HashLink>
                        ) : (
                          <NavLink
                            to={to}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                              `block py-2 text-base font-medium ${
                                isActive
                                  ? "text-yellow-400"
                                  : "hover:text-yellow-400"
                              }`
                            }
                          >
                            {name}
                          </NavLink>
                        )
                      ) : (
                        <>
                          <button
                            onClick={() =>
                              setActiveDropdown(
                                activeDropdown === name ? null : name
                              )
                            }
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
                                className="bg-gray-700 rounded-md overflow-hidden"
                              >
                                {subMenu.map((item) => (
                                  <NavLink
                                    key={item.name}
                                    to={item.to}
                                    onClick={() => {
                                      setActiveDropdown(null);
                                      setMenuOpen(false);
                                    }}
                                    className={({ isActive }) =>
                                      `block py-2 px-4 text-sm hover:bg-gray-600 transition-colors duration-200 ${
                                        isActive
                                          ? "bg-gray-600 text-yellow-400"
                                          : ""
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
