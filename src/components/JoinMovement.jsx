import React from 'react';
import { motion } from "framer-motion";
import { FiUsers, FiMapPin, FiHeart, FiBookOpen, FiShield } from "react-icons/fi";
import JoinMovementBack from "../assets/UniqueBiharImg/JoinMovement.jpg";

const JoinMovement = () => {
    const actions = [
        {
            title: "Become a Volunteer",
            description: "Lend your time and energy to protect history and culture.",
            icon: <FiUsers size={28} />,
        },
        {
            title: "Report a Site",
            description: "Share neglected gems and help us bring them to light.",
            icon: <FiMapPin size={28} />,
        },
        {
            title: "Support the Cause",
            description: "Your donations, shares, or ideas can fuel preservation.",
            icon: <FiHeart size={28} />,
        },
        {
            title: "Educate & Spread Awareness",
            description: "Teach others the importance of conserving heritage.",
            icon: <FiBookOpen size={28} />,
        },
        {
            title: "Preserve Local Stories",
            description: "Document and save oral histories, photos, and traditions.",
            icon: <FiShield size={28} />,
        },
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative  py-12 px-6 md:px-20 bg-cover bg-center flex flex-col justify-center"
            style={{ backgroundImage: `url(${JoinMovementBack})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-indigo-900/80 z-0" />

            {/* Header Content */}
            <div className="relative z-10 text-center mb-16 max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-7xl font-extrabold text-white uppercase mb-6 drop-shadow-lg">
                    Join the Movement
                </h2>
                <motion.p
                    variants={fadeIn}
                    className="text-white text-lg text-center"
                >
                    — Heritage needs its heroes — step in, speak up, and safeguard the soul of Bihar —
                </motion.p>

            </div>

            {/* Card Grid: first row 3 cards, second row 2 cards centered */}
            <div className="relative z-10 max-w-6xl mx-auto">
                {/* First row: 3 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center mb-10">
                    {actions.slice(0, 3).map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/90 h-50 w-full max-w-xs backdrop-blur-md ring-1 ring-indigo-200 rounded-2xl shadow-md p-6 flex flex-col justify-center items-center text-center hover:shadow-2xl transition-transform transform hover:-translate-y-2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-12 h-12 mb-4 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shadow">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-indigo-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Second row: 2 cards centered */}
                <div className="flex flex-wrap justify-center gap-8">
                    {actions.slice(3).map((item, index) => (
                        <motion.div
                            key={index + 3}
                            className="bg-white/90 h-50 w-full max-w-xs backdrop-blur-md ring-1 ring-indigo-200 rounded-2xl shadow-md p-6 flex flex-col justify-center items-center text-center hover:shadow-2xl transition-transform transform hover:-translate-y-2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-12 h-12 mb-4 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shadow">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-indigo-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default JoinMovement;
