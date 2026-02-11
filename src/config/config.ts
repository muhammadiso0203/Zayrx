import axios from "axios";
import Cookies from "js-cookie";

export const request = axios.create({
    baseURL: 'http://localhost:3004/api'
})

request.interceptors.request.use((config) => {
    const token = Cookies.get("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

request.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            Cookies.remove("token");
            window.location.replace("/");
        }
        return Promise.reject(error);
    }
);
