import { Phone, Mail, MapPin } from "lucide-react";
import profileImg from "../assets/heritage/profile.jpg";

export default function KeyFunctionaries() {
  const keyOfficials = [
    {
      name: "Shri Pratyay Amrit",
      position: "Development Commissioner, Govt. of Bihar",
      role: "Chairman,",
      organization: "Bihar Heritage Development Society",
      contact: "0612- 2284861",
    },
    {
      name: "Sri Pranav Kumar",
      position: "Secretary,",
      department: "Art Culture and Youth Department, Govt. of Bihar",
      role: "Chairman",
      committee: "Executive Committee",
      organization: "Bihar Heritage Development Society",
      contact: "0612-2211619",
    },
    {
      name: "Arvind Tiwari",
      position: "Deputy Executive Director",
      organization: "Bihar Heritage Development Society",
      contact: "+91 9430957125",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-12">
      {/* Page Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white uppercase tracking-wide mt-12">
          Key Functionaries
        </h2>
        <div className="mt-2 w-24 h-1 bg-blue-400 mx-auto rounded-full" />
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto px-4">
          Officials responsible for guiding the Bihar Heritage Development
          Society's operations and preserving Bihar’s cultural legacy.
        </p>
      </div>

      {/* Officials Table */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-900 text-left text-sm text-gray-300 font-semibold uppercase">
                <tr>
                  <th className="px-6 py-4 border-b border-gray-700">
                    Officials
                  </th>
                  <th className="px-6 py-4 text-right border-b border-gray-700">
                    Contact
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700 text-sm">
                {keyOfficials.map((official, index) => (
                  <tr
                    key={index}
                    className={`transition duration-150 ${
                      index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                    } hover:bg-gray-600`}
                  >
                    <td className="px-6 py-5 text-gray-200 border-r border-gray-700">
                      <div className="flex items-start gap-4">
                        <div>
                          <p className="text-md font-semibold text-white">
                            {official.name}
                          </p>
                          <p className="text-gray-300">{official.position}</p>
                          {official.department && (
                            <p className="text-gray-300">
                              {official.department}
                            </p>
                          )}
                          {official.role && (
                            <p className="text-gray-300">
                              {official.role}{" "}
                              {official.committee && (
                                <span>{official.committee}</span>
                              )}
                            </p>
                          )}
                          <p className="text-blue-400 font-medium">
                            {official.organization}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-gray-200 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Phone className="w-4 h-4 text-blue-400" />
                        <span className="font-medium text-blue-400">
                          {official.contact}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">
            Contact Information
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-gray-300 text-md">
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                Office Address
              </h4>
              <p>
                Bihar Heritage Development Society <br />
                Department of Art, Culture & Youth <br />
                Government of Bihar <br />
                Patna, Bihar
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                General Enquiries
              </h4>
              <p>
                For queries, contact any key functionary or visit our office
                during working hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
