export const baseURL = "http://localhost:8080";

const SummaryApi = {
  register: {
    url: `${baseURL}/api/user/register`,
    method: "POST",
  }
};

export default SummaryApi;