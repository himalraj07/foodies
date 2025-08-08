import React from "react";
import { useSelector } from "react-redux";
import isAdmin from "../utils/isAdmin";

const AdminPermision = ({ children }) => {
  const user = useSelector((state) => state.user);

  if (isAdmin(user.role)) return children;

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-red-100 via-white to-red-200 rounded-3xl shadow-2xl p-10 mx-auto max-w-xl border border-red-200">
      <div className="flex items-center justify-center mb-6">
        <svg
          className="w-20 h-20 text-red-400 animate-bounce drop-shadow-lg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 48 48"
        >
          <circle cx="24" cy="24" r="22" strokeWidth="4" stroke="currentColor" fill="#fff"/>
          <path
            d="M24 14v12"
            strokeWidth="4"
            strokeLinecap="round"
            stroke="currentColor"
          />
          <circle cx="24" cy="32" r="2.5" fill="currentColor" />
        </svg>
      </div>
      <h2 className="text-4xl font-extrabold text-red-600 mb-3 tracking-tight drop-shadow">
        Access Denied
      </h2>
      <p className="text-lg text-red-500 mb-6 text-center font-medium">
        Sorry, you do not have permission to view this page.
      </p>
      <div className="flex flex-col gap-3 w-full">
        <button
          className="bg-gradient-to-r from-red-500 to-red-400 hover:from-red-600 hover:to-red-500 text-white font-bold py-3 px-8 rounded-xl transition duration-200 shadow-lg cursor-pointer"
          onClick={() => window.location.href = "/"}
        >
          Go to Home
        </button>
        <button
          className="bg-white hover:bg-red-50 text-red-500 border-2 border-red-300 font-bold py-3 px-8 rounded-xl transition duration-200 shadow-lg cursor-pointer"
          onClick={() => window.location.href = "/contact"}
        >
          Contact Support
        </button>
      </div>
      <div className="mt-8 text-sm text-gray-400 text-center">
        If you believe this is a mistake, please reach out to our support team.
      </div>
    </div>
  );
};

export default AdminPermision;
