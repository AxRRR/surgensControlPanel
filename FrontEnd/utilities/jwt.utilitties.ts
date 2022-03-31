
export const authCookieStorage = () => {
    if (typeof window !== 'undefined') {
        const get = () => {
            const authLocal = localStorage.getItem('authUser');
            // Verificamos primero que exista la cookie.
            if(authLocal === null) return { error: 'No existe la cookie en el localStorage.' }
            // Si existe lo retornamos ya parseado.
            return { jwt: JSON.parse(authLocal) }
        }
        
        const set = (newJWT: string) => {
            return localStorage.setItem('authUser', JSON.stringify(newJWT))
        }
        
        const clear = () => {
            return localStorage.setItem('authUser', JSON.stringify(null));
        }
        
        return { get, set, clear };
    }
}
