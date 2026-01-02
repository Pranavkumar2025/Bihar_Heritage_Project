// import React, { useRef, useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronRight, X, ChevronLeft } from "lucide-react";
// import { Link } from "react-router-dom";

// // Swiper imports
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// // Load data
// import data from "./ExcavationData/Excavation.json";
// import detailMap from "./ExcavationData/DetailedInfo.json";

// // Import all heritage images
// import NalandaImg from "../assets/heritage/NalandaUniversity.jpg";
// import VikramShilaImg from "../assets/heritage/Vikramshila.jpg";
// import patliputraImg from "../assets/heritage/patliputraimg.jpg";
// import rohtasImg from "../assets/heritage/rohtas.jpg";
// import rajgirImg from "../assets/heritage/rajgir.jpg";
// import telharaImg from "../assets/heritage/telhara.jpg";
// import exploration1Img from "../assets/heritage/exploration1.jpg";
// import exploration2Img from "../assets/heritage/exploration2.jpg";

// import BackImage from "../assets/UniqueBiharImg/PatnaSahib.jpeg";

// // Image map
// const imageMap = {
//   "NalandaUniversity.jpg": NalandaImg,
//   "Vikramshila.jpg": VikramShilaImg,
//   "patliputraimg.jpg": patliputraImg,
//   "rohtas.jpg": rohtasImg,
//   "rajgir.jpg": rajgirImg,
//   "telhara.jpg": telharaImg,
//   "exploration1.jpg": exploration1Img,
//   "exploration2.jpg": exploration2Img,
// };

// const Card = ({ item, index, onClick }) => {
//   return (
//     <motion.div
//       key={item.id}
//       className="relative group w-full h-[600px] overflow-hidden rounded-2xl shadow-md cursor-pointer transition-transform duration-500 my-5"
//       whileHover={{ scale: 1.03 }}
//       whileTap={{ scale: 0.97 }}
//       onClick={() => onClick(item)}
//     >
//       {/* Image */}
//       <img
//         src={imageMap[item.image]}
//         alt={item.title}
//         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//       />

//       {/* Text Overlay with Gradient */}
//       <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-4 py-4 transition-all duration-500 group-hover:from-black/95 group-hover:via-black/80">
//         <div className="transition-all duration-500 transform group-hover:-translate-y-2">
//           <h3 className="text-xl font-bold text-white mb-1 transition-all duration-500 text-center pb-3">
//             {item.title}
//           </h3>
//           <p className="text-md text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-20 overflow-hidden text-center line-clamp-2">
//             {item.description}
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Modal = ({ item, onClose }) => {
//   const detailsText =
//     detailMap[item?.title]?.details || "No detailed description available.";

//   if (!item) return null;

//   return (
//     <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
//       <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh] p-6">
//         <motion.button
//           whileHover={{ scale: 1.2, rotate: 90 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={onClose}
//           className="absolute top-4 right-4 bg-gray-200 rounded-full p-1 hover:bg-red-500 hover:text-white transition-colors"
//         >
//           <X size={20} />
//         </motion.button>

//         <img
//           src={imageMap[item.image]}
//           alt={item.title}
//           className="w-full h-64 object-cover rounded-xl mb-4"
//         />

//         <h2 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h2>

//         <pre className="text-gray-700 whitespace-pre-wrap font-sans text-sm">
//           {detailsText}
//         </pre>
//       </div>
//     </div>
//   );
// };

// const Excavation2 = () => {
//   const [activeTab, setActiveTab] = useState("excavation");
//   const [modalItem, setModalItem] = useState(null);
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [swiperInstance, setSwiperInstance] = useState(null);

//   const items =
//     activeTab === "excavation"
//       ? data.excavationSites
//       : data.explorationActivities;

//   return (
//     <div className="relative min-h-screen flex flex-col bg-cover bg-center bg-no-repeat">
//       <div className="absolute inset-0 -z-10">
//         <img
//           src={BackImage}
//           alt="Background"
//           className="w-full h-full object-cover  brightness-[0.4]"
//         />
//       </div>
//       <div className="relative z-10 min-h-screen mt-8 pt-10 pb-4 px-6 md:px-20 text-gray-800">
//         <h1 className="text-7xl font-extrabold text-center text-white">
//           DISCOVERIES THROUGH TIME
//         </h1>

//         <div className="mt-6 flex justify-center gap-4">
//           <button
//             onClick={() => setActiveTab("excavation")}
//             className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
//               activeTab === "excavation"
//                 ? "bg-yellow-600 text-white"
//                 : "bg-white text-gray-800 hover:bg-yellow-100"
//             }`}
//           >
//             Excavation Sites
//           </button>
//           <button
//             onClick={() => setActiveTab("exploration")}
//             className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
//               activeTab === "exploration"
//                 ? "bg-yellow-600 text-white"
//                 : "bg-white text-gray-800 hover:bg-yellow-100"
//             }`}
//           >
//             Exploration Activities
//           </button>
//         </div>

//         <div className="relative mt-8 pb-20">
//           {/* Swiper Carousel */}
//           <div className="relative overflow-visible z-10">
//             <Swiper
//               spaceBetween={30}
//               slidesPerView={1}
//               loop={true}
//               pagination={false}
//               autoplay={{ delay: 4000, disableOnInteraction: false }}
//               onSwiper={setSwiperInstance}
//               onSlideChange={(swiper) =>
//                 setActiveSlide(swiper.realIndex % items.length)
//               }
//               breakpoints={{
//                 640: { slidesPerView: 1 },
//                 768: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//                 1280: { slidesPerView: 4 },
//               }}
//               modules={[Pagination, Autoplay]}
//               className=""
//             >
//               {items.map((item, index) => (
//                 <SwiperSlide key={item.id}>
//                   <Card item={item} index={index} onClick={setModalItem} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             {/* Dynamic pagination based on items count */}
//             <div className="custom-dot-pagination">
//               {Array.from({ length: items.length }, (_, index) => (
//                 <span
//                   key={index}
//                   className={`custom-bullet ${
//                     index === activeSlide ? "custom-bullet-active" : ""
//                   }`}
//                   onClick={() => {
//                     if (swiperInstance) {
//                       swiperInstance.slideToLoop(index);
//                       setActiveSlide(index);
//                     }
//                   }}
//                 ></span>
//               ))}
//             </div>
//           </div>
//         </div>

//         <Modal item={modalItem} onClose={() => setModalItem(null)} />
//       </div>

//       {/* Custom Swiper Styles */}
//       <style jsx>{`
//         .swiper-container {
//           padding: 40px 0 60px 0;
//           overflow: visible;
//         }

//         .swiper-slide {
//           height: auto;
//         }

//         .custom-bullet {
//           width: 12px !important;
//           height: 12px !important;
//           background: rgba(255, 255, 255, 0.4) !important;
//           border-radius: 50% !important;
//           margin: 0 4px !important;
//           cursor: pointer !important;
//           transition: all 0.3s ease !important;
//           opacity: 1 !important;
//         }

//         .custom-bullet-active {
//           background: rgba(255, 255, 255, 0.9) !important;
//           transform: scale(1.2) !important;
//         }

//         .swiper-pagination {
//           bottom: -50px !important;
//           text-align: center !important;
//           position: relative !important;
//           z-index: 20 !important;
//         }

//         .custom-dot-pagination {
//           display: flex !important;
//           justify-content: center !important;
//           align-items: center !important;
//           margin-top: 20px !important;
//           gap: 8px !important;
//         }

//         .custom-dot-pagination .custom-bullet {
//           width: 12px !important;
//           height: 12px !important;
//           background: rgba(255, 255, 255, 0.4) !important;
//           border-radius: 50% !important;
//           cursor: pointer !important;
//           transition: all 0.3s ease !important;
//           display: inline-block !important;
//         }

//         .custom-dot-pagination .custom-bullet-active {
//           background: rgba(255, 255, 255, 0.9) !important;
//           transform: scale(1.2) !important;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Excavation2;


























import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Load data
import data from "./ExcavationData/Excavation.json";
import detailMap from "./ExcavationData/DetailedInfo.json";

// Import local heritage images
import NalandaImg from "../assets/heritage/NalandaUniversity.jpg";
import VikramShilaImg from "../assets/heritage/Vikramshila.jpg";
import patliputraImg from "../assets/heritage/patliputraimg.jpg";
import rohtasImg from "../assets/heritage/rohtas.jpg";
import rajgirImg from "../assets/heritage/rajgir.jpg";
import telharaImg from "../assets/heritage/telhara.jpg";
import exploration1Img from "../assets/heritage/exploration1.jpg";
import exploration2Img from "../assets/heritage/exploration2.jpg";

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

const Card = ({ item, onKnowMore }) => {
  return (
    <div className="group perspective-1000 w-full h-[500px] my-6">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-2xl border border-white/20">
          <img
            src={imageMap[item.image]}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/90 to-transparent w-full">
            <h3 className="text-2xl font-bold text-white drop-shadow-md">{item.title}</h3>
            <p className="text-sm text-gray-200">{item.location || "Bihar, India"}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden transform rotate-y-180 rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-50/95 to-amber-100/95 border-2 border-amber-400/60 flex flex-col justify-between p-8">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/ancient-wall.png')] opacity-15 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-3xl font-serif font-bold text-amber-900 mb-6">{item.title}</h3>
            <p className="text-amber-800 text-base leading-relaxed overflow-y-auto max-h-64 pr-2 scrollbar-thin scrollbar-thumb-amber-700">
              {item.description}
            </p>
          </div>
          <button
            onClick={onKnowMore}
            className="relative z-10 px-8 py-3 bg-amber-600 text-white rounded-lg font-serif font-semibold text-lg hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ item, onClose }) => {
  const detailsText =
    detailMap[item?.title]?.details || "No detailed description available.";

  const modalRef = useRef(null);

  // Lock background scroll and restore on close
  useEffect(() => {
    if (!item) return;

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      window.scrollTo(0, scrollY);
    };
  }, [item]);

  // Prevent background scroll when scrolling inside modal
  useEffect(() => {
    const handleWheel = (e) => {
      if (!modalRef.current) return;
      const isOverModal = modalRef.current.contains(e.target);
      if (isOverModal) {
        e.stopPropagation();
      }
    };

    const handleTouchMove = (e) => {
      if (!modalRef.current) return;
      const isOverModal = modalRef.current.contains(e.target);
      if (isOverModal) {
        e.stopPropagation();
      }
    };

    // Only add listeners when modal is open
    if (item) {
      document.addEventListener("wheel", handleWheel, { passive: false });
      document.addEventListener("touchmove", handleTouchMove, { passive: false });
    }

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [item]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 backdrop-blur-md pt-8 pb-12 px-4 overflow-y-auto"
      >
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.95, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 30 }}
          transition={{ type: "spring", damping: 22, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-amber-200/60 max-h-[80vh] mt-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-3 bg-white/95 hover:bg-gray-300 cursor-pointer rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            aria-label="Close modal"
          >
            <X size={26} className="text-gray-700" />
          </button>

          {/* Header */}
          <div className="p-8 bg-gradient-to-r from-amber-700 to-amber-900 text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
              {item.title}
            </h2>
            <p className="mt-3 text-base md:text-lg opacity-90 font-light">
              {item.location || "Bihar, India"}
            </p>
          </div>

          {/* Scrollable Content Area */}
          <div className="flex flex-col md:flex-row max-h-[calc(100vh-200px)]">
            {/* Image */}
            <div className="md:w-1/2 h-64 md:h-full overflow-hidden bg-gray-50">
              <img
                src={imageMap[item.image]}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>

            {/* Scrollable Text Section */}
            <div className="md:w-1/2 p-8 md:p-10 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-600 scrollbar-track-amber-50">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-800 leading-relaxed text-base md:text-lg">
                  {detailsText}
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-300">
                <p className="text-sm text-gray-600 italic">
                  Source: Historical Archives of Bihar | Archaeological Survey of India
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Excavation2 = () => {
  const [activeTab, setActiveTab] = useState("excavation");
  const [modalItem, setModalItem] = useState(null);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const items =
    activeTab === "excavation" ? data.excavationSites : data.explorationActivities;

  const handleKnowMore = (item) => setModalItem(item);

  return (
    <section className="relative min-h-screen py-24 px-4">
      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center text-white mb-16 drop-shadow-2xl">
          DISCOVERIES THROUGH TIME
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white/10 backdrop-blur-lg rounded-full p-2 shadow-xl">
            <button
              onClick={() => setActiveTab("excavation")}
              className={`px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 ${
                activeTab === "excavation"
                  ? "bg-amber-600 text-white shadow-lg"
                  : "text-gray-200 hover:text-white hover:bg-white/20"
              }`}
            >
              Excavation Sites
            </button>
            <button
              onClick={() => setActiveTab("exploration")}
              className={`px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 ${
                activeTab === "exploration"
                  ? "bg-amber-600 text-white shadow-lg"
                  : "text-gray-200 hover:text-white hover:bg-white/20"
              }`}
            >
              Exploration Activities
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          modules={[Pagination, Navigation]}
          className="pb-40"
          onSwiper={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.update();
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <Card item={item} onKnowMore={() => handleKnowMore(item)} />
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center items-center gap-8 mt-12">
            <div ref={navigationPrevRef} className="custom-nav-btn group">
              <ChevronLeft size={28} className="text-white" />
            </div>
            <div ref={navigationNextRef} className="custom-nav-btn group">
              <ChevronRight size={28} className="text-white" />
            </div>
          </div>
        </Swiper>

        <Modal item={modalItem} onClose={() => setModalItem(null)} />
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }

        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #f59e0b;
          transform: scale(1.4);
        }

        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }

        .custom-nav-btn {
          width: 50px;
          height: 50px;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .custom-nav-btn:hover {
          background: rgba(0, 0, 0, 0.8);
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default Excavation2;