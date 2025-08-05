export const baseURL = "http://localhost:8080";

const SummaryApi = {
  register: {
    url: `${baseURL}/api/user/register`,
    method: "POST",
  },
  login: {
    url: `${baseURL}/api/user/login`,
    method: "POST",
  },
  forgotPassword: {
    url: `${baseURL}/api/user/forgot-password`,
    method: "PUT",
  },
  forgot_password_otp_verification: {
    url: `${baseURL}/api/user/verify-forgot-password-otp`,
    method: "PUT",
  },
  resetPassword: {
    url: `${baseURL}/api/user/reset-password`,
    method: "PUT",
  },
};

export default SummaryApi;
