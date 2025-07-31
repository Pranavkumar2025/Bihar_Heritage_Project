import React from "react";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 md:px-16 py-14">
      <h1 className="text-4xl font-extrabold text-center text-yellow-400 mb-14 tracking-wide uppercase mt-10 drop-shadow-md">
        Bihar Heritage — Video Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {videoData.map((video, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-md border border-white/10 hover:shadow-xl transition duration-500 transform hover:-translate-y-3 group"
          >
            {/* Video */}
            <div className="h-56 overflow-hidden">
              <iframe
                src={video.videoUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full group-hover:scale-105 transition-transform duration-500"
              ></iframe>
            </div>

            {/* Content */}
            <div className="p-4">
              <p className="text-sm text-indigo-300 font-medium">
                {video.region} • {video.category}
              </p>
              <h3 className="text-white font-semibold mt-1 text-base line-clamp-2">
                {video.title}
              </h3>
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-xs text-yellow-400 border border-yellow-400 px-3 py-1.5 rounded-full hover:bg-yellow-400 hover:text-black transition"
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
