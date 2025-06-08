import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BiharHistoryVideo from "../assets/Videos/BiharHeritage_2.mp4";

const features = [
  {
    title: "Nalanda University",
    description: "World’s First Residential University",
    icon: "🎓",
    url: "https://en.wikipedia.org/wiki/Nalanda",
  },
  {
    title: "Bodh Gaya – Buddhism",
    description: "The place of Buddha's enlightenment",
    icon: "🧘‍♂️",
    url: "https://en.wikipedia.org/wiki/Bodh_Gaya",
  },
  {
    title: "Rajgir – Jainism",
    description: "Spiritual center of Jainism",
    icon: "🔯",
    url: "https://en.wikipedia.org/wiki/Rajgir",
  },
  {
    title: "Mahabodhi Temple",
    description: "UNESCO World Heritage Site",
    icon: "🏛️",
    url: "https://en.wikipedia.org/wiki/Mahabodhi_Temple",
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
    icon: "🌞",
    url: "https://en.wikipedia.org/wiki/Chhath",
  },
  {
    title: "Madhubani Art",
    description: "Folk painting from Mithila region",
    icon: "🎨",
    url: "https://en.wikipedia.org/wiki/Madhubani_art",
  },
  {
    title: "Takht Sri Patna Sahib",
    description: "Birthplace of Guru Gobind Singh Ji",
    icon: "🛕",
    url: "https://en.wikipedia.org/wiki/Takht_Sri_Patna_Sahib",
  },
  {
    title: "Kesariya Stupa",
    description: "Tallest Buddhist stupa in the world",
    icon: "🕌",
    url: "https://en.wikipedia.org/wiki/Kesaria_stupa",
  },
  {
    title: "Vikramshila University",
    description: "Ancient center of Buddhist learning",
    icon: "📜",
    url: "https://en.wikipedia.org/wiki/Vikramashila",
  },
];

const UniqueBihar = () => {
  return (
    <div className="w-full bg-gradient-to-b from-indigo-50 to-white overflow-x-hidden">
      {/* 🧭 Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-10">
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

        {/* 📹 Video */}
        <motion.div
          className="flex-1 relative w-full max-w-xl aspect-video overflow-hidden rounded-3xl shadow-xl border-4 border-indigo-100"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <video
            src={BiharHistoryVideo + "#t=5"}
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
      <section className="relative py-20 px-6 md:px-20 overflow-visible">
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
          className="text-center text-gray-600 text-md max-w-2xl mx-auto mb-10"
        >
          Discover Bihar’s unmatched contributions to culture, religion, and history through these timeless landmarks.
        </motion.p>

        <div className="relative overflow-visible">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
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
                  whileHover={{ scale: 1.04, y: -5 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group block px-6 py-8 rounded-3xl bg-gradient-to-br from-white to-indigo-50 shadow-md transition-transform duration-200 ease-in-out hover:shadow-2xl hover:ring-2 hover:ring-indigo-200 h-full"
                >
                  <motion.div className="text-5xl mb-4 transition-transform duration-150 group-hover:scale-110">
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-indigo-900 mb-1 group-hover:text-indigo-700">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                  <p className="text-indigo-600 text-sm font-medium group-hover:underline">
                    Click to know more →
                  </p>
                </motion.a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrows Outside */}
          <div className="swiper-button-prev !-left-10 !top-[45%]" />
          <div className="swiper-button-next !-right-10 !top-[45%]" />
        </div>

        {/* Dots Centered with Less Gap */}
        <div className="swiper-pagination mt-6 flex justify-center" />
      </section>
    </div>
  );
};

export default UniqueBihar;
