import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiMapPin,
  FiHeart,
  FiBookOpen,
  FiShield,
} from "react-icons/fi";
import JoinMovementBack from "../assets/UniqueBiharImg/JoinMovement.jpg";
import JoinMovementForm from "./JoinMovementForm";

const JoinMovement = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardClick = (actionType) => {
    setSelectedAction(actionType);
    setIsFormOpen(true);
  };

  const actions = [
    {
      title: "Become a Volunteer",
      description: "Contribute your time to preserve Bihar's rich history and culture.",
      icon: <FiUsers size={32} />,
      actionType: "volunteer",
    },
    {
      title: "Report a Site",
      description: "Help us identify and protect neglected heritage sites.",
      icon: <FiMapPin size={32} />,
      actionType: "report",
    },
    {
      title: "Support the Cause",
      description: "Your donations or advocacy can make a lasting impact.",
      icon: <FiHeart size={32} />,
      actionType: "support",
    },
    {
      title: "Educate & Spread Awareness",
      description: "Inspire others to value and conserve our shared heritage.",
      icon: <FiBookOpen size={32} />,
      actionType: "educate",
    },
    {
      title: "Preserve Local Stories",
      description: "Document oral histories and traditions for future generations.",
      icon: <FiShield size={32} />,
      actionType: "preserve",
    },
  ];

  // Animation variants
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.4, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-screen py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-b from-gray-900 to-indigo-900 bg-cover bg-center"
      style={{ backgroundImage: `url(${JoinMovementBack})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/90 to-gray-900/90 z-0" />

      {/* Header */}
      <div className="relative z-10 text-center mb-16 max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl uppercase font-extrabold text-white mb-6 tracking-wide"
        >
          Join the Movement
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-200 text-base sm:text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed"
        >
          Be a champion for Bihar’s heritage. Act now to preserve its cultural legacy.
        </motion.p>
      </div>

      {/* Card Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Row 1 – 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {actions.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl cursor-pointer border-t-4 border-indigo-600 transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleCardClick(item.actionType)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleCardClick(item.actionType)}
              aria-label={`Join ${item.title}`}
            >
              {/* Overlay */}
              <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate={hoveredCard === index ? "visible" : "hidden"}
                className="absolute inset-0 bg-gray-900/40 rounded-lg z-10"
              />

              {/* Card Content */}
              <div className="relative z-0 flex flex-col items-center">
                <div className="w-14 h-14 mb-4 bg-indigo-50 text-indigo-600 flex items-center justify-center rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>

              {/* Button */}
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate={hoveredCard === index ? "visible" : "hidden"}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white font-medium py-2 px-6 rounded-full hover:bg-indigo-700 transition-colors duration-200 z-20"
                onClick={() => handleCardClick(item.actionType)}
                aria-label={`Join ${item.title}`}
              >
                Get Involved
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Row 2 – 2 Centered Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {actions.slice(3).map((item, index) => (
            <motion.div
              key={index + 3}
              className="relative bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl cursor-pointer border-t-4 border-indigo-600 transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleCardClick(item.actionType)}
              onMouseEnter={() => setHoveredCard(index + 3)}
              onMouseLeave={() => setHoveredCard(null)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleCardClick(item.actionType)}
              aria-label={`Join ${item.title}`}
            >
              {/* Overlay */}
              <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate={hoveredCard === index + 3 ? "visible" : "hidden"}
                className="absolute inset-0 bg-gray-900/40 rounded-lg z-10"
              />

              {/* Card Content */}
              <div className="relative z-0 flex flex-col items-center">
                <div className="w-14 h-14 mb-4 bg-indigo-50 text-indigo-600 flex items-center justify-center rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>

              {/* Button */}
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate={hoveredCard === index + 3 ? "visible" : "hidden"}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white font-medium py-2 px-6 rounded-full hover:bg-indigo-700 transition-colors duration-200 z-20"
                onClick={() => handleCardClick(item.actionType)}
                aria-label={`Join ${item.title}`}
              >
                Get Involved
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Form Modal */}
      <JoinMovementForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        selectedAction={selectedAction}
      />
    </motion.section>
  );
};

export default JoinMovement;