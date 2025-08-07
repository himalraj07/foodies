import React from "react";
import UserMenu from "../components/UserMenu";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto p-3 grid lg:grid-cols-[250px_1fr]">
        {/* Left part for menu */}
        <div className="py-4 sticky top-24 overflow-y-auto hidden lg:block border-r border-gray-200">
          <UserMenu />
        </div>

        {/* Right part for content */}
        <div className="bg-white p-4 rounded-lg shadow-md min-h-[70vh]">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
