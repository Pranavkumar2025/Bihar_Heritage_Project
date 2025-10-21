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
      icon: <FiUsers size={28} />,
      actionType: "volunteer",
    },
    {
      title: "Report a Site",
      description: "Help us identify and protect neglected heritage sites.",
      icon: <FiMapPin size={28} />,
      actionType: "report",
    },
    {
      title: "Support the Cause",
      description: "Your donations or advocacy can make a lasting impact.",
      icon: <FiHeart size={28} />,
      actionType: "support",
    },
    {
      title: "Educate & Spread Awareness",
      description: "Inspire others to value and conserve our shared heritage.",
      icon: <FiBookOpen size={28} />,
      actionType: "educate",
    },
    {
      title: "Preserve Local Stories",
      description: "Document oral histories and traditions for future generations.",
      icon: <FiShield size={28} />,
      actionType: "preserve",
    },
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: {
      scale: 1.02,
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${JoinMovementBack})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/95 to-gray-950/95 z-0" />

      {/* Header */}
      <div className="relative z-10 text-center mb-12 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="uppercase text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
        >
          Join the Movement
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-300 text-lg sm:text-xl lg:text-2xl font-light max-w-2xl mx-auto leading-relaxed"
        >
          Be a champion for Bihar’s heritage. Act now to preserve its cultural legacy.
        </motion.p>
      </div>

      {/* Card Layout */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Row 1 – 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {actions.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-white/95 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg cursor-pointer border border-gray-100 transition-all duration-300"
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
              <div className="w-12 h-12 mb-4 bg-indigo-100 text-indigo-700 flex items-center justify-center rounded-full">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate={hoveredCard === index ? "visible" : "hidden"}
                className="bg-indigo-600 text-white font-medium py-2 px-6 rounded-full hover:bg-indigo-700 transition-colors duration-200"
                onClick={() => handleCardClick(item.actionType)}
                aria-label={`Join ${item.title}`}
              >
                Get Involved
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Row 2 – 2 Centered Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {actions.slice(3).map((item, index) => (
            <motion.div
              key={index + 3}
              className="relative bg-white/95 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg cursor-pointer border border-gray-100 transition-all duration-300"
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
              <div className="w-12 h-12 mb-4 bg-indigo-100 text-indigo-700 flex items-center justify-center rounded-full">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate={hoveredCard === index + 3 ? "visible" : "hidden"}
                className="bg-indigo-600 text-white font-medium py-2 px-6 rounded-full hover:bg-indigo-700 transition-colors duration-200"
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