import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="cta"
      className="bg-gradient-to-br from-blue-50 to-white py-24 px-4 text-center min-h-[60vh] flex flex-col justify-center items-center"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        variants={fadeIn}
        className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 tracking-tight leading-tight"
      >
        Preserve the past. <br />
        <span className="text-yellow-600">Discover Bihar’s soul.</span>
      </motion.h2>

      <motion.p
        variants={fadeIn}
        className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl"
      >
        Embark on a journey through Bihar's rich heritage and vibrant traditions.
      </motion.p>

      <motion.a
        href="gallery"
        whileHover={{
          scale: 1.08,
          boxShadow: "0px 8px 24px rgba(234,179,8,0.3)",
        }}
        whileTap={{ scale: 0.95 }}
        variants={fadeIn}
        className="inline-block bg-yellow-500 text-indigo-900 font-bold px-8 py-3 text-lg rounded-full transition-all duration-300 shadow-lg hover:bg-yellow-600 hover:text-white"
      >
        Start Your Journey
      </motion.a>
    </motion.section>
  );
};

export default CallToAction;
