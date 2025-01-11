import axios from 'axios'

export const axiosURL = axios.create({
    baseURL:"http://localhost:5001/",
    withCredentials:true,
})