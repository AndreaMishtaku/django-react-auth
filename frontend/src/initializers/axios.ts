import axios from "axios";

const API_BASE_URL =
  (import.meta as any).env.VITE_API_BASE_URL || "http://localhost:8000/api";

const axiosInit = () => {
  axios.defaults.baseURL = API_BASE_URL;

  axios.interceptors.request.use((request) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  });
};

export default axiosInit;
