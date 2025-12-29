import React from "react";

// Default fallback image
const defaultProfileImg = "https://www.w3schools.com/howto/img_avatar.png";

const governingMembers = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/startup_bihar%2FOfficers%2FACS%20Industry.jpeg?alt=media&token=48a4ed7a-4f70-4113-b59b-de5ecb9aa6c3",
    name: "Mihir Kumar Singh, IAS",
    designation: "Director-cum-Chairman, BSFDFC",
    additional: "(Development Commissioner, Government of Bihar)",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/biharfilm%2Fhome_secy.jpeg?alt=media&token=2f9b010e-0fed-4627-949d-a4779308a995",
    name: "Shri Pranav Kumar, I.A.S",
    designation: "Managing Director",
    additional: "Secretary (Art, Culture & Youth Department)",
  },
  // Add more members as needed
];

const GoverningComponents = () => {
  return (
    <section className="bg-gray-100 py-15 px-6" id="GoverningBody">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-center text-gray-900 mb-4 uppercase">
          Cultural Heritage Leadership
        </h1>

        {/* Decorative line */}
        <div className="flex justify-center items-center mb-6">
          <div className="w-32 h-1 bg-yellow-600"></div>
          <div className="w-2 h-2 bg-yellow-600 rotate-45 mx-4"></div>
          <div className="w-32 h-1 bg-yellow-600"></div>
        </div>

        {/* Subtitle */}
        <p className="text-center text-gray-600 text-lg md:text-xl max-w-4xl mx-auto mb-16 font-medium italic">
          Leadership dedicated to preserving and promoting the rich cultural heritage of Bihar
        </p>

        {/* Centered Cards */}
        <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
          {governingMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 
                         w-80 flex flex-col items-center text-center border border-gray-200 
                         py-8 px-8 transform hover:-translate-y-1"
            >
              {/* Smaller, refined portrait */}
              <div className="relative mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-yellow-600 ring-offset-4 ring-offset-white shadow-xl">
                  <img
                    src={member.src || defaultProfileImg}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-2">
                {member.name}
              </h3>

              {/* Designation */}
              <p className="text-base md:text-lg font-medium text-gray-700 mb-2">
                {member.designation}
              </p>

              {/* Additional Role */}
              {member.additional && (
                <p className="text-sm text-gray-600 italic px-4">
                  {member.additional}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoverningComponents;