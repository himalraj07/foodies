import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from "../utils/UploadImage";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import toast from "react-hot-toast";
import AxiosToastError from "../utils/AxiosToastError";

const UploadCategoryModel = ({ close, fetchData }) => {
  const [data, setData] = useState({
    name: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await Axios({
        ...SummaryApi.addCategory,
        data: data,
      });
      const { data: responseData } = response;
      if (responseData.success) {
        toast.success(responseData.message);
        close();
        fetchData();
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleUploadCategoryImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const response = await uploadImage(file);
    const { data: ImageResponse } = response;
    setData((prev) => ({
      ...prev,
      image: ImageResponse.data.url,
    }));
  };

  return (
    <section className="fixed inset-0 bg-gradient-to-br from-blue-100 via-white to-orange-100 flex items-center justify-center z-50">
      <div className="bg-white max-w-lg w-full p-8 rounded-3xl shadow-2xl border border-orange-200 relative animate-fadeIn">
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
          aria-label="Close"
        >
          <IoIosCloseCircle size={32} />
        </button>
        <h1 className="text-2xl font-bold text-orange-500 mb-2 text-center tracking-wide">
          Add New Category
        </h1>
        <p className="text-gray-500 text-center mb-6">
          Create a new food category for your menu. Please provide a name and
          image.
        </p>
        <form className="grid gap-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="categoryName"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Category Name
            </label>
            <input
              type="text"
              id="categoryName"
              placeholder="e.g. Pizza, Burger, Drinks"
              value={data.name}
              name="name"
              onChange={handleOnChange}
              className="w-full p-3 border border-orange-200 rounded-xl outline-none focus:border-orange-400 bg-orange-50 transition"
              autoFocus
              maxLength={32}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category Image
            </label>
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="border-2 border-dashed border-orange-300 bg-orange-50 h-52 w-full lg:w-52 rounded-xl flex items-center justify-center overflow-hidden relative">
                {data.image ? (
                  <img
                    src={data.image}
                    alt="Uploaded"
                    className="h-full w-full object-cover rounded-xl shadow"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-orange-300">
                    <FaCloudUploadAlt size={40} />
                    <span className="text-sm mt-2">No Image Uploaded</span>
                  </div>
                )}
              </div>
              <label htmlFor="uploadCategoryImage" className="w-full lg:w-auto">
                <div
                  className={`flex items-center gap-2 justify-center px-6 py-3 rounded-xl font-semibold transition
                    ${
                      !data.name
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-orange-500 text-white hover:bg-orange-600 cursor-pointer shadow"
                    }
                  `}
                >
                  <FaCloudUploadAlt size={20} />
                  Upload Image
                </div>
                <input
                  type="file"
                  id="uploadCategoryImage"
                  accept="image/*"
                  className="hidden"
                  name="image"
                  disabled={!data.name}
                  onChange={handleUploadCategoryImage}
                />
              </label>
            </div>
          </div>
          <button
            disabled={!(data.name && data.image) || loading}
            className={`w-full py-3 font-bold rounded-2xl transition cursor-pointer
              ${
                data.name && data.image && !loading
                  ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:from-orange-500 hover:to-orange-600 shadow-lg"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }
            `}
          >
            {loading ? (
              <span className="animate-pulse">Adding...</span>
            ) : (
              "Add Category"
            )}
          </button>
        </form>
      </div>
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95);}
          to { opacity: 1; transform: scale(1);}
        }
      `}</style>
    </section>
  );
};

export default UploadCategoryModel;
