import React from "react";
import Navbar from "../components/Header";
import ContactForm from "../components/ContactSection";
import Footer from "../components/Footer";

const ContactUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-center mb-6">
            Contact Us
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Let's Empower Your Supply Chain with Seamless and Reliable Logistics Solutions
          </p>

          {/* Contact Form */}
          <ContactForm />

          {/* Partner Logos */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Logistics Partner for Exponential Growth
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {["Next Education", "Khaitan", "Talking Sex", "Verde", "Synergy", "Fruitr'root", "Tynor"].map((logo) => (
                <div key={logo} className="border p-4 rounded shadow">
                  <p className="text-lg font-medium">{logo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUsPage;
