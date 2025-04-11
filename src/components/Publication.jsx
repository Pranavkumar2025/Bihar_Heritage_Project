import React, { useRef} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Heritage of Bihar",
    description: "A detailed document exploring the historical monuments of Bihar.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
  },
  {
    id: 2,
    title: "Bihar Buddhist Circuit",
    description: "Explore the Buddhist trail across Bodh Gaya, Rajgir, and Nalanda.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
  },
  {
    id: 3,
    title: "Archaeological Sites",
    description: "Publication featuring archaeological surveys and discoveries.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
  },
  {
    id: 4,
    title: "Preservation Acts",
    description: "Key legal acts related to heritage and conservation in Bihar.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
  },
  {
    id: 5,
    title: "Architectural Styles",
    description: "Traditional and modern architecture styles observed in Bihar.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
  },
  {
    id: 6,
    title: "UNESCO Sites",
    description: "Bihar’s recognized World Heritage Sites and their significance.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
  },
  {
    id: 7,
    title: "Intangible Heritage",
    description: "Folk traditions, oral history, festivals, and music of Bihar.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
  },
  {
    id: 8,
    title: "Heritage Management",
    description: "Policies, challenges, and modern management practices.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
  },
  {
    id: 9,
    title: "Tourist Guides",
    description: "Official guides to explore major heritage destinations.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
  },
  {
    id: 10,
    title: "Cultural Mapping",
    description: "Mapping Bihar’s diverse cultural zones and practices.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
  },
];

const Publication = () => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = container.offsetWidth; // Scroll by full container width
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#F9F9F9] min-h-screen px-6 py-12 relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 pt-6">
        Publications
      </h2>

      {/* ⬅️ Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:scale-105 transition"
      >
        <ChevronLeft size={28} />
      </button>

      {/* ➡️ Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:scale-105 transition"
      >
        <ChevronRight size={28} />
      </button>

      {/* 📄 Card Container */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 px-2 pb-4 scroll-smooth"
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[250px] h-[420px] rounded-2xl overflow-hidden border border-gray-500 bg-white shadow-sm group hover:shadow-2xl transition duration-300 "
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-56 object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="px-4 py-5 flex flex-col justify-between h-[160px] text-gray-800 group-hover:rounded-2xl group-hover:bg-[#ffd2d7] transition-colors duration-300">
              <div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
              <a
                href="#"
                className="text-[#FF4D5A] font-semibold hover:underline group-hover:text-[#D90429] mt-3"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publication;
