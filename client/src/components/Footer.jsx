import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-orange-200 via-white to-orange-100 border-t-2 border-orange-300 shadow-2xl mt-12">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row md:justify-between items-center gap-8">
        {/* Brand & Slogan */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl font-extrabold text-orange-600 tracking-widest drop-shadow-lg">
              Foodies
            </span>
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow">
              Fresh!
            </span>
          </div>
          <p className="text-gray-600 text-sm italic mb-2">
            Delivering happiness to your doorstep.
          </p>
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Foodies. All Rights Reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-orange-700 font-semibold mb-1">Quick Links</h3>
          <div className="flex gap-4 text-sm">
            <a href="/" className="hover:text-orange-600 transition-colors">Home</a>
            <a href="/menu" className="hover:text-orange-600 transition-colors">Menu</a>
            <a href="/about" className="hover:text-orange-600 transition-colors">About</a>
            <a href="/contact" className="hover:text-orange-600 transition-colors">Contact</a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-orange-700 font-semibold mb-1">Follow Us</h3>
          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com/Himalrajbhusal"
              className="transition-all duration-200 text-gray-500 hover:text-blue-600 bg-white rounded-full p-2 shadow-lg hover:scale-110 border border-orange-100"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://www.instagram.com/himalrajbhusal/"
              className="transition-all duration-200 text-gray-500 hover:text-pink-500 bg-white rounded-full p-2 shadow-lg hover:scale-110 border border-orange-100"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/himalraj07/"
              className="transition-all duration-200 text-gray-500 hover:text-blue-800 bg-white rounded-full p-2 shadow-lg hover:scale-110 border border-orange-100"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>
      {/* Decorative Wave */}
      <div className="w-full overflow-hidden leading-none -mb-1">
        <svg viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8">
          <path d="M0 0C150 60 350 60 600 0C850 -60 1050 -60 1200 0V60H0V0Z" fill="#FDBA74" fillOpacity="0.25"/>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
