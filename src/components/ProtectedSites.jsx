import React from "react";

const protectedSites = [
  {
    id: 1,
    name: "Nalanda Mahavihara",
    location: "Nalanda, Bihar",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201607/nalanda-4_647_071616090821.jpg?VersionId=oCPaQk771Y.mQaq9UdbLXDXHPA6vlEnE"
  },
  {
    id: 2,
    name: "Vikramashila Monastery",
    location: "Bhagalpur, Bihar",
    image: "https://iasgyan.sgp1.digitaloceanspaces.com/images/VIKRAMSHILA_UNIVERSITY.png"
  },
  {
    id: 3,
    name: "Ancient Ruins of Rajgir",
    location: "Rajgir, Bihar",
    image: "https://www.mytourplans.com/storage/ck/010623122533-rajgir-1629804778-lb.jpg"
  },
  {
    id: 4,
    name: "Rohtasgarh Fort",
    location: "Rohtas, Bihar",
    image: "https://assets.telegraphindia.com/telegraph/2022/Jun/1656338067_rothasgarh-fort-1.jpg"
  },
  {
    id: 5,
    name: "Kesaria Stupa",
    location: "East Champaran, Bihar",
    image: "https://pwonlyias.com/wp-content/uploads/2024/04/untitled-2024-04-20t121629155-1-66238db9aa2a9.webp"
  },
  {
    id: 6,
    name: "Telhara Monastery",
    location: "Nalanda District, Bihar",
    image: "https://images.indianexpress.com/2014/02/cover.jpg"
  }
];

const ProtectedSites = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 pt-10 pb-4 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center text-yellow-300 mb-10 mt-14">
        Protected Heritage Sites of Bihar
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {protectedSites.map((site) => (
          <div
            key={site.id}
            className="bg-gradient-to-br from-slate-800 to-slate-700 border border-gray-700 rounded-2xl shadow hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-500 ease-in-out p-4 cursor-pointer"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={site.image}
                alt={site.name}
                className="w-full h-48 object-cover rounded-xl transform hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-2 mt-4">
              {site.name}
            </h3>
            <p className="text-gray-300">📍 {site.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProtectedSites;
