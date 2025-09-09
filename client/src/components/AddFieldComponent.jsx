import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

const AddFieldComponent = ({ close, value, onChange, submit }) => {
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 animate-fadeIn">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800 tracking-tight">
            Add New Field
          </h2>
          <button
            onClick={close}
            aria-label="Close"
            className="text-gray-400 hover:text-red-500 transition-colors duration-200 cursor-pointer"
          >
            <IoIosCloseCircle size={28} />
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="fieldName"
          >
            Field Name
          </label>
          <input
            id="fieldName"
            type="text"
            className="block w-full rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 bg-blue-50 px-4 py-2 mb-4 text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none"
            placeholder="Enter field name"
            value={value}
            onChange={onChange}
            autoFocus
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300 cursor-pointer"
          >
            Add Field
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddFieldComponent;
