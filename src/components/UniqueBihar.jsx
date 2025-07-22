import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

import BiharHistoryVideo from "../assets/Videos/BiharHeritage_2.mp4";
import BodhGaya from "../assets/UniqueBiharImg/BodhGaya.jpg";
import NalandaUniversity from "../assets/UniqueBiharImg/NalandaUniversity.jpg";
import Rajgir from "../assets/UniqueBiharImg/rajgir.jpg";
import MahabodhiTmeple from "../assets/UniqueBiharImg/MahabodhiTemple.webp";
import RohtasFort from "../assets/UniqueBiharImg/RohtasFort.webp";
import ChaatPuja from "../assets/UniqueBiharImg/ChaatPuja.jpg";
import MadhubaniArt from "../assets/UniqueBiharImg/MadhubaniArt.jpg";
import PatnaSahib from "../assets/UniqueBiharImg/PatnaSahib.jpeg";
import KesariyaStupa from "../assets/UniqueBiharImg/KesariyaStupa.jpg";
import VikramshilaUniversity from "../assets/UniqueBiharImg/VIKRAMSHILA_UNIVERSITY.png";

const features = [
  {
    title: "Nalanda University",
    description: "World’s First Residential University",
    subtitle:
      "Famed seat of ancient learning attracting scholars worldwide in history.",
    icon: NalandaUniversity,
    url: "https://en.wikipedia.org/wiki/Nalanda",
  },
  {
    title: "Bodh Gaya – Buddhism",
    description: "The place of Buddha's enlightenment",
    subtitle:
      "Sacred site where Buddha attained enlightenment under the Bodhi tree.",
    icon: BodhGaya,
    url: "https://en.wikipedia.org/wiki/Bodh_Gaya",
  },
  {
    title: "Rajgir – Jainism",
    description: "Spiritual center of Jainism",
    subtitle:
      "Ancient city significant to Jain and Buddhist traditions in Bihar.",
    icon: Rajgir,
    url: "https://en.wikipedia.org/wiki/Rajgir",
  },
  {
    title: "Mahabodhi Temple",
    description: "UNESCO World Heritage Site",
    subtitle:
      "Temple marking Buddha’s enlightenment, UNESCO World Heritage Site in India.",
    icon: MahabodhiTmeple,
    url: "https://en.wikipedia.org/wiki/Mahabodhi_Temple",
  },
  {
    title: "Rohtas Fort",
    description: "Historic hill fort of Sher Shah Suri",
    subtitle:
      "Majestic medieval fort with strategic architecture and historical prominence.",
    icon: RohtasFort,
    url: "https://en.wikipedia.org/wiki/Rohtasgarh_Fort",
  },
  {
    title: "Chhath Festival",
    description: "Ancient Vedic Sun-worship festival",
    subtitle:
      "Devotional festival honoring the Sun God with ritualistic traditions.",
    icon: ChaatPuja,
    url: "https://en.wikipedia.org/wiki/Chhath",
  },
  {
    title: "Madhubani Art",
    description: "Folk painting from Mithila region",
    subtitle:
      "Traditional painting style with colorful themes and symbolic pattern work.",
    icon: MadhubaniArt,
    url: "https://en.wikipedia.org/wiki/Madhubani_art",
  },
  {
    title: "Takht Sri Patna Sahib",
    description: "Birthplace of Guru Gobind Singh Ji",
    subtitle:
      "Prominent Sikh shrine marking Guru Gobind Singh’s sacred birthplace.",
    icon: PatnaSahib,
    url: "https://en.wikipedia.org/wiki/Takht_Sri_Patna_Sahib",
  },
  {
    title: "Kesariya Stupa",
    description: "Tallest Buddhist stupa in the world",
    subtitle:
      "Massive Buddhist stupa believed to preserve sacred Buddhist relics.",
    icon: KesariyaStupa,
    url: "https://en.wikipedia.org/wiki/Kesaria_stupa",
  },
  {
    title: "Vikramshila University",
    description: "Ancient center of Buddhist learning",
    subtitle:
      "Renowned monastic university for Vajrayana Buddhism during ancient India.",
    icon: VikramshilaUniversity,
    url: "https://en.wikipedia.org/wiki/Vikramashila",
  },
];

const UniqueBihar = () => {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* 🔴 Background Image with Blur */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center blur-sm opacity-40"
        style={{
          backgroundImage: `url(${PatnaSahib})`,
        }}
      />

      {/* 🔵 Foreground Content */}
      <div className="relative z-10 w-full bg-white/90 backdrop-blur-sm">
        {/* 🧭 Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-6 md:px-20 py-20 bg-gradient-to-br from-indigo-50 to-white">
          {/* 📽️ Video Section */}
          <motion.div
            className="w-full md:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <video
              src={BiharHistoryVideo + "#t=5"}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover scale-y-108"
            />
            <div className="absolute inset-0 bg-black/30 rounded-3xl" />
          </motion.div>

          {/* 🧠 Text Content */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-900 leading-tight mb-4">
              Bihar —{" "}
              <span className="text-indigo-600">
                The Land of Ancient Wisdom
              </span>
            </h2>

            <motion.p
              className="text-gray-700 text-lg mb-6 max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore the{" "}
              <span className="text-indigo-600 font-semibold">spiritual</span>{" "}
              and{" "}
              <span className="text-indigo-600 font-semibold">
                intellectual
              </span>{" "}
              legacy that shaped civilizations.
            </motion.p>

            <motion.blockquote
              className="italic text-indigo-800 text-base md:text-lg font-medium border-l-4 border-indigo-300 pl-4 max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              “Where knowledge was born before it spread to the world — that’s
              the story of Bihar.”
            </motion.blockquote>
          </motion.div>
        </section>

        {/* 🚀 Features Carousel */}
        <section className="relative py-10 px-6 md:px-20 bg-white/90 overflow-visible">
          <div className="w-full max-w-screen-xl mx-auto py-16 px-4 md:px-10 rounded-none">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-extrabold text-black text-center uppercase mb-2"
            >
              What Makes Bihar Unique
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-black text-lg text-center"
            >
              — Discover Bihar’s unmatched contributions to culture, religion,
              and history through these timeless landmarks. —
            </motion.p>
          </div>

          {/* Swiper Cards */}
          <div className="relative mt-10 overflow-visible z-10">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              modules={[Navigation, Autoplay]}
            >
              {features.map((item, index) => (
                <SwiperSlide key={index}>
                  <motion.a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="my-5 flex flex-col bg-white shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-3"
                  >
                    <div className="h-60 w-full">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 px-6 py-4 flex flex-col justify-between">
                      <div>
                        <p className="text-indigo-700 text-sm font-semibold pt-1 whitespace-nowrap">
                          {item.description}
                        </p>
                        <h3 className="text-xl font-bold text-gray-800 my-1">
                          {item.title}
                        </h3>
                        <h1 className="text-xs text-gray-500">
                          {item.subtitle}
                        </h1>
                      </div>
                      <p className="text-blue-600 text-sm font-medium hover:underline  mt-3">
                        Click to know more →
                      </p>
                    </div>
                  </motion.a>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Arrows */}
            <div className="flex justify-center items-center gap-6 mt-10">
              <div className="custom-prev cursor-pointer bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <ChevronLeft size={20} />
              </div>
              <div className="custom-next cursor-pointer bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <ChevronRight size={20} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UniqueBihar;
