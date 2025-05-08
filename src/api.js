import axios from "axios";


export const api = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL
})

api.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;

}, (e) => { return Promise.reject(e) })


