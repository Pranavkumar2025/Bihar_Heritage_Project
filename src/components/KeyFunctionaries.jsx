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
    <div className="min-h-screen bg-gradient-to-br from-slate-600 via-slate-400 to-slate-200 py-12">
      {/* Page Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white uppercase tracking-wide mt-12">
          Key Functionaries
        </h2>
        <div className="mt-2 w-24 h-1 bg-orange-400 mx-auto rounded-full" />
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto px-4">
          Officials responsible for guiding the Bihar Heritage Development
          Society's operations and preserving Bihar’s cultural legacy.
        </p>
      </div>

      {/* Officials Table */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-orange-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-orange-100 text-left text-sm text-gray-700 font-semibold uppercase">
                <tr>
                  <th className="px-6 py-4">Officials</th>
                  <th className="px-6 py-4 text-right">Contact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-100 text-sm">
                {keyOfficials.map((official, index) => (
                  <tr
                    key={index}
                    className={`transition duration-150 ${
                      index % 2 === 0 ? "bg-white" : "bg-orange-50"
                    } hover:bg-orange-100`}
                  >
                    <td className="px-6 py-5 text-gray-800 border-r border-orange-100">
                      <div className="flex items-start gap-4">
                        <img
                          src={profileImg}
                          alt="Profile"
                          className="w-10 h-10 rounded-full object-cover border border-gray-300"
                        />
                        <div>
                          <p className="text-md font-semibold text-gray-900">
                            {official.name}
                          </p>
                          <p>{official.position}</p>
                          {official.department && <p>{official.department}</p>}
                          {official.role && (
                            <p>
                              {official.role}{" "}
                              {official.committee && (
                                <span>{official.committee}</span>
                              )}
                            </p>
                          )}
                          <p className="text-orange-600 font-medium">
                            {official.organization}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-gray-800 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Phone className="w-4 h-4 text-orange-500" />
                        <span className="font-medium text-orange-700">
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
        <div className="bg-white border border-orange-100 rounded-xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Contact Information
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 text-md">
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-orange-600" />
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
                <Mail className="w-5 h-5 mr-2 text-orange-600" />
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
