import React from "react";
import { BsFileEarmarkPdf } from "react-icons/bs";
// eslint-disable-next-line
import { motion } from "framer-motion";

// PDF Imports
import pdf1 from "../assets/pdfs/Archaeological Atlas of Bihar.pdf";
import pdf2 from "../assets/pdfs/Bihar ki lok kathayien Angika, Vajjika maithli.pdf";
import pdf3 from "../assets/pdfs/Bihar ki lok kathayien Bhojpuri Magahi.pdf";
import pdf4 from "../assets/pdfs/Bihar me bhasahaon evam lipiyon ka vikas.pdf";
import pdf5 from "../assets/pdfs/SRI_PRATHAMASIVAPURA_MAHAVIHARA_Excavati.pdf";

const data = [
  {
    id: 1,
    title: "Archaeological Atlas of Bihar",
    description: "A detailed atlas showcasing archaeological richness of Bihar.",
    pdfUrl: pdf1,
  },
  {
    id: 2,
    title: "लोक कथाएँ: अंगिका, वज्जिका, मैथिली",
    description: "Collection of folk tales in Angika, Vajjika and Maithili.",
    pdfUrl: pdf2,
  },
  {
    id: 3,
    title: "लोक कथाएँ: भोजपुरी, मगही",
    description: "Folk tales from Bhojpuri and Magahi cultural regions.",
    pdfUrl: pdf3,
  },
  {
    id: 4,
    title: "बिहार में भाषाओं एवं लिपियों का विकास",
    description: "Development of languages and scripts in Bihar.",
    pdfUrl: pdf4,
  },
  {
    id: 5,
    title: "Prathama Sivapura Mahavihara",
    description: "Excavation report of Prathama Sivapura Mahavihara.",
    pdfUrl: pdf5,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const Publication = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 mt-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
          Publications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 30px rgba(255, 255, 255, 0.1)",
              }}
              className="bg-gray-800 rounded-2xl border border-gray-700 shadow-lg p-6 flex flex-col items-center transition duration-300"
            >
              <BsFileEarmarkPdf className="text-red-500 mb-4" size={70} />

              <h3 className="text-lg sm:text-xl font-semibold text-center mb-2 px-2 text-white">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 text-center mb-6 px-2">
                {item.description}
              </p>

              <div className="mt-auto flex justify-center gap-6 text-sm font-medium px-2 w-full max-w-[200px]">
                <a
                  href={item.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline"
                >
                  View
                </a>
                <a
                  href={item.pdfUrl}
                  download
                  className="text-green-400 hover:text-green-300 hover:underline"
                >
                  Download
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publication;
