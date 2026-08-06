import axios from "axios";

const baseURL =
  import.meta.env.VITE_API_URL ||
  "https://book-shop-engine-backend.onrender.com";

const api = axios.create({
  baseURL,
});

export default api;
