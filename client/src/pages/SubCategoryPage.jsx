import React, { useEffect, useState } from "react";
import UploadSubCategoryModel from "../components/UploadSubCategoryModel";
import AxiosToastError from "../utils/AxiosToastError";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import DisplayTable from "../components/DisplayTable";
import { createColumnHelper } from "@tanstack/react-table";
// import ViewImage from "../components/ViewImage";
// import { LuPencil } from "react-icons/lu";
// import { MdDelete } from "react-icons/md";
// import { HiPencil } from "react-icons/hi";
// import EditSubCategory from "../components/EditSubCategory";
// import CofirmBox from "../components/CofirmBox";
// import toast from "react-hot-toast";

const SubCategoryPage = () => {
  const [openAddSubCategory, setOpenAddSubCategory] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
    const columnHelper = createColumnHelper();

  const fetchSubCategory = async () => {
    try {
      setLoading(true);
      const response = await Axios({
        ...SummaryApi.getSubCategory,
      });
      const { data: responseData } = response;

      if (responseData.success) {
        setData(responseData.data);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubCategory();
  }, []);

  const column = [
    columnHelper.accessor("name", {
      header: "Name",
    }),
    columnHelper.accessor("image", {
      header: "Image",
      cell: ({row})=>{
        console.log("row", row.original.image);
        return (
          <div className="flex items-center justify-center">
            <img
              src={row.original.image}
              alt={row.original.name}
              className="w-8 h-8"
            />
          </div>
        );
      }
    }),

    columnHelper.accessor("category", {
      header: "Category",
    })
  ];

  console.log("subcategory", data);

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

      <div>
        <DisplayTable 
        data={data}
        column={column}
        />
      </div>

      {openAddSubCategory && (
        <UploadSubCategoryModel close={() => setOpenAddSubCategory(false)} />
      )}
    </section>
  );
};

export default SubCategoryPage;
