import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

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
    if (data.password !== data.confirmPassword) {
      toast.error("Password and confirm password must be same");
      return;
    }
    try {
      const response = await Axios({
        ...SummaryApi.register,
        data: data,
      });
      if (response.data.error) {
        toast.error(response.data.message);
      }
      if (response.data.success) {
        toast.success(response.data.message);
        setData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        navigate("/login");
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-white to-pink-100">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-xl mx-auto relative">
        {/* Decorative Circle */}
        <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-tr from-sky-400 to-pink-400 rounded-full opacity-30 z-0"></div>
        {/* Decorative Circle */}
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tr from-pink-400 to-sky-400 rounded-full opacity-20 z-0"></div>

        <div className="relative z-10 flex flex-col items-center mb-8">
          <img
            src="https://img.icons8.com/color/96/food.png"
            alt="Foodies Logo"
            className="mb-2 drop-shadow-lg"
          />
          <h1 className="text-3xl font-extrabold text-sky-500 tracking-wide mb-1">
            Welcome to Foodies
          </h1>
          <p className="text-gray-500 text-lg font-medium">
            Create your account and start your delicious journey!
          </p>
        </div>

        <form className="grid gap-6 mt-2 relative z-10" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <label htmlFor="name" className="font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              autoFocus
              className="bg-blue-50 p-3 border border-sky-200 rounded-xl outline-none focus:border-pink-400 transition-all shadow-sm"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-blue-50 p-3 border border-sky-200 rounded-xl outline-none focus:border-pink-400 transition-all shadow-sm"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="password" className="font-semibold text-gray-700">
              Password
            </label>
            <div className="bg-blue-50 p-3 border border-sky-200 rounded-xl flex items-center focus-within:border-pink-400 transition-all shadow-sm">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full outline-none bg-transparent"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="ml-2 text-sky-400 hover:text-pink-400 transition cursor-pointer"
                tabIndex={-1}
              >
                {showPassword ? <FaRegEye size={22} /> : <FaRegEyeSlash size={22} />}
              </button>
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="confirmPassword" className="font-semibold text-gray-700">
              Confirm Password
            </label>
            <div className="bg-blue-50 p-3 border border-sky-200 rounded-xl flex items-center focus-within:border-pink-400 transition-all shadow-sm">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                className="w-full outline-none bg-transparent"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="ml-2 text-sky-400 hover:text-pink-400 transition cursor-pointer"
                tabIndex={-1}
              >
                {showConfirmPassword ? <FaRegEye size={22} /> : <FaRegEyeSlash size={22} />}
              </button>
            </div>
          </div>

          <button
            disabled={!valideValue}
            className={`w-full py-3 rounded-xl cursor-pointer font-bold text-lg tracking-wide transition-all shadow-lg ${
              valideValue
                ? "bg-gradient-to-r from-sky-400 to-pink-400 text-white hover:scale-105 hover:shadow-2xl"
                : "bg-gray-300 text-gray-400 cursor-not-allowed"
            }`}
          >
            Register
          </button>
        </form>

        <div className="relative z-10 mt-8 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="font-semibold text-pink-400 hover:text-sky-500 transition"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
