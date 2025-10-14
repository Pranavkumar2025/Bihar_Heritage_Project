import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // For navigation
import heritagvideo from "../assets/Videos/BiharHeritage1.mp4";
import fallbackImage from "../assets/GalleryImg/JalMandir.jpg"; // Fallback image

// Array of animated text entries with refined animations
const texts = [
  {
    content: (
      <>
        Preserving <span className="text-yellow-400 font-semibold">Bihar’s</span> Glorious Past
      </>
    ),
    animation: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -50 } },
  },
  {
    content: (
      <>
        Discover <span className="text-yellow-400 font-semibold">Monuments</span>,{" "}
        <span className="text-orange-400 font-semibold">Festivals</span> & Stories
      </>
    ),
    animation: { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.9 } },
  },
  {
    content: (
      <>
        Where <span className="text-yellow-400 font-semibold">Heritage</span> Breathes Through Every Brick
      </>
    ),
    animation: { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 100 } },
  },
  {
    content: (
      <>
        Explore the <span className="text-yellow-400 font-semibold">Soul</span> of Indian Civilization
      </>
    ),
    animation: { initial: { opacity: 0, rotate: -5 }, animate: { opacity: 1, rotate: 0 }, exit: { opacity: 0, rotate: 5 } },
  },
  {
    content: (
      <>
        Bihar — Land of <span className="text-orange-400 font-semibold">Buddha</span> &{" "}
        <span className="text-yellow-400 font-semibold">Wisdom</span>
      </>
    ),
    animation: { initial: { opacity: 0, y: 30, scale: 0.95 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, scale: 0.95 } },
  },
];

// Inline styles for custom fonts
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;600&display=swap');

  .font-playfair {
    font-family: 'Playfair Display', serif;
  }

  .font-poppins {
    font-family: 'Poppins', sans-serif;
  }
`;

const Hero = () => {
  const videoRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Rotate text every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Video playback and loading state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
      videoRef.current.addEventListener("loadeddata", () => {
        setIsLoading(false);
      });
      videoRef.current.addEventListener("error", () => {
        setIsLoading(false); // Ensure fallback is shown on error
      });
    }
  }, []);

  // Scroll down indicator animation
  const scrollIndicatorVariants = {
    animate: {
      y: [0, 10, 0],
      transition: { repeat: Infinity, duration: 1.5 },
    },
  };

  // Handle button click for analytics (example)
  const handleExploreClick = () => {
    // Example: Track click event (replace with your analytics setup)
    if (window.gtag) {
      window.gtag("event", "click", {
        event_category: "Button",
        event_label: "Explore Bihar",
      });
    }
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Inject custom font styles */}
      <style>{styles}</style>

      {/* Background Video with Fallback */}
      <div className="absolute inset-0">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <img
              src={fallbackImage}
              alt="Bihar Heritage Fallback"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-400"></div>
          </div>
        )}
        <video
          ref={videoRef}
          src={heritagvideo}
          poster={fallbackImage}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: isLoading ? 0 : 1 }}
        >
          <source src={heritagvideo} type="video/mp4" />
          <img src={fallbackImage} alt="Bihar Heritage Fallback" />
        </video>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 flex flex-col items-center justify-center text-center px-4">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={texts[index].animation.initial}
              animate={texts[index].animation.animate}
              exit={texts[index].animation.exit}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg font-playfair"
            >
              {texts[index].content}
            </motion.h1>
          </AnimatePresence>

          <motion.p
            key={`sub-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 text-lg sm:text-xl md:text-2xl italic max-w-2xl mx-auto font-poppins"
          >
            Join us in celebrating the legacy that shaped Indian history.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link
              to="/#excavation"
              onClick={handleExploreClick}
              className="mt-8 inline-flex items-center px-8 py-4 bg-yellow-400 text-black font-semibold text-lg rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 font-poppins"
              aria-label="Explore Bihar Heritage"
            >
              Explore Bihar
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          variants={scrollIndicatorVariants}
          animate="animate"
          className="absolute bottom-8 text-white text-sm flex flex-col items-center font-poppins"
        >
          <span className="mb-2">Scroll to Discover</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;