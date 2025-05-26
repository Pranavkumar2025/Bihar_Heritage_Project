import React from "react";
import heritageVideo from "../assets/Videos/BiharHeritage5.mp4";
import { motion } from "framer-motion";

const VideoSection = () => (
  <motion.div
    className="my-20 bg-white-blend "
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-8">
      Bihar’s Living Heritage
    </h2>
    <div className="relative w-full max-w-5xl mx-auto shadow-xl rounded-xl overflow-hidden">
      <video
        src={heritageVideo}
        controls
        autoPlay
        muted
        loop
        className="w-full h-auto object-cover"
        style={{ maxHeight: "600px" }}
      />
    </div>
  </motion.div>
);

export default VideoSection;
