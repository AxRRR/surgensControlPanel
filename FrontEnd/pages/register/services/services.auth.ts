import { client } from "../../../axiosDefault";

export const validateTag = ({tag}: { tag: string }) => {
    return client.post('auth/validate_tag', { 'tag': tag } )
        .then((data) => data.data)
        .catch((error) => console.log(error))
}