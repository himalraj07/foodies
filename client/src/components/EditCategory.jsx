import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from "../utils/UploadImage";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import toast from "react-hot-toast";
import AxiosToastError from "../utils/AxiosToastError";

const EditCategory = ({ close, fetchData, data: CategoryData }) => {
  const [data, setData] = useState({
    _id: CategoryData._id,
    name: CategoryData.name,
    image: CategoryData.image,
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
        ...SummaryApi.updateCategory,
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
    setLoading(true);
    const response = await uploadImage(file);
    const { data: ImageResponse } = response;
    setLoading(false);
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
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-orange-500 mb-1 tracking-wide">
            Edit Category
          </h1>
          <p className="text-gray-500 text-sm">
            Update your category details below
          </p>
        </div>
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
              placeholder="Enter category name"
              value={data.name}
              name="name"
              onChange={handleOnChange}
              className="w-full p-3 border border-orange-200 rounded-xl outline-none focus:border-orange-400 bg-orange-50 transition-all text-gray-700 font-medium"
              autoFocus
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category Image
            </label>
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="border-2 border-dashed border-orange-300 bg-orange-50 h-52 w-full lg:w-52 rounded-xl flex items-center justify-center overflow-hidden shadow-sm">
                {data.image ? (
                  <img
                    src={data.image}
                    alt="Uploaded"
                    className="h-full w-full object-cover rounded-xl transition-all duration-300"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-orange-300">
                    <FaCloudUploadAlt size={40} />
                    <span className="text-sm mt-2">No Image</span>
                  </div>
                )}
              </div>
              <label htmlFor="uploadCategoryImage" className="w-full lg:w-auto">
                <div
                  className={`flex items-center gap-2 justify-center px-5 py-3 rounded-xl font-semibold transition-all duration-200
                    ${
                      !data.name
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-lg hover:scale-105 cursor-pointer"
                    }
                  `}
                >
                  <FaCloudUploadAlt size={20} />
                  {loading ? "Uploading..." : "Upload Image"}
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
            type="submit"
            disabled={!(data.name && data.image) || loading}
            className={`w-full py-3 rounded-2xl font-bold text-lg cursor-pointer transition-all duration-200
              ${
                data.name && data.image && !loading
                  ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-lg hover:scale-105"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }
            `}
          >
            {loading ? "Updating..." : "Update Category"}
          </button>
        </form>
      </div>
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95);}
          to { opacity: 1; transform: scale(1);}
        }
      `}</style>
    </section>
  );
};

export default EditCategory;
