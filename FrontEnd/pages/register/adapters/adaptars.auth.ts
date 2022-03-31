
export interface User {
    name: string,
    tag: string,
    email: string,
    password: string
}

export const userAdaptar = (user: User) => {
    return {
        name_member: user.name,
        tag_member: user.tag,
        email_member: user.email,
        password_member: user.password
    }
};