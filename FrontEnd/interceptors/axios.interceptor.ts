// import { authCookieStorage } from "@/utilities/jwt.utilitties";
// import { client } from "axiosDefault";

// client.interceptors.request.use(() => {
//     const cookie = authCookieStorage()?.get();
//     console.log('la cookie del interceptor ', cookie)
//     if(cookie?.status){
//         client.defaults.headers.common['accessJWT'] = cookie.data.jwt;
//     }
//     client.defaults.headers.common['accessJWT'] = '';
//   },((error) =>  {
//     return Promise.reject(error);
//   }));