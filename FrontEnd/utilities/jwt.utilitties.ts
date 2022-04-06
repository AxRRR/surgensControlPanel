
export const authCookieStorage = () => {
    if (typeof window !== 'undefined') {
        const get = () => {
            const authLocal = localStorage.getItem('authUser');
            // Verificamos primero que exista la cookie.
            if(authLocal === null) return { status: false, error: 'No existe la cookie en el localStorage.' }
            // Si existe lo retornamos ya parseado.
            return { status: true, data: JSON.parse(authLocal) }
        }
        
        const set = (newJWT: string, tag: string, id: string) => {
            return localStorage.setItem('authUser', JSON.stringify({ jwt: newJWT, tag, id }))
        }
        
        const clear = () => {
            return localStorage.setItem('authUser', JSON.stringify(null));
        }
        
        return { get, set, clear };
    }
}
