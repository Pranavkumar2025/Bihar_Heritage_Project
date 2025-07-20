import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import profileImg from "../assets/heritage/profile.jpg";

export default function ExecutiveCommittee() {
  const executiveMembers = [
    {
      position:
        "Principal Secretary, Art, Culture & Youth Deptt., Bihar, Patna",
      role: "Chairman",
    },
    {
      position:
        "Joint Secretary/Deputy Secretary/Under Secretary, Art, Culture & Youth Department, Bihar, Patna",
      role: "Member",
    },
    { position: "Director, Archaeology, Bihar, Patna", role: "Member" },
    { position: "Director, Museums, Bihar, Patna", role: "Member" },
    {
      position: "Director, K.P. Jaiswal Research Institute, Patna",
      role: "Member",
    },
    {
      position: "Director, Bihar State Archives, Bihar, Patna",
      role: "Member",
    },
    { position: "Director, K.B. Public Library, Patna", role: "Member" },
    { position: "Director, NavNalandaMahavihar, Nalanda", role: "Member" },
    {
      position: "Superintending Archaeologist, A.S.I., Patna Circle",
      role: "Member",
    },
    {
      position: "Dy. Superintending Engineer, A.S.I., Patna Circle",
      role: "Member",
    },
    {
      position: "H.O.D., Ancient Indian & Asian Studies Deptt.",
      role: "Member",
    },
    { position: "Deputy Executive Director of the Society", role: "Member" },
    { position: "Director, Finance & Accounts", role: "Member" },
    { position: "Representative of Finance Department", role: "Member" },
    { position: "Four experts nominated by the State Govt.", role: "Member" },
    { position: "Executive Director of the Society", role: "Member Secretary" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 pt-20 pb-16 px-4">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white uppercase tracking-wide">
          Executive Committee & Secretariat
        </h1>
        <div className="mt-2 mx-auto w-24 h-1 bg-blue-400 rounded"></div>
      </div>

      {/* Description */}
      <div className="mb-10 max-w-3xl mx-auto text-center">
        <p className="text-gray-300 text-lg leading-relaxed">
          <span className="font-semibold">Executive Committee:</span> The
          Executive Committee acts on behalf of the Governing Body as per its
          directives. It is constituted as follows.
        </p>
      </div>

      {/* Executive Committee Table */}
      <div className="max-w-6xl mx-auto bg-gray-800 border border-gray-700 rounded-xl shadow-2xl overflow-hidden mb-12">
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
              {executiveMembers.map((member, index) => (
                <tr
                  key={index}
                  className={`transition duration-150 ${
                    index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                  } hover:bg-gray-600`}
                >
                  <td className="px-6 py-4 text-gray-200 border-r border-gray-700">
                    <div className="flex items-center gap-3">
                      <span>{member.position}</span>
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

      {/* Secretariat Section */}
      <div className="max-w-5xl mx-auto bg-gray-800 border border-gray-700 rounded-xl shadow-2xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Secretariat</h2>
        <p className="text-gray-300 mb-4">
          <span className="font-semibold">Secretariat:</span> The secretariat
          includes the Executive Director or Director and support staff of the
          Society. It is the operational arm responsible for daily
          administration.
        </p>
        <p className="text-gray-300 mb-4">Its responsibilities include:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm ml-2">
          <li>Planning and implementation of heritage conservation projects</li>
          <li>Coordination with government departments and agencies</li>
          <li>Budget and financial management</li>
          <li>Documentation and preservation of cultural assets</li>
          <li>Public outreach and education programs</li>
          <li>National and international collaborations</li>
        </ul>
      </div>
    </div>
  );
}
