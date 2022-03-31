import { client } from "axiosDefault"


export const LoginUser = (user: any) => {
    return client.post('auth/login', {
        'name_member': user.name_member,
        'password_member': user.password_member,
    }).then((res) => res.data).catch((error) => console.log(error))
}