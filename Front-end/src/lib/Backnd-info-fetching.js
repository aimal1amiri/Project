import axios from 'axios'

export const axiosURL = axios.create({
    baseURL:"http://localhost:2000/",
    withCredentials:true,
})