import axios from "axios"
import { AxiosInstance } from "axios";
import { AxiosRequestConfig } from "axios";
import { authCookieStorage } from "./utilities/jwt.utilitties";


const config: AxiosRequestConfig = {
    baseURL: 'http://localhost:3000/v1/',
};

export const client: AxiosInstance = axios.create(config);

client.interceptors.request.use(async(config: any) => {
    const cookie = await authCookieStorage()?.get();

    // Si existe el jwt agregamos a la request
    if(cookie?.status){ 
        config.headers.accessJWT = cookie.data.jwt;
        return config;
    }
    // Si no existe lo seteamos en null
    config.headers.accessJWT = null;
    return config;
    },
        ((error) =>  {
        return Promise.reject(error);
    }
));