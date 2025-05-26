import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";

const iconVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.15, transition: { type: "spring", stiffness: 300 } },
};

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 px-5 py-20 md:px-24 text-gray-100">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-100">
          Contact Us
        </h1>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="h-[2px] bg-gray-600 w-20 mx-auto mt-3 rounded-full"
        />
      </motion.div>

      {/* Grid Section */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-800 p-8 rounded-xl shadow-md border border-gray-700"
        >
          <h2 className="text-2xl font-semibold text-gray-100 mb-6">
            Bihar Heritage Development Society
          </h2>
          <div className="space-y-4 text-gray-300 text-[17px] leading-relaxed">
            <p className="flex items-start gap-3">
              <motion.span
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
              >
                <FaMapMarkedAlt className="text-gray-400 mt-1" />
              </motion.span>
              North of Patna Museum, Off Buddha Marg, Patna – 800001
            </p>
            <p className="flex items-center gap-3">
              <motion.span
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
              >
                <FaPhoneAlt className="text-gray-400" />
              </motion.span>
              91-9955058450, 0612-2508445
            </p>
            <p className="flex items-center gap-3">
              <motion.span
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
              >
                <FaEnvelope className="text-gray-400" />
              </motion.span>
              <a
                href="mailto:heritageofbihar@gmail.com"
                className="hover:underline text-gray-100"
              >
                heritageofbihar@gmail.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* Map Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="rounded-xl overflow-hidden shadow-md border border-gray-700"
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

      {/* Optional Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl shadow-md border border-gray-700"
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-100">
          Send Us a Message
        </h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-600 bg-gray-900 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-600 bg-gray-900 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-600 bg-gray-900 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 transition"
          >
            Send
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
