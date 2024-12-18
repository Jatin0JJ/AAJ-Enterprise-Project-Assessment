import React from "react";
import nextEducation from "../assets/next-education.png";
import khaitan from "../assets/khaitan.png";
import talkingSox from "../assets/talking-sox.png";
import verde from "../assets/verde.png";
import synergy from "../assets/synergy.png";
import fruitnroot from "../assets/fruitnroot.png"
import tynor from "../assets/tynor.png";

const PartnersSection = () => {
  return (
    <section className="text-center pb-20 py-8 px-4">
      {/* Header */}
      <h2 className="text-3xl font-bold text-[#272727] mb-2">
        Logistics Partner for Exponential Growth
      </h2>
      <p className="text-[#414042] mb-8 text-md font-bold">
        Trusted by top brands and small businesses alike
      </p>

      {/* Grid Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0 max-w-5xl mx-auto">
        {/* Partner 1 */}
        <div className="flex justify-center items-center border border-gray-300 p-10">
          <img
            src={nextEducation}
            alt="Next Education"
            className=" object-contain"
          />
        </div>
        {/* Partner 2 */}
        <div className="flex justify-center items-center border border-gray-300 p-10">
          <img
            src={khaitan}
            alt="Khaitan"
            className="max-h-16 object-contain"
          />
        </div>
        {/* Partner 3 */}
        <div className="flex justify-center items-center border border-gray-300 p-10">
          <img
            src={talkingSox}
            alt="Talking Sox"
            className="max-h-16 object-contain"
          />
        </div>
        {/* Partner 4 */}
        <div className="flex justify-center items-center border border-gray-300 p-10">
          <img
            src={verde}
            alt="Verde"
            className="max-h-16 object-contain"
          />
        </div>
        {/* Partner 5 */}
        <div className="flex justify-center items-center border border-gray-300 p-10">
          <img
            src={synergy}
            alt="Synergy"
            className="max-h-16 object-contain"
          />
        </div>
        {/* Partner 6 */}
        <div className="flex justify-center items-center border border-gray-300 p-10">
          <img
            src={fruitnroot}
            alt="Fruit'n'Root"
            className="max-h-16 object-contain"
          />
        </div>
        {/* Partner 7 */}
        <div className="flex justify-center items-center border border-gray-300 p-10">
          <img
            src={tynor}
            alt="Tynor"
            className="max-h-16 object-contain"
          />
        </div>
        <div className="flex justify-center items-center border border-gray-300 p-10">
         
        
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
