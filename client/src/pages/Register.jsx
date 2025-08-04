import { useState } from "react";
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

  const validateValue = Object.values(data).every((el) => el);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await Axios({
        ...SummaryApi.register,
        data: data,
      });

      if (response.data.error) {
        toast.error(response.data.message);
        return;
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
      toast.error("Registration failed");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <div className="bg-white/90 shadow-2xl rounded-3xl p-10 w-full max-w-xl mx-auto border border-blue-100 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 pointer-events-none z-0"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-sky-300 rounded-full opacity-20 pointer-events-none z-0"></div>
        {/* Logo & Welcome */}
        <div className="relative z-10 flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-2">
            <img
              src="https://img.icons8.com/color/96/000000/meal.png"
              alt="Foodies Logo"
              className="w-12 h-12 drop-shadow-lg"
            />
            <span className="text-3xl font-extrabold text-blue-600 tracking-tight drop-shadow-sm">
              Foodies
            </span>
          </div>
          <h2 className="text-xl font-semibold text-gray-700 mb-1">
            Create your account
          </h2>
          <p className="text-gray-500 text-sm">
            Join Foodies and start your delicious journey!
          </p>
        </div>
        {/* Form */}
        <form
          className="grid gap-6 relative z-10"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              autoFocus
              className="w-full bg-blue-50/70 p-3 border border-blue-200 rounded-lg outline-none focus:border-blue-400 transition"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-blue-50/70 p-3 border border-blue-200 rounded-lg outline-none focus:border-blue-400 transition"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full bg-blue-50/70 p-3 border border-blue-200 rounded-lg outline-none focus:border-blue-400 transition pr-12"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              <button
                type="button"
                tabIndex={-1}
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 hover:text-blue-600 transition"
              >
                {showPassword ? <FaRegEye size={20} /> : <FaRegEyeSlash size={20} />}
              </button>
            </div>
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-medium mb-1"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                className="w-full bg-blue-50/70 p-3 border border-blue-200 rounded-lg outline-none focus:border-blue-400 transition pr-12"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
              />
              <button
                type="button"
                tabIndex={-1}
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 hover:text-blue-600 transition"
              >
                {showConfirmPassword ? <FaRegEye size={20} /> : <FaRegEyeSlash size={20} />}
              </button>
            </div>
          </div>
          <button
            disabled={!validateValue}
            className={`w-full py-3 rounded-lg font-bold text-lg shadow-md transition cursor-pointer ${
              validateValue
                ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-white hover:from-orange-400 hover:to-yellow-400 hover:scale-[1.02]"
                : "bg-gray-300 text-gray-400 cursor-not-allowed"
            }`}
          >
            Register
          </button>
        </form>
        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-3 text-gray-400">or</span>
          </div>
        </div>
        {/* Login Link */}
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-blue-500 font-semibold hover:text-orange-500 transition"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
