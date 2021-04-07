import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://myburger-2f7e4-default-rtdb.firebaseio.com/",
});

export default AxiosInstance;
