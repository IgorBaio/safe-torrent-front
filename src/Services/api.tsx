import axios from "axios";

const baseURL = "https://safe-torrent-1.onrender.com";

const api = axios.create({
  baseURL,
  timeout: 90000,
});

api.interceptors.request.use(
  async (config) => {
    const configNew = { ...config };

    return { ...configNew };
  },
  (error) => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => Promise.reject(error)
);

export default api;
