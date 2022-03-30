import { client } from "../../axiosDefault"

const loginUrl = 'auth/register';

export const register = (name: String, password: String) => {
    return client.post(loginUrl, { name, password })
}