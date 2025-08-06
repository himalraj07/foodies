import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
import { updateAvatar } from "../store/userSlice";
import { IoIosCloseCircle } from "react-icons/io";

const UserProfileAvatarEdit = ({ close }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleUploadAvatarImage = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("avatar", file);
    try {
      setLoading(true);
      const response = await Axios({
        ...SummaryApi.uploadAvatar,
        data: formData,
      });
      const { data: responseData } = response;
      dispatch(updateAvatar(responseData.data.avatar));
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="fixed top-0 bottom-0 left-0 right-0 bg-black/50 p-4 flex items-center justify-center z-50">
      <button
        onClick={close}
        className="absolute top-4 right-4 text-white cursor-pointer hover:text-red-500"
      >
        <IoIosCloseCircle size={20} />
      </button>
      <div className="bg-white max-w-sm w-full rounded p-4 shadow-lg flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-red-500 flex items-center justify-center rounded-full overflow-hidden drop-shadow-sm">
          {user.avatar ? (
            <img alt={user.name} src={user.avatar} className="w-full h-full" />
          ) : (
            <FaUserCircle size={65} />
          )}
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="uploadProfile">
            <div className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 cursor-pointer">
              {loading ? (
                <span className="ml-2">Uploading...</span>
              ) : (
                <span className="ml-2">Change Profile</span>
              )}
            </div>
          </label>
          <input
            onChange={handleUploadAvatarImage}
            type="file"
            id="uploadProfile"
            className="hidden"
          />
        </form>
      </div>
    </section>
  );
};

export default UserProfileAvatarEdit;
