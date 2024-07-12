import axios from "axios";

export default axios.create({
  // Update the baseURL to use the local proxy endpoint
  baseURL: "/api",
  params: {
    key: "",
  },
});
