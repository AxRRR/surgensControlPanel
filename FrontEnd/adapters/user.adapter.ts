export interface User {
    name_member: string,
    tag_member: string,
    email_member: string,
    role_member: string
}

export const userAdapter = (user: User, accessToken: string) => {
    return {
        name: user.name_member,
        tag: user.tag_member,
        email: user.email_member,
        role: user.role_member,
        accessToken
    }
};