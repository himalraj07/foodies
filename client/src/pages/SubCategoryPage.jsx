import React, { useState } from "react";
import UploadSubCategoryModel from "../components/UploadSubCategoryModel";

const SubCategoryPage = () => {
  const [openAddSubCategory, setOpenAddSubCategory] = useState(false);
  return (
    <section>
      <div className="p-2  bg-white shadow-md rounded-lg mb-4 flex items-center justify-between">
        <h2 className="font-semibold">Sub Category</h2>
        <button
          onClick={() => setOpenAddSubCategory(true)}
          className="mt-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md cursor-pointer text-sm"
        >
          Add Sub Category
        </button>
      </div>

      {openAddSubCategory && (
        <UploadSubCategoryModel onClose={() => setOpenAddSubCategory(false)} />
      )}
    </section>
  );
};

export default SubCategoryPage;
