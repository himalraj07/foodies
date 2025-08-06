import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import UserProfileAvatarEdit from "../components/UserProfileAvatarEdit";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import toast from "react-hot-toast";
import { setUserDetails } from "../store/userSlice";
import fetchUserDetails from "../utils/fetchUserDetails";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [openProfileAvatarEdit, setOpenProfileAvatarEdit] = useState(false);
  const [userData, setUserData] = useState({
    name: user.name || "",
    mobile: user.mobile || "",
    email: user.email || "",
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setUserData({
      name: user.name || "",
      mobile: user.mobile || "",
      email: user.email || "",
    });
  }, [user]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await Axios({
        ...SummaryApi.updateUserDetails,
        data: userData,
      });
      const { data: responseData } = response;
      if (responseData.success) {
        toast.success(responseData.message || "Profile updated successfully!");
        const userData = await fetchUserDetails();
        dispatch(setUserDetails(userData.data));
      } else {
        toast.error(responseData.message || "Failed to update profile.");
      }
    } catch (error) {
      toast.error("Error updating profile!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Profile upload and display image */}
      <div className="w-20 h-20 bg-red-500 flex items-center justify-center rounded-full overflow-hidden drop-shadow-sm">
        {user.avatar ? (
          <img alt={user.name} src={user.avatar} className="w-full h-full" />
        ) : (
          <FaUserCircle size={65} />
        )}
      </div>

      <button
        onClick={() => setOpenProfileAvatarEdit(true)}
        className="text-sm min-w-20 border border-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white px-3 py-1 rounded-full mt-3 cursor-pointer"
      >
        Change Profile
      </button>

      {openProfileAvatarEdit && (
        <UserProfileAvatarEdit close={() => setOpenProfileAvatarEdit(false)} />
      )}

      {/* name, mobile, email, change password */}
      <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
        <div className="grid">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-gray-300 rounded p-2 bg-blue-50 focus-within:border-orange-500 outline-none"
            value={userData.name}
            onChange={handleOnChange}
            name="name"
            required
          />
        </div>
        <div className="grid">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded p-2 bg-blue-50 focus-within:border-orange-500 outline-none"
            value={userData.email}
            onChange={handleOnChange}
            name="email"
            required
          />
        </div>
        <div className="grid">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            id="mobile"
            placeholder="Enter your mobile number"
            className="border border-gray-300 rounded p-2 bg-blue-50 focus-within:border-orange-500 outline-none"
            value={userData.mobile}
            onChange={handleOnChange}
            name="mobile"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200 cursor-pointer"
        >
          {loading ? "Loading..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default Profile;
