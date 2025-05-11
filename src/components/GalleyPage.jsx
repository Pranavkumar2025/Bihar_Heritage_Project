import React from 'react';
import NalandaImg from '../assets/heritage/NalandaUniversity.jpg';
import VikramShilaImg from '../assets/heritage/Vikramshila.jpg';
import PatliputraImg from '../assets/heritage/patliputraimg.jpg';
import RohtasImg from '../assets/heritage/rohtas.jpg';
import RajgirImg from '../assets/heritage/rajgir.jpg';
import TelharaImg from '../assets/heritage/telhara.jpg';

// Placeholder data - replace with your actual image paths and captions
const galleryItems = [
  { id: 'nalanda', src: NalandaImg, caption: 'Nalanda University' },
  { id: 'vikramshila', src: VikramShilaImg, caption: 'Vikramshila' },
  { id: 'patliputra', src: PatliputraImg, caption: 'Patliputra Ruins' },
  { id: 'rohtas', src: RohtasImg, caption: 'Rohtas Fort' },
  { id: 'rajgir', src: RajgirImg, caption: 'Rajgir Hills' },
  { id: 'telhara', src: TelharaImg, caption: 'Telhara Monastery' },
];

const GalleyPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden overflow-y-auto"> {/* Corresponds to .wrapper */}
      <div className="max-w-6xl mx-auto p-5"> {/* Corresponds to .container, 1200px is roughly 6xl in Tailwind */}
        <h1 className="text-4xl mt-20 md:text-5xl font-extrabold text-slate-800 mb-4 leading-tight"> {/* Corresponds to .container h1, using placeholder font and color */}
          Bihar Heritage Gallery
        </h1>
        <div className="flex flex-wrap justify-between gap-y-5"> {/* Corresponds to .gallery */}
          {galleryItems.map((item) => (
            <figure
              key={item.id}
              className="w-full md:w-[32%] relative mb-5 rounded-lg overflow-hidden group" // Corresponds to .card, group utility for hover effects on children
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover  group-hover:grayscale-0 transition-all duration-300 ease-in-out shadow-lg group-hover:shadow-xl" // Corresponds to .card img and hover effect
              />
              <figcaption
                className="absolute bottom-0 left-0 p-2.5 w-full text-base font-medium text-white opacity-0 group-hover:opacity-100 rounded-b-lg bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ease-in-out group-hover:scale-105" // Corresponds to .card figcaption and hover effect
              >
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleyPage;