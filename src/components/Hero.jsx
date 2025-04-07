import React, { useEffect, useState } from "react";
// eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";

// ✅ Image Imports
import img1 from "../assets/heritage/img1.jpeg";
import img4 from "../assets/heritage/img4.jpg";
import img3 from "../assets/heritage/img3.jpg";

// 🖼️ Image Array
const images = [
  { src: img1, label: "Jal Mandir" },
  { src: img4, label: "Mahabodhi Temple" },
  { src: img3, label: "Budh Gaya" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden scroll-smooth"
      style={{ height: "calc(100vh - 120px)" }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current].src}
          initial={{ opacity: 0, scale: 1.05, x: 100 }}
          animate={{ opacity: 1, scale: 1.1, x: 0 }}
          exit={{ opacity: 0, scale: 1.05, x: -100 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Static Text Box */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-12 max-w-xl bg-black/70 text-white p-6 rounded-2xl z-20 backdrop-blur-sm shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            Heritage is for everybody.
          </motion.h1>
          <motion.p
            className="text-xs sm:text-sm md:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
          >
            We preserve hundreds of historic sites in Bihar. Some are globally
            renowned, some are local gems — all are here for you to discover.
          </motion.p>
        </motion.div>
      </div>

      {/* Caption */}
      <div className="absolute bottom-6 right-4 sm:right-8 z-20 text-white text-sm sm:text-lg md:text-xl font-semibold bg-black/50 px-4 py-2 rounded-md shadow-md">
        {images[current].label}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />
    </div>
  );
};

export default Hero;
