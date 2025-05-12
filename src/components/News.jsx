import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Megaphone, MapPin } from "lucide-react";

const newsItems = [
  {
    title: "Upcoming Exhibition at Patna Museum",
    date: "June 22, 2025",
    description:
      "Explore rare artifacts and ancient manuscripts from the Mauryan and Gupta periods.",
    icon: <CalendarDays className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Government Cultural Festival",
    date: "July 10, 2025",
    description:
      "A grand celebration with folk music, classical dance performances, and regional cuisines.",
    icon: <Megaphone className="w-6 h-6 text-yellow-600" />,
  },
  {
    title: "Historic Heritage Walk – Nalanda",
    date: "August 5, 2025",
    description:
      "Join guided tours through the ancient ruins of Nalanda, accompanied by expert historians.",
    icon: <MapPin className="w-6 h-6 text-green-600" />,
  },
];

const fadeContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const News = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 min-h-[70vh]">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-extrabold text-blue-900 mb-3">
          Recent Announcements
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Stay updated with the latest cultural events, exhibitions, and more.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={fadeContainer}
        initial="hidden"
        animate="visible"
      >
        {newsItems.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeItem}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="mr-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-800">
                {item.title}
              </h3>
            </div>
            <p className="text-sm text-gray-500 mb-2">{item.date}</p>
            <p className="text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default News;
