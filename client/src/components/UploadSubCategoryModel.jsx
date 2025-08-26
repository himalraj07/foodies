import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import uploadImage from "../utils/UploadImage";
import { useSelector } from "react-redux";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import toast from "react-hot-toast";
import AxiosToastError from "../utils/AxiosToastError";
import { useEffect } from "react";

const UploadSubCategoryModel = ({ close }) => {
  const [subCategoryData, setSubCategoryData] = useState({
    name: "",
    image: "",
    category: [],
  });
  const allCategory = useSelector((state) => state.product.allCategory);
  console.log("allCategory sub category page", allCategory);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSubCategoryData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUploadSubCategoryImage = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const response = await uploadImage(file);
    const { data: ImageResponse } = response;

    setSubCategoryData((preve) => {
      return {
        ...preve,
        image: ImageResponse.data.url,
      };
    });
  };

 const handleRemoveCategorySelected = (categoryId) => {
   const index = subCategoryData.category.findIndex(
     (el) => el._id === categoryId
   );
   subCategoryData.category.splice(index, 1);
   setSubCategoryData((preve) => {
     return {
       ...preve,
     };
   });
 };

  console.log("Sub Category Data:", subCategoryData);

  return (
    <section className="fixed top-0 right-0 bottom-0 left-0 bg-neutral-800/70 z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white p-4 rounded-2xl">
        <div className="flex items-center justify-between gap-3">
          <h1 className="font-semibold">Add Sub Category</h1>
          <button onClick={close}>
            <IoIosCloseCircle
              size={25}
              className="text-red-400 hover:text-red-600 cursor-pointer"
            />
          </button>
        </div>

        <form className="my-3 grid gap-3">
          <div className="grid gap-1">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={subCategoryData.name}
              onChange={handleChange}
              className="p-3 bg-blue-50 border outline-none focus-within:border-[#EA6A1C] rounded"
            />
          </div>
          <div className="grid gap-1">
            <p>Image</p>
            <div className="flex flex-col lg:flex-row items-center gap-3  ">
              <div className="border h-36 w-full lg:w-36 bg-blue-50 rounded border-dashed flex items-center justify-center">
                {!subCategoryData.image ? (
                  <p className="text-sm text-neutral-400">No image uploaded</p>
                ) : (
                  <img
                    alt="Sub Category"
                    src={subCategoryData.image}
                    className="w-full h-full object-scale-down"
                  />
                )}
              </div>

              <label htmlFor="uploadSubCategoryImage">
                <div className="px-4 py-1 border border-[#EA6A1C] text-[#EA6A1C] rounded hover:bg-[#EA6A1C]/10 hover:text-neutral-900 cursor-pointer">
                  Upload Image
                </div>

                <input
                  type="file"
                  id="uploadSubCategoryImage"
                  className="hidden"
                  onChange={handleUploadSubCategoryImage}
                />
              </label>
            </div>
          </div>

          <div>
            <label>Select Category</label>
            <div className="border focus-within:border-[#EA6A1C] rounded p-3">
              {/* Display Value */}
              <div className="flex flex-wrap gap-2">
                {subCategoryData.category.map((cat, index) => {
                  return (
                    <p
                      key={cat._id + "selectedValue"}
                      className="bg-white shadow-md px-1 m-1 flex items-center gap-2"
                    >
                      {cat.name}
                      <div
                        className="cursor-pointer"
                        onClick={() => handleRemoveCategorySelected(cat._id)}
                      >
                        <IoIosCloseCircle
                          size={20}
                          className="text-red-400 hover:text-red-600 cursor-pointer"
                        />
                      </div>
                    </p>
                  );
                })}
              </div>

              {/* Select category */}
              <select
                className="w-full p-2 bg-transparent outline-none border"
                onChange={(e) => {
                  const value = e.target.value;
                  const categoryDetails = allCategory.find(
                    (el) => el._id == value
                  );

                  setSubCategoryData((preve) => {
                    return {
                      ...preve,
                      category: [...preve.category, categoryDetails],
                    };
                  });
                }}
              >
                <option value={""} disabled>
                  Select Category
                </option>
                {allCategory.map((category, index) => {
                  return (
                    <option
                      value={category?._id}
                      key={category._id + "subcategory"}
                    >
                      {category?.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UploadSubCategoryModel;
