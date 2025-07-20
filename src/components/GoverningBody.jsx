import { Link } from "react-router-dom";
import profileImg from "../assets/heritage/profile.jpg";

export default function GoverningBody() {
  const governingBodyMembers = [
    { position: "Development Commissioner, Patna", role: "Chairman" },
    {
      position:
        "Principal Secretary/Secretary, Finance Department, Bihar, Patna",
      role: "Member",
    },
    {
      position:
        "Principal Secretary/Secretary Human Resources Development Department",
      role: "Member",
    },
    {
      position: "Principal Secretary/Secretary, Department of Tourism, Bihar",
      role: "Member",
    },
    {
      position:
        "Principal Secretary/Secretary, Building Construction Department, Bihar",
      role: "Member",
    },
    {
      position: "Principal Secretary/Secretary, Road Construction",
      role: "Member",
    },
    {
      position:
        "Principal Secretary/Secretary, Forest & Environment Department, Bihar",
      role: "Member",
    },
    {
      position:
        "Principal Secretary/Secretary, Mines & Geology Department, Bihar",
      role: "Member",
    },
    {
      position:
        "Principal Secretary/Secretary, Urban Development Department, Bihar",
      role: "Member",
    },
    {
      position:
        "Principal Secretary/Secretary, Revenue & Land Development Department, Bihar",
      role: "Member",
    },
    {
      position: "Four Experts nominated by the State Government",
      role: "Member",
    },
    {
      position: "Secretary, Art, Culture & Youth Department, Bihar",
      role: "Member Secretary",
    },
    { position: "Executive Director of the Society", role: "Member" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 pt-24 pb-12 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-white uppercase tracking-wide">
          Governing Body
        </h1>
        <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
          <span className="font-semibold">Governing Body:</span> The Governing
          Committee controls the affairs of the Society and has the authority to
          exercise and perform all the powers, acts and deeds of the society. It
          is composed in the following manner.
        </p>
      </div>

      {/* Table Section */}
      <div className="max-w-6xl mx-auto bg-gray-800 border border-gray-700 rounded-xl shadow-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900 text-left text-sm text-gray-300 font-semibold uppercase">
              <tr>
                <th className="px-6 py-4 border-b border-gray-700">Position</th>
                <th className="px-6 py-4 text-right border-b border-gray-700">
                  Role
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700 text-sm">
              {governingBodyMembers.map((member, index) => (
                <tr
                  key={index}
                  className={`transition duration-150 ${
                    index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                  } hover:bg-gray-600`}
                >
                  <td className="px-6 py-4 text-gray-200 border-r border-gray-700">
                    <div className="flex items-center gap-3">
                      <span className="text-md font-semi">{member.position}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-medium text-blue-400">
                    {member.role}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
