import React from "react";
import { motion } from "framer-motion";

import ActivitiesData from "../components/ActivitiesData/Activities.json";

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r pt-3 from-blue-400 to-cyan-400 text-center"
        >
          हमारी गतिविधियाँ
        </motion.h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-16 text-center">
          बिहार की सांस्कृतिक गतिविधियों का संकलन
        </p>

        {/* Activity Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ActivitiesData.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 border border-gray-700 rounded-2xl shadow-xl overflow-hidden flex flex-col transition-all duration-500"
            >
              {/* Image Section with Hover Zoom Effect */}
              <div className="w-full h-48 overflow-hidden group relative">
                <motion.img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col justify-between p-6 flex-grow">
                <div>
                  <h2 className="text-xl font-bold text-white mb-3">
                    {activity.title}
                  </h2>
                  <p className="text-gray-300 text-sm mb-3 max-h-[80px] overflow-y-auto pr-1">
                    {activity.subtitle}
                  </p>
                  <p className="text-gray-400 text-xs">तारीख: {activity.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
