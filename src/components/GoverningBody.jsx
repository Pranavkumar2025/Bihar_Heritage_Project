import React from 'react';
import NavBarNew from './Header/Header2'; // Corrected path, assuming NavBarNew is Header2
import Footer from './Footer/Footer1';     // Corrected path, assuming Footer is Footer1
import GoverningBodyCard from './governingBodyPageCard'; // Corrected import to match filename

const governingBodyMembers = [
  {
    id: 1,
    name: "Shri Nitish Kumar",
    title: "Chief Minister",
    imageUrl: "https://cm.bihar.gov.in/wp-content/uploads/2023/01/CM-Nitish-kumar-1.png",
  },
  {
    id: 2,
    name: "Shri Rajendra Arlekar",
    title: "Governor",
    imageUrl: "https://governor.bih.nic.in/wp-content/uploads/2023/02/gobernor-img.jpg",
  },
  {
    id: 3,
    name: "Shri Tejashwi Yadav",
    title: "Deputy Chief Minister",
    imageUrl: "https://vidhansabha.bih.nic.in/images/09Sri%20Tejashwi%20Prasad%20Yadav.jpg",
  },
  // Add more members as needed, e.g.:
  // {
  //   id: 4,
  //   name: "Another Official",
  //   title: "Their Title",
  //   imageUrl: "path/to/their/photo.jpg",
  // },
];

const GoverningBodyPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBarNew />
      <main className="flex-grow">
        <div className="text-center px-4 pt-24 pb-12 md:pt-32 md:pb-16"> {/* Added padding top similar to ContactUs */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#303462]">
            Our Governing Body
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 pb-16">
          {governingBodyMembers.map((member) => (
            <GoverningBodyCard
              key={member.id}
              name={member.name}
              title={member.title}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GoverningBodyPage;