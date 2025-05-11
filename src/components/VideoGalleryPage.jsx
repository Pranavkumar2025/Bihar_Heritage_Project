import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';

// Video Data
const videoItems = [
  { id: 'video1', youtubeVideoId: '7REX6br2CjY', caption: 'Nalanda University Documentary' },
  { id: 'video2', youtubeVideoId: '7REX6br2CjY', caption: 'Exploring Vikramshila' },
  { id: 'video3', youtubeVideoId: '7REX6br2CjY', caption: 'The Story of Patliputra' },
  { id: 'video4', youtubeVideoId: '7REX6br2CjY', caption: 'Rohtas Fort - A Visual Tour' },
  { id: 'video5', youtubeVideoId: '7REX6br2CjY', caption: 'Journey to Rajgir Hills' },
  { id: 'video6', youtubeVideoId: '7REX6br2CjY', caption: 'Telhara Monastery Rediscovered' },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const VideoGalleryPage = () => {
  return (
    <motion.div
      className="min-h-screen overflow-x-hidden overflow-y-auto bg-gray-50 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto p-5">
        <motion.h1
          className="text-4xl mt-20 md:text-5xl font-extrabold text-slate-800 mb-12 leading-tight text-center"
          variants={headingVariants}
        >
          Bihar Heritage - Video Gallery
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-8">
          {videoItems.map((item) => (
            <motion.figure
              key={item.id}
              className="w-full md:w-[48%] lg:w-[31%] relative mb-5 rounded-lg overflow-hidden shadow-lg bg-white group cursor-pointer"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="aspect-w-16 aspect-h-9 bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${item.youtubeVideoId}`}
                  title={item.caption}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-t-lg"
                ></iframe>
              </div>
              <figcaption className="p-4 text-center">
                <h3 className="text-lg font-semibold text-slate-700 group-hover:text-purple-700 transition-colors duration-300">
                  {item.caption}
                </h3>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default VideoGalleryPage;
