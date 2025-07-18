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
      className="flex flex-col rounded-2xl overflow-hidden border p-2 border-gray-200 transition-all duration-500 ease-in-out hover:shadow-xl group cursor-pointer w-64 min-h-[280px] bg-white/10 backdrop-blur-sm"
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
          <p className="text-sm text-gray-600 mb-2 group-hover:opacity-90 transition-opacity duration-500">
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

  const selectedItem = items[selectedIndex];
  const detailsText =
    detailMap[selectedItem?.title]?.details ||
    "No detailed description available.";

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image Layer */}

      <div className="relative z-10 min-h-screen  pt-10 pb-4 px-6 md:px-20 text-gray-800">
        <div className="w-full max-w-screen-xl mx-auto py-10 px-4 md:px-10 rounded-none">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-7xl font-extrabold text-black text-center uppercase mb-2"
          >
            Bihar Heritage: Timeless Discoveries
          </motion.h2>
        </div>

        <div className="mb-8 flex justify-center gap-4">
          <button
            onClick={() => setActiveTab("excavation")}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
              activeTab === "excavation"
                ? "bg-[#66b2e2] text-white"
                : "bg-white text-gray-800 hover:bg-[#96d2f7]"
            }`}
          >
            Excavation Sites
          </button>
          <button
            onClick={() => setActiveTab("exploration")}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
              activeTab === "exploration"
                ? "bg-[#66b2e2] text-white"
                : "bg-white text-gray-800 hover:bg-[#96d2f7]"
            }`}
          >
            Exploration Activities
          </button>
        </div>

        <motion.div
          className="mt-4 w-full px-4 md:px-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-full h-[500px] perspective">
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-full transform-style-preserve-3d will-change-transform transition-transform duration-700"
            >
              {/* Front Side */}
              <div className="absolute inset-0 backface-hidden">
                <img
                  src={imageMap[selectedItem.image]}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute bottom-6 left-6 z-20 text-white">
                  <h2 className="text-3xl font-bold">{selectedItem.title}</h2>
                  <button
                    onClick={() => setModalItem(selectedItem)}
                    className="mt-4 text-[#FF4D5A] font-semibold hover:underline"
                  >
                    Learn More →
                  </button>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 rotate-y-180 backface-hidden bg-white rounded-2xl shadow-lg p-6 overflow-y-auto flex flex-col md:flex-row">
                {/* Text Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                      {selectedItem.title}
                    </h2>
                    <p className="whitespace-pre-wrap text-sm md:text-base max-h-[350px] overflow-y-auto pr-2">
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

                {/* Image Section */}
                <div className="w-full md:w-1/2 h-[250px] sm:h-[300px] lg:h-[400px] overflow-hidden mt-6 md:mt-0 md:ml-6">
                  <motion.img
                    src={imageMap[selectedItem.image]}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="relative mt-1">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-16 pt-4 pb-8 mb-4"
          >
            {items.map((item, index) => (
              <Card
                key={item.id}
                item={item}
                index={index}
                onClick={setSelectedIndex}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Link to="/protected-sites">
            <button className="bg-[#66b2e2] cursor-pointer text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#96d2f7] transition-all duration-300">
              View All Protected Sites
            </button>
          </Link>
        </div>

        <Modal item={modalItem} onClose={() => setModalItem(null)} />
      </div>
    </div>
  );
};

export default Excavation2;
