import React, { useRef } from "react";
import { MapPin, Heart, Users, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import NalandaUniversityImg from "../assets/heritage/NalandaUniversity.jpg";
import GolgharImg from "../assets/heritage/GolgharImg.jpg";
import RohtasgarhFortImg from "../assets/heritage/rohtas.jpg";
import heritageVideo from "../assets/Videos/BiharHistory.mp4";
import VikramshilaImg from "../assets/heritage/Vikramshila-after.jpeg";
import RajgirImg from "../assets/heritage/rajgir.jpg";
import BodhGayaImg from "../assets/heritage/BodhGayaImg.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
};

const hoverEffect = {
  whileHover: {
    scale: 1.03,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

const ExploreJoin = () => {
  const [exploreRef, inViewExplore] = useInView({ triggerOnce: true });
  const [joinRef, inViewJoin] = useInView({ triggerOnce: true });

  const scrollContainerRef = useRef(null);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 5;
    }
  }, []);

  const heritageSites = [
    {
      title: "Bodh Gaya",
      location: "Gaya, Bihar",
      image: BodhGayaImg,
      description: "Where Buddha attained enlightenment, a major pilgrimage site.",
      link: "https://en.wikipedia.org/wiki/Bodh_Gaya"
    },
    {
      title: "Rajgir",
      location: "Nalanda, Bihar",
      image: RajgirImg,
      description: "Ancient city with hills, hot springs, and religious significance.",
      link: "https://en.wikipedia.org/wiki/Rajgir"
    },
    {
      title: "Nalanda University",
      location: "Nalanda, Bihar",
      image: NalandaUniversityImg,
      description: "Ancient center of learning, a UNESCO World Heritage Site.",
      link: "https://en.wikipedia.org/wiki/Nalanda"
    },
    {
      title: "Golghar",
      location: "Patna, Bihar",
      image: GolgharImg,
      description: "A granary with a unique dome structure built in 1786.",
      link: "https://en.wikipedia.org/wiki/Golghar"
    },
    {
      title: "Rohtasgarh Fort",
      location: "Rohtas, Bihar",
      image: RohtasgarhFortImg,
      description: "A grand fort nestled in the hills, rich in Mughal history.",
      link: "https://en.wikipedia.org/wiki/Rohtasgarh_Fort"
    },
    {
      title: "Vikramshila University",
      location: "Bhagalpur, Bihar",
      image: VikramshilaImg,
      description: "Ancient university, one of the two most important centers of Buddhist learning in India.",
      link: "https://en.wikipedia.org/wiki/Vikramashila"
    },

  ];

  const joinOptions = [
    {
      icon: <Users className="w-8 h-8 mx-auto text-orange-500 mb-3" />,
      title: "Become a Volunteer",
      text: "Help preserve and promote heritage by contributing time and skills."
    },
    {
      icon: <Landmark className="w-8 h-8 mx-auto text-orange-500 mb-3" />,
      title: "Report a Site",
      text: "Share information about neglected or unknown heritage sites."
    },
    {
      icon: <Heart className="w-8 h-8 mx-auto text-orange-500 mb-3" />,
      title: "Support the Cause",
      text: "Help us with funding, resources, or spreading awareness."
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 425 + 24;
      scrollContainerRef.current.scrollBy({ left: -cardWidth * 3, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 425 + 24;
      scrollContainerRef.current.scrollBy({ left: cardWidth * 3, behavior: "smooth" });
    }
  };

  return (
    <div id="explore-join-section" className="bg-gradient-to-b from-white to-gray-100 py-20 px-6 md:px-20">
      <motion.section
        ref={exploreRef}
        variants={staggerContainer}
        initial="hidden"
        animate={inViewExplore ? "visible" : "hidden"}
        className="mb-20 relative bg-[#e52428] py-16 px-4"
      >
        <motion.h2
          className="text-5xl md:text-7xl font-extrabold text-white text-center mb-2"
          variants={fadeIn}
        >
          EXPLORE HERITAGE SITES
        </motion.h2>
        <p className="text-white text-center text-xl italic mb-10">
          — of timeless tradition —
        </p>

        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto no-scrollbar px-4"
          style={{ scrollBehavior: "smooth" }}
        >
          {heritageSites.map((site, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-80 bg-white rounded-md shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
              variants={cardVariant}
            >
              <img
                src={site.image}
                alt={site.title}
                className="h-48 w-full object-cover"
              />
              <div className="bg-[#f5f5f5] p-4">
                <p className="text-sm text-red-600 font-semibold mb-1">
                  {site.location.split(",")[0]} |{" "}
                  <span className="capitalize">
                    {site.location.split(",")[1].trim()}
                  </span>
                </p>
                <h3 className="text-black text-lg font-bold mb-1">{site.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{site.description}</p>
                <a
                  href={site.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 text-sm font-medium hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-6 mt-10 mb-6 text-2xl text-white">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full bg-white text-red-600 hover:bg-gray-200 transition"
          >
            ←
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full bg-white text-red-600 hover:bg-gray-200 transition"
          >
            →
          </button>
        </div>

      </motion.section>


      <motion.div
  className="my-20"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <div className="bg-gradient-to-br from-indigo-100 to-white rounded-xl px-6 md:px-12 py-12 shadow-xl max-w-7xl mx-auto">
    <h2 className="text-4xl md:text-6xl font-extrabold text-center text-indigo-700 uppercase mb-10">
      Bihar’s Living Heritage
    </h2>

    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Text Content */}
      <div className="md:w-1/2 text-left space-y-6">
  <h3 className="text-4xl font-semibold text-neutral-800 leading-snug tracking-wide">
    Preserving the echoes of our glorious past
  </h3>

  <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
    Bihar is not merely a state — it's a living testament to India’s rich and ancient heritage. 
    From the scholarly serenity of Nalanda to the spiritual depth of Bodh Gaya, every landmark whispers history.
  </p>

  <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
    Our mission is to preserve these timeless legacies — to honour, protect, and promote the stories carved into our soil.
  </p>
</div>


      {/* Right Side: Video */}
<div className="md:w-1/2">
  <div className="relative rounded-2xl overflow-hidden shadow-lg ring-2 ring-indigo-100">
    <video
      ref={videoRef}
      src={heritageVideo}
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-auto object-cover rounded-2xl"
      style={{ maxHeight: "500px" }}
    />
    {/* Optional overlay icon */}
    <div className="absolute bottom-3 right-3 bg-white/70 backdrop-blur-md p-2 rounded-full shadow">
      <svg
        className="w-6 h-6 text-indigo-600"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M6 4l10 6-10 6V4z" />
      </svg>
    </div>
  </div>
</div>

    </div>
  </div>
</motion.div>

    </div>
  );
};

export default ExploreJoin;