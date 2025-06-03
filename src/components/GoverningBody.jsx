import {
  Building2,
  Users,
  Globe,
  Heart,
  BookOpen,
  Palette,
  Camera,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import profileImg from "../assets/heritage/profile.jpg";

// AboutUs component with theme matching GoverningBody
function AboutUs() {
  return (
    <div className="min-h-screen mt-10 bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Us
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-pink-500 mb-6">
            Bihar Heritage Development Society (BHDS)
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            The Bihar Heritage Development Society (BHDS) is an initiative under
            the Department of Art, Culture & Youth, Government of Bihar.
            Established to preserve, promote, and revitalize the rich cultural
            heritage of Bihar, BHDS works as a nodal body to plan, implement,
            and coordinate heritage-related projects across the state.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-pink-100 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We envision a Bihar where heritage is a source of identity,
                inspiration, and inclusive development. Through integrated
                efforts and sustainable heritage management, we aim to position
                Bihar as a global cultural tourism destination and encourage
                economic opportunities through heritage-linked livelihoods.
              </p>
            </div>
            <div className="relative">
              <div className="text-6xl md:text-8xl font-bold text-white-100 opacity-10 text-center">
                VISION
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4">
                  <Building2 className="w-8 h-8 text-pink-500" />
                  <Globe className="w-8 h-8 text-pink-400" />
                  <Heart className="w-8 h-8 text-pink-500" />
                  <Palette className="w-8 h-8 text-pink-400" />
                  <Camera className="w-8 h-8 text-pink-500" />
                  <MapPin className="w-8 h-8 text-pink-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-pink-100 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our mission is to protect, restore, and promote the diverse
                cultural heritage of Bihar, fostering a deep sense of pride and
                awareness among citizens. BHDS is committed to:
              </p>
              <ul className="space-y-4 text-gray-700">
                {[
                  "Undertaking conservation and restoration of heritage structures.",
                  "Documenting and preserving traditional knowledge, art forms, and practices.",
                  "Supporting local artisans and cultural practitioners.",
                  "Enhancing public participation in heritage awareness through educational and cultural programs.",
                  "Collaborating with national and international organizations for heritage development.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="text-6xl md:text-8xl font-bold text-white-100 opacity-10 text-center">
                MISSION
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4">
                  <BookOpen className="w-8 h-8 text-pink-500" />
                  <Users className="w-8 h-8 text-pink-400" />
                  <Building2 className="w-8 h-8 text-pink-500" />
                  <Palette className="w-8 h-8 text-pink-400" />
                  <Globe className="w-8 h-8 text-pink-500" />
                  <Heart className="w-8 h-8 text-pink-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Focus Areas Section */}
        <div className="bg-pink-100 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Our Focus Areas
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
              BHDS focuses on safeguarding Bihar's tangible and intangible
              cultural assets — from ancient monuments, archaeological sites,
              and historic architecture to traditional arts, crafts, folklore,
              and festivals. The society brings together experts, institutions,
              and communities to ensure that the legacy of Bihar's glorious past
              is conserved and celebrated for generations to come.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: <Building2 className="w-12 h-12 text-pink-500 mx-auto mb-3" />,
                  title: "Heritage Structures",
                  desc: "Conservation and restoration of monuments",
                },
                {
                  icon: <Palette className="w-12 h-12 text-pink-500 mx-auto mb-3" />,
                  title: "Traditional Arts",
                  desc: "Preserving art forms and crafts",
                },
                {
                  icon: <Users className="w-12 h-12 text-pink-500 mx-auto mb-3" />,
                  title: "Community Engagement",
                  desc: "Building heritage awareness",
                },
                {
                  icon: <Globe className="w-12 h-12 text-pink-500 mx-auto mb-3" />,
                  title: "Cultural Tourism",
                  desc: "Promoting Bihar globally",
                },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  {item.icon}
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// GoverningBody Component
export default function GoverningBody() {
  const governingBodyMembers = [
    { position: "Development Commissioner, Patna", role: "Chairman" },
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
    { position: "Four Experts nominated by the State Government", role: "Member" },
    {
      position: "Secretary, Art, Culture & Youth Department, Bihar",
      role: "Member Secretary",
    },
    { position: "Executive Director of the Society", role: "Member" },
  ];

  return (
    <>
      <AboutUs />
      <div className="bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Governing Body
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {governingBodyMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-md border border-gray-200 rounded-xl p-6"
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                  {member.role}
                </h4>
                <p className="text-sm text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
