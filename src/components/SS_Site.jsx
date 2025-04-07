import React, { useState } from "react";
import BiharMap from "../assets/heritage/map.png";
import backImg from "../assets/heritage/img5.jpg";

const siteData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Heritage Site ${i + 1}`,
  description: "Explore the rich cultural legacy of Bihar's heritage.",
  imageUrl: BiharMap,
  link: "#",
}));

const SS_Site = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSites = siteData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="w-full bg-cover bg-center scroll-smooth"
      style={{
        backgroundImage: `url(${backImg})`,
        marginTop: "0px",
        paddingTop: "30px",
        paddingBottom: "30px",
      }}
    >
      <div className="flex justify-center items-center p-4 md:p-6">
        <div className="w-full max-w-6xl min-h-[600px] bg-[#1a1f2b]/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
          
          {/* 🏷️ Heading */}
          <div className="text-center px-6 pt-6 pb-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Bihar Heritage Sites
            </h2>
          </div>

          {/* 🔍 Search Box */}
          <div className="px-6 pb-4 flex justify-center md:justify-end">
            <input
              type="text"
              placeholder="Search sites..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-80 px-4 py-2 text-sm rounded-xl bg-white text-gray-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            />
          </div>

          {/* 📦 Card Grid */}
          <div className="h-[460px] overflow-y-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 scroll-smooth">
            {filteredSites.map((item) => (
              <div
                key={item.id}
                className="flex flex-col rounded-2xl overflow-hidden border border-gray-700 transition-all duration-500 ease-in-out hover:shadow-2xl group cursor-pointer bg-white min-h-[400px]"
              >
                <div className="flex flex-col flex-grow p-4">
                  <div className="overflow-hidden rounded-t-2xl">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 text-gray-800 flex-grow flex flex-col justify-between rounded-b-2xl group-hover:bg-[#f8c2c5] group-hover:text-gray-900 transition-colors duration-500">
                    <div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-base mb-4 group-hover:opacity-90 transition-opacity duration-500">
                        {item.description}
                      </p>
                    </div>
                    <a
                      href={item.link}
                      className="text-[#FF4D5A] text-lg font-semibold hover:underline transition-all duration-500 group-hover:text-[#D90429]"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {filteredSites.length === 0 && (
              <div className="col-span-full text-center text-white text-lg font-medium mt-4">
                No matching heritage sites found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SS_Site;
