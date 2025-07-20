import {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import protectedSites from "../components/ActivitiesData/ProtectedSites.json";

const ProtectedSites = () => {
  const [selectedSite, setSelectedSite] = useState(null);
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url(https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/Bihar%20Heritage%2FSites%20Photo%2Falwal%20khan%20tomb.jpg?alt=media&token=d1159553-dcff-4aa4-9c41-97f1caf5d6b1)] bg-cover bg-center bg-fixed grayscale"></div>
      <div className="absolute inset-0 bg-blue-100/40"></div>

      {/* Top Fading Mask */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-5"></div>

      {/* Content */}
      <div className="relative z-10 pt-10 pb-4 px-6 md:px-20">
        <h1 className="text-4xl font-bold text-center text-blue-900 drop-shadow-lg  mt-18">
          Protected Heritage Sites of Bihar
        </h1>
        <h1 className="text-lg  text-center text-blue-900  mb-10 mt-3 drop-shadow-sm">
          Protected under the Bihar Ancient Monuments and Archaeological Sites,
          Remains and Art Treasures Act, 1976.
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9">
          {protectedSites.map((site) => (
            <div
              key={site.id}
              className="group relative overflow-hidden rounded-2xl hover:shadow-lg transform transition-transform duration-500 ease-in-out hover:-translate-y-6 cursor-pointer"
              onClick={() => setSelectedSite(site)}
              style={{ minHeight: "2px" }}
            >
              <img
                src={
                  site.image ||
                  "https://via.placeholder.com/400x300?text=No+Image"
                }
                alt={site.name}
                className="w-full h-96 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />{" "}
              {/* Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent p-4">
                <h3 className="text-sm font-bold text-white">{site.name}</h3>
                <p className="text-gray-300 text-sm/6"> {site.location}</p>
                <p className="text-gray-300 text-xs">
                  {" "}
                  Protected Since : {site.protected_since}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedSite && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={() => setSelectedSite(null)}
          >
            <motion.div
              key="modal-content"
              initial={{ scale: 0.95, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 40, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[80vh] relative overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedSite(null)}
                className="absolute top-4 right-4 bg-gray-300 hover:bg-red-500 hover:text-white text-gray-800 rounded-full p-1 z-10"
              >
                <X size={20} />
              </button>

              <div className="h-[50%] w-full overflow-hidden object-center">
                <img
                  src={
                    selectedSite.image ||
                    "https://via.placeholder.com/600x300?text=No+Image"
                  }
                  alt={selectedSite.name}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>

              <div className="p-6 overflow-y-auto h-[50%]">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedSite.name}
                </h2>
                <p className="text-gray-600 text-sm mb-3">
                  📍 {selectedSite.location} (Distance from Patna:{" "}
                  {selectedSite.distance} Km)
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
