
import { client } from "axiosDefault"


export const getProfile = (tag: any) => {
    return client.post(`specific_member?tagname=%23${tag}`
    ).then((response) => response).catch((error) => error)
}