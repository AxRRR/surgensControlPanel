import { client } from "../axiosDefault"

export default function getMembers(){
    return client.get('all_members')
        .then((data) => data.data)
        .catch((error) => console.log(error))
}

export const getAllClans = () => {
    return client.get('clans')
        .then((data) => data.data)
        .catch((error) => console.log(error))
}

export const getAllTop = (max: number) => {
    return client.get(`all_top?max=${max}`)
        .then((data) => data.data)
        .catch((error) => console.log(error))
}