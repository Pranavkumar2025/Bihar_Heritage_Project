import React, { useRef, useState } from "react";
// eslint-disable-next-line
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Images
import NalandaImg from "../assets/heritage/NalandaUniversity.jpg";
import VikramShilaImg from "../assets/heritage/Vikramshila.jpg";
import patliputraImg from "../assets/heritage/patliputraimg.jpg";
import rohtasImg from "../assets/heritage/rohtas.jpg";
import rajgirImg from "../assets/heritage/rajgir.jpg";
import telharaImg from "../assets/heritage/telhara.jpg";
import exploration1Img from "../assets/heritage/exploration1.jpg";
import exploration2Img from "../assets/heritage/exploration2.jpg";

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  },
});

const excavationSites = [
  {
    id: 1,
    title: "Nalanda University",
    image: NalandaImg,
    description:
      "Ancient center of learning that attracted scholars from all over Asia.",
  },
  {
    id: 2,
    title: "Vikramashila",
    image: VikramShilaImg,
    description:
      "Another great seat of Buddhist learning with stupas and viharas.",
  },
  {
    id: 3,
    title: "Pataliputra",
    image: patliputraImg,
    description:
      "Capital of the Mauryan Empire with palatial ruins and ancient pillars.",
  },
  {
    id: 4,
    title: "Rohtasgarh Fort",
    image: rohtasImg,
    description:
      "Massive medieval fort with underground structures and battle remains.",
  },
  {
    id: 5,
    title: "Rajgir Hills",
    image: rajgirImg,
    description:
      "Rich archaeological remains of Buddhist and Jain heritage.",
  },
  {
    id: 6,
    title: "Telhara Monastery",
    image: telharaImg,
    description:
      "Buddhist monastery ruins linked to ancient Magadha's monastic tradition.",
  },
];

const explorationActivities = [
  {
    id: 1,
    title: "Rohtasgarh Tunnel Study",
    image: exploration1Img,
    description:
      "Ongoing study on underground tunnels in Rohtasgarh by historians.",
  },
  {
    id: 2,
    title: "Chausa Excavation",
    image: exploration2Img,
    description:
      "Discovery of coins, seals, and terracotta figurines from the Gupta period.",
  },
  {
    id: 3,
    title: "Kesaria Stupa Mapping",
    image: rajgirImg,
    description:
      "GIS-based exploration of the massive Kesaria Buddhist stupa in East Champaran.",
  },
  {
    id: 4,
    title: "Sasaram Tombs Documentation",
    image: rohtasImg,
    description:
      "Ongoing digital documentation of Sher Shah Suri's tomb and related sites.",
  },
  {
    id: 5,
    title: "Nalanda Digital Reconstruction",
    image: NalandaImg,
    description:
      "3D mapping and AR visualization efforts by the Archaeological Survey of India.",
  },
  {
    id: 6,
    title: "Vikramshila River Excavation",
    image: VikramShilaImg,
    description:
      "River-side excavation near Vikramshila for trade route relics.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Card = ({ item, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
      className="min-w-[300px] max-w-[300px] flex-shrink-0 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl transition-all duration-300"
    >
      <motion.img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.h3
        className="text-xl font-semibold text-gray-800"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        {item.title}
      </motion.h3>
      <motion.p
        className="text-sm text-gray-600 mt-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {item.description}
      </motion.p>
    </motion.div>
  );
};

const CardSlider = ({ items }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth / 1.2;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mt-6">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-600 text-white rounded-full p-2 shadow hover:bg-yellow-700"
      >
        <ChevronLeft size={28} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-12 pb-4"
      >
        {items.map((item, index) => (
          <Card key={item.id} item={item} index={index} />
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-600 text-white rounded-full p-2 shadow hover:bg-yellow-700"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

const Excavations = () => {
  const [activeTab, setActiveTab] = useState("excavation");

  return (
    <div
      id="excavation-section"
      className="min-h-screen bg-gradient-to-b from-yellow-50 to-slate-100 pt-10 pb-4 px-6 md:px-20"
    >
      <motion.h1
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-5xl font-bold text-center text-gray-800"
      >
        Discoveries Through Time
      </motion.h1>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-6 flex justify-center gap-4 flex-wrap"
      >
        <button
          onClick={() => setActiveTab("excavation")}
          className={`px-6 py-2 rounded-full text-lg font-medium shadow-md transition-all duration-300 ${
            activeTab === "excavation"
              ? "bg-yellow-600 text-white"
              : "bg-white text-gray-800 hover:bg-yellow-100"
          }`}
        >
          🏺 Excavation Sites
        </button>
        <button
          onClick={() => setActiveTab("exploration")}
          className={`px-6 py-2 rounded-full text-lg font-medium shadow-md transition-all duration-300 ${
            activeTab === "exploration"
              ? "bg-yellow-600 text-white"
              : "bg-white text-gray-800 hover:bg-yellow-100"
          }`}
        >
          🧭 Exploration Activities
        </button>
      </motion.div>

      <div className="mt-2">
        {activeTab === "excavation" ? (
          <CardSlider items={excavationSites} />
        ) : (
          <CardSlider items={explorationActivities} />
        )}
      </div>
    </div>
  );
};

export default Excavations;
