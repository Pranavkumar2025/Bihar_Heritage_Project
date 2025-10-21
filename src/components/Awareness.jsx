import React from "react";
import { motion } from "framer-motion";
import AwarenessImg from "../assets/UniqueBiharImg/Awareness.jpg";

const awarenessItems = [
  {
    title: "Heritage Awareness Programme",
    desc: "Engaging the community to value and preserve cultural heritage through interactive sessions.",
  },
  {
    title: "Seminar / Workshop",
    desc: "Expert-led workshops on conservation techniques and historical relevance of local sites.",
  },
  {
    title: "Women's Day Special",
    desc: "Celebrating women’s contribution in heritage conservation with storytelling and performances.",
  },
  {
    title: "Slogan Writing Competition",
    desc: "Encouraging creativity among students to raise awareness on cultural preservation.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: {
    scale: 1.02,
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const Awareness = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${AwarenessImg})` }}
    >
      {/* Overlay with Minimal Opacity */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 to-gray-950/40 backdrop-blur-[4px] z-0"
        style={{ boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.1)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className=" uppercase text-center text-5xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
        >
          Awareness & Education
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-gray-100 text-lg sm:text-xl lg:text-2xl font-light max-w-3xl mx-auto mb-12"
        >
          Spreading knowledge and involvement through engaging initiatives.
        </motion.p>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {awarenessItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="rounded-xl p-6 bg-white/95 backdrop-blur-sm border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 text-gray-900"
              role="article"
              aria-label={`Awareness Item: ${item.title}`}
            >
              <h3 className="text-lg font-semibold mb-3 tracking-tight">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Awareness Thought */}
        <motion.div
          className="mt-12 max-w-3xl mx-auto text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-lg sm:text-xl lg:text-2xl text-white font-medium italic">
            “Preserving heritage is not just about saving the past; it’s about shaping a future rich in identity, pride, and connection.”
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Awareness;