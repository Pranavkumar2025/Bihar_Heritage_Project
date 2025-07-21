import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const tenders = [
  {
    title: "Heritage Site Conservation Services",
    date: "2025-08-15",
    description:
      "Tender for conservation and restoration of protected heritage monuments in Bihar.",
  },
  {
    title: "Archaeological Survey Equipment",
    date: "2025-07-30",
    description:
      "Supply of modern archaeological survey and excavation equipment for heritage sites.",
  },
  {
    title: "Heritage Documentation Project",
    date: "2025-08-05",
    description:
      "Digital documentation and 3D mapping of Bihar's historical monuments and sites.",
  },
  {
    title: "Cultural Heritage Exhibition",
    date: "2025-09-01",
    description:
      "Organization of Bihar Heritage Festival and cultural exhibitions across the state.",
  },
  {
    title: "Site Security and Maintenance",
    date: "2025-07-25",
    description:
      "Security services and regular maintenance for protected archaeological sites.",
  },
  {
    title: "Heritage Awareness Campaign",
    date: "2025-08-20",
    description:
      "Public awareness campaign for heritage conservation and cultural promotion.",
  },
];

const Notifications = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 px-4 sm:px-10 lg:px-20 py-10 text-white font-[Poppins]">
      {/* Back Button */}
      <div className="mb-10 mt-18">
        <button
          onClick={() => navigate("/")}
          className="bg-yellow-600 text-white font-semibold px-4 py-2 rounded shadow hover:bg-yellow-700 transition duration-300"
        >
          ← Back to Home
        </button>
      </div>

      {/* Title and Quote */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-white">
          Tenders
        </h1>
        <p className="text-gray-300 italic text-sm sm:text-base max-w-2xl mx-auto">
          “Stay informed. Explore the latest tenders and opportunities available
          for filmmakers and vendors.”
        </p>
      </div>

      {/* Tenders Section */}
      <div className="max-w-6xl mx-auto bg-gray-800 border border-gray-700 rounded-xl shadow-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900 text-left text-sm text-gray-300 font-semibold uppercase">
              <tr>
                <th className="px-6 py-4 border-b border-gray-700">Sr. No</th>
                <th className="px-6 py-4 border-b border-gray-700">Title</th>
                <th className="px-6 py-4 border-b border-gray-700">Date</th>
                <th className="px-6 py-4 border-b border-gray-700">
                  Description
                </th>
                <th className="px-6 py-4 text-right border-b border-gray-700">
                  Download
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700 text-sm">
              {tenders.map((item, index) => (
                <tr
                  key={index}
                  className={`transition duration-150 ${
                    index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                  } hover:bg-gray-600`}
                >
                  <td className="px-6 py-4 text-gray-300 border-r border-gray-700">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 text-gray-200 border-r border-gray-700">
                    <span className="text-md font-medium">{item.title}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-300 border-r border-gray-700">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 text-gray-300 border-r border-gray-700">
                    {item.description}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-yellow-400 border border-yellow-400 px-3 py-1 rounded hover:bg-yellow-600 hover:text-white text-sm font-semibold transition duration-300">
                      ⬇ PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
