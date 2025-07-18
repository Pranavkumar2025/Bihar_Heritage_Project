import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { FaMapMarkerAlt } from "react-icons/fa";

import BodhGaya from "../assets/GalleryImg/BodhGaya.webp";
import JalMandir from "../assets/GalleryImg/JalMandir.jpg"; // background image
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
  }, [swiperRef]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Blurred Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={JalMandir}
          alt="Background"
          className="w-full h-full object-cover  brightness-[0.4]"
        />
      </div>

      <div className="relative py-16 px-4 md:px-16 z-10">
        {/* Heading Section */}
        <div className="w-full max-w-screen-xl mx-auto py-16 px-4 md:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-extrabold text-white text-center uppercase mb-2 drop-shadow-md"
          >
            Experience the Culture
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white text-lg text-center drop-shadow"
          >
            — Explore Bihar’s rich heritage and timeless cultural landmarks. —
          </motion.p>
        </div>

        {/* Slider */}
        <div className="relative z-10">
          <div className="mb-4">
            <p className="text-2xl md:text-3xl font-bold text-yellow-300">
              📸 Photo Gallery
            </p>
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={"auto"}
            centeredSlides={true}
            loop={true}
            onSwiper={(swiper) => (swiperRef = swiper)}
            autoplay={{ delay: 4000 }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[Navigation, Autoplay]}
            className="pb-24"
          >
            {data.map((item, index) => (
              <SwiperSlide
                key={index}
                className="!w-[85%] md:!w-[65%] lg:!w-[50%] flex justify-center transition-transform duration-300 ease-out"
              >
                {({ isActive }) => (
                  <div
                    className={`relative w-full h-[420px] md:h-[500px] rounded-[30px] overflow-hidden shadow-2xl transition-all duration-300 ease-out transform ${
                      isActive ? "z-30 scale-100" : "z-10 opacity-100 blur-xs scale-85"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-[30px]"
                    />

                    <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-black/80 to-transparent px-6 pt-8 pb-4 flex flex-col justify-end z-20">
                      <h3 className="text-3xl md:text-4xl font-extrabold text-[#fda12b] leading-tight drop-shadow-md">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-lg text-white drop-shadow-sm">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="absolute bottom-4 right-4 flex items-center text-white font-semibold text-sm md:text-base z-20">
                      <FaMapMarkerAlt className="text-red-500 mr-1" />
                      {item.location}
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrows */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <div
              ref={prevRef}
              className="custom-prev cursor-pointer bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 shadow-lg transition-colors"
            >
              <ChevronLeft size={20} />
            </div>
            <div
              ref={nextRef}
              className="custom-next cursor-pointer bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 shadow-lg transition-colors"
            >
              <ChevronRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
