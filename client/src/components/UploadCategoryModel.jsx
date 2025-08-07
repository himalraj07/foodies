import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
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

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
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

    if (!file) {
      return;
    }

    const response = await uploadImage(file);
    const { data: ImageResponse } = response;

    setData((preve) => {
      return {
        ...preve,
        image: ImageResponse.data.url,
      };
    });
  };

  return (
    <section className="fixed top-0 bottom-0 left-0  right-0 p-4 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white max-w-4xl w-full p-4 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold">Add New Category</h1>
          <button
            onClick={close}
            className="w-fit block ml-auto cursor-pointer"
          >
            <IoIosCloseCircle size={25} />
          </button>
        </div>

        <form className="grid gap-4 mt-4 " onSubmit={handleSubmit}>
          <div className="grid gap-4 mt-4">
            <label id="categoryName">Name</label>
            <input
              type="text"
              id="categoryName"
              placeholder="Enter category name"
              value={data.name}
              name="name"
              onChange={handleOnChange}
              className="p-2 border border-neutral-400 rounded outline-none focus:border-sky-500 bg-blue-50 "
            />
          </div>
          <div className="grid gap-1">
            <p>Image</p>
            <div className="flex items-center gap-4 flex-col lg:flex-row">
              <div className="border border-dashed bg-blue-50 h-52 w-full lg:w-52 rounded flex items-center justify-center">
                {data.image ? (
                  <img
                    src={data.image}
                    alt="Uploaded"
                    className="h-full w-full object-scale-down"
                  />
                ) : (
                  <p className="text-sm text-neutral-500">No Image</p>
                )}
              </div>
              <label htmlFor="uploadCategoryImage">
                <div
                  className={`
                ${
                  !data.name
                    ? " bg-gray-300 cursor-not-allowed"
                    : " border-blue-500 hover:bg-blue-500 hover:text-white"
                } cursor-pointer border border-neutral-400 px-4 py-2 rounded
                `}
                >
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
            className={`
              ${
                data.name && data.image
                  ? "bg-orange-200 hover:bg-orange-300"
                  : "bg-gray-300"
              }
              py-2 font-semibold rounded-2xl cursor-pointer
            `}
          >
            Add Category
          </button>
        </form>
      </div>
    </section>
  );
};

export default UploadCategoryModel;
