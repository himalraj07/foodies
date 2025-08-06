import Logo from "../assets/Logo.png";
import Search from "./Search";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import useMobile from "../hooks/useMobile";
import { BsCart4 } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const [isMobile] = useMobile();
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";
  const navigate = useNavigate();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const redirectToLoginPage = () => {
    navigate("/login");
  };

  return (
    <header className="h-auto shadow-xl sticky top-0 z-50 bg-gradient-to-br from-green-100 via-white to-green-200 backdrop-blur-md">
      {/* Top Bar */}
      <div className="w-full bg-gradient-to-r from-green-700 to-green-500 text-white text-xs py-1 px-2 flex justify-between items-center">
        <span className="animate-pulse flex items-center gap-1">
          <span className="text-lg animate-spin-slow">🍽️</span>
          <span>Welcome to Foodies! Enjoy exclusive deals today!</span>
        </span>
        <span className="hidden md:inline">
          Contact:{" "}
          <a href="mailto:support@foodies.com" className="underline hover:text-yellow-200 transition">
            support@foodies.com
          </a>
        </span>
      </div>

      {/* Main Header */}
      {!(isSearchPage && isMobile) && (
        <div className="container mx-auto flex items-center px-2 justify-between py-3 relative">
          {/* Logo & Menu */}
          <div className="flex items-center gap-2">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-full hover:bg-green-200 transition-colors"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Open menu"
            >
              <FiMenu size={28} />
            </button>
            <Link to={"/"} className="flex items-center group">
              <span className="relative">
                <img
                  src={Logo}
                  width={160}
                  height={60}
                  alt="Logo"
                  className="hidden lg:block transition-transform duration-300 group-hover:scale-110 drop-shadow-xl rounded-2xl border-4 border-green-200 shadow-lg"
                />
                <img
                  src={Logo}
                  width={90}
                  height={50}
                  alt="Logo"
                  className="lg:hidden transition-transform duration-300 group-hover:scale-110 drop-shadow-md rounded-xl border-2 border-green-100"
                />
                {/* Logo Glow Effect */}
                <span className="absolute inset-0 rounded-2xl pointer-events-none animate-logo-glow" />
              </span>
            </Link>
          </div>

          {/* Search */}
          <div className="hidden lg:flex flex-1 mx-8">
            <Search />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* User icon (mobile only) */}
            <button
              className="text-green-700 bg-green-100 rounded-full p-2 shadow-md lg:hidden hover:bg-green-200 transition-colors duration-200"
              aria-label="User"
            >
              <FaRegCircleUser size={28} />
            </button>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-8">
              <button
                onClick={redirectToLoginPage}
                className="cursor-pointer text-lg px-5 py-2 rounded-full font-semibold text-green-800 bg-white border border-green-200 hover:bg-green-100 transition-all duration-200 shadow-md hover:scale-105"
              >
                Login
              </button>
              <button className="flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 cursor-pointer px-6 py-3 rounded-full text-white shadow-xl transition-all duration-200 relative group hover:scale-105">
                <div className="animate-bounce">
                  <BsCart4 size={26} />
                </div>
                <div className="font-semibold tracking-wide">
                  <p>My Cart</p>
                </div>
                {/* Cart badge */}
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 shadow-lg group-hover:scale-110 transition-transform border-2 border-white">
                  2
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Drawer */}
          {mobileMenuOpen && (
            <div className="absolute top-16 left-0 w-3/4 max-w-xs bg-white shadow-2xl rounded-r-2xl p-6 z-50 flex flex-col gap-6 animate-slide-in border-l-4 border-green-200">
              <button
                onClick={redirectToLoginPage}
                className="w-full text-left text-green-800 font-semibold py-2 px-4 rounded hover:bg-green-50 transition flex items-center gap-2"
              >
                <FaRegCircleUser size={22} />
                Login
              </button>
              <Link
                to="/cart"
                className="flex items-center gap-2 text-green-700 font-semibold py-2 px-4 rounded hover:bg-green-50 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                <BsCart4 size={22} />
                My Cart
                <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-0.5 border border-white">2</span>
              </Link>
              <button
                className="flex items-center gap-2 text-green-700 font-semibold py-2 px-4 rounded hover:bg-green-50 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaRegCircleUser size={22} />
                Profile
              </button>
            </div>
          )}
        </div>
      )}

      {/* Mobile Search */}
      <div className="container mx-auto px-2 lg:hidden mt-2">
        <Search />
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes logo-glow {
            0%, 100% { box-shadow: 0 0 0px 0 #34d39944; }
            50% { box-shadow: 0 0 32px 8px #34d39966; }
          }
          .animate-logo-glow {
            animation: logo-glow 2.5s infinite;
          }
          @keyframes spin-slow {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          .animate-spin-slow {
            animation: spin-slow 6s linear infinite;
          }
          @keyframes slide-in {
            0% { transform: translateX(-100%);}
            100% { transform: translateX(0);}
          }
          .animate-slide-in {
            animation: slide-in 0.3s cubic-bezier(.4,2,.6,1) both;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
