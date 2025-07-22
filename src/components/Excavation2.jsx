import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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

import BackImage from "../assets/UniqueBiharImg/PatnaSahib.jpeg";

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
      className="relative group w-full h-[600px] overflow-hidden rounded-2xl shadow-md cursor-pointer transition-transform duration-500 my-5"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => onClick(item)}
    >
      {/* Image */}
      <img
        src={imageMap[item.image]}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Text Overlay with Gradient */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-4 py-4 transition-all duration-500 group-hover:from-black/95 group-hover:via-black/80">
        <div className="transition-all duration-500 transform group-hover:-translate-y-2">
          <h3 className="text-lg font-bold text-white mb-1 transition-all duration-500">
            {item.title}
          </h3>
          <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-20 overflow-hidden">
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
  const [modalItem, setModalItem] = useState(null);

  const items =
    activeTab === "excavation"
      ? data.excavationSites
      : data.explorationActivities;

  return (
    <div className="relative min-h-screen flex flex-col bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 -z-10">
        <img
          src={BackImage}
          alt="Background"
          className="w-full h-full object-cover  brightness-[0.4]"
        />
      </div>
      <div className="relative z-10 min-h-screen mt-8 pt-10 pb-4 px-6 md:px-20 text-gray-800">
        <h1 className="text-7xl font-extrabold text-center text-white">
          DISCOVERIES THROUGH TIME
        </h1>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => setActiveTab("excavation")}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
              activeTab === "excavation"
                ? "bg-yellow-600 text-white"
                : "bg-white text-gray-800 hover:bg-yellow-100"
            }`}
          >
            Excavation Sites
          </button>
          <button
            onClick={() => setActiveTab("exploration")}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
              activeTab === "exploration"
                ? "bg-yellow-600 text-white"
                : "bg-white text-gray-800 hover:bg-yellow-100"
            }`}
          >
            Exploration Activities
          </button>
        </div>

        <div className="relative mt-8">
          {/* Swiper Carousel */}
          <div className="relative overflow-visible z-10">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              modules={[Navigation, Autoplay]}
            >
              {items.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <Card item={item} index={index} onClick={setModalItem} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <div className="flex justify-center items-center gap-6 mt-10">
              <div className="custom-prev cursor-pointer bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-700 transition-colors shadow-lg">
                <ChevronLeft size={24} />
              </div>
              <div className="custom-next cursor-pointer bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-700 transition-colors shadow-lg">
                <ChevronRight size={24} />
              </div>
            </div>
          </div>
        </div>

        <Modal item={modalItem} onClose={() => setModalItem(null)} />
      </div>

      {/* Custom Swiper Styles */}
      <style jsx>{`
        .swiper-container {
          padding: 40px 0 60px 0;
          overflow: visible;
        }

        .swiper-slide {
          height: auto;
        }

        .custom-next,
        .custom-prev {
          z-index: 10;
        }
      `}</style>
    </div>
  );
};

export default Excavation2;
