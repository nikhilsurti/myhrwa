import axios from "axios";

// =====================
// BASE URL (DEV + PROD)
// =====================
const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api";

// =====================
// AXIOS INSTANCE
// =====================
const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60000,
});

// =====================
// REQUEST INTERCEPTOR
// =====================
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

// =====================
// RESPONSE INTERCEPTOR
// =====================
API.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    // 🔥 token expired or invalid
    if (status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("refresh");

      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default API;