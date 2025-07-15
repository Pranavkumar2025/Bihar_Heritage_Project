import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import JoinMovement from "./JoinMovement";

import NalandaUniversityImg from "../assets/heritage/NalandaUniversity.jpg";
import GolgharImg from "../assets/heritage/GolgharImg.jpg";
import RohtasgarhFortImg from "../assets/heritage/rohtas.jpg";
import heritageVideo from "../assets/Videos/BiharHistory.mp4";
import VikramshilaImg from "../assets/heritage/Vikramshila-after.jpeg";
import RajgirImg from "../assets/heritage/rajgir.jpg";
import BodhGayaImg from "../assets/heritage/BodhGayaImg.jpg";

const heritageSites = [
  {
    title: "Bodh Gaya",
    location: "Gaya, Bihar",
    image: BodhGayaImg,
    description: "Where Buddha attained enlightenment, a major pilgrimage site.",
    link: "https://en.wikipedia.org/wiki/Bodh_Gaya",
  },
  {
    title: "Rajgir",
    location: "Nalanda, Bihar",
    image: RajgirImg,
    description: "Ancient city with hills, hot springs, and religious significance.",
    link: "https://en.wikipedia.org/wiki/Rajgir",
  },
  {
    title: "Nalanda University",
    location: "Nalanda, Bihar",
    image: NalandaUniversityImg,
    description: "Ancient center of learning, a UNESCO World Heritage Site.",
    link: "https://en.wikipedia.org/wiki/Nalanda",
  },
  {
    title: "Golghar",
    location: "Patna, Bihar",
    image: GolgharImg,
    description: "A granary with a unique dome structure built in 1786.",
    link: "https://en.wikipedia.org/wiki/Golghar",
  },
  {
    title: "Rohtasgarh Fort",
    location: "Rohtas, Bihar",
    image: RohtasgarhFortImg,
    description: "A grand fort nestled in the hills, rich in Mughal history.",
    link: "https://en.wikipedia.org/wiki/Rohtasgarh_Fort",
  },
  {
    title: "Vikramshila University",
    location: "Bhagalpur, Bihar",
    image: VikramshilaImg,
    description: "Ancient university for Buddhist studies like Nalanda.",
    link: "https://en.wikipedia.org/wiki/Vikramashila",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ExploreJoin = () => {
  const scrollRef = useRef(null);
  const videoRef = useRef(null);
  const [exploreRef, inViewExplore] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (videoRef.current) videoRef.current.currentTime = 5;
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const cardWidth = 340 + 24;
      scrollRef.current.scrollBy({ left: dir * cardWidth * 3, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* 🔴 Background Blur */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center blur-md opacity-30"
        style={{ backgroundImage: `url(${RajgirImg})` }}
      />

      {/* 🔵 Foreground Content */}
      <div className="relative z-10 w-full bg-white/90 backdrop-blur-sm overflow-hidden">
        {/* 🏛️ Explore Heritage Sites */}
        <motion.section
          ref={exploreRef}
          initial="hidden"
          animate={inViewExplore ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="relative py-10 px-6 md:px-20 bg-white"
        >
          <div className="w-full max-w-screen-xl mx-auto bg-indigo-500 py-16 px-4 md:px-10 rounded-md">
            <motion.h2
              variants={fadeIn}
              className="text-5xl md:text-6xl font-extrabold text-white text-center uppercase mb-4"
            >
              Explore Heritage Sites
            </motion.h2>

            <motion.p
              variants={fadeIn}
              className="text-white text-lg text-center"
            >
              — Timeless sites that breathe life into Bihar’s identity —
            </motion.p>
          </div>

          {/* Cards */}
          <div className="relative mt-10 z-10">
            <div ref={scrollRef} className="flex space-x-6 overflow-x-auto no-scrollbar px-2 pb-4 max-w-full">
              {heritageSites.map((site, index) => (
                <motion.a
                  key={index}
                  href={site.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="min-w-[340px] max-w-[340px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
                >
                  <div className="h-48 w-full relative">
                    <img src={site.image} alt={site.title} className="h-full w-full object-cover rounded-t-xl" />
                    <div className="absolute top-0 left-0 bg-indigo-600 text-white px-3 py-1 text-xs font-semibold rounded-br-xl">
                      {site.location}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{site.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{site.description}</p>
                    <span className="text-indigo-600 text-sm font-medium hover:underline">
                      Learn More →
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex justify-center items-center gap-6 mt-10">
              <button
                onClick={() => scroll(-1)}
                className="w-10 h-10 rounded-full bg-black text-white text-lg hover:bg-gray-800"
              >
                ←
              </button>
              <button
                onClick={() => scroll(1)}
                className="w-10 h-10 rounded-full bg-black text-white text-lg hover:bg-gray-800"
              >
                →
              </button>
            </div>
          </div>
        </motion.section>

        {/* 📜 Text & 🎥 Video */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-6 md:px-20 py-20 bg-white overflow-hidden">
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-900 leading-tight mb-4">
              Explore — <span className="text-indigo-600">Bihar’s Timeless Heritage</span>
            </h2>
            <motion.p
              className="text-gray-700 text-lg mb-6 max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Dive into ancient landmarks that echo with <span className="text-indigo-600 font-semibold">wisdom, power,</span> and <span className="text-indigo-600 font-semibold">devotion</span>. Bihar's legacy lives in every stone and story.
            </motion.p>
            <motion.blockquote
              className="italic text-indigo-800 text-base md:text-lg font-medium border-l-4 border-indigo-300 pl-4 max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              “To explore Bihar is to walk the footsteps of history — sacred, scholarly, and eternal.”
            </motion.blockquote>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <video
              ref={videoRef}
              src={heritageVideo + "#t=5"}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 origin-center"
            />
            <div className="absolute inset-0 bg-black/30 rounded-3xl pointer-events-none" />
          </motion.div>
        </section>

        {/* ❤️ Join Section */}
        <JoinMovement />

        {/* Footer */}
      </div>
    </div>
  );
};

export default ExploreJoin;
