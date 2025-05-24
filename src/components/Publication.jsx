import React from "react";
import { BsFileEarmarkPdf } from "react-icons/bs";
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
    <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12 mt-8">
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
              whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(255, 77, 90, 0.3)" }}
              className="bg-white rounded-xl border border-gray-200 shadow-md p-6 flex flex-col items-center cursor-pointer transition-shadow duration-300"
            >
              <BsFileEarmarkPdf className="text-red-600 mb-4" size={70} />

              <h3 className="text-lg sm:text-xl font-semibold text-center text-gray-800 mb-2 px-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 text-center mb-6 px-2">
                {item.description}
              </p>

              <div className="mt-auto flex justify-center gap-6 text-sm font-medium px-2 w-full max-w-[200px]">
                <a
                  href={item.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View
                </a>
                <a
                  href={item.pdfUrl}
                  download
                  className="text-green-600 hover:underline"
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
