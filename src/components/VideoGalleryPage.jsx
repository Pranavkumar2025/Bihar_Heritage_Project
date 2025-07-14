import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const videoData = [
  {
    region: "Bihar",
    category: "Art, Culture, & Youth",
    title: "Ashoka and Bihar",
    videoUrl: "https://www.youtube.com/embed/qcn8Mfl1Ogk?enablejsapi=1",
    link: "https://www.youtube.com/watch?v=qcn8Mfl1Ogk",
  },
  {
    region: "Bihar",
    category: "Art, Culture, & Youth",
    title: "Education in Bihar",
    videoUrl: "https://www.youtube.com/embed/1u1bKreoPHg?enablejsapi=1",
    link: "https://www.youtube.com/watch?v=1u1bKreoPHg",
  },
  {
    region: "Bihar",
    category: "Art, Culture, & Youth",
    title: "Heritage Walk on World Heritage Day 2025",
    videoUrl: "https://www.youtube.com/embed/bivZV2J8NnI?enablejsapi=1",
    link: "https://www.youtube.com/watch?v=bivZV2J8NnI",
  },
  {
    region: "Bihar",
    category: "Art, Culture, & Youth",
    title: "World Heritage Day 2025 at Bihar Museum",
    videoUrl: "https://www.youtube.com/embed/4KQ4awJe5MM?enablejsapi=1",
    link: "https://www.youtube.com/watch?v=4KQ4awJe5MM",
  },
];

const VideoGalleryPage = () => {
  const [currentStart, setCurrentStart] = useState(0);
  const cardWidth = 330;
  const cardGap = 24;
  const visibleCards = 4;
  const containerWidth = cardWidth * visibleCards + cardGap * (visibleCards - 1);
  const maxStart = Math.max(0, videoData.length - visibleCards);

  const handleLeft = () => {
    setCurrentStart((prev) => Math.max(0, prev - 1));
  };

  const handleRight = () => {
    setCurrentStart((prev) => (prev >= maxStart ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStart((prev) => (prev >= maxStart ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [maxStart]);

  return (
    <div
      className="relative min-h-screen px-6 py-12"
      style={{ backgroundColor: "#FEC343" }}
    >
      {/* Zigzag Background */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/zig-zag.png')",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-white text-8xl font-extrabold">VIDEO GALLERY</h1>
          <p className="text-white text-3xl mt-2">— Bihar Heritage —</p>
        </div>

        {/* Card Container */}
        <div
          className="mx-auto relative overflow-hidden"
          style={{
            width: `${containerWidth}px`,
            height: "500px",
          }}
        >
          <div
            className="flex gap-6 transition-transform duration-700 ease-in-out absolute"
            style={{
              transform: `translateX(-${currentStart * (cardWidth + cardGap)}px)`,
            }}
          >
            {videoData.map((video, idx) => (
              <div
                key={idx}
                className="w-[330px] h-[450px] bg-black text-white flex-shrink-0 shadow-xl transform transition-transform duration-300 hover:-translate-y-8 hover:scale-105 hover:shadow-2xl"
              >
                <div className="w-full h-[260px] overflow-hidden">
                  <iframe
                    src={video.videoUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4 h-[190px] bg-black">
                  <p className="text-red-500 font-semibold text-lg">
                    {video.region} <span className="text-white">| {video.category}</span>
                  </p>
                  <h3 className="mt-2 font-bold text-2xl leading-tight">{video.title}</h3>
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-yellow-400 border border-yellow-400 px-3 py-1 rounded hover:bg-yellow-400 hover:text-black transition"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-center mt-8 gap-10 z-20 relative">
          <button
            onClick={handleLeft}
            disabled={currentStart === 0}
            className="text-black hover:scale-125 transition-transform disabled:opacity-30"
          >
            <FaArrowLeft size={28} />
          </button>
          <button
            onClick={handleRight}
            disabled={currentStart >= maxStart}
            className="text-black hover:scale-125 transition-transform disabled:opacity-30"
          >
            <FaArrowRight size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoGalleryPage;
