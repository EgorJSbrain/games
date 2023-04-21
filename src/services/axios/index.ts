import axios from "axios";
import { setupInterceptorsTo } from "../interceptors/interceptors";

const config = {
  baseURL: import.meta.env.VITE_API_URL,
  data: {},
  timeout: 180000,
};

const instance = axios.create(config);

setupInterceptorsTo(instance);

export default instance;
