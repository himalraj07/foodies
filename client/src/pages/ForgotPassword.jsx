import { useState } from "react";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [data, setData] = useState({ email: "" });
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    try {
      const response = await Axios({
        ...SummaryApi.forgotPassword,
        data: data,
      });

      if (response.data.error) {
        toast.error(response.data.message);
      }

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/verification-otp", { state: data });
        setData({ email: "" });
      }
    } catch (error) {
      AxiosToastError(error);
    }
    setLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 px-2">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md mx-auto border border-green-100">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-green-100 rounded-full p-4 mb-2">
            <svg
              className="w-8 h-8 text-green-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                d="M16 12a4 4 0 01-8 0m8 0V8a4 4 0 00-8 0v4m8 0v4a4 4 0 01-8 0v-4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 16v2m0 0h.01M12 18a6 6 0 100-12 6 6 0 000 12z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="font-bold text-2xl text-green-800 mb-1">Forgot Password?</h1>
          <p className="text-gray-500 text-center text-sm">
            Enter your email address and we'll send you an OTP to reset your password.
          </p>
        </div>
        <form className="grid gap-5" onSubmit={handleSubmit} autoComplete="off">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="bg-green-50 border border-green-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 p-3 rounded-lg outline-none transition"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoFocus
              required
            />
          </div>
          <button
            disabled={!valideValue || loading}
            className={`w-full py-3 rounded-lg font-semibold tracking-wide transition-colors duration-200 ${
              valideValue && !loading
                ? "bg-gradient-to-r from-green-700 to-green-500 hover:from-green-800 hover:to-green-600 shadow-lg"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            } text-white flex items-center justify-center`}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
            ) : null}
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-600">Remember your password? </span>
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

export default ForgotPassword;
