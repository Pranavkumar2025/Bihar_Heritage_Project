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
  linkText: "View →",
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
    <div className="bg-[#F9F9F9] min-h-screen w-full py-16 px-6 text-gray-800">
      <div className="max-w-7xl mx-auto relative">
        {/* 🏷️ Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Bihar Heritage Sites
          </h2>
          <button className="border border-gray-800 px-4 py-1 rounded-full text-sm hover:bg-gray-800 hover:text-white transition-all">
            See all works →
          </button>
        </div>

        {/* ⬅️ Scroll Left */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white text-gray-900 hover:bg-pink-300 hover:text-white transition-all rounded-full p-2 z-10 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* ➡️ Scroll Right */}
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white text-gray-900 hover:bg-pink-300 hover:text-white transition-all rounded-full p-2 z-10 shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* 🖼️ Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-4 custom-scrollbar scroll-smooth"
        >
          {siteData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col rounded-2xl overflow-hidden border border-gray-200 transition-all duration-500 ease-in-out hover:shadow-2xl group cursor-pointer min-w-[280px] sm:min-w-[320px] md:min-w-[360px] flex-shrink-0 bg-white"
            >
              <div className="flex flex-col flex-grow">
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between group-hover:bg-[#f8c2c5] group-hover:text-gray-900 transition-colors duration-500">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm italic text-gray-500 mb-1">{item.artist}</p>
                    <p className="text-sm mb-4 group-hover:opacity-90 transition-opacity duration-500">
                      {item.description}
                    </p>
                  </div>
                  <a
                    href={item.link}
                    className="text-[#FF4D5A] text-base font-semibold hover:underline group-hover:text-[#D90429] transition-all duration-500"
                  >
                    {item.linkText}
                  </a>
                </div>
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
              background: #aaa;
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #777;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default SS_Site;
