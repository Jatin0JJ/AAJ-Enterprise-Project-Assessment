import React from "react";
import layer1 from "../assets/Layer_1.png"
import layer2 from "../assets/Layer2.png"
import layer3 from "../assets/Layer3.png"

const ContactSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between px-10 py-12 gap-8 ml-7">
      {/* Contact Info */}
      <div className="space-y-6 md:w-1/2">
        <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
        <div className="max-w-96 pb-8 border-b border-[#D9D9D9]">
        <p className="text-[#414042] font-semibold">
          Let's Empower Your Supply Chain with Seamless and Reliable Logistics Solutions
        </p>
        </div>
        <div className="px-2">
          <div className="flex my-10">
            <img className="object-contain" src={layer1} height="340px" width="56px"/>
            <p className="ml-10 max-w-52 text-[#414042] font-semibold">
            Get top-rated transporters at unbeatable price
            </p>
          </div>
          <div className="flex my-10">
          <img className="object-contain" src={layer3}/>
            <p className="ml-10 max-w-52 text-[#414042] font-semibold">
            95% Guaranteed on-time Delivery
            </p>
          </div>
          <div className="flex my-10">
          <img className="object-contain" src={layer2}/>
            <p className="ml-10 max-w-52 text-[#414042] font-semibold">
            Live Shipment Tracking and timely update
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="h-[588ox] w-[500px] bg-[#F8F2F2]">
      <div className="p-5 rounded-md shadow-md ">
      {/* Form Header */}
      <div className="text-center mb-6">
        <p className="text-lg font-medium text-gray-700">
          Fill the form and our sales representative will call you back within 24 hours
        </p>
      </div>

      {/* Form */}
      <form className="space-y-4 pb-10 ">
        {/* Name Input */}
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        {/* Phone Input */}
        <input
          type="tel"
          placeholder="Phone"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        {/* Dropdown */}
        <select
          className="w-full p-3 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          defaultValue="Contact Support"
          required
        >
          <option disabled>Contact Support</option>
          <option value="Sales Inquiry">Sales Inquiry</option>
          <option value="Technical Support">Technical Support</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>

        {/* Message Box */}
        <textarea
          rows="4"
          placeholder="Message"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
    </section>
  );
};

export default ContactSection;
