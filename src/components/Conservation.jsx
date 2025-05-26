import React from "react";
import { motion } from "framer-motion";
import nalandAfter from "../assets/heritage/nalanda-after.jpg";
import nalandBefore from "../assets/heritage/nalanda-before.jpg";
import VikramshilaBefore from "../assets/heritage/Vikramshila-before.jpg";
import VikramshilaAfter from "../assets/heritage/Vikramshila-after.jpeg";

const beforeAfterData = [
  {
    title: "Nalanda University",
    beforeImg: nalandBefore,
    afterImg: nalandAfter,
  },
  {
    title: "Vikramshila Ruins",
    beforeImg: VikramshilaBefore,
    afterImg: VikramshilaAfter,
  },
];

const projects = [
  {
    title: "Mahabodhi Temple Cleaning Drive",
    desc: "A project to clean and preserve the historic Mahabodhi Temple using eco-friendly methods.",
  },
  {
    title: "Vaishali Stupa Restoration",
    desc: "Structural stabilization of Vaishali Stupa to prevent further erosion and collapse.",
  },
  {
    title: "Rock Paintings at Kaimur Hills",
    desc: "Conservation of prehistoric rock art through protective measures and documentation.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Conservation = () => {
  return (
    <div id="conservation-section" className="bg-blue-50 min-h-screen px-4 md:px-16 py-12">
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-10 text-[#1D3557]"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Conserving Heritage
      </motion.h2>

      {/* Before/After Section */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 mb-20"
        initial="hidden"
        whileInView="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        viewport={{ once: true }}
      >
        {beforeAfterData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            variants={fadeInUp}
          >
            <div className="relative group">
              <img
                src={item.beforeImg}
                alt={`${item.title} Before`}
                className="w-full h-64 object-cover transition duration-500 group-hover:opacity-0"
              />
              <img
                src={item.afterImg}
                alt={`${item.title} After`}
                className="w-full h-64 object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-xl text-[#1D3557]">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Hover to see restoration.
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Ongoing Projects Section */}
      <motion.h3
        className="text-3xl font-semibold text-[#1D3557] mb-6"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Ongoing Conservation Projects
      </motion.h3>
      <motion.div
        className="grid md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            variants={fadeInUp}
          >
            <h4 className="text-lg font-bold text-[#457B9D]">{project.title}</h4>
            <p className="text-sm text-gray-700 mt-2">{project.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Conservation;
