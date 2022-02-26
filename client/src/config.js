import axios from 'axios'

export const axiosInstance = axios.create({
    BASE_URL: process.env.REACT_APP_API_BASE_URL  || "http://localhost:6868/api/"
})
