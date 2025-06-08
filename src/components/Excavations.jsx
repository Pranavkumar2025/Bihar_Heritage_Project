import React, { useRef, useState, useEffect } from "react";
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
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
        >
          <motion.div
            key="modal-content"
            initial={{ scale: 0.9, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 40, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh] p-6"
          >
            <motion.button
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 bg-gray-200 rounded-full p-1 hover:bg-red-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </motion.button>

            <motion.img
              src={imageMap[item.image]}
              alt={item.title}
              className="w-full h-64 object-cover rounded-xl mb-4"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            <motion.h2
              className="text-2xl font-bold text-gray-800 mb-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              {item.title}
            </motion.h2>

            <motion.pre
              className="text-gray-700 whitespace-pre-wrap font-sans text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {detailsText}
            </motion.pre>
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);


  const items =
    activeTab === "excavation"
      ? data.excavationSites
      : data.explorationActivities;

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

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

  const selectedItem = items[selectedIndex];
  const detailsText =
    detailMap[selectedItem?.title]?.details || "No detailed description available.";

  const Card = ({ item, index, onClick }) => {
    return (
      <motion.div
        key={item.id}
        className="flex flex-col rounded-2xl overflow-hidden border p-2  border-gray-200 transition-all duration-500 ease-in-out hover:shadow-xl group cursor-pointer w-64 min-h-[280px] bg-white"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => onClick(index)}
      >
        <div className="overflow-hidden rounded-t-lg">
          <img
            src={imageMap[item.image]}
            alt={item.title}
            className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="px-2 pt-4 rounded-b-lg text-gray-800 flex-grow flex flex-col justify-between group-hover:bg-[#f8c2c5] group-hover:text-gray-900 transition-colors duration-500">
          <div>
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-sm mb-2 group-hover:opacity-90 transition-opacity duration-500">
              {item.description}
            </p>
          </div>

        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-slate-100 pt-10 pb-4 px-6 md:px-20">
      <h1 className="text-5xl font-bold text-center text-gray-800">
        Discoveries Through Time
      </h1>

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => setActiveTab("excavation")}
          className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${activeTab === "excavation"
            ? "bg-yellow-600 text-white"
            : "bg-white text-gray-800 hover:bg-yellow-100"
            }`}
        >
          🏺 Excavation Sites
        </button>
        <button
          onClick={() => setActiveTab("exploration")}
          className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${activeTab === "exploration"
            ? "bg-yellow-600 text-white"
            : "bg-white text-gray-800 hover:bg-yellow-100"
            }`}
        >
          🧭 Exploration Activities
        </button>
      </div>

      <motion.div
        className="mt-4 w-full px-4 md:px-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row transition-all duration-500 group"
        >
          <div className="w-full md:w-1/2 py-6 px-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                {selectedItem.title}
              </h2>
              <p className="text-gray-700 whitespace-pre-wrap text-sm md:text-base max-h-[200px] overflow-y-auto pr-2">
                {detailsText}
              </p>
            </div>
            <button
              onClick={() => setModalItem(selectedItem)}
              className="mt-6 text-[#FF4D5A] text-base font-semibold hover:underline transition-all duration-500 group-hover:text-[#D90429] flex items-center gap-1"
            >
              Learn More <ChevronRight size={16} />
            </button>
          </div>

          <div className="w-full md:w-1/2 h-[250px] sm:h-[300px] lg:h-[400px] overflow-hidden">
            <motion.img
              src={imageMap[selectedItem.image]}
              alt={selectedItem.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>
      </motion.div>





      <div className="relative mt-1">


        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-16 pt-4 pb-8 mb-4"
        >
          {items.map((item, index) => (
            <Card key={item.id} item={item} index={index} onClick={setSelectedIndex} />
          ))}
        </div>


      </div>

      <Modal item={modalItem} onClose={() => setModalItem(null)} />

    </div>
  );
};

export default Excavations;