import profileImg from "../assets/heritage/profile.jpg"

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
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-600 via-slate-400 to-slate-200 py-12">
      {/* Page Title */}
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2 className="text-4xl font-bold text-gray-800 uppercase tracking-wide">Archaeological Team</h2>
        <div className="mt-3 w-24 h-1 bg-orange-500 mx-auto rounded-full" />
        <p className="mt-5 text-lg text-gray-700 max-w-3xl mx-auto">
          Our dedicated archaeological team conducts field surveys, excavations, and research to preserve Bihar’s rich cultural heritage.
        </p>
      </div>

      {/* Team Members Table */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="bg-white rounded-xl shadow-lg border border-slate-300 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Name & Position</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {teamMembers.map((member, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-slate-50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-slate-50"
                    }`}
                  >
                    <td className="px-6 py-5 text-sm text-gray-700">
                      <div className="flex items-center gap-4">
                        <img
                          src={profileImg}
                          alt={member.name}
                          className="w-10 h-10 rounded-full object-cover border border-gray-300"
                        />
                        <div>
                          <p className="text-md font-semibold text-gray-900">{member.name}</p>
                          <p className="text-gray-600">{member.position}</p>
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-8 border border-slate-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Team Responsibilities</h3>
          <div className="text-gray-700 leading-relaxed space-y-4 text-md">
            <p>
              The Archaeological team at Bihar Heritage Project is dedicated to uncovering, documenting, and preserving the rich cultural heritage of Bihar through:
            </p>
            <ul className="list-disc list-inside ml-5 space-y-2">
              <li>Conducting systematic archaeological surveys across potential heritage sites</li>
              <li>Performing scientific excavations at identified archaeological sites</li>
              <li>Documenting artifacts, structures, and findings with detailed illustrations and measurements</li>
              <li>Analyzing archaeological data to reconstruct historical narratives</li>
              <li>Collaborating with conservation specialists to preserve discovered artifacts and structures</li>
              <li>Contributing to research publications and educational materials</li>
              <li>Participating in public outreach programs to promote awareness of Bihar's heritage</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
