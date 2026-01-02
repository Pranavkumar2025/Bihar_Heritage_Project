import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";

import JoinMovement from "./JoinMovement";
import heritageVideo from "../assets/Videos/BiharHistory.mp4";

const heritageSites = [
  {
    title: "Bodh Gaya (Mahabodhi Temple)",
    location: "Gaya, Bihar",
    image: "https://whc.unesco.org/uploads/thumbs/site_1056_0001-1200-630-20120601152647.jpg",
    description: "Where Buddha attained enlightenment, a major pilgrimage site and UNESCO World Heritage Site.",
    link: "https://en.wikipedia.org/wiki/Bodh_Gaya",
  },
  {
    title: "Rajgir",
    location: "Nalanda, Bihar",
    image: "https://www.trawell.in/admin/images/upload/125399242Rajgir_Hot_Springs_Main.jpg",
    description: "Ancient city with hills, hot springs, and religious significance for Buddhism and Jainism.",
    link: "https://en.wikipedia.org/wiki/Rajgir",
  },
  {
    title: "Nalanda University",
    location: "Nalanda, Bihar",
    image: "https://whc.unesco.org/uploads/thumbs/site_1502_0010-1200-630-20160616154106.jpg",
    description: "Ancient center of learning, a UNESCO World Heritage Site.",
    link: "https://en.wikipedia.org/wiki/Nalanda_mahavihara",
  },
  {
    title: "Golghar",
    location: "Patna, Bihar",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Golghar_%E0%A5%AA.jpg",
    description: "A granary with a unique dome structure built in 1786.",
    link: "https://en.wikipedia.org/wiki/Golghar",
  },
  {
    title: "Rohtasgarh Fort",
    location: "Rohtas, Bihar",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/81/Rohtasgarh_Fort_Entrance.jpg",
    description: "A grand fort nestled in the hills, rich in Mughal history.",
    link: "https://en.wikipedia.org/wiki/Rohtasgarh_Fort",
  },
  {
    title: "Vikramshila University",
    location: "Bhagalpur, Bihar",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/4b/6b/8b/img-20180818-100917-largejpg.jpg?w=1200&h=-1&s=1",
    description: "Ancient university for Buddhist studies like Nalanda.",
    link: "https://en.wikipedia.org/wiki/Vikramashila",
  },
  {
    title: "Vishnupad Temple",
    location: "Gaya, Bihar",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Vishnupad_temple_gaya_bihar.jpg",
    description: "Ancient Hindu temple with Lord Vishnu's footprint, key site for pind daan rituals.",
    link: "https://en.wikipedia.org/wiki/Vishnupad_Temple",
  },
  {
    title: "Takht Sri Patna Sahib",
    location: "Patna, Bihar",
    image: "https://www.pmc.bihar.gov.in/assets/img/patna%20sahib.jpg",
    description: "Birthplace of Guru Gobind Singh, one of the five takhts in Sikhism.",
    link: "https://en.wikipedia.org/wiki/Takht_Sri_Patna_Sahib",
  },
  {
    title: "Vaishali",
    location: "Vaishali, Bihar",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/cc/d5/11/shanti-stupa-vaishali.jpg?w=1200&h=-1&s=1",
    description: "Ancient city linked to Buddha's last sermon and Lord Mahavira's birthplace.",
    link: "https://en.wikipedia.org/wiki/Vaishali_(ancient_city)",
  },
  {
    title: "Barabar Caves",
    location: "Jehanabad, Bihar",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/49/ea/d5/the-barabar-caves-are.jpg?w=1200&h=-1&s=1",
    description: "Oldest rock-cut caves in India, dating to the Mauryan era.",
    link: "https://en.wikipedia.org/wiki/Barabar_Caves",
  },
  {
    title: "Sher Shah Suri Tomb",
    location: "Sasaram, Bihar",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Sher_Shah_Suri_Tomb.jpg",
    description: "Magnificent Indo-Islamic mausoleum, often called the second Taj Mahal.",
    link: "https://en.wikipedia.org/wiki/Tomb_of_Sher_Shah_Suri",
  },
  {
    title: "Maner Sharif",
    location: "Patna, Bihar",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/maner-sharif-dargah-patna-bihar-1-musthead-hero?qlt=82&ts=1742194830579",
    description: "Important Sufi shrine with beautiful Mughal architecture.",
    link: "https://en.wikipedia.org/wiki/Maner_Sharif",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ExploreJoin = () => {
  const scrollRef = useRef(null);
  const videoRef = useRef(null);
  const [heroRef, inViewHero] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 5;
    }
  }, []);

  return (
    <div className="relative min-h-screen ">

      <div className="relative z-10">

        {/* Explore Heritage Sites Section */}
        <motion.section
          ref={heroRef}
          initial="hidden"
          animate={inViewHero ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="py-10 px-6 md:px-12 lg:px-24 "
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              variants={fadeInUp}
              className="
    text-6xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl uppercase
  "
            >
              Explore Heritage Sites
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-white max-w-3xl mx-auto"
            >
              — Timeless sites that breathe life into Bihar’s identity —
            </motion.p>
          </div>

          {/* Auto-scrolling Carousel - FULL WIDTH FIX */}
          <div className="relative mt-16 -mx-6 md:-mx-12 lg:-mx-24">
            <div className="overflow-hidden">
              <div
                ref={scrollRef}
                className="flex gap-8 py-8 animate-slow-scroll"
              >
                {/* Duplicated cards for seamless loop */}
                {[...heritageSites, ...heritageSites].map((site, index) => (
                  <motion.a
                    key={`${site.title}-${index}`}
                    href={site.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="snap-start flex-shrink-0 w-80 lg:w-96 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group/card pause-on-hover"
                  >
                    <div className="relative h-70 overflow-hidden">
                      <img
                        src={site.image}
                        alt={site.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow">
                        {site.location}
                      </div>
                    </div>
                    <div className="p-3 bg-indigo-100">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {site.title}
                      </h3>

                      <span className="text-indigo-700 font-medium group-hover/card:underline">
                        Learn More →
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Custom CSS */}
          <style jsx>{`
            @keyframes slow-scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-slow-scroll {
              display: flex;
              width: max-content;
              animation: slow-scroll 80s linear infinite;
            }
            .pause-on-hover:hover ~ .animate-slow-scroll,
            .pause-on-hover:hover .animate-slow-scroll {
              animation-play-state: paused !important;
            }
            /* Better: pause entire carousel on any card hover */
            .group:hover .animate-slow-scroll {
              animation-play-state: paused;
            }
          `}</style>
        </motion.section>

        {/* Text + Video Section - Enhanced Professional Design */}
        <section className="py-32 px-6 md:px-12 lg:px-32 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Explore —{" "}
                  <span className="text-indigo-700 font-serif text-6xl md:text-7xl">
                    Bihar’s Timeless Heritage
                  </span>
                </h2>
                <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-full" />
              </div>

              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Dive into ancient landmarks that echo with{" "}
                <span className="font-semibold text-indigo-700">wisdom, power,</span>{" "}
                and{" "}
                <span className="font-semibold text-indigo-700">devotion</span>.
                Bihar's legacy lives in every stone and story.
              </p>

              <blockquote className="relative pl-10 py-8 text-xl md:text-2xl font-medium text-gray-800 italic leading-relaxed border-l-4 border-indigo-600 bg-indigo-50/50 rounded-r-2xl">
                <span className="absolute -left-4 top-8 text-6xl text-indigo-200 -z-10">“</span>
                To explore Bihar is to walk the footsteps of history — sacred,
                scholarly, and eternal.
              </blockquote>
            </motion.div>

            {/* Video Content */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80"
            >
              <video
                ref={videoRef}
                src={heritageVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-video object-cover transition-transform duration-1500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-2xl font-bold drop-shadow-lg">Bihar’s Eternal Legacy</p>
                <p className="text-sm opacity-90 drop-shadow">A journey through time</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Join Movement Section */}
        <JoinMovement />

      </div>
    </div>
  );
};

export default ExploreJoin;