import React from "react";
import { Facebook, Youtube, Send, Phone, MapPin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Footer1 = () => {
  return (
    <div className="bg-gradient-to-br from-[#fbeec1] via-[#f7d9c4] to-[#f3c6c6] text-gray-800 py-12 px-4 sm:px-10 md:px-20 border-t border-yellow-900">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Navigation */}
        <div>
          <h3 className="text-xl font-bold text-pink-700 mb-4 relative">
            Navigation
            <div className="w-10 h-[2px] bg-pink-700 absolute left-0 -bottom-1"></div>
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-pink-600 transition-all duration-300">Terms & Conditions</li>
            <li className="hover:text-pink-600 transition-all duration-300">Copyright Policy</li>
          </ul>
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-pink-700 mb-2 relative">
              Connect Online
              <div className="w-10 h-[2px] bg-pink-700 absolute left-0 -bottom-1"></div>
            </h4>
            <div className="flex gap-4 mt-3">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-blue-800 hover:bg-blue-900 rounded-full text-white transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-black hover:bg-gray-800 rounded-full text-white transition-all duration-300"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-full text-white transition-all duration-300"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-pink-700 mb-4 relative">
            Contact Us
            <div className="w-10 h-[2px] bg-pink-700 absolute left-0 -bottom-1"></div>
          </h3>
          <div className="space-y-5 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="text-pink-700" size={18} />
              <span>
                North of Patna Museum, Off Buddha Marg, Patna – 800001
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-pink-700" size={18} />
              <span>0612-2508445</span>
            </div>
            <div className="flex items-center gap-3">
              <Send className="text-pink-700" size={18} />
              <span>heritageofbihar@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div>
          <h3 className="text-xl font-bold text-pink-700 mb-4 relative">
            Quick Navigation
            <div className="w-10 h-[2px] bg-pink-700 absolute left-0 -bottom-1"></div>
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-pink-600 transition-all duration-300">Publication</li>
            <li className="hover:text-pink-600 transition-all duration-300">Photo Gallery</li>
            <li className="hover:text-pink-600 transition-all duration-300">Events</li>
            <li className="hover:text-pink-600 transition-all duration-300">News</li>
            <li className="hover:text-pink-600 transition-all duration-300">Tender</li>
            <li className="hover:text-pink-600 transition-all duration-300">Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
