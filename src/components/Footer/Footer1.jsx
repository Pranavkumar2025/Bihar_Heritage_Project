import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLocationArrow,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Make sure this import is present


import FooterBack from "../../assets/UniqueBiharImg/RohtasFort.webp";

const Footer1 = () => {
  return (
    <footer className="relative bg-black text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${FooterBack})`,
          opacity: 0.4,
        }}
      ></div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
        {/* About */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-md leading-relaxed text-white/90">
            The Bihar Heritage Development Society (BHDS) is an initiative under
            the Department of Art, Culture & Youth, Government of Bihar.
            Established to preserve, promote, and revitalize the rich cultural
            heritage of Bihar, BHDS works as a nodal body to plan, implement,
            and coordinate heritage-related projects across the state.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Important Links</h2>
          <ul className="space-y-3 text-white/90">
            {[
              { name: "Home", path: "/" },
              { name: "Publication", path: "/publication" },
              { name: "Photo Gallery", path: "/gallery" },
              { name: "News", path: "/news" },
              { name: "Tender", path: "/tender" },
              { name: "Contact Us", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="hover:text-red-500 cursor-pointer border-b border-white/30 pb-1 font-medium transition block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <ul className="space-y-4 text-white/90 text-sm">
            <li className="flex items-start gap-2 hover:text-red-400 transition">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                North of Patna Museum, Off Buddha Marg, Patna – 800001
              </span>
            </li>
            <li className="flex items-center gap-2 hover:text-red-400 transition">
              <FaPhoneAlt />
              <span>0612-2508445</span>
            </li>
            <li className="flex items-center gap-2 hover:text-red-400 transition">
              <FaEnvelope />
              <span>heritageofbihar@gmail.com</span>
            </li>
            <li className="flex items-center gap-2 text-blue-400 hover:text-blue-600 transition">
              <FaLocationArrow />
              <a
                href="https://www.google.com/maps/place/Vikas+Bhawan/@25.6056047,85.1160926,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed5822abfea4b3:0x294c847495e62f9d!8m2!3d25.6056047!4d85.1160926!16s%2Fg%2F1xgrlb_2?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Get Location
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="relative z-10 bg-black/70 border-t border-white/20 px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-white/80">
          {/* Social Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow us</h3>
            <div className="flex space-x-4 text-2xl">
              <a href="#" className="hover:text-blue-400 transition">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-pink-400 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-sky-400 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-red-500 transition">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-center md:text-right mt-2 md:mt-0">
            © {new Date().getFullYear()} Bihar Heritage Development Society. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
