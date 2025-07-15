import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";

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
  "exploration2.jpg": exploration2Img,
};

const Card = ({ item, index, onClick }) => {
  return (
    <motion.div
      key={item.id}
      className="flex flex-col rounded-2xl overflow-hidden border p-2 border-gray-200 transition-all duration-500 ease-in-out hover:shadow-xl group cursor-pointer w-64 min-h-[280px] bg-white"
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

const Excavation2 = () => {
  const [activeTab, setActiveTab] = useState("excavation");
  const [selectedIndex, setSelectedIndex] = useState(0);
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
  const scrollLeft = () => {
  scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
};

const scrollRight = () => {
  scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
};

  const selectedItem = items[selectedIndex];
  const detailsText =
    detailMap[selectedItem?.title]?.details || "No detailed description available.";

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-yellow-100 px-4 sm:px-6 md:px-12 py-12">
  <div className="max-w-7xl mx-auto space-y-12">

    {/* Hero / Banner Section */}
    <div className="bg-indigo-500 py-14 px-4 sm:px-10 text-center  shadow-lg">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-white uppercase mb-4 tracking-wide"
      >
        Discoveries Through Time
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
      >
        — Echoes of the past unearthed through stone, soil, and legacy. —
      </motion.p>
    </div>

    {/* Tab Buttons */}
    <div className="flex justify-center gap-3 flex-wrap">
      {["excavation", "exploration"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-5 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all ${
            activeTab === tab
              ? "bg-yellow-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-yellow-300"
          }`}
        >
          {tab === "excavation" ? "🏺 Excavation Sites" : "🧭 Exploration Activities"}
        </button>
      ))}
    </div>

    {/* Highlighted Item Section */}
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={imageMap[selectedItem.image]}
          alt={selectedItem.title}
          className="w-full md:w-1/2 h-64 md:h-auto object-cover"
        />
        <div className="p-6 md:p-10 flex flex-col justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {selectedItem.title}
          </h2>
          <p className="text-gray-700 text-sm md:text-base max-h-52 overflow-y-auto pr-2">
            {detailsText}
          </p>
          <button
            onClick={() => setModalItem(selectedItem)}
            className="mt-6 text-yellow-600 hover:underline font-semibold text-sm md:text-base"
          >
            Learn More →
          </button>
        </div>
      </motion.div>
    </div>

    {/* Horizontal Scroll Cards */}
<div className="pt-4 pb-6">
  <div
  ref={scrollRef}
  className="flex gap-2 overflow-x-auto snap-x snap-mandatory px-1 sm:px-4 md:px-6 no-scrollbar"
  style={{ scrollBehavior: "smooth" }}
>
  {items.map((item, index) => (
    <div key={item.id} className="snap-start shrink-0 w-[80%] sm:w-[320px] ">
      <Card
        item={item}
        index={index}
        onClick={setSelectedIndex}
        isActive={index === selectedIndex}
      />
    </div>
  ))}
</div>


  {/* Arrows */}
  <div className="flex justify-center items-center gap-6 mt-6">
    <button
      onClick={scrollLeft}
      className="custom-prev cursor-pointer bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 text-lg"
    >
      &#8592;
    </button>
    <button
      onClick={scrollRight}
      className="custom-next cursor-pointer bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 text-lg"
    >
      &#8594;
    </button>
  </div>
</div>


    {/* Call to Action */}
    <div className="text-center">
      <Link to="/protected-sites">
        <button className="bg-yellow-600 text-lg sm:text-xl text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition-all duration-300">
          📜 View All Protected Sites
        </button>
      </Link>
    </div>

    {/* Modal */}
    <Modal item={modalItem} onClose={() => setModalItem(null)} />
  </div>
</div>



  );
};

export default Excavation2;
