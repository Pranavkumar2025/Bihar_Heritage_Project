import { Link } from "react-router-dom"

export default function GoverningBody() {
  const governingBodyMembers = [
    {
      position: "Development Commissioner, Patna",
      role: "Chairman",
    },
    {
      position: "Principal Secretary/Secretary, Finance Department, Bihar, Patna",
      role: "Member",
    },
    {
      position: "Principal Secretary/Secretary Human Resources Development Department",
      role: "Member",
    },
    {
      position: "Principal Secretary/Secretary, Department of Tourism, Bihar",
      role: "Member",
    },
    {
      position: "Principal Secretary/Secretary, Building Construction Department, Bihar",
      role: "Member",
    },
    {
      position: "Principal Secretary/Secretary, Road Construction",
      role: "Member",
    },
    {
      position: "Principal Secretary/Secretary, Forest & Environment Department, Bihar",
      role: "Member",
    },
    {
      position: "Principal Secretary/Secretary, Mines & Geology Department, Bihar",
      role: "Member",
    },
    {
      position: "Principal Secretary/Secretary, Urban Development Department, Bihar",
      role: "Member",
    },
    {
      position: "Principal Secretary/Secretary, Revenue & Land Development Department, Bihar",
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
    {
      position: "Executive Director of the Society",
      role: "Member",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-6">
            <div className="border-l-4 border-pink-500 pl-4">
              <h1 className="text-2xl font-bold text-pink-500 uppercase tracking-wide">Governing Body</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-pink-500 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900">Governing Body</span>
          </div>
        </nav>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wide">Governing Body</h2>
          <div className="mt-4 mx-auto w-24 h-0.5 bg-gray-400"></div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">Governing Body:</span> The Governing Committee controls the affairs of the
            Society and has the authority to exercise and perform all the powers, acts and deeds of the society. It is
            composed in the following manner.
          </p>
        </div>

        {/* Governing Body Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                {governingBodyMembers.map((member, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-700 border-r border-gray-200">{member.position}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-right">{member.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
