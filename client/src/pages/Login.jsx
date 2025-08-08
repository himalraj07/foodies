import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
import { Link, useNavigate } from "react-router-dom";
import fetchUserDetails from "../utils/fetchUserDetails";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../store/userSlice";
import foodies from "../assets/foodies.png";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const valideValue = Object.values(data).every((el) => el);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios({
        ...SummaryApi.login,
        data: data,
      });

      if (response.data.error) {
        toast.error(response.data.message);
      }

      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("accesstoken", response.data.data.accesstoken);
        localStorage.setItem("refreshToken", response.data.data.refreshToken);

        const userDetails = await fetchUserDetails();
        dispatch(setUserDetails(userDetails.data));

        setData({
          email: "",
          password: "",
        });
        navigate("/");
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-sky-100">
      <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-8 relative">
        {/* Decorative Circle */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-400 opacity-20 rounded-full z-0"></div>
        {/* Logo */}
        <div className="flex flex-col items-center mb-6 z-10 relative">
          <img
            src={foodies}
            alt="Foodies Logo"
            className="w-20 h-20 rounded-full shadow-lg mb-2"
          />
          <h1 className="text-3xl font-extrabold text-orange-500 tracking-wide mb-1">
            Welcome to Foodies
          </h1>
          <p className="text-gray-500 text-sm">
            Sign in to order your favorite food!
          </p>
        </div>
        <form className="grid gap-6 py-4 z-10 relative" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <label htmlFor="email" className="font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-blue-50 p-3 border border-gray-200 rounded-xl outline-none focus:border-orange-400 transition-all duration-200"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="email"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="password" className="font-semibold text-gray-700">
              Password
            </label>
            <div className="bg-blue-50 p-3 border border-gray-200 rounded-xl flex items-center focus-within:border-orange-400 transition-all duration-200">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full outline-none bg-transparent"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Enter your password"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="ml-2 text-xl text-gray-500 hover:text-orange-400 transition cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
            <Link
              to={"/forgot-password"}
              className="block ml-auto text-sm text-sky-400 hover:text-orange-400 transition font-medium"
            >
              Forgot password?
            </Link>
          </div>
          <button
            disabled={!valideValue}
            className={`w-full py-3 rounded-xl font-bold text-lg tracking-wide transition-all duration-200 shadow ${
              valideValue
                ? "bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white cursor-pointer"
                : "bg-gray-300 text-gray-400 cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center z-10 relative">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              to={"/register"}
              className="font-bold text-sky-400 hover:text-orange-400 transition"
            >
              Register
            </Link>
          </p>
        </div>
        {/* Decorative Bottom Right Circle */}
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-sky-400 opacity-20 rounded-full z-0"></div>
      </div>
    </section>
  );
};

export default Login;
