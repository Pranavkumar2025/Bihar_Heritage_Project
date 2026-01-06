import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiMapPin,
  FiHeart,
  FiBookOpen,
  FiShield,
} from "react-icons/fi";
import JoinMovementForm from "./JoinMovementForm";

const cardImages = [
  "https://swarajya.gumlet.io/swarajya/2017-12/b2099b18-dc31-44b2-83de-ffc4ed727e09/4fda6e5b-9310-4179-b1f7-f55fb216a65a.jpg?w=610&q=75&compress=true&format=auto",
  "https://static.toiimg.com/thumb/msid-53367201,width-1280,height-720,resizemode-72/53367201.jpg",
  "https://whc.unesco.org/uploads/thumbs/news_377-890-520-20090514144639.jpg",
  "https://tehelka.com/media/2023/06/Deepanwita-oral-1-1024x682.jpg",
  "https://borderlessjournal.com/wp-content/uploads/2023/10/dp-22775-001.jpg",
];

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
      description: "Contribute your time to preserve Bihar's rich history and culture.",
      icon: <FiUsers size={32} />,
      actionType: "volunteer",
      img: cardImages[0],
    },
    {
      title: "Report a Site",
      description: "Help us identify and protect neglected heritage sites.",
      icon: <FiMapPin size={32} />,
      actionType: "report",
      img: cardImages[1],
    },
    {
      title: "Support the Cause",
      description: "Your donations or advocacy can make a lasting impact.",
      icon: <FiHeart size={32} />,
      actionType: "support",
      img: cardImages[2],
    },
    {
      title: "Educate & Spread Awareness",
      description: "Inspire others to value and conserve our shared heritage.",
      icon: <FiBookOpen size={32} />,
      actionType: "educate",
      img: cardImages[3],
    },
    {
      title: "Preserve Local Stories",
      description: "Document oral histories and traditions for future generations.",
      icon: <FiShield size={32} />,
      actionType: "preserve",
      img: cardImages[4],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 uppercase">
            Join the Movement
          </h2>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
            Be a champion for Bihar’s heritage. Act now to preserve its cultural legacy.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
        >
          {actions.map((action, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => handleCardClick(action.actionType)}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl cursor-pointer border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-white/30 flex flex-col"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleCardClick(action.actionType)}
              aria-label={`Join as ${action.title}`}
            >
              {/* Image Section */}
              <div className="h-40 overflow-hidden">
                <img
                  src={action.img}
                  alt={action.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* Content Area - Now Properly Stretched with Flex */}
              <div className="p-6 text-center relative z-10 flex flex-col flex-grow justify-between">
                <div>
                  <div className="w-14 h-14 mx-auto mb-4 bg-indigo-600/20 text-indigo-300 flex items-center justify-center rounded-full group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    {action.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">
                    {action.description}
                  </p>
                </div>

                {/* Button Now Always Visible at Bottom */}
                <button
                  className="inline-block bg-indigo-600 text-white font-semibold py-2.5 px-7 rounded-full hover:bg-indigo-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(action.actionType);
                  }}
                >
                  Get Involved
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Form Modal */}
      <JoinMovementForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        selectedAction={selectedAction}
      />
    </section>
  );
};

export default JoinMovement;