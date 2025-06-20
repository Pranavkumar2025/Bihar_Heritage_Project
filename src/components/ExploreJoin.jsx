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
      <motion.section ref={exploreRef} variants={staggerContainer} initial="hidden" animate={inViewExplore ? "visible" : "hidden"} className="mb-20 relative">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-slate-800" variants={fadeIn}>
          Explore Heritage Sites
        </motion.h2>

        <button onClick={scrollLeft} aria-label="Scroll Left" className="hidden md:flex absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 hover:bg-orange-100 transition" style={{ zIndex: 10 }}>
          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button onClick={scrollRight} aria-label="Scroll Right" className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 hover:bg-orange-100 transition" style={{ zIndex: 10 }}>
          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div ref={scrollContainerRef} className="flex space-x-6 overflow-x-hidden no-scrollbar p-4" style={{ scrollBehavior: "smooth" }}>
          {heritageSites.map((site, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 bg-gradient-to-br from-white via-gray-50 to-slate-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-500"
              variants={cardVariant}
              {...hoverEffect}
              style={{ transformStyle: "preserve-3d", width: "425px" }}
            >
              <img src={site.image} alt={site.title} className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">{site.title}</h3>
                <p className="text-sm text-gray-500 flex items-center mb-3">
                  <MapPin className="w-4 h-4 mr-2" /> {site.location}
                </p>
                <p className="text-gray-600 text-sm mb-4">{site.description}</p>
                <a href={site.link} target="_blank" rel="noopener noreferrer" className="text-orange-500 font-medium hover:underline">
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.div className="my-20" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-8">Bihar’s Living Heritage</h2>
        <div className="relative w-full max-w-5xl mx-auto shadow-xl rounded-xl overflow-hidden">
          <video ref={videoRef} src={heritageVideo} controls autoPlay muted loop className="w-full h-auto object-cover" style={{ maxHeight: "600px" }} />
        </div>
      </motion.div>

      <motion.section ref={joinRef} variants={staggerContainer} initial="hidden" animate={inViewJoin ? "visible" : "hidden"}>
        <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-slate-800" variants={fadeIn}>
          Join Our Mission
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6 text-center">
          {joinOptions.map((option, i) => (
            <motion.div key={i} className="bg-slate-50 p-6 w-72 rounded-xl shadow hover:shadow-md transition-transform duration-300" variants={cardVariant} whileHover={{ scale: 1.06 }}>
              {option.icon}
              <h4 className="text-lg font-semibold mb-1">{option.title}</h4>
              <p className="text-sm text-gray-600">{option.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center mt-10" variants={fadeIn}>
          <a href="https://forms.gle/your-form-link" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transform transition duration-300">
            Join Now
          </a>
        </motion.div>
      </motion.section>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default ExploreJoin;