import { IoIosCloseCircle } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";

const ConfirmBox = ({ cancel, confirm, close }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-neutral-900/80 via-neutral-800/70 to-neutral-700/60 p-4 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 relative border border-neutral-200">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors duration-200"
        >
          <IoIosCloseCircle size={32} className="cursor-pointer" />
        </button>
        <div className="flex flex-col items-center mb-6">
          <div className="bg-red-100 rounded-full p-4 mb-3 shadow">
            <FaTrashAlt size={32} className="text-red-500" />
          </div>
          <h1 className="text-2xl font-extrabold text-gray-800 mb-2 tracking-tight">
            Permanent Delete
          </h1>
          <p className="text-gray-500 text-center text-base font-medium">
            This action cannot be undone. Are you sure you want to permanently
            delete?
          </p>
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={cancel}
            className="px-6 py-2 rounded-lg border border-red-500 text-red-500 bg-white hover:bg-red-500 hover:text-white transition-all duration-200 font-semibold shadow hover:shadow-lg cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={confirm}
            className="px-6 py-2 rounded-lg border border-green-600 text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-200 font-semibold shadow hover:shadow-lg cursor-pointer"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBox;
