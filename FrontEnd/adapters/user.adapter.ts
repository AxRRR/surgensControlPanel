export interface User {
    _id: string,
    name_member: string,
    tag_member: string,
    email_member: string,
    role_member: string
}

export const userAdapter = (user: User, accessToken: string) => {
    return {
        id: user._id,
        name: user.name_member,
        tag: user.tag_member,
        email: user.email_member,
        role: user.role_member,
        accessToken
    }
};