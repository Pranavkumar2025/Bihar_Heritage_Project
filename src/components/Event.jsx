import React, { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Ticket, X } from "lucide-react";

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
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

export default function Event() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleOpenModal = (event) => setSelectedEvent(event);
  const handleCloseModal = () => setSelectedEvent(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 leading-relaxed"
        >
          Events
        </motion.h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-16">
          Discover our curated cultural experiences designed to showcase the
          soul of Bihar.
        </p>

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
              className="bg-gray-800 p-6 rounded-2xl border border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between text-sm text-gray-300 mb-3">
                <div className="flex items-center gap-2">
                  <CalendarDays size={16} className="text-blue-400" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-blue-400" />
                  <span>{event.location}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {event.title}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {event.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {event.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-600/20 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/30"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleOpenModal(event)}
                className="mt-auto flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition"
              >
                <Ticket size={16} />
                Visiting Details
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 border border-gray-600 rounded-2xl shadow-xl p-6 w-full max-w-lg relative text-gray-100">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-semibold text-white mb-4">
              {selectedEvent.title}
            </h2>

            <table className="w-full text-sm text-left border-collapse">
              <tbody>
                <tr className="border-t border-gray-600">
                  <th className="py-2 px-4 text-purple-300 w-1/3">📅 Date</th>
                  <td className="py-2 px-4">{selectedEvent.date}</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <th className="py-2 px-4 text-pink-300">📍 Location</th>
                  <td className="py-2 px-4">{selectedEvent.location}</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <th className="py-2 px-4 text-cyan-300">🏷️ Tags</th>
                  <td className="py-2 px-4">
                    {selectedEvent.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block mr-2 mb-1 bg-purple-700 bg-opacity-30 text-purple-300 text-xs px-3 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </td>
                </tr>
                <tr className="border-t border-gray-600">
                  <th className="py-2 px-4 text-blue-300 align-top">
                    📝 Description
                  </th>
                  <td className="py-2 px-4">{selectedEvent.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
