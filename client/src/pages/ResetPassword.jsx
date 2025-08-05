import React, { useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SummaryApi from "../common/SummaryApi";
import toast from "react-hot-toast";
import AxiosToastError from "../utils/AxiosToastError";
import Axios from "../utils/Axios";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const valideValue = Object.values(data).every((el) => el);

  useEffect(() => {
    if (!location?.state?.data?.success) {
      navigate("/");
    }
    if (location?.state?.email) {
      setData((preve) => ({
        ...preve,
        email: location?.state?.email,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => ({
      ...preve,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.newPassword !== data.confirmPassword) {
      toast.error("New password and confirm password must be same.");
      return;
    }
    try {
      const response = await Axios({
        ...SummaryApi.resetPassword,
        data: data,
      });
      if (response.data.error) {
        toast.error(response.data.message);
      }
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
        setData({
          email: "",
          newPassword: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-600 to-green-400 rounded-full shadow-lg">
          <svg
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 24 24"
            className="text-white"
          >
            <path
              d="M12 17a2 2 0 0 0 2-2v-2a2 2 0 1 0-4 0v2a2 2 0 0 0 2 2zm6-6V9a6 6 0 1 0-12 0v2a4 4 0 0 0-2 3.465V17a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-1.535A4 4 0 0 0 18 11zm-8-2a4 4 0 1 1 8 0v2H6V9z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-center text-green-800 mt-16 mb-2">
          Reset Your Password
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Create a strong new password for your account
        </p>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                value={data.newPassword}
                onChange={handleChange}
                placeholder="Enter your new password"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((preve) => !preve)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-600"
                tabIndex={-1}
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your new password"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((preve) => !preve)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-600"
                tabIndex={-1}
              >
                {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
          </div>
          <button
            disabled={!valideValue}
            className={`w-full py-2 rounded-lg font-semibold text-white transition ${
              valideValue
                ? "bg-gradient-to-r from-green-700 to-green-500 hover:from-green-800 hover:to-green-600 shadow-lg"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Change Password
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-500">Remembered your password? </span>
          <Link
            to="/login"
            className="font-semibold text-green-700 hover:text-green-900 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
