import axios from "axios"
import { AxiosInstance } from "axios";
import { AxiosRequestConfig } from "axios";


const config: AxiosRequestConfig = {
    baseURL: 'http://localhost:3000/v1/',
};

export const client: AxiosInstance = axios.create(config);