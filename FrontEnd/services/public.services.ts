import { client } from "../axiosDefault"

export default function getMembers(){
    return client.get('all_members')
        .then((data) => data.data)
        .catch((error) => console.log(error))
}