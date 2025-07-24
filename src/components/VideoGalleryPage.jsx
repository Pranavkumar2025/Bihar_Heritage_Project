import React, { useState, useEffect } from "react";

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
  return (
    <div className="min-h-screen bg-gray-200 pt-10 pb-4 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center text-yellow-500 mb-10 mt-14">
        VIDEO GALLERY - Bihar Heritage
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9">
        {videoData.map((video, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-2xl hover:shadow-lg transform transition-transform duration-500 ease-in-out hover:-translate-y-6 cursor-pointer bg-black"
          >
            {/* Video iframe */}
            <div className="w-full h-64 overflow-hidden">
              <iframe
                src={video.videoUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
              ></iframe>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4">
              <p className="text-red-400 font-semibold text-sm line-clamp-2">
                {video.region} | {video.category}
              </p>
              <h3 className="text-sm font-bold text-white mt-1 line-clamp-2">
                {video.title}
              </h3>
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-xs text-yellow-400 border border-yellow-400 px-2 py-1 rounded hover:bg-yellow-400 hover:text-black transition"
                onClick={(e) => e.stopPropagation()}
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGalleryPage;
