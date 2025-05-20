import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BiharHistoryVideo from "../assets/Videos/BiharHistory.mp4";

const features = [
  {
    title: "Nalanda University",
    description: "World’s First Residential University",
    icon: "🎓",
    url: "https://nalandauniv.edu.in/",
  },
  {
    title: "Bodh Gaya – Buddhism",
    description: "The place of Buddha's enlightenment",
    icon: "🕉️",
    url: "https://www.buddhisttourism.com/countries/india/buddhist-sites/bodh-gaya.html",
  },
  {
    title: "Rajgir – Jainism",
    description: "Spiritual center of Jainism",
    icon: "🔯",
    url: "https://bstdc.bihar.gov.in/tourist-place/rajgir/",
  },
  {
    title: "Mahabodhi Temple",
    description: "UNESCO World Heritage Site",
    icon: "🏛️",
    url: "https://whc.unesco.org/en/list/1056/",
  },
  {
    title: "Rohtas Fort",
    description: "Historic hill fort of Sher Shah Suri",
    icon: "🏰",
    url: "https://en.wikipedia.org/wiki/Rohtasgarh_Fort",
  },
  {
    title: "Chhath Festival",
    description: "Ancient Vedic Sun-worship festival",
    icon: "🎭",
    url: "https://en.wikipedia.org/wiki/Chhath",
  },
  {
    title: "Madhubani Art",
    description: "Folk painting from Mithila region",
    icon: "🎨",
    url: "https://en.wikipedia.org/wiki/Madhubani_art",
  },
];

const UniqueBihar = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* 🎥 Modern Styled Video Section */}
      <div className="relative h-[90vh] w-full overflow-hidden">
        <motion.video
          src={BiharHistoryVideo}
          autoPlay
          loop
          muted
          playsInline
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Stylish overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-xl"
          >
            Bihar – The Land of Ancient Wisdom
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-white text-lg md:text-xl mt-4 max-w-2xl drop-shadow"
          >
            Experience the spiritual and intellectual legacy through time.
          </motion.p>
        </div>
      </div>

      {/* 🚀 Feature Cards Using Swiper */}
      <section className="bg-white py-20 px-6 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center text-indigo-800 mb-12"
        >
          What Makes Bihar Unique
        </motion.h2>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {features.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="block bg-gradient-to-br from-indigo-50 to-white p-6 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 h-full"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-5xl mb-4 transition-transform"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-indigo-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.a>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default UniqueBihar;
