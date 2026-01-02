import React from "react";
import { motion } from "framer-motion";

// Same background as the updated JoinMovement component (Nalanda Mahavihara - iconic Bihar heritage)
const backgroundImage = "https://whc.unesco.org/uploads/thumbs/site_1502_0010-1200-630-20160616154106.jpg";

// Carefully selected relevant images for each awareness item
const cardImages = [
  "https://whc.unesco.org/uploads/thumbs/site_1502_0010-1200-630-20160616154106.jpg", // Heritage Awareness Programme - Iconic Nalanda Mahavihara overview
  "https://cdn.britannica.com/12/94612-050-B4EEB84A/temple-Buddhist-Mahabodhi-Bihar-India-Bodh-Gaya.jpg", // Seminar/Workshop - Mahabodhi Temple (Bihar UNESCO site)
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Women_performing_Jhijhiya_dance.jpg", // Women's Day Special - Traditional Jhijhiya dance by women in Bihar
  "https://worldheritageolympiad.org/uploads/blog/Bihar%20Heritage%20Olympiad_Blog_%20November%2025,%202024%20-%20Copy.jpg", // Slogan Writing Competition - Students at Bihar World Heritage Olympiad event
];

const awarenessItems = [
  {
    title: "Heritage Awareness Programme",
    desc: "Engaging the community to value and preserve cultural heritage through interactive sessions.",
    img: cardImages[0],
  },
  {
    title: "Seminar / Workshop",
    desc: "Expert-led workshops on conservation techniques and historical relevance of local sites.",
    img: cardImages[1],
  },
  {
    title: "Women's Day Special",
    desc: "Celebrating women’s contribution in heritage conservation with storytelling and performances.",
    img: cardImages[2],
  },
  {
    title: "Slogan Writing Competition",
    desc: "Encouraging creativity among students to raise awareness on cultural preservation.",
    img: cardImages[3],
  },
];

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

const Awareness = () => {
  return (
    <section
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed"
    >
      {/* Consistent dark elegant overlay matching JoinMovement */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl uppercase sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
            Awareness & Education
          </h2>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
            Spreading knowledge and involvement through engaging initiatives.
          </p>
        </motion.div>

        {/* Cards Grid - 4 columns on large screens for perfect fit */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {awarenessItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl cursor-default border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-white/30"
              role="article"
              aria-label={`Awareness Item: ${item.title}`}
            >
              {/* Card Image - Compact height */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-6 text-center relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Inspirational Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto text-center px-6"
        >
          <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-medium italic leading-relaxed">
            “Preserving heritage is not just about saving the past; it’s about shaping a future rich in identity, pride, and connection.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Awareness;