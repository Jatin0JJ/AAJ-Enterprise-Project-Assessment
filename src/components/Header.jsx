import React from "react";
import logo from "../assets/logo.png";
import { CiLocationOn } from "react-icons/ci";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-5 py-3 bg-white border-b border-gray-200 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="AAJ Swift Logo" className="w-[151px] h-[30px]" />
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex gap-16 text-gray-800 font-medium">
        <a href="#" className="cursor-pointer text-[20px]">Company</a>
        <a href="#" className="cursor-pointer text-[20px]">Calculate Shipping Cost</a>
        <a href="#" className="cursor-pointer text-[20px]">Blogs</a>
        <a href="#" className="cursor-pointer text-[20px]">Contact Us</a>
      </nav>

      {/* Track Shipment & Login */}
      <div className="flex items-center gap-4">
      
        <a href="#" className="flex text-[#C2202B] underline pr-4 font-bold"><span className="font-bold"><CiLocationOn className="text-[#C2202B] text-lg font-bold"/></span>Track Shipment</a>
        <button
          className="bg-[#C2202B] text-white px-12 py-2 rounded-md font-bold "
        >
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
