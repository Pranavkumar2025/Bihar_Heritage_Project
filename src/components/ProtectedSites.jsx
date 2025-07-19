import React from "react";

// Importing JSON data
import protectedSites from "../components/ActivitiesData/ProtectedSites.json";

const ProtectedSites = () => {
  return (
    <div className="min-h-screen bg-gray-200 pt-10 pb-4 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center text-yellow-500 mb-10 mt-14">
        Protected Heritage Sites of Bihar
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9">
        {protectedSites.map((site) => (
          <div
            key={site.id}
            className="group relative overflow-hidden rounded-2xl hover:shadow-lg transform transition-transform duration-500 ease-in-out hover:-translate-y-6 cursor-pointer"
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
              <p className="text-gray-300 text-sm mt-1"> {site.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProtectedSites;
