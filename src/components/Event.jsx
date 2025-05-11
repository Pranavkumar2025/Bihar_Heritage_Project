import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Ticket } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Bihar Heritage Fest 2025",
    date: "April 20, 2025",
    location: "Gandhi Maidan, Patna",
    tags: ["Cultural", "Music", "Food"],
    description:
      "A grand celebration of Bihar's rich culture with performances, heritage talks, and food exhibitions.",
  },
  {
    id: 2,
    title: "Madhubani Art Workshop",
    date: "May 12, 2025",
    location: "Art Gallery, Darbhanga",
    tags: ["Workshop", "Art", "Traditional"],
    description:
      "Explore the traditional art of Madhubani with local artists and hands-on experience.",
  },
  {
    id: 3,
    title: "Heritage Walk - Patna",
    date: "June 5, 2025",
    location: "Golghar, Patna",
    tags: ["History", "Tour", "Heritage"],
    description:
      "Join our curated tour through Patna's historical landmarks led by heritage experts.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

export default function Event() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-200 to-gray-300 text-gray-800 mt-6 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-cyan-600 leading-relaxed
"
        >
          Upcoming Events
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-16">
          Discover our curated cultural experiences designed to showcase the soul of Bihar.
        </p>

        {/* Event Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xl transition-all duration-300"
            >
              {/* Date and Location */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-2">
                  <CalendarDays size={16} className="text-purple-500" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-pink-500" />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {event.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {event.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {event.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-auto flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition"
              >
                <Ticket size={16} />
                Book Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
