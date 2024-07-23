import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  params: {
    key: import.meta.env.VITE_API_KEY, // Access the API key from environment variable
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };
}

export default APIClient;
