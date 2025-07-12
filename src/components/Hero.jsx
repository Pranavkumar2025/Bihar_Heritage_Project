import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heritagvideo from "../assets/Videos/BiharHeritage1.mp4";

// Array of animated text entries with animation type and optional color spans
const texts = [
  {
    content: (
      <>
        Preserving <span className="text-yellow-400">Bihar’s</span> Glorious Past
      </>
    ),
    animation: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -40 } },
  },
  {
    content: (
      <>
        Discover <span className="text-yellow-400 font-semibold">Monuments</span>,{" "}
        <span className="text-orange-400">Festivals</span> & Stories
      </>
    ),
    animation: { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 } },
  },
  {
    content: (
      <>
        Where <span className="text-yellow-400 ">Heritage</span> Breathes Through Every Brick
      </>
    ),
    animation: { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 100 } },
  },
  {
    content: (
      <>
        Explore the <span className="text-yellow-400 ">Soul</span> of Indian Civilization
      </>
    ),
    animation: { initial: { opacity: 0, rotate: -5 }, animate: { opacity: 1, rotate: 0 }, exit: { opacity: 0, rotate: 5 } },
  },
  {
    content: (
      <>
        Bihar — Land of <span className="text-orange-400 ">Buddha</span> &{" "}
        <span className="text-yellow-400">Wisdom</span>
      </>
    ),
    animation: { initial: { opacity: 0, y: 30, scale: 0.95 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, scale: 0.95 } },
  },
];

const Hero = () => {
  const videoRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Rotate text every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      {/* Background Video */}
      <video
        ref={videoRef}
        src={heritagvideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={texts[index].animation.initial}
              animate={texts[index].animation.animate}
              exit={texts[index].animation.exit}
              transition={{ duration: 1 }}
              className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-wide"
            >
              {texts[index].content}
            </motion.h1>
          </AnimatePresence>

          <motion.p
            key={`sub-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-gray-200 text-base md:text-lg italic"
          >
            Join us in celebrating the legacy that shaped Indian history.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
