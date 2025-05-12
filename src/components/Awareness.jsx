import React from "react";
import { motion } from "framer-motion";

// Awareness initiatives data
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

// Animation variants
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Awareness = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white  px-4 md:px-16 py-14">
      {/* Main Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Awareness & Educational Initiatives
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-xl text-center text-gray-700 mb-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Spreading Awareness Through Knowledge & Engagement
      </motion.p>

      {/* Cards Grid */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {awarenessItems.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            whileHover={{ scale: 1.05, y: -8 }}
            className="bg-white border border-blue-100 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <h4 className="text-xl font-semibold text-blue-800 mb-3">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Awareness;
