import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Importing JSON data
import protectedSites from "../components/ActivitiesData/ProtectedSites.json";


const ProtectedSites = () => {
  const [selectedSite, setSelectedSite] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 pt-10 pb-4 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center text-yellow-300 mb-10 mt-14">
        Protected Heritage Sites of Bihar
      </h1>
      <p className="text-center text-gray-300 mb-8 italic">Protected under the Bihar Ancient Monuments and Archaeological Sites, Remains and Art Treasures Act, 1976.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {protectedSites.map((site) => (
          <div
            key={site.id}
            className="bg-gradient-to-br from-slate-800 to-slate-700 border border-gray-700 rounded-2xl shadow hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-500 ease-in-out p-4 cursor-pointer"
            onClick={() => setSelectedSite(site)}
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={site.image || "https://via.placeholder.com/400x250?text=No+Image"}
                alt={site.name}
                className="w-full h-48 object-cover rounded-xl transform hover:scale-105 transition-transform duration-700 ease-in-out"
              />

            </div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-2 mt-4">
              {site.name}
            </h3>
            <p className="text-gray-300">📍 {site.location}, 🛡️ Protected since: {site.protected_since}</p>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {selectedSite && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          >
            <motion.div
              key="modal-content"
              initial={{ scale: 0.95, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 40, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[80vh] relative overflow-hidden flex flex-col"
            >
              <button
                onClick={() => setSelectedSite(null)}
                className="absolute top-4 right-4 bg-gray-300 hover:bg-red-500 hover:text-white text-gray-800 rounded-full p-1 z-10"
              >
                <X size={20} />
              </button>

              <div className="h-[50%] w-full overflow-hidden">
                <img
                  src={selectedSite.image || "https://via.placeholder.com/600x300?text=No+Image"}
                  alt={selectedSite.name}
                  className="w-full h-full object-cover rounded-t-xl"
                />


              </div>

              <div className="p-6 overflow-y-auto h-[50%]">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedSite.name}
                </h2>
                <p className="text-gray-600 text-sm mb-3">
                  📍 {selectedSite.location}
                </p>
                {selectedSite.protected_since && (
                  <p className="text-gray-500 text-sm mt-2 italic">
                    🛡️ Protected since: {selectedSite.protected_since}
                  </p>
                )}

                {selectedSite.subtitle && (
                  <p className="text-gray-700 text-sm italic">
                    {selectedSite.subtitle}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ProtectedSites;
