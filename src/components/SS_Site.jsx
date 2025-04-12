import React, { useRef } from "react";
import BiharMap from "../assets/heritage/map.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const siteData = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: [
    "Golden Reverie", "The Shimmering Tides", "Echoes of the Forgotten", "Ephemeral Bloom",
    "Silent Stones", "Timeless Whispers", "Sacred Shadows", "Rustic Memoirs",
    "Divine Echoes", "Pastel Heritage", "Mystic Courtyard", "Whispering Walls",
  ][i],
  description: [
    "Explore the rich cultural legacy of Bihar's heritage.",
    "Discover the timeless beauty of Bihar’s landscapes.",
    "Dive into the echoes of Bihar’s ancient past.",
    "A moment in time captured in Bihar’s vibrant culture.",
    "Stones that whisper tales of time.",
    "Bihar’s legacy told through ancient winds.",
    "The hidden grace of forgotten places.",
    "Wander through stories carved in time.",
    "Sacred sounds from ancient temples.",
    "The soft hues of Bihar’s glorious past.",
    "A courtyard of mysteries untold.",
    "Walls that once echoed royal footsteps.",
  ][i],
  artist: [
    "Isabella Monroe", "Lucas Ray", "Damien Kael", "Nadia Laurent",
    "Eli Torres", "Priya Mehra", "Rafael Lin", "Sahana Verma",
    "Ayaan Shah", "Lara Bennett", "Aniket Bose", "Elina Kumar",
  ][i],
  imageUrl: BiharMap,
  link: "#",
}));

const SS_Site = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#0B1041] py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ✨ Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Bihar Heritage Sites
          </h2>
          <button className="border border-white px-4 py-1 rounded-full text-sm hover:bg-white hover:text-[#0B1041] transition-all">
            See all works →
          </button>
        </div>

        {/* ⬅️ Scroll Left */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white text-[#0B1041] hover:bg-pink-300 hover:text-white transition-all rounded-full p-2 z-10 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* ➡️ Scroll Right */}
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white text-[#0B1041] hover:bg-pink-300 hover:text-white transition-all rounded-full p-2 z-10 shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* 🎨 Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 custom-scrollbar scroll-smooth"
        >
          {siteData.map((item) => (
            <div
              key={item.id}
              className="relative group min-w-[220px] sm:min-w-[240px] md:min-w-[260px] h-[320px] sm:h-[340px] md:h-[360px] bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 cursor-pointer flex-shrink-0"
            >
              {/* 🖼️ Image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 delay-200 group-hover:scale-105"
              />

              {/* 🔳 Overlay */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              {/* 📌 Title + Artist */}
              <div className="absolute bottom-0 w-full p-4 text-white transition-all duration-500 group-hover:translate-y-[-100px]">
                <h3 className="text-base sm:text-lg font-bold">{item.title}</h3>
                <p className="text-xs sm:text-sm italic text-gray-300">{item.artist}</p>
              </div>

              {/* 📋 Description + Link */}
              <div className="absolute bottom-[-100%] group-hover:bottom-4 left-0 w-full px-4 transition-all duration-500 ease-in-out">
                <p className="text-xs sm:text-sm text-white mb-2">{item.description}</p>
                <a
                  href={item.link}
                  className="text-[#FF4D5A] text-sm font-semibold hover:underline hover:text-[#D90429] transition-all"
                >
                  View →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 📜 Custom Scrollbar */}
        <style>
          {`
            .custom-scrollbar::-webkit-scrollbar {
              height: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: transparent;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #888;
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #555;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default SS_Site;
