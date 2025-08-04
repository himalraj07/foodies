import React from "react";
import Logo from "../assets/Logo.png";
import Search from "./Search";
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="h-24 lg:h-20 lg:shadow-md sticky top-0 bg-red-500 flex items-center flex-col justify-center gap-1">
      <div className="container mx-auto flex items-center  px-2 justify-between">
        {/* logo */}
        <div className="h-full">
          <Link to={"/"} className="h-full  flex justify-center items-center">
            <img
              src={Logo}
              width={200}
              height={60}
              alt="Logo"
              className="hidden lg:block"
            />
            <img
              src={Logo}
              width={120}
              height={60}
              alt="Logo"
              className="lg:hidden"
            />
          </Link>
        </div>

        {/* Search */}
        <div className="hidden lg:block">
          <Search />
        </div>

        {/* Login and my */}
        <div className="">
          <button className="text-neutral-600 lg:hidden">
            <FaRegCircleUser size={26} />
          </button>
          <div className="hidden lg:block">Login and my cart</div>
        </div>
      </div>
      <div className="container mx-auto px-2 lg:hidden">
        <Search />
      </div>
    </header>
  );
};

export default Header;
