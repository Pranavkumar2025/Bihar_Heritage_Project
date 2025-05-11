import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";

const Header1 = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()} ${date.toLocaleTimeString()}`;
  };

  return (
    <div className="bg-[#334155] text-white text-xs sm:text-sm px-4 py-1.5 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 w-full">
        
        {/* 🕒 Date & Time */}
        <div className="whitespace-nowrap font-medium">
          {formatDate(currentTime)}
        </div>

        {/* 🔗 Links + Search */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
          <div className="flex gap-3 flex-wrap">
            <a href="#" className="hover:underline font-medium">HOME</a>
            <a href="#" className="hover:underline font-medium">RTI</a>
            <a href="#" className="hover:underline font-medium">CONTACT US</a>
          </div>

          {/* 🔍 Search box */}
          <div className="flex items-center border border-white rounded overflow-hidden bg-white w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 text-black text-xs w-full sm:w-40 focus:outline-none"
            />
            <button className="p-2 bg-[#334155] hover:bg-[#2c3e50] text-white">
              <Search size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
