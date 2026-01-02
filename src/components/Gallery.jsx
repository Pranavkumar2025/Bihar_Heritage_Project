import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { FaMapMarkerAlt } from "react-icons/fa";

import BodhGaya from "../assets/GalleryImg/BodhGaya.webp";
import JalMandir from "../assets/GalleryImg/JalMandir.jpg";
import MahabodhiTemple from "../assets/GalleryImg/MahabodhiTemple.jpg";
import ShantiBabaMandir from "../assets/GalleryImg/ShantiBaba.jpg";
import RohtasGarhFort from "../assets/UniqueBiharImg/RohtasFort.webp";
import NalandaUniversity from "../assets/UniqueBiharImg/NalandaUniversity.jpg";
import PatnaSahib from "../assets/UniqueBiharImg/PatnaSahib.jpeg";
import VikramShila from "../assets/UniqueBiharImg/VIKRAMSHILA_UNIVERSITY.png";
import VaishaliBihar from "../assets/GalleryImg/VaishaliBihar.webp";
import AjatshatruFort from "../assets/GalleryImg/AjatshatruFort.avif";



const data = [
  {
    image: BodhGaya,
    title: "Bodh Gaya",
    subtitle: "The sacred place where Buddha attained enlightenment",
    location: "Gaya, Bihar",
  },
  {
    image: JalMandir,
    title: "Jal Mandir",
    subtitle: "Beautiful marble Jain temple in a lotus-filled pond",
    location: "Pawapuri, Bihar",
  },
  {
    image: MahabodhiTemple,
    title: "Mahabodhi Temple",
    subtitle: "UNESCO site marking Buddha’s enlightenment",
    location: "Bodh Gaya, Bihar",
  },
  {
    image: ShantiBabaMandir,
    title: "Shanti Baba Mandir",
    subtitle: "Serene temple near the Ganga river islands",
    location: "Kahalgaon, Bihar",
  },
  {
    image: RohtasGarhFort,
    title: "Rohtasgarh Fort",
    subtitle: "Historic hill fort with majestic architecture",
    location: "Rohtas, Bihar",
  },
  {
    image: NalandaUniversity,
    title: "Nalanda University Ruins",
    subtitle: "Ancient global center of learning for Buddhism",
    location: "Nalanda, Bihar",
  },
  {
    image: PatnaSahib,
    title: "Takht Sri Patna Sahib",
    subtitle: "Sacred birthplace of Guru Gobind Singh Ji",
    location: "Patna, Bihar",
  },
  {
    image: VikramShila,
    title: "Vikramshila University",
    subtitle: "Ruins of a major Buddhist learning center",
    location: "Bhagalpur, Bihar",
  },
  {
    image: VaishaliBihar,
    title: "Vaishali Stupa",
    subtitle: "Historic site of Buddha’s last sermon",
    location: "Vaishali, Bihar",
  },
  {
    image: AjatshatruFort,
    title: "Ajatshatru Fort",
    subtitle: "Ancient red-brick fort of the Magadha dynasty",
    location: "Rajgir, Bihar",
  },
];

const Gallery = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  let swiperRef = null;

  useEffect(() => {
    if (prevRef.current && nextRef.current && swiperRef) {
      prevRef.current.addEventListener("click", () => swiperRef.slidePrev());
      nextRef.current.addEventListener("click", () => swiperRef.slideNext());
    }
    return () => {
      if (prevRef.current && nextRef.current) {
        prevRef.current.removeEventListener("click", () => swiperRef.slidePrev());
        prevRef.current.removeEventListener("click", () => swiperRef.slideNext());
      }
    };
  }, [swiperRef]);

  return (
    <section
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed"
    >


      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="w-full text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-extrabold text-white uppercase mb-4 drop-shadow-2xl"
          >
            Experience the Culture
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white text-lg md:text-2xl drop-shadow-lg font-light"
          >
            — Explore Bihar’s rich heritage and timeless cultural landmarks. —
          </motion.p>
        </div>

        {/* Slider */}
        <div className="relative max-w-7xl mx-auto">
          <Swiper
            spaceBetween={16}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            onSwiper={(swiper) => (swiperRef = swiper)}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[Navigation, Autoplay]}
            className="pb-16"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 8 },
              640: { slidesPerView: 2, spaceBetween: 12 },
              1024: { slidesPerView: 3, spaceBetween: 16 },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center transition-transform duration-500 ease-in-out"
              >
                {({ isActive }) => (
                  <motion.div
                    className={`relative w-full h-[450px] md:h-[540px] overflow-hidden rounded-lg shadow-2xl transition-all duration-500 ease-in-out transform hover:shadow-3xl hover:-translate-y-2 ${
                      isActive ? "z-30 scale-100" : "z-10 scale-90 opacity-80"
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-md transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 border-4 border-transparent hover:border-[#fda12b]/40 hover:shadow-[0_0_15px_rgba(253,161,43,0.5)] rounded-md transition-all duration-300"></div>
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-black/90 to-transparent px-6 py-5 flex flex-col justify-end"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h3
                        className="text-2xl md:text-3xl font-bold text-[#fda12b] leading-tight"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm md:text-base text-gray-100 mt-1"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                      >
                        {item.subtitle}
                      </p>
                    </motion.div>
                    <motion.div
                      className="absolute top-4 right-6 flex items-center text-white text-base md:text-lg font-semibold bg-black/60 px-4 py-1.5 rounded-lg backdrop-blur-sm"
                      style={{ fontFamily: "'Roboto', sans-serif" }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <FaMapMarkerAlt className="text-red-400 mr-2" />
                      {item.location}
                    </motion.div>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <div
              ref={prevRef}
              className="cursor-pointer bg-white/15 text-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-white/25 shadow-lg transition-all duration-300 backdrop-blur-md"
            >
              <ChevronLeft size={28} />
            </div>
            <div
              ref={nextRef}
              className="cursor-pointer bg-white/15 text-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-white/25 shadow-lg transition-all duration-300 backdrop-blur-md"
            >
              <ChevronRight size={28} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;