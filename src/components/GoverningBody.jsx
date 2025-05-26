import { Link } from "react-router-dom";

export default function GoverningBody() {
  const governingBodyMembers = [
    { position: "Development Commissioner, Patna", role: "Chairman" },
    { position: "Principal Secretary/Secretary, Finance Department, Bihar, Patna", role: "Member" },
    { position: "Principal Secretary/Secretary Human Resources Development Department", role: "Member" },
    { position: "Principal Secretary/Secretary, Department of Tourism, Bihar", role: "Member" },
    { position: "Principal Secretary/Secretary, Building Construction Department, Bihar", role: "Member" },
    { position: "Principal Secretary/Secretary, Road Construction", role: "Member" },
    { position: "Principal Secretary/Secretary, Forest & Environment Department, Bihar", role: "Member" },
    { position: "Principal Secretary/Secretary, Mines & Geology Department, Bihar", role: "Member" },
    { position: "Principal Secretary/Secretary, Urban Development Department, Bihar", role: "Member" },
    { position: "Principal Secretary/Secretary, Revenue & Land Development Department, Bihar", role: "Member" },
    { position: "Four Experts nominated by the State Government", role: "Member" },
    { position: "Secretary, Art, Culture & Youth Department, Bihar", role: "Member Secretary" },
    { position: "Executive Director of the Society", role: "Member" },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold uppercase tracking-wide text-gray-900 dark:text-white">
            Governing Body
          </h1>
          <div className="mt-2 mx-auto w-24 h-0.5 bg-pink-500"></div>
        </div>


        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-10">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
            <span className="font-semibold text-gray-800 dark:text-gray-200">Governing Body:</span> The Governing Body is entrusted with the
            oversight and strategic direction of the Society. It holds the authority to manage, direct, and control the affairs
            of the organization. The composition of the Governing Body includes senior government officials and nominated experts
            who bring in diverse administrative and sectoral expertise.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm uppercase tracking-wide">
                <tr>
                  <th className="px-4 py-3 border-r border-gray-300 dark:border-gray-600 text-left">Position</th>
                  <th className="px-4 py-3 text-right">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {governingBodyMembers.map((member, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-4 py-4 text-sm text-gray-800 dark:text-gray-100 border-r border-gray-200 dark:border-gray-600">
                      {member.position}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 text-right">
                      {member.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
