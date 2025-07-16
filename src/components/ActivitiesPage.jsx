import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ActivitiesPage() {
  const [selectedActivity, setSelectedActivity] = useState(null);


const events = [
  {
    title: "World Heritage Day",
    link: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/Bihar%20Heritage%2FActivity%2FWorld%20Heritage%20Day.jpg?alt=media&token=805ea386-be78-4b74-a98e-770d727e559a",
    subtitle: "Special ceremony organized on World Heritage Day 2025.",
    date: "18-04-2025"
  },
  {
    title: "Heritage Day Inauguration",
    link: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/Bihar%20Heritage%2FActivity%2FHeritage%20Day%20Inauguration.jpg?alt=media&token=957b7e1f-1de5-4c54-8114-226556305ae1",
    subtitle: "Program inaugurated by Hon’ble Minister Motilal Prasad.",
    date: "19-04-2025"
  },
  
  {
    title: "Environment Day Seminar",
    link: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/Bihar%20Heritage%2FActivity%2FEnvironment%20Day%20Seminar.jpg?alt=media&token=f8b98fcd-a1a0-4d87-b22c-de43a4176b62",
    subtitle: "Seminar organized at Bihar Museum on Environment Day 2025.",
    date: "06-06-2025"
  },
  {
    title: "Heritage Week Exhibition",
    link: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/Bihar%20Heritage%2FActivity%2FHeritage%20Week%20Exhibition.jpg?alt=media&token=3da02400-7617-4606-bfc9-bbb6374c46df",
    subtitle: "Photo exhibition on heritage and ancient rock paintings during World Heritage Week.",
    date: "25-11-2024"
  },
  {
    title: "Environment Day Dance",
    link: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/Bihar%20Heritage%2FActivity%2FEnvironment%20Day%20Dance.jpg?alt=media&token=ac31de31-5034-44f5-affd-ad8127989c80",
    subtitle: "Girls performed a dance to spread the message of environment at Bihar Museum.",
    date: "06-06-2025"
  },
  {
    title: "Heritage Week Lecture",
    link: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/Bihar%20Heritage%2FActivity%2FHeritage%20Week%20Lecture.jpg?alt=media&token=e5c7cbf9-bc80-484e-958d-6a19e41a1ee3",
    subtitle: "Online lecture by Prof. D. P. Tiwari on heritage excavation and management.",
    date: "23-11-2024"
  },

  {
    title: "Seminar Highlights",
    link: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/Bihar%20Heritage%2FActivity%2FSeminar%20Highlights.jpg?alt=media&token=73b52bb7-7cf8-449d-9001-f460a3fcffaa",
    subtitle: "Glimpse of Heritage Workshop at Patna University.",
    date: "28-09-2024"
  },
  {
    title: "Telhara Conservation Work",
    link: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/Bihar%20Heritage%2FActivity%2FTelhara%20Conservation%20Work.jpg?alt=media&token=3fd9cb45-be32-438f-ba47-351cd408ba84",
    subtitle: "Ongoing cleaning and conservation at Telhara, Nalanda.",
    date: "22-09-2024"
  },
  {
    title: "Mahabodhi Temple Walk",
    link: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/Bihar%20Heritage%2FActivity%2FMahabodhi%20Temple%20Walk.jpg?alt=media&token=26dd218f-2b9a-4efa-a266-24eae09b42b6",
    subtitle: "Architectural walk for KOHLER’s team at Mahabodhi Temple by BHDS.",
    date: "13-09-2024"
  },
  {
    title: "Telhara Expert Visit",
    link: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/Bihar%20Heritage%2FActivity%2FTelhara%20Expert%20Visit.jpg?alt=media&token=cc4d440f-1f18-4445-9165-7aa54056487a",
    subtitle: "Visit by retired ASI engineers to the Telhara conservation site.",
    date: "12-09-2024"
  },
  {
    title: "Magadh Lecture",
    link: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/Bihar%20Heritage%2FActivity%2FMagadh%20Lecture.jpg?alt=media&token=f6d33e36-0ebb-401a-a25a-588b7ed3c105",
    subtitle: "Lecture on 'Heritage of Magadh: Prospects and Conservation'.",
    date: "07-09-2024"
  },
  {
    title: "Indpe Fort, Jamui",
    link: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/Bihar%20Heritage%2FActivity%2FIndpe%20Fort%2C%20Jamui.jpg?alt=media&token=f8acec59-0491-40be-b81f-f28f82448498",
    subtitle: "Documentation of the ancient fort site in Indpe, Jamui.",
    date: "06-09-2024"
  },
  {
    title: "Patna University Session",
    link: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/Bihar%20Heritage%2FActivity%2FPatna%20University%20Session.jpg?alt=media&token=ccf33798-4e72-40c8-8b22-9632359a175c",
    subtitle: "Heritage Awareness Session for Patna University students.",
    date: "30-08-2024"
  },
  {
    title: "Women in Archaeology",
    link: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/Bihar%20Heritage%2FActivity%2FWomen%20in%20Archaeology.jpg?alt=media&token=732091a3-1b92-4604-afb0-26e4bf185848",
    subtitle: "National seminar on role of women archaeologists in Indian archaeology.",
    date: "08-08-2025"
  },
  {
    title: "Heritage Utsav Bodhgaya",
    link: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/Bihar%20Heritage%2FActivity%2FHeritage%20Utsav%20Bodhgaya.jpg?alt=media&token=5b5a61a2-e1a6-46a4-adda-41696da79508",
    subtitle: "Inauguration of Bihar Heritage Utsav by Hon’ble Deputy CM and Minister.",
    date: "24-08-2024"
  },
  {
    title: "Lali Pahadi Excavation",
    link: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/Bihar%20Heritage%2FActivity%2FLali%20Pahadi%20Excavation.jpg?alt=media&token=c944698f-0914-4809-9d92-63900194670f",
    subtitle: "Excavation activities at Lali Pahadi, Lakhisarai by BHDS.",
    date: "18-08-2024"
  },
  {
    title: "Nepali Temple Visit",
    link: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/Bihar%20Heritage%2FActivity%2FNepali%20Temple%20Visit.jpg?alt=media&token=c42b81ef-5482-41b9-aa9f-bf657611d948",
    subtitle: "Visit of conservation experts to Nepali Temple, Hajipur.",
    date: "08-08-2024"
  },
  {
    title: "Conservation Workshop",
    link: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/Bihar%20Heritage%2FActivity%2FConservation%20Workshop.jpg?alt=media&token=5bb2c711-0eda-4d30-8000-78a4650f7d2b",
    subtitle: "Training and certificate distribution for heritage conservation workshop.",
    date: "09-08-2024"
  }
];

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
          Workshop & Seminar
        </motion.h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-16 text-center">
          A showcase of Bihar’s rich cultural initiatives and heritage events.
        </p>

        {/* Activity Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedActivity(activity)}
              className="bg-gray-900 border border-gray-700 rounded-2xl shadow-xl overflow-hidden flex flex-col transition-all duration-500 cursor-pointer"
            >
              {/* Image Section */}
              <div className="w-full h-48 overflow-hidden group relative">
                <motion.img
                  src={activity.link}
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
                  <p className="text-gray-400 text-xs">Date: {activity.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
       <AnimatePresence>
  {selectedActivity && (
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
        className="bg-gray-900 border border-gray-700 rounded-xl shadow-2xl w-full max-w-3xl h-[80vh] relative overflow-hidden flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedActivity(null)}
          className="absolute top-4 right-4 bg-gray-300 hover:bg-red-500 hover:text-white text-gray-800 rounded-full p-1 z-10"
        >
          <X size={20} />
        </button>

        {/* Image */}
        <div className="h-[50%] w-full overflow-hidden">
          <img
            src={selectedActivity.link}
            alt={selectedActivity.title}
            className="w-full h-full object-cover rounded-t-xl"
          />
        </div>

        {/* Text Content */}
        <div className="p-6 overflow-y-auto h-[50%]">
          <h2 className="text-2xl font-bold text-gray-100 mb-2">
            {selectedActivity.title}
          </h2>
          <p className="text-gray-200 text-sm mb-3">
            {selectedActivity.subtitle}
          </p>
          <p className="text-gray-300 text-xs">Date: {selectedActivity.date}</p>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </div>
  );
}
