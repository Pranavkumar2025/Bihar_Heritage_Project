import React from "react";
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
    <div className="relative w-full overflow-hidden">
      {/* 🎥 Background Video */}
      <div className="relative h-[80vh] w-full">
        <video
          src={BiharHistoryVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl md:text-5xl font-extrabold"
          >
            Bihar – The Land of Ancient Wisdom
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-white text-lg mt-4 max-w-xl"
          >
            Experience the spiritual and intellectual legacy through time.
          </motion.p>
        </div>
      </div>

      {/* 🚀 Feature Cards Using Swiper */}
      <section className="bg-white py-20 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-10">
          What Makes Bihar Unique
        </h2>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
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
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="block bg-gray-100 p-6 rounded-2xl shadow hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
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
