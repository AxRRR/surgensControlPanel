// import { AxiosResponse } from 'axios';
// import { useEffect, useState } from 'react';
// import { axiosCall } from '../models/axios-model';

// const useAxios = () => {
//   const [loading, setLoading] = useState(false);
//   let controller: AbortController;

//   const callEndpoint = async (axiosCall: axiosCall<any>) => {
//     if (axiosCall.controller) controller = axiosCall.controller;
//     setLoading(true);
//     let result = {} as AxiosResponse<any>;
//     try {
//       result = await axiosCall.call;
//     } catch (err: any) {}
//     setLoading(false);
//     return result;
//   };

//   const cancelEndpoint = () => {
//     setLoading(false);
//     controller && controller.abort();
//   };

//   useEffect(() => {
//     return () => {
//       cancelEndpoint();
//     };
//   }, []);

//   return { loading, callEndpoint };
// };

// export default useAxios;
