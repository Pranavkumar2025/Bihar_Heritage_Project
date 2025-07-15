import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  CalendarDays,
  Megaphone,
  MapPin,
  Landmark,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "swiper/css";

const newsItems = [
  {
    title: "Patna Museum Special Exhibit",
    date: "July 20, 2025",
    description:
      "Unveil ancient treasures including Mauryan coins, Gupta carvings, and rare Buddhist relics.",
    icon: <Landmark className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Bihar Sanskritik Mahotsav 2025",
    date: "August 12–15, 2025",
    description:
      "A four-day mega cultural festival with dance, music, cuisine and local artisans’ crafts.",
    icon: <Megaphone className="w-6 h-6 text-yellow-500" />,
  },
  {
    title: "Nalanda Heritage Walk",
    date: "September 5, 2025",
    description:
      "Walk through the ancient university ruins with expert guides narrating forgotten stories.",
    icon: <MapPin className="w-6 h-6 text-green-600" />,
  },
  {
    title: "World Heritage Literature Talk",
    date: "October 8, 2025",
    description:
      "Join eminent scholars for an open panel on Bihar’s contribution to Indian literature.",
    icon: <BookOpen className="w-6 h-6 text-pink-600" />,
  },
  {
    title: "Calendar of Archaeological Events",
    date: "November 2025",
    description:
      "Monthly newsletter released: excavations, discoveries, and conservation projects in focus.",
    icon: <CalendarDays className="w-6 h-6 text-blue-600" />,
  },
];
 const fadeIn = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

const News = () => {
  const swiperRef = useRef();

  return (
    <section className="relative min-h-screen overflow-hidden py-24 px-6 md:px-20 bg-gradient-to-br from-yellow-100 via-white to-indigo-100">
  {/* Zigzag SVG */}
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
    <svg
      className="relative block w-[calc(100%+1.3px)] h-[100px]"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1200 120"
    >
      <path
        d="M0,0V46.29c47.69,22.65,103.86,29.5,158,18.45,70.54-15,136.87-57.42,207-66.21C504.5-14.79,583.63,26.68,660,46.29c88.24,22.7,180.52,6.26,268-18.44,69.25-19.57,132.47-48.18,204-49.85V0Z"
        opacity=".3"
        className="fill-indigo-300"
      ></path>
    </svg>
  </div>


      {/* Heading */}
      <motion.div
        className="text-center mb-20 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-7xl font-extrabold text-indigo-600 mb-6 uppercase">
          Recent Announcements
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
          - Discover the newest announcements, festivals, and heritage walks happening across Bihar -
        </p>
      </motion.div>

      {/* Swiper with 3 visible slides */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Autoplay]}
        className="pb-20 relative z-10"
      >
        {newsItems.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white w-full max-w-sm rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-indigo-100 p-3 rounded-full shadow">{item.icon}</div>
                <h3 className="text-xl font-bold text-indigo-800">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-2 italic">{item.date}</p>
              <p className="text-[15px] text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrow Controls */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-6">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default News;
