import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateValue = data.email && data.password;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios({
        ...SummaryApi.login,
        data: data,
      });

      if (response.data.error) {
        toast.error(response.data.message);
        return;
      }

      if (response.data.success) {
        toast.success(response.data.message);
        setData({
          email: "",
          password: "",
        });
        navigate("/");
      }
    } catch (error) {
      AxiosToastError(error);
      toast.error("Login failed");
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
            Welcome back!
          </h2>
          <p className="text-gray-500 text-sm">
            Login to your Foodies account
          </p>
        </div>
        {/* Login Form */}
        <form
          className="grid gap-7 relative z-10"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-gray-800 font-semibold mb-2 tracking-wide"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              autoFocus
              className="w-full bg-gradient-to-r from-blue-50 via-white to-yellow-50 p-3 border-2 border-blue-200 rounded-xl outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition placeholder:text-gray-400 shadow-sm"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="e.g. john@email.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-800 font-semibold mb-2 tracking-wide"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full bg-gradient-to-r from-blue-50 via-white to-yellow-50 p-3 border-2 border-blue-200 rounded-xl outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition pr-12 placeholder:text-gray-400 shadow-sm"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                tabIndex={-1}
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-400 hover:text-blue-600 transition"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <FaRegEye size={22} />
                ) : (
                  <FaRegEyeSlash size={22} />
                )}
              </button>
            </div>
            <Link
              to={"/forgot-password"}
              className="block ml-auto mt-2 text-sm text-blue-500 hover:text-orange-500 font-medium transition"
            >
              Forgot password?
            </Link>
          </div>
          <button
            disabled={!validateValue}
            className={`w-full py-3 rounded-xl font-bold text-lg shadow-lg transition-all duration-200 cursor-pointer ${
              validateValue
                ? "bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 text-white hover:from-yellow-400 hover:to-orange-400 hover:scale-[1.03] hover:shadow-xl"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <span className="tracking-wider">Sign In</span>
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
        {/* Register Link */}
        <p className="text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to={"/register"}
            className="text-blue-500 font-semibold hover:text-orange-500 transition"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
