import React from "react";
import { Facebook, Youtube, Send, Phone, MapPin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Footer1 = () => {
  return (
    <footer className="bg-gradient-to-br from-[#e0e7ff] via-[#c7d2fe] to-[#e0f2fe] text-gray-900 py-14 px-6 sm:px-12 md:px-24 border-t border-blue-200 shadow-inner">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Navigation */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 relative">
            Navigation
            <span className="block w-12 h-[2px] bg-blue-700 mt-1"></span>
          </h3>
          <ul className="space-y-3 text-[15px] font-medium">
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Terms & Conditions</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Copyright Policy</li>
          </ul>

          <div className="mt-8">
            <h4 className="text-xl font-semibold text-blue-700 mb-3 relative">
              Connect Online
              <span className="block w-12 h-[2px] bg-blue-700 mt-1"></span>
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-blue-700 hover:bg-blue-800 rounded-full text-white transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-black hover:bg-gray-800 rounded-full text-white transition"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-full text-white transition"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 relative">
            Contact Us
            <span className="block w-12 h-[2px] bg-blue-700 mt-1"></span>
          </h3>
          <div className="space-y-5 text-[15px] font-medium">
            <div className="flex items-start gap-3">
              <MapPin className="text-blue-700" size={18} />
              <span>North of Patna Museum, Off Buddha Marg, Patna – 800001</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-blue-700" size={18} />
              <span>0612-2508445</span>
            </div>
            <div className="flex items-center gap-3">
              <Send className="text-blue-700" size={18} />
              <span>heritageofbihar@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 relative">
            Quick Navigation
            <span className="block w-12 h-[2px] bg-blue-700 mt-1"></span>
          </h3>
          <ul className="space-y-3 text-[15px] font-medium">
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Publication</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Photo Gallery</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Events</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">News</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Tender</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
