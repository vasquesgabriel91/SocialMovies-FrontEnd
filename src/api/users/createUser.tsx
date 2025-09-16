import axios from "axios";
import { API_URL } from "@env"; 
export const BASE_URL = API_URL;

const api = axios.create({
    baseURL:BASE_URL+`/user`,
    headers: {
        "Content-type":"application/json",
    }
});

export default api;