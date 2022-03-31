import { client } from "../../../axiosDefault";

export const validateTag = ({tag}: { tag: string }) => {
    return client.post('auth/validate_tag', { 
        'tag': tag 
    }).then((data) => data.data).catch((error) => console.log(error))
}

export const registerUser = (user: any) => {
    return client.post('auth/register', {
        'email_member': user.email_member,
        'name_member': user.name_member,
        'tag_member': user.tag_member,
        'password_member': user.password_member
    }).then((res) => res.data).catch((error) => console.log(error))
}

export const validateCodeEmail = (user: any) => {
    return client.post('auth/confirm_email', {
        'name_member': user.name_member,
        'code': user.code,
    }).then((res) => res.data).catch((error) => console.log(error))
}