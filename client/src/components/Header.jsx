import React from "react";
import Logo from "../assets/Logo.png";
import Search from "./Search";

const Header = () => {
  return (
    <header className="h-20 shadow-md sticky top-0">
      <div className="container mx-auto flex items-center h-full px-2 justify-between">
        {/* logo */}
        <div className="h-full">
          <div className="h-full  flex justify-center items-center">
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
          </div>
        </div>

        {/* Search */}
        <div>
          <Search />
        </div>

        {/* Login and my */}
        <div>Login and my cart</div>
      </div>
    </header>
  );
};

export default Header;
