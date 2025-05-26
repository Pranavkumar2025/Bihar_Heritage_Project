// import React, { useEffect, useState } from "react";
// // eslint-disable-next-line
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import img1 from "../assets/heritage/img1.jpeg";
// import img2 from "../assets/heritage/img2.jpg";
// import img3 from "../assets/heritage/img3.jpg";
// import img4 from "../assets/heritage/img4.jpg";
// import img5 from "../assets/heritage/img5.jpg";
// import img6 from "../assets/heritage/img6.jpg";
// import img7 from "../assets/heritage/img7.jpg";
// import img8 from "../assets/heritage/img8.jpg";

// import heritagvideo from "../assets/Videos/BiharHeritage_2.mp4";

// const images = [img1, img2, img3, img4, img5, img6, img7, img8];

// const Hero = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const getVisibleImages = () => {
//     const visible = [];
//     for (let i = -2; i <= 2; i++) {
//       const index = (activeIndex + i + images.length) % images.length;
//       visible.push({ img: images[index], offset: i });
//     }
//     return visible;
//   };

//   return (
//     <div className="relative w-full min-h-[calc(100vh-120px)] overflow-hidden pt-[120px]">

//       {/* Video Background */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
//       >
//         <source src={heritagvideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/50 z-0"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16">
//         {/* Caption */}
//         <motion.div
//           className="text-center max-w-4xl mb-12 px-4"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: {},
//             visible: {
//               transition: {
//                 staggerChildren: 0.2,
//               },
//             },
//           }}
//         >
//           <motion.h1
//             className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//           >
//             Preserving Bihar’s Glorious Past
//           </motion.h1>

//           <motion.p
//             className="text-white text-lg md:text-xl leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
//           >
//             From ancient excavations to cultural celebrations — we protect and promote the rich heritage of Bihar. Discover over 400 historical sites across the state.
//           </motion.p>
//         </motion.div>

//         {/* Carousel */}
//         <div className="relative flex items-center justify-center gap-4 md:gap-10">
//           <AnimatePresence initial={false} mode="popLayout">
//             {getVisibleImages().map(({ img, offset }, idx) => {
//               const absOffset = Math.abs(offset);
//               const scale = offset === 0 ? 1.1 : 1 - absOffset * 0.1;
//               const zIndex = 10 - absOffset;
//               const translateX = offset * 150;
//               const blur = absOffset >= 2 ? "blur-[2px] opacity-60" : "";

//               return (
//                 <motion.div
//                   key={`${activeIndex}-${idx}`}
//                   className={`relative w-48 h-64 md:w-60 md:h-80 rounded-xl overflow-hidden shadow-xl cursor-pointer bg-white ${blur}`}
//                   style={{
//                     transform: `translateX(${translateX}px) scale(${scale})`,
//                     zIndex,
//                   }}
//                   initial={{ opacity: 0, scale: 0.85, y: 20 }}
//                   animate={{ opacity: 1, scale, y: 0 }}
//                   exit={{ opacity: 0, scale: 0.85, y: -20 }}
//                   transition={{ duration: 0.6, ease: "easeInOut" }}
//                 >
//                   <img
//                     src={img}
//                     alt={`slide-${idx}`}
//                     className="w-full h-full object-cover rounded-xl"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </div>

//         {/* Navigation Arrows */}
//         <div className="flex gap-4 mt-10">
//           <button
//             onClick={() => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)}
//             className="w-11 h-11 rounded-full bg-gray-200 hover:bg-slate-600 transition-colors flex items-center justify-center shadow-md"
//           >
//             <ChevronLeft className="text-gray-700 hover:text-white" />
//           </button>
//           <button
//             onClick={() => setActiveIndex((prev) => (prev + 1) % images.length)}
//             className="w-11 h-11 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors flex items-center justify-center shadow-md"
//           >
//             <ChevronRight className="text-white" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;




import React, { useEffect, useRef } from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";

import heritagvideo from "../assets/Videos/BiharHeritage1.mp4";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div className="w-full h-screen bg-black overflow-hidden">
      {/* ===== VIDEO BANNER ===== */}
      <div className="relative w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          src={heritagvideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-xl tracking-wide"
            >
              Preserving Bihar’s Glorious Past
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-white text-lg md:text-xl mb-4 drop-shadow-lg"
            >
              From ancient excavations to cultural celebrations —
              <br className="hidden md:inline" />
              we protect and promote the enduring legacy of Bihar.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="text-gray-200 text-base md:text-lg italic"
            >
              Join us in discovering monuments, history, and untold stories
              that shaped a civilization.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
