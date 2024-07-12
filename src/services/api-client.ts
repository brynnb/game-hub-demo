import axios from "axios";

export default axios.create({
  baseURL: "/api",
  params: {
    key: import.meta.env.VITE_API_KEY, // Access the API key from environment variable
  },
});
