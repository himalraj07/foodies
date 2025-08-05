import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
import { Link, useLocation, useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const [data, setData] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();
  const inputRef = useRef([]);
  const location = useLocation();

  useEffect(() => {
    if (!location?.state?.email) {
      navigate("/forgot-password");
    } else {
      toast.success("OTP sent to " + location.state.email);
    }
    // eslint-disable-next-line
  }, []);

  const valideValue = data.every((el) => el);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios({
        ...SummaryApi.forgot_password_otp_verification,
        data: {
          otp: data.join(""),
          email: location?.state?.email,
        },
      });

      if (response.data.error) {
        toast.error(response.data.message);
      }

      if (response.data.success) {
        toast.success(response.data.message);
        setData(["", "", "", "", "", ""]);
        navigate("/reset-password", {
          state: {
            data: response.data,
            email: location?.state?.email,
          },
        });
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  // Helper for focus/keyboard navigation
  const handleInputChange = (e, index) => {
      const value = e.target.value.replace(/[^0-9]/g, "");
      const newData = [...data];
      if (value) {
        newData[index] = value;
        setData(newData);
        if (index < data.length - 1) {
          inputRef.current[index + 1]?.focus();
        }
      } else {
        newData[index] = "";
        setData(newData);
      }
    };
  
    const handleKeyDown = (e, index) => {
      if (e.key === "Backspace") {
        if (data[index]) {
          // Clear current field
          const newData = [...data];
          newData[index] = "";
          setData(newData);
        } else if (index > 0) {
          // Move focus to previous field
          inputRef.current[index - 1]?.focus();
          const newData = [...data];
          newData[index - 1] = "";
          setData(newData);
        }
      }
    };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-blue-50 to-green-200 px-2">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-lg mx-auto border border-green-100">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-green-100 rounded-full p-4 mb-3 shadow">
            <svg
              className="w-10 h-10 text-green-700"
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
              <circle cx="12" cy="12" r="10" stroke="currentColor" />
            </svg>
          </div>
          <h2 className="font-bold text-2xl text-green-800 mb-1">OTP Verification</h2>
          <p className="text-gray-500 text-center text-sm">
            Please enter the 6-digit code sent to <br />
            <span className="font-semibold text-green-700">{location?.state?.email}</span>
          </p>
        </div>
        <form className="grid gap-6 py-4" onSubmit={handleSubmit} autoComplete="off">
          <div className="flex flex-col items-center gap-2">
            <label htmlFor="otp" className="text-gray-700 font-medium mb-2">
              Enter Your OTP
            </label>
            <div className="flex items-center gap-3 justify-center mt-1">
              {data.map((val, index) => (
                <input
                  key={"otp" + index}
                  type="text"
                  id={`otp-${index}`}
                  ref={(ref) => (inputRef.current[index] = ref)}
                  value={val}
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  maxLength={1}
                  autoFocus={index === 0}
                  className="bg-blue-50 w-14 h-14 text-2xl border-2 border-green-200 rounded-lg outline-none focus:border-green-500 text-center font-bold shadow-sm transition-all duration-150"
                  inputMode="numeric"
                  pattern="[0-9]*"
                />
              ))}
            </div>
          </div>

          <button
            disabled={!valideValue}
            className={`w-full py-3 rounded-lg font-semibold tracking-wide text-lg transition-all duration-150 shadow ${
              valideValue
                ? "bg-gradient-to-r from-green-700 to-green-500 hover:from-green-800 hover:to-green-600 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Verify OTP
          </button>
        </form>

        <div className="flex flex-col items-center mt-6">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="font-semibold text-green-700 hover:text-green-900 underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OtpVerification;
