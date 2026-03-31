import axios from "axios";

// console.log(process.env.REACT_APP_URL_BACKEND);

const API = axios.create({
  baseURL: process.env.REACT_APP_URL_BACKEND, // || "http://localhost:5000/api",
  headers: {
    "Cache-Control": "public, max-age=31536000",
  },
});

export default API;
