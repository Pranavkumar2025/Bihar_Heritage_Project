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

  const handleCardClick = (actionType) => {
    setSelectedAction(actionType);
    setIsFormOpen(true);
  };
  const actions = [
    {
      title: "Become a Volunteer",
      description: "Lend your time and energy to protect history and culture.",
      icon: <FiUsers size={28} />,
      actionType: "volunteer",
    },
    {
      title: "Report a Site",
      description: "Share neglected gems and help us bring them to light.",
      icon: <FiMapPin size={28} />,
      actionType: "report",
    },
    {
      title: "Support the Cause",
      description: "Your donations, shares, or ideas can fuel preservation.",
      icon: <FiHeart size={28} />,
      actionType: "support",
    },
    {
      title: "Educate & Spread Awareness",
      description: "Teach others the importance of conserving heritage.",
      icon: <FiBookOpen size={28} />,
      actionType: "educate",
    },
    {
      title: "Preserve Local Stories",
      description: "Document and save oral histories, photos, and traditions.",
      icon: <FiShield size={28} />,
      actionType: "preserve",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-screen py-16 px-4 sm:px-10 md:px-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${JoinMovementBack})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-indigo-900/80 z-0" />

      {/* Header */}
      <div className="relative z-10 text-center mb-12 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white uppercase mb-6 drop-shadow-lg">
          Join the Movement
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-base sm:text-lg md:text-xl"
        >
          — Heritage needs its heroes — step in, speak up, and safeguard the
          soul of Bihar —
        </motion.p>
      </div>

      {/* Card Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Row 1 – 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center mb-10">
          {actions.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/90 w-full max-w-xs backdrop-blur-md ring-1 ring-indigo-200 rounded-2xl shadow-md p-6 flex flex-col justify-center items-center text-center hover:shadow-2xl transition-transform transform hover:-translate-y-2 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              onClick={() => handleCardClick(item.actionType)}
            >
              <div className="w-12 h-12 mb-4 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shadow">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-indigo-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Row 2 – 2 Centered Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {actions.slice(3).map((item, index) => (
            <motion.div
              key={index + 3}
              className="bg-white/90 w-full max-w-xs backdrop-blur-md ring-1 ring-indigo-200 rounded-2xl shadow-md p-6 flex flex-col justify-center items-center text-center hover:shadow-2xl transition-transform transform hover:-translate-y-2 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              onClick={() => handleCardClick(item.actionType)}
            >
              <div className="w-12 h-12 mb-4 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shadow">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-indigo-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
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
