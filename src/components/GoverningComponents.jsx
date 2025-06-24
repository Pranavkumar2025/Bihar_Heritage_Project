import React from "react";

// Default profile image for members without image
const defaultProfileImg = "https://www.w3schools.com/howto/img_avatar.png"; // You can replace this with your preferred profile icon

// Complete data for all members
const governingMembers = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp_3U00IWSSR-omPQem2GCHZyg_Kq0DmZoGg&s",
    alt: "Leader 1",
    name: "Shri Motilal Prasad",
    namee: "Hon'ble Minister",
  },
  {
    src: null,
    name: "Shri Pratyay Amrit",
    namee: "Development Commissioner, Govt. of Bihar",
    nameee: "Chairman, Bihar Heritage Development Society",
    contact: "0612-2284861",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/biharfilm%2Fhome_secy.jpeg?alt=media&token=2f9b010e-0fed-4627-949d-a4779308a995",
    alt: "Leader 2",
    name: "Sri Pranav Kumar, I.A.S",
    namee: "Managing Director",
    nameee: "Secretary (Art, Culture & Youth Department)",
  },
  {
    src: null,
    name: "Arvind Tiwari",
    namee: "Deputy Executive Director",
    nameee: "Bihar Heritage Development Society",
    contact: "+91 9430957125",
  },
];

const GoverningComponents = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-white to-slate-100 pt-10 pb-10 px-4 md:px-12" id="GoverningBody">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Heritage Team
      </h1>

      {/* Governing Members Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {governingMembers.map((item, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 w-72 min-h-[350px] flex flex-col items-center text-center"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4">
              <img
                src={item.src ? item.src : defaultProfileImg}
                alt={item.alt || item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg font-semibold text-gray-800 mb-1">{item.name}</p>
            <p className="text-gray-500 text-sm mb-1">{item.namee}</p>
            {item.nameee && <p className="text-gray-500 text-sm mb-1">{item.nameee}</p>}
            {item.contact && <p className="text-gray-500 text-sm">Contact: {item.contact}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoverningComponents;
