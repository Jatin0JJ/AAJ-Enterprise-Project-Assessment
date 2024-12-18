import React from 'react';
import logo from "../assets/logo.png"
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-white text-[#272727] text-sm pt-10 pb-6 px-10">
      <div className="container mx-auto px-8">
        {/* Logo and Description */}
        <div className="flex flex-wrap justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-2">
              {/* Logo */}
              <div className="flex items-center">
                <div className="px-2 py-1">
                  <img src={logo} className='h-10 mb-4'/>
                </div>
                <p className="text-[#272727] max-w-xs ml-11">
              Optimizing supply chains through warehousing and transportation services
            </p>
              </div>
            </div>
            
          </div>

          {/* Social Media */}
          <div className="flex space-x-6 items-center ">
            <a href="#" aria-label="LinkedIn" className='border border-2px border-[#C6BBBB] rounded-full p-3'>
              
              <FaLinkedinIn size="25px"/>
            </a>
            <a href="#" aria-label="LinkedIn" className='border border-2px border-[#C6BBBB] rounded-full p-3'>
              
              <FaInstagram size="25px"/>
            </a>
            <a href="#" aria-label="LinkedIn" className='border border-2px border-[#C6BBBB] rounded-full p-3'>
              
              <FaYoutube size="25px"/>
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-[#272727] pt-10 border-t border-[#BEBEBE]">
          <div>
            <h3 className="font-semibold mb-3 text-[17px]">Company</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Our Story</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Careers at AAJ</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-[17px]">Services</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">E Commerce Fulfillment</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Transport-AAJ Swift</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Returns Management</a></li>
              <li><a href="#" className="hover:underline">Value Added Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-[17px]">Resources</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Case Studies</a></li>
              <li><a href="#" className="hover:underline">Blogs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-[17px]">Support</h3>
            <ul>
              <li><a href="#" className="hover:underline">Track Your Order</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-[17px]">Transportation Network</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Transportation in Mumbai</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Transportation in Bangalore</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Transportation in Delhi</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Transportation in Hyderabad</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Transportation in Ghaziabad</a></li>
              <li><a href="#" className="hover:underline">Transportation in Sonipat NCR</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-[#272727] text-xs mt-8 text-center border-[#BEBEBE] border-t pt-4 flex justify-between">
          <p>&copy; 2024 AAJ Swift. All Rights Reserved</p>
          <p>ISO 9001: 2015, ISO 27001: 2013 Certified Company CIN: L63090DL2011PLC221234</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
