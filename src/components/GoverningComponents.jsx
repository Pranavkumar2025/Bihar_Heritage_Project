import React from "react";

const topImages = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp_3U00IWSSR-omPQem2GCHZyg_Kq0DmZoGg&s",
    alt: "Leader 1",
    name: "Shri Motilal Prasad",
    namee: "Hon'ble Minister",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/biharfilm%2Fhome_secy.jpeg?alt=media&token=2f9b010e-0fed-4627-949d-a4779308a995",
    alt: "Leader 2",
    name: "Sri Pranav Kumar, I.A.S",
    namee: "Managing Director",
    nameee: "Secretary (Art, Culture & Youth Department)",
  },
];

const GoverningComponents = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-white to-slate-100 pt-10 pb-10 px-4 md:px-12" id="GoverningBody">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Governing Body
      </h1>

      {/* Top Leaders Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {topImages.map((item, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 max-w-xs flex flex-col items-center text-center"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg font-semibold text-gray-800 mb-1">{item.name}</p>
            <p className="text-gray-500 text-sm mb-1">{item.namee}</p>
            {item.nameee && <p className="text-gray-500 text-sm">{item.nameee}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoverningComponents;
