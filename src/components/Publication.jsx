import React, { useRef} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import images from assets
import heritageOfBiharImg from "../assets/heritage/img1.jpeg";
import buddhistCircuitImg from "../assets/heritage/NalandaUniversity.jpg";
import archaeologicalSitesImg from "../assets/heritage/telhara.jpg";
import preservationActsImg from "../assets/heritage/img2.jpg"; // Using a generic image
import architecturalStylesImg from "../assets/heritage/img3.jpg"; // Using a generic image
import unescoSitesImg from "../assets/heritage/rohtas.jpg"; // Rohtas Fort as a UNESCO site example
import intangibleHeritageImg from "../assets/heritage/img4.jpg"; // Using a generic image
import heritageManagementImg from "../assets/heritage/img5.jpg"; // Using a generic image
import touristGuidesImg from "../assets/heritage/patliputra.jpg"; // Patliputra as a tourist site
import culturalMappingImg from "../assets/heritage/map.png";

const data = [
  {
    id: 1,
    title: "Heritage of Bihar",
    description: "A detailed document exploring the historical monuments of Bihar.",
    imageUrl: heritageOfBiharImg,
  },
  {
    id: 2,
    title: "Bihar Buddhist Circuit",
    description: "Explore the Buddhist trail across Bodh Gaya, Rajgir, and Nalanda.",
    imageUrl: buddhistCircuitImg,
  },
  {
    id: 3,
    title: "Archaeological Sites",
    description: "Publication featuring archaeological surveys and discoveries.",
    imageUrl: archaeologicalSitesImg,
  },
  {
    id: 4,
    title: "Preservation Acts",
    description: "Key legal acts related to heritage and conservation in Bihar.",
    imageUrl: preservationActsImg,
  },
  {
    id: 5,
    title: "Architectural Styles",
    description: "Traditional and modern architecture styles observed in Bihar.",
    imageUrl: architecturalStylesImg,
  },
  {
    id: 6,
    title: "UNESCO Sites",
    description: "Bihar’s recognized World Heritage Sites and their significance.",
    imageUrl: unescoSitesImg,
  },
  {
    id: 7,
    title: "Intangible Heritage",
    description: "Folk traditions, oral history, festivals, and music of Bihar.",
    imageUrl: intangibleHeritageImg,
  },
  {
    id: 8,
    title: "Heritage Management",
    description: "Policies, challenges, and modern management practices.",
    imageUrl: heritageManagementImg,
  },
  {
    id: 9,
    title: "Tourist Guides",
    description: "Official guides to explore major heritage destinations.",
    imageUrl: touristGuidesImg,
  },
  {
    id: 10,
    title: "Cultural Mapping",
    description: "Mapping Bihar’s diverse cultural zones and practices.",
    imageUrl: culturalMappingImg,
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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-200 to-gray-300 text-gray-800 mt-15 px-6 py-12 relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 pt-6">
        Publications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center p-2">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-[250px] h-[420px] rounded-2xl overflow-hidden border border-gray-500 bg-gradient-to-br from-white via-gray-200 to-gray-300 shadow-sm group hover:shadow-2xl hover:shadow-red-400/80 hover:bg-[#ffd2d7] hover:border-[#FF4D5A] transition duration-300 flex flex-col"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-56 object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="px-4 py-5 flex flex-col justify-between h-[160px] text-gray-800 transition-colors duration-300">
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
