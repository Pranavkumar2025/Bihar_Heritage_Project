import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";

const smoothHorizontal = {
  duration: 1,
  ease: [0.25, 1, 0.5, 1],
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#eeeeff] px-5 py-16 md:px-24">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 relative inline-block mt-4">
          Contact Us
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="block h-[3px] bg-pink-500 mt-2 rounded-full"
          ></motion.span>
        </h1>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={smoothHorizontal}
          className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Bihar Heritage Development Society
          </h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <p className="flex items-start gap-3">
              <FaMapMarkedAlt className="text-pink-500 mt-1" />
              North of Patna Museum, Off Buddha Marg, Patna – 800001
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-pink-500" />
              91-9955058450, 0612-2508445
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-pink-500" />
              <a
                href="mailto:heritageofbihar@gmail.com"
                className="hover:text-orange-600 transition"
              >
                heritageofbihar@gmail.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* Map Box */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...smoothHorizontal, delay: 0.1 }}
          className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300"
        >
          <iframe
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.9424379966145!2d85.13686221498036!3d25.609962983702993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5858f10ac0d3%3A0x1cfdbcf0028cb5b3!2sBihar%20Heritage%20Development%20Society!5e0!3m2!1sen!2sin!4v1681649926554!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Bihar Heritage Development Society"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
