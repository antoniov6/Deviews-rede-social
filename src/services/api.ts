import axios from "axios";

const token = localStorage.getItem("@deviews:token");

const api = axios.create({
  baseURL: "https://deviews.herokuapp.com/",
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;
