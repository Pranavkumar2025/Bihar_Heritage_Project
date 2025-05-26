import React from "react";
import {
  MapPin,
  Heart,
  Users,
  Mail,
  Landmark
} from "lucide-react";

// eslint-disable-next-line
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import NalandaUniversityImg from "../assets/heritage/NalandaUniversity.jpg";
import PatliputraImg from "../assets/heritage/patliputraimg.jpg";
import RohtasgarhFortImg from "../assets/heritage/rohtas.jpg";
import heritageVideo from "../assets/Videos/BiharHistory.mp4"; // ✅ Importing the video

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
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
};

const hoverEffect = {
  whileHover: {
    scale: 1.05,
    rotateY: 5,
    rotateX: -3,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

const ExploreJoin = () => {
  const [exploreRef, inViewExplore] = useInView({ triggerOnce: true });
  const [joinRef, inViewJoin] = useInView({ triggerOnce: true });

  const heritageSites = [
    {
      title: "Nalanda University",
      location: "Nalanda, Bihar",
      image: NalandaUniversityImg,
      description: "Ancient center of learning, a UNESCO World Heritage Site."
    },
    {
      title: "Golghar",
      location: "Patna, Bihar",
      image: PatliputraImg,
      description: "A granary with a unique dome structure built in 1786."
    },
    {
      title: "Rohtasgarh Fort",
      location: "Rohtas, Bihar",
      image: RohtasgarhFortImg,
      description: "A grand fort nestled in the hills, rich in Mughal history."
    }
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
    },
    {
      icon: <Mail className="w-8 h-8 mx-auto text-orange-500 mb-3" />,
      title: "Subscribe for Updates",
      text: "Stay informed about new initiatives, events, and stories."
    }
  ];

  return (
    <div id="explore-join-section" className="bg-gray-50 py-20 px-6 md:px-20">
      {/* Explore Heritage Section */}
      <motion.section
        ref={exploreRef}
        variants={staggerContainer}
        initial="hidden"
        animate={inViewExplore ? "visible" : "hidden"}
        className="mb-20"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-slate-800"
          variants={fadeIn}
        >
          Explore Heritage Sites
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 perspective-1000">
          {heritageSites.map((site, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              variants={cardVariant}
              {...hoverEffect}
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={site.image}
                alt={site.title}
                className="h-52 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">
                  {site.title}
                </h3>
                <p className="text-sm text-gray-500 flex items-center mb-3">
                  <MapPin className="w-4 h-4 mr-2" /> {site.location}
                </p>
                <p className="text-gray-600 text-sm mb-4">{site.description}</p>
                <a
                  href="#"
                  className="text-orange-500 font-medium hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center mt-10" variants={fadeIn}>
          <a
            href="https://tourism.bihar.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow transition duration-300"
          >
            View All Sites
          </a>

        </motion.div>
      </motion.section>

      {/* ✅ Heritage Video Section */}
      <motion.div
        className="my-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-8">
          Bihar’s Living Heritage
        </h2>
        <div className="relative w-full max-w-5xl mx-auto shadow-xl rounded-xl overflow-hidden">
          <video
            src={heritageVideo}
            controls
            autoPlay
            muted
            loop
            className="w-full h-auto object-cover"
            style={{ maxHeight: "600px" }}
          />
        </div>
      </motion.div>

      {/* Join Mission Section */}
      <motion.section
        ref={joinRef}
        variants={staggerContainer}
        initial="hidden"
        animate={inViewJoin ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-slate-800"
          variants={fadeIn}
        >
          Join Our Mission
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {joinOptions.map((option, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-transform duration-300"
              variants={cardVariant}
              whileHover={{ scale: 1.06 }}
            >
              {option.icon}
              <h4 className="text-lg font-semibold mb-1">{option.title}</h4>
              <p className="text-sm text-gray-600">{option.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center mt-10" variants={fadeIn}>
          <a
            href="#"
            className="inline-block bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-full text-lg font-medium shadow transition duration-300"
          >
            Join Now
          </a>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ExploreJoin;
