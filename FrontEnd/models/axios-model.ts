import { AxiosResponse } from 'axios';

export interface axiosCall<T> {
    call: Promise<AxiosResponse<T>>,
    controller?:AbortController
}