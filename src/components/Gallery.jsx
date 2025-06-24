import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../assets/heritage/img1.jpeg";
import img2 from "../assets/heritage/img2.jpg";
import img3 from "../assets/heritage/img3.jpg";
import img4 from "../assets/heritage/img4.jpg";
import img5 from "../assets/heritage/img5.jpg";
import img6 from "../assets/heritage/img6.jpg";
import img7 from "../assets/heritage/img7.jpg";
import img8 from "../assets/heritage/img8.jpg";

const photos = [img1, img2, img3, img4, img5, img6, img7, img8];

const Gallery = () => {
  const navigate = useNavigate();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    SwiperCore.use([Navigation, Autoplay, Pagination]);
  }, []);

  return (
    <div className="bg-white min-h-screen px-4 md:px-16 py-16" id="gallery">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-3"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience the Culture
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 text-lg mb-14 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Discover Bihar’s rich heritage and traditions through immersive visuals curated from historical and cultural landmarks.
      </motion.p>

      <h3 className="text-2xl font-bold text-blue-800 mb-6">📸 Photo Gallery</h3>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Arrows */}
        <div
          ref={prevRef}
          className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-blue-800 text-white flex justify-center items-center rounded-full cursor-pointer shadow-lg hover:bg-blue-900 transition"
        >
          ❮
        </div>
        <div
          ref={nextRef}
          className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-blue-800 text-white flex justify-center items-center rounded-full cursor-pointer shadow-lg hover:bg-blue-900 transition"
        >
          ❯
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          modules={[Navigation, Autoplay, Pagination]}
        >
          {photos.map((src, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="overflow-hidden rounded-2xl shadow-md cursor-pointer group bg-white border border-gray-200 hover:shadow-xl transition-all duration-300"
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                onClick={() => navigate("/GalleryPage")}
              >
                <motion.img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  initial={{ scale: 1 }}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots Below the Image */}
        <div className="custom-pagination flex justify-center mt-6  gap-[6px]"></div>
      </motion.div>
    </div>
  );
};

export default Gallery;
