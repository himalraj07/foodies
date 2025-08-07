import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-tr from-orange-100 via-white to-orange-200 border-t-2 border-orange-300 shadow-2xl mt-12 pt-2">
      {/* Decorative Top Wave */}
      <div className="w-full overflow-hidden leading-none -mt-1">
        <svg
          viewBox="0 0 1200 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 md:h-8"
        >
          <path
            d="M0 0C150 60 350 60 600 0C850 -60 1050 -60 1200 0V60H0V0Z"
            fill="#FDBA74"
            fillOpacity="0.25"
          />
        </svg>
      </div>
      <div className="container mx-auto px-2 xs:px-1 py-4 xs:py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 xs:gap-2 text-xs">
        {/* Brand & Slogan */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-xl xs:text-base md:text-2xl font-extrabold text-orange-600 tracking-widest drop-shadow-lg">
              Foodies
            </span>
            <span className="bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-semibold shadow animate-bounce">
              Fresh!
            </span>
          </div>
          <p className="text-gray-600 text-[11px] xs:text-[10px] md:text-sm italic mb-1">
            Delivering happiness to your doorstep.
          </p>
          <div className="flex items-center gap-1 text-gray-500 text-[11px] xs:text-[10px]">
            <FaPhoneAlt className="text-orange-400" /> <span>+1 234 567 890</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500 text-[11px] xs:text-[10px]">
            <FaEnvelope className="text-orange-400" /> <span>support@foodies.com</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500 text-[11px] xs:text-[10px]">
            <FaMapMarkerAlt className="text-orange-400" /> <span>123 Foodies Ave, Food City</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <h3 className="text-orange-700 font-bold mb-1 text-xs xs:text-[11px]">Quick Links</h3>
          <div className="flex flex-col gap-0.5 text-[11px] xs:text-[10px]">
            <a href="/" className="hover:text-orange-600 transition-colors">Home</a>
            <a href="/menu" className="hover:text-orange-600 transition-colors">Menu</a>
            <a href="/about" className="hover:text-orange-600 transition-colors">About Us</a>
            <a href="/contact" className="hover:text-orange-600 transition-colors">Contact</a>
            <a href="/faq" className="hover:text-orange-600 transition-colors">FAQ</a>
            <a href="/careers" className="hover:text-orange-600 transition-colors">Careers</a>
            <a href="/blog" className="hover:text-orange-600 transition-colors">Blog</a>
          </div>
        </div>

        {/* Customer Service */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <h3 className="text-orange-700 font-bold mb-1 text-xs xs:text-[11px]">Customer Service</h3>
          <div className="flex flex-col gap-0.5 text-[11px] xs:text-[10px]">
            <a href="/account" className="hover:text-orange-600 transition-colors">My Account</a>
            <a href="/orders" className="hover:text-orange-600 transition-colors">Order Tracking</a>
            <a href="/privacy" className="hover:text-orange-600 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-orange-600 transition-colors">Terms & Conditions</a>
            <a href="/support" className="hover:text-orange-600 transition-colors">Support</a>
          </div>
        </div>

        {/* Social & Apps */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <h3 className="text-orange-700 font-bold mb-1 text-xs xs:text-[11px]">Connect & Apps</h3>
          <div className="flex items-center gap-1 mb-1 flex-wrap justify-center sm:justify-start">
            <a
              href="https://www.facebook.com/"
              className="transition-all duration-200 text-gray-500 hover:text-blue-600 bg-white rounded-full p-1 shadow hover:scale-110 border border-orange-100"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={13} />
            </a>
            <a
              href="https://www.instagram.com/"
              className="transition-all duration-200 text-gray-500 hover:text-pink-500 bg-white rounded-full p-1 shadow hover:scale-110 border border-orange-100"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={13} />
            </a>
            <a
              href="https://www.linkedin.com/"
              className="transition-all duration-200 text-gray-500 hover:text-blue-800 bg-white rounded-full p-1 shadow hover:scale-110 border border-orange-100"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={13} />
            </a>
            <a
              href="https://twitter.com/"
              className="transition-all duration-200 text-gray-500 hover:text-sky-500 bg-white rounded-full p-1 shadow hover:scale-110 border border-orange-100"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter size={13} />
            </a>
            <a
              href="https://youtube.com/"
              className="transition-all duration-200 text-gray-500 hover:text-red-600 bg-white rounded-full p-1 shadow hover:scale-110 border border-orange-100"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube size={13} />
            </a>
          </div>
          <div className="flex flex-col gap-1 w-full max-w-[140px] sm:max-w-none mx-auto">
            <a
              href="https://apps.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 bg-black text-white rounded-lg px-1.5 py-0.5 hover:bg-orange-600 transition-colors shadow text-[11px] xs:text-[10px]"
            >
              <FaApple size={13} /> <span className="font-semibold">App Store</span>
            </a>
            <a
              href="https://play.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 bg-green-600 text-white rounded-lg px-1.5 py-0.5 hover:bg-orange-600 transition-colors shadow text-[11px] xs:text-[10px]"
            >
              <FaGooglePlay size={13} /> <span className="font-semibold">Google Play</span>
            </a>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-orange-200 mt-4 py-2 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-1 xs:px-0.5 flex flex-col md:flex-row justify-between items-center gap-1 text-[11px] xs:text-[10px] text-gray-500 text-center">
          <span>
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-bold text-orange-600">Foodies</span>. All rights reserved.
          </span>
          <span>
            Designed with <span className="text-orange-500">♥</span> by Foodies Team
          </span>
        </div>
      </div>
      {/* Decorative Bottom Wave */}
      <div className="w-full overflow-hidden leading-none -mb-1">
        <svg
          viewBox="0 0 1200 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-3 md:h-6"
        >
          <path
            d="M0 0C150 60 350 60 600 0C850 -60 1050 -60 1200 0V60H0V0Z"
            fill="#FDBA74"
            fillOpacity="0.25"
          />
        </svg>
      </div>
      {/* Responsive tweaks */}
      <style>{`
        @media (max-width: 640px) {
          .container {
            padding-left: 0.25rem !important;
            padding-right: 0.25rem !important;
          }
          .grid {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
          .flex-col > * {
            margin-bottom: 0.25rem;
          }
          .text-xl, .text-2xl, .text-3xl {
            font-size: 1rem !important;
          }
          .text-xs, .text-sm, .text-[11px], .text-[10px] {
            font-size: 10px !important;
          }
          .p-2, .px-2, .py-2 {
            padding: 0.25rem !important;
          }
          .rounded-lg, .rounded-full {
            border-radius: 0.375rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
