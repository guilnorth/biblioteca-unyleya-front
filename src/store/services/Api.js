import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:80/api/v1/",
  headers: {
    "Content-Type": "application/json"
  }
});

export default Api;
