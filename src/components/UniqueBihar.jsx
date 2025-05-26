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
    <div className="bg-amber-50">
      {/* 🧭 Split Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-10">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-4">
            Bihar – The Land of Ancient Wisdom
          </h1>
          <motion.p
            className="text-gray-700 text-lg max-w-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the spiritual and intellectual legacy through time.
          </motion.p>
          <motion.p
            className="mt-6 text-base text-indigo-700 font-medium italic max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            “Where knowledge was born before it spread to the world – that’s the story of Bihar.”
          </motion.p>
        </motion.div>

        {/* Right Video Box */}
        <motion.div
          className="flex-1 relative w-full max-w-xl aspect-video overflow-hidden rounded-3xl shadow-xl border-4 border-indigo-100"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <video
            src={BiharHistoryVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-black/30 rounded-3xl" />
        </motion.div>
      </section>

      {/* 🚀 Features Carousel */}
      <section className="bg-white py-20 px-6 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center text-indigo-900 mb-4"
        >
          What Makes Bihar Unique
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 text-md max-w-2xl mx-auto mb-12"
        >
          Discover Bihar’s unmatched contributions to culture, religion, and history through these timeless landmarks.
        </motion.p>

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
                <h3 className="text-xl font-semibold text-indigo-900 mb-1">
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
