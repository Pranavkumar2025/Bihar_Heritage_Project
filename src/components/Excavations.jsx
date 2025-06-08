import React, { useRef, useState } from "react";
// eslint-disable-next-line
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Load data
import data from "./ExcavationData/Excavation.json";
import detailMap from "./ExcavationData/DetailedInfo.json";

// Import all heritage images
import NalandaImg from "../assets/heritage/NalandaUniversity.jpg";
import VikramShilaImg from "../assets/heritage/Vikramshila.jpg";
import patliputraImg from "../assets/heritage/patliputraimg.jpg";
import rohtasImg from "../assets/heritage/rohtas.jpg";
import rajgirImg from "../assets/heritage/rajgir.jpg";
import telharaImg from "../assets/heritage/telhara.jpg";
import exploration1Img from "../assets/heritage/exploration1.jpg";
import exploration2Img from "../assets/heritage/exploration2.jpg";

// Image map
const imageMap = {
  "NalandaUniversity.jpg": NalandaImg,
  "Vikramshila.jpg": VikramShilaImg,
  "patliputraimg.jpg": patliputraImg,
  "rohtas.jpg": rohtasImg,
  "rajgir.jpg": rajgirImg,
  "telhara.jpg": telharaImg,
  "exploration1.jpg": exploration1Img,
  "exploration2.jpg": exploration2Img
};

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.4,
      delay,
      ease: "easeOut",
    },
  },
});

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Card = ({ item, index, onClick }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(item)}
      className="cursor-pointer min-w-[300px] max-w-[300px] flex-shrink-0 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl transition-all duration-300"
    >
      <motion.img
        src={imageMap[item.image]}
        alt={item.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.h3
        className="text-xl font-semibold text-gray-800"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        {item.title}
      </motion.h3>
      <motion.p
        className="text-sm text-gray-600 mt-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {item.description}
      </motion.p>
    </motion.div>
  );
};

const Modal = ({ item, onClose }) => {
  const detailsText =
    detailMap[item?.title]?.details || "No detailed description available.";

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center px-4"
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            className="bg-white max-w-3xl w-full p-6 rounded-xl shadow-xl relative overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 bg-gray-200 rounded-full p-1 hover:bg-red-400 hover:text-white transition"
            >
              <X size={20} />
            </button>
            <img
              src={imageMap[item.image]}
              alt={item.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              {item.title}
            </h2>
            <pre className="text-gray-700 whitespace-pre-wrap font-sans text-sm mt-4">
              {detailsText}
            </pre>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CardSlider = ({ items, onCardClick }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth / 1.2;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mt-6">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-600 text-white rounded-full p-2 shadow hover:bg-yellow-700"
      >
        <ChevronLeft size={28} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-12 pb-4"
      >
        {items.map((item, index) => (
          <Card key={item.id} item={item} index={index} onClick={onCardClick} />
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-600 text-white rounded-full p-2 shadow hover:bg-yellow-700"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

const Excavations = () => {
  const [activeTab, setActiveTab] = useState("excavation");
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div
      id="excavation-section"
      className="min-h-screen bg-gradient-to-b from-yellow-50 to-slate-100 pt-10 pb-4 px-6 md:px-20 relative"
    >
      <motion.h1
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-5xl font-bold text-center text-gray-800"
      >
        Discoveries Through Time
      </motion.h1>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-6 flex justify-center gap-4 flex-wrap"
      >
        <button
          onClick={() => setActiveTab("excavation")}
          className={`px-6 py-2 rounded-full text-lg font-medium shadow-md transition-all duration-300 ${
            activeTab === "excavation"
              ? "bg-yellow-600 text-white"
              : "bg-white text-gray-800 hover:bg-yellow-100"
          }`}
        >
          🏺 Excavation Sites
        </button>
        <button
          onClick={() => setActiveTab("exploration")}
          className={`px-6 py-2 rounded-full text-lg font-medium shadow-md transition-all duration-300 ${
            activeTab === "exploration"
              ? "bg-yellow-600 text-white"
              : "bg-white text-gray-800 hover:bg-yellow-100"
          }`}
        >
          🧭 Exploration Activities
        </button>
      </motion.div>

      <div className="mt-2">
        <CardSlider
          items={
            activeTab === "excavation"
              ? data.excavationSites
              : data.explorationActivities
          }
          onCardClick={(item) => setSelectedCard(item)}
        />
      </div>

      <Modal item={selectedCard} onClose={() => setSelectedCard(null)} />
    </div>
  );
};

export default Excavations;
