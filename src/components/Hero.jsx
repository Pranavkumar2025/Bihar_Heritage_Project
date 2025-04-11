import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../assets/heritage/img1.jpeg";
import img2 from "../assets/heritage/img2.jpg";
import img3 from "../assets/heritage/img3.jpg";
import img4 from "../assets/heritage/img4.jpg";
import img5 from "../assets/heritage/img5.jpg";
import img6 from "../assets/heritage/img6.jpg";
import img7 from "../assets/heritage/img7.jpg";
import img8 from "../assets/heritage/img8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (activeIndex + i + images.length) % images.length;
      visible.push({ img: images[index], offset: i });
    }
    return visible;
  };

  return (
    <div className="w-full min-h-[calc(100vh-120px)] bg-gray-100 flex flex-col items-center justify-center relative overflow-hidden px-4 py-16 pt-[120px]">
      
      {/* Caption with Animations */}
      <motion.div
        className="text-center max-w-3xl mb-12 px-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Heritage is for everybody.
        </motion.h1>

        <motion.p
          className="text-gray-600 text-lg md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          We are the group that preserves hundreds of historic sites across Bihar.
          Some are globally renowned, some are local gems — and all are there for everyone.
          <br className="hidden md:block" />
          Over 400 heritage sites across the state are just waiting to be discovered.
        </motion.p>
      </motion.div>

      {/* Carousel */}
      <div className="relative flex items-center justify-center gap-4 md:gap-10">
        <AnimatePresence initial={false} mode="popLayout">
          {getVisibleImages().map(({ img, offset }, idx) => {
            const absOffset = Math.abs(offset);
            const scale = 1 - absOffset * 0.1;
            const zIndex = 10 - absOffset;
            const translateX = offset * 150;
            const blur = absOffset >= 2 ? "blur-[2px]" : "";

            return (
              <motion.div
                key={`${activeIndex}-${idx}`}
                className={`relative w-52 h-72 md:w-64 md:h-80 rounded-xl overflow-hidden shadow-xl cursor-pointer bg-white ${blur}`}
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  zIndex,
                }}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <img
                  src={img}
                  alt={`slide-${idx}`}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="flex gap-4 mt-12">
        <button
          onClick={() => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)}
          className="w-11 h-11 rounded-full bg-gray-200 hover:bg-slate-600 transition-colors flex items-center justify-center shadow-md"
        >
          <ChevronLeft className="text-gray-700 hover:text-white" />
        </button>
        <button
          onClick={() => setActiveIndex((prev) => (prev + 1) % images.length)}
          className="w-11 h-11 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors flex items-center justify-center shadow-md"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
