import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://35.75.72.23/api", // or your API base URL
  withCredentials: true, // This sends cookies with requests
});

axiosInstance.defaults.withCredentials = true;
axiosInstance.defaults.withXSRFToken = true; // Only needed if your backend uses XSRF tokens

export default axiosInstance;
