import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import NalandaImg from '../assets/heritage/NalandaUniversity.jpg';
import VikramShilaImg from '../assets/heritage/Vikramshila.jpg';
import PatliputraImg from '../assets/heritage/patliputraimg.jpg';
import RohtasImg from '../assets/heritage/rohtas.jpg';
import RajgirImg from '../assets/heritage/rajgir.jpg';
import TelharaImg from '../assets/heritage/telhara.jpg';

const galleryItems = [
  { id: 'nalanda', src: NalandaImg, caption: 'Nalanda University' },
  { id: 'vikramshila', src: VikramShilaImg, caption: 'Vikramshila' },
  { id: 'patliputra', src: PatliputraImg, caption: 'Patliputra Ruins' },
  { id: 'rohtas', src: RohtasImg, caption: 'Rohtas Fort' },
  { id: 'rajgir', src: RajgirImg, caption: 'Rajgir Hills' },
  { id: 'telhara', src: TelharaImg, caption: 'Telhara Monastery' },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1, y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
};

const headingVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
};

const GalleryPage = () => {
  return (
    <motion.div
      className="min-h-screen overflow-x-hidden overflow-y-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto p-5">
        <motion.h1
          className="text-4xl mt-20 md:text-5xl font-extrabold text-slate-800 mb-4 leading-tight"
          variants={headingVariants}
        >
          Bihar Heritage Gallery
        </motion.h1>

        <div className="flex flex-wrap justify-between gap-y-5">
          {galleryItems.map((item) => (
            <motion.figure
              key={item.id}
              className="w-full md:w-[32%] relative mb-5 rounded-lg overflow-hidden group"
              variants={cardVariants}
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-300 ease-in-out shadow-lg group-hover:shadow-xl"
              />
              <figcaption
                className="absolute bottom-0 left-0 p-2.5 w-full text-base font-medium text-white opacity-0 group-hover:opacity-100 rounded-b-lg bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ease-in-out group-hover:scale-105"
              >
                {item.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryPage;
