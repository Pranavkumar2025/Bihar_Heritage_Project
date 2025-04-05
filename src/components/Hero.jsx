import React, { useState, useEffect } from "react";
// eslint-disable-next-line 
import { motion, AnimatePresence } from "framer-motion";

// ✅ Importing images
import img1 from "../assets/heritage/img1.jpeg";
import img2 from "../assets/heritage/img2.jpg";
// 👉 Add more images and labels
const images = [
  { src: img1, label: "Jal Mandir" },
  { src: img2, label: "Mahabodhi Temple" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // 🔁 Auto-rotate every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "calc(100vh - 120px)" }} // 💡 Adjust this value to match your combined header height
    >
      {/* 🔄 Image slideshow with animation */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[current].src})`,
          }}
        />
      </AnimatePresence>

      {/* 📦 Static left-side content */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-12 max-w-xl bg-black/70 text-white p-6 rounded-2xl z-10 backdrop-blur-sm shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Heritage is for everybody.
        </h1>
        <p className="text-sm md:text-base leading-relaxed">
          We are the group that preserves hundreds of historic sites in every
          corner of Bihar. Some are globally renowned, some are local gems, and
          all are there for everyone. There are over four hundred heritage sites
          across the state just waiting to be discovered.
        </p>
      </div>

      {/* 📍 Dynamic location tag */}
      <div className="absolute bottom-6 right-8 z-10 text-white text-base md:text-xl font-semibold bg-black/50 px-4 py-2 rounded-md shadow-md">
        {images[current].label}
      </div>

      {/* 🖤 Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />
    </div>
  );
};

export default Hero;
