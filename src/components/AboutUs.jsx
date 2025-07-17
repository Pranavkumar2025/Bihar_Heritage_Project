import { Building2, Users, Globe, Palette } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-500 via-slate-200 to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center mt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Us
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-200 mb-6">
            Bihar Heritage Development Society (BHDS)
          </h2>
          <p className="text-lg text-gray-100 max-w-4xl mx-auto leading-relaxed">
            Bihar Heritage Development Society was formed to preserve, protect,
            and promote the rich cultural and historical heritage of Bihar. The
            state is home to ancient sites, monuments, and traditions that
            reflect India's glorious past. The society aims to restore these
            assets and boost heritage-based tourism. It also works to raise
            awareness and involve communities in heritage conservation efforts.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-gray-300">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
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
              <div className="text-6xl md:text-8xl font-bold text-slate-300 opacity-60 text-center select-none">
                VISION
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-gray-300">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our mission is to protect, restore, and promote the diverse
                cultural heritage of Bihar, fostering a deep sense of pride and
                awareness among citizens. BHDS is committed to:
              </p>
              <ul className="space-y-3 text-gray-700 list-disc pl-5">
                {[
                  "Undertaking conservation and restoration of heritage structures.",
                  "Documenting and preserving traditional knowledge, art forms, and practices.",
                  "Supporting local artisans and cultural practitioners.",
                  "Enhancing public participation in heritage awareness through educational and cultural programs.",
                  "Collaborating with national and international organizations for heritage development.",
                ].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="text-6xl md:text-8xl font-bold text-slate-300 opacity-60 text-center select-none">
                MISSION
              </div>
            </div>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-gray-300">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Our Focus Areas
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              BHDS focuses on safeguarding Bihar's tangible and intangible
              cultural assets — from ancient monuments, archaeological sites,
              and historic architecture to traditional arts, crafts, folklore,
              and festivals.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: (
                    <Building2 className="w-10 h-10 text-sky-600 mx-auto mb-3" />
                  ),
                  title: "Heritage Structures",
                  desc: "Conservation and restoration of monuments",
                },
                {
                  icon: (
                    <Palette className="w-10 h-10 text-sky-600 mx-auto mb-3" />
                  ),
                  title: "Traditional Arts",
                  desc: "Preserving art forms and crafts",
                },
                {
                  icon: (
                    <Users className="w-10 h-10 text-sky-600 mx-auto mb-3" />
                  ),
                  title: "Community Engagement",
                  desc: "Building heritage awareness",
                },
                {
                  icon: (
                    <Globe className="w-10 h-10 text-sky-600 mx-auto mb-3" />
                  ),
                  title: "Cultural Tourism",
                  desc: "Promoting Bihar globally",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  {item.icon}
                  <h4 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h4>
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
