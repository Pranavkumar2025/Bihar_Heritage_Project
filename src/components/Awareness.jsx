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

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Awareness = () => {
  return (
    <section className="relative overflow-hidden py-24 px-6 md:px-20 bg-cover bg-center bg-fixed ">
      {/* Background image */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-10">
        <img
          src={AwarenessImg}
          alt="Background"
          className="w-full h-full object-cover brightness-[0.5]"
        />
      </div>

      {/* Transparent overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm -z-10" />

      <div className="relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-center text-4xl md:text-7xl uppercase font-extrabold text-slate-200 mb-4"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Awareness & Education
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-center text-slate-100 text-lg md:text-2xl max-w-2xl mx-auto mb-16 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          — Spreading knowledge and involvement through engaging initiatives —
        </motion.p>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {awarenessItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{ scale: 1.06, y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-3xl p-6 backdrop-blur-md bg-white/10 border border-white/30 shadow-md hover:shadow-xl transition-all duration-300 text-white"
            >
              <h3 className="text-lg font-bold mb-3 text-indigo-100 uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Awareness Thought */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-white font-medium italic">
            “Preserving heritage is not just about saving the past; it's about
            shaping a future rich in identity, pride, and connection.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Awareness;
