import React from "react";
import { MapPin, Heart, Users, Mail, Landmark } from "lucide-react";
import NalandaUniversityImg from "../assets/heritage/NalandaUniversity.jpg";
import PatliputraImg from "../assets/heritage/patliputraimg.jpg"; // Assuming Golghar is in Patna (Pataliputra)
import RohtasgarhFortImg from "../assets/heritage/rohtas.jpg";

const ExploreJoin = () => {
  return (
    <div id="explore-join-section" className="bg-gray-50 py-20 px-6 md:px-20">
      {/* Explore Sites Section */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-slate-800">
          Explore Heritage Sites
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Nalanda University",
              location: "Nalanda, Bihar",
              image: NalandaUniversityImg,
              description: "Ancient center of learning, a UNESCO World Heritage Site."
            },
            {
              title: "Golghar",
              location: "Patna, Bihar",
              image: PatliputraImg, // Using Patliputra image as placeholder for Golghar in Patna
              description: "A granary with a unique dome structure built in 1786."
            },
            {
              title: "Rohtasgarh Fort",
              location: "Rohtas, Bihar",
              image: RohtasgarhFortImg,
              description: "A grand fort nestled in the hills, rich in Mughal history."
            }
          ].map((site, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={site.image}
                alt={site.title}
                className="h-52 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">
                  {site.title}
                </h3>
                <p className="text-sm text-gray-500 flex items-center mb-3">
                  <MapPin className="w-4 h-4 mr-2" /> {site.location}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {site.description}
                </p>
                <a href="#" className="text-orange-500 font-medium hover:underline">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow"
          >
            View All Sites
          </a>
        </div>
      </section>

      {/* Join Our Mission Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-slate-800">
          Join Our Mission
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md">
            <Users className="w-8 h-8 mx-auto text-orange-500 mb-3" />
            <h4 className="text-lg font-semibold mb-1">Become a Volunteer</h4>
            <p className="text-sm text-gray-600">
              Help preserve and promote heritage by contributing time and skills.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md">
            <Landmark className="w-8 h-8 mx-auto text-orange-500 mb-3" />
            <h4 className="text-lg font-semibold mb-1">Report a Site</h4>
            <p className="text-sm text-gray-600">
              Share information about neglected or unknown heritage sites.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md">
            <Heart className="w-8 h-8 mx-auto text-orange-500 mb-3" />
            <h4 className="text-lg font-semibold mb-1">Support the Cause</h4>
            <p className="text-sm text-gray-600">
              Help us with funding, resources, or spreading awareness.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md">
            <Mail className="w-8 h-8 mx-auto text-orange-500 mb-3" />
            <h4 className="text-lg font-semibold mb-1">Subscribe for Updates</h4>
            <p className="text-sm text-gray-600">
              Stay informed about new initiatives, events, and stories.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-block bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-full text-lg font-medium shadow"
          >
            Become a Volunteer
          </a>
        </div>
      </section>
    </div>
  );
};

export default ExploreJoin;
