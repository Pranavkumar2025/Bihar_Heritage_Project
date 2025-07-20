import profileImg from "../assets/heritage/profile.jpg";

export default function ArcheologicalTeam() {
  const teamMembers = [
    {
      name: "Dr. Amit Ranjan",
      position: "Research Assistant",
    },
    {
      name: "Ajay Kumar Chakrawal",
      position: "Draughtsman",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-12">
      {/* Page Title */}
      <div className="max-w-4xl mx-auto text-center mb-12 px-4 mt-16">
        <h2 className="text-4xl font-bold text-white uppercase tracking-wide">
          Archaeological Team
        </h2>
        <div className="mt-3 w-24 h-1 bg-blue-400 mx-auto rounded-full" />
        <p className="mt-5 text-lg text-gray-300 max-w-3xl mx-auto">
          Our dedicated archaeological team conducts field surveys, excavations,
          and research to preserve Bihar’s rich cultural heritage.
        </p>
      </div>

      {/* Team Members Table */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="bg-gray-800 rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-900 text-left text-sm text-gray-300 font-semibold uppercase">
                <tr>
                  <th className="px-6 py-4 border-b border-gray-700">
                    Name & Position
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700 text-sm">
                {teamMembers.map((member, index) => (
                  <tr
                    key={index}
                    className={`transition duration-150 ${
                      index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                    } hover:bg-gray-600`}
                  >
                    <td className="px-6 py-5 text-gray-200">
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-md font-semibold text-white">
                            {member.name}
                          </p>
                          <p className="text-gray-300">{member.position}</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Team Responsibilities */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6">
            Team Responsibilities
          </h3>
          <div className="text-gray-300 leading-relaxed space-y-4 text-md">
            <p>
              The Archaeological team at Bihar Heritage Project is dedicated to
              uncovering, documenting, and preserving the rich cultural heritage
              of Bihar through:
            </p>
            <ul className="list-disc list-inside ml-5 space-y-2">
              <li>
                Conducting systematic archaeological surveys across potential
                heritage sites
              </li>
              <li>
                Performing scientific excavations at identified archaeological
                sites
              </li>
              <li>
                Documenting artifacts, structures, and findings with detailed
                illustrations and measurements
              </li>
              <li>
                Analyzing archaeological data to reconstruct historical
                narratives
              </li>
              <li>
                Collaborating with conservation specialists to preserve
                discovered artifacts and structures
              </li>
              <li>
                Contributing to research publications and educational materials
              </li>
              <li>
                Participating in public outreach programs to promote awareness
                of Bihar's heritage
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
