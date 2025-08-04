import { toast } from "react-hot-toast";

const AxiosToastError = (error) => {
  const message =
    error?.response?.data?.message ||
    error?.message ||
    "An unexpected error occurred.";
  toast.error(message);
  return message;
};

export default AxiosToastError;