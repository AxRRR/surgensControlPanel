import { client } from "axiosDefault"


export const getUser = (id: string) => {
    return client.post('auth/getuser', {
        'id': id
    }).then((res) => res.data).catch((error) => console.log(error))
}