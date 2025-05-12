import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
// eslint-disable-next-line
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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

const videoItems = [
  { id: "video1", youtubeVideoId: "7REX6br2CjY", caption: "Nalanda University Documentary" },
  { id: "video2", youtubeVideoId: "7REX6br2CjY", caption: "Exploring Vikramshila" },
  { id: "video3", youtubeVideoId: "7REX6br2CjY", caption: "The Story of Patliputra" },
  { id: "video4", youtubeVideoId: "7REX6br2CjY", caption: "Rohtas Fort - A Visual Tour" },
  { id: "video5", youtubeVideoId: "7REX6br2CjY", caption: "Journey to Rajgir Hills" },
  { id: "video6", youtubeVideoId: "7REX6br2CjY", caption: "Telhara Monastery Rediscovered" },
];

const Gallery = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="bg-white min-h-screen px-4 md:px-16 py-14" id="gallery">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience the Culture
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 text-lg mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Discover traditions through immersive photos and videos
      </motion.p>

      {/* Photo Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h3 className="text-2xl font-bold text-blue-800 mb-6">📸 Theme-Based Photo Gallery</h3>
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
          }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {photos.map((src, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer" // Added cursor-pointer
                whileHover={{ scale: 1.03 }}
                onClick={() => navigate('/GalleryPage')} // Added onClick handler
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Video Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-blue-800 mb-6">🎥 Video Gallery</h3>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {videoItems.map((item, index) => (
            <SwiperSlide key={item.id}>
              <motion.div
                className="w-full aspect-video rounded-xl shadow-lg overflow-hidden mb-2"
                whileHover={{ scale: 1.02 }}
              >
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${item.youtubeVideoId}`}
                  title={item.caption}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
              <p className="text-center text-gray-700 font-medium">{item.caption}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Gallery;
