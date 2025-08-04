import axios from "axios";
import { baseURL } from "../common/SummaryApi";

const Axios = axios.create({
  baseURL: baseURL || "http://localhost:3000", // fallback to localhost if baseURL is undefined
  withCredentials: true,
});

export default Axios;
